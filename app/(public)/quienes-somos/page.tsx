import type { Metadata } from 'next'
import Image from 'next/image'
import { Clock, GraduationCap, Mail, Phone, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Quiénes somos | Torres Jack Correduría de Seguros',
  description: 'Conoce a Torres Jack, correduría de seguros independiente en A Coruña con más de 40 años de experiencia. Mediadores titulados y colegiados.',
}

const ABOUT_PTS = [
  {
    Icon: Shield,
    title: 'Independientes de verdad',
    desc: 'Comparamos entre múltiples aseguradoras de prestigio. Trabajamos para ti, no para una compañía.',
  },
  {
    Icon: GraduationCap,
    title: 'Titulados y colegiados',
    desc: 'Asesoramiento profesional regulado. Sabes que quien te atiende tiene la formación exigida por ley.',
  },
  {
    Icon: Clock,
    title: 'Sin gastos de gestión añadidos',
    desc: 'El importe que ves en tu oferta es lo que pagas. La aseguradora cobra el recibo, nosotros no añadimos extras.',
  },
]

const CONTACT_METHODS = [
  { Icon: Mail,  label: 'Email',      value: 'info@torresjack.com',            href: 'mailto:info@torresjack.com' },
  { Icon: Phone, label: 'Teléfono',   value: '981 12 14 08',                   href: 'tel:+34981121408' },
  { Icon: Clock, label: 'Asistencia', value: 'Teléfonos 24 h para siniestros', href: undefined },
]

