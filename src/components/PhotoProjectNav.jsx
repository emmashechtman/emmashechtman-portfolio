import { Link } from 'react-router-dom'

export function PhotoProjectNav({ projects = [], currentSlug }) {
  const currentIndex = projects.findIndex((project) => project.slug === currentSlug)

  if (!projects.length || currentIndex === -1) {
    return null
  }

  const previousProject = projects[(currentIndex - 1 + projects.length) % projects.length]
  const nextProject = projects[(currentIndex + 1) % projects.length]

  return (
    <nav className="photo-project-nav" aria-label="Photojournalism project navigation">
      <Link
        to={`/photojournalism/${previousProject.slug}`}
        className="photo-project-nav-link photo-project-nav-link--previous"
      >
        <span aria-hidden="true" className="photo-project-nav-arrow">
          ‹
        </span>
        <span>{previousProject.title}</span>
      </Link>

      <Link
        to={`/photojournalism/${nextProject.slug}`}
        className="photo-project-nav-link photo-project-nav-link--next"
      >
        <span>{nextProject.title}</span>
        <span aria-hidden="true" className="photo-project-nav-arrow">
          ›
        </span>
      </Link>
    </nav>
  )
}
