import SplitText from './SplitText'
import './Hero.css'

export default function Hero({ onBookConsultation, onWatchStory }) {
  const topSlats = [
    'İleri Diş Hekimliği',
    'Yüksek Kalite Ekipman & 3D Tarama',
    'Uzman ve Samimi Kadro',
  ]

  return (
    <section className="dental-hero" id="home">
      {/* Tek ve Ana Hero Görseli: En arkada yer alır (z-index: 1) */}
      <div className="dental-hero-bg-layer" aria-hidden="true">
        <img
          src="/home/hero.png"
          alt="Mert Çıtak Diş Kliniği Estetik Gülüş"
          className="dental-bg-full-img"
        />
      </div>

      <div className="dental-hero-container">

        {/* 1. Üst Bilgi Şeritleri */}
        <div className="dental-hero-slats-wrap" role="list">
          <div className="dental-slat-gap-cover top-cover" aria-hidden="true" />

          <div className="dental-hero-slat" role="listitem">
            <span className="dental-slat-label">Tedavi Öncesi Dijital Gülüş Planı</span>
          </div>

          <div className="dental-slat-gap-cover" aria-hidden="true" />

          <div className="dental-hero-slat" role="listitem">
            <span className="dental-slat-label">Ölçü Kaşığı Olmadan 3D Ağız Taraması</span>
          </div>

          <div className="dental-slat-gap-cover" aria-hidden="true" />

          <div className="dental-hero-slat" role="listitem">
            <span className="dental-slat-label">Ağrısız Anestezi ve Birebir Hekim İlgisi</span>
          </div>

          <div className="dental-slat-gap-cover bottom-cover" aria-hidden="true" />
        </div>

        {/* 2. Ana Asimetrik Hero Kartı */}
        <div className="dental-hero-bento">

          {/* Sol Kolon: Beyaz Zeminli Alan & Devasa Tipografi */}
          <div className="dental-bento-left">
            <div className="dental-meta-top">
              <SplitText
                tag="p"
                className="dental-lead-statement"
                text="Eksik dişleriniz için implant, kırık ve renk sorunları için zirkonyum kaplama uyguluyoruz. Tedavi adımlarını ve süresini ilk muayenede sizinle birlikte planlıyoruz."
                textAlign="left"
                delay={18}
                duration={0.85}
                ease="power3.out"
                splitType="words"
                from={{ opacity: 0, y: 18 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.05}
                rootMargin="0px"
                play={true}
              />
            </div>

            <div className="dental-title-group">
              <SplitText
                tag="span"
                className="dental-eyebrow-tag"
                text="MERT ÇITAK • ÇANKIRI DİŞ SAĞLIĞI VE TEDAVİSİ"
                textAlign="left"
                delay={20}
                duration={0.8}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 15 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.05}
                rootMargin="0px"
                play={true}
              />

              <SplitText
                tag="h1"
                className="dental-monumental-title"
                text={"Sağlıklı Dişler ve\nRahat Gülüşler"}
                style={{ whiteSpace: 'pre-line' }}
                textAlign="left"
                delay={30}
                duration={1.1}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 35 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.05}
                rootMargin="0px"
                play={true}
              />

            </div>
          </div>

          {/* Sağ Kolon: Şeffaf Zemin (Tek ana hero görseli doğrudan görünür) */}
          <div className="dental-bento-right">
            <div className="dental-right-editorial">
              <SplitText
                tag="h2"
                className="dental-statement-quote"
                text={"Kendi dişiniz gibi\nrahat çiğneyin."}
                style={{ whiteSpace: 'pre-line' }}
                textAlign="right"
                delay={30}
                duration={1.0}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 25 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.05}
                rootMargin="0px"
                play={true}
              />

              <div className="dental-actions-cluster">
                <button
                  type="button"
                  className="btn-dental-watch-story"
                  onClick={onWatchStory}
                  id="hero-video-btn"
                >
                  <span className="dental-play-circle" aria-hidden="true">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </span>
                  <span>Kliniğimizi Keşfedin</span>
                </button>
              </div>
            </div>
          </div>

        </div>


      </div>
    </section>
  )
}
