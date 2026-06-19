import type { MetadataRoute } from 'next'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://torresjack.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const routes = [
    { url: '/',               changeFrequency: 'monthly' as const, priority: 1.0 },
    { url: '/artes-escenicas', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: '/flotas',          changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: '/comunidades',     changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: '/particulares',    changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: '/empresas',        changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: '/quienes-somos',   changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: '/aviso-legal',     changeFrequency: 'yearly'  as const, priority: 0.3 },
    { url: '/cookies',         changeFrequency: 'yearly'  as const, priority: 0.3 },
  ]

  return routes.map(({ url, changeFrequency, priority }) => ({
    url: `${BASE_URL}${url}`,
    lastModified: now,
    changeFrequency,
    priority,
  }))
}
