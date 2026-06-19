'use client'

import { useEffect, useRef, useState } from 'react'
import {
  ArrowLeft, ArrowRight, Briefcase, Building, Car, Check,
  Home, Paperclip, Theater, Truck,
} from 'lucide-react'

type Ramo = 'artes' | 'hogar' | 'auto' | 'comunidad' | 'flota' | 'empresa'

// Renombrado de FormData → PresupuestoState para evitar conflicto con el Web API FormData
interface PresupuestoState {
  ramo: Ramo | ''
  // Step 2 — común
  fechaInicio: string; observaciones: string; polizaFilename: string
  // Artes escénicas
  razonSocial: string; nifCif: string; actividad: string; facturacion: string
  maxEmpleados: string; opcion: string
  // Hogar
  direccion: string; ciudadHogar: string; cpHogar: string; regimen: string
  capitalContinente: string; capitalContenido: string; capitalJoyas: string; alarma: string
  // Auto
  fechaNacConductor: string; fechaCarnet: string; marcaModelo: string; matricula: string
  mismoTomador: string; datosPropietario: string; companiaActual: string
  numPoliza: string; garantias: string
  // Comunidad
  direccionComunidad: string; ciudadComunidad: string; cpComunidad: string
  // Flota / Empresa
  nombreEmpresa: string; actividadEmpresa: string; mensajeLibre: string
  // Step 3
  nombre: string; nifPersona: string; email: string; telefono: string
  fechaNacimiento: string; ciudadPersona: string; cpPersona: string
  consentimiento: boolean; consentimientoAnalisis: boolean
}

const RAMOS_OPTIONS = [
  { id: 'artes'     as Ramo, Icon: Theater,   label: 'Artes escénicas',   desc: 'Compañía, artista o profesor' },
  { id: 'hogar'     as Ramo, Icon: Home,       label: 'Hogar',              desc: 'Vivienda y contenido' },
  { id: 'auto'      as Ramo, Icon: Car,        label: 'Auto y moto',        desc: 'Terceros o todo riesgo' },
  { id: 'comunidad' as Ramo, Icon: Building,   label: 'Comunidad',          desc: 'Comunidad de propietarios' },
  { id: 'flota'     as Ramo, Icon: Truck,      label: 'Flota o transporte', desc: 'Vehículos de empresa' },
  { id: 'empresa'   as Ramo, Icon: Briefcase,  label: 'Empresa o PYME',     desc: 'Multirriesgo y RC' },
]

const STEPS = ['Qué aseguras', 'Detalles', 'Tus datos', 'Enviar']

const STEP2_LABELS: Record<Ramo, string> = {
  artes:     'Detalles de tu compañía o actividad',
  hogar:     'Detalles de tu hogar',
  auto:      'Detalles del vehículo',
  comunidad: 'Detalles de la comunidad',
  flota:     'Detalles de tu flota',
  empresa:   'Detalles de tu empresa',
}

const INITIAL: PresupuestoState = {
  ramo: '',
  fechaInicio: '', observaciones: '', polizaFilename: '',
  razonSocial: '', nifCif: '', actividad: '', facturacion: '', maxEmpleados: '', opcion: '',
  direccion: '', ciudadHogar: '', cpHogar: '', regimen: 'propietario',
  capitalContinente: '', capitalContenido: '', capitalJoyas: '', alarma: 'no',
  fechaNacConductor: '', fechaCarnet: '', marcaModelo: '', matricula: '',
  mismoTomador: 'si', datosPropietario: '', companiaActual: '', numPoliza: '', garantias: '',
  direccionComunidad: '', ciudadComunidad: '', cpComunidad: '',
  nombreEmpresa: '', actividadEmpresa: '', mensajeLibre: '',
  nombre: '', nifPersona: '', email: '', telefono: '',
  fechaNacimiento: '', ciudadPersona: '', cpPersona: '',
  consentimiento: false, consentimientoAnalisis: false,
}

const MAX_FILE_SIZE  = 3.5 * 1024 * 1024                          // 3.5 MB
const ALLOWED_TYPES  = ['application/pdf', 'image/jpeg', 'image/png']
const ALLOWED_EXT_RE = /\.(pdf|jpe?g|png)$/i

function validateFile(file: File): string | null {
  if (!ALLOWED_TYPES.includes(file.type) && !ALLOWED_EXT_RE.test(file.name))
    return 'Solo se admiten archivos PDF, JPG o PNG.'
  if (file.size > MAX_FILE_SIZE)
    return 'El archivo supera 3,5 MB. Comprímelo o envíalo directamente a info@torresjack.com.'
  return null
}

function SummaryRow({ label, value }: { label: string; value: string | boolean }) {
  const display = typeof value === 'boolean' ? (value ? 'Sí' : '') : value
  if (!display) return null
  return (
    <div className="flex gap-4 py-[9px] border-b border-brand-line last:border-0">
      <dt className="text-[13.5px] font-semibold text-brand-ink-soft min-w-[160px] shrink-0">{label}</dt>
      <dd className="text-[13.5px] text-brand-ink break-words">{display}</dd>
    </div>
  )
}