export default function QuienesSomosPage() {
  return (
    <>
    <section id="nosotros" className="py-[clamp(72px,9vw,132px)]">
      <div className="w-full max-w-[1200px] mx-auto px-7">
        <div className="grid grid-cols-1 min-[860px]:grid-cols-[0.92fr_1.08fr] gap-[clamp(36px,5vw,72px)] items-center">

          <div className="relative aspect-[5/6] rounded-[30px] overflow-hidden shadow-[0_4px_14px_oklch(0.3_0.02_60/0.08),0_18px_40px_oklch(0.3_0.02_60/0.07)] max-[860px]:max-w-[420px]">
            <Image
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=80"
              alt="El equipo de Torres Jack, mediadores de seguros en A Coruña"
              fill
              className="object-cover"
              sizes="(min-width: 860px) 40vw, min(420px, 100vw)"
            />
          </div>

          {/* Texto */}
          <div>
            <span className="inline-flex items-center gap-[10px] font-sans text-[13px] font-semibold tracking-[0.16em] uppercase text-brand-accent">
              <span className="inline-block w-[26px] h-[1.5px] bg-brand-accent shrink-0" aria-hidden />
              Quiénes somos
            </span>
            <h2 className="font-serif font-medium text-[clamp(30px,4vw,50px)] leading-[1.08] tracking-[-0.015em] text-brand-ink mt-4">
              Una correduría con nombre y apellidos.
            </h2>
            <p className="text-[18px] leading-[1.6] text-brand-ink-soft mt-[18px] max-w-[54ch]">
              No somos un comparador anónimo ni el teléfono de una aseguradora. Somos mediadores titulados y colegiados que estudian tu caso, te explican la letra pequeña y dan la cara cuando ocurre un siniestro.
            </p>

            <div className="grid gap-[22px] mt-[34px]">
              {ABOUT_PTS.map(({ Icon, title, desc }) => (
                <div key={title} className="flex gap-4">
                  <span className="w-11 h-11 rounded-[12px] bg-brand-accent-tint text-brand-accent-deep grid place-items-center shrink-0">
                    <Icon className="w-[22px] h-[22px]" strokeWidth={2} />
                  </span>
                  <div>
                    <b className="block text-[18px] font-semibold text-brand-ink">{title}</b>
                    <p className="text-[15.5px] leading-[1.6] text-brand-ink-soft mt-1">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="group inline-block mt-[30px]">
              <a
                href="#contacto"
                className="inline-flex items-center gap-2.5 py-[14px] px-[26px] rounded-full font-semibold text-[16px] leading-none bg-brand-ink text-brand-paper border border-transparent transition-[transform,background-color] duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bg-black group-hover:-translate-y-0.5"
              >
                Hablar con un mediador
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>

    {/* ── Contacto ──────────────────────────────────── */}
    <section id="contacto" className="bg-brand-dark py-[clamp(72px,9vw,132px)]">
      <div className="w-full max-w-[1200px] mx-auto px-7">
        <div className="grid grid-cols-1 min-[860px]:grid-cols-2 gap-[clamp(36px,5vw,72px)] items-center">

          {/* Izquierda: encabezado + métodos de contacto */}
          <div>
            <span className="inline-flex items-center gap-[10px] font-sans text-[13px] font-semibold tracking-[0.16em] uppercase text-[oklch(0.78_0.10_45)]">
              <span className="inline-block w-[26px] h-[1.5px] bg-[oklch(0.78_0.10_45)] shrink-0" aria-hidden />
              Hablemos
            </span>
            <h2 className="font-serif font-medium text-[clamp(32px,4.4vw,54px)] leading-[1.08] tracking-[-0.015em] text-brand-on-dark mt-4">
              ¿Te ayudamos a decidir?
            </h2>
            <p className="text-[19px] leading-[1.6] text-brand-on-dark-soft mt-[22px] max-w-[44ch]">
              Escríbenos o llámanos. Te atenderá una persona que conoce tu caso, sin centralitas ni respuestas automáticas.
            </p>

            <div className="mt-[38px]">
              {CONTACT_METHODS.map(({ Icon, label, value, href }, i) => (
                <div
                  key={label}
                  className={[
                    'flex gap-4 items-center py-4 border-b border-brand-dark-line',
                    i === 0 ? 'border-t border-brand-dark-line' : '',
                  ].join(' ')}
                >
                  <span className="w-[46px] h-[46px] rounded-[12px] bg-[oklch(1_0_0/0.05)] text-[oklch(0.82_0.10_45)] grid place-items-center shrink-0">
                    <Icon className="w-[22px] h-[22px]" strokeWidth={2} />
                  </span>
                  <div>
                    <div className="text-[13px] font-semibold tracking-[0.05em] uppercase text-brand-on-dark-soft">
                      {label}
                    </div>
                    {href ? (
                      <a href={href} className="font-serif text-[19px] font-semibold text-brand-on-dark leading-tight hover:text-white transition-colors">
                        {value}
                      </a>
                    ) : (
                      <span className="font-serif text-[19px] font-semibold text-brand-on-dark leading-tight">
                        {value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Derecha: tarjeta con formulario */}
          <div className="bg-brand-surface rounded-[30px] p-[clamp(28px,4vw,40px)] shadow-[0_12px_30px_oklch(0.3_0.02_60/0.13),0_40px_80px_oklch(0.3_0.02_60/0.12)] text-brand-ink">
            <h3 className="font-serif font-medium text-[25px] leading-[1.08] tracking-[-0.015em] text-brand-ink">
              Escríbenos
            </h3>
            <p className="text-[15px] leading-[1.6] text-brand-ink-soft mt-2">
              Cuéntanos qué necesitas y te respondemos en menos de 24&nbsp;h laborables.
            </p>

            <form className="mt-[22px]" noValidate>
              {/* Nombre */}
              <div>
                <label className="block text-[14px] font-semibold text-brand-ink mb-[7px]">
                  Nombre <span className="text-brand-accent">*</span>
                </label>
                <input
                  type="text"
                  name="nombre"
                  placeholder="Tu nombre"
                  autoComplete="name"
                  className="w-full py-[13px] px-[15px] text-[16px] border-[1.5px] border-brand-line rounded-lg bg-brand-surface text-brand-ink placeholder:text-brand-muted focus:outline-none focus:border-brand-accent focus:shadow-[0_0_0_4px_oklch(0.948_0.030_250)] transition-[border-color,box-shadow] duration-200"
                />
              </div>

              {/* Email + Teléfono */}
              <div className="grid grid-cols-1 min-[480px]:grid-cols-2 gap-[14px] mt-[18px]">
                <div>
                  <label className="block text-[14px] font-semibold text-brand-ink mb-[7px]">
                    Email <span className="text-brand-accent">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="tucorreo@email.com"
                    autoComplete="email"
                    className="w-full py-[13px] px-[15px] text-[16px] border-[1.5px] border-brand-line rounded-lg bg-brand-surface text-brand-ink placeholder:text-brand-muted focus:outline-none focus:border-brand-accent focus:shadow-[0_0_0_4px_oklch(0.948_0.030_250)] transition-[border-color,box-shadow] duration-200"
                  />
                </div>
                <div>
                  <label className="block text-[14px] font-semibold text-brand-ink mb-[7px]">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    placeholder="600 00 00 00"
                    autoComplete="tel"
                    className="w-full py-[13px] px-[15px] text-[16px] border-[1.5px] border-brand-line rounded-lg bg-brand-surface text-brand-ink placeholder:text-brand-muted focus:outline-none focus:border-brand-accent focus:shadow-[0_0_0_4px_oklch(0.948_0.030_250)] transition-[border-color,box-shadow] duration-200"
                  />
                </div>
              </div>

              {/* Mensaje */}
              <div className="mt-[18px]">
                <label className="block text-[14px] font-semibold text-brand-ink mb-[7px]">
                  ¿En qué te ayudamos? <span className="text-brand-accent">*</span>
                </label>
                <textarea
                  name="mensaje"
                  placeholder="Cuéntanos brevemente tu consulta…"
                  rows={4}
                  className="w-full py-[13px] px-[15px] text-[16px] border-[1.5px] border-brand-line rounded-lg bg-brand-surface text-brand-ink placeholder:text-brand-muted resize-y min-h-[96px] focus:outline-none focus:border-brand-accent focus:shadow-[0_0_0_4px_oklch(0.948_0.030_250)] transition-[border-color,box-shadow] duration-200"
                />
              </div>

              {/* Consentimiento */}
              <div className="flex gap-[11px] items-start mt-4 text-[13px] text-brand-muted">
                <input
                  type="checkbox"
                  id="cconsent"
                  name="consent"
                  className="mt-[3px] w-4 h-4 shrink-0 accent-[oklch(0.50_0.135_256)]"
                />
                <label htmlFor="cconsent" className="font-medium leading-[1.5]">
                  Acepto el aviso legal y la política de privacidad.
                </label>
              </div>

              {/* Enviar */}
              <div className="group mt-5">
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2.5 w-full py-[17px] px-[32px] rounded-full font-semibold text-[17px] leading-none text-white bg-brand-accent shadow-[0_6px_18px_oklch(0.50_0.135_256/0.34)] transition-[transform,background-color,box-shadow] duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bg-brand-accent-deep group-hover:-translate-y-0.5 group-hover:shadow-[0_10px_26px_oklch(0.50_0.135_256/0.42)]"
                >
                  Enviar mensaje
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
    </>
  )
}
