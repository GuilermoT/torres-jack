import type { Metadata } from 'next'
import Image from 'next/image'
import { ArrowDown, ArrowRight } from 'lucide-react'
import FadeInOnScroll from '@/components/ui/FadeInOnScroll'

export const metadata: Metadata = {
  title: 'Seguros para Particulares | Torres Jack',
  description: 'Seguros de hogar y auto para particulares. Asesoramiento personalizado en A Coruña.',
}

const COMO_TRABAJAMOS = [
  'Comparamos entre varias aseguradoras para encontrar tu mejor opción',
  'Un único mediador que conoce tu caso, no un call center',
  'Te avisamos antes de la renovación, sin sorpresas en el recibo',
  'Te acompañamos si hay un siniestro, de principio a fin',
]

const POR_QUE_TORRES = [
  'Más de 40 años de experiencia en correduría independiente',
  'Mediadores titulados y colegiados',
  'Sin gastos de gestión añadidos a lo que cobra la aseguradora',
]

const TIPOS = [
  'Hogar', 'Vida', 'Salud', 'Auto y moto',
]

export default function ParticularsPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="pt-[clamp(40px,5vw,64px)] pb-[clamp(48px,6vw,80px)] border-b border-brand-line">
        <div className="w-full max-w-[1200px] mx-auto px-7">
          <FadeInOnScroll>
            <span className="inline-flex items-center gap-[10px] font-sans text-[13px] font-semibold tracking-[0.16em] uppercase text-brand-accent mb-5">
              <span className="inline-block w-[26px] h-[1.5px] bg-brand-accent shrink-0" aria-hidden />
              Seguros para particulares
            </span>

            <h1 className="font-serif font-medium text-[clamp(38px,5.2vw,70px)] leading-[1.04] tracking-[-0.025em] text-brand-ink max-w-[22ch]">
              Seguros pensados para tu día a día.
            </h1>

            <p className="text-[clamp(17px,1.45vw,20px)] leading-[1.65] text-brand-ink-soft mt-[22px] max-w-[54ch]">
              Hogar, vida, salud y auto. Protegemos lo que más te importa con coberturas claras y un mediador que conoces por su nombre, no un número de póliza.
            </p>

            <div className="group inline-block mt-[32px]">
              <a
                href="#mas-info"
                className="relative overflow-hidden [isolation:isolate] inline-flex items-center gap-2.5 py-[16px] px-[32px] rounded-none font-semibold text-[17px] leading-none text-brand-ink bg-transparent border border-brand-line-strong whitespace-nowrap transition-[transform,color,border-color] duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:border-brand-line group-hover:-translate-y-0.5 before:content-[''] before:absolute before:inset-y-0 before:left-0 before:w-0 before:z-[-1] before:bg-brand-cream before:transition-[width] before:duration-[700ms] before:ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:before:w-full"
              >
                Saber más
                <ArrowDown className="w-[18px] h-[18px] shrink-0" strokeWidth={2.2} />
              </a>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* ── Foto ──────────────────────────────────────────────────────── */}
      <div className="relative w-full h-[clamp(320px,28vw,380px)] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80"
          alt="Vivienda familiar, seguro de hogar"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* ── Contenido principal ───────────────────────────────────────── */}
      <section id="mas-info" className="py-[clamp(72px,9vw,132px)]">
        <div className="w-full max-w-[1200px] mx-auto px-7">

          <div className="grid grid-cols-1 min-[960px]:grid-cols-2 gap-[clamp(40px,5vw,64px)] min-[960px]:gap-0 items-start">

            {/* Izquierda: cómo trabajamos + chips */}
            <FadeInOnScroll delay={0} className="min-[960px]:pr-[clamp(40px,5vw,64px)]">
              <h2 className="font-serif font-medium text-[23px] leading-[1.12] tracking-[-0.01em] text-brand-ink mb-5">
                Cómo trabajamos tu seguro
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
                Para cada etapa de tu vida
              </h3>
              <div className="flex flex-wrap gap-[8px]">
                {TIPOS.map((tipo) => (
                  <span
                    key={tipo}
                    className="text-[13.5px] font-medium text-brand-ink-soft border border-brand-line px-[13px] py-[6px] rounded-full"
                  >
                    {tipo}
                  </span>
                ))}
              </div>
            </FadeInOnScroll>

            {/* Derecha: por qué Torres Jack + CTA */}
            <FadeInOnScroll delay={0.15} className="min-[960px]:pl-[clamp(40px,5vw,64px)] min-[960px]:border-l min-[960px]:border-brand-line">
              <h3 className="font-serif font-medium text-[clamp(22px,2.2vw,27px)] leading-[1.12] tracking-[-0.01em] text-brand-ink mb-5">
                Por qué contratar con Torres Jack
              </h3>

              <ul className="flex flex-col gap-[16px]">
                {POR_QUE_TORRES.map((item) => (
                  <li key={item} className="flex items-start gap-[12px]">
                    <span className="mt-[9px] w-[5px] h-[5px] rounded-full bg-brand-accent shrink-0" aria-hidden />
                    <span className="text-[16px] leading-[1.55] text-brand-ink-soft">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-col gap-3">
                <div className="group">
                  <a
                    href="/presupuesto?ramo=hogar"
                    className="flex items-center justify-center gap-2.5 py-[16px] px-[32px] rounded-none font-semibold text-[16px] leading-none text-white group-hover:text-brand-ink [background-image:linear-gradient(to_right,transparent_50%,oklch(0.50_0.135_256)_50%)] [background-size:200%_100%] [background-position:100%_0%] group-hover:[background-position:0%_0%] border border-brand-accent w-full shadow-[0_6px_18px_oklch(0.50_0.135_256/0.34)] group-hover:shadow-none group-hover:-translate-y-0.5 [transition:background-position_700ms_ease,color_700ms_ease,box-shadow_700ms_ease,transform_250ms_ease]"
                  >
                    Presupuesto de hogar
                    <ArrowRight className="w-[17px] h-[17px] shrink-0" strokeWidth={2.2} />
                  </a>
                </div>
                <div className="group">
                  <a
                    href="/presupuesto?ramo=auto"
                    className="relative overflow-hidden [isolation:isolate] flex items-center justify-center gap-2.5 py-[16px] px-[32px] rounded-none font-semibold text-[16px] leading-none text-brand-ink bg-transparent border border-brand-line-strong w-full transition-[transform,border-color] duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:border-brand-line group-hover:-translate-y-0.5 before:content-[''] before:absolute before:inset-y-0 before:left-0 before:w-0 before:z-[-1] before:bg-brand-cream before:transition-[width] before:duration-[700ms] before:ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:before:w-full"
                  >
                    Presupuesto de auto y moto
                    <ArrowRight className="w-[17px] h-[17px] shrink-0" strokeWidth={2.2} />
                  </a>
                </div>
              </div>
            </FadeInOnScroll>

          </div>
        </div>
      </section>
    </>
  )
}
