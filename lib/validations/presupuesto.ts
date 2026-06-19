import { z } from 'zod'

// ─── Opciones copiadas literalmente del componente presupuesto/page.tsx ───────

const ACTIVIDADES_ARTES = [
  'Teatro', 'Danza', 'Clown', 'Títeres', 'Cabaret',
  'Circo', 'Variedades', 'Teatro musical', 'Otros',
] as const

const FACTURACION_ARTES = [
  'Hasta 400.000 € — tarifa plana',
  'Más de 400.000 € — póliza regularizable',
  'Grupo aficionado / asociación cultural',
] as const

const OPCIONES_SUMA = ['300.000 €', '600.000 €', '1.000.000 €'] as const

const GARANTIAS_AUTO = [
  'Solo terceros',
  'Terceros ampliado',
  'Todo riesgo con franquicia',
  'Todo riesgo sin franquicia',
  'A determinar con el mediador',
] as const

// ─── Paso 3: datos personales (igual para los seis ramos) ────────────────────
// Nota: el archivo adjunto se valida por separado en el handler (tamaño, tipo).

const paso3 = z.object({
  nombre:          z.string().min(1, 'Campo obligatorio'),
  nifPersona:      z.string().min(1, 'Campo obligatorio'),
  email:           z.string().email('Email inválido'),
  telefono:        z.string().min(1, 'Campo obligatorio'),
  fechaNacimiento: z.string().optional(),
  ciudadPersona:   z.string().min(1, 'Campo obligatorio'),
  cpPersona:       z.string().min(1, 'Campo obligatorio'),
  consentimiento:  z.literal(true),
})

// ─── Paso 2: específico por ramo ─────────────────────────────────────────────

const artesBase = z.object({
  ramo:          z.literal('artes'),
  razonSocial:   z.string().min(1, 'Campo obligatorio'),
  nifCif:        z.string().min(1, 'Campo obligatorio'),
  fechaInicio:   z.string().min(1, 'Campo obligatorio'),
  actividad:     z.enum(ACTIVIDADES_ARTES),
  facturacion:   z.enum(FACTURACION_ARTES),
  maxEmpleados:  z.string().min(1, 'Campo obligatorio'),
  opcion:        z.enum(OPCIONES_SUMA),
  observaciones: z.string().optional(),
})

const hogarBase = z.object({
  ramo:              z.literal('hogar'),
  fechaInicio:       z.string().min(1, 'Campo obligatorio'),
  direccion:         z.string().min(1, 'Campo obligatorio'),
  ciudadHogar:       z.string().min(1, 'Campo obligatorio'),
  cpHogar:           z.string().min(1, 'Campo obligatorio'),
  regimen:           z.enum(['propietario', 'inquilino'] as const),
  capitalContinente: z.string().min(1, 'Campo obligatorio'),
  capitalContenido:  z.string().min(1, 'Campo obligatorio'),
  capitalJoyas:      z.string().optional(),
  alarma:            z.enum(['si', 'no'] as const),
  observaciones:     z.string().optional(),
})

const autoBase = z.object({
  ramo:              z.literal('auto'),
  fechaInicio:       z.string().min(1, 'Campo obligatorio'),
  fechaNacConductor: z.string().min(1, 'Campo obligatorio'),
  fechaCarnet:       z.string().min(1, 'Campo obligatorio'),
  marcaModelo:       z.string().min(1, 'Campo obligatorio'),
  matricula:         z.string().min(1, 'Campo obligatorio'),
  mismoTomador:      z.enum(['si', 'no'] as const),
  // Condicional: obligatorio cuando mismoTomador === 'no'; se valida en el handler.
  datosPropietario:  z.string().optional(),
  companiaActual:    z.string().min(1, 'Campo obligatorio'),
  numPoliza:         z.string().min(1, 'Campo obligatorio'),
  garantias:         z.enum(GARANTIAS_AUTO),
  observaciones:     z.string().optional(),
})

const comunidadBase = z.object({
  ramo:                z.literal('comunidad'),
  fechaInicio:         z.string().min(1, 'Campo obligatorio'),
  direccionComunidad:  z.string().min(1, 'Campo obligatorio'),
  ciudadComunidad:     z.string().min(1, 'Campo obligatorio'),
  cpComunidad:         z.string().min(1, 'Campo obligatorio'),
  observaciones:       z.string().optional(),
})

// Flota y Empresa no tienen fechaInicio ni observaciones (confirmado en el componente).

const flotaBase = z.object({
  ramo:          z.literal('flota'),
  nombreEmpresa: z.string().min(1, 'Campo obligatorio'),
  mensajeLibre:  z.string().min(1, 'Campo obligatorio'),
})

const empresaBase = z.object({
  ramo:             z.literal('empresa'),
  nombreEmpresa:    z.string().min(1, 'Campo obligatorio'),
  actividadEmpresa: z.string().min(1, 'Campo obligatorio'),
  mensajeLibre:     z.string().min(1, 'Campo obligatorio'),
})

// ─── Schema completo (paso 2 + paso 3), discriminado por ramo ────────────────

export const presupuestoSchema = z.discriminatedUnion('ramo', [
  artesBase.merge(paso3),
  hogarBase.merge(paso3),
  autoBase.merge(paso3),
  comunidadBase.merge(paso3),
  flotaBase.merge(paso3),
  empresaBase.merge(paso3),
])

export type PresupuestoData = z.infer<typeof presupuestoSchema>

// Exportado por separado para validación paso a paso en el cliente (futuro).
export { paso3 as paso3Schema }
export type Paso3Data = z.infer<typeof paso3>
