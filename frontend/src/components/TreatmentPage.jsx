import { useEffect } from 'react'
import { FiArrowLeft, FiArrowUpRight, FiPhone, FiPlus } from 'react-icons/fi'
import { treatments } from '../data/treatments'
import { treatmentDetails, treatmentSources } from '../data/treatmentDetails'
import TextReveal from './TextReveal'
import './TreatmentPage.css'

function SourceLinks({ sources }) {
  return (
    <div className="treatment-source-links">
      <span>Kaynak:</span>
      {sources.map((key) => <a key={key} href={treatmentSources[key].url} target="_blank" rel="noopener noreferrer">{treatmentSources[key].label}<FiArrowUpRight aria-hidden="true" /></a>)}
    </div>
  )
}

export default function TreatmentPage({ treatment }) {
  useEffect(() => {
    const previousTitle = document.title
    document.title = `${treatment?.title || 'Tedavi bulunamadı'} | Dt. Mert Çıtak Diş Kliniği`
    return () => { document.title = previousTitle }
  }, [treatment])

  if (!treatment) return (
    <main className="treatment-page">
      <h1>Tedavi bulunamadı</h1>
      <a className="treatment-page-back" href="/#treatments"><FiArrowLeft aria-hidden="true" />Tedavilerimize dön</a>
    </main>
  )

  const details = treatmentDetails[treatment.slug]

  return (
    <main className="treatment-page" id="treatment-main">
      <nav className="treatment-page-breadcrumb" aria-label="Sayfa yolu">
        <a href="/">Ana sayfa</a><span aria-hidden="true">/</span><a href="/#treatments">Tedavilerimiz</a><span aria-hidden="true">/</span><span aria-current="page">{treatment.title}</span>
      </nav>
      <div className="treatment-page-heading">
        <span className="treatment-page-kicker">DT. MERT ÇITAK DİŞ KLİNİĞİ</span>
        <TextReveal as="h1">{treatment.title}</TextReveal>
        <p data-reveal data-reveal-delay="2">{treatment.description}</p>
      </div>
      <figure className="treatment-page-visual">
        <img src={treatment.image} alt={treatment.alt} width="1200" height="960" fetchPriority="high" />
        <figcaption>Temsili görsel</figcaption>
      </figure>
      <div className="treatment-page-content">
        <article className="treatment-page-article" aria-label={`${treatment.title} genel bilgileri`}>
          <div className="treatment-information-note">
            <p>Bu içerik genel bilgilendirme amaçlıdır; tanı veya kişisel tedavi önerisi değildir. Size uygun yöntem, uygulamanın kapsamı ve süresi diş hekimi muayenesinde belirlenir.</p>
            <span>Kaynak kontrolü: 8 Ekim 2026</span>
          </div>
          {details.sections.map((section) => (
            <section className="treatment-information-section" id={section.id} key={section.id} aria-labelledby={`heading-${section.id}`}>
              <TextReveal id={`heading-${section.id}`}>{section.title}</TextReveal>
              {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
              <SourceLinks sources={section.sources} />
            </section>
          ))}
          <section className="treatment-information-section treatment-faq" id="sorular" aria-labelledby="treatment-faq-title">
            <TextReveal id="treatment-faq-title">Sık sorulan sorular</TextReveal>
            {details.faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}<FiPlus aria-hidden="true" /></summary>
                <p>{faq.answer}</p>
                <SourceLinks sources={faq.sources} />
              </details>
            ))}
          </section>
          <section className="treatment-information-contact" aria-labelledby="treatment-contact-title">
            <h2 id="treatment-contact-title">Sorularınızı birlikte konuşalım.</h2>
            <p>Tedavi seçenekleri hakkında bilgi almak için kliniğimizle iletişime geçebilirsiniz.</p>
            <a className="treatment-page-call" href="tel:+905452011918"><FiPhone aria-hidden="true" />0545 201 19 18<FiArrowUpRight aria-hidden="true" /></a>
          </section>
        </article>
        <aside className="treatment-page-sidebar">
          <nav className="treatment-page-contents" aria-labelledby="treatment-contents-title">
            <h2 id="treatment-contents-title">Bu sayfada</h2>
            {details.sections.map((section, index) => <a href={`#${section.id}`} key={section.id}><span aria-hidden="true">0{index + 1}</span>{section.title}</a>)}
            <a href="#sorular"><span aria-hidden="true">05</span>Sık sorulan sorular</a>
          </nav>
          <nav className="treatment-page-other" aria-labelledby="other-treatments-title">
            <h2 id="other-treatments-title">Diğer tedavilerimiz</h2>
            {treatments.filter((item) => item.slug !== treatment.slug).map((item) => (
              <a key={item.slug} href={`/tedavilerimiz/${item.slug}`}>{item.title}<FiArrowUpRight aria-hidden="true" /></a>
            ))}
          </nav>
        </aside>
      </div>
      <a className="treatment-page-back" href="/#treatments"><FiArrowLeft aria-hidden="true" />Tüm tedavilere dön</a>
    </main>
  )
}
