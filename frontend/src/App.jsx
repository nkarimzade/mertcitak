import { useState, useEffect } from 'react'
import TopHeader from './components/TopHeader'
import Header from './components/Header'
import Hero from './components/Hero'
import AboutClinicStory from './components/AboutClinicStory'
import TeamSection from './components/TeamSection'
import StoryModal from './components/StoryModal'
import { initScrollReveal } from './utils/scrollReveal'

function App() {
  const [isStoryOpen, setIsStoryOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const cleanup = initScrollReveal()
    return cleanup
  }, [])

  return (
    <div className="app-root">
      <TopHeader onDiscoverClick={() => setIsMenuOpen(true)} />
      <Header
        menuOpen={isMenuOpen}
        setMenuOpen={setIsMenuOpen}
        onContactClick={() => setIsMenuOpen(true)}
      />
      <Hero
        onWatchStory={() => setIsStoryOpen(true)}
      />
      <AboutClinicStory />
      <TeamSection />
      <StoryModal
        isOpen={isStoryOpen}
        onClose={() => setIsStoryOpen(false)}
      />
    </div>
  )
}

export default App
