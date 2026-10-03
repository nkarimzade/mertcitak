import { useState, useEffect, useRef } from 'react'
import { FiImage, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import FoldText from './FoldText'
import './AboutClinicStory.css'

gsap.registerPlugin(ScrollTrigger)

export const clinicStoryChapters = [
  {
    id: '01',
    label: 'FELSEFEMİZ',
    sublabel: 'Modern Klinik & Özgün Mimari',
    headline: 'Modern diş hekimliği,\nkişisel yaklaşım ile başlar.',
    description:
      'Her gülüş kendine özgü bir hikaye taşır. Tedaviyi sadece teknik bir işlem olarak değil, hastanın yüz anatomisi ve yaşam tarzıyla uyumlu bir zanaat olarak görüyoruz.',
  },
  {
    id: '02',
    label: 'TEKNOLOJİ',
    sublabel: '3D Dijital Tarama & Hassasiyet',
    headline: 'İleri teknoloji,\ndaha kontrollü tedavi.',
    description:
      '3D dijital ağız içi tarayıcılar, mikroskobik hassasiyet ve bilgisayar destekli kılavuzlar sayesinde hata payını sıfıra indiriyor, tedavi süresini kısaltıyoruz.',
  },
  {
    id: '03',
    label: 'DENEYİM',
    sublabel: 'Birebir Güvenli Konsültasyon',
    headline: 'Her hastanın ihtiyacı farklı.\nTedavi planımız da öyle.',
    description:
      'Klasik kalıpları bir kenara bırakıyoruz. Sizi dinliyor, kaygılarınızı anlıyor ve her aşamayı birlikte şeffaflıkla planladığımız konforlu bir klinik deneyimi sunuyoruz.',
  },
  {
    id: '04',
    label: 'SİZİN İÇİN',
    sublabel: 'Doğal & Sağlıklı Gülüş Estetiği',
    headline: 'Çünkü her gülüş\nkendine özgüdür.',
    description:
      'Kliniğimizden ayrıldığınızda sadece sağlıklı dişlere değil, hayatınıza değer katan özgüvenli ve doğal bir gülümsemeye kavuşmanız en büyük motivasyonumuz.',
  },
]

export default function AboutClinicStory() {
  // Desktop Sticky Refs
  const containerRef = useRef(null)
  const textItemsRef = useRef([])
  const imageItemsRef = useRef([])
  const progressLineRef = useRef(null)
  const foldRefs = useRef([])

  // Mobile State
  const [mobileIndex, setMobileIndex] = useState(0)
  const [touchStartX, setTouchStartX] = useState(null)

  // Desktop 420vh Sticky Scroll Animation (Only runs on screens > 880px)
  useEffect(() => {
    const isDesktop = () => window.innerWidth > 880
    if (!isDesktop()) return

    const container = containerRef.current
    if (!container) return

    let animId
    let currentV = 0
    let targetV = 0

    // Easing helpers for scroll-driven reveals
    const clamp01 = (v) => Math.min(1, Math.max(0, v))
    const easeOut = (x) => 1 - Math.pow(1 - x, 3)
    const rp = (t, start, dur) => easeOut(clamp01((t - start) / dur))

    // Pre-cache inner metadata elements per card
    const cardEls = textItemsRef.current.map((textEl) => {
      if (!textEl) return null
      return {
        eyebrow: textEl.querySelector('.eyebrow-label'),
        desc: textEl.querySelector('.chapter-description'),
      }
    })

    const setMetaInitial = (els) => {
      if (!els) return
      if (els.eyebrow) { els.eyebrow.style.transform = 'translateY(100%)'; els.eyebrow.style.opacity = '0' }
      if (els.desc) { els.desc.style.transform = 'translateY(14px)'; els.desc.style.opacity = '0' }
    }

    const setMetaFinal = (els) => {
      if (!els) return
      if (els.eyebrow) { els.eyebrow.style.transform = 'translateY(0%)'; els.eyebrow.style.opacity = '1' }
      if (els.desc) { els.desc.style.transform = 'translateY(0)'; els.desc.style.opacity = '1' }
    }

    const setMetaEntering = (els, t) => {
      if (!els) return
      if (els.eyebrow) {
        const p = rp(t, 0, 0.45)
        els.eyebrow.style.transform = `translateY(${(1 - p) * 100}%)`
        els.eyebrow.style.opacity = `${p}`
      }
      if (els.desc) {
        const p = rp(t, 0.25, 0.5)
        els.desc.style.transform = `translateY(${(1 - p) * 14}px)`
        els.desc.style.opacity = `${p}`
      }
    }

    const revealedSet = new Set()

    const triggerCardFold = (idx) => {
      if (revealedSet.has(idx)) return
      revealedSet.add(idx)
      foldRefs.current[idx]?.play()
      if (cardEls[idx]?.eyebrow) {
        cardEls[idx].eyebrow.style.transition = 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.6s ease'
        cardEls[idx].eyebrow.style.transform = 'translateY(0)'
        cardEls[idx].eyebrow.style.opacity = '1'
      }
      if (cardEls[idx]?.desc) {
        cardEls[idx].desc.style.transition = 'transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.15s, opacity 0.7s ease 0.15s'
        cardEls[idx].desc.style.transform = 'translateY(0)'
        cardEls[idx].desc.style.opacity = '1'
      }
    }

    const resetCardFold = (idx) => {
      if (!revealedSet.has(idx)) return
      revealedSet.delete(idx)
      foldRefs.current[idx]?.reset()
      if (cardEls[idx]?.eyebrow) {
        cardEls[idx].eyebrow.style.transition = 'none'
        cardEls[idx].eyebrow.style.transform = 'translateY(100%)'
        cardEls[idx].eyebrow.style.opacity = '0'
      }
      if (cardEls[idx]?.desc) {
        cardEls[idx].desc.style.transition = 'none'
        cardEls[idx].desc.style.transform = 'translateY(14px)'
        cardEls[idx].desc.style.opacity = '0'
      }
    }

    const scrollTrigger = ScrollTrigger.create({
      trigger: container,
      start: 'top 75%',
      once: true,
      onEnter: () => {
        triggerCardFold(0)
      },
    })

    const initialRect = container.getBoundingClientRect()
    if (initialRect.top < window.innerHeight * 0.75) {
      triggerCardFold(0)
    }

    const computeTargetV = (P) => {
      if (P <= 0.12) return 0
      if (P < 0.38) {
        const u = (P - 0.12) / (0.38 - 0.12)
        const ease = u * u * (3 - 2 * u)
        return 0 + ease
      }
      if (P <= 0.44) return 1
      if (P < 0.70) {
        const u = (P - 0.44) / (0.70 - 0.44)
        const ease = u * u * (3 - 2 * u)
        return 1 + ease
      }
      if (P <= 0.76) return 2
      if (P < 1.0) {
        const u = (P - 0.76) / (1.0 - 0.76)
        const ease = u * u * (3 - 2 * u)
        return 2 + ease
      }
      return 3
    }

    const handleScroll = () => {
      if (!isDesktop()) return
      const rect = container.getBoundingClientRect()
      const scrollableDistance = container.offsetHeight - window.innerHeight
      if (scrollableDistance <= 0) return

      const P = Math.min(Math.max(-rect.top / scrollableDistance, 0), 1)
      targetV = computeTargetV(P)

      if (progressLineRef.current) {
        const fillScale = 0.25 + (targetV / 3) * 0.75
        progressLineRef.current.style.transform = `scaleY(${fillScale})`
      }
    }

    const renderLoop = () => {
      if (!isDesktop()) return
      currentV += (targetV - currentV) * 0.095

      let k = Math.floor(currentV)
      if (k >= 3) k = 2
      if (k < 0) k = 0
      const t = Math.min(Math.max(currentV - k, 0), 1)

      const numItems = clinicStoryChapters.length
      const CARD_GAP = 32
      const TEXT_GAP = 28

      // Trigger fold reveals based on current scroll position
      for (let i = 0; i < numItems; i++) {
        if (i === 0) {
          if (currentV >= 0 && container.getBoundingClientRect().top < window.innerHeight) {
            triggerCardFold(0)
          }
        } else {
          if (currentV >= i - 0.25) {
            triggerCardFold(i)
          } else if (currentV < i - 0.55) {
            resetCardFold(i)
          }
        }
      }

      for (let i = 0; i < numItems; i++) {
        const textEl = textItemsRef.current[i]
        const imgEl = imageItemsRef.current[i]
        const els = cardEls[i]

        if (!textEl || !imgEl) continue

        if (i < k) {
          // Fully gone — reset inner elements, hide card
          textEl.style.transform = `translate3d(0, calc(-100% - ${TEXT_GAP}px), 0)`
          textEl.style.opacity = '0'
          textEl.style.visibility = 'hidden'
          textEl.style.pointerEvents = 'none'
          setMetaInitial(els)

          imgEl.style.transform = `translate3d(0, calc(-100% - ${CARD_GAP}px), 0)`
          imgEl.style.opacity = '0'
          imgEl.style.visibility = 'hidden'
          imgEl.style.zIndex = '1'
        } else if (i === k) {
          // Active / exiting — keep lines fully revealed, slide the parent card away
          const textY = `calc(-${t * 100}% - ${t * TEXT_GAP}px)`
          const textOpacity = Math.max(0, 1 - t * 1.1)

          textEl.style.transform = `translate3d(0, ${textY}, 0)`
          textEl.style.opacity = `${textOpacity}`
          textEl.style.visibility = 'visible'
          textEl.style.pointerEvents = t > 0.5 ? 'none' : 'auto'
          setMetaFinal(els)

          const imgY = `calc(-${t * 100}% - ${t * CARD_GAP}px)`
          imgEl.style.transform = `translate3d(0, ${imgY}, 0)`
          imgEl.style.opacity = '1'
          imgEl.style.visibility = 'visible'
          imgEl.style.zIndex = '2'
        } else if (i === k + 1) {
          // Entering — scroll-driven line reveal synced with image
          const textY = `calc(${(1 - t) * 100}% + ${(1 - t) * TEXT_GAP}px)`
          const textOpacity = Math.min(1, t * 1.2)

          textEl.style.transform = `translate3d(0, ${textY}, 0)`
          textEl.style.opacity = `${textOpacity}`
          textEl.style.visibility = 'visible'
          textEl.style.pointerEvents = t > 0.5 ? 'auto' : 'none'
          setMetaEntering(els, t)

          const imgY = `calc(${(1 - t) * 100}% + ${(1 - t) * CARD_GAP}px)`
          imgEl.style.transform = `translate3d(0, ${imgY}, 0)`
          imgEl.style.opacity = '1'
          imgEl.style.visibility = 'visible'
          imgEl.style.zIndex = '3'
        } else {
          // Not yet entered — hidden with lines at initial state
          textEl.style.transform = `translate3d(0, calc(100% + ${TEXT_GAP}px), 0)`
          textEl.style.opacity = '0'
          textEl.style.visibility = 'hidden'
          textEl.style.pointerEvents = 'none'
          setMetaInitial(els)

          imgEl.style.transform = `translate3d(0, calc(100% + ${CARD_GAP}px), 0)`
          imgEl.style.opacity = '0'
          imgEl.style.visibility = 'hidden'
          imgEl.style.zIndex = '1'
        }
      }

      animId = requestAnimationFrame(renderLoop)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)
    handleScroll()
    renderLoop()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
      cancelAnimationFrame(animId)
      scrollTrigger?.kill()
    }
  }, [])

  // Mobile Handlers
  const handlePrevMobile = () => {
    setMobileIndex((prev) => Math.max(0, prev - 1))
  }

  const handleNextMobile = () => {
    setMobileIndex((prev) => Math.min(clinicStoryChapters.length - 1, prev + 1))
  }

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX)
  }

  const handleTouchEnd = (e) => {
    if (touchStartX === null) return
    const touchEndX = e.changedTouches[0].clientX
    const diff = touchStartX - touchEndX
    if (diff > 45) {
      handleNextMobile()
    } else if (diff < -45) {
      handlePrevMobile()
    }
    setTouchStartX(null)
  }

  const activeMobileChapter = clinicStoryChapters[mobileIndex]

  return (
    <div id="about" className="about-unified-container">
      {/* ============================================================
          DESKTOP STORY VIEW (Active on screens > 880px)
          Features 420vh sticky storytelling, Left=Text, Right=Image
         ============================================================ */}
      <section className="about-desktop-story" ref={containerRef}>
        <div className="about-sticky-viewport">
          {/* Top Minimal Navigation Bar */}
          <div className="about-topbar" data-reveal>
            <div className="about-topbar-brand">
              <span className="about-topbar-name">MERT ÇITAK CLINIC</span>
            </div>

            <div className="about-topbar-meta">
              <span>HAKKIMIZDA</span>
            </div>
          </div>

          {/* Strict 2-Column Stage: LEFT = TEXT, RIGHT = IMAGE */}
          <div className="about-stage-wrapper">
            {/* LEFT CONTENT AREA: Overflow-hidden Text Window */}
            <div className="about-text-column">
              <div className="about-text-window">
                {clinicStoryChapters.map((chapter, idx) => (
                  <div
                    key={chapter.id}
                    className="story-text-card"
                    ref={(el) => (textItemsRef.current[idx] = el)}
                    style={{
                      transform: idx === 0 ? 'translate3d(0, 0%, 0)' : 'translate3d(0, calc(100% + 28px), 0)',
                      opacity: idx === 0 ? 1 : 0,
                    }}
                    data-index={idx}
                  >
                    <div className="chapter-eyebrow">
                      <span className="eyebrow-line-wrap">
                        <span className="eyebrow-label">{chapter.label}</span>
                      </span>
                    </div>

                    <h2 className="chapter-headline">
                      <FoldText
                        ref={(el) => (foldRefs.current[idx] = el)}
                        text={chapter.headline}
                        splitBy="word"
                        hinge="top"
                        trigger="manual"
                        duration={0.65}
                        stagger={0.045}
                        creaseShading={0.55}
                        perspective={700}
                      />
                    </h2>

                    <p className="chapter-description">{chapter.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT IMAGE AREA: Fixed Frame strictly staying on the right side */}
            <div className="about-image-column">
              <div className="about-image-frame" aria-label="Klinik Görseli">
                {clinicStoryChapters.map((chapter, idx) => (
                  <div
                    key={chapter.id}
                    className="story-image-card"
                    ref={(el) => (imageItemsRef.current[idx] = el)}
                    style={{
                      opacity: idx === 0 ? 1 : 0,
                      transform: idx === 0 ? 'translate3d(0, 0%, 0)' : 'translate3d(0, calc(100% + 32px), 0)',
                    }}
                  >
                    {/* Luxury Editorial Placeholder Box */}
                    <div className="story-placeholder-inner">
                      <div className="placeholder-ambient-glow" />
                      <div className="placeholder-content-box">
                        <div className="placeholder-icon-circle">
                          <FiImage size={28} />
                        </div>
                        <span className="placeholder-main-label">Görsel Eklenecek</span>
                        <span className="placeholder-sub-label">{chapter.sublabel}</span>
                      </div>
                    </div>

                    {/* Chapter Badge on card */}
                    <div className="image-overlay-badge">
                      <span className="badge-text">{chapter.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Minimal Right-Side Vertical Stepper Line for Desktop */}
          <div className="about-stepper-track-wrap" data-reveal data-reveal-delay="2" aria-label="Hikaye İlerlemesi">
            <div className="stepper-track-line">
              <div className="stepper-track-fill" ref={progressLineRef} />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          MOBILE STORY VIEW (Active on screens <= 880px)
          Built completely from scratch for mobile devices.
          Natural page scroll flow (NO scroll hijacking/pinning).
          No giant gaps. Beautiful segmented card layout.
         ============================================================ */}
      <section className="about-mobile-story">
        <div className="about-mobile-inner">
          {/* Header Block */}
          <div className="mobile-about-header">
            <span className="mobile-about-eyebrow" data-reveal>HAKKIMIZDA</span>
            <h2 className="mobile-about-title" data-reveal data-reveal-delay="1">
              Modern Diş Hekimliği,<br />
              Kişisel Yaklaşım.
            </h2>
            <p className="mobile-about-intro" data-reveal data-reveal-delay="2">
              Her hastanın ihtiyacı farklı. Kliniğimizde ileri teknoloji ve hekimlik zanaatını birleştiriyoruz.
            </p>
          </div>

          {/* 4 Interactive Category Pills */}
          <div className="mobile-about-tabs" role="tablist" data-reveal data-reveal-delay="3">
            {clinicStoryChapters.map((chapter, idx) => (
              <button
                key={chapter.id}
                type="button"
                role="tab"
                aria-selected={idx === mobileIndex}
                className={`mobile-tab-btn ${idx === mobileIndex ? 'active' : ''}`}
                onClick={() => setMobileIndex(idx)}
              >
                <span>{chapter.label}</span>
              </button>
            ))}
          </div>

          {/* Single Unified Active Story Card — key forces re-mount (re-triggers animation) on tab change */}
          <div
            key={mobileIndex}
            className="mobile-chapter-card is-active"
            data-reveal="scale"
            data-reveal-delay="4"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Card Header: Category Tag */}
            <div className="mobile-card-top-row">
              <span className="mobile-card-tag">{activeMobileChapter.label}</span>
            </div>

            {/* Headline */}
            <h3 className="mobile-card-headline">
              <FoldText
                text={activeMobileChapter.headline}
                splitBy="word"
                hinge="top"
                trigger="mount"
                duration={0.65}
                stagger={0.045}
                creaseShading={0.55}
                perspective={700}
              />
            </h3>

            {/* Description */}
            <p className="mobile-card-description">{activeMobileChapter.description}</p>

            {/* Luxury Editorial Placeholder Box */}
            <div className="mobile-placeholder-frame" aria-label="Bölüm Görseli">
              <div className="mobile-placeholder-inner">
                <div className="placeholder-ambient-glow" />
                <div className="placeholder-content-box">
                  <div className="placeholder-icon-circle">
                    <FiImage size={24} />
                  </div>
                  <span className="placeholder-main-label">Görsel Eklenecek</span>
                  <span className="placeholder-sub-label">{activeMobileChapter.sublabel}</span>
                </div>
              </div>
            </div>

            {/* Card Bottom Controls: Dots & Arrows */}
            <div className="mobile-card-controls">
              <div className="mobile-dots-indicator">
                {clinicStoryChapters.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    aria-label={`${idx + 1}. bölüme git`}
                    className={`mobile-indicator-dot ${idx === mobileIndex ? 'active' : ''}`}
                    onClick={() => setMobileIndex(idx)}
                  />
                ))}
              </div>

              <div className="mobile-nav-buttons">
                <button
                  type="button"
                  className="mobile-nav-arrow"
                  onClick={handlePrevMobile}
                  disabled={mobileIndex === 0}
                  aria-label="Önceki Bölüm"
                >
                  <FiChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  className="mobile-nav-arrow"
                  onClick={handleNextMobile}
                  disabled={mobileIndex === clinicStoryChapters.length - 1}
                  aria-label="Sonraki Bölüm"
                >
                  <FiChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
