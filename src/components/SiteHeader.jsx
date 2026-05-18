import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { siteContent } from '../content'

function resolveHomeHref(pathname, href) {
  if (!href) return '/'
  return pathname === '/' ? href : `/${href}`
}

export function SiteHeader({ animated = false }) {
  const [openDropdown, setOpenDropdown] = useState(null)
  const location = useLocation()
  const nav = siteContent.nav ?? {}
  const navItems = nav.items ?? []
  const leadingNavItems = navItems.filter((item) => item.label !== 'Contact')
  const trailingNavItems = navItems.filter((item) => item.label === 'Contact')
  const workDropdown = nav.work ?? {}
  const workItems = workDropdown.items ?? []
  const photojournalismItems = nav.photojournalism?.items ?? []
  const topbarClassName = animated ? 'topbar reveal-up' : 'topbar'

  return (
    <header className="site-header" id={location.pathname === '/' ? 'top' : undefined}>
      <nav className={topbarClassName} aria-label="Primary">
        <a className="brand" href={location.pathname === '/' ? '#top' : '/'}>
          <img className="brand-logo" src="/es-logo.png" alt={nav.brand ?? 'Emma Shechtman'} />
        </a>

        <div className="nav-links">
          {leadingNavItems.map((item) => (
            <a href={resolveHomeHref(location.pathname, item.href)} key={`${item.label}-${item.href}`}>
              {item.label}
            </a>
          ))}

          <div
            className={`nav-dropdown ${openDropdown === 'work' ? 'is-open' : ''}`.trim()}
            onMouseEnter={() => setOpenDropdown('work')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              type="button"
              className="nav-dropdown-trigger"
              aria-expanded={openDropdown === 'work'}
              aria-haspopup="true"
              onClick={() => setOpenDropdown((open) => (open === 'work' ? null : 'work'))}
              onKeyDown={(event) => {
                if (event.key === 'Escape') {
                  setOpenDropdown(null)
                }
              }}
            >
              {workDropdown.label ?? 'Work'}
            </button>

            <div className="nav-dropdown-menu" role="menu">
              {workItems.map((item) => (
                <a
                  className="nav-dropdown-link"
                  href={resolveHomeHref(location.pathname, item.href)}
                  key={`${item.label}-${item.href}`}
                  onClick={() => setOpenDropdown(null)}
                  role="menuitem"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div
            className={`nav-dropdown ${openDropdown === 'photojournalism' ? 'is-open' : ''}`.trim()}
            onMouseEnter={() => setOpenDropdown('photojournalism')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              type="button"
              className="nav-dropdown-trigger"
              aria-expanded={openDropdown === 'photojournalism'}
              aria-haspopup="true"
              onClick={() =>
                setOpenDropdown((open) => (open === 'photojournalism' ? null : 'photojournalism'))
              }
              onKeyDown={(event) => {
                if (event.key === 'Escape') {
                  setOpenDropdown(null)
                }
              }}
            >
              {nav.photojournalism?.label ?? 'Photojournalism'}
            </button>

            <div className="nav-dropdown-menu" role="menu">
              {photojournalismItems.map((item) => (
                <Link
                  className="nav-dropdown-link"
                  key={item.slug}
                  onClick={() => setOpenDropdown(null)}
                  role="menuitem"
                  to={`/photojournalism/${item.slug}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {trailingNavItems.map((item) => (
            <a href={resolveHomeHref(location.pathname, item.href)} key={`${item.label}-${item.href}`}>
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
