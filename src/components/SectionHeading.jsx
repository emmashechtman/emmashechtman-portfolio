export function SectionHeading({ eyebrow, title, description, className = '' }) {
  return (
    <div className={`section-heading reveal-up ${className}`.trim()}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description ? <p className="section-description">{description}</p> : null}
    </div>
  )
}
