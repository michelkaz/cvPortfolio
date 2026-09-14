import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { useLanguage } from '../i18n/LanguageContext'
import { useTilt } from '../hooks/useTilt'

function SkillCard({ cat, delay }) {
  const tiltRef = useTilt(5)

  return (
    <Reveal delay={delay} className="rounded-[2rem] card-border bg-surface/70 p-6" style={{ perspective: '800px' }}>
      <div ref={tiltRef} className="card-hover">
        <h3 className="font-mono text-xs uppercase tracking-wider text-accent">{cat.title}</h3>
        <ul className="mt-4 flex flex-col gap-2.5">
          {cat.items.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-ink">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  )
}

export default function Skills() {
  const { t } = useLanguage()

  return (
    <section className="py-24 sm:py-32 bg-surface-2/50">
      <div className="max-w-6xl mx-auto px-5">
        <SectionHeading eyebrow={t.skills.eyebrow} title={t.skills.title} />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.skills.categories.map((cat, i) => (
            <SkillCard key={cat.title} cat={cat} delay={i * 0.06} />
          ))}
        </div>
      </div>
    </section>
  )
}
