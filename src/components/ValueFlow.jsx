import Reveal from './Reveal'
import { useLanguage } from '../i18n/LanguageContext'

export default function ValueFlow() {
  const { t } = useLanguage()
  const steps = t.valueFlow

  return (
    <section className="border-y border-ink/[0.07] bg-surface-2/60">
      <Reveal className="max-w-6xl mx-auto px-5 py-6">
        <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-3 font-mono text-xs sm:text-sm uppercase tracking-wide text-text-secondary">
          {steps.map((step, i) => (
            <span key={step} className="flex items-center gap-2">
              <span className={i === 0 || i === steps.length - 1 ? 'text-ink font-medium' : ''}>{step}</span>
              {i < steps.length - 1 && (
                <span className="text-accent animate-pulse" style={{ animationDuration: '2.4s' }}>
                  →
                </span>
              )}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
