'use client'

import { forwardRef, useId } from 'react'
import { cn } from '@/lib/utils'

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode
  description?: string
  /**
   * Variante "tarjeta" — añade un borde + fondo que reacciona al estado checked.
   * Equivale al patrón .consent-row del diseño de referencia.
   */
  card?: boolean
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, description, card, id, ...props }, ref) => {
    const generatedId = useId()
    const inputId = id ?? generatedId

    return (
      <div
        className={cn(
          card && [
            'flex gap-3 items-start px-4 py-[14px] rounded-lg',
            'border border-brand-line bg-brand-surface',
            'transition-[border-color,background-color] duration-200',
            // reacciona al check sin JS: :has() es soportado en todos los browsers modernos
            '[&:has(input:checked)]:border-brand-accent-line',
            '[&:has(input:checked)]:bg-brand-accent-tint',
          ],
          !card && 'flex gap-3 items-start'
        )}
      >
        <input
          ref={ref}
          type="checkbox"
          id={inputId}
          className={cn(
            'mt-0.5 size-[18px] shrink-0 cursor-pointer rounded',
            'accent-brand-accent',
            className
          )}
          {...props}
        />

        {(label || description) && (
          <label htmlFor={inputId} className="cursor-pointer select-none leading-snug">
            {label && (
              <span className="block text-[15px] font-semibold text-brand-ink">
                {label}
              </span>
            )}
            {description && (
              <span className="block text-sm text-brand-ink-soft mt-0.5 leading-[1.45]">
                {description}
              </span>
            )}
          </label>
        )}
      </div>
    )
  }
)
Checkbox.displayName = 'Checkbox'
