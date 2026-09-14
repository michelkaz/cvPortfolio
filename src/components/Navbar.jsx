import { useEffect, useRef, useState } from 'react'
import { Download, Menu, X } from 'lucide-react'
import { profile, sectionIds } from '../data'
import { useLanguage } from '../i18n/LanguageContext'
import { useActiveSection } from '../hooks/useActiveSection'
import Magnetic from './Magnetic'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { lang, setLang, t } = useLanguage()
  const activeId = useActiveSection(sectionIds)

  const navRef = useRef(null)
  const linkRefs = useRef({})
  const [pill, setPill] = useState({ left: 0, width: 0, opacity: 0 })

  const navItems = [
    { id: 'apropos', label: t.nav.about },
    { id: 'experiences', label: t.nav.experiences },
    { id: 'transformation', label: t.nav.transformation },
    { id: 'expertise', label: t.nav.expertise },
    { id: 'contact', label: t.nav.contact },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const update = () => {
      const activeEl = linkRefs.current[activeId]
      const containerEl = navRef.current
      if (!activeEl || !containerEl) {
        setPill((p) => ({ ...p, opacity: 0 }))
        return
      }
      const containerRect = containerEl.getBoundingClientRect()
      const rect = activeEl.getBoundingClientRect()
      setPill({ left: rect.left - containerRect.left, width: rect.width, opacity: 1 })
    }
    update()
    const raf = requestAnimationFrame(update)
    window.addEventListener('resize', update)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', update)
    }
  }, [activeId, lang])

  const handleNavClick = () => setOpen(false)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}>
      <div className="max-w-6xl mx-auto px-5">
        <div
          className={`flex items-center justify-between rounded-[1.75rem] px-4 sm:px-5 py-3 transition-all duration-300 ${
            scrolled ? 'bg-surface/85 backdrop-blur-xl card-border shadow-[0_12px_40px_-16px_rgba(20,33,61,0.18)]' : 'bg-transparent'
          }`}
        >
          <a href="#top" className="flex items-center gap-2 font-display font-semibold tracking-tight">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl accent-gradient text-sm font-bold text-white">
              MK
            </span>
            <span className="hidden sm:inline text-ink">{profile.name}</span>
          </a>

          <nav ref={navRef} className="relative hidden lg:flex items-center gap-1 font-body text-sm">
            <span
              className="absolute top-0 h-full rounded-full bg-accent/[0.09] pointer-events-none"
              style={{
                left: pill.left,
                width: pill.width,
                opacity: pill.opacity,
                transition: 'left 0.5s cubic-bezier(0.65,0,0.35,1), width 0.5s cubic-bezier(0.65,0,0.35,1), opacity 0.3s ease',
              }}
            />
            {navItems.map((item) => (
              <a
                key={item.id}
                ref={(el) => (linkRefs.current[item.id] = el)}
                href={`#${item.id}`}
                className={`relative z-10 rounded-full px-4 py-2 transition-colors duration-300 ${
                  activeId === item.id ? 'text-ink font-medium' : 'text-text-secondary hover:text-ink'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center rounded-full card-border overflow-hidden font-mono text-[11px]">
              <button
                type="button"
                onClick={() => setLang('fr')}
                className={`px-2.5 py-1.5 transition-colors ${lang === 'fr' ? 'bg-ink text-white' : 'text-text-secondary hover:text-ink'}`}
              >
                FR
              </button>
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-2.5 py-1.5 transition-colors ${lang === 'en' ? 'bg-ink text-white' : 'text-text-secondary hover:text-ink'}`}
              >
                EN
              </button>
            </div>

            <Magnetic
              as="a"
              href={profile.cv}
              download
              fill
              fillClassName="bg-ink"
              strength={8}
              className="hidden sm:inline-flex items-center gap-2 rounded-xl accent-gradient px-4 py-2 text-sm font-medium text-white"
            >
              <Download size={16} />
              {t.nav.downloadCv}
            </Magnetic>

            <button
              type="button"
              aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
              className="lg:hidden flex h-10 w-10 items-center justify-center rounded-xl card-border text-ink"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

      </div>

      {open && (
        <div className="lg:hidden fixed inset-0 z-[60] flex flex-col bg-bg/98 backdrop-blur-xl">
          <div className="max-w-6xl mx-auto w-full px-5 pt-5">
            <div className="flex items-center justify-between rounded-[1.75rem] px-4 sm:px-5 py-3 card-border bg-surface/70">
              <a href="#top" onClick={handleNavClick} className="flex items-center gap-2 font-display font-semibold tracking-tight">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl accent-gradient text-sm font-bold text-white">
                  MK
                </span>
              </a>
              <button
                type="button"
                aria-label="Fermer le menu"
                className="flex h-10 w-10 items-center justify-center rounded-xl card-border text-ink"
                onClick={() => setOpen(false)}
              >
                <X size={18} />
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-5 py-8 flex flex-col justify-center gap-8 max-w-6xl mx-auto w-full">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={handleNavClick}
                  className={`rounded-2xl px-4 py-3.5 text-lg font-display transition-colors ${
                    activeId === item.id ? 'bg-accent/[0.08] text-ink font-medium' : 'text-text-secondary hover:text-ink hover:bg-black/[0.03]'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setLang('fr')}
                className={`flex-1 rounded-xl py-2.5 font-mono text-xs card-border transition-colors ${lang === 'fr' ? 'bg-ink text-white' : 'text-text-secondary'}`}
              >
                FR
              </button>
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`flex-1 rounded-xl py-2.5 font-mono text-xs card-border transition-colors ${lang === 'en' ? 'bg-ink text-white' : 'text-text-secondary'}`}
              >
                EN
              </button>
            </div>

            <a
              href={profile.cv}
              download
              onClick={handleNavClick}
              className="inline-flex items-center justify-center gap-2 rounded-xl accent-gradient px-4 py-3.5 text-sm font-medium text-white"
            >
              <Download size={16} />
              {t.nav.downloadCv}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
