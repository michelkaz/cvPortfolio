import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export function useTilt(maxTilt = 6) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined

    const isFinePointer = window.matchMedia('(pointer: fine)').matches
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!isFinePointer || reduceMotion) return undefined

    el.style.transformStyle = 'preserve-3d'
    const rotX = gsap.quickTo(el, 'rotateX', { duration: 0.5, ease: 'power2.out' })
    const rotY = gsap.quickTo(el, 'rotateY', { duration: 0.5, ease: 'power2.out' })

    const handleMove = (e) => {
      const rect = el.getBoundingClientRect()
      const px = (e.clientX - rect.left) / rect.width - 0.5
      const py = (e.clientY - rect.top) / rect.height - 0.5
      rotY(px * maxTilt * 2)
      rotX(py * -maxTilt * 2)
    }
    const handleLeave = () => {
      rotX(0)
      rotY(0)
    }

    el.addEventListener('mousemove', handleMove)
    el.addEventListener('mouseleave', handleLeave)
    return () => {
      el.removeEventListener('mousemove', handleMove)
      el.removeEventListener('mouseleave', handleLeave)
    }
  }, [maxTilt])

  return ref
}
