import type { NextConfig } from 'next'

// ── Content Security Policy ───────────────────────────────────────────────────
//
// 'unsafe-inline' en script-src: Next.js App Router inyecta scripts inline
//   para la hidratación de React; sin nonce por middleware no se puede evitar.
// 'unsafe-inline' en style-src: Framer Motion + atributos style={{}} en
//   componentes (honeypot, form multistep, etc.).
// Supabase en connect-src: el panel del mediador usará el cliente browser.
// Si se añaden proveedores externos (mapas, analytics…) habrá que ampliar.

const isDev = process.env.NODE_ENV === 'development'

const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ''}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https://images.unsplash.com",
  "font-src 'self'",
  "connect-src 'self' https://gufowsjmqjvweicjjbrk.supabase.co",
  "frame-src 'none'",
  "frame-ancestors 'none'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
].join('; ')

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'Content-Security-Policy',   value: csp },
          { key: 'X-Frame-Options',           value: 'DENY' },
          { key: 'X-Content-Type-Options',    value: 'nosniff' },
          { key: 'Referrer-Policy',           value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy',        value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ]
  },
}

export default nextConfig