export default function PresupuestoPage() {
  const [step, setStep]               = useState(0)
  const [data, setData]               = useState<PresupuestoState>(INITIAL)
  const [submitted, setSubmitted]     = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [fileError, setFileError]     = useState('')

  const fileRef         = useRef<HTMLInputElement>(null)
  const selectedFileRef = useRef<File | null>(null)   // persiste el File entre cambios de paso
  const honeypotRef     = useRef<HTMLInputElement>(null)

  // Preselecciona ramo desde ?ramo= en la URL y salta al paso de detalles
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const ramo   = params.get('ramo') as Ramo | null
    if (ramo && RAMOS_OPTIONS.some(r => r.id === ramo)) {
      setData(prev => ({ ...prev, ramo }))
      setStep(1)
    }
  }, [])

  const set = (field: keyof PresupuestoState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const el    = e.target
      const value = el instanceof HTMLInputElement && el.type === 'checkbox' ? el.checked : el.value
      setData(prev => ({ ...prev, [field]: value }))
    }

  const pick = (field: keyof PresupuestoState, value: string) =>
    setData(prev => ({ ...prev, [field]: value }))

  const handleSubmit = async () => {
    setIsSubmitting(true)
    setSubmitError('')

    const fd = new FormData()
    fd.append('website', honeypotRef.current?.value ?? '')          // honeypot
    for (const [key, value] of Object.entries(data)) {
      fd.append(key, String(value))
    }
    if (selectedFileRef.current) {
      fd.append('archivo', selectedFileRef.current)
    }

    try {
      const res  = await fetch('/api/presupuesto', { method: 'POST', body: fd })
      const json = await res.json() as { error?: string }
      if (!res.ok) {
        setSubmitError(json.error ?? 'Ha ocurrido un error. Inténtalo de nuevo más tarde.')
      } else {
        setSubmitted(true)
      }
    } catch {
      setSubmitError('Error de red. Comprueba tu conexión e inténtalo de nuevo.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // ── Shared CSS ──────────────────────────────────────────────────────────────
  const I  = 'w-full py-[13px] px-[15px] text-[16px] font-sans border-[1.5px] border-brand-line rounded-lg bg-brand-surface text-brand-ink placeholder:text-brand-muted focus:outline-none focus:border-brand-accent focus:shadow-[0_0_0_4px_oklch(0.948_0.030_250)] transition-[border-color,box-shadow] duration-200'
  const L  = 'block text-[14px] font-semibold text-brand-ink mb-[7px]'
  const FW = 'mt-[18px]'
  const OPT = ' (opcional)'

  const radioBtnCls = (active: boolean) =>
    'flex-1 py-[10px] px-4 rounded-lg border-[1.5px] text-[15px] font-medium text-center cursor-pointer transition-colors duration-200 ' +
    (active ? 'border-brand-accent bg-brand-accent-tint text-brand-accent-deep' : 'border-brand-line text-brand-ink-soft hover:border-brand-line-strong')

  const SUMAS = [
    { val: '300.000 €',   sub: 'Opción A' },
    { val: '600.000 €',   sub: 'Opción B' },
    { val: '1.000.000 €', sub: 'Opción C' },
  ]

  // ── Shared field blocks ─────────────────────────────────────────────────────
  const dateField = (
    <div className={FW}>
      <label className={L}>Fecha de inicio del seguro <span className="text-brand-accent">*</span></label>
      <input type="date" value={data.fechaInicio} onChange={set('fechaInicio')} className={I} />
    </div>
  )

  const obsField = (
    <div className={FW}>
      <label className={L}>Observaciones <span className="text-[13px] font-normal text-brand-muted">{OPT}</span></label>
      <textarea value={data.observaciones} onChange={set('observaciones')} rows={3}
        placeholder="Cualquier información que consideres relevante…"
        className={I + ' resize-y min-h-[80px]'} />
    </div>
  )

  const fileField = (
    <div className={FW}>
      <label className={L}>Adjuntar póliza actual <span className="text-[13px] font-normal text-brand-muted">{OPT}</span></label>
      <label className="flex items-center gap-3 py-[11px] px-[15px] border-[1.5px] border-dashed border-brand-line rounded-lg cursor-pointer hover:border-brand-accent hover:bg-brand-accent-tint transition-colors duration-200">
        <Paperclip className="w-4 h-4 text-brand-muted shrink-0" />
        <span className="text-[15px] text-brand-muted truncate">
          {data.polizaFilename || 'Seleccionar PDF o imagen…'}
        </span>
        <input ref={fileRef} type="file" accept=".pdf,.jpg,.jpeg,.png" className="sr-only"
          onChange={e => {
            const f = e.target.files?.[0]
            if (!f) {
              selectedFileRef.current = null
              setData(p => ({ ...p, polizaFilename: '' }))
              setFileError('')
              return
            }
            const err = validateFile(f)
            if (err) {
              selectedFileRef.current = null
              setData(p => ({ ...p, polizaFilename: '' }))
              setFileError(err)
              if (fileRef.current) fileRef.current.value = ''
            } else {
              selectedFileRef.current = f
              setData(p => ({ ...p, polizaFilename: f.name }))
              setFileError('')
            }
          }} />
      </label>
      {fileError && (
        <p className="mt-[6px] text-[13px] text-red-600 leading-[1.4]">{fileError}</p>
      )}
    </div>
  )

  // ── Step 2 per-ramo content ─────────────────────────────────────────────────
  const step2Content: Record<Ramo, React.ReactNode> = {

    artes: <>
      <div className="grid grid-cols-1 min-[560px]:grid-cols-2 gap-[14px]">
        <div className={FW}>
          <label className={L}>Razón social <span className="text-brand-accent">*</span></label>
          <input value={data.razonSocial} onChange={set('razonSocial')} placeholder="Nombre de la compañía o artista" className={I} />
        </div>
        <div className={FW}>
          <label className={L}>NIF / CIF <span className="text-brand-accent">*</span></label>
          <input value={data.nifCif} onChange={set('nifCif')} placeholder="B12345678" className={I} />
        </div>
      </div>
      {dateField}
      <div className="grid grid-cols-1 min-[560px]:grid-cols-2 gap-[14px]">
        <div className={FW}>
          <label className={L}>Actividad principal <span className="text-brand-accent">*</span></label>
          <select value={data.actividad} onChange={set('actividad')} className={I}>
            <option value="">Selecciona…</option>
            {['Teatro','Danza','Clown','Títeres','Cabaret','Circo','Variedades','Teatro musical','Otros'].map(a =>
              <option key={a}>{a}</option>)}
          </select>
        </div>
        <div className={FW}>
          <label className={L}>Facturación anual <span className="text-brand-accent">*</span></label>
          <select value={data.facturacion} onChange={set('facturacion')} className={I}>
            <option value="">Selecciona…</option>
            <option value="Hasta 400.000 € — tarifa plana">Hasta 400.000 € — tarifa plana</option>
            <option value="Más de 400.000 € — póliza regularizable">Más de 400.000 € — póliza regularizable</option>
            <option value="Grupo aficionado / asociación cultural">Grupo aficionado / asociación cultural</option>
          </select>
        </div>
      </div>
      <div className={FW}>
        <label className={L}>Nº máximo de empleados / colaboradores <span className="text-brand-accent">*</span></label>
        <input type="number" min="0" value={data.maxEmpleados} onChange={set('maxEmpleados')} placeholder="Ej. 10" className={I} />
      </div>
      <div className={FW}>
        <label className={L}>Opción de contratación (suma asegurada por siniestro) <span className="text-brand-accent">*</span></label>
        <div className="grid grid-cols-3 max-[500px]:grid-cols-2 gap-[10px] mt-2">
          {SUMAS.map(({ val, sub }) => (
            <button key={val} type="button" onClick={() => pick('opcion', val)}
              className={'border-[1.5px] rounded-[14px] p-[14px_10px] text-center transition-colors duration-200 ' +
                (data.opcion === val ? 'border-brand-accent bg-brand-accent-tint' : 'border-brand-line hover:border-brand-line-strong')}>
              <b className="font-serif text-[18px] font-semibold tracking-[-0.02em] text-brand-ink block leading-tight">{val}</b>
              <small className="text-[12px] text-brand-muted">{sub}</small>
            </button>
          ))}
        </div>
      </div>
      {obsField}{fileField}
    </>,

    hogar: <>
      {dateField}
      <div className={FW}>
        <label className={L}>Dirección de la vivienda a asegurar <span className="text-brand-accent">*</span></label>
        <input value={data.direccion} onChange={set('direccion')} placeholder="Calle, número, piso…" className={I} />
      </div>
      <div className="grid grid-cols-1 min-[560px]:grid-cols-2 gap-[14px]">
        <div className={FW}>
          <label className={L}>Ciudad <span className="text-brand-accent">*</span></label>
          <input value={data.ciudadHogar} onChange={set('ciudadHogar')} placeholder="A Coruña" className={I} />
        </div>
        <div className={FW}>
          <label className={L}>Código postal <span className="text-brand-accent">*</span></label>
          <input value={data.cpHogar} onChange={set('cpHogar')} placeholder="15001" className={I} />
        </div>
      </div>
      <div className={FW}>
        <label className={L}>Régimen de ocupación <span className="text-brand-accent">*</span></label>
        <div className="flex gap-3">
          {['propietario','inquilino'].map(v => (
            <button key={v} type="button" onClick={() => pick('regimen', v)} className={radioBtnCls(data.regimen === v)}>
              {v.charAt(0).toUpperCase() + v.slice(1)}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-3 max-[500px]:grid-cols-1 gap-[14px]">
        <div className={FW}>
          <label className={L}>Capital continente <span className="text-brand-accent">*</span></label>
          <input type="number" value={data.capitalContinente} onChange={set('capitalContinente')} placeholder="€" className={I} />
        </div>
        <div className={FW}>
          <label className={L}>Capital contenido <span className="text-brand-accent">*</span></label>
          <input type="number" value={data.capitalContenido} onChange={set('capitalContenido')} placeholder="€" className={I} />
        </div>
        <div className={FW}>
          <label className={L}>Capital joyas <span className="text-[13px] font-normal text-brand-muted">{OPT}</span></label>
          <input type="number" value={data.capitalJoyas} onChange={set('capitalJoyas')} placeholder="€" className={I} />
        </div>
      </div>
      <div className={FW}>
        <label className={L}>¿Dispones de alarma? <span className="text-brand-accent">*</span></label>
        <div className="flex gap-3">
          {[{v:'si',l:'Sí'},{v:'no',l:'No'}].map(({v,l}) => (
            <button key={v} type="button" onClick={() => pick('alarma', v)} className={radioBtnCls(data.alarma === v)}>{l}</button>
          ))}
        </div>
      </div>
      {obsField}{fileField}
    </>,

    auto: <>
      {dateField}
      <div className="grid grid-cols-1 min-[560px]:grid-cols-2 gap-[14px]">
        <div className={FW}>
          <label className={L}>Fecha de nacimiento del conductor principal <span className="text-brand-accent">*</span></label>
          <input type="date" value={data.fechaNacConductor} onChange={set('fechaNacConductor')} className={I} />
        </div>
        <div className={FW}>
          <label className={L}>Fecha de expedición del carnet <span className="text-brand-accent">*</span></label>
          <input type="date" value={data.fechaCarnet} onChange={set('fechaCarnet')} className={I} />
        </div>
      </div>
      <div className="grid grid-cols-1 min-[560px]:grid-cols-2 gap-[14px]">
        <div className={FW}>
          <label className={L}>Marca, modelo y versión <span className="text-brand-accent">*</span></label>
          <input value={data.marcaModelo} onChange={set('marcaModelo')} placeholder="Ej. Seat Ibiza 1.0 TSI" className={I} />
        </div>
        <div className={FW}>
          <label className={L}>Matrícula <span className="text-brand-accent">*</span></label>
          <input value={data.matricula} onChange={set('matricula')} placeholder="1234 ABC" className={I} />
        </div>
      </div>
      <div className={FW}>
        <label className={L}>¿Tomador, conductor y propietario son la misma persona? <span className="text-brand-accent">*</span></label>
        <div className="flex gap-3">
          {[{v:'si',l:'Sí'},{v:'no',l:'No'}].map(({v,l}) => (
            <button key={v} type="button" onClick={() => pick('mismoTomador', v)} className={radioBtnCls(data.mismoTomador === v)}>{l}</button>
          ))}
        </div>
      </div>
      {data.mismoTomador === 'no' && (
        <div className={FW}>
          <label className={L}>Datos del propietario <span className="text-brand-accent">*</span></label>
          <textarea value={data.datosPropietario} onChange={set('datosPropietario')} rows={3}
            placeholder="Nombre, NIF, relación con el tomador…" className={I + ' resize-y min-h-[80px]'} />
        </div>
      )}
      <div className="grid grid-cols-1 min-[560px]:grid-cols-2 gap-[14px]">
        <div className={FW}>
          <label className={L}>Compañía aseguradora actual <span className="text-brand-accent">*</span></label>
          <input value={data.companiaActual} onChange={set('companiaActual')} placeholder="Ej. Mapfre" className={I} />
        </div>
        <div className={FW}>
          <label className={L}>Nº póliza (últimos 5 dígitos) <span className="text-brand-accent">*</span></label>
          <input value={data.numPoliza} onChange={set('numPoliza')} maxLength={5} placeholder="12345" className={I} />
        </div>
      </div>
      <div className={FW}>
        <label className={L}>Garantías deseadas <span className="text-brand-accent">*</span></label>
        <select value={data.garantias} onChange={set('garantias')} className={I}>
          <option value="">Selecciona…</option>
          <option>Solo terceros</option>
          <option>Terceros ampliado</option>
          <option>Todo riesgo con franquicia</option>
          <option>Todo riesgo sin franquicia</option>
          <option>A determinar con el mediador</option>
        </select>
      </div>
      {obsField}{fileField}
    </>,

    comunidad: <>
      {dateField}
      <div className={FW}>
        <label className={L}>Dirección exacta <span className="text-brand-accent">*</span></label>
        <input value={data.direccionComunidad} onChange={set('direccionComunidad')} placeholder="Calle, número, escalera…" className={I} />
      </div>
      <div className="grid grid-cols-1 min-[560px]:grid-cols-2 gap-[14px]">
        <div className={FW}>
          <label className={L}>Ciudad <span className="text-brand-accent">*</span></label>
          <input value={data.ciudadComunidad} onChange={set('ciudadComunidad')} placeholder="A Coruña" className={I} />
        </div>
        <div className={FW}>
          <label className={L}>Código postal <span className="text-brand-accent">*</span></label>
          <input value={data.cpComunidad} onChange={set('cpComunidad')} placeholder="15001" className={I} />
        </div>
      </div>
      {obsField}{fileField}
    </>,

    flota: <>
      <div className={FW}>
        <label className={L}>Nombre de la empresa <span className="text-brand-accent">*</span></label>
        <input value={data.nombreEmpresa} onChange={set('nombreEmpresa')} placeholder="Razón social o nombre comercial" className={I} />
      </div>
      <div className={FW}>
        <label className={L}>Cuéntanos sobre tu flota <span className="text-brand-accent">*</span></label>
        <textarea value={data.mensajeLibre} onChange={set('mensajeLibre')} rows={5}
          placeholder="Tipo de vehículos, número aproximado, usos, si ya tienes póliza…"
          className={I + ' resize-y min-h-[120px]'} />
      </div>
      {fileField}
    </>,

    empresa: <>
      <div className="grid grid-cols-1 min-[560px]:grid-cols-2 gap-[14px]">
        <div className={FW}>
          <label className={L}>Nombre de la empresa <span className="text-brand-accent">*</span></label>
          <input value={data.nombreEmpresa} onChange={set('nombreEmpresa')} placeholder="Razón social o nombre comercial" className={I} />
        </div>
        <div className={FW}>
          <label className={L}>Actividad <span className="text-brand-accent">*</span></label>
          <input value={data.actividadEmpresa} onChange={set('actividadEmpresa')} placeholder="¿A qué se dedica la empresa?" className={I} />
        </div>
      </div>
      <div className={FW}>
        <label className={L}>Cuéntanos qué necesitas <span className="text-brand-accent">*</span></label>
        <textarea value={data.mensajeLibre} onChange={set('mensajeLibre')} rows={5}
          placeholder="Tipo de seguro, coberturas deseadas, situación actual…"
          className={I + ' resize-y min-h-[120px]'} />
      </div>
      {fileField}
    </>,
  }

  const ramoLabel = RAMOS_OPTIONS.find(r => r.id === data.ramo)?.label ?? ''

  // ── Render ──────────────────────────────────────────────────────────────────
  return (
    <section id="presupuesto" className="bg-brand-paper-alt py-[clamp(72px,9vw,132px)]">
      <div className="w-full max-w-[1200px] mx-auto px-7">

        {/* Header */}
        <div className="text-center mb-[50px]">
          <span className="inline-flex justify-center items-center gap-[10px] font-sans text-[13px] font-semibold tracking-[0.16em] uppercase text-brand-accent">
            <span className="inline-block w-[26px] h-[1.5px] bg-brand-accent shrink-0" aria-hidden />
            Presupuesto sin compromiso
          </span>
          <h2 className="font-serif font-medium text-[clamp(32px,4.4vw,56px)] leading-[1.08] tracking-[-0.015em] text-brand-ink mt-[18px]">
            Cuéntanos qué quieres asegurar.
          </h2>
          <p className="text-[clamp(17px,1.4vw,20px)] leading-[1.6] text-brand-ink-soft mt-[18px] max-w-[52ch] mx-auto">
            Responde unas pocas preguntas y te preparamos una oferta a medida. Sin coste y sin letra pequeña.
          </p>
        </div>

        {/* Shell */}
        <div className="bg-brand-surface border border-brand-line rounded-[30px] shadow-[0_4px_14px_oklch(0.3_0.02_60/0.08),0_18px_40px_oklch(0.3_0.02_60/0.07)] overflow-hidden grid grid-cols-1 min-[1080px]:grid-cols-[340px_1fr]">

          {/* ── Sidebar ── */}
          <aside className="bg-brand-dark p-[40px_36px] flex flex-col max-[1080px]:p-[28px]">
            <h3 className="font-serif font-medium text-[27px] leading-[1.08] tracking-[-0.015em] text-brand-on-dark max-[1080px]:text-[21px]">
              Tu presupuesto en 4 pasos
            </h3>
            <p className="text-[15.5px] leading-[1.6] text-brand-on-dark-soft mt-[14px] max-[1080px]:hidden">
              Tardarás menos de dos minutos. Un mediador revisa cada solicitud personalmente.
            </p>

            <nav className="mt-[38px] flex flex-col gap-1 max-[1080px]:hidden" aria-label="Progreso del formulario">
              {STEPS.map((label, i) => {
                const done   = i < step
                const active = i === step
                return (
                  <div key={label} className={`flex gap-[14px] items-center px-2 py-3 rounded-[12px] ${active ? 'bg-white/5' : ''}`}>
                    <span className={[
                      'w-[30px] h-[30px] rounded-full grid place-items-center text-[14px] font-semibold shrink-0 border-[1.5px] transition-colors duration-300',
                      done   ? 'border-[oklch(0.80_0.10_45)] text-[oklch(0.84_0.10_45)]' :
                      active ? 'bg-[oklch(0.80_0.10_45)] border-[oklch(0.80_0.10_45)] text-[oklch(0.218_0.045_257)]' :
                               'border-brand-dark-line text-brand-on-dark-soft',
                    ].join(' ')}>
                      {done ? <Check className="w-3.5 h-3.5" strokeWidth={2.5} /> : i + 1}
                    </span>
                    <span className={`text-[15px] font-medium transition-colors ${active || done ? 'text-brand-on-dark' : 'text-brand-on-dark-soft'}`}>
                      {label}
                    </span>
                  </div>
                )
              })}
            </nav>

            <div className="mt-auto pt-[30px] text-[14px] text-brand-on-dark-soft max-[1080px]:hidden">
              ¿Prefieres hablar?<br />
              Llámanos al{' '}
              <a href="tel:+34981121408" className="text-[oklch(0.84_0.10_45)] font-semibold hover:underline">981 12 14 08</a>
              {' '}o escribe a{' '}
              <a href="mailto:info@torresjack.com" className="text-[oklch(0.84_0.10_45)] font-semibold hover:underline">info@torresjack.com</a>
            </div>
          </aside>

          {/* ── Form area ── */}
          <div className="p-[44px_clamp(28px,4vw,52px)] flex flex-col min-h-[540px]">

            {/* Honeypot — off-screen, invisible para humanos */}
            <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}>
              <input ref={honeypotRef} type="text" name="website" tabIndex={-1} autoComplete="off" />
            </div>

            {!submitted && (
              <>
                <div className="h-1 bg-brand-cream rounded-full overflow-hidden">
                  <div
                    className="h-full bg-brand-accent rounded-full transition-[width] duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                    style={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
                  />
                </div>
                <p className="text-[13px] font-semibold text-brand-muted tracking-[0.04em] mt-3">
                  Paso {step + 1} de {STEPS.length}
                </p>
              </>
            )}

            <div className="mt-[26px] flex-1">

              {/* ── Paso 1: Ramo ── */}
              {step === 0 && (
                <div>
                  <h4 className="font-serif font-medium text-[27px] leading-[1.08] tracking-[-0.015em] text-brand-ink">
                    ¿Qué quieres asegurar?
                  </h4>
                  <p className="text-[16px] leading-[1.6] text-brand-ink-soft mt-2">
                    Elige el ramo que mejor describe lo que necesitas.
                  </p>
                  <div className="grid grid-cols-1 min-[540px]:grid-cols-2 gap-3 mt-6">
                    {RAMOS_OPTIONS.map(({ id, Icon, label, desc }) => (
                      <div key={id} className="group">
                        <button
                          type="button"
                          onClick={() => pick('ramo', id)}
                          className={[
                            'border-[1.5px] rounded-[14px] p-[18px] flex gap-[14px] items-start text-left w-full',
                            'transition-[border-color,background-color,transform] duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)]',
                            data.ramo === id
                              ? 'border-brand-accent bg-brand-accent-tint'
                              : 'border-brand-line bg-brand-surface hover:border-brand-line-strong group-hover:-translate-y-0.5',
                          ].join(' ')}
                        >
                          <span className={`w-[38px] h-[38px] rounded-[10px] grid place-items-center shrink-0 transition-colors ${data.ramo === id ? 'bg-brand-accent text-white' : 'bg-brand-cream text-brand-ink'}`}>
                            <Icon className="w-5 h-5" strokeWidth={2} />
                          </span>
                          <span>
                            <b className="block font-semibold text-[16.5px] text-brand-ink leading-tight">{label}</b>
                            <small className="block text-[13.5px] text-brand-muted mt-[3px]">{desc}</small>
                          </span>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ── Paso 2: Detalles por ramo ── */}
              {step === 1 && data.ramo !== '' && (
                <div>
                  <h4 className="font-serif font-medium text-[27px] leading-[1.08] tracking-[-0.015em] text-brand-ink">
                    {STEP2_LABELS[data.ramo]}
                  </h4>
                  <p className="text-[16px] leading-[1.6] text-brand-ink-soft mt-2">
                    Completa los datos para preparar tu oferta.
                  </p>
                  {step2Content[data.ramo]}
                </div>
              )}

              {/* ── Paso 3: Datos personales ── */}
              {step === 2 && (
                <div>
                  <h4 className="font-serif font-medium text-[27px] leading-[1.08] tracking-[-0.015em] text-brand-ink">
                    ¿Cómo te contactamos?
                  </h4>
                  <p className="text-[16px] leading-[1.6] text-brand-ink-soft mt-2">
                    Un mediador titulado revisará tu solicitud y te responderá personalmente.
                  </p>

                  <div className="grid grid-cols-1 min-[560px]:grid-cols-2 gap-[14px]">
                    <div className={FW}>
                      <label className={L}>Nombre y apellidos <span className="text-brand-accent">*</span></label>
                      <input value={data.nombre} onChange={set('nombre')} placeholder="Tu nombre completo" autoComplete="name" className={I} />
                    </div>
                    <div className={FW}>
                      <label className={L}>NIF / NIE <span className="text-brand-accent">*</span></label>
                      <input value={data.nifPersona} onChange={set('nifPersona')} placeholder="12345678A" className={I} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 min-[560px]:grid-cols-2 gap-[14px]">
                    <div className={FW}>
                      <label className={L}>Email <span className="text-brand-accent">*</span></label>
                      <input type="email" value={data.email} onChange={set('email')} placeholder="tucorreo@email.com" autoComplete="email" className={I} />
                    </div>
                    <div className={FW}>
                      <label className={L}>Teléfono <span className="text-brand-accent">*</span></label>
                      <input type="tel" value={data.telefono} onChange={set('telefono')} placeholder="600 00 00 00" autoComplete="tel" className={I} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 min-[560px]:grid-cols-2 gap-[14px]">
                    <div className={FW}>
                      <label className={L}>
                        Fecha de nacimiento{' '}
                        <span className="text-[13px] font-normal text-brand-muted">(solo personas físicas)</span>
                      </label>
                      <input type="date" value={data.fechaNacimiento} onChange={set('fechaNacimiento')} className={I} />
                    </div>
                    <div />
                  </div>
                  <div className="grid grid-cols-1 min-[560px]:grid-cols-2 gap-[14px]">
                    <div className={FW}>
                      <label className={L}>Ciudad <span className="text-brand-accent">*</span></label>
                      <input value={data.ciudadPersona} onChange={set('ciudadPersona')} placeholder="A Coruña" autoComplete="address-level2" className={I} />
                    </div>
                    <div className={FW}>
                      <label className={L}>Código postal <span className="text-brand-accent">*</span></label>
                      <input value={data.cpPersona} onChange={set('cpPersona')} placeholder="15001" autoComplete="postal-code" className={I} />
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col gap-4">
                    <label className="flex gap-3 items-start cursor-pointer">
                      <input type="checkbox" checked={data.consentimiento} onChange={set('consentimiento')}
                        className="mt-[3px] w-4 h-4 shrink-0 accent-[oklch(0.50_0.135_256)]" />
                      <span className="text-[13.5px] text-brand-ink-soft leading-[1.55]">
                        <b className="text-brand-ink font-semibold">RGPD.</b>{' '}
                        He leído y acepto el{' '}
                        <a href="/aviso-legal" className="text-brand-accent font-semibold hover:underline">aviso legal y política de privacidad</a>.
                        {' '}Acepto que Torres Jack me contacte para gestionar mi solicitud.{' '}
                        <span className="text-brand-accent">*</span>
                      </span>
                    </label>
                    <label className="flex gap-3 items-start cursor-pointer">
                      <input type="checkbox" checked={data.consentimientoAnalisis} onChange={set('consentimientoAnalisis')}
                        className="mt-[3px] w-4 h-4 shrink-0 accent-[oklch(0.50_0.135_256)]" />
                      <span className="text-[13.5px] text-brand-ink-soft leading-[1.55]">
                        <b className="text-brand-ink font-semibold">Análisis objetivo.</b>{' '}
                        Acepto que Torres Jack analice mis necesidades para ofrecerme productos adecuados a mi perfil.
                      </span>
                    </label>
                  </div>
                </div>
              )}

              {/* ── Paso 4: Resumen ── */}
              {step === 3 && !submitted && (
                <div>
                  <h4 className="font-serif font-medium text-[27px] leading-[1.08] tracking-[-0.015em] text-brand-ink">
                    Revisa tu solicitud
                  </h4>
                  <p className="text-[16px] leading-[1.6] text-brand-ink-soft mt-2 mb-6">
                    Comprueba que todo es correcto antes de enviar.
                  </p>

                  <div className="flex flex-col gap-4">
                    {/* Seguro */}
                    <div className="border border-brand-line rounded-[14px] overflow-hidden">
                      <div className="bg-brand-cream px-5 py-[10px] border-b border-brand-line">
                        <span className="text-[12px] font-semibold tracking-[0.10em] uppercase text-brand-muted">Seguro</span>
                      </div>
                      <dl className="px-5">
                        <SummaryRow label="Ramo"         value={ramoLabel} />
                        <SummaryRow label="Fecha inicio" value={data.fechaInicio} />
                        {data.ramo === 'artes' && <>
                          <SummaryRow label="Razón social"    value={data.razonSocial} />
                          <SummaryRow label="NIF / CIF"       value={data.nifCif} />
                          <SummaryRow label="Actividad"       value={data.actividad} />
                          <SummaryRow label="Facturación"     value={data.facturacion} />
                          <SummaryRow label="Máx. empleados"  value={data.maxEmpleados} />
                          <SummaryRow label="Opción"          value={data.opcion} />
                        </>}
                        {data.ramo === 'hogar' && <>
                          <SummaryRow label="Dirección"          value={data.direccion} />
                          <SummaryRow label="Ciudad"             value={data.ciudadHogar} />
                          <SummaryRow label="CP"                 value={data.cpHogar} />
                          <SummaryRow label="Régimen"            value={data.regimen} />
                          <SummaryRow label="Capital continente" value={data.capitalContinente ? `${data.capitalContinente} €` : ''} />
                          <SummaryRow label="Capital contenido"  value={data.capitalContenido ? `${data.capitalContenido} €` : ''} />
                          <SummaryRow label="Capital joyas"      value={data.capitalJoyas ? `${data.capitalJoyas} €` : ''} />
                          <SummaryRow label="Alarma"             value={data.alarma === 'si' ? 'Sí' : 'No'} />
                        </>}
                        {data.ramo === 'auto' && <>
                          <SummaryRow label="Marca / Modelo"  value={data.marcaModelo} />
                          <SummaryRow label="Matrícula"       value={data.matricula} />
                          <SummaryRow label="Garantías"       value={data.garantias} />
                          <SummaryRow label="Compañía actual" value={data.companiaActual} />
                          <SummaryRow label="Nº póliza"       value={data.numPoliza} />
                        </>}
                        {data.ramo === 'comunidad' && <>
                          <SummaryRow label="Dirección" value={data.direccionComunidad} />
                          <SummaryRow label="Ciudad"    value={data.ciudadComunidad} />
                          <SummaryRow label="CP"        value={data.cpComunidad} />
                        </>}
                        {(data.ramo === 'flota' || data.ramo === 'empresa') && <>
                          <SummaryRow label="Empresa"   value={data.nombreEmpresa} />
                          {data.ramo === 'empresa' && <SummaryRow label="Actividad" value={data.actividadEmpresa} />}
                          <SummaryRow label="Mensaje"   value={data.mensajeLibre} />
                        </>}
                        <SummaryRow label="Observaciones"   value={data.observaciones} />
                        <SummaryRow label="Archivo adjunto" value={data.polizaFilename} />
                      </dl>
                    </div>

                    {/* Datos personales */}
                    <div className="border border-brand-line rounded-[14px] overflow-hidden">
                      <div className="bg-brand-cream px-5 py-[10px] border-b border-brand-line">
                        <span className="text-[12px] font-semibold tracking-[0.10em] uppercase text-brand-muted">Datos de contacto</span>
                      </div>
                      <dl className="px-5">
                        <SummaryRow label="Nombre"           value={data.nombre} />
                        <SummaryRow label="NIF / NIE"        value={data.nifPersona} />
                        <SummaryRow label="Email"            value={data.email} />
                        <SummaryRow label="Teléfono"         value={data.telefono} />
                        <SummaryRow label="Fecha nacimiento" value={data.fechaNacimiento} />
                        <SummaryRow label="Ciudad"           value={data.ciudadPersona} />
                        <SummaryRow label="CP"               value={data.cpPersona} />
                      </dl>
                    </div>
                  </div>
                </div>
              )}

              {/* ── Enviado ── */}
              {submitted && (
                <div className="flex flex-col items-center text-center py-[40px]">
                  <span className="w-[72px] h-[72px] rounded-full bg-brand-accent-tint text-brand-accent-deep grid place-items-center mb-[22px]">
                    <Check className="w-9 h-9" strokeWidth={2.4} />
                  </span>
                  <h4 className="font-serif font-medium text-[30px] leading-[1.08] tracking-[-0.015em] text-brand-ink">
                    ¡Solicitud recibida!
                  </h4>
                  <p className="text-[16px] leading-[1.6] text-brand-ink-soft mt-3 max-w-[44ch]">
                    Gracias. Un mediador de Torres Jack revisará tu solicitud y te enviará una oferta personalizada en menos de 24&nbsp;h laborables.
                  </p>
                </div>
              )}

            </div>

            {/* ── Acciones ── */}
            {!submitted && (
              <div className="flex flex-col gap-3 mt-[30px] pt-6 border-t border-brand-line">
                {submitError && (
                  <p className="text-[13.5px] text-red-600 text-right leading-[1.4]">{submitError}</p>
                )}
                <div className="flex justify-between items-center gap-[14px]">
                  {step > 0 ? (
                    <button type="button" onClick={() => setStep(s => s - 1)}
                      className="inline-flex items-center gap-[7px] text-[15px] font-semibold text-brand-muted hover:text-brand-ink transition-colors px-2 py-2">
                      <ArrowLeft className="w-4 h-4" strokeWidth={2.2} />
                      Atrás
                    </button>
                  ) : <span />}

                  {step < 3 ? (
                    <div className="group">
                      <button type="button" onClick={() => setStep(s => s + 1)}
                        className="inline-flex items-center gap-2.5 py-[14px] px-[28px] rounded-full font-semibold text-[16px] leading-none text-white bg-brand-accent shadow-[0_6px_18px_oklch(0.50_0.135_256/0.34)] transition-[transform,background-color,box-shadow] duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bg-brand-accent-deep group-hover:-translate-y-0.5 group-hover:shadow-[0_10px_26px_oklch(0.50_0.135_256/0.42)]">
                        Continuar
                        <ArrowRight className="w-[17px] h-[17px] shrink-0" strokeWidth={2.2} />
                      </button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={!data.consentimiento || isSubmitting}
                      className="inline-flex items-center gap-2.5 py-[14px] px-[28px] rounded-full font-semibold text-[16px] leading-none text-white bg-brand-accent shadow-[0_6px_18px_oklch(0.50_0.135_256/0.34)] transition-[transform,background-color,box-shadow,opacity] duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-brand-accent-deep hover:shadow-[0_10px_26px_oklch(0.50_0.135_256/0.42)] disabled:opacity-40 disabled:cursor-not-allowed disabled:!translate-y-0 disabled:!shadow-[0_6px_18px_oklch(0.50_0.135_256/0.34)]"
                    >
                      {isSubmitting ? 'Enviando…' : 'Enviar solicitud'}
                      {!isSubmitting && <ArrowRight className="w-[17px] h-[17px] shrink-0" strokeWidth={2.2} />}
                    </button>
                  )}
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  )
}
