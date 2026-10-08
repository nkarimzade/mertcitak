import SimpleSlider from './SimpleSlider'
import TextReveal from './TextReveal'
import { FiArrowRight, FiArrowUpRight, FiMapPin } from 'react-icons/fi'
import './Hero.css'

const items = [
  {
    image: '/slider_1.png',
    alt: 'Kliniğimizin muayene odası',
    title: 'Dt. Mert Çıtak',
    highlight: 'Diş Kliniği',
    description: 'Ağız ve diş sağlığınız için sizi dinleyen, tedavinizi sizinle birlikte planlayan bir yaklaşım.',
    primary: { label: 'Tedavilerimiz', href: '#treatments' },
    secondary: { label: 'Kliniğimizi Tanıyın', href: '#about' },
  },
  {
    image: '/slider_2.png',
    alt: 'Kliniğimizin tedavi alanı',
    title: 'Diş sağlığınıza',
    highlight: 'Özenli yaklaşım',
    description: 'İlk muayeneden tedavi planına, her adımı açıkça konuşuyor; ihtiyaçlarınıza birlikte odaklanıyoruz.',
    primary: { label: 'Tedavileri İnceleyin', href: '#treatments' },
    secondary: { label: 'Hekimlerimiz', href: '#team' },
  },
  {
    image: '/slider_3.png',
    alt: 'Kliniğimizin karşılama alanı',
    title: 'Kliniğimizi',
    highlight: 'Yakından tanıyın',
    description: 'Çankırı merkezde, aydınlık ve sakin bir klinik ortamı. Ekibimizi ve tedavi alanlarımızı keşfedin.',
    primary: { label: 'Kliniği Keşfedin', href: '#gallery' },
    secondary: { label: 'İletişim', href: '#contact' },
  },
]

export default function Hero() {
  return (
    <section className="dental-hero" id="home" aria-labelledby="hero-title">
      <div className="hero-slider-container">
        <SimpleSlider
          items={items}
          autoplay
          autoplayDelay={5000}
          ariaLabel="Kliniğimizden görseller"
          renderContent={(slide, index) => (
            <div className="hero-copy" key={index}>
              <span className="hero-location"><FiMapPin aria-hidden="true" /> Çankırı, İkizler İş Merkezi</span>
              <TextReveal as="h1" id="hero-title">{slide.title}<br /><span>{slide.highlight}</span></TextReveal>
              <p data-reveal data-reveal-delay="3">{slide.description}</p>
              <div className="hero-actions" data-reveal data-reveal-delay="5">
                <a className="hero-primary-link" href={slide.primary.href}>{slide.primary.label} <FiArrowRight aria-hidden="true" /></a>
                <a className="hero-secondary-link" href={slide.secondary.href}>{slide.secondary.label} <FiArrowUpRight aria-hidden="true" /></a>
              </div>
            </div>
          )}
        />
      </div>
    </section>
  )
}
