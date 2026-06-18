import { z } from 'zod'

export const contactoSchema = z.object({
  nombre:         z.string().min(2, 'El nombre es obligatorio'),
  email:          z.string().email('Email inválido'),
  telefono:       z.string().optional(),
  mensaje:        z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
  consentimiento: z.literal(true),
})

export type ContactoData = z.infer<typeof contactoSchema>
