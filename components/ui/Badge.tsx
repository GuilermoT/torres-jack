import { cn } from '@/lib/utils'

/**
 * Variantes del sistema visual de Torres Jack:
 * - draft    → gris crema  (borradores, pendientes de envío)
 * - pending  → ámbar cálido (enviado, esperando respuesta)
 * - active   → verde        (activo, aceptado, documentado)
 * - info     → azul tinta  (informativo, "docs", estado azul)
 * - warm     → terracota   (destacado sobre fondos oscuros)
 */
export type BadgeVariant = 'draft' | 'pending' | 'active' | 'info' | 'warm'

const variantStyles: Record<BadgeVariant, string> = {
  draft:   'bg-brand-cream text-brand-muted',
  pending: 'bg-[oklch(0.96_0.05_75)] text-[oklch(0.48_0.10_70)]',
  active:  'bg-[oklch(0.95_0.04_150)] text-[oklch(0.42_0.11_150)]',
  info:    'bg-brand-accent-tint text-brand-accent-deep',
  warm:    'bg-[oklch(0.95_0.05_42)] text-[oklch(0.52_0.13_42)]',
}

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
  dot?: boolean
}

export function Badge({
  className,
  variant = 'info',
  dot = true,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-[7px]',
        'text-[12.5px] font-semibold py-[5px] px-[11px]',
        'rounded-full whitespace-nowrap',
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {dot && (
        <span className="size-[7px] rounded-full bg-current shrink-0" aria-hidden />
      )}
      {children}
    </span>
  )
}
