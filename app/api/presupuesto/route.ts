import { resend } from '@/lib/resend'
import { createRatelimit, getIp } from '@/lib/rate-limit'
import { presupuestoSchema, type PresupuestoData } from '@/lib/validations/presupuesto'
import { escapeHtml } from '@/lib/utils/escapeHtml'

const rl = createRatelimit('tj:presupuesto')
const e  = escapeHtml

const MAX_FILE_SIZE  = 3.5 * 1024 * 1024
const ALLOWED_MIMES  = ['application/pdf', 'image/jpeg', 'image/png']

const RAMO_LABEL: Record<string, string> = {
  artes:     'Artes escénicas',
  hogar:     'Hogar',
  auto:      'Auto y moto',
  comunidad: 'Comunidad de propietarios',
  flota:     'Flota / Transporte',
  empresa:   'Empresa / PYME',
}

// Detecta el tipo real del archivo por magic bytes (no se fía del Content-Type del cliente)
async function detectMime(file: File): Promise<string | null> {
  const b = new Uint8Array(await file.slice(0, 8).arrayBuffer())
  if (b[0] === 0x25 && b[1] === 0x50 && b[2] === 0x44 && b[3] === 0x46) return 'application/pdf' // %PDF
  if (b[0] === 0xFF && b[1] === 0xD8 && b[2] === 0xFF)                   return 'image/jpeg'      // SOI
  if (b[0] === 0x89 && b[1] === 0x50 && b[2] === 0x4E && b[3] === 0x47) return 'image/png'       // PNG
  return null
}

// Genera una fila de la tabla de email; omite la fila si el valor está vacío
function row(label: string, value: string | undefined | null): string {
  if (!value?.trim()) return ''
  return `<tr>
    <td style="padding:6px 14px 6px 0;width:160px;font-size:13px;font-weight:600;color:#6b7280;vertical-align:top;white-space:nowrap">${label}</td>
    <td style="padding:6px 0;font-size:13px;color:#111827;vertical-align:top;word-break:break-word">${e(value)}</td>
  </tr>`
}

