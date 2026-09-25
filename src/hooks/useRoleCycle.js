import { useEffect, useRef, useState } from 'react'

export function useRoleCycle(roles, intervalMs = 2400) {
  const [index, setIndex] = useState(0)
  const reduceMotion = useRef(
    typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )

  useEffect(() => {
    if (reduceMotion.current || roles.length <= 1) return
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % roles.length)
    }, intervalMs)
    return () => clearInterval(t)
  }, [roles, intervalMs])

  return roles[index]
}
