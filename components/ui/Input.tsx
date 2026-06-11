'use client'

import { forwardRef, useId } from 'react'
import { cn } from '@/lib/utils'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, required, id, ...props }, ref) => {
    const generatedId = useId()
    const inputId = id ?? generatedId

    return (
      <div className="flex flex-col gap-[7px]">
        {label && (
          <label htmlFor={inputId} className="text-sm font-semibold text-brand-ink">
            {label}
            {required && (
              <span className="ml-0.5 text-brand-accent" aria-hidden>
                *
              </span>
            )}
          </label>
        )}

        <input
          ref={ref}
          id={inputId}
          required={required}
          className={cn(
            'w-full py-[13px] px-[15px] text-base font-[inherit]',
            'border-[1.5px] rounded-lg',
            'bg-brand-surface text-brand-ink',
            'placeholder:text-brand-muted',
            'transition-[border-color,box-shadow] duration-200',
            'focus:outline-none',
            // estado normal
            !error && 'border-brand-line focus:border-brand-accent focus:shadow-[0_0_0_4px_oklch(0.948_0.030_250)]',
            // estado error
            error  && 'border-brand-accent-deep focus:border-brand-accent-deep focus:shadow-[0_0_0_4px_oklch(0.42_0.135_258/0.14)]',
            className
          )}
          {...props}
        />

        {error && (
          <p className="text-sm font-semibold text-brand-accent-deep" role="alert">
            {error}
          </p>
        )}
      </div>
    )
  }
)
Input.displayName = 'Input'
