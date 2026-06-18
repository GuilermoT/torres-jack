import { Redis } from '@upstash/redis'
import { Ratelimit } from '@upstash/ratelimit'

function getRedis(): Redis {
  const url = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL
  const token = process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN
  if (!url || !token) {
    throw new Error(
      'Upstash Redis no configurado. Añade KV_REST_API_URL + KV_REST_API_TOKEN ' +
      '(Vercel KV) o UPSTASH_REDIS_REST_URL + UPSTASH_REDIS_REST_TOKEN (.env.local).'
    )
  }
  return new Redis({ url, token })
}

// Ventana deslizante: 5 peticiones/hora por IP, pool independiente por prefix.
export function createRatelimit(prefix: string): Ratelimit {
  return new Ratelimit({
    redis: getRedis(),
    limiter: Ratelimit.slidingWindow(5, '1 h'),
    prefix,
  })
}

export function getIp(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for')
  return forwarded?.split(',')[0]?.trim() ?? 'unknown'
}
