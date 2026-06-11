import type { Config } from 'tailwindcss'

export default {
  theme: {
    extend: {
      colors: {
        brand: {
          // Neutros cálidos
          paper:         'oklch(0.987 0.006 75)',   // fondo principal
          'paper-alt':   'oklch(0.965 0.010 75)',   // fondo alterno (secciones)
          surface:       'oklch(1 0 0)',             // tarjetas y modales
          cream:         'oklch(0.955 0.014 70)',    // hover suave, fondos internos

          // Tipografía y bordes
          ink:           'oklch(0.235 0.014 60)',    // texto principal
          'ink-soft':    'oklch(0.40  0.013 60)',    // texto secundario
          muted:         'oklch(0.54  0.012 65)',    // texto terciario / etiquetas
          line:          'oklch(0.905 0.010 70)',    // bordes suaves
          'line-strong': 'oklch(0.84  0.012 65)',    // bordes marcados

          // Acento principal — azul de marca
          accent:        'oklch(0.50  0.135 256)',   // botones, links, highlights
          'accent-deep': 'oklch(0.42  0.135 258)',   // hover del acento
          'accent-tint': 'oklch(0.948 0.030 250)',   // fondos sutiles de acento
          'accent-line': 'oklch(0.86  0.050 252)',   // bordes de acento

          // Acento cálido — terracota
          warm:          'oklch(0.62  0.135 42)',    // badges, detalles sobre dark

          // Oscuro — azul noche (color de marca)
          dark:          'oklch(0.275 0.050 256)',   // fondos oscuros primarios
          'dark-2':      'oklch(0.218 0.045 257)',   // fondos oscuros más profundos
          'on-dark':     'oklch(0.95  0.012 250)',   // texto sobre fondo oscuro
          'on-dark-soft':'oklch(0.76  0.022 252)',   // texto secundario sobre oscuro
          'dark-line':   'oklch(0.40  0.045 255)',   // bordes sobre fondo oscuro
        },
      },
    },
  },
} satisfies Config
