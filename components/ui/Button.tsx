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
    '[background-image:linear-gradient(to_right,transparent_50%,oklch(0.50_0.135_256)_50%)]',
    '[background-size:200%_100%] [background-position:100%_0%]',
    'hover:[background-position:0%_0%]',
    'text-white hover:text-brand-ink',
    'border-brand-accent',
    'shadow-[0_6px_18px_oklch(0.50_0.135_256/0.34)] hover:shadow-none',
    '[transition:background-position_700ms_ease,color_700ms_ease,box-shadow_700ms_ease]',
  ),
  ghost:
    'bg-transparent text-brand-ink border-brand-line-strong hover:border-brand-ink before:bg-brand-ink/[0.07] [transition:border-color_250ms_ease]',
  dark: cn(
    '[background-image:linear-gradient(to_right,transparent_50%,oklch(0.235_0.014_60)_50%)]',
    '[background-size:200%_100%] [background-position:100%_0%]',
    'hover:[background-position:0%_0%]',
    'text-brand-paper hover:text-brand-ink',
    'border-brand-ink',
    '[transition:background-position_700ms_ease,color_700ms_ease]',
  ),
  'on-dark': 'bg-brand-paper text-brand-ink border-transparent before:bg-black/[0.07] [transition:border-color_250ms_ease]',
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
        'group relative inline-flex items-center rounded-none overflow-hidden [isolation:isolate] font-semibold',
        'border whitespace-nowrap leading-none cursor-pointer',
        'disabled:opacity-50 disabled:pointer-events-none',
        "before:content-[''] before:absolute before:inset-y-0 before:left-0 before:w-0 before:z-[-1]",
        'before:transition-[width] before:duration-[700ms] before:ease-[cubic-bezier(0.22,1,0.36,1)]',
        'hover:before:w-full',
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