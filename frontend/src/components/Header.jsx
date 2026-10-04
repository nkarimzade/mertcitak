import { useState, useEffect, useRef } from 'react'
import { Sling as Hamburger } from 'hamburger-react'
import './Header.css'

export default function Header({ menuOpen: controlledMenuOpen, setMenuOpen: controlledSetMenuOpen, onContactClick }) {
  const [internalMenuOpen, setInternalMenuOpen] = useState(false)
  const isMenuControlled = controlledMenuOpen !== undefined
  const menuOpen = isMenuControlled ? controlledMenuOpen : internalMenuOpen
  const setMenuOpen = isMenuControlled ? controlledSetMenuOpen : setInternalMenuOpen

  const [activeNav, setActiveNav] = useState('Ana Sayfa')
  const menuRef = useRef(null)

  // Close menu on click outside or Escape key
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false)
      }
    }
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false)
      }
    }
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [menuOpen, setMenuOpen])

  const navItems = [
    { label: 'Ana Sayfa', href: '#home' },
    { label: 'Hakkımızda', href: '#about' },
    { label: 'Tedaviler', href: '#treatments' },
    { label: 'Ekibimiz', href: '#team' },
    { label: 'Kliniğimiz', href: '#clinic-video' },
    { label: 'Galeri', href: '#gallery' },
    { label: 'İletişim', href: '#contact' },
  ]

  const handleNavClick = (label, href) => {
    setActiveNav(label)
    setMenuOpen(false)
    if (href === '#contact' && onContactClick) {
      onContactClick()
      return
    }
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleContactBtnClick = () => {
    setMenuOpen(false)
    if (onContactClick) {
      onContactClick()
    }
  }

  return (
    <header className="site-header">
      {/* Left: Minimalist Menu Trigger & Compact Floating Dropdown */}
      <div className="header-left" ref={menuRef}>
        <button
          type="button"
          className="header-nav-btn menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Menüyü Kapat' : 'Menüyü Aç'}
          aria-expanded={menuOpen}
        >
          <div className="react-hamburger-box">
            <Hamburger
              toggled={menuOpen}
              size={18}
              color="#ffffff"
              duration={0.3}
              rounded
            />
          </div>
          <span className="nav-btn-text">MENÜ</span>
        </button>

        {/* Compact Floating White Dropdown Menu (Screen Not Covered) */}
        <div className={`compact-menu-dropdown ${menuOpen ? 'is-open' : ''}`}>
          <nav className="compact-nav-list">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className={`compact-nav-link ${activeNav === item.label ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.label, item.href)
                }}
              >
                <span className="compact-link-num">0{index + 1}</span>
                <span className="compact-link-label">{item.label}</span>
              </a>
            ))}
          </nav>

          <div className="compact-menu-footer">
            <a href="tel:+905452011918" className="compact-phone-link">
              0545 201 19 18
            </a>
            <span className="compact-meta-dot">•</span>
            <span className="compact-loc-text">İkizler İş Merkezi, Çankırı</span>
          </div>
        </div>
      </div>

      {/* Center: Brand Logo */}
      <div className="header-center">
        <a href="#home" className="header-logo">
          <span className="logo-name">MERT ÇITAK</span>
          <span className="logo-tagline">DİŞ KLİNİĞİ</span>
        </a>
      </div>

      {/* Right: Contact Trigger */}
      <div className="header-right">
        <button
          type="button"
          className="header-nav-btn contact-btn"
          onClick={handleContactBtnClick}
          aria-label="İletişim"
        >
          <span className="nav-btn-text">İLETİŞİM</span>
          <svg
            className="contact-envelope-icon"
            width="18"
            height="14"
            viewBox="0 0 18 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <rect x="0.75" y="0.75" width="16.5" height="12.5" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
            <path d="M1.5 2L9 8L16.5 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </header>
  )
}
