import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ArrowRight, Download } from 'lucide-react'
import { profile } from '../data'
import { useLanguage } from '../i18n/LanguageContext'
import Magnetic from './Magnetic'

export default function Hero() {
  const { t } = useLanguage()
  const photoRef = useRef(null)
  const nameRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const statsRef = useRef(null)
  const ctaRef = useRef(null)
  const blobARef = useRef(null)
  const blobBRef = useRef(null)
  const photoWrapRef = useRef(null)

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const targets = [photoRef, nameRef, titleRef, subtitleRef, statsRef, ctaRef]
      .map((r) => r.current)
      .filter(Boolean)

    const ctx = gsap.context(() => {
      if (reduceMotion) {
        gsap.set(targets, { opacity: 1, y: 0 })
        return
      }

      gsap.set(targets, { opacity: 0, y: 24 })

      const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.8 } })
      tl.to(photoRef.current, { opacity: 1, y: 0 })
        .to(nameRef.current, { opacity: 1, y: 0 }, '-=0.55')
        .to(titleRef.current, { opacity: 1, y: 0 }, '-=0.55')
        .to(subtitleRef.current, { opacity: 1, y: 0 }, '-=0.5')
        .to(statsRef.current, { opacity: 1, y: 0 }, '-=0.45')
        .to(ctaRef.current, { opacity: 1, y: 0 }, '-=0.45')

      gsap.to(photoWrapRef.current, {
        y: -10,
        duration: 3.2,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      })
    })

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!isFinePointer || reduceMotion) return undefined

    const xToA = gsap.quickTo(blobARef.current, 'x', { duration: 1.1, ease: 'power2.out' })
    const yToA = gsap.quickTo(blobARef.current, 'y', { duration: 1.1, ease: 'power2.out' })
    const xToB = gsap.quickTo(blobBRef.current, 'x', { duration: 1.4, ease: 'power2.out' })
    const yToB = gsap.quickTo(blobBRef.current, 'y', { duration: 1.4, ease: 'power2.out' })
    const rotToPhoto = gsap.quickTo(photoWrapRef.current, 'rotateY', { duration: 0.9, ease: 'power2.out' })
    const rotToPhotoX = gsap.quickTo(photoWrapRef.current, 'rotateX', { duration: 0.9, ease: 'power2.out' })

    const handleMove = (e) => {
      const relX = (e.clientX / window.innerWidth - 0.5) * 2
      const relY = (e.clientY / window.innerHeight - 0.5) * 2
      xToA(relX * 26)
      yToA(relY * 26)
      xToB(relX * -18)
      yToB(relY * -18)
      rotToPhoto(relX * 5)
      rotToPhotoX(relY * -5)
    }

    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">
      <div
        ref={blobARef}
        aria-hidden
        className="pointer-events-none absolute -top-32 right-[-10%] h-[440px] w-[440px] rounded-full opacity-[0.12] blur-3xl"
        style={{ background: 'radial-gradient(circle, #356AE6, transparent 70%)' }}
      />
      <div
        ref={blobBRef}
        aria-hidden
        className="pointer-events-none absolute top-40 left-[-15%] h-[380px] w-[380px] rounded-full opacity-[0.10] blur-3xl"
        style={{ background: 'radial-gradient(circle, #1F3D8C, transparent 70%)' }}
      />

      <div className="relative max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
          <div>
            <p
              ref={titleRef}
              className="inline-flex max-w-full items-center gap-2 rounded-full card-border bg-surface/70 px-4 py-1.5 font-mono text-[10px] sm:text-xs uppercase tracking-wide sm:tracking-wider text-accent"
            >
              <span className="text-balance">{t.hero.badge}</span>
            </p>

            <h1 ref={nameRef} className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-gradient">
              {profile.name}
            </h1>

            <p className="mt-3 text-xl sm:text-2xl font-display font-medium text-ink">{t.hero.title}</p>

            <p ref={subtitleRef} className="mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-text-secondary">
              {t.hero.tagline}
            </p>

            <div ref={statsRef} className="mt-9 grid grid-cols-3 gap-4 max-w-md">
              {t.hero.stats.map((s) => (
                <div
                  key={s.label}
                  className="card-hover rounded-2xl card-border bg-surface/70 px-3 py-3 text-center sm:text-left"
                >
                  <div className="font-display text-2xl font-semibold text-ink">{s.value}</div>
                  <div className="mt-1 text-xs text-text-secondary leading-tight">{s.label}</div>
                </div>
              ))}
            </div>

            <div ref={ctaRef} className="mt-9 flex flex-wrap items-center gap-3">
              <Magnetic
                as="a"
                href="#experiences"
                fill
                fillClassName="bg-ink"
                className="inline-flex items-center gap-2 rounded-xl accent-gradient px-5 py-3 text-sm font-medium text-white"
              >
                {t.hero.ctaPrimary}
                <ArrowRight size={16} />
              </Magnetic>
              <Magnetic
                as="a"
                href="#contact"
                fill
                fillClassName="bg-surface-2"
                className="inline-flex items-center gap-2 rounded-xl card-border bg-surface/70 px-5 py-3 text-sm font-medium text-ink"
              >
                {t.hero.ctaSecondary}
              </Magnetic>
              <a
                href={profile.cv}
                download
                className="link-hover inline-flex items-center gap-2 px-3 py-3 text-sm font-medium text-text-secondary hover:text-ink transition-colors"
              >
                <Download size={16} />
                {t.hero.ctaDownload}
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end" style={{ perspective: '1000px' }}>
            <div ref={photoWrapRef} className="relative">
              <div ref={photoRef} className="relative" style={{ transformStyle: 'preserve-3d' }}>
                <div
                  aria-hidden
                  className="absolute -inset-3 -z-10 rounded-[2.75rem] opacity-40 blur-2xl accent-gradient"
                />
                <div
                  aria-hidden
                  className="absolute -bottom-5 -right-5 h-24 w-24 rounded-[1.5rem] border border-accent/30 -z-10 hidden sm:block"
                />
                <div className="relative h-64 w-64 sm:h-80 sm:w-80 overflow-hidden rounded-[2.75rem] card-border bg-surface">
                  <img
                    src={profile.photo}
                    alt="Portrait de Michel Kazadi"
                    className="h-full w-full object-cover"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
