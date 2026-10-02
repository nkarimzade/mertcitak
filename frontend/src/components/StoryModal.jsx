import { useEffect, useRef } from 'react'
import { FiX } from 'react-icons/fi'
import './StoryModal.css'

export default function StoryModal({ isOpen, onClose, videoSrc = '/home/story.mp4' }) {
  const videoRef = useRef(null)

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  // Pause video if closed
  useEffect(() => {
    if (!isOpen && videoRef.current) {
      videoRef.current.pause()
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      className="video-modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Klinik Hikayesi Videosu"
    >
      <div
        className="video-modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="video-modal-close"
          onClick={onClose}
          aria-label="Videoyu Kapat"
        >
          <FiX size={20} />
        </button>

        <video
          ref={videoRef}
          className="story-video-player"
          controls
          autoPlay
          playsInline
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
    </div>
  )
}
