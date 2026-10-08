import { useState, useEffect } from 'react'
import TopHeader from './components/TopHeader'
import Header from './components/Header'
import Hero from './components/Hero'
import TreatmentsSection from './components/TreatmentsSection'
import AboutClinicStory from './components/AboutClinicStory'
import TeamSection from './components/TeamSection'
import ClinicVideoScroll from './components/ClinicVideoScroll'
import GoogleReviews from './components/GoogleReviews'
import GallerySection from './components/GallerySection'
import ContactSection from './components/ContactSection'
import ContactEnding from './components/ContactEnding'
import TreatmentPage from './components/TreatmentPage'
import { treatments } from './data/treatments'
import StoryModal from './components/StoryModal'
import { initScrollReveal } from './utils/scrollReveal'

function App() {
  const [isStoryOpen, setIsStoryOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const cleanup = initScrollReveal()
    return cleanup
  }, [])

  const treatmentPath = window.location.pathname.match(/^\/tedavilerimiz\/([^/]+)\/?$/)
  if (treatmentPath) {
    const treatment = treatments.find((item) => item.slug === treatmentPath[1])
    return (
      <div className="app-root">
        <Header homePath="/" />
        <TreatmentPage treatment={treatment} />
        <ContactEnding homePath="/" />
      </div>
    )
  }

  return (
    <div className="app-root">
      <TopHeader onDiscoverClick={() => {
        const el = document.querySelector('#clinic') || document.querySelector('#about')
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }} />
      <Header
        menuOpen={isMenuOpen}
        setMenuOpen={setIsMenuOpen}
        onContactClick={() => {
          const el = document.querySelector('#contact')
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        }}
      />
      <Hero
        onWatchStory={() => setIsStoryOpen(true)}
      />
      <TreatmentsSection />
      <ClinicVideoScroll />
      <AboutClinicStory />
      <TeamSection />
      <GoogleReviews />
      <GallerySection />
      <ContactSection />
      <ContactEnding />
      <StoryModal
        isOpen={isStoryOpen}
        onClose={() => setIsStoryOpen(false)}
      />
    </div>
  )
}

export default App
