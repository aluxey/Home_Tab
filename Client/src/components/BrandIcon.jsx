import * as allIcons from 'simple-icons/icons'

export default function BrandIcon({ name, size = 20 }) {
  // Normalize brand name to simple-icons key: si<Name>
  let normalized = name.toLowerCase()
  if (normalized === 'twitter' || normalized === 'x') normalized = 'x'
  const key = `si${normalized.charAt(0).toUpperCase()}${normalized.slice(1)}`
  const icon = allIcons[key]
  if (!icon) return null
  const color = `#${icon.hex}`
  return (
    <span aria-hidden className="brand-icon" style={{ display: 'inline-flex', width: size, height: size, color }} dangerouslySetInnerHTML={{ __html: icon.svg }} />
  )
}
