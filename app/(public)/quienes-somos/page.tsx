import type { Metadata } from 'next'
import Image from 'next/image'
import { Clock, GraduationCap, Mail, Phone, Shield } from 'lucide-react'
import ContactoForm from '@/components/forms/ContactoForm'
import FadeInOnScroll from '@/components/ui/FadeInOnScroll'

export const metadata: Metadata = {
  title: 'Quiénes Somos | Torres Jack',
  description: 'Conoce a Torres Jack, correduría de seguros independiente con más de 40 años de experiencia en A Coruña.',
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
    <section id="nosotros" className="w-full overflow-hidden">
      <div className="flex flex-col min-[860px]:flex-row">

        {/* Foto full-bleed — columna izquierda */}
        <FadeInOnScroll delay={0} className="relative w-full min-[860px]:w-1/2 h-[280px] min-[860px]:h-auto min-[860px]:min-h-[600px]">
          <Image
            src="https://images.unsplash.com/photo-1623177623378-f6aa5fd70ba7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="El equipo de Torres Jack, mediadores de seguros en A Coruña"
            fill
            className="object-cover"
            sizes="(min-width: 860px) 50vw, 100vw"
          />
        </FadeInOnScroll>

        {/* Texto — columna derecha */}
        <FadeInOnScroll delay={0.1} className="w-full min-[860px]:w-1/2 bg-brand-paper-alt">
          <div className="h-full flex flex-col justify-center px-[clamp(32px,6vw,80px)] py-[clamp(56px,8vw,96px)]">
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
        </FadeInOnScroll>

      </div>
    </section>

    {/* ── Contacto ──────────────────────────────────── */}
    <section id="contacto" className="bg-brand-dark py-[clamp(72px,9vw,132px)]">
      <div className="w-full max-w-[1200px] mx-auto px-7">
        <div className="grid grid-cols-1 min-[860px]:grid-cols-2 gap-[clamp(36px,5vw,72px)] items-center">

          {/* Izquierda: encabezado + métodos de contacto */}
          <FadeInOnScroll delay={0}>
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
          </FadeInOnScroll>

          {/* Derecha: tarjeta con formulario */}
          <FadeInOnScroll delay={0.1} className="bg-brand-surface rounded-[30px] p-[clamp(28px,4vw,40px)] shadow-[0_12px_30px_oklch(0.3_0.02_60/0.13),0_40px_80px_oklch(0.3_0.02_60/0.12)] text-brand-ink">
            <h3 className="font-serif font-medium text-[25px] leading-[1.08] tracking-[-0.015em] text-brand-ink">
              Escríbenos
            </h3>
            <p className="text-[15px] leading-[1.6] text-brand-ink-soft mt-2">
              Cuéntanos qué necesitas y te respondemos en menos de 24&nbsp;h laborables.
            </p>
            <div className="mt-[22px]">
              <ContactoForm />
            </div>
          </FadeInOnScroll>

        </div>
      </div>
    </section>
    </>
  )
}
