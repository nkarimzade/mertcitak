import { useEffect, useRef, useState } from 'react'
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa6'
import './ClinicVideoScroll.css'

const smilePhrases = [
  {
    before: 'Her ',
    highlight: 'gülüş',
    after: ' kendi hikayesini yazar.',
  },
  {
    before: '',
    highlight: 'Gülüşünüz',
    after: ', en değerli imzanız.',
  },
]

export default function ClinicVideoScroll() {
  const sectionRef = useRef(null)
  const frameRef = useRef(null)
  const viewportRef = useRef(null)
  const [scrollProgress, setScrollProgress] = useState(0)

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

    v1.playbackRate = 1.35
    v2.playbackRate = 1.35

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
        nextVideo.playbackRate = 1.35
        nextVideo.play().catch(() => {})

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

      // Expand to 100% full bleed on desktop when reaching/on the video section
      if (rect.top > 180) {
        targetExpand = 0
      } else if (rect.top > 0) {
        targetExpand = Math.min(Math.max((180 - rect.top) / 180, 0), 1)
      } else {
        if (progress < 0.94) {
          targetExpand = 1
        } else {
          targetExpand = Math.max(0, (1 - progress) / 0.06)
        }
      }
    }

    const updateLoop = () => {
      // Smooth and responsive lerp
      currentProgress += (targetProgress - currentProgress) * 0.22
      currentExpand += (targetExpand - currentExpand) * 0.18

      setScrollProgress(currentProgress)

      // Direct high-performance DOM manipulation for full-screen expansion on desktop
      if (frameRef.current && viewportRef.current) {
        const mobile = isMobile()

        if (mobile) {
          // On mobile: preserve the elegant curved cinema card aspect ratio from CSS
          frameRef.current.style.padding = ''
          viewportRef.current.style.borderRadius = ''
          viewportRef.current.style.boxShadow = ''
          viewportRef.current.style.border = ''
        } else {
          // On desktop: keep generous padding so video stays framed with breathing room
          const padY = Math.max(18, (1 - currentExpand) * 16 + 18)
          const padX = Math.max(32, (1 - currentExpand) * 24 + 32)
          const radius = Math.max(28, (1 - currentExpand) * 12 + 28)

          frameRef.current.style.padding = `${padY.toFixed(1)}px ${padX.toFixed(1)}px`
          viewportRef.current.style.borderRadius = `${radius.toFixed(1)}px`
          viewportRef.current.style.boxShadow = '0 25px 65px -15px rgba(15, 23, 42, 0.22), 0 0 0 1px rgba(0, 0, 0, 0.08)'
          viewportRef.current.style.border = 'none'
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

  // Fast, punchy entrance: Line 1 arrives rapidly from below
  let line1Y = 50
  let line1Opacity = 0
  if (scrollProgress >= 0.04) {
    const t1 = Math.min(Math.max((scrollProgress - 0.04) / 0.06, 0), 1)
    const ease1 = 1 - Math.pow(1 - t1, 4)
    line1Y = (1 - ease1) * 50
    line1Opacity = Math.min(1, t1 * 6)
  }

  // Line 2 shoots up quickly from below right underneath Line 1
  let line2Y = 45
  let line2Opacity = 0
  if (scrollProgress >= 0.15) {
    const t2 = Math.min(Math.max((scrollProgress - 0.15) / 0.06, 0), 1)
    const ease2 = 1 - Math.pow(1 - t2, 4)
    line2Y = (1 - ease2) * 45
    line2Opacity = Math.min(1, t2 * 6)
  }

  // Both lines exit together smoothly at the end of section
  let exitY = 0
  let exitOpacity = 1
  if (scrollProgress > 0.88) {
    const tExit = Math.min(Math.max((scrollProgress - 0.88) / 0.10, 0), 1)
    exitY = -tExit * 35
    exitOpacity = Math.max(0, 1 - tExit * 1.5)
  }

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
            onLoadedMetadata={(e) => {
              e.target.playbackRate = 1.35
            }}
          />
          <video
            ref={video2Ref}
            className={`clinic-bg-video ${activeSlot === 2 ? 'is-active' : 'is-inactive'}`}
            src="/Video/teeth.mp4"
            muted
            playsInline
            onLoadedMetadata={(e) => {
              e.target.playbackRate = 1.35
            }}
          />

          {/* Video Overlay */}
          <div className="clinic-video-overlay" />

          {/* Top Floating Glass Header Matching Reference Screenshot */}
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

          {/* 2-Line Editorial Typography (Matching Reference Screenshot) */}
          <div
            className="video-scroll-center-content"
            style={{
              transform: `translate3d(0, ${exitY.toFixed(2)}px, 0)`,
              opacity: exitOpacity,
            }}
          >
            <div className="reference-headline-block">
              {/* Line 1: Arrives first */}
              <h2
                className="reference-line reference-line-1"
                style={{
                  transform: `translate3d(0, ${line1Y.toFixed(2)}px, 0)`,
                  opacity: line1Opacity,
                }}
              >
                Her detayında özen, <span className='gulus-gradient-word'>her adımda güven.</span> 
              </h2>

              {/* Line 2: Arrives underneath Line 1 (Line 1 stays visible!) */}
              <h2
                className="reference-line reference-line-2"
                style={{
                  transform: `translate3d(0, ${line2Y.toFixed(2)}px, 0)`,
                  opacity: line2Opacity,
                }}
              >
                Gülüşünüz, en değerli imzanız.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
