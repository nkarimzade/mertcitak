import { useState, useEffect } from 'react'
import { Sling as Hamburger } from 'hamburger-react'
import {
  FiHome,
  FiInfo,
  FiUsers,
  FiSmile,
  FiPhoneCall,
  FiChevronRight,
  FiX
} from 'react-icons/fi'
import { FaTooth, FaWhatsapp } from 'react-icons/fa6'
import { RiHospitalLine } from 'react-icons/ri'
import './Header.css'

export default function Header({ menuOpen: controlledMenuOpen, setMenuOpen: controlledSetMenuOpen, onContactClick }) {
  const [internalMenuOpen, setInternalMenuOpen] = useState(false)
  const isMenuControlled = controlledMenuOpen !== undefined
  const menuOpen = isMenuControlled ? controlledMenuOpen : internalMenuOpen
  const setMenuOpen = isMenuControlled ? controlledSetMenuOpen : setInternalMenuOpen

  const [activeNav, setActiveNav] = useState('Ana Sayfa')

  // Close drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [menuOpen, setMenuOpen])

  const navItems = [
    { label: 'Ana Sayfa', href: '#home', icon: FiHome },
    { label: 'Hakkımızda', href: '#about', icon: FiInfo },
    { label: 'Tedaviler', href: '#treatments', icon: FaTooth },
    { label: 'Ekibimiz', href: '#team', icon: FiUsers },
    { label: 'Kliniğimiz', href: '#clinic', icon: RiHospitalLine },
    { label: 'Hasta Hikayeleri', href: '#stories', icon: FiSmile },
    { label: 'İletişim', href: '#contact', icon: FiPhoneCall },
  ]

  const handleNavClick = (label, href) => {
    setActiveNav(label)
    setMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleContactBtnClick = () => {
    if (onContactClick) {
      onContactClick()
    } else {
      setMenuOpen(true)
    }
  }

  return (
    <>
      <header className="site-header">
        {/* Brand Logo */}
        <a href="#home" className="header-logo">
          <span className="logo-name">MERT ÇITAK</span>
          <span className="logo-tagline">DİŞ KLİNİĞİ</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="header-nav" aria-label="Ana Navigasyon">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.label} className="nav-item">
                <a
                  href={item.href}
                  className={`nav-link ${activeNav === item.label ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.label, item.href)
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Header Actions */}
        <div className="header-actions">
          <button
            type="button"
            className="btn-book"
            onClick={handleContactBtnClick}
          >
            <span>Bize Ulaşın</span>
            <svg
              className="arrow-icon"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>

          {/* Hamburger Menu Toggle (Desktop & Mobile) */}
          <div
            className="hamburger-wrapper"
            title="Klinik Bilgileri & Menü"
            aria-label="Menü"
          >
            <Hamburger
              toggled={menuOpen}
              toggle={setMenuOpen}
              size={22}
              color="#ffffff"
              duration={0.35}
              rounded
            />
          </div>
        </div>
      </header>

      {/* Backdrop Overlay */}
      <div
        className={`bottom-sheet-backdrop ${menuOpen ? 'active' : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Slide-Up Bottom Sheet Drawer */}
      <section
        className={`bottom-sheet-drawer clean-drawer ${menuOpen ? 'active' : ''}`}
        aria-label="Klinik Bilgi ve Navigasyon Menüsü"
        aria-modal="true"
        role="dialog"
      >
        <div className="bottom-sheet-inner">
          {/* Header */}
          <div className="bottom-sheet-header">
            <div className="bottom-sheet-drag-handle" />
            <div className="bottom-sheet-header-row">
              <div className="bottom-sheet-brand">
                <span className="logo-name" style={{ color: '#111111' }}>MERT ÇITAK</span>
                <span className="logo-tagline" style={{ color: '#666666' }}>DİŞ KLİNİĞİ</span>
              </div>
              <button
                type="button"
                className="bottom-sheet-close-btn"
                onClick={() => setMenuOpen(false)}
                aria-label="Menüyü Kapat"
              >
                <FiX size={20} />
              </button>
            </div>
          </div>

          {/* Clean Navigation Links */}
          <div className="clean-menu-body">
            <nav className="sheet-nav-vertical">
              {navItems.map((item) => {
                const IconComponent = item.icon
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`sheet-menu-link ${activeNav === item.label ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(item.label, item.href)
                    }}
                  >
                    <div className="menu-link-left">
                      {IconComponent && <IconComponent className="sheet-menu-icon" size={17} />}
                      <span className="sheet-menu-label">{item.label}</span>
                    </div>
                    <FiChevronRight className="menu-link-arrow" size={16} />
                  </a>
                )
              })}
            </nav>

            {/* Bottom Quick Contact Bar */}
            <div className="sheet-bottom-actions">
              <a href="tel:+905452011918" className="sheet-action-btn call-action">
                <FiPhoneCall size={16} />
                <span>0545 201 19 18</span>
              </a>
              <a
                href="https://wa.me/905452011918?text=Merhaba,%20klini%C4%9Finiz%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="sheet-action-btn wa-action"
              >
                <FaWhatsapp size={17} />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Discreet Location & Working Hours line */}
            <div className="sheet-clinic-meta">
              <span>İkizler İş Merkezi No:32/6, Çankırı</span>
              <span className="sheet-meta-dot">•</span>
              <span>Pzt - Cmt: 09:00 - 19:00</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


