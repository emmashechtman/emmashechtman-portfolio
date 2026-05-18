import { useEffect } from 'react'

export function PhotoLightbox({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrevious,
  title,
}) {
  const currentImage = images?.[currentIndex]

  useEffect(() => {
    if (currentIndex === null) return undefined

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowRight') onNext()
      if (event.key === 'ArrowLeft') onPrevious()
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [currentIndex, onClose, onNext, onPrevious])

  if (currentIndex === null || !currentImage) {
    return null
  }

  return (
    <div
      className="lightbox"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title ? `${title} image viewer` : 'Image viewer'}
    >
      <button
        type="button"
        className="lightbox-close"
        aria-label="Close image viewer"
        onClick={onClose}
      >
        ×
      </button>

      <button
        type="button"
        className="lightbox-nav lightbox-nav--prev"
        aria-label="Previous image"
        onClick={(event) => {
          event.stopPropagation()
          onPrevious()
        }}
      >
        ‹
      </button>

      <div
        className="lightbox-content"
        onClick={(event) => event.stopPropagation()}
      >
        <img
          className="lightbox-image"
          src={currentImage.src}
          alt={currentImage.alt}
        />
      </div>

      <button
        type="button"
        className="lightbox-nav lightbox-nav--next"
        aria-label="Next image"
        onClick={(event) => {
          event.stopPropagation()
          onNext()
        }}
      >
        ›
      </button>
    </div>
  )
}
