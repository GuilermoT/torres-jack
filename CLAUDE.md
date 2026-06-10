@AGENTS.md

# Torres Jack — Correduría de Seguros · Contexto del Proyecto

## Descripción
Web corporativa con panel del mediador y portal del cliente para **Torres Jack**, una correduría de seguros ubicada en **A Coruña, España**.

## Stack Técnico
- **Framework**: Next.js 16 (App Router) — ver AGENTS.md para breaking changes
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS v4
- **Animaciones**: Framer Motion
- **Base de datos / Auth**: Supabase (`@supabase/supabase-js` + `@supabase/ssr`)
- **Email**: Resend
- **Formularios**: React Hook Form + Zod + `@hookform/resolvers`
- **Iconos**: Lucide React
- **Utilidades**: clsx + tailwind-merge (función `cn` en `lib/utils`)

## Arquitectura de Rutas

```
app/
├── (public)/           # Web corporativa pública (layout propio)
│   ├── layout.tsx
│   └── page.tsx        # Home → /
├── poliza/[token]/     # Portal del cliente (acceso sin login por token único)
│   └── page.tsx
├── panel/              # Panel del mediador (protegido con auth Supabase)
│   └── ...
└── layout.tsx          # Root layout (html + body)
```

## Estructura de Carpetas

```
components/
├── ui/       # Componentes genéricos reutilizables (botones, cards, inputs…)
├── forms/    # Formularios con React Hook Form
├── panel/    # Componentes exclusivos del panel del mediador
└── portal/   # Componentes exclusivos del portal del cliente

lib/
├── supabase/
│   ├── client.ts   # createBrowserClient (uso en Client Components)
│   └── server.ts   # createServerClient async (uso en Server Components / Route Handlers)
├── resend/
│   └── index.ts    # Instancia de Resend para envío de emails
├── validations/
│   └── index.ts    # Esquemas Zod compartidos
└── utils/
    └── index.ts    # Función cn() y otros helpers

types/
└── index.ts        # Tipos TypeScript globales (Poliza, Mediador, etc.)
```

## Variables de Entorno (`.env.local`)

| Variable | Descripción |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | URL del proyecto Supabase |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Clave pública anon de Supabase |
| `SUPABASE_SERVICE_ROLE_KEY` | Clave service role (solo servidor) |
| `RESEND_API_KEY` | API key de Resend |
| `EMAIL_DESTINO` | Email del mediador donde llegan los contactos |
| `NEXT_PUBLIC_BASE_URL` | URL base del sitio (ej. https://torresjack.com) |

## Breaking Changes Clave de Next.js 16

1. **`params` y `searchParams` son Promises** — siempre hay que hacer `await`:
   ```tsx
   export default async function Page({ params }: { params: Promise<{ token: string }> }) {
     const { token } = await params
   }
   ```
2. **`cookies()` de `next/headers` es async** — usar `await cookies()`
3. **Helpers globales de tipos**: `PageProps<'/ruta'>` y `LayoutProps<'/ruta'>` disponibles sin importar, generados con `next dev` / `next build`

## Supabase SSR Pattern

**Client Component:**
```ts
import { createClient } from '@/lib/supabase/client'
const supabase = createClient()
```

**Server Component / Route Handler:**
```ts
import { createClient } from '@/lib/supabase/server'
const supabase = await createClient()
```

## Funcionalidades Planificadas

### Web Pública (`app/(public)`)
- Hero con identidad visual de la correduría
- Secciones de servicios (hogar, auto, vida, empresas…)
- Formulario de contacto (React Hook Form + Zod → Resend)
- Información de contacto y ubicación (A Coruña)

### Portal del Cliente (`app/poliza/[token]`)
- Acceso sin login mediante token único enviado por email
- Visualización de datos de la póliza (número, compañía, vencimiento, prima)
- Posibilidad de solicitar renovación o contactar al mediador

### Panel del Mediador (`app/panel`)
- Autenticación con Supabase Auth (email/password)
- CRUD de pólizas de clientes
- Envío de enlaces de portal al cliente vía Resend
- Dashboard con pólizas próximas a vencer

## Convenciones del Proyecto
- Imports con alias `@/` (configurado en `tsconfig.json`)
- Server Components por defecto; `'use client'` solo cuando sea necesario
- Función `cn()` de `lib/utils` para clases de Tailwind condicionales
- Validaciones Zod compartidas entre cliente y servidor
- Tipos en `types/index.ts` para entidades de base de datos
