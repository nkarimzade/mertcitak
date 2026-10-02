import './Hero.css'

export default function Hero({ onBookConsultation, onWatchStory }) {
  return (
    <section className="hero-section" id="home">
      {/* Background Graphic Layer */}
      <div
        className="hero-bg"
        role="img"
        aria-label="Mert Çıtak Diş Kliniği 3D İmplant görsel arka planı"
      >
        {/* Cloud Atmosphere Effect: Full Bottom Sweep from Right to Far Left */}
        <div className="hero-cloud-flow" aria-hidden="true">
          <div className="cloud-puff cloud-puff-floor"></div>
          <div className="cloud-puff cloud-puff-right"></div>
          <div className="cloud-puff cloud-puff-mid"></div>
          <div className="cloud-puff cloud-puff-center"></div>
          <div className="cloud-puff cloud-puff-left"></div>
          <div className="cloud-puff cloud-puff-far-left"></div>
          <div className="cloud-puff cloud-puff-ambient"></div>
        </div>
      </div>

      {/* Left Scroll Indicator */}
      <div
        className="hero-scroll-indicator"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        style={{ cursor: 'pointer' }}
        title="Kliniğimizi Keşfedin"
      >
        <span className="scroll-text">KAYDIR</span>
        <div className="scroll-line"></div>
      </div>

      {/* Main Content Area */}
      <div className="hero-main-container">
        {/* Left Column: Headline and CTAs */}
        <div className="hero-left-column">
          <div className="hero-tagline-eyebrow">
            ÇANKIRI'NIN YENİ DİŞ KLİNİĞİ
          </div>

          <h1 className="hero-headline">
            Gülüşünüze<br />
            Değer Katan<br />
            Kusursuzluk
          </h1>

          <p className="hero-description">
            Daha sağlıklı ve özgüvenli bir gülüş için ileri dijital teknoloji, uzman hekimlik ve kişiye özel estetik yaklaşım.
          </p>

          <div className="hero-cta-group">
            <button
              type="button"
              className="btn-watch-story"
              onClick={onWatchStory}
            >
              <span className="play-icon-circle">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </span>
              <span className="watch-story-text">Hikayemizi İzleyin</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Information Strip (Slider removed) */}
      <div className="hero-bottom-strip">
        <div className="bottom-metrics">
          <span>Modern Diş Hekimliği</span>
          <span className="separator">/</span>
          <span>İleri Teknoloji</span>
          <span className="separator">/</span>
          <span>Kuruluş 2026</span>
        </div>
      </div>
    </section>
  )
}
