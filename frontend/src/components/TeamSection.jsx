import { useEffect, useRef, useState } from 'react'
import { FiImage } from 'react-icons/fi'
import './TeamSection.css'

const teamMembers = [
  {
    id: '01',
    name: 'Dr. Ayşe Yılmaz',
    role: 'Ortodonti Uzmanı',
    specialty: 'Şeffaf Plak & Dijital Çene Modelleme',
    experience: '12+ Yıl Klinik Deneyim',
    image:
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: '02',
    name: 'Dr. Mehmet Kaya',
    role: 'İmplantoloji & Çene Cerrahisi',
    specialty: '3D Kılavuzlu İmplant & Kemik Cerrahisi',
    experience: '15+ Yıl Klinik Deneyim',
    image:
      'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: '03',
    name: 'Dr. Elif Demir',
    role: 'Estetik Diş Hekimliği',
    specialty: 'Porselen Lamine & Dijital Gülüş Tasarımı',
    experience: '10+ Yıl Klinik Deneyim',
    image:
      'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: '04',
    name: 'Dr. Burak Arslan',
    role: 'Protetik Diş Tedavisi & Endodonti',
    specialty: 'Mikroskobik Tedavi & Zirkonyum Restorasyon',
    experience: '9+ Yıl Klinik Deneyim',
    image:
      'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=1000&q=85',
  },
]

