import { resend } from '@/lib/resend'
import { createRatelimit, getIp } from '@/lib/rate-limit'
import { contactoSchema } from '@/lib/validations/contacto'
import { escapeHtml } from '@/lib/utils/escapeHtml'

const rl = createRatelimit('tj:contacto')
const e  = escapeHtml

function row(label: string, value: string | undefined | null): string {
  if (!value?.trim()) return ''
  return `<tr>
    <td style="padding:6px 14px 6px 0;width:120px;font-size:13px;font-weight:600;color:#6b7280;vertical-align:top;white-space:nowrap">${label}</td>
    <td style="padding:6px 0;font-size:13px;color:#111827;vertical-align:top;word-break:break-word">${e(value)}</td>
  </tr>`
}

function buildHtml(nombre: string, email: string, telefono: string | undefined, mensaje: string): string {
  const fecha = new Date().toLocaleString('es-ES', {
    day: '2-digit', month: 'long', year: 'numeric',
    hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Madrid',
  })

  const rows =
    row('Nombre',   nombre)   +
    row('Email',    email)    +
    row('Teléfono', telefono) +
    row('Mensaje',  mensaje)

  return `<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8">
<title>Consulta de contacto</title></head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:Arial,Helvetica,sans-serif">
<div style="max-width:560px;margin:24px auto;background:#ffffff;border-radius:8px;overflow:hidden;border:1px solid #e5e7eb">

  <div style="background:#1e3a5f;padding:22px 28px">
    <p style="margin:0 0 3px;font-size:10px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#7dd3fc">Consulta de contacto</p>
    <h1 style="margin:0;font-size:21px;font-weight:700;color:#ffffff">${e(nombre)}</h1>
  </div>

  <div style="padding:20px 28px 14px">
    <table style="width:100%;border-collapse:collapse">${rows}</table>
  </div>

  <div style="padding:12px 28px;background:#f9fafb;border-top:1px solid #f3f4f6">
    <p style="margin:0;font-size:11px;color:#9ca3af">Recibido el ${fecha} · Torres Jack Correduría de Seguros</p>
  </div>

</div>
</body></html>`
}

export async function POST(request: Request) {
  // ── 1. Parse FormData ───────────────────────────────────────────────────────
  let fd: FormData
  try {
    fd = await request.formData()
  } catch {
    return Response.json({ error: 'Solicitud inválida.' }, { status: 400 })
  }

  // ── 2. Honeypot → fake-success silencioso ───────────────────────────────────
  const honeypot = fd.get('website')
  if (typeof honeypot === 'string' && honeypot.length > 0) {
    return Response.json({ ok: true })
  }

  // ── 3. Rate limit ───────────────────────────────────────────────────────────
  const { success } = await rl.limit(getIp(request))
  if (!success) {
    return Response.json(
      { error: 'Has superado el límite de solicitudes (5/hora). Inténtalo más tarde o llámanos al 981 12 14 08.' },
      { status: 429 },
    )
  }

  // ── 4. Extraer campos y coerce consentimiento ───────────────────────────────
  // El checkbox envía "true" solo cuando está marcado; si no está marcado, no se incluye en FormData.
  const payload = {
    nombre:         (fd.get('nombre')    as string | null) ?? '',
    email:          (fd.get('email')     as string | null) ?? '',
    telefono:       (fd.get('telefono')  as string | null) ?? undefined,
    mensaje:        (fd.get('mensaje')   as string | null) ?? '',
    // Checkbox: envía "true" cuando marcado, ausente cuando no; safeParse lo valida en runtime
    consentimiento: fd.get('consentimiento') === 'true',
  }

  // ── 5. Validación Zod ───────────────────────────────────────────────────────
  const result = contactoSchema.safeParse(payload)
  if (!result.success) {
    const msg = result.error.issues.at(0)?.message ?? 'Datos inválidos. Revisa el formulario.'
    return Response.json({ error: msg }, { status: 400 })
  }
  const data = result.data

  // ── 6. Construir y enviar email ─────────────────────────────────────────────
  const html = buildHtml(data.nombre, data.email, data.telefono, data.mensaje)

  const { error: resendError } = await resend.emails.send({
    from:    process.env.RESEND_FROM ?? 'onboarding@resend.dev',
    to:      [process.env.EMAIL_DESTINO!],
    replyTo: data.email,
    subject: `[Contacto] ${data.nombre}`,
    html,
  })

  if (resendError) {
    console.error('[api/contacto] Resend error:', resendError)
    return Response.json(
      { error: 'No se pudo enviar el mensaje. Inténtalo de nuevo o llámanos al 981 12 14 08.' },
      { status: 500 },
    )
  }

  return Response.json({ ok: true })
}
