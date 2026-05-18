import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { PhotoLightbox } from '../components/PhotoLightbox'
import { PhotoProjectNav } from '../components/PhotoProjectNav'
import { SiteHeader } from '../components/SiteHeader'
import { siteContent } from '../content'
import '../App.css'

function GalleryImage({ src, alt }) {
  const [hasError, setHasError] = useState(false)

  if (!src || hasError) {
    return (
      <div className="photo-gallery-fallback">
        <span>{src || 'Missing image path'}</span>
      </div>
    )
  }

  return <img src={src} alt={alt} onError={() => setHasError(true)} />
}

export default function PhotojournalismProject() {
  const { slug } = useParams()
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const photojournalismProjects = siteContent.photojournalismProjects ?? []
  const project = photojournalismProjects.find((item) => item.slug === slug)
  const isHumansAndLines = project?.slug === 'humans-and-lines'
  const isNapule = project?.slug === 'napule'
  const projectImages = project?.images ?? []
  const imageIndexBySrc = new Map(projectImages.map((image, index) => [image.src, index]))

  const openLightbox = (index) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)
  const showNext = () => {
    setLightboxIndex((current) =>
      current === projectImages.length - 1 ? 0 : current + 1,
    )
  }
  const showPrevious = () => {
    setLightboxIndex((current) =>
      current === 0 ? projectImages.length - 1 : current - 1,
    )
  }
  const openLightboxBySrc = (src) => {
    const imageIndex = imageIndexBySrc.get(src)

    if (typeof imageIndex === 'number') {
      openLightbox(imageIndex)
    }
  }
  const renderNapuleText = (paragraphs = [], language = 'english') => (
    <div className={`napule-copy napule-copy--${language}`}>
      {paragraphs.map((paragraph, paragraphIndex) => (
        <p key={`${language}-${paragraphIndex}-${paragraph}`}>{paragraph}</p>
      ))}
    </div>
  )

  const renderNapuleImage = (src, key, layout = '') => {
    const imageIndex = imageIndexBySrc.get(src)
    const imageAlt = projectImages[imageIndex]?.alt ?? `${project?.title} image ${(imageIndex ?? 0) + 1}`
    const className = layout ? `napule-image napule-image--${layout}` : 'napule-image'

    return (
      <figure className={className} key={key}>
        <button
          type="button"
          className="napule-image-trigger"
          onClick={() => openLightboxBySrc(src)}
          aria-label={`Open image ${(imageIndex ?? 0) + 1} of ${projectImages.length}`}
        >
          <GalleryImage src={src} alt={imageAlt} />
        </button>
      </figure>
    )
  }

  const renderNapuleColumn = (column, rowIndex, columnIndex) => {
    if (!column) {
      return null
    }

    if (column.type === 'image') {
      return renderNapuleImage(column.image, `napule-row-${rowIndex}-image-${columnIndex}`, 'inline')
    }

    if (column.type === 'text') {
      return (
        <div className="napule-column" key={`napule-row-${rowIndex}-text-${columnIndex}`}>
          {renderNapuleText(column.paragraphs, column.language)}
        </div>
      )
    }

    if (column.type === 'textPair') {
      return (
        <div className="napule-column" key={`napule-row-${rowIndex}-pair-${columnIndex}`}>
          <div className="napule-text-pair napule-text-pair--stacked">
            {renderNapuleText(column.italian, 'italian')}
            {renderNapuleText(column.english, 'english')}
          </div>
        </div>
      )
    }

    return null
  }

  if (!project) {
    return (
      <div className="page-shell">
        <SiteHeader />
        <main className="photo-page">
          <section className="photo-project-header">
            <p className="eyebrow">Photojournalism</p>
            <h1>Project not found.</h1>
            <p className="photo-project-lead">
              The photojournalism page you requested doesn&apos;t exist yet.
            </p>
            <Link className="button button-primary" to="/">
              Back to home
            </Link>
          </section>
        </main>
      </div>
    )
  }

  return (
    <div className="page-shell">
      <SiteHeader />

      <main className="photo-page">
        {isHumansAndLines ? (
          <>
            <section className="photo-project photo-project--humans-lines">
              <aside className="photo-project-sticky-copy">
                <p className="eyebrow">Photojournalism</p>
                <h1>{project.title}</h1>
                <div className="photo-project-body">
                  {(project.body ?? []).map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </aside>

              <div
                className="photo-gallery photo-project-gallery--two-column"
                aria-label={`${project.title} gallery`}
              >
                {projectImages.map((image, index) => (
                  <button
                    key={image.src}
                    className="photo-gallery-trigger"
                    type="button"
                    onClick={() => openLightbox(index)}
                    aria-label={`Open image ${index + 1} of ${projectImages.length}`}
                  >
                    <GalleryImage src={image.src} alt={image.alt} />
                  </button>
                ))}
              </div>
            </section>

            <section className="humans-memorial">
              <div className="humans-memorial-media">
                <div className="humans-memorial-image">
                  <GalleryImage
                    src={project.memorial?.image}
                    alt={project.memorial?.name || 'Memorial image'}
                  />
                </div>
              </div>
              <div className="humans-memorial-copy">
                <p className="eyebrow">{project.memorial?.label}</p>
                <h2>{project.memorial?.name}</h2>
                <p>{project.memorial?.dates}</p>
              </div>
            </section>
          </>
        ) : isNapule ? (
          <section className="napule-page">
            <header className="napule-header">
              <p className="eyebrow">Photojournalism</p>
              <h1>{project.title}</h1>
            </header>

            {(project.rows ?? []).map((row, rowIndex) => {
              if (row.type === 'textPair') {
                return (
                  <section className="napule-row napule-row--full" key={`napule-row-${rowIndex}`}>
                    <div className="napule-text-pair">
                      {renderNapuleText(row.italian, 'italian')}
                      {renderNapuleText(row.english, 'english')}
                    </div>
                  </section>
                )
              }

              if (row.type === 'image') {
                return (
                  <section className="napule-row napule-row--image" key={`napule-row-${rowIndex}`}>
                    {renderNapuleImage(row.image, `napule-row-image-${rowIndex}`, row.layout || 'center')}
                  </section>
                )
              }

              if (row.type === 'split') {
                return (
                  <section className="napule-row napule-row--split" key={`napule-row-${rowIndex}`}>
                    {(row.columns ?? []).map((column, columnIndex) =>
                      renderNapuleColumn(column, rowIndex, columnIndex),
                    )}
                  </section>
                )
              }

              if (row.type === 'triple') {
                return (
                  <section className="napule-row napule-row--triple" key={`napule-row-${rowIndex}`}>
                    {(row.columns ?? []).map((column, columnIndex) =>
                      renderNapuleColumn(column, rowIndex, columnIndex),
                    )}
                  </section>
                )
              }

              if (row.type === 'finalStatement') {
                return (
                  <section className="napule-final-statement" key={`napule-row-${rowIndex}`}>
                    <p className="napule-final-statement__italian italian">{row.italian}</p>
                    <p className="napule-final-statement__english english">{row.english}</p>
                  </section>
                )
              }

              return null
            })}
          </section>
        ) : (
          <>
            <section className="photo-project-header">
              <p className="eyebrow">Photojournalism</p>
              <h1>{project.title}</h1>
              <div className="photo-project-body">
                {(project.body ?? []).map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>

            <section className="photo-gallery" aria-label={`${project.title} gallery`}>
              {projectImages.map((image, index) => (
                <button
                  key={image.src}
                  className="photo-gallery-trigger"
                  type="button"
                  onClick={() => openLightbox(index)}
                  aria-label={`Open image ${index + 1} of ${projectImages.length}`}
                >
                  <GalleryImage src={image.src} alt={image.alt} />
                </button>
              ))}
            </section>
          </>
        )}

        <PhotoProjectNav projects={photojournalismProjects} currentSlug={project.slug} />

        <PhotoLightbox
          images={projectImages}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onNext={showNext}
          onPrevious={showPrevious}
          title={project.title}
        />
      </main>
    </div>
  )
}
