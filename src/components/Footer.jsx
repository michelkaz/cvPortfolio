import { Download, Linkedin, Mail } from 'lucide-react'
import Reveal from './Reveal'
import { profile } from '../data'
import { useLanguage } from '../i18n/LanguageContext'
import Magnetic from './Magnetic'

export default function Footer() {
  const { t } = useLanguage()

  const navItems = [
    { id: 'apropos', label: t.nav.about },
    { id: 'experiences', label: t.nav.experiences },
    { id: 'transformation', label: t.nav.transformation },
    { id: 'expertise', label: t.nav.expertise },
  ]

  return (
    <footer id="contact-footer" className="relative overflow-hidden bg-ink text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[720px] -translate-x-1/2 rounded-full opacity-25 blur-3xl"
        style={{ background: 'radial-gradient(ellipse, #356AE6, transparent 65%)' }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-[-10%] h-[300px] w-[300px] rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(circle, #4A5573, transparent 70%)' }}
      />

      <div className="relative max-w-6xl mx-auto px-5 pt-24 pb-12 sm:pt-32">
        <Reveal className="text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-accent">{t.footer.eyebrow}</span>
          <h2 className="mt-4 text-4xl sm:text-6xl font-semibold tracking-tight" style={{ textWrap: 'balance' }}>
            {t.footer.headline}
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #FFFFFF 0%, #7FA0FF 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              {t.footer.headline2}
            </span>
          </h2>

          <div className="mt-10 flex justify-center">
            <Magnetic
              as="a"
              href="#contact"
              fill
              fillClassName="bg-[#0A1428]"
              strength={10}
              className="inline-flex items-center gap-2 rounded-full accent-gradient px-7 py-3.5 text-sm font-medium text-white"
            >
              {t.footer.cta}
            </Magnetic>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mt-16 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="link-hover flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 hover:text-white"
          >
            <Mail size={15} />
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="link-hover flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 hover:text-white"
          >
            <Linkedin size={15} />
            LinkedIn
          </a>
          <a
            href={profile.cv}
            download
            className="link-hover flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 hover:text-white"
          >
            <Download size={15} />
            {t.nav.downloadCv}
          </a>
        </Reveal>

        <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-white/10 pt-8">
          <a href="#top" className="flex items-center gap-2 font-display font-semibold">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg accent-gradient text-xs font-bold text-white">
              MK
            </span>
            <span className="text-sm text-white">{profile.name}</span>
          </a>

          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-white/60">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="link-hover hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} {profile.name}. {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
