import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MapPin } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { useLanguage } from '../i18n/LanguageContext'

gsap.registerPlugin(ScrollTrigger)

export default function Experience() {
  const { t } = useLanguage()
  const experiences = t.experience.items
  const sectionRef = useRef(null)
  const railFillRef = useRef(null)

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion || !railFillRef.current) return undefined

    const ctx = gsap.context(() => {
      gsap.fromTo(
        railFillRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          transformOrigin: 'top',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 65%',
            end: 'bottom 75%',
            scrub: 0.6,
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="experiences" ref={sectionRef} className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-5">
        <SectionHeading eyebrow={t.experience.eyebrow} title={t.experience.title} />

        <div className="mt-14 relative">
          <div className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-px bg-ink/10" />
          <div
            ref={railFillRef}
            className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-px bg-accent"
            style={{ transform: 'scaleY(0)' }}
          />

          <div className="flex flex-col gap-8">
            {experiences.map((exp, i) => (
              <Reveal
                key={exp.company + exp.period}
                delay={i * 0.05}
                x={i % 2 === 0 ? -24 : 24}
                y={0}
                className="relative pl-10"
              >
                <span className="absolute left-0 top-2 h-[18px] w-[18px]">
                  <span
                    className="absolute inset-0 rounded-full bg-accent/40 animate-ping"
                    style={{ animationDuration: '2.6s', animationDelay: `${i * 0.25}s` }}
                  />
                  <span className="absolute inset-0 rounded-full accent-gradient ring-4 ring-bg" />
                </span>

                <div className="card-hover rounded-[2rem] card-border bg-surface/70 p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-lg font-semibold text-ink">{exp.role}</h3>
                    <span className="font-mono text-xs text-accent">{exp.period}</span>
                  </div>
                  <div className="mt-1 flex items-center gap-1.5 text-sm text-text-secondary">
                    <span className="font-medium text-ink">{exp.company}</span>
                    <span>·</span>
                    <MapPin size={13} />
                    <span>{exp.location}</span>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-text-secondary">{exp.summary}</p>

                  <ul className="mt-4 flex flex-col gap-1.5">
                    {exp.points.map((point) => (
                      <li key={point} className="flex gap-2 text-sm text-text-secondary">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-ink/10 bg-surface-2/60 px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-text-secondary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
