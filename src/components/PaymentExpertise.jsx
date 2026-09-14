import { CreditCard } from 'lucide-react'
import Reveal from './Reveal'
import { useLanguage } from '../i18n/LanguageContext'

export default function PaymentExpertise() {
  const { t } = useLanguage()

  return (
    <section id="expertise" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 items-start">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-widest text-accent">{t.paymentExpertise.eyebrow}</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-ink" style={{ textWrap: 'balance' }}>
              {t.paymentExpertise.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-secondary">{t.paymentExpertise.body}</p>
            <div className="mt-6 flex h-12 w-12 items-center justify-center rounded-xl accent-gradient text-white">
              <CreditCard size={22} />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-wrap gap-3">
            {t.paymentExpertise.skills.map((skill, i) => (
              <span
                key={skill}
                className="card-hover rounded-full card-border bg-surface/70 px-4 py-2 text-sm text-text-secondary"
                style={{ transitionDelay: `${i * 15}ms` }}
              >
                {skill}
              </span>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
