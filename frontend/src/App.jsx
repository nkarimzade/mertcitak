import { useState, useEffect } from 'react'
import TopHeader from './components/TopHeader'
import Header from './components/Header'
import Hero from './components/Hero'
import AboutClinicStory from './components/AboutClinicStory'
import TeamSection from './components/TeamSection'
import ClinicVideoScroll from './components/ClinicVideoScroll'
import GallerySection from './components/GallerySection'
import StoryModal from './components/StoryModal'
import BookingModal from './components/BookingModal'
import { initScrollReveal } from './utils/scrollReveal'

function App() {
  const [isStoryOpen, setIsStoryOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  useEffect(() => {
    const cleanup = initScrollReveal()
    return cleanup
  }, [])

  return (
    <div className="app-root">
      <TopHeader onDiscoverClick={() => {
        const el = document.querySelector('#clinic') || document.querySelector('#about')
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }} />
      <Header
        menuOpen={isMenuOpen}
        setMenuOpen={setIsMenuOpen}
        onContactClick={() => setIsBookingOpen(true)}
      />
      <Hero
        onWatchStory={() => setIsStoryOpen(true)}
      />
      <AboutClinicStory />
      <TeamSection />
      <ClinicVideoScroll />
      <GallerySection />
      <StoryModal
        isOpen={isStoryOpen}
        onClose={() => setIsStoryOpen(false)}
      />
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  )
}

export default App
