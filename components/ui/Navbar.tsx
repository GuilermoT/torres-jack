'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import Image from 'next/image'

const NAV_LINKS = [
  { label: 'Artes escénicas', href: '/artes-escenicas' },
  { label: 'Flotas',          href: '/flotas'           },
  { label: 'Comunidades',     href: '/comunidades'      },
  { label: 'Particulares',    href: '/particulares'    },
  { label: 'Empresas',        href: '/empresas'        },
  { label: 'Nosotros',        href: '/quienes-somos'   },
] as const

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible,  setIsVisible]  = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const lastScrollY    = useRef(0)
  const scrollDownFrom = useRef(0)

  // ── Scroll detection + hide-on-scroll ─────────────────────────
  useEffect(() => {
    const HIDE_THRESHOLD = 150

    const onScroll = () => {
      const y     = window.scrollY
      const delta = y - lastScrollY.current

      if (y < 10) {
        setIsVisible(true)
        scrollDownFrom.current = y
      } else if (delta > 0) {
        if (y - scrollDownFrom.current > HIDE_THRESHOLD) {
          setIsVisible(false)
        }
      } else if (delta < 0) {
        setIsVisible(true)
        scrollDownFrom.current = y
      }

      setIsScrolled(y > 10)
      lastScrollY.current = y
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // ── Escape cierra menú móvil ──────────────────────────────────
  useEffect(() => {
    if (!isMenuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [isMenuOpen])

  // ── Resize a desktop cierra el menú móvil ─────────────────────
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const handler = (e: MediaQueryListEvent) => {
      if (e.matches) setIsMenuOpen(false)
    }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const toggle = useCallback(() => setIsMenuOpen(v => !v), [])
  const close  = useCallback(() => setIsMenuOpen(false),   [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 w-full z-[60]',
        'backdrop-blur-[14px] backdrop-saturate-[160%]',
        'shadow-[0_8px_24px_-2px_rgba(0,0,0,0.12)]',
        'transition-[background-color,translate] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]',
        isScrolled
          ? 'bg-[oklch(0.987_0.006_75/0.94)]'
          : 'bg-[oklch(0.987_0.006_75/0.82)]',
        (isVisible || isMenuOpen) ? 'translate-y-0' : '-translate-y-full'
      )}
    >
      {/* ── Nav bar ─────────────────────────────────────────── */}
      <div className="w-full px-7 flex items-center justify-between h-[90px] gap-6">

        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-3 shrink-0"
          aria-label="Torres Jack, inicio"
          onClick={() => { close(); window.scrollTo(0, 0) }}
        >
          <Image
            src="/logot.svg"
            alt=""
            width={40}
            height={40}
            className="h-14 w-auto"
            priority
          />
          <span className="flex flex-col leading-[1.1]">
            <span className="font-serif font-semibold text-[22px] tracking-[-0.01em] text-brand-ink">
              Torres Jack
            </span>
            <span className="font-sans text-[13px] tracking-[0.08em] uppercase text-brand-muted">
              Correduría de Seguros
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Menú principal">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={cn(
                'py-[9px] px-[15px] rounded-full',
                'text-[15.5px] font-medium text-brand-ink-soft whitespace-nowrap',
                'transition-[color,background-color] duration-200',
                'hover:text-brand-ink hover:bg-brand-cream'
              )}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Right: CTA + hamburger */}
        <div className="flex items-center gap-[14px] shrink-0">

          {/* CTA — oculto en xs, visible desde sm (640 px) */}
          <div className="group hidden sm:inline-block">
            <a
              href="/presupuesto"
              className={cn(
                'inline-flex items-center gap-2.5',
                'py-[14px] px-[26px] rounded-full',
                'font-semibold text-base text-white bg-brand-accent',
                'border border-transparent whitespace-nowrap leading-none',
                'shadow-[0_6px_18px_oklch(0.50_0.135_256/0.34)]',
                'transition-[transform,background-color,box-shadow] duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)]',
                'group-hover:bg-brand-accent-deep group-hover:-translate-y-0.5',
                'group-hover:shadow-[0_10px_26px_oklch(0.50_0.135_256/0.42)]'
              )}
            >
              Pide presupuesto
            </a>
          </div>

          {/* Hamburger — solo móvil/tablet */}
          <button
            type="button"
            onClick={toggle}
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            className={cn(
              'lg:hidden flex flex-col items-center justify-center gap-[4px]',
              'w-[44px] h-[44px] shrink-0',
              'border rounded-[11px] bg-brand-surface',
              'transition-[border-color] duration-200',
              isMenuOpen
                ? 'border-brand-ink-soft'
                : 'border-brand-line-strong hover:border-brand-ink-soft'
            )}
          >
            <span
              aria-hidden
              className={cn(
                'block w-[18px] h-[1.8px] bg-brand-ink rounded-full',
                'transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]',
                isMenuOpen && 'translate-y-[5.8px] rotate-45'
              )}
            />
            <span
              aria-hidden
              className={cn(
                'block w-[18px] h-[1.8px] bg-brand-ink rounded-full',
                'transition-opacity duration-300',
                isMenuOpen && 'opacity-0'
              )}
            />
            <span
              aria-hidden
              className={cn(
                'block w-[18px] h-[1.8px] bg-brand-ink rounded-full',
                'transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]',
                isMenuOpen && '-translate-y-[5.8px] -rotate-45'
              )}
            />
          </button>
        </div>
      </div>

      {/* ── Mobile menu ───────────────────────────────────────── */}
      <div
        id="mobile-menu"
        role="navigation"
        aria-label="Menú móvil"
        aria-hidden={!isMenuOpen}
        className={cn(
          'lg:hidden',
          'absolute top-[90px] left-0 right-0',
          'bg-brand-surface border-b border-brand-line',
          'px-[18px] pt-[14px] pb-[22px]',
          'flex flex-col gap-0.5',
          'shadow-[0_4px_14px_oklch(0.3_0.02_60/0.08),0_18px_40px_oklch(0.3_0.02_60/0.07)]',
          'transition-[opacity,transform] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]',
          isMenuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-1 pointer-events-none'
        )}
      >
        {NAV_LINKS.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            onClick={close}
            tabIndex={isMenuOpen ? 0 : -1}
            className={cn(
              'px-4 py-[13px] rounded-[11px]',
              'text-[17px] font-medium text-brand-ink-soft',
              'transition-[color,background-color] duration-200',
              'hover:text-brand-ink hover:bg-brand-cream'
            )}
          >
            {label}
          </a>
        ))}

        {/* CTA dentro del menú móvil */}
        <div className="mt-3 pt-3 border-t border-brand-line">
          <a
            href="/presupuesto"
            onClick={close}
            tabIndex={isMenuOpen ? 0 : -1}
            className={cn(
              'flex items-center justify-center gap-2.5',
              'py-[14px] px-[26px] rounded-full',
              'font-semibold text-base text-white bg-brand-accent',
              'border border-transparent leading-none',
              'shadow-[0_6px_18px_oklch(0.50_0.135_256/0.34)]',
              'transition-[transform,background-color,box-shadow] duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)]',
              'hover:bg-brand-accent-deep hover:shadow-[0_10px_26px_oklch(0.50_0.135_256/0.42)]'
            )}
          >
            Pide presupuesto
          </a>
        </div>
      </div>
    </header>
  )
}
