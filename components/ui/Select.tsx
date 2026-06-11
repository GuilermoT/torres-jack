'use client'

import { forwardRef, useId } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
  placeholder?: string
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, required, id, children, placeholder, ...props }, ref) => {
    const generatedId = useId()
    const selectId = id ?? generatedId

    return (
      <div className="flex flex-col gap-[7px]">
        {label && (
          <label htmlFor={selectId} className="text-sm font-semibold text-brand-ink">
            {label}
            {required && (
              <span className="ml-0.5 text-brand-accent" aria-hidden>
                *
              </span>
            )}
          </label>
        )}

        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            required={required}
            className={cn(
              'w-full py-[13px] px-[15px] pr-10 text-base font-[inherit]',
              'appearance-none border-[1.5px] rounded-lg',
              'bg-brand-surface text-brand-ink',
              'transition-[border-color,box-shadow] duration-200',
              'focus:outline-none',
              !error && 'border-brand-line focus:border-brand-accent focus:shadow-[0_0_0_4px_oklch(0.948_0.030_250)]',
              error  && 'border-brand-accent-deep focus:border-brand-accent-deep focus:shadow-[0_0_0_4px_oklch(0.42_0.135_258/0.14)]',
              className
            )}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {children}
          </select>

          <ChevronDown
            aria-hidden
            className="pointer-events-none absolute right-[14px] top-1/2 -translate-y-1/2 size-[18px] text-brand-muted"
          />
        </div>

        {error && (
          <p className="text-sm font-semibold text-brand-accent-deep" role="alert">
            {error}
          </p>
        )}
      </div>
    )
  }
)
Select.displayName = 'Select'
