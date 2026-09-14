import { GraduationCap, Languages as LanguagesIcon } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { useLanguage } from '../i18n/LanguageContext'

export default function Education() {
  const { t } = useLanguage()

  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-5">
        <SectionHeading eyebrow={t.education.eyebrow} title={t.education.title} />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-10">
          <div className="flex flex-col gap-4">
            {t.education.items.map((edu, i) => (
              <Reveal
                key={edu.school + edu.period}
                delay={i * 0.05}
                className="card-hover flex items-start gap-4 rounded-[2rem] card-border bg-surface/70 p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/[0.08] text-accent">
                  <GraduationCap size={18} />
                </div>
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5">
                    <h3 className="text-base font-semibold text-ink">{edu.school}</h3>
                    <span className="font-mono text-xs text-text-secondary">{edu.period}</span>
                  </div>
                  <p className="mt-1 text-sm text-text-secondary">{edu.degree}</p>
                  <p className="mt-0.5 text-xs text-text-secondary/70">{edu.location}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1} className="rounded-[2rem] card-border bg-surface/70 p-6 h-fit">
            <div className="flex items-center gap-2 text-accent">
              <LanguagesIcon size={18} />
              <h3 className="font-mono text-xs uppercase tracking-wider">{t.education.langLabel}</h3>
            </div>
            <div className="mt-5 flex flex-col gap-4">
              {t.education.languages.map((lang) => (
                <div key={lang.name} className="flex items-baseline justify-between">
                  <span className="text-sm font-medium text-ink">{lang.name}</span>
                  <span className="text-xs text-text-secondary">{lang.level}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
