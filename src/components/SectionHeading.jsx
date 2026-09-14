import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, subtitle, align = 'left' }) {
  return (
    <Reveal className={align === 'center' ? 'text-center max-w-2xl mx-auto' : 'max-w-2xl'}>
      {eyebrow && (
        <span className="font-mono text-xs uppercase tracking-widest text-accent">{eyebrow}</span>
      )}
      <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-ink" style={{ textWrap: 'balance' }}>
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-base leading-relaxed text-text-secondary">{subtitle}</p>}
    </Reveal>
  )
}
