'use client'

import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'ghost' | 'dark' | 'on-dark'
type Size = 'default' | 'lg' | 'sm'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
}

const variants: Record<Variant, string> = {
  primary: cn(
    'bg-brand-accent text-white',
    'shadow-[0_6px_18px_oklch(0.50_0.135_256/0.34)]',
    'hover:bg-brand-accent-deep',
    'hover:shadow-[0_10px_26px_oklch(0.50_0.135_256/0.42)]'
  ),
  ghost:
    'bg-transparent text-brand-ink border-brand-line-strong hover:border-brand-ink',
  dark: 'bg-brand-ink text-brand-paper hover:bg-black',
  'on-dark': 'bg-brand-paper text-brand-ink hover:bg-white',
}

const sizes: Record<Size, string> = {
  default: 'py-[14px] px-[26px] text-base',
  lg:      'py-[17px] px-8 text-[17px]',
  sm:      'py-[7px] px-[14px] text-[13.5px]',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'default', children, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        'group inline-flex items-center rounded-full font-semibold',
        'border border-transparent whitespace-nowrap leading-none cursor-pointer',
        'transition-[background-color,box-shadow,color,border-color]',
        'duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)]',
        'disabled:opacity-50 disabled:pointer-events-none',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      <span
        className={cn(
          'inline-flex items-center gap-2.5',
          '[&_svg]:w-[17px] [&_svg]:h-[17px] [&_svg]:shrink-0',
          'transition-transform duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)]',
          'group-hover:-translate-y-0.5'
        )}
      >
        {children}
      </span>
    </button>
  )
)
Button.displayName = 'Button'