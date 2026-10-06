import './TopHeader.css'

export default function TopHeader({ onDiscoverClick }) {
  return (
    <div className="top-header">
      <div className="top-header-inner">
        {/* Left: Announcement / Feature Pill */}
        <div className="top-header-left">
          <span className="top-apple-badge">ÇANKIRI</span>
          <span className="top-header-text">
            İmplant, zirkonyum kaplama ve diş tedavisi — İkizler İş Merkezi, Çankırı.
          </span>
          <button
            type="button"
            className="top-header-link"
            onClick={onDiscoverClick}
          >
            <span>Kliniğimizi Tanıyın</span>
            <span className="apple-chevron">›</span>
          </button>
        </div>

        {/* Right: Apple Style Location, Hours, Contact */}
        <div className="top-header-right">
          <a
            href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x4083c58fb28f72b9:0xdcd4977c3202922f?sa=X&ved=1t:8290&ictx=111"
            target="_blank"
            rel="noopener noreferrer"
            className="top-header-item top-header-map-link"
            title="Cumhuriyet, Necip Fazıl Kısakürek Sk. İkizler İş Merkezi No:32/6, 18100 Çankırı Merkez/Çankırı"
          >
            <svg
              className="top-icon"
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span>İkizler İş Merkezi, Çankırı</span>
          </a>

          <span className="top-divider">•</span>

          <div className="top-header-item">
            <svg
              className="top-icon"
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span>Pzt - Cmt: 09:00 - 19:00</span>
          </div>

          <span className="top-divider">•</span>

          <a href="tel:+905452011918" className="top-header-phone">
            <svg
              className="top-icon"
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <span>0545 201 19 18</span>
          </a>
        </div>
      </div>
    </div>
  )
}
