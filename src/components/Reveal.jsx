import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Reveal({ children, className = '', delay = 0, y = 28, x = 0, as: Tag = 'div', ...props }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      gsap.set(el, { opacity: 1, y: 0, x: 0 })
      return
    }

    const isMobile = window.matchMedia('(max-width: 639px)').matches
    const startX = isMobile ? 0 : x

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y, x: startX },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 0.9,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            once: true,
          },
        }
      )
    }, ref)

    return () => ctx.revert()
  }, [delay, y, x])

  return (
    <Tag ref={ref} className={className} {...props}>
      {children}
    </Tag>
  )
}
