import { useState } from 'react'

export function AssetOrPlaceholder({
  src,
  alt,
  className,
  placeholderLabel,
  placeholderNote,
  tone = 'warm',
}) {
  const [hasError, setHasError] = useState(false)

  if (!src || hasError) {
    return (
      <div className={`asset-placeholder tone-${tone} ${className ?? ''}`.trim()}>
        {placeholderLabel ? <span>{placeholderLabel}</span> : null}
        {placeholderNote ? <small>{placeholderNote}</small> : null}
      </div>
    )
  }

  return <img className={className} src={src} alt={alt} onError={() => setHasError(true)} />
}
