import { useRef, useState } from 'react'
import { CheckCircle2, Linkedin, Loader2, Mail, Phone, Send } from 'lucide-react'
import Reveal from './Reveal'
import { profile } from '../data'
import { useLanguage } from '../i18n/LanguageContext'
import Magnetic from './Magnetic'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function Contact() {
  const { t } = useLanguage()
  const f = t.contact.form
  const [form, setForm] = useState({ name: '', email: '', message: '', company: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const mountedAt = useRef(Date.now())

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f2) => ({ ...f2, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: null }))
  }

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = true
    if (!EMAIL_RE.test(form.email.trim())) next.email = true
    if (!form.message.trim() || form.message.trim().length < 5) next.message = true
    return next
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (status === 'loading') return

    if (form.company) {
      setStatus('success')
      return
    }

    const nextErrors = validate()
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      setStatus('error')
      return
    }

    setStatus('loading')

    const elapsed = Date.now() - mountedAt.current
    const delay = Math.max(600, 900 - elapsed)

    window.setTimeout(() => {
      const subject = encodeURIComponent(`Contact site — ${form.name}`)
      const body = encodeURIComponent(`Nom : ${form.name}\nEmail : ${form.email}\n\nMessage :\n${form.message}`)
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
      setStatus('success')
    }, delay)
  }

  return (
    <section id="contact" className="py-24 sm:py-32 bg-surface-2/50">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-widest text-accent">{t.contact.eyebrow}</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-ink" style={{ textWrap: 'balance' }}>
              {t.contact.title}
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-text-secondary">{t.contact.body}</p>

            <div className="mt-8 flex flex-col gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="link-hover flex items-center gap-3 rounded-[1.25rem] card-border bg-surface/70 px-4 py-3 text-sm text-ink"
              >
                <Mail size={17} className="text-accent" />
                {profile.email}
              </a>
              <a
                href={profile.phoneHref}
                className="link-hover flex items-center gap-3 rounded-[1.25rem] card-border bg-surface/70 px-4 py-3 text-sm text-ink"
              >
                <Phone size={17} className="text-accent" />
                {profile.phone}
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="link-hover flex items-center gap-3 rounded-[1.25rem] card-border bg-surface/70 px-4 py-3 text-sm text-ink"
              >
                <Linkedin size={17} className="text-accent" />
                linkedin.com/in/michel-kazadi
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-[2rem] card-border bg-surface/70 p-6 sm:p-8 flex flex-col gap-5"
            >
              <div className="hidden" aria-hidden="true">
                <label htmlFor="company">Company</label>
                <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" value={form.company} onChange={handleChange} />
              </div>

              <div>
                <label htmlFor="name" className="text-xs font-mono uppercase tracking-wide text-text-secondary">
                  {f.name}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  className={`mt-2 w-full rounded-xl border bg-bg/40 px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent ${
                    errors.name ? 'border-red-400' : 'border-ink/10'
                  }`}
                  placeholder={f.namePlaceholder}
                />
              </div>

              <div>
                <label htmlFor="email" className="text-xs font-mono uppercase tracking-wide text-text-secondary">
                  {f.email}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className={`mt-2 w-full rounded-xl border bg-bg/40 px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent ${
                    errors.email ? 'border-red-400' : 'border-ink/10'
                  }`}
                  placeholder={f.emailPlaceholder}
                />
              </div>

              <div>
                <label htmlFor="message" className="text-xs font-mono uppercase tracking-wide text-text-secondary">
                  {f.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className={`mt-2 w-full resize-none rounded-xl border bg-bg/40 px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent ${
                    errors.message ? 'border-red-400' : 'border-ink/10'
                  }`}
                  placeholder={f.messagePlaceholder}
                />
              </div>

              <Magnetic
                as="button"
                type="submit"
                fill
                fillClassName="bg-ink"
                strength={6}
                disabled={status === 'loading'}
                className="inline-flex items-center justify-center gap-2 rounded-xl accent-gradient px-5 py-3 text-sm font-medium text-white disabled:opacity-70"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    {f.sending}
                  </>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle2 size={16} />
                    {f.submit}
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    {f.submit}
                  </>
                )}
              </Magnetic>

              {status === 'success' && <p className="text-xs text-accent">{f.success}</p>}
              {status === 'error' && <p className="text-xs text-red-500">{f.error}</p>}
              {status === 'idle' && (
                <p className="text-xs text-text-secondary">
                  {f.note} {profile.email}.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
