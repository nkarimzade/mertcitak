import { useEffect, useRef, useState } from 'react'
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa6'
import './ClinicVideoScroll.css'

const LINE_1_FULL = 'Her gülüş, yeni bir başlangıç.'
const LINE_2_PREFIX = 'Gülüşünüz, '
const LINE_2_HIGHLIGHT = 'en değerli imzanız.'
const LINE_2_FULL = LINE_2_PREFIX + LINE_2_HIGHLIGHT

export default function ClinicVideoScroll() {
  const sectionRef = useRef(null)
  const frameRef = useRef(null)
  const viewportRef = useRef(null)
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
    let targetExpand = 0
    let currentExpand = 0

    const isMobile = () => window.innerWidth <= 880

    const calculateProgress = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const totalScrollable = rect.height - windowHeight
      if (totalScrollable <= 0) return

      // Progress goes from 0 (when top hits top of viewport) to 1 (when bottom hits bottom)
      const scrolled = -rect.top
      const progress = Math.min(Math.max(scrolled / totalScrollable, 0), 1)
      targetProgress = progress

      // İlk başta paddingli kart olarak başlar, scrolle geldikçe (ilk %14'lük dilimde) tam ekrana genişler
      if (rect.top > 0) {
        targetExpand = 0
      } else {
        // Scrolle başlayınca pürüzsüzce %100 tam ekranı kaplayacak şekilde expand 1'e ulaşır
        targetExpand = Math.min(progress / 0.14, 1)
      }
    }

    const updateLoop = () => {
      // Gentle, luxurious lerp for calm, premium pacing
      currentProgress += (targetProgress - currentProgress) * 0.075
      currentExpand += (targetExpand - currentExpand) * 0.12

      setScrollProgress(currentProgress)

      // Typewriter calculations:
      // Phase 1 (0.00 - 0.06): Section entry & card expansion
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

      if (frameRef.current && viewportRef.current) {
        const mobile = isMobile()
        const initialPadY = mobile ? 16 : 24
        const initialPadX = mobile ? 12 : 36
        const initialRadius = mobile ? 22 : 28

        // Scrolle gelince padding ve border-radius 0'a iner, tüm ekranı kaplar
        const padFactor = Math.max(0, 1 - currentExpand)

        if (padFactor <= 0.005) {
          frameRef.current.style.padding = '0px'
          viewportRef.current.style.borderRadius = '0px'
          viewportRef.current.style.boxShadow = 'none'
        } else {
          const padY = (padFactor * initialPadY).toFixed(1)
          const padX = (padFactor * initialPadX).toFixed(1)
          const radius = (padFactor * initialRadius).toFixed(1)

          frameRef.current.style.padding = `${padY}px ${padX}px`
          viewportRef.current.style.borderRadius = `${radius}px`

          const shadowAlpha = (padFactor * 0.22).toFixed(3)
          viewportRef.current.style.boxShadow = `0 20px 50px -12px rgba(15, 23, 42, ${shadowAlpha}), 0 0 0 1px rgba(0, 0, 0, ${(padFactor * 0.08).toFixed(3)})`
        }
      }

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
      <div className="clinic-video-sticky-frame" ref={frameRef}>
        <div className="clinic-video-viewport" ref={viewportRef}>
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

          {/* Top Floating Glass Header */}
          <div className="clinic-video-floating-nav">
            {/* Left: Glass Circle Brand Badge */}
            <div className="video-glass-circle-btn" title="Mert Çıtak Diş Kliniği">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C9.5 2 7.5 3.5 7 6C6.5 8.5 7 11.5 7.5 14.5C8 17.5 9 22 10.5 22C11.5 22 12 19 12 17C12 19 12.5 22 13.5 22C15 22 16 17.5 16.5 14.5C17 11.5 17.5 8.5 17 6C16.5 3.5 14.5 2 12 2Z" />
              </svg>
            </div>

            {/* Right: Glass Capsule Pill with Nav Links & Social Icons */}
            <div className="video-glass-pill-nav">
              <a href="#about" className="video-pill-link">
                Hakkımızda
              </a>
              <a href="#gallery" className="video-pill-link">
                Galeri
              </a>
              <span className="video-pill-divider" />
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="video-pill-social-link"
                aria-label="Instagram"
              >
                <FaInstagram size={16} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="video-pill-social-link"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={15} />
              </a>
            </div>
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
              <h2 className="reference-line reference-line-1">
                {typedChars1 === 0 && !showCursorLine1 ? (
                  <span className="typewriter-ghost" aria-hidden="true">&nbsp;</span>
                ) : (
                  <>
                    <span>{LINE_1_FULL.slice(0, typedChars1)}</span>
                    {showCursorLine1 && (
                      <span className="typewriter-cursor" aria-hidden="true">
                        |
                      </span>
                    )}
                  </>
                )}
              </h2>

              {/* Line 2: Gülüşünüz, en değerli imzanız. */}
              <h2 className="reference-line reference-line-2">
                {typedChars2 === 0 && !showCursorLine2 ? (
                  <span className="typewriter-ghost" aria-hidden="true">&nbsp;</span>
                ) : (
                  <>
                    <span>{LINE_2_FULL.slice(0, typedChars2)}</span>
                    {showCursorLine2 && (
                      <span className="typewriter-cursor" aria-hidden="true">
                        |
                      </span>
                    )}
                  </>
                )}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
