import { useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { AssetOrPlaceholder } from '../components/AssetOrPlaceholder'
import { SectionHeading } from '../components/SectionHeading'
import { SiteHeader } from '../components/SiteHeader'
import { siteContent } from '../content'
import '../App.css'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const pageRef = useRef(null)
  const effVideoRef = useRef(null)
  const [effPosterLoaded, setEffPosterLoaded] = useState(false)
  const [effPosterError, setEffPosterError] = useState(false)
  const [effVideoError, setEffVideoError] = useState(false)
  const [effVideoStarted, setEffVideoStarted] = useState(false)
  const hero = siteContent.hero ?? {}
  const about = siteContent.about ?? {}
  const whatIDo = siteContent.whatIDo ?? {}
  const selectedWork = siteContent.selectedWork ?? {}
  const cyvl = siteContent.cyvl ?? {}
  const agb = siteContent.agb ?? {}
  const emmaFeedsYourFeed = siteContent.emmaFeedsYourFeed ?? {}
  const skills = siteContent.skills ?? {}
  const resume = siteContent.resume ?? {}
  const contact = siteContent.contact ?? {}
  const heroName = hero.name ?? []
  const heroParagraphs = hero.paragraphs ?? []
  const heroCtas = hero.ctas ?? []
  const aboutParagraphs = about.paragraphs ?? []
  const aboutMeta = about.meta ?? []
  const whatIDoItems = whatIDo.items ?? []
  const selectedWorkItems = selectedWork.items ?? []
  const cyvlDetails = cyvl.details ?? []
  const cyvlProofPoints = cyvl.proofPoints ?? []
  const agbDetails = agb.details ?? []
  const agbProofPoints = agb.proofPoints ?? []
  const agbImages = agb.images ?? []
  const effStoryBlocks = emmaFeedsYourFeed.storyBlocks ?? []
  const skillCategories = skills.categories ?? []

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined
    }

    const mm = gsap.matchMedia()

    const ctx = gsap.context(() => {
      gsap.set('.reveal-up, .stagger-item, .about-portrait-frame, .about-portrait-accent', {
        autoAlpha: 0,
      })

      gsap.utils.toArray('.reveal-up').forEach((element) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 36 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 84%',
              once: true,
            },
          },
        )
      })

      gsap.utils.toArray('.stagger-group').forEach((group) => {
        const children = group.querySelectorAll('.stagger-item')

        gsap.fromTo(
          children,
          { autoAlpha: 0, y: 34 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: group,
              start: 'top 82%',
              once: true,
            },
          },
        )
      })

      const aboutTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.about-portrait-stage',
          start: 'top 82%',
          end: 'bottom 32%',
          scrub: 0.8,
        },
      })

      aboutTl
        .fromTo(
          '.about-portrait-accent',
          { autoAlpha: 0, xPercent: -8, yPercent: 10, scale: 0.92 },
          { autoAlpha: 1, xPercent: 0, yPercent: 0, scale: 1, ease: 'power2.out' },
          0,
        )
        .fromTo(
          '.about-portrait-frame',
          { autoAlpha: 0, y: 42, scale: 0.92, rotate: -2.5 },
          { autoAlpha: 1, y: 0, scale: 1, rotate: 0, ease: 'power2.out' },
          0.04,
        )

      gsap.to('.about-portrait-frame', {
        yPercent: -5,
        ease: 'none',
        scrollTrigger: {
          trigger: '.about-portrait-stage',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })

      gsap.utils.toArray('.feature-card').forEach((card, index) => {
        gsap.fromTo(
          card,
          { autoAlpha: 0, y: 44 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.85,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: `top ${86 - index * 2}%`,
              once: true,
            },
          },
        )
      })

      gsap.fromTo(
        '.cyvl-ambient',
        { autoAlpha: 0, y: 34, scale: 0.92 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '#cyvl',
            start: 'top 78%',
            once: true,
          },
        },
      )

      gsap.to('.cyvl-ambient', {
        yPercent: -8,
        ease: 'none',
        scrollTrigger: {
          trigger: '#cyvl',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })

      mm.add('(min-width: 901px)', () => {
        ScrollTrigger.create({
          trigger: '.eff-case-study',
          start: 'top top+=72',
          endTrigger: '.eff-story-final',
          end: 'bottom+=20 bottom',
          pin: '.eff-phone-column',
          pinSpacing: true,
          anticipatePin: 1,
        })

        gsap.utils.toArray('.eff-step').forEach((step) => {
          gsap.fromTo(
            step,
            { autoAlpha: 0.22, y: 40 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.7,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: step,
                start: 'top 72%',
                end: 'top 44%',
                scrub: true,
              },
            },
          )
        })
      })

      mm.add('(max-width: 900px)', () => {
        gsap.fromTo(
          '.eff-phone-shell',
          { autoAlpha: 0, y: 28, scale: 0.96 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '.eff-phone-shell',
              start: 'top 84%',
              once: true,
            },
          },
        )
      })

      ScrollTrigger.create({
        trigger: '.eff-heading',
        start: 'top top',
        once: true,
        onEnter: () => {
          const video = effVideoRef.current

          if (!video || effVideoError) {
            return
          }

          const playAttempt = video.play()

          if (playAttempt && typeof playAttempt.then === 'function') {
            playAttempt
              .then(() => {
                setEffVideoStarted(true)
              })
              .catch(() => {})
          } else {
            setEffVideoStarted(true)
          }
        },
      })

      ScrollTrigger.refresh()
    }, pageRef)

    return () => {
      ctx.revert()
      mm.revert()
    }
  }, [effVideoError])

  return (
    <div className="page-shell" ref={pageRef}>
      <SiteHeader animated />

      <main>
        <section className="content-section hero about-section" id="intro">
          <div className="hero-layout">
            <div className="hero-eyebrow reveal-up">
              <span>{hero.eyebrow}</span>
            </div>

            <h1 className="hero-name reveal-up" aria-label={heroName.join(' ') || 'Emma Shechtman'}>
              {heroName.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </h1>

            <div className="hero-portrait-stage about-portrait-stage">
              <div className="about-portrait-accent" aria-hidden="true" />
              <div className="hero-portrait-wrap about-portrait-frame">
                <AssetOrPlaceholder
                  src={hero.image?.src}
                  alt={hero.image?.alt}
                  className="about-portrait-image"
                  placeholderLabel={hero.image?.placeholderLabel}
                  placeholderNote={hero.image?.placeholderNote}
                />
              </div>
            </div>

            <div className="hero-body reveal-up">
              {heroParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="hero-actions reveal-up">
              {heroCtas.map((cta) => (
                <a
                  className={`button button-${cta.variant ?? 'primary'}`}
                  href={cta.href ?? '#top'}
                  key={`${cta.label}-${cta.href}`}
                >
                  {cta.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section about-editorial-section" id="about">
          <div className="about-editorial-title reveal-up">
            <p className="eyebrow">{about.eyebrow}</p>
            <h2>{about.heading}</h2>
          </div>

          <div className="about-editorial-grid">
            <div className="about-editorial-image reveal-up">
              <AssetOrPlaceholder
                src={about.image?.src}
                alt={about.image?.alt}
                className="about-editorial-image-asset"
                placeholderLabel={about.image?.placeholderLabel}
                placeholderNote={about.image?.placeholderNote}
                tone={about.image?.tone ?? 'peach'}
              />
            </div>

            <div className="about-editorial-copy reveal-up">
              {aboutParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              <div className="about-editorial-meta">
                {aboutMeta.map((note) => (
                  <div key={note}>{note}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="content-section" id="what-i-do">
          <SectionHeading eyebrow={whatIDo.eyebrow} title={whatIDo.heading} />

          <div className="services-grid stagger-group">
            {whatIDoItems.map((item) => (
              <article className="service-card stagger-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section" id="work">
          <SectionHeading eyebrow={selectedWork.eyebrow} title={selectedWork.heading} />

          <div className="selected-work-list stagger-group">
            {selectedWorkItems.map((project, index) => (
              <article className="selected-work-item stagger-item" key={project.title}>
                <span className="selected-work-index">{project.number ?? `0${index + 1}`}</span>
                <div>
                  <p className="selected-work-type">{project.category}</p>
                  <h3>
                    <a className="selected-work-link" href={project.href ?? '#work'}>
                      {project.title}
                    </a>
                  </h3>
                  <p>{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section cyvl-section" id={cyvl.id ?? 'cyvl'}>
          <div className="cyvl-ambient" aria-hidden="true" />
          <div className="cyvl-section-inner">
            <SectionHeading eyebrow={cyvl.eyebrow} title={cyvl.heading} description={cyvl.intro} />

            <div className="cyvl-case-layout">
              <article className="cyvl-lead-card reveal-up">
                <div className="cyvl-lead-content">
                  <div className="cyvl-lead-rule" aria-hidden="true" />
                  <div>
                    <strong>{cyvl.feature?.title}</strong>
                    <p>{cyvl.feature?.body}</p>
                  </div>
                </div>
              </article>

              <div className="cyvl-proof-strip stagger-group">
                {cyvlProofPoints.map((metric) => (
                  <span className="stagger-item" key={`${metric.value ?? ''}${metric.label ?? ''}`}>
                    {metric.value ? <strong>{metric.value}</strong> : null}
                    {metric.label}
                  </span>
                ))}
              </div>

              <div className="cyvl-system-grid stagger-group">
                {cyvlDetails.map((block) => (
                  <article
                    className="cyvl-system-card stagger-item"
                    data-number={block.number}
                    key={block.title}
                  >
                    <div className="cyvl-system-top">
                      <div className="cyvl-system-track" aria-hidden="true" />
                    </div>
                    <div className="cyvl-system-body">
                      <h3>{block.title}</h3>
                      <p>{block.description}</p>
                    </div>
                    <div className="cyvl-system-tags">
                      {block.tags.map((tag) => (
                        <span className="tag cyvl-tag" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="content-section" id={agb.id ?? 'agb'}>
          <SectionHeading eyebrow={agb.eyebrow} title={agb.heading} description={agb.intro} />
          {agb.link?.href ? (
            <a
              className="agb-intro-link reveal-up"
              href={agb.link.href}
              target="_blank"
              rel="noreferrer"
            >
              {agb.link.label}
            </a>
          ) : null}

          <div className="agb-case-layout">
            <div className="agb-story-column">
              <div className="agb-tags reveal-up">
                {(agb.tags ?? []).map((tag) => (
                  <span className="tag agb-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className="agb-story-list stagger-group">
                {agbDetails.map((block) => (
                  <article className="agb-story-block stagger-item" key={block.title}>
                    <div className="agb-story-header">
                      <span className="agb-story-number">{block.number}</span>
                      <div className="agb-story-line" aria-hidden="true" />
                    </div>
                    <div className="agb-story-copy">
                      <h3>{block.title}</h3>
                      <p>{block.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="agb-visual-grid reveal-up">
              <div className="agb-visual-card agb-visual-card-tall">
                <AssetOrPlaceholder
                  src={agbImages[0]?.src}
                  alt={agbImages[0]?.alt}
                  className="agb-visual-image agb-visual-image-tall"
                  tone={agbImages[0]?.tone ?? 'olive'}
                />
              </div>

              <div className="agb-visual-stack">
                {agbImages.slice(1, 4).map((item, index) => (
                  <div className="agb-visual-card agb-visual-card-wide" key={item.alt ?? index}>
                    <AssetOrPlaceholder
                      src={item.src}
                      alt={item.alt}
                      className="agb-visual-image"
                      tone={item.tone ?? 'warm'}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="agb-proof-strip reveal-up">
            {agbProofPoints.map((point, index) => (
              <span key={`${point.value ?? ''}${point.label ?? ''}${index}`}>
                {point.value ? <strong>{point.value}</strong> : null}
                {point.label}
              </span>
            ))}
          </div>
        </section>

        <section className="content-section eff-case-study" id={emmaFeedsYourFeed.id ?? 'emmafeedsyourfeed'}>
          <div className="eff-case-layout">
            <div className="eff-copy-column">
              <SectionHeading
                eyebrow={emmaFeedsYourFeed.eyebrow}
                title={emmaFeedsYourFeed.heading}
                description={emmaFeedsYourFeed.intro}
                className="eff-heading"
              />

              <div className="eff-story-list">
                {effStoryBlocks.map((item, index) => (
                  <article
                    className={`eff-step feature-card ${index === effStoryBlocks.length - 1 ? 'eff-story-final' : ''}`.trim()}
                    key={item.title}
                  >
                    <div className="eff-step-header">
                      <span className="eff-step-number">{item.number}</span>
                      <div className="eff-step-line" aria-hidden="true" />
                    </div>
                    <div className="eff-step-copy">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="eff-phone-column">
              <div className="eff-phone-shell">
                <div className="eff-phone-frame" aria-hidden="true">
                  <div className="eff-dynamic-island" />
                  <div className="eff-side-button eff-side-top" />
                  <div className="eff-side-button eff-side-bottom" />
                </div>

                <div className="eff-phone-screen">
                  <div className="eff-video-stage">
                    <img
                      className={`eff-phone-poster ${effVideoStarted ? 'is-hidden' : ''}`}
                      src={emmaFeedsYourFeed.poster}
                      alt={emmaFeedsYourFeed.posterAlt}
                      onLoad={() => setEffPosterLoaded(true)}
                      onError={() => setEffPosterError(true)}
                    />

                    {!effVideoError ? (
                      <video
                        ref={effVideoRef}
                        className={`eff-phone-video ${effVideoStarted ? 'is-visible' : ''}`}
                        muted
                        playsInline
                        preload="metadata"
                        poster={!effPosterError ? emmaFeedsYourFeed.poster : undefined}
                        onError={() => setEffVideoError(true)}
                      >
                        <source src={emmaFeedsYourFeed.video} type="video/mp4" />
                      </video>
                    ) : null}

                    {effPosterError && !effPosterLoaded && !effVideoStarted ? (
                      <div className="eff-phone-fallback">Poster image missing</div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section skills-section" id="skills">
          <SectionHeading eyebrow={skills.eyebrow} title={skills.heading} />

          <div className="skills-grid stagger-group">
            {skillCategories.map((group) => (
              <article
                className={`skill-cluster skill-cluster-${group.className} stagger-item`}
                key={group.title}
              >
                <h3>{group.title}</h3>
                <div className="tag-list">
                  {group.items.map((item) => (
                    <span className="tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section" id="resume">
          <div className="resume-cta reveal-up">
            <div>
              <p className="eyebrow">{resume.eyebrow}</p>
              <h2>{resume.heading}</h2>
              <p className="section-description">{resume.paragraph}</p>
            </div>
            <a className="button button-primary resume-button" href={resume.button?.href}>
              {resume.button?.label}
            </a>
          </div>
        </section>

        <section className="content-section contact-section" id="contact">
          <div className="contact-shell reveal-up">
            <div className="contact-cta">
              <p className="eyebrow">{contact.eyebrow}</p>
              <h2>{contact.heading}</h2>
              <p className="contact-lead">{contact.lead}</p>
              <a className="button button-primary contact-button" href={contact.button?.href}>
                {contact.button?.label}
              </a>
            </div>

            <div className="contact-meta">
              <a className="contact-link" href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
              <a
                className="contact-meta-link"
                href={contact.linkedIn?.href}
                target="_blank"
                rel="noreferrer"
              >
                {contact.linkedIn?.label}
              </a>
              <p>{contact.location}</p>
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}
