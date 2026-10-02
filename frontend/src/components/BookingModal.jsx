import { useState } from 'react'
import './BookingModal.css'

export default function BookingModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    treatment: 'implantology',
    date: '',
    notes: '',
  })

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      onClose()
    }, 2200)
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Kapat">
          ✕
        </button>

        {!submitted ? (
          <>
            <div className="modal-header">
              <span className="modal-badge">MERT ÇITAK KLİNİK</span>
              <h2 className="modal-title">Bizimle İletişime Geçin</h2>
              <p className="modal-subtitle">
                Randevu, tedavi planı veya danışmanlık almak için formu iletebilirsiniz.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="booking-form">
              <div className="form-group">
                <label>Ad Soyad</label>
                <input
                  type="text"
                  required
                  placeholder="Örn: Ahmet Yılmaz"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Telefon Numarası</label>
                  <input
                    type="tel"
                    required
                    placeholder="0545 201 19 18"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>İlgilendiğiniz Tedavi</label>
                  <select
                    value={formData.treatment}
                    onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                  >
                    <option value="implantology">İmplantoloji</option>
                    <option value="aesthetic">Estetik Diş Hekimliği</option>
                    <option value="general">Genel Diş Tedavisi</option>
                    <option value="orthodontics">Ortodonti & Şeffaf Plak</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Tercih Edilen Tarih</label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                />
              </div>

              <button type="submit" className="modal-submit-btn">
                <span>İletişim Talebini Gönder</span>
                <span className="btn-arrow">→</span>
              </button>

              <a
                href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x4083c58fb28f72b9:0xdcd4977c3202922f?sa=X&ved=1t:8290&ictx=111"
                target="_blank"
                rel="noopener noreferrer"
                className="modal-address-badge"
                title="Haritada Görüntüle"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>Cumhuriyet, Necip Fazıl Kısakürek Sk. İkizler İş Merkezi No:32/6, Çankırı</span>
              </a>
            </form>
          </>
        ) : (
          <div className="modal-success">
            <div className="success-icon">✓</div>
            <h3>Teşekkür Ederiz!</h3>
            <p>Randevu talebiniz başarıyla alındı. Hasta danışmanımız en kısa sürede sizinle iletişime geçecektir.</p>
          </div>
        )}
      </div>
    </div>
  )
}
