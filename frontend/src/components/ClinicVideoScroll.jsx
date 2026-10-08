import { useEffect, useRef, useState } from 'react'
import { FaTooth, FaWhatsapp } from 'react-icons/fa6'
import { FiPhone } from 'react-icons/fi'
import './ClinicVideoScroll.css'

const LINE_1_FULL = 'Her gülüş, yeni bir başlangıç.'
const LINE_2_PREFIX = 'Gülüşünüz, '
const LINE_2_HIGHLIGHT = 'en değerli imzanız.'
const LINE_2_FULL = LINE_2_PREFIX + LINE_2_HIGHLIGHT

export default function ClinicVideoScroll() {
  const sectionRef = useRef(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  // Calmer typewriter character state
  const [typedChars1, setTypedChars1] = useState(0)
  const [typedChars2, setTypedChars2] = useState(0)
  const chars1Ref = useRef(0)
  const chars2Ref = useRef(0)

  // Seamless Dual-Video Looper to eliminate black frames & jump-cuts
  const video1Ref = useRef(null)
  const video2Ref = useRef(null)
  const [activeSlot, setActiveSlot] = useState(1)
  const isTransitioningRef = useRef(false)

  // Seamless Dual-Video Crossfade Loop Controller
  useEffect(() => {
    const v1 = video1Ref.current
    const v2 = video2Ref.current
    if (!v1 || !v2) return

    const BLACK_TRIM_SECONDS = 0.6 // Siyah kareleri kırpma süresi
    const CROSSFADE_DURATION_SECONDS = 0.55 // Yumuşak erime geçiş süresi

    const checkLoop = () => {
      const activeVideo = activeSlot === 1 ? v1 : v2
      const nextVideo = activeSlot === 1 ? v2 : v1

      if (!activeVideo || !activeVideo.duration) return

      const triggerTime =
        activeVideo.duration - BLACK_TRIM_SECONDS - CROSSFADE_DURATION_SECONDS

      if (activeVideo.currentTime >= triggerTime && !isTransitioningRef.current) {
        isTransitioningRef.current = true

        // Diğer videoyu baştan pürüzsüzce başlat
        nextVideo.currentTime = 0.05
        nextVideo.play().catch(() => { })

        // Aktif katmanı değiştirerek CSS crossfade tetikle
        setActiveSlot(activeSlot === 1 ? 2 : 1)

        setTimeout(() => {
          isTransitioningRef.current = false
        }, (CROSSFADE_DURATION_SECONDS + 0.1) * 1000)
      }
    }

    const interval = setInterval(checkLoop, 50)
    return () => clearInterval(interval)
  }, [activeSlot])

  useEffect(() => {
    let animId
    let targetProgress = 0
    let currentProgress = 0

    const calculateProgress = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      // Match the frame directly to scroll so it is edge-to-edge at the sticky boundary.
      const entry = Math.min(Math.max(1 - rect.top / (windowHeight * 0.5), 0), 1)
      sectionRef.current.style.setProperty('--video-entry', String(entry))
      const totalScrollable = rect.height - windowHeight
      if (totalScrollable <= 0) return

      // Progress goes from 0 (when top hits top of viewport) to 1 (when bottom hits bottom)
      const scrolled = -rect.top
      const progress = Math.min(Math.max(scrolled / totalScrollable, 0), 1)
      targetProgress = progress

    }

    const updateLoop = () => {
      // Gentle, luxurious lerp for calm, premium pacing
      currentProgress += (targetProgress - currentProgress) * 0.075

      setScrollProgress(currentProgress)

      // Typewriter calculations:
      // Phase 1 (0.00 - 0.06): Section entry
      // Phase 2 (0.06 - 0.38): Line 1 types calmly
      // Phase 3 (0.38 - 0.52): Extended pause so user can comfortably read Line 1
      // Phase 4 (0.52 - 0.86): Line 2 types calmly
      // Phase 5 (0.86 - 0.94): Long rest with both lines displayed
      // Phase 6 (0.94 - 1.00): Smooth exit
      const isEntered = currentProgress > 0.02
      const p1 = Math.min(Math.max((currentProgress - 0.06) / 0.32, 0), 1)
      const target1 = isEntered ? Math.round(p1 * LINE_1_FULL.length) : 0

      const p2 = Math.min(Math.max((currentProgress - 0.52) / 0.34, 0), 1)
      const target2 = isEntered && currentProgress >= 0.52 ? Math.round(p2 * LINE_2_FULL.length) : 0

      // Smooth rate limiting: at most 0.45 char per frame (calm, natural typing speed)
      const MAX_CHAR_SPEED = 0.45
      const diff1 = target1 - chars1Ref.current
      if (Math.abs(diff1) <= MAX_CHAR_SPEED) {
        chars1Ref.current = target1
      } else {
        chars1Ref.current += Math.sign(diff1) * MAX_CHAR_SPEED
      }

      const diff2 = target2 - chars2Ref.current
      if (Math.abs(diff2) <= MAX_CHAR_SPEED) {
        chars2Ref.current = target2
      } else {
        chars2Ref.current += Math.sign(diff2) * MAX_CHAR_SPEED
      }

      setTypedChars1(Math.round(chars1Ref.current))
      setTypedChars2(Math.round(chars2Ref.current))

      animId = requestAnimationFrame(updateLoop)
    }

    window.addEventListener('scroll', calculateProgress, { passive: true })
    window.addEventListener('resize', calculateProgress, { passive: true })
    calculateProgress()
    animId = requestAnimationFrame(updateLoop)

    return () => {
      window.removeEventListener('scroll', calculateProgress)
      window.removeEventListener('resize', calculateProgress)
      cancelAnimationFrame(animId)
    }
  }, [])

  // Exit transition at the very end of the scroll track (0.94+)
  let exitY = 0
  let exitOpacity = 1
  if (scrollProgress > 0.94) {
    const tExit = Math.min(Math.max((scrollProgress - 0.94) / 0.05, 0), 1)
    exitY = -tExit * 28
    exitOpacity = Math.max(0, 1 - tExit)
  }

  const isEntered = scrollProgress > 0.02

  // Cursor is on Line 1 during Line 1 typing and pause (scrollProgress < 0.52)
  // Cursor moves to Line 2 starting at 0.52
  const showCursorLine1 = isEntered && scrollProgress < 0.52
  const showCursorLine2 = isEntered && scrollProgress >= 0.52

  return (
    <section className="clinic-video-scroll-track" ref={sectionRef} id="clinic-video">
      {/* Sticky Fullscreen Frame */}
      <div className="clinic-video-sticky-frame">
        <div className="clinic-video-viewport">
          {/* Background Dual-Video Seamless Looper */}
          <video
            ref={video1Ref}
            className={`clinic-bg-video ${activeSlot === 1 ? 'is-active' : 'is-inactive'}`}
            src="/Video/teeth.mp4"
            autoPlay
            muted
            playsInline
          />
          <video
            ref={video2Ref}
            className={`clinic-bg-video ${activeSlot === 2 ? 'is-active' : 'is-inactive'}`}
            src="/Video/teeth.mp4"
            muted
            playsInline
          />

          <div className="video-corner-navigation">
            <a className="video-clinic-mark" href="#home" aria-label="Dt. Mert Çıtak Diş Kliniği, ana sayfa" title="Ana sayfa">
              <FaTooth aria-hidden="true" />
            </a>
            <nav className="video-glass-navigation" aria-label="Video bölüm menüsü">
              <div className="video-glass-links">
                <a href="#treatments">Tedaviler</a>
                <a href="#team">Ekibimiz</a>
              </div>
              <a className="video-glass-icon" href="tel:+905452011918" aria-label="Kliniği ara" title="Kliniği ara">
                <FiPhone aria-hidden="true" />
              </a>
              <a className="video-glass-icon" href="https://wa.me/905452011918" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp ile iletişim" title="WhatsApp ile iletişim">
                <FaWhatsapp aria-hidden="true" />
              </a>
            </nav>
          </div>

          {/* 2-Line Editorial Typography - Typewriter "Mesaj Yazıyor" Effect on Scroll */}
          <div
            className="video-scroll-center-content"
            style={{
              transform: `translate3d(0, ${exitY.toFixed(2)}px, 0)`,
              opacity: exitOpacity,
            }}
          >
            <div className="reference-headline-block">
              {/* Line 1: Her gülüş, yeni bir başlangıç. */}
              <h2 className="reference-line reference-line-1" aria-label={LINE_1_FULL}>
                <span className="typewriter-measure" aria-hidden="true">{LINE_1_FULL}</span>
                <span className="typewriter-visible" aria-hidden="true">
                    <span>{LINE_1_FULL.slice(0, typedChars1)}</span>
                    {showCursorLine1 && (
                      <span className="typewriter-cursor" aria-hidden="true">
                        |
                      </span>
                    )}
                </span>
              </h2>

              {/* Line 2: Gülüşünüz, en değerli imzanız. */}
              <h2 className="reference-line reference-line-2" aria-label={LINE_2_FULL}>
                <span className="typewriter-measure" aria-hidden="true">{LINE_2_FULL}</span>
                <span className="typewriter-visible" aria-hidden="true">
                    <span>{LINE_2_FULL.slice(0, typedChars2)}</span>
                    {showCursorLine2 && (
                      <span className="typewriter-cursor" aria-hidden="true">
                        |
                      </span>
                    )}
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