export default function TeamSection() {
  const containerRef = useRef(null)
  const viewportRef = useRef(null)
  const trackRef = useRef(null)
  const progressCircleRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const container = containerRef.current
    const track = trackRef.current
    if (!container || !track) return

    let animId
    let currentX = 0
    let targetX = 0
    let currentExpandP = 0
    let targetExpandP = 0

    const isMobileView = () => window.innerWidth <= 840

    const handleScroll = () => {
      if (isMobileView()) {
        const viewport = viewportRef.current
        if (viewport) {
          viewport.style.width = ''
          viewport.style.top = ''
          viewport.style.height = ''
          viewport.style.borderRadius = ''
          viewport.style.boxShadow = ''
          viewport.style.border = ''
        }

        // Mobile progress tracked via scrollLeft of track
        const maxScrollLeft = track.scrollWidth - track.clientWidth
        if (maxScrollLeft > 0) {
          const ratio = track.scrollLeft / maxScrollLeft
          const idx = Math.min(
            teamMembers.length - 1,
            Math.round(ratio * (teamMembers.length - 1))
          )
          setActiveIndex(idx)
          if (progressCircleRef.current) {
            const circumference = 138.23
            const fillRatio = Math.max(0.08, ratio)
            progressCircleRef.current.style.strokeDashoffset = `${circumference * (1 - fillRatio)}`
          }
        }
        return
      }

      // Desktop: Native sticky scroll calculation
      const rect = container.getBoundingClientRect()
      const scrollableDistance = container.offsetHeight - window.innerHeight
      if (scrollableDistance <= 0) return

      // Expansion calculation:
      // When approaching from below: stays clearly as a floating card with 72px side gaps and 48px radius
      // When scroll reaches exactly here (rect.top <= 140px down into pinned state):
      // it expands smoothly from floating card to full bleed right before your eyes!
      let rawExpand = 0
      if (rect.top > 140) {
        rawExpand = 0
      } else if (rect.top > 0) {
        rawExpand = ((140 - rect.top) / 140) * 0.45
      } else {
        const pinProgress = Math.min(Math.max(-rect.top / scrollableDistance, 0), 1)
        rawExpand = 0.45 + Math.min(pinProgress / 0.08, 1) * 0.55
      }
      targetExpandP = Math.min(Math.max(rawExpand, 0), 1)

      // Progress for team member cards: starts once expansion reaches full size
      const progress = Math.min(Math.max(-rect.top / scrollableDistance, 0), 1)
      const cardProgress = Math.min(Math.max((progress - 0.08) / 0.92, 0), 1)

      // Total horizontal shift to smoothly reveal card 01 through card 04
      const maxShift = Math.max(0, track.scrollWidth - window.innerWidth + 140)
      targetX = -cardProgress * maxShift

      // Active index for indicator and numerals
      const currentIdx = Math.min(
        teamMembers.length - 1,
        Math.floor(progress * teamMembers.length + 0.18)
      )
      setActiveIndex(currentIdx)

      // Update circular progress ring
      if (progressCircleRef.current) {
        const circumference = 138.23
        const fillP = Math.max(0.08, progress)
        progressCircleRef.current.style.strokeDashoffset = `${circumference * (1 - fillP)}`
      }
    }

    const renderLoop = () => {
      if (!isMobileView()) {
        // Expand viewport smoothly into full-bleed on scroll
        currentExpandP += (targetExpandP - currentExpandP) * 0.09
        const viewport = viewportRef.current
        if (viewport) {
          const sideGap = (1 - currentExpandP) * 72 // 72px on each side (total 144px visible white frame)
          const vertGap = (1 - currentExpandP) * 28 // 28px top/bottom
          const radius = (1 - currentExpandP) * 48  // 48px corner radius
          const shadow = (1 - currentExpandP) * 0.12
          const borderAlpha = (1 - currentExpandP) * 0.95

          viewport.style.width = `calc(100% - ${sideGap * 2}px)`
          viewport.style.top = `${vertGap}px`
          viewport.style.height = `calc(100vh - ${vertGap * 2}px)`
          viewport.style.borderRadius = `${radius}px`
          viewport.style.boxShadow = currentExpandP > 0.99 ? 'none' : `0 28px 70px rgba(35, 28, 16, ${shadow}), 0 2px 6px rgba(0, 0, 0, 0.04)`
          viewport.style.border = currentExpandP > 0.99 ? 'none' : `1.5px solid rgba(215, 205, 190, ${borderAlpha})`
        }

        // Calmer, smooth weighted inertia (Apple 60fps feel)
        currentX += (targetX - currentX) * 0.075
        track.style.transform = `translate3d(${currentX}px, 0, 0)`

        // Dynamic card scaling & opacity based on current horizontal position
        const cards = track.querySelectorAll('.team-card')
        const maxShift = Math.max(1, track.scrollWidth - window.innerWidth + 140)
        const currentP = Math.min(Math.max(Math.abs(currentX) / maxShift, 0), 1)

        cards.forEach((card, idx) => {
          const cardTargetP = idx / (teamMembers.length - 1)
          const dist = Math.abs(currentP - cardTargetP)
          const proximity = Math.max(0, 1 - dist * 1.9)

          const scale = 0.92 + proximity * 0.08
          const opacity = 0.44 + proximity * 0.56
          card.style.transform = `scale(${scale})`
          card.style.opacity = `${opacity}`
        })
      }

      animId = requestAnimationFrame(renderLoop)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)
    track.addEventListener('scroll', handleScroll, { passive: true })

    // Trigger initial calculation
    handleScroll()
    renderLoop()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
      track.removeEventListener('scroll', handleScroll)
      cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <section className="team-scroll-container" ref={containerRef} id="team">
      <div className="team-pinned-viewport" ref={viewportRef}>
        {/* Top Header Row: Heading, Subtext & Circular Progress */}
        <div className="team-top-container">
          <div className="team-heading-block">
            <div className="team-eyebrow" data-reveal data-reveal-delay="1">
              <span>TEKNİK EKİBİMİZ</span>
            </div>

            <h2 className="team-headline" data-reveal data-reveal-delay="2">
              Alanında uzman,<br />
              güvenilir bir ekip.
            </h2>

            <p className="team-subtext" data-reveal data-reveal-delay="3">
              Her tedavinin arkasında deneyim, teknoloji ve birlikte çalışan uzman bir ekip var.
            </p>
          </div>

          {/* Minimalist Circular Progress Indicator with 'Ekip' text */}
          <div className="team-progress-circle-wrap" data-reveal="scale" data-reveal-delay="3" aria-label="Ekip Galerisi İlerlemesi">
            <svg className="team-progress-ring" width="52" height="52" viewBox="0 0 52 52">
              <circle
                className="progress-ring-bg"
                cx="26"
                cy="26"
                r="22"
                fill="none"
                stroke="#e5e5ea"
                strokeWidth="2.5"
              />
              <circle
                ref={progressCircleRef}
                className="progress-ring-fill"
                cx="26"
                cy="26"
                r="22"
                fill="none"
                stroke="#111111"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="138.23"
                strokeDashoffset="128"
              />
            </svg>
            <span className="progress-ring-center-text">Ekip</span>
          </div>
        </div>

        {/* Horizontal Team Track */}
        <div className="team-stage-wrapper" data-reveal data-reveal-delay="4">
          <div className="team-track" ref={trackRef}>
            {teamMembers.map((member, index) => {
              const isActive = index === activeIndex
              return (
                <article
                  key={member.id}
                  className={`team-card ${isActive ? 'is-active' : ''}`}
                >
                  <div className="team-card-image-wrap team-placeholder-wrap">
                    {/* Center Placeholder Box */}
                    <div className="team-placeholder-center">
                      <div className="placeholder-icon-circle">
                        <FiImage size={24} />
                      </div>
                      <span className="placeholder-label">Görsel Eklenecek</span>
                    </div>

                    {/* Editorial Content */}
                    <div className="team-card-content team-card-content-light">
                      <div className="team-card-experience-pill light-pill">
                        {member.experience}
                      </div>
                      <h3 className="team-card-name light-name">{member.name}</h3>
                      <p className="team-card-role light-role">{member.role}</p>
                      <p className="team-card-specialty light-specialty">{member.specialty}</p>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
