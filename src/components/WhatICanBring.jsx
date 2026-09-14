import { ArrowRight, Cloud, Globe, Smartphone, Workflow } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { useLanguage } from '../i18n/LanguageContext'

const icons = [Workflow, Smartphone, Cloud, Globe]

export default function WhatICanBring() {
  const { t } = useLanguage()
  const cards = t.bring.cards.map((card, i) => ({ ...card, icon: icons[i] }))
  const { automation } = t.bring

  return (
    <section id="apporter" className="py-24 sm:py-32 bg-surface-2/50">
      <div className="max-w-6xl mx-auto px-5">
        <SectionHeading eyebrow={t.bring.eyebrow} title={t.bring.title} subtitle={t.bring.subtitle} />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {cards.map((card, i) => (
            <Reveal
              key={card.title}
              delay={i * 0.06}
              className="group card-hover rounded-[2rem] card-border bg-surface/70 p-6"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl accent-gradient text-white transition-transform duration-500 group-hover:rotate-6">
                <card.icon size={20} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-ink">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">{card.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-8 rounded-[2rem] card-border bg-surface/70 p-6 sm:p-8">
          <h3 className="text-lg font-semibold text-ink">{automation.title}</h3>
          <p className="mt-2 text-sm text-text-secondary">{automation.subtitle}</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] gap-4 items-center">
            <div className="rounded-[1.5rem] border border-ink/10 bg-surface-2/60 px-5 py-4">
              <span className="font-mono text-xs uppercase tracking-wider text-text-secondary">{automation.beforeLabel}</span>
              <p className="mt-2 text-sm text-text-secondary leading-relaxed">{automation.before}</p>
            </div>

            <ArrowRight className="hidden sm:block mx-auto text-accent" size={22} />

            <div className="rounded-[1.5rem] border border-accent/25 bg-accent/[0.05] px-5 py-4">
              <span className="font-mono text-xs uppercase tracking-wider text-accent">{automation.afterLabel}</span>
              <p className="mt-2 text-sm text-ink leading-relaxed">{automation.after}</p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {automation.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-ink/10 bg-surface-2/60 px-3 py-1 text-xs text-text-secondary">
                {tag}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
