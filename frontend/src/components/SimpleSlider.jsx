import { useCallback, useEffect, useMemo, useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import './SimpleSlider.css'

const DEFAULT_ITEMS = [
  { image: '/slider_1.png', alt: 'Clinic treatment room' },
  { image: '/slider_2.png', alt: 'Clinic interior' }
]

export default function SimpleSlider({
  items = DEFAULT_ITEMS,
  autoplay = true,
  autoplayDelay = 5000,
  className = '',
  ariaLabel = 'Clinic image slider',
  renderContent,
}) {
  const slides = useMemo(() => (items.length ? items : DEFAULT_ITEMS), [items])
  const [index, setIndex] = useState(0)

  const goTo = useCallback(
    nextIndex => {
      setIndex(((nextIndex % slides.length) + slides.length) % slides.length)
    },
    [slides.length]
  )

  const goNext = useCallback(() => goTo(index + 1), [goTo, index])
  const goPrev = useCallback(() => goTo(index - 1), [goTo, index])

  useEffect(() => {
    if (!autoplay || slides.length < 2) return undefined
    const timer = window.setTimeout(goNext, autoplayDelay)
    return () => window.clearTimeout(timer)
  }, [autoplay, autoplayDelay, goNext, index, slides.length])

  useEffect(() => {
    if (index <= slides.length - 1) return
    setIndex(0)
  }, [index, slides.length])

  return (
    <div className={`simple-slider ${className}`.trim()} role="region" aria-label={ariaLabel}>
      <div className="simple-slider-track">
        {slides.map((item, slideIndex) => (
          <img
            key={`${item.image}-${slideIndex}`}
            className={`simple-slider-image ${slideIndex === index ? 'is-active' : ''}`}
            src={item.image}
            alt={item.alt || ''}
            aria-hidden={slideIndex === index ? undefined : true}
          />
        ))}
      </div>

      {renderContent?.(slides[index] || slides[0], index)}

      {slides.length > 1 && (
        <>
          <div className="simple-slider-controls">
            <button type="button" className="simple-slider-button" aria-label="Previous slide" onClick={goPrev}>
              <FiChevronLeft aria-hidden="true" />
            </button>
            <button type="button" className="simple-slider-button" aria-label="Next slide" onClick={goNext}>
              <FiChevronRight aria-hidden="true" />
            </button>
          </div>

          
        </>
      )}
    </div>
  )
}
