import { z } from 'zod'

export const contactFormSchema = z.object({
  nombre: z.string().min(2, 'El nombre es obligatorio'),
  email: z.string().email('Email inválido'),
  telefono: z.string().optional(),
  mensaje: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
})

export type ContactFormValues = z.infer<typeof contactFormSchema>
