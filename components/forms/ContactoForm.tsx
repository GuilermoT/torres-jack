'use client'

import { useRef, useState } from 'react'
import { Check } from 'lucide-react'

const I = 'w-full py-[13px] px-[15px] text-[16px] border-[1.5px] border-brand-line rounded-lg bg-brand-surface text-brand-ink placeholder:text-brand-muted focus:outline-none focus:border-brand-accent focus:shadow-[0_0_0_4px_oklch(0.948_0.030_250)] transition-[border-color,box-shadow] duration-200'
const L = 'block text-[14px] font-semibold text-brand-ink mb-[7px]'

export default function ContactoForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted]       = useState(false)
  const [submitError, setSubmitError]   = useState('')
  const [consentError, setConsentError] = useState(false)
  const formRef    = useRef<HTMLFormElement>(null)
  const consentRef = useRef<HTMLInputElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return

    if (!consentRef.current?.checked) {
      setConsentError(true)
      return
    }
    setConsentError(false)
    setIsSubmitting(true)
    setSubmitError('')

    try {
      const fd  = new FormData(formRef.current)
      const res = await fetch('/api/contacto', { method: 'POST', body: fd })
      const json = await res.json() as { error?: string }
      if (!res.ok) {
        setSubmitError(json.error ?? 'Ha ocurrido un error. Inténtalo de nuevo más tarde.')
      } else {
        setSubmitted(true)
      }
    } catch {
      setSubmitError('Error de red. Comprueba tu conexión e inténtalo de nuevo.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center text-center py-[40px]">
        <span className="w-[64px] h-[64px] rounded-full bg-brand-accent-tint text-brand-accent-deep grid place-items-center mb-[18px]">
          <Check className="w-8 h-8" strokeWidth={2.4} />
        </span>
        <h3 className="font-serif font-medium text-[22px] leading-[1.1] tracking-[-0.012em] text-brand-ink">
          Mensaje recibido
        </h3>
        <p className="text-[15px] leading-[1.6] text-brand-ink-soft mt-2 max-w-[38ch]">
          Gracias. Te respondemos en menos de 24&nbsp;h laborables.
        </p>
      </div>
    )
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate>
      {/* Honeypot — invisible para humanos, visible para bots */}
      <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}>
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      {/* Nombre */}
      <div>
        <label className={L}>
          Nombre <span className="text-brand-accent">*</span>
        </label>
        <input type="text" name="nombre" placeholder="Tu nombre" autoComplete="name" required className={I} />
      </div>

      {/* Email + Teléfono */}
      <div className="grid grid-cols-1 min-[480px]:grid-cols-2 gap-[14px] mt-[18px]">
        <div>
          <label className={L}>
            Email <span className="text-brand-accent">*</span>
          </label>
          <input type="email" name="email" placeholder="tucorreo@email.com" autoComplete="email" required className={I} />
        </div>
        <div>
          <label className={L}>Teléfono</label>
          <input type="tel" name="telefono" placeholder="600 00 00 00" autoComplete="tel" className={I} />
        </div>
      </div>

      {/* Mensaje */}
      <div className="mt-[18px]">
        <label className={L}>
          ¿En qué te ayudamos? <span className="text-brand-accent">*</span>
        </label>
        <textarea
          name="mensaje"
          placeholder="Cuéntanos brevemente tu consulta…"
          rows={4}
          required
          className={I + ' resize-y min-h-[96px]'}
        />
      </div>

      {/* Consentimiento */}
      <div className="flex gap-[11px] items-start mt-4">
        <input
          ref={consentRef}
          type="checkbox"
          id="cconsent"
          name="consentimiento"
          value="true"
          className="mt-[3px] w-4 h-4 shrink-0 accent-[oklch(0.50_0.135_256)]"
          onChange={() => consentError && setConsentError(false)}
        />
        <label htmlFor="cconsent" className={`text-[13px] font-medium leading-[1.5] ${consentError ? 'text-red-600' : 'text-brand-muted'}`}>
          Acepto el aviso legal y la política de privacidad.{' '}
          <span className="text-brand-accent">*</span>
        </label>
      </div>
      {consentError && (
        <p className="mt-1 text-[12.5px] text-red-600">Debes aceptar la política de privacidad para continuar.</p>
      )}

      {/* Error de envío */}
      {submitError && (
        <p className="mt-3 text-[13px] text-red-600">{submitError}</p>
      )}

      {/* Enviar */}
      <div className="group mt-5">
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex items-center justify-center gap-2.5 w-full py-[17px] px-[32px] rounded-full font-semibold text-[17px] leading-none text-white bg-brand-accent shadow-[0_6px_18px_oklch(0.50_0.135_256/0.34)] transition-[transform,background-color,box-shadow,opacity] duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bg-brand-accent-deep group-hover:-translate-y-0.5 group-hover:shadow-[0_10px_26px_oklch(0.50_0.135_256/0.42)] disabled:opacity-60 disabled:cursor-not-allowed disabled:!translate-y-0"
        >
          {isSubmitting ? 'Enviando…' : 'Enviar mensaje'}
        </button>
      </div>
    </form>
  )
}
