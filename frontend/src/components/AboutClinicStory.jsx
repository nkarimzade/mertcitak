import { useState } from 'react'
import { FiArrowUpRight, FiPlus, FiMinus, FiMapPin } from 'react-icons/fi'
import './AboutClinicStory.css'
import TextReveal from './TextReveal'

export const clinicStoryChapters = [
  {
    id: '01',
    label: 'İLK MUAYENE',
    sublabel: 'Röntgen ve Tedavi Planı',
    headline: 'Röntgeniniz çekilir,\ntedavi sırası konuşulur.',
    description: 'Kliniğimize geldiğinizde önce detaylı ağız muayeneniz yapılır. Hangi dişin dolguya, kaplamaya ya da çekime ihtiyacı olduğu ekranda gösterilir; işlem sırası ve süresi sizinle netleştirilir.',
  },
  {
    id: '02',
    label: '3D TARAMA',
    sublabel: 'Ölçü Kaşığı Olmadan Tarama',
    headline: 'Bulantı yapmayan\ndijital kamera ölçüsü.',
    description: 'Ağzınıza macun doldurulan geleneksel ölçü kaşıklarını kullanmıyoruz. Küçük bir optik tarayıcıyla dişlerinizin 3 boyutlu modeli birkaç dakikada bilgisayara aktarılır.',
  },
  {
    id: '03',
    label: 'AĞRISIZ TEDAVİ',
    sublabel: 'Korkusuz ve Sakin Süreç',
    headline: 'İğne hissini azaltan\nhassas anestezi.',
    description: 'Diş hekimi korkusu yaşayan hastalarımız için her adımı önceden anlatıyoruz. Anestezi tam etkisini göstermeden işleme başlamıyor, kendinizi hazır hissettiğiniz tempoda ilerliyoruz.',
  },
  {
    id: '04',
    label: 'KALICI SONUÇ',
    sublabel: 'Çiğneme ve Konuşma Rahatlığı',
    headline: 'Hem rahat çiğneme,\nhem doğal görünüm.',
    description: 'Yapılan kaplama ve dolguların sadece güzel görünmesini değil, yemek yerken kendi dişiniz gibi rahat hissettirmesini sağlıyoruz. Tedavi sonrası bakım önerileriyle diş sağlığınızı takip ediyoruz.',
  },
]

export default function AboutClinicStory() {
  const [openChapter, setOpenChapter] = useState('01')

  return (
    <section className="about-clinic-section" id="about" aria-labelledby="about-clinic-title">
      <div className="about-clinic-inner">
        <div className="about-clinic-heading">
          <div>
            <span className="about-clinic-kicker">DT. MERT ÇITAK DİŞ KLİNİĞİ</span>
            <TextReveal id="about-clinic-title">Hakkımızda<span>.</span></TextReveal>
          </div>
          <a href="#contact" className="about-clinic-contact">Kliniğimizle tanışın <FiArrowUpRight aria-hidden="true" /></a>
        </div>
        <div className="about-clinic-layout">
          <figure className="about-clinic-photo">
            <div className="about-clinic-photo-frame">
              <img src="/gallery/photo6.webp" alt="Dt. Mert Çıtak Diş Kliniği'nin aydınlık muayene ve tedavi odası" width="900" height="1600" loading="lazy" decoding="async" />
            </div>
            <figcaption><span><FiMapPin aria-hidden="true" /> İkizler İş Merkezi, Çankırı</span><span>Kliniğimiz</span></figcaption>
          </figure>
          <div className="about-clinic-copy">
            <div className="about-clinic-intro">
              <span className="about-clinic-kicker">SİZİ DİNLEYEREK BAŞLIYORUZ</span>
              <TextReveal as="h3">Şeffaf planlama.<br />Özenli bir yaklaşım.</TextReveal>
              <p data-reveal data-reveal-delay="2">Çankırı merkezdeki kliniğimizde, tedavinizin her adımını ilk muayeneden itibaren sizinle açıkça paylaşıyoruz.</p>
            </div>
            <div className="about-clinic-chapters">
              {clinicStoryChapters.map((chapter) => {
                const isOpen = openChapter === chapter.id
                return (
                  <div className={`about-clinic-chapter${isOpen ? ' is-open' : ''}`} key={chapter.id}>
                    <h4>
                      <button type="button" id={`about-chapter-button-${chapter.id}`} aria-expanded={isOpen}
                        aria-controls={`about-chapter-content-${chapter.id}`}
                        onClick={() => setOpenChapter(isOpen ? null : chapter.id)}>
                        <span className="about-clinic-chapter-number" aria-hidden="true">{chapter.id}</span>
                        <span className="about-clinic-chapter-label">{chapter.sublabel}</span>
                        {isOpen ? <FiMinus aria-hidden="true" /> : <FiPlus aria-hidden="true" />}
                      </button>
                    </h4>
                    <div className="about-clinic-chapter-content" id={`about-chapter-content-${chapter.id}`}
                      role="region" aria-labelledby={`about-chapter-button-${chapter.id}`} hidden={!isOpen}>
                      <p className="about-clinic-chapter-headline">{chapter.headline.replace('\n', ' ')}</p>
                      <p>{chapter.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
