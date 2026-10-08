import { useState, useRef, useEffect } from 'react'
import { FaStar, FaChevronLeft, FaChevronRight, FaArrowRight } from 'react-icons/fa6'
import { FiShield } from 'react-icons/fi'
import './GoogleReviews.css'
import TextReveal from './TextReveal'

// Official Google G Mark SVG
const GoogleGIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path
      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3.03h3.88c2.27-2.09 3.66-5.17 3.66-9.12z"
      fill="#4285F4"
    />
    <path
      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.03c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.13C3.26 21.36 7.33 24 12 24z"
      fill="#34A853"
    />
    <path
      d="M5.28 14.29c-.25-.72-.38-1.49-.38-2.29s.13-1.57.38-2.29V6.58H1.25C.45 8.17 0 9.99 0 12s.45 3.83 1.25 5.42l4.03-3.13z"
      fill="#FBBC05"
    />
    <path
      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.13c.95-2.83 3.6-4.96 6.72-4.96z"
      fill="#EA4335"
    />
  </svg>
)

// Full Google Multi-Color Brand Wordmark
const GoogleWordmark = () => (
  <div className="google-wordmark-text" aria-label="Google">
    <span style={{ color: '#4285F4' }}>G</span>
    <span style={{ color: '#EA4335' }}>o</span>
    <span style={{ color: '#FBBC05' }}>o</span>
    <span style={{ color: '#4285F4' }}>g</span>
    <span style={{ color: '#34A853' }}>l</span>
    <span style={{ color: '#EA4335' }}>e</span>
  </div>
)

const PILE_AVATARS = [
  { initial: 'S', color: '#4285F4' }, // Blue
  { initial: 'A', color: '#EA4335' }, // Red
  { initial: 'E', color: '#FBBC05' }, // Yellow
  { initial: 'M', color: '#34A853' }, // Green
]

const REVIEWS_DATA = [
  {
    id: 1,
    name: 'Selin Demir',
    initial: 'S',
    avatarBg: '#4285F4', // Google Blue
    time: '2 hafta önce',
    rating: 5,
    text: 'İlk defa geldim ve gerçekten çok memnun kaldım. Hem ilgi alaka hem de hizmet kalitesi harikaydı. Özellikle danışman ekibine ve Mert Bey’e çok teşekkür ederim. Kesinlikle tavsiye ederim.',
  },
  {
    id: 2,
    name: 'Ahmet Kaya',
    initial: 'A',
    avatarBg: '#EA4335', // Google Red
    time: '1 ay önce',
    rating: 5,
    text: 'Kliniğe girdiğiniz ilk andan itibaren gösterilen ilgi, randevu saatine tam riayet ve Mert Bey’in açıklayıcı, güven veren yaklaşımı takdire şayan. Tedavim tamamen ağrısız ve konforlu geçti. Herkese tavsiye ederim.',
  },
  {
    id: 3,
    name: 'Ece Yılmaz',
    initial: 'E',
    avatarBg: '#0F9D58', // Google Green
    time: '3 hafta önce',
    rating: 5,
    text: 'Beklentimin çok üzerinde bir deneyim oldu. Çalışanlar son derece ilgili ve samimi. Yıllardır ertelediğim dişçi korkumu burada yendim. İyi ki tercih etmişim, tüm ekibin emeğine sağlık.',
  },
  {
    id: 4,
    name: 'Mustafa Arslan',
    initial: 'M',
    avatarBg: '#F4B400', // Google Amber/Yellow
    time: '1 ay önce',
    rating: 5,
    text: 'Gömülü 20’lik dişim için geldim, operasyon sırasında hiçbir ağrı hissetmedim. Doktor beyin eli inanılmaz hafif. Klinik tertemiz ve son teknoloji cihazlarla donatılmış.',
  },
  {
    id: 5,
    name: 'Zeynep Koç',
    initial: 'Z',
    avatarBg: '#8E24AA', // Purple accent
    time: '2 ay önce',
    rating: 5,
    text: 'Zirkonyum kaplama ve gülüş estetiği sürecim kusursuz tamamlandı. Dişlerimin doğallığına çevremdeki herkes hayran kaldı. Hem kliniğin ferahlığı hem de titiz yaklaşım tam puanı hak ediyor.',
  },
  {
    id: 6,
    name: 'Burak Çetin',
    initial: 'B',
    avatarBg: '#00897B', // Teal accent
    time: '2 ay önce',
    rating: 5,
    text: 'Kanal tedavisi ve dolgu işlemlerim sıfır acı ile tamamlandı. Mert Hoca ve ekibinin güler yüzü, hijyene verilen önem insanı inanılmaz rahatlatıyor. Gönül rahatlığıyla gelebilirsiniz.',
  },
]

