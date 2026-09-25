import { getTechIcon } from '../data/techIcons.js'

// Renders a technology name, prefixed with its logo when one exists.
export default function TechLabel({ name, size = 20 }) {
  const icon = getTechIcon(name)
  return (
    <>
      {icon && (
        <img
          className={'tech-icon' + (icon.mono ? ' mono' : '')}
          src={icon.src}
          alt=""
          width={size}
          height={size}
          loading="lazy"
          decoding="async"
        />
      )}
      {name}
    </>
  )
}
