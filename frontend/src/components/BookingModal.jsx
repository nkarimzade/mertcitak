import { FiPhone, FiX } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa6'
import './BookingModal.css'

export default function BookingModal({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className="simple-modal-backdrop" onClick={onClose}>
      <div className="simple-modal-box" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="simple-modal-close" onClick={onClose} aria-label="Kapat">
          <FiX size={17} />
        </button>

        {/* Title */}
        <div className="simple-modal-head">
          <h3 className="simple-modal-title">Randevu & Danışma</h3>
          <span className="simple-modal-sub">Özel Mert Çıtak Diş Kliniği</span>
        </div>

        {/* Side-by-side Minimal Action Rows */}
        <div className="simple-modal-links side-by-side">
          <a
            href="https://wa.me/905452011918?text=Merhaba,%20klini%C4%9Finiz%20hakk%C4%B1nda%20bilgi%20ve%20randevu%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="simple-modal-item"
          >
            <div className="simple-item-icon-wrap wa-wrap">
              <FaWhatsapp size={18} />
            </div>
            <div className="simple-item-info">
              <span className="simple-item-label">WhatsApp Hattı</span>
              <strong className="simple-item-value">0545 201 19 18</strong>
            </div>
          </a>

          <a href="tel:+905452011918" className="simple-modal-item">
            <div className="simple-item-icon-wrap phone-wrap">
              <FiPhone size={16} />
            </div>
            <div className="simple-item-info">
              <span className="simple-item-label">Telefonla Arayın</span>
              <strong className="simple-item-value">0545 201 19 18</strong>
            </div>
          </a>
        </div>

        {/* Quiet Meta Line */}
        <div className="simple-modal-foot">
          <span>İkizler İş Merkezi, Çankırı</span>
          <span>•</span>
          <span>Pzt – Cmt: 09:00 – 19:00</span>
        </div>
      </div>
    </div>
  )
}