export default function GoogleReviews() {
  const scrollRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Auto-slide to the right every 3 seconds, loop back when reaching the end
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      if (!scrollRef.current) return
      const el = scrollRef.current
      const cardStep = 404 // card width (380) + gap (24)

      // If at or near the end, loop smoothly back to start
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 20) {
        el.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        el.scrollBy({ left: cardStep, behavior: 'smooth' })
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [isPaused])

  const handleScroll = () => {
    if (!scrollRef.current) return
    const { scrollLeft, clientWidth } = scrollRef.current
    const index = Math.round(scrollLeft / (clientWidth * 0.35 || 380))
    setActiveIndex(Math.min(Math.max(index, 0), REVIEWS_DATA.length - 1))
  }

  const scroll = (direction) => {
    if (!scrollRef.current) return
    const offset = direction === 'left' ? -404 : 404
    scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' })
  }

  const scrollToCard = (index) => {
    if (!scrollRef.current) return
    const cardWidth = 404
    scrollRef.current.scrollTo({ left: index * cardWidth, behavior: 'smooth' })
    setActiveIndex(index)
  }

  return (
    <section className="apple-google-section" id="reviews">
      <div className="apple-google-container">
        {/* Top Header Row Matching Reference Layout */}
        <div className="apple-header-row">
          {/* Left Column: Eyebrow + Large Title + Subtitle */}
          <div className="apple-header-left">
            <div className="apple-eyebrow">
              <span className="eyebrow-dash">—</span>
              <span className="eyebrow-text">HASTALARIMIZ NE DİYOR?</span>
            </div>

            <TextReveal className="apple-main-headline">
              <span className="headline-bold">Google’da</span>
              <br />
              <span className="headline-muted">bizi nasıl </span>
              <span className="headline-bold">değerlendiriyorlar?</span>
            </TextReveal>

            <p className="apple-subtitle-text" data-reveal data-reveal-delay="2">
              Kliniğimizde tedavi gören hastalarımızın Google Haritalar profilimize bıraktığı bağımsız deneyimler.
            </p>
          </div>

          {/* Right Column: Google Aggregate Rating Hero Card */}
          <div className="apple-google-hero-card" data-reveal data-reveal-delay="1">
            {/* Left side of card: Google Logo + Stars + 5.0 / 5 */}
            <div className="hero-card-left">
              <GoogleWordmark />
              <div className="hero-stars-row" aria-label="5 yıldız">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="apple-g-star" />
                ))}
              </div>
              <div className="hero-score-row">
                <span className="hero-score-num">5.0</span>
                <span className="hero-score-max">/ 5</span>
              </div>
            </div>

            {/* Vertical Divider */}
            <div className="hero-card-divider" />

            {/* Right side of card: Overlapping Colored Letter Avatars + 128+ yorum */}
            <div className="hero-card-right">
              <div className="hero-avatars-pile">
                {PILE_AVATARS.map((av, idx) => (
                  <div
                    key={idx}
                    className="pile-letter-avatar"
                    style={{ backgroundColor: av.color }}
                  >
                    {av.initial}
                  </div>
                ))}
                <span className="pile-count-tag">+125</span>
              </div>

              <span className="hero-platform-label">Google’da</span>
              <strong className="hero-reviews-total">128+ yorum</strong>
              <span className="hero-exp-label">Hastalarımızın gerçek deneyimleri</span>
            </div>
          </div>
        </div>

        {/* Reviews Carousel Stage (Arrows Separated Outside the Cards Div) */}
        <div
          className="apple-carousel-stage"
          data-reveal
          data-reveal-delay="2"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {/* Left Arrow Button (Separated from div) */}
          <button
            type="button"
            className="apple-nav-arrow arrow-left"
            onClick={() => scroll('left')}
            aria-label="Önceki Yorum"
          >
            <FaChevronLeft size={16} />
          </button>

          {/* Cards Viewport Div */}
          <div
            className="apple-reviews-viewport"
            ref={scrollRef}
            onScroll={handleScroll}
          >
            <div className="apple-reviews-track">
              {REVIEWS_DATA.map((rev) => (
                <article key={rev.id} className="apple-review-card">
                  {/* User Row: Colored Letter Avatar + Name + Date + Google G */}
                  <div className="card-author-row">
                    <div
                      className="card-letter-avatar"
                      style={{ backgroundColor: rev.avatarBg }}
                    >
                      <span>{rev.initial}</span>
                    </div>

                    <div className="card-author-meta">
                      <h3 className="card-author-name">{rev.name}</h3>
                      <span className="card-time-ago">{rev.time}</span>
                    </div>

                    <div className="card-g-icon" title="Google Yorumu">
                      <GoogleGIcon size={20} />
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="card-rating-stars">
                    {[...Array(rev.rating)].map((_, i) => (
                      <FaStar key={i} className="card-star" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="card-text-content">{rev.text}</p>
                </article>
              ))}
            </div>
          </div>

          {/* Right Arrow Button (Separated from div) */}
          <button
            type="button"
            className="apple-nav-arrow arrow-right"
            onClick={() => scroll('right')}
            aria-label="Sonraki Yorum"
          >
            <FaChevronRight size={16} />
          </button>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="apple-pagination-dots" data-reveal>
          {REVIEWS_DATA.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`apple-dot ${idx === activeIndex ? 'is-active' : ''}`}
              onClick={() => scrollToCard(idx)}
              aria-label={`Yorum ${idx + 1}`}
            />
          ))}
        </div>

        {/* Bottom Action: Google CTA Dark Capsule + Verified Footnote */}
        <div className="apple-reviews-bottom" data-reveal>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Mert+Çıtak+Diş+Kliniği+Çankırı"
            target="_blank"
            rel="noopener noreferrer"
            className="apple-dark-cta-btn"
          >
            <GoogleGIcon size={18} />
            <span>Google’da tüm yorumları gör</span>
            <FaArrowRight size={13} className="cta-arrow" />
          </a>

          <div className="apple-bottom-verified-line">
            <span className="hairline-left" />
            <div className="verified-badge-inline">
              <FiShield className="verified-shield-icon" />
              <span>Doğrulanmış Google yorumları ile güvenle inceleyin</span>
            </div>
            <span className="hairline-right" />
          </div>

          {/* Left Handwritten Script Accent Matching Reference */}
          <div className="apple-handwritten-signature" aria-hidden="true">
            <span className="signature-text">Önce sağlık, sonra gülüş.</span>
            <svg
              className="signature-brush-line"
              width="130"
              height="12"
              viewBox="0 0 130 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 8.5C36 3.5 88 4 127 8.5"
                stroke="#64748b"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
