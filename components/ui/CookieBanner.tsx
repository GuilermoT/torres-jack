'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('cookie_consent') !== 'accepted') {
      setVisible(true)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('cookie_consent', 'accepted')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      className="fixed bottom-0 inset-x-0 z-50 bg-brand-dark px-6 py-4
        flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4
        transition-opacity duration-300"
      role="region"
      aria-label="Aviso de cookies"
    >
      <p className="text-[14px] text-brand-on-dark-soft leading-[1.55] max-w-[72ch]">
        Usamos cookies técnicas necesarias para el funcionamiento del sitio. Más información en
        nuestra{' '}
        <Link
          href="/cookies"
          className="text-brand-on-dark underline hover:text-white transition-colors duration-200"
        >
          política de cookies
        </Link>
        .
      </p>
      <button
        onClick={accept}
        className="shrink-0 px-5 py-[9px] rounded-full bg-white text-brand-dark text-[13.5px] font-semibold
          hover:bg-brand-cream transition-colors duration-200"
      >
        Aceptar
      </button>
    </div>
  )
}
