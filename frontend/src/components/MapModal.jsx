import { useState } from 'react'
import './MapModal.css'

export default function MapModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false)

  if (!isOpen) return null

  const googleMapsUrl =
    'https://www.google.com/maps/place/Ikizler+%C4%B0%C5%9F+Merkezi/@40.5986178,33.6163837,17z/data=!3m1!4b1!4m6!3m5!1s0x4083c4830dfa5b21:0x81e363e581d84d03!8m2!3d40.5986178!4d33.6189586!16s%2Fg%2F11b6d05s6d?entry=ttu'
  const iframeSrc =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3029.417206325827!2d33.61638367653712!3d40.59861784454838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4083c4830dfa5b21%3A0x81e363e581d84d03!2sIkizler%20I%C5%9F%20Merkezi!5e0!3m2!1str!2str!4v1790933219175!5m2!1str!2str'
  const fullAddress =
    'Cumhuriyet, Necip Fazıl Kısakürek Sk. İkizler İş Merkezi No:32/6, 18100 Çankırı Merkez/Çankırı'

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(fullAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="luxury-map-modal" onClick={(e) => e.stopPropagation()}>
        {/* Floating Close Button */}
        <button
          className="luxury-modal-close"
          onClick={onClose}
          aria-label="Kapat"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Left Column: Luxury Clinic Identity & Actions */}
        <div className="map-modal-info-panel">
          <div className="info-panel-top">
            <div className="info-badge-row">
              <span className="info-badge-text">MERT ÇITAK DİŞ KLİNİĞİ</span>
            </div>

            <h2 className="info-modal-title">
              Merkezi Konumda,<br />Kolay Ulaşım
            </h2>

            <div className="info-address-card">
              <div className="address-card-header">
                <svg className="pin-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span className="address-label">KLİNİK ADRESİ</span>
              </div>
              <p className="address-text">{fullAddress}</p>

              <button
                type="button"
                className="btn-copy-address"
                onClick={handleCopyAddress}
              >
                {copied ? (
                  <>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#2e7d32" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span style={{ color: '#2e7d32', fontWeight: 600 }}>Adres Kopyalandı!</span>
                  </>
                ) : (
                  <>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                    <span>Adresi Kopyala</span>
                  </>
                )}
              </button>
            </div>

            <div className="info-specs-list">
              <div className="spec-item">
                <svg className="spec-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <div>
                  <div className="spec-title">Çalışma Saatleri</div>
                  <div className="spec-desc">Pazartesi – Cumartesi: 09:00 – 19:00</div>
                </div>
              </div>

              <div className="spec-item">
                <svg className="spec-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <div>
                  <div className="spec-title">Doğrudan İletişim</div>
                  <div className="spec-desc">0545 201 19 18</div>
                </div>
              </div>
            </div>
          </div>

          <div className="info-panel-bottom">
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luxury-route"
            >
              <span>Google Haritalar'da Yol Tarifi Al</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </div>

        {/* Right Column: Full-bleed Edge-to-Edge Map Frame */}
        <div className="map-modal-frame-panel">
          <div className="floating-map-badge">
            <span className="live-pulse"></span>
            <span>İkizler İş Merkezi, Çankırı</span>
          </div>

          <iframe
            title="Mert Çıtak Diş Kliniği Harita Konumu"
            src={iframeSrc}
            className="full-bleed-iframe"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  )
}