function buildHtml(data: PresupuestoData, archivoNombre: string | null): string {
  const ramoLabel = RAMO_LABEL[data.ramo] ?? data.ramo
  const fecha = new Date().toLocaleString('es-ES', {
    day: '2-digit', month: 'long', year: 'numeric',
    hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Madrid',
  })

  let seguroRows = row('Ramo', ramoLabel)

  switch (data.ramo) {
    case 'artes':
      seguroRows += row('Razón social',      data.razonSocial)
      seguroRows += row('NIF / CIF',         data.nifCif)
      seguroRows += row('Fecha inicio',      data.fechaInicio)
      seguroRows += row('Actividad',         data.actividad)
      seguroRows += row('Facturación',       data.facturacion)
      seguroRows += row('Máx. empleados',    data.maxEmpleados)
      seguroRows += row('Opción',            data.opcion)
      seguroRows += row('Observaciones',     data.observaciones)
      break
    case 'hogar':
      seguroRows += row('Fecha inicio',      data.fechaInicio)
      seguroRows += row('Dirección',         data.direccion)
      seguroRows += row('Ciudad',            data.ciudadHogar)
      seguroRows += row('Código postal',     data.cpHogar)
      seguroRows += row('Régimen',           data.regimen === 'propietario' ? 'Propietario' : 'Inquilino')
      seguroRows += row('Capital continente', `${data.capitalContinente} €`)
      seguroRows += row('Capital contenido', `${data.capitalContenido} €`)
      if (data.capitalJoyas) seguroRows += row('Capital joyas', `${data.capitalJoyas} €`)
      seguroRows += row('Alarma',            data.alarma === 'si' ? 'Sí' : 'No')
      seguroRows += row('Observaciones',     data.observaciones)
      break
    case 'auto':
      seguroRows += row('Fecha inicio',      data.fechaInicio)
      seguroRows += row('Nac. conductor',    data.fechaNacConductor)
      seguroRows += row('Expedición carnet', data.fechaCarnet)
      seguroRows += row('Marca / Modelo',    data.marcaModelo)
      seguroRows += row('Matrícula',         data.matricula)
      seguroRows += row('Mismo tomador',     data.mismoTomador === 'si' ? 'Sí' : 'No')
      seguroRows += row('Datos propietario', data.datosPropietario)
      seguroRows += row('Cía. actual',       data.companiaActual)
      seguroRows += row('Nº póliza',         data.numPoliza)
      seguroRows += row('Garantías',         data.garantias)
      seguroRows += row('Observaciones',     data.observaciones)
      break
    case 'comunidad':
      seguroRows += row('Fecha inicio',      data.fechaInicio)
      seguroRows += row('Dirección',         data.direccionComunidad)
      seguroRows += row('Ciudad',            data.ciudadComunidad)
      seguroRows += row('Código postal',     data.cpComunidad)
      seguroRows += row('Observaciones',     data.observaciones)
      break
    case 'flota':
      seguroRows += row('Empresa',      data.nombreEmpresa)
      seguroRows += row('Descripción',  data.mensajeLibre)
      break
    case 'empresa':
      seguroRows += row('Empresa',      data.nombreEmpresa)
      seguroRows += row('Actividad',    data.actividadEmpresa)
      seguroRows += row('Descripción',  data.mensajeLibre)
      break
  }

  if (archivoNombre) seguroRows += row('Archivo adjunto', archivoNombre)

  const contactoRows =
    row('Nombre',           data.nombre)      +
    row('NIF / NIE',        data.nifPersona)  +
    row('Email',            data.email)       +
    row('Teléfono',         data.telefono)    +
    row('Fecha nacimiento', data.fechaNacimiento) +
    row('Ciudad',           data.ciudadPersona)  +
    row('Código postal',    data.cpPersona)

  return `<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8">
<title>Solicitud de presupuesto</title></head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:Arial,Helvetica,sans-serif">
<div style="max-width:600px;margin:24px auto;background:#ffffff;border-radius:8px;overflow:hidden;border:1px solid #e5e7eb">

  <div style="background:#1e3a5f;padding:22px 28px">
    <p style="margin:0 0 3px;font-size:10px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#7dd3fc">Nueva solicitud de presupuesto</p>
    <h1 style="margin:0;font-size:21px;font-weight:700;color:#ffffff">${e(ramoLabel)}</h1>
  </div>

  <div style="padding:20px 28px 14px">
    <p style="margin:0 0 10px;font-size:10px;font-weight:700;color:#9ca3af;letter-spacing:.1em;text-transform:uppercase">Datos del seguro</p>
    <table style="width:100%;border-collapse:collapse">${seguroRows}</table>
  </div>

  <div style="height:1px;background:#f3f4f6;margin:0 28px"></div>

  <div style="padding:20px 28px 14px">
    <p style="margin:0 0 10px;font-size:10px;font-weight:700;color:#9ca3af;letter-spacing:.1em;text-transform:uppercase">Datos del solicitante</p>
    <table style="width:100%;border-collapse:collapse">${contactoRows}</table>
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

  // ── 4. Separa archivo del resto de campos ───────────────────────────────────
  const archivoRaw = fd.get('archivo')
  const archivo    = archivoRaw instanceof File && archivoRaw.size > 0 ? archivoRaw : null

  const raw: Record<string, string> = {}
  for (const [key, value] of fd.entries()) {
    if (key === 'archivo' || key === 'website') continue
    if (typeof value === 'string') raw[key] = value
  }

  // Coerce boolean strings → boolean (el estado del form serializa boolean como "true"/"false")
  const payload = {
    ...raw,
    consentimiento:         raw.consentimiento         === 'true',
    consentimientoAnalisis: raw.consentimientoAnalisis === 'true',
  }

  // ── 5. Validación Zod ───────────────────────────────────────────────────────
  const result = presupuestoSchema.safeParse(payload)
  if (!result.success) {
    const msg = result.error.issues.at(0)?.message ?? 'Datos inválidos. Revisa el formulario.'
    return Response.json({ error: msg }, { status: 400 })
  }
  const data = result.data

  // ── 6. Auto: datosPropietario condicional ──────────────────────────────────
  if (data.ramo === 'auto' && data.mismoTomador === 'no' && !data.datosPropietario?.trim()) {
    return Response.json(
      { error: 'Los datos del propietario son obligatorios cuando el tomador y el propietario son personas distintas.' },
      { status: 400 },
    )
  }

  // ── 7. Validación del archivo (servidor, magic bytes) ──────────────────────
  if (archivo) {
    if (archivo.size > MAX_FILE_SIZE) {
      return Response.json(
        { error: 'El archivo adjunto supera 3,5 MB. Compímelo o envíalo directamente a info@torresjack.com.' },
        { status: 400 },
      )
    }
    const mime = await detectMime(archivo)
    if (!mime || !ALLOWED_MIMES.includes(mime)) {
      return Response.json(
        { error: 'Tipo de archivo no permitido. Adjunta un PDF, JPG o PNG.' },
        { status: 400 },
      )
    }
  }

  // ── 8. Construir y enviar email ─────────────────────────────────────────────
  const html = buildHtml(data, archivo?.name ?? null)

  const attachments = archivo
    ? [{ filename: archivo.name, content: Buffer.from(await archivo.arrayBuffer()) }]
    : []

  const { error: resendError } = await resend.emails.send({
    from:     process.env.RESEND_FROM ?? 'onboarding@resend.dev',
    to:       [process.env.EMAIL_DESTINO!],
    replyTo:  data.email,
    subject:  `[Presupuesto] ${RAMO_LABEL[data.ramo] ?? data.ramo} — ${data.nombre}`,
    html,
    attachments,
  })

  if (resendError) {
    console.error('[api/presupuesto] Resend error:', resendError)
    return Response.json(
      { error: 'No se pudo enviar la solicitud. Inténtalo de nuevo o llámanos al 981 12 14 08.' },
      { status: 500 },
    )
  }

  return Response.json({ ok: true })
}
