import { useState } from 'react'
import {
  FiCheck,
  FiStar,
  FiPhone,
  FiCheckCircle,
} from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa6'
import './ContactSection.css'

const serviceOptions = [
  { id: 'implant', label: 'İmplant Tedavisi' },
  { id: 'zirconium', label: 'Zirkonyum & Gülüş Tasarımı' },
  { id: 'aligners', label: 'Şeffaf Plak (Ortodonti)' },
  { id: 'composite', label: 'Estetik Dolgu & Lamina' },
  { id: 'whitening', label: 'Diş Beyazlatma' },
  { id: 'general', label: 'Genel Muayene & Kontrol' },
]

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    comments: '',
    services: ['zirconium'],
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const toggleService = (id) => {
    setFormData((prev) => {
      const exists = prev.services.includes(id)
      return {
        ...prev,
        services: exists
          ? prev.services.filter((s) => s !== id)
          : [...prev.services, id],
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.firstName || !formData.phone) return

    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 800)
  }

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      comments: '',
      services: ['zirconium'],
    })
    setIsSubmitted(false)
  }

  return (
    <section className="untitled-contact-section" id="contact">
      {/* Signature Scalloped Organic Corner ClipPath (Matching Reference Screenshot) */}
      <svg width="0" height="0" style={{ position: 'absolute', pointerEvents: 'none' }} aria-hidden="true">
        <defs>
          <clipPath id="untitledScallopClip" clipPathUnits="objectBoundingBox">
            <path d="M 0.18,0 
                     L 0.92,0 
                     C 0.965,0 1,0.025 1,0.06 
                     L 1,0.88 
                     C 1,0.93 0.96,0.95 0.92,0.95 
                     C 0.88,0.95 0.86,1 0.82,1 
                     L 0.08,1 
                     C 0.035,1 0,0.975 0,0.94 
                     L 0,0.12 
                     C 0,0.07 0.04,0.05 0.08,0.05 
                     C 0.12,0.05 0.14,0 0.18,0 
                     Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="untitled-contact-wrapper">
        <div className="untitled-contact-card">
          {/* ================= LEFT COLUMN: FORM ================= */}
          <div className="untitled-form-col">
            {/* Top Brand Logo Mark (Matching Reference) */}
            <div className="untitled-brand-mark">
              <div className="brand-star-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z"
                    fill="#0f172a"
                  />
                </svg>
              </div>
              <span className="brand-logo-text">Dt. Mert Çıtak</span>
            </div>

            {/* Main Headline */}
            <h2 className="untitled-form-title">
              Hayalinizdeki estetik ve sağlıklı gülüş için ilk adımı atın
            </h2>

            {isSubmitted ? (
              <div className="untitled-success-state">
                <div className="untitled-success-badge">
                  <FiCheckCircle size={38} />
                </div>
                <h3 className="untitled-success-title">Mesajınız İletildi!</h3>
                <p className="untitled-success-desc">
                  Teşekkürler Sayın <strong>{formData.firstName} {formData.lastName}</strong>. Ekibimiz{' '}
                  <strong>{formData.phone}</strong> numaranızdan sizinle en kısa sürede iletişime geçecektir.
                </p>
                <div className="untitled-success-btns">
                  <a
                    href="https://wa.me/905452011918?text=Merhaba,%20kliniğiniz%20hakkında%20bilgi%20almak%20istiyorum."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="untitled-wa-direct-btn"
                  >
                    <FaWhatsapp size={18} /> WhatsApp ile Hemen Yazın
                  </a>
                  <button type="button" onClick={handleReset} className="untitled-reset-btn">
                    Yeni Mesaj Gönder
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="untitled-form-body">
                {/* Row 1: Full name (First name | Last name) */}
                <div className="untitled-row-2col">
                  <div className="untitled-field">
                    <label className="untitled-label" htmlFor="firstName">
                      Adınız
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      name="firstName"
                      required
                      placeholder="Adınız"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="untitled-input"
                    />
                  </div>
                  <div className="untitled-field">
                    <label className="untitled-label" htmlFor="lastName">
                      Soyadınız
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      name="lastName"
                      placeholder="Soyadınız"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="untitled-input"
                    />
                  </div>
                </div>

                {/* Row 2: Email */}
                <div className="untitled-field">
                  <label className="untitled-label" htmlFor="email">
                    E-posta Adresi
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="ornek@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="untitled-input"
                  />
                </div>

                {/* Row 3: Phone number with TR country prefix */}
                <div className="untitled-field">
                  <label className="untitled-label" htmlFor="phone">
                    Telefon Numarası
                  </label>
                  <div className="untitled-phone-input-wrap">
                    <div className="untitled-country-prefix">
                      <span>TR</span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      required
                      placeholder="+90 (5XX) XXX-XXXX"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="untitled-input untitled-phone-input"
                    />
                  </div>
                </div>

                {/* Row 4: Comments */}
                <div className="untitled-field">
                  <label className="untitled-label" htmlFor="comments">
                    Şikayetiniz veya Notunuz
                  </label>
                  <textarea
                    id="comments"
                    name="comments"
                    rows="3"
                    placeholder="Nasıl bir tedavi düşünüyorsunuz veya sormak istediğiniz sorular..."
                    value={formData.comments}
                    onChange={handleInputChange}
                    className="untitled-textarea"
                  />
                </div>

                {/* Row 5: Services (Checkboxes in 2 Columns) */}
                <div className="untitled-field">
                  <label className="untitled-label">İlgilendiğiniz Tedaviler</label>
                  <div className="untitled-services-grid">
                    {serviceOptions.map((item) => {
                      const checked = formData.services.includes(item.id)
                      return (
                        <label
                          key={item.id}
                          className={`untitled-checkbox-item ${checked ? 'is-checked' : ''}`}
                          onClick={() => toggleService(item.id)}
                        >
                          <div className={`untitled-custom-checkbox ${checked ? 'checked' : ''}`}>
                            {checked && <FiCheck size={13} strokeWidth={3} />}
                          </div>
                          <span className="untitled-checkbox-label">{item.label}</span>
                        </label>
                      )
                    })}
                  </div>
                </div>

                {/* Main Action Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="untitled-submit-btn"
                >
                  {isSubmitting ? 'Gönderiliyor...' : 'Mesajı Gönder'}
                </button>

                {/* Foot Direct Contact Note */}
                <div className="untitled-foot-note">
                  <span>Doğrudan aramak mı istersiniz?</span>{' '}
                  <a href="tel:+905452011918" className="untitled-phone-link">
                    0545 201 19 18
                  </a>
                </div>
              </form>
            )}
          </div>

          {/* ================= RIGHT COLUMN: SCALLOPED PHOTO CARD ================= */}
          <div className="untitled-photo-col">
            <div className="untitled-photo-frame">
              {/* High-Resolution Clinic Lifestyle Showcase Image */}
              <img
                src="/contact_showcase.webp"
                alt="Dt. Mert Çıtak Klinik ve Hasta Görüşmesi"
                className="untitled-showcase-img"
              />

              {/* Gentle gradient scrim at bottom */}
              <div className="untitled-photo-scrim" />

              {/* Bottom Editorial Content */}
              <div className="untitled-photo-bottom-content">
                {/* Italic Serif Editorial Tagline */}
                <p className="untitled-editorial-quote">
                  Sağlıklı, doğal ve özgüven dolu bir gülüş için buradayız.
                </p>

                {/* 2 Floating Glass Feature Pills (Matching Reference Screenshot) */}
                <div className="untitled-glass-pills-row">
                  <div className="untitled-glass-pill">
                    <div className="glass-pill-icon">
                      <FiStar size={16} />
                    </div>
                    <div className="glass-pill-text">
                      <strong>3D Dijital Tarama</strong>
                      <span>Ağrısız & Hızlı Tedavi</span>
                    </div>
                  </div>

                  <div className="untitled-glass-pill">
                    <div className="glass-pill-icon">
                      <FiPhone size={15} />
                    </div>
                    <div className="glass-pill-text">
                      <strong>Kişiye Özel Tasarım</strong>
                      <span>Doğal Gülüş Estetiği</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Minimal Footer */}
        <div className="untitled-bottom-footer">
          <span>© {new Date().getFullYear()} Dt. Mert Çıtak Diş Kliniği. Tüm hakları saklıdır.</span>
          <div className="footer-links-row">
            <a href="tel:+905452011918">0545 201 19 18</a>
            <span>•</span>
            <a href="https://wa.me/905452011918" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
            <span>•</span>
            <a href="#about">Hakkımızda</a>
          </div>
        </div>
      </div>
    </section>
  )
}
