import { useEffect, useRef, useState } from 'react'
import { FiArrowUpRight, FiArrowRight, FiChevronLeft, FiChevronRight, FiPause, FiPlay } from 'react-icons/fi'
import './TreatmentsSection.css'
import TextReveal from './TextReveal'

import { treatments } from '../data/treatments'

export default function TreatmentsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef(null)
  const [autoplay, setAutoplay] = useState(() => !window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const [isPageVisible, setIsPageVisible] = useState(!document.hidden)
  const isPlaying = autoplay && isVisible && !isHovered && !isFocused && isPageVisible

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting))
    observer.observe(sectionRef.current)
    const handleVisibility = () => setIsPageVisible(!document.hidden)
    document.addEventListener('visibilitychange', handleVisibility)
    return () => {
      observer.disconnect()
      document.removeEventListener('visibilitychange', handleVisibility)
    }
  }, [])

  useEffect(() => {
    if (!isPlaying) return
    const timer = window.setTimeout(() => setActiveIndex((index) => (index + 1) % treatments.length), 5000)
    return () => window.clearTimeout(timer)
  }, [activeIndex, isPlaying])

  const activeTreatment = treatments[activeIndex]
  const selectAdjacent = (direction) => setActiveIndex((index) => (index + direction + treatments.length) % treatments.length)
  return (
    <section ref={sectionRef} className="treatments-section" id="treatments" aria-labelledby="treatments-title">
      <div className="treatments-inner">
        <div className="treatments-heading">
          <div>
            <span className="treatments-eyebrow">SAĞLIK. ESTETİK. DENGE.</span>
            <TextReveal id="treatments-title">Tedavilerimiz<span className="treatments-title-dot">.</span></TextReveal>
          </div>
          <p className="treatments-intro" data-reveal data-reveal-delay="2">Her gülüş kendine özgü.<br />Tedavi yaklaşımımız da öyle.</p>
        </div>
        <div className="treatments-experience"
          onPointerEnter={(event) => { if (event.pointerType === 'mouse') setIsHovered(true) }}
          onPointerLeave={() => setIsHovered(false)}
          onFocusCapture={() => setIsFocused(true)}
          onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setIsFocused(false) }}>
          <div className="treatments-list" aria-label="Tedavi seçenekleri">
          {treatments.map((treatment, index) => (
            <button type="button" className={`treatment-option ${index === activeIndex ? 'is-active' : ''}`} key={treatment.title}
              aria-pressed={index === activeIndex} aria-controls="treatment-preview" onClick={() => setActiveIndex(index)}>
                <span className="treatment-number" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="treatment-option-title">{treatment.title}</span>
                <FiArrowUpRight className="treatment-option-arrow" aria-hidden="true" />
            </button>
          ))}
          </div>
          <div className="treatment-preview" id="treatment-preview">
            <a className="treatment-image" href={`/tedavilerimiz/${activeTreatment.slug}`} aria-label={`${activeTreatment.title} hakkında daha detaylı bilgi`}>
              {treatments.map((treatment, index) => (
                <img key={treatment.title} className={index === activeIndex ? 'is-active' : ''}
                  src={treatment.image} alt={index === activeIndex ? `${treatment.alt} (temsili görsel)` : ''}
                  aria-hidden={index !== activeIndex} loading="eager" fetchPriority="low" decoding="async" width="800" height="640"
                  onError={(event) => {
                    if (event.currentTarget.dataset.fallback) return
                    event.currentTarget.dataset.fallback = 'true'
                    event.currentTarget.src = '/gallery/photo_three.webp'
                  }} />
              ))}
              <span className="treatment-image-link"><span>Daha detaylı incele</span><FiArrowUpRight aria-hidden="true" /></span>
            </a>
            <div className="treatment-autoplay-track" aria-hidden="true">
              <span key={`${activeIndex}-${isPlaying}`} className={isPlaying ? 'is-playing' : ''} />
            </div>
            <div className="treatment-preview-meta">
              <span>KLİNİĞİMİZDE TEDAVİ</span>
              <div className="treatment-pagination">
                <button type="button" onClick={() => setAutoplay((value) => !value)}
                  aria-label={autoplay ? 'Otomatik geçişi durdur' : 'Otomatik geçişi başlat'}
                  title={autoplay ? 'Otomatik geçişi durdur' : 'Otomatik geçişi başlat'}>
                  {autoplay ? <FiPause /> : <FiPlay />}
                </button>
                <span>{String(activeIndex + 1).padStart(2, '0')} <span className="treatment-total">/ 11</span></span>
                <button type="button" onClick={() => selectAdjacent(-1)} aria-label="Önceki tedavi" title="Önceki tedavi"><FiChevronLeft /></button>
                <button type="button" onClick={() => selectAdjacent(1)} aria-label="Sonraki tedavi" title="Sonraki tedavi"><FiChevronRight /></button>
              </div>
            </div>
            <div className="treatment-detail" aria-live={isPlaying ? 'off' : 'polite'} aria-atomic="true">
              <TextReveal as="h3" key={activeIndex}>{activeTreatment.title}</TextReveal>
              <p key={`description-${activeIndex}`} data-reveal data-reveal-delay="2">{activeTreatment.description}</p>
            </div>
            <a className="treatments-contact" href="#contact">Tedavi hakkında iletişime geçin <FiArrowRight aria-hidden="true" /></a>
          </div>
        </div>
        <div className="treatments-footer"><span>Size özel planlama.</span><span>Özenli bir yaklaşım.</span></div>
      </div>
    </section>
  )
}
