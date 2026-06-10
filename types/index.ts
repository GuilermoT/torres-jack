export type Poliza = {
  id: string
  token: string
  cliente_nombre: string
  cliente_email: string
  numero_poliza: string
  compania: string
  ramo: string
  fecha_inicio: string
  fecha_vencimiento: string
  prima: number
  estado: 'activa' | 'vencida' | 'cancelada'
  created_at: string
}

export type Mediador = {
  id: string
  email: string
  nombre: string
  role: 'admin' | 'mediador'
}

export type ContactoFormData = {
  nombre: string
  email: string
  telefono?: string
  mensaje: string
}
