import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { useLanguage } from '../i18n/LanguageContext'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const { t } = useLanguage()
  const sectionRef = useRef(null)
  const lineRef = useRef(null)

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion || !lineRef.current) return undefined

    const length = lineRef.current.getTotalLength ? lineRef.current.getTotalLength() : 300
    gsap.set(lineRef.current, { strokeDasharray: length, strokeDashoffset: length })

    const ctx = gsap.context(() => {
      gsap.to(lineRef.current, {
        strokeDashoffset: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'bottom 60%',
          scrub: 0.6,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="apropos" ref={sectionRef} className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-5">
        <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[1.2fr_auto_0.8fr] gap-8 items-start">
          <Reveal>
            <p className="text-lg sm:text-xl leading-relaxed text-ink">{t.about.lead}</p>
            <p className="mt-6 text-base leading-relaxed text-text-secondary">{t.about.body}</p>
          </Reveal>

          <div className="hidden lg:flex justify-center self-stretch">
            <svg width="2" height="100%" viewBox="0 0 2 400" preserveAspectRatio="none" className="h-full">
              <line
                ref={lineRef}
                x1="1"
                y1="0"
                x2="1"
                y2="400"
                stroke="#356AE6"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <Reveal delay={0.1} className="card-hover rounded-[2rem] card-border bg-surface/70 p-6">
            <div className="flex flex-col gap-4 font-mono text-sm">
              {t.about.steps.map((step, i, arr) => (
                <div key={step} className="flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full accent-gradient text-xs font-semibold text-white">
                    {i + 1}
                  </span>
                  <span className="text-text-secondary">{step}</span>
                  {i < arr.length - 1 && <span className="sr-only">puis</span>}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
