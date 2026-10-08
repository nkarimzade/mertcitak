import { useLayoutEffect, useRef } from 'react'
import { FiArrowDown, FiArrowUpRight, FiPhone } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa6'
import Footer from './Footer'
import TextReveal from './TextReveal'
import './ContactEnding.css'

export default function ContactEnding({ homePath = '' }) {
  const endingRef = useRef(null)
  const bannerRef = useRef(null)
  const footerRef = useRef(null)

  useLayoutEffect(() => {
    const ending = endingRef.current
    const footer = footerRef.current
    const measureFooter = () => {
      ending.style.setProperty('--ending-footer-height', `${footer.getBoundingClientRect().height}px`)
    }
    measureFooter()
    // Tall footers need a lower sticky boundary so their first rows stay reachable.
    if ('ResizeObserver' in window) {
      const observer = new ResizeObserver(measureFooter)
      observer.observe(footer)
      return () => observer.disconnect()
    }
    window.addEventListener('resize', measureFooter)
    return () => window.removeEventListener('resize', measureFooter)
  }, [])

  const revealFooter = (behavior = 'auto') => {
    const top = window.scrollY + endingRef.current.getBoundingClientRect().top + bannerRef.current.offsetHeight
    window.scrollTo({ top, behavior })
  }

  return (
    <div className="contact-ending" ref={endingRef}>
      <section className="contact-ending-banner" id="get-in-touch" ref={bannerRef} aria-labelledby="contact-ending-title">
        <div className="contact-ending-content">
          <img className="contact-ending-logo" src="/logo.png" alt="" width="80" height="80" loading="lazy" />
          <span className="contact-ending-kicker">DT. MERT ÇITAK DİŞ KLİNİĞİ</span>
          <TextReveal id="contact-ending-title">Hemen<br /><span>iletişime geçin.</span></TextReveal>
          <p data-reveal data-reveal-delay="2">Sorularınızı dinlemek ve tedavi seçeneklerini<br />birlikte konuşmak için buradayız.</p>
          <div className="contact-ending-actions" data-reveal data-reveal-delay="3">
            <a className="contact-ending-phone" href="tel:+905452011918"><FiPhone aria-hidden="true" />0545 201 19 18<FiArrowUpRight aria-hidden="true" /></a>
            <a className="contact-ending-whatsapp" href="https://wa.me/905452011918" target="_blank" rel="noopener noreferrer"><FaWhatsapp aria-hidden="true" />WhatsApp ile yazın<FiArrowUpRight aria-hidden="true" /></a>
          </div>
        </div>
        <div className="contact-ending-bottom">
          <span>İkizler İş Merkezi, Çankırı</span>
          <a href="#site-footer" aria-label="Alt bilgi bölümüne git" title="Alt bilgi bölümüne git" onClick={(event) => {
            if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return
            event.preventDefault()
            revealFooter(window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth')
          }}><FiArrowDown aria-hidden="true" /></a>
        </div>
      </section>
      <div className="contact-ending-footer" id="site-footer" ref={footerRef} onFocusCapture={() => {
        if (bannerRef.current.getBoundingClientRect().bottom > 0) revealFooter('instant')
      }}>
        <Footer homePath={homePath} />
      </div>
    </div>
  )
}
