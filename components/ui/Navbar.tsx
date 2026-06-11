'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { label: 'Seguros',         href: '/#ramos'       },
  { label: 'Artes escénicas', href: '/#escena'      },
  { label: 'Quiénes somos',   href: '/#nosotros'    },
  { label: 'Contacto',        href: '/#contacto'    },
] as const

export function Navbar() {
  const [isScrolled,  setIsScrolled]  = useState(false)
  const [isMenuOpen,  setIsMenuOpen]  = useState(false)

  // ── Scroll detection ──────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // ── Close on Escape ───────────────────────────────────────────
  useEffect(() => {
    if (!isMenuOpen) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setIsMenuOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [isMenuOpen])

  // ── Close when resizing to desktop ───────────────────────────
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const handler = (e: MediaQueryListEvent) => { if (e.matches) setIsMenuOpen(false) }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const toggle = useCallback(() => setIsMenuOpen(v => !v), [])
  const close  = useCallback(() => setIsMenuOpen(false),   [])

  return (
    <header
      className={cn(
        'sticky top-0 z-[60]',
        'backdrop-blur-[14px] backdrop-saturate-[160%]',
        'border-b',
        'transition-[background-color,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]',
        isScrolled
          ? 'bg-[oklch(0.987_0.006_75/0.94)] border-brand-line'
          : 'bg-[oklch(0.987_0.006_75/0.82)] border-transparent'
      )}
    >
      {/* ── Nav bar ─────────────────────────────────────────── */}
      <div className="w-full max-w-[1200px] mx-auto px-7 flex items-center justify-between h-[76px] gap-6">

        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-3 shrink-0"
          aria-label="Torres Jack, inicio"
          onClick={() => { close(); window.scrollTo(0, 0) }}
        >
          <span
            aria-hidden
            className="w-[42px] h-[42px] rounded-[11px] shrink-0 bg-brand-dark text-brand-paper grid place-items-center font-serif text-[21px] font-semibold tracking-[-0.03em]"
          >
            TJ
          </span>
          <span className="flex flex-col leading-[1.05]">
            <b className="font-serif font-semibold text-[19px] tracking-[-0.01em]">Torres Jack</b>
            <span className="text-[11px] tracking-[0.14em] uppercase text-brand-muted font-semibold">
              Correduría de seguros
            </span>
          </span>
        </Link>

        {/* Desktop nav links */}
        <nav
          className="hidden lg:flex items-center gap-1"
          aria-label="Menú principal"
        >
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
          <a
            href="/presupuesto"
            className={cn(
              'hidden sm:inline-flex items-center gap-2.5',
              'py-[14px] px-[26px] rounded-full',
              'font-semibold text-base text-white bg-brand-accent',
              'border border-transparent whitespace-nowrap leading-none',
              'shadow-[0_6px_18px_oklch(0.50_0.135_256/0.34)]',
              'transition-[transform,background-color,box-shadow] duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)]',
              'hover:bg-brand-accent-deep hover:-translate-y-0.5',
              'hover:shadow-[0_10px_26px_oklch(0.50_0.135_256/0.42)]'
            )}
          >
            Pide presupuesto
          </a>

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
            {/* Línea 1 */}
            <span
              aria-hidden
              className={cn(
                'block w-[18px] h-[1.8px] bg-brand-ink rounded-full',
                'transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]',
                isMenuOpen && 'translate-y-[5.8px] rotate-45'
              )}
            />
            {/* Línea 2 */}
            <span
              aria-hidden
              className={cn(
                'block w-[18px] h-[1.8px] bg-brand-ink rounded-full',
                'transition-opacity duration-300',
                isMenuOpen && 'opacity-0'
              )}
            />
            {/* Línea 3 */}
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

      {/* ── Mobile menu dropdown ─────────────────────────────── */}
      {/*
        Siempre renderizado para que la transición CSS funcione.
        pointer-events-none cuando cerrado para evitar clics accidentales.
      */}
      <div
        id="mobile-menu"
        role="navigation"
        aria-label="Menú móvil"
        aria-hidden={!isMenuOpen}
        className={cn(
          'lg:hidden',
          'absolute top-[76px] left-0 right-0',
          'bg-brand-surface border-b border-brand-line',
          'px-[18px] pt-[14px] pb-[22px]',
          'flex flex-col gap-0.5',
          'shadow-[0_4px_14px_oklch(0.3_0.02_60/0.08),0_18px_40px_oklch(0.3_0.02_60/0.07)]',
          // Transición de apertura
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
