import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { FiMenu, FiX, FiArrowUpRight } from 'react-icons/fi'
import './Header.css'

const navItems = [
  { label: 'Ana Sayfa', href: '#home' },
  { label: 'Tedavilerimiz', href: '#treatments' },
  { label: 'Kliniğimiz', href: '#clinic-video' },
  { label: 'Hakkımızda', href: '#about' },
  { label: 'Ekibimiz', href: '#team' },
  { label: 'Yorumlar', href: '#reviews' },
  { label: 'Galeri', href: '#gallery' },
  { label: 'İletişim', href: '#contact' },
]

export default function Header({ menuOpen: controlledMenuOpen, setMenuOpen: controlledSetMenuOpen, onContactClick, homePath = '' }) {
  const [internalMenuOpen, setInternalMenuOpen] = useState(false)
  const menuOpen = controlledMenuOpen ?? internalMenuOpen
  const setMenuOpen = controlledMenuOpen !== undefined ? controlledSetMenuOpen : setInternalMenuOpen
  const [activeNav, setActiveNav] = useState('#home')
  const [isVideoHidden, setIsVideoHidden] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const headerRef = useRef(null)
  const toggleRef = useRef(null)
  const sheetRef = useRef(null)

  useEffect(() => {
    const videoSection = document.getElementById('clinic-video')
    let frameId = null
    const updateVisibility = () => {
      frameId = null
      setIsScrolled(window.scrollY > 160)
      const rect = videoSection?.getBoundingClientRect()
      const headerHeight = (headerRef.current?.offsetHeight ?? 0) + (headerRef.current?.offsetTop ?? 0)
      setIsVideoHidden(Boolean(rect && rect.top <= headerHeight && rect.bottom > 0))
    }
    const scheduleUpdate = () => {
      if (frameId === null) frameId = window.requestAnimationFrame(updateVisibility)
    }
    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate)
    updateVisibility()
    return () => {
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)
      if (frameId !== null) window.cancelAnimationFrame(frameId)
    }
  }, [])

  useEffect(() => {
    if (!isVideoHidden) return
    setMenuOpen(false)
    if (headerRef.current?.contains(document.activeElement)) document.activeElement.blur()
  }, [isVideoHidden, setMenuOpen])

  useEffect(() => {
    if (!menuOpen) return
    const header = headerRef.current
    const toggle = toggleRef.current
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    sheetRef.current?.querySelector('button')?.focus()
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        toggleRef.current?.focus()
      }
      if (event.key === 'Tab') {
        const controls = sheetRef.current?.querySelectorAll('button, a[href]')
        if (!controls?.length) return
        const first = controls[0]
        const last = controls[controls.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }
    const desktopQuery = window.matchMedia('(min-width: 1201px)')
    const handleDesktop = (event) => { if (event.matches) setMenuOpen(false) }
    document.addEventListener('keydown', handleEscape)
    desktopQuery.addEventListener('change', handleDesktop)
    return () => {
      document.body.style.overflow = previousOverflow
      if (!header?.hasAttribute('aria-hidden')) toggle?.focus()
      document.removeEventListener('keydown', handleEscape)
      desktopQuery.removeEventListener('change', handleDesktop)
    }
  }, [menuOpen, setMenuOpen])

  const handleNavigate = (event, href) => {
    if (homePath) return
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return
    event.preventDefault()
    setActiveNav(href)
    setMenuOpen(false)
    if (href === '#contact' && onContactClick) {
      onContactClick()
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }
    if (menuOpen) toggleRef.current?.focus()
  }

  return (
    <div className="header-shell">
    <header className={`site-header${isScrolled ? ' is-scrolled' : ''}${isVideoHidden ? ' is-video-hidden' : ''}`} ref={headerRef}
      aria-hidden={isVideoHidden || undefined} inert={isVideoHidden}>
      <div className="header-inner">
        <a className="header-brand" href={`${homePath}#home`} onClick={(event) => handleNavigate(event, '#home')} aria-label="Dt. Mert Çıtak Diş Kliniği, ana sayfa">
          <img className="header-brand-logo" src="/logo.png" alt="" width="76" height="76" />
          <span className="header-brand-copy">
            <span className="header-brand-name">Dt. Mert Çıtak</span>
            <span className="header-brand-caption">Diş Kliniği</span>
          </span>
        </a>
        <button ref={toggleRef} type="button" className="header-menu-toggle" aria-expanded={menuOpen}
          aria-controls="mobile-navigation" aria-label={menuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
          title={menuOpen ? 'Menüyü kapat' : 'Menüyü aç'} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
        </button>
        <nav id="header-navigation" className="header-navigation" aria-label="Ana menü">
          {navItems.map((item) => (
            <a key={item.href} href={`${homePath}${item.href}`}
              className={`header-link${activeNav === item.href ? ' is-active' : ''}${item.href === '#contact' ? ' header-contact-link' : ''}`}
              aria-current={activeNav === item.href ? 'location' : undefined}
              onClick={(event) => handleNavigate(event, item.href)}>
              {item.label}
              {item.href === '#contact' && <FiArrowUpRight aria-hidden="true" />}
            </a>
          ))}
        </nav>
      </div>
    </header>
    {createPortal(
      <div className={`mobile-menu-layer${menuOpen ? ' is-open' : ''}`} inert={!menuOpen} aria-hidden={!menuOpen}>
        <div className="mobile-menu-backdrop" onClick={() => setMenuOpen(false)} aria-hidden="true" />
        <div className="mobile-menu-sheet" ref={sheetRef} role="dialog" aria-modal={menuOpen || undefined} aria-labelledby="mobile-menu-title">
          <div className="mobile-menu-handle" aria-hidden="true" />
          <div className="mobile-menu-heading">
            <div><span className="mobile-menu-clinic">Dt. Mert Çıtak Diş Kliniği</span><h2 id="mobile-menu-title">Menü</h2></div>
            <button type="button" className="mobile-menu-close" aria-label="Menüyü kapat" title="Menüyü kapat" onClick={() => setMenuOpen(false)}><FiX aria-hidden="true" /></button>
          </div>
          <nav id="mobile-navigation" aria-label="Mobil ana menü">
            {navItems.map((item, index) => (
              <a key={item.href} href={`${homePath}${item.href}`} className={`mobile-menu-link${activeNav === item.href ? ' is-active' : ''}`}
                style={{ '--menu-delay': `${index * 30}ms` }} aria-current={activeNav === item.href ? 'location' : undefined}
                onClick={(event) => handleNavigate(event, item.href)}>
                {item.label}<FiArrowUpRight aria-hidden="true" />
              </a>
            ))}
          </nav>
        </div>
      </div>, document.body
    )}
    </div>
  )
}
