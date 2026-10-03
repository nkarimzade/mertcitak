import { useState } from 'react'
import SplitText from './SplitText'
import './Hero.css'

export default function Hero({ onBookConsultation, onWatchStory }) {
  const [headlineComplete, setHeadlineComplete] = useState(false)

  const handleHeadlineComplete = () => {
    setHeadlineComplete(true)
  }

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
        data-reveal="fade"
        data-reveal-delay="4"
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
          <SplitText
            tag="div"
            className="hero-tagline-eyebrow"
            text="ÇANKIRI'NIN YENİ DİŞ KLİNİĞİ"
            textAlign="left"
            delay={20}
            duration={0.8}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 20 }}
            to={{ opacity: 0.95, y: 0 }}
            threshold={0.1}
            rootMargin="-50px"
            play={headlineComplete}
          />

          <SplitText
            tag="h1"
            className="hero-headline"
            text={"Gülüşünüze\nDeğer Katan\nKusursuzluk"}
            style={{ whiteSpace: 'pre-line' }}
            textAlign="left"
            delay={35}
            duration={1.15}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-50px"
            play={true}
            onLetterAnimationComplete={handleHeadlineComplete}
          />

          <SplitText
            tag="p"
            className="hero-description"
            text="Daha sağlıklı ve özgüvenli bir gülüş için ileri dijital teknoloji, uzman hekimlik ve kişiye özel estetik yaklaşım."
            textAlign="left"
            delay={20}
            duration={0.9}
            ease="power3.out"
            splitType="words"
            from={{ opacity: 0, y: 20 }}
            to={{ opacity: 0.92, y: 0 }}
            threshold={0.1}
            rootMargin="-50px"
            play={headlineComplete}
          />

          <div
            className="hero-cta-group"
            style={{
              opacity: headlineComplete ? 1 : 0,
              transform: headlineComplete ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.15s, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.15s',
              pointerEvents: headlineComplete ? 'auto' : 'none'
            }}
          >
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
      <div className="hero-bottom-strip" data-reveal data-reveal-delay="5">
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
