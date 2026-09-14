import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { useLanguage } from '../i18n/LanguageContext'

gsap.registerPlugin(ScrollTrigger)

export default function DigitalTransformation() {
  const { t } = useLanguage()
  const steps = t.transformation.steps
  const sectionRef = useRef(null)
  const progressRef = useRef(null)

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion || !progressRef.current) return undefined

    const ctx = gsap.context(() => {
      gsap.fromTo(
        progressRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: 'none',
          transformOrigin: 'left',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            end: 'bottom 70%',
            scrub: 0.6,
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="transformation" ref={sectionRef} className="py-24 sm:py-32 bg-surface-2/50">
      <div className="max-w-6xl mx-auto px-5">
        <SectionHeading eyebrow={t.transformation.eyebrow} title={t.transformation.title} subtitle={t.transformation.subtitle} />

        <div className="mt-4 h-[2px] w-full rounded-full bg-ink/10 overflow-hidden">
          <div ref={progressRef} className="h-full w-full accent-gradient" style={{ transform: 'scaleX(0)' }} />
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => (
            <Reveal
              key={step.n}
              delay={i * 0.06}
              y={22}
              className="card-hover rounded-[2rem] card-border bg-surface/70 p-6"
            >
              <span className="font-mono text-sm text-accent">{step.n}</span>
              <h3 className="mt-3 text-lg font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">{step.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
