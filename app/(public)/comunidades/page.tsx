import type { Metadata } from 'next'
import Image from 'next/image'
import { ArrowDown, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Seguros de comunidades en Galicia | Torres Jack Correduría de Seguros',
  description: 'Seguros para comunidades de propietarios en Galicia. Gestión de siniestros, zonas comunes y responsabilidad civil del edificio. Pide presupuesto sin compromiso.',
}

const COMO_TRABAJAMOS = [
  'Trato directo con el presidente o el administrador de fincas',
  'Gestión completa de siniestros en zonas comunes',
  'Revisión de la póliza actual para detectar coberturas duplicadas o que falten',
  'Acompañamiento en juntas si la comunidad necesita explicaciones',
]

const POR_QUE_TORRES = [
  'Más de 40 años de experiencia en correduría independiente',
  'Comparamos entre varias aseguradoras según el edificio',
  'Atención directa, sin esperas ni gestores que cambian cada vez',
]

const TIPOS_COMUNIDAD = [
  'Edificios residenciales',
  'Urbanizaciones',
  'Garajes y trasteros',
  'Locales en comunidad',
  'Comunidades con piscina o zonas deportivas',
]

export default function ComunidadesPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="pt-[clamp(40px,5vw,64px)] pb-[clamp(48px,6vw,80px)] border-b border-brand-line">
        <div className="w-full max-w-[1200px] mx-auto px-7">
          <span className="inline-flex items-center gap-[10px] font-sans text-[13px] font-semibold tracking-[0.16em] uppercase text-brand-accent mb-5">
            <span className="inline-block w-[26px] h-[1.5px] bg-brand-accent shrink-0" aria-hidden />
            Seguros de comunidades
          </span>

          <h1 className="font-serif font-medium text-[clamp(38px,5.2vw,70px)] leading-[1.04] tracking-[-0.025em] text-brand-ink max-w-[22ch]">
            El seguro de tu comunidad, sin sorpresas.
          </h1>

          <p className="text-[clamp(17px,1.45vw,20px)] leading-[1.65] text-brand-ink-soft mt-[22px] max-w-[54ch]">
            Zonas comunes, fachada, instalaciones y responsabilidad civil del edificio. Ayudamos a presidentes y administradores de fincas a tener todo en orden, con alguien que responde cuando hay un problema real.
          </p>

          <div className="group inline-block mt-[32px]">
            <a
              href="#mas-info"
              className="inline-flex items-center gap-2.5 py-[16px] px-[32px] rounded-full font-semibold text-[17px] leading-none text-brand-ink bg-transparent border border-brand-line-strong whitespace-nowrap transition-[transform,color,border-color,background-color] duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bg-brand-cream group-hover:border-brand-line group-hover:-translate-y-0.5"
            >
              Saber más
              <ArrowDown className="w-[18px] h-[18px] shrink-0" strokeWidth={2.2} />
            </a>
          </div>
        </div>
      </section>

      {/* ── Foto ──────────────────────────────────────────────────────── */}
      <div className="w-full max-w-[1200px] mx-auto px-7 pt-[clamp(40px,5vw,64px)]">
        <div className="relative h-[clamp(320px,28vw,380px)] rounded-[20px] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80"
            alt="Edificio de comunidad de propietarios"
            fill
            className="object-cover object-center"
            sizes="(min-width: 1200px) 1136px, calc(100vw - 56px)"
          />
        </div>
      </div>

      {/* ── Contenido principal ───────────────────────────────────────── */}
      <section id="mas-info" className="py-[clamp(72px,9vw,132px)]">
        <div className="w-full max-w-[1200px] mx-auto px-7">

          <div className="grid grid-cols-1 min-[960px]:grid-cols-2 gap-[clamp(40px,5vw,64px)] min-[960px]:gap-0 items-start">

            {/* Izquierda: cómo trabajamos + chips */}
            <div className="min-[960px]:pr-[clamp(40px,5vw,64px)]">
              <h2 className="font-serif font-medium text-[23px] leading-[1.12] tracking-[-0.01em] text-brand-ink mb-5">
                Cómo trabajamos tu comunidad
              </h2>
              <ul className="flex flex-col gap-[16px]">
                {COMO_TRABAJAMOS.map((item) => (
                  <li key={item} className="flex items-start gap-[12px]">
                    <span className="mt-[9px] w-[5px] h-[5px] rounded-full bg-brand-accent shrink-0" aria-hidden />
                    <span className="text-[16px] leading-[1.55] text-brand-ink-soft">{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="font-serif font-medium text-[21px] leading-[1.12] tracking-[-0.01em] text-brand-ink mt-[40px] mb-[14px]">
                Para todo tipo de comunidad
              </h3>
              <div className="flex flex-wrap gap-[8px]">
                {TIPOS_COMUNIDAD.map((tipo) => (
                  <span
                    key={tipo}
                    className="text-[13.5px] font-medium text-brand-ink-soft border border-brand-line px-[13px] py-[6px] rounded-full"
                  >
                    {tipo}
                  </span>
                ))}
              </div>
            </div>

            {/* Derecha: por qué Torres Jack + CTA */}
            <div className="min-[960px]:pl-[clamp(40px,5vw,64px)] min-[960px]:border-l min-[960px]:border-brand-line">
              <h3 className="font-serif font-medium text-[clamp(22px,2.2vw,27px)] leading-[1.12] tracking-[-0.01em] text-brand-ink mb-5">
                Por qué contratar tu comunidad con Torres Jack
              </h3>

              <ul className="flex flex-col gap-[16px]">
                {POR_QUE_TORRES.map((item) => (
                  <li key={item} className="flex items-start gap-[12px]">
                    <span className="mt-[9px] w-[5px] h-[5px] rounded-full bg-brand-accent shrink-0" aria-hidden />
                    <span className="text-[16px] leading-[1.55] text-brand-ink-soft">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="group mt-10">
                <a
                  href="/presupuesto?ramo=comunidad"
                  className="flex items-center justify-center gap-2.5 py-[16px] px-[32px] rounded-full font-semibold text-[16px] leading-none text-white bg-brand-accent border border-transparent w-full shadow-[0_6px_18px_oklch(0.50_0.135_256/0.34)] transition-[transform,background-color,box-shadow] duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bg-brand-accent-deep group-hover:-translate-y-0.5 group-hover:shadow-[0_10px_26px_oklch(0.50_0.135_256/0.42)]"
                >
                  Pide tu presupuesto de comunidad sin compromiso
                  <ArrowRight className="w-[17px] h-[17px] shrink-0" strokeWidth={2.2} />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
