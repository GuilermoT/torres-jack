import type { Metadata } from 'next'
import Image from 'next/image'
import { ArrowRight, Check } from 'lucide-react'
import FadeInOnScroll from '@/components/ui/FadeInOnScroll'

export const metadata: Metadata = {
  title: 'Seguro de Artes Escénicas | Torres Jack',
  description: 'Seguro de responsabilidad civil para compañías de teatro, danza, circo y artes escénicas en Galicia.',
}

const COBERTURAS_RC = [
  { label: 'Responsabilidad civil de la actividad', desc: 'De la compañía, persona física o jurídica, en todo el territorio nacional.', nueva: false },
  { label: 'RC patronal',                            desc: 'Accidentes laborales de las personas empleadas de la compañía.',              nueva: false },
  { label: 'Daños a teatros y espacios',             desc: 'Incluidos los daños en operaciones de carga y descarga de material.',         nueva: false },
  { label: 'Daños a espectadores y terceros',        desc: 'Cobertura por incendio y explosión en locales de ensayo, almacenes y oficinas.', nueva: false },
  { label: 'Defensa jurídica y fianzas',             desc: 'Gastos de defensa y fianzas judiciales incluidos. Franquicia de 300 €.',  nueva: false },
  { label: 'Actividad formativa',                    desc: 'Clases, cursos o talleres organizados por la compañía. Contratación optativa.', nueva: true },
]

const ESPECTACULOS = [
  'Teatro', 'Danza', 'Circo', 'Títeres', 'Clown', 'Cabaret',
  'Variedades', 'Teatro musical', 'Teatro físico', 'Compañías aficionadas', 'Asociaciones culturales',
]

const OPCIONES_RC = [
  { opcion: 'A', suma: '300.000 €' },
  { opcion: 'B', suma: '600.000 €' },
  { opcion: 'D', suma: '1.000.000 €' },
]

export default function ArtesEscenicasPage() {
  return (
    <>
      {/* ── Hero de página interior ──────────────────────────────────── */}
      <section className="pt-[clamp(40px,5vw,64px)] pb-[clamp(48px,6vw,80px)] border-b border-brand-line">
        <div className="w-full max-w-[1200px] mx-auto px-7">

          <span className="inline-flex items-center gap-[10px] font-sans text-[13px] font-semibold tracking-[0.16em] uppercase text-brand-accent mb-5">
            <span className="inline-block w-[26px] h-[1.5px] bg-brand-accent shrink-0" aria-hidden />
            Seguros de artes escénicas
          </span>

          <FadeInOnScroll delay={0}>
            <h1 className="font-serif font-medium text-[clamp(38px,5.2vw,70px)] leading-[1.04] tracking-[-0.025em] text-brand-ink max-w-[20ch]">
              Seguros de artes escénicas, de quien conoce el oficio.
            </h1>
          </FadeInOnScroll>

          <FadeInOnScroll delay={0.2}>
            <p className="text-[clamp(17px,1.45vw,20px)] leading-[1.65] text-brand-ink-soft mt-[22px] max-w-[54ch]">
              Llevamos años asegurando a quienes hacen que la función no pare. Una póliza pensada para la realidad de las compañías: giras, montajes, ensayos, espacios prestados y público en la sala.
            </p>
          </FadeInOnScroll>

          <FadeInOnScroll delay={0.4}>
          <div className="group inline-block mt-[32px]">
            <a
              href="#coberturas"
              className="inline-flex items-center gap-2.5 py-[16px] px-[32px] rounded-full font-semibold text-[17px] leading-none text-white bg-brand-accent border border-transparent shadow-[0_6px_18px_oklch(0.50_0.135_256/0.34)] transition-[transform,background-color,box-shadow] duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bg-brand-accent-deep group-hover:-translate-y-0.5 group-hover:shadow-[0_10px_26px_oklch(0.50_0.135_256/0.42)]"
            >
              Ver coberturas
              <ArrowRight className="w-[18px] h-[18px] shrink-0" strokeWidth={2.2} />
            </a>
          </div>
          </FadeInOnScroll>

        </div>
      </section>

      {/* ── Foto ──────────────────────────────────────────────────────── */}
      <div className="relative w-full h-[clamp(320px,28vw,380px)] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1595769816263-9b910be24d5f?q=80&w=1479&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Compañía de teatro en escena"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* ── Contenido: coberturas + opciones ──────────────────────────── */}
      <section id="coberturas" className="bg-brand-dark py-[clamp(72px,9vw,132px)]">
        <div className="w-full max-w-[1200px] mx-auto px-7">

          <div className="grid grid-cols-1 min-[960px]:grid-cols-2 gap-[clamp(40px,5vw,72px)] items-start">

            {/* Izquierda: lista de coberturas + chips */}
            <div>
              <FadeInOnScroll delay={0}>
                <h2 className="font-serif font-medium text-[23px] leading-[1.12] tracking-[-0.01em] text-brand-on-dark mb-5">
                  Qué cubre tu RC de artes escénicas
                </h2>
                <ul className="flex flex-col gap-[18px]">
                  {COBERTURAS_RC.map(({ label, desc, nueva }) => (
                    <li key={label} className="flex items-start gap-[13px]">
                      <span className="mt-[3px] w-[22px] h-[22px] rounded-full bg-brand-accent/20 grid place-items-center shrink-0">
                        <Check className="w-[13px] h-[13px] text-brand-accent" strokeWidth={2.5} />
                      </span>
                      <div>
                        <b className="block font-semibold text-[15px] leading-[1.35] text-brand-on-dark">
                          {label}
                          {nueva && (
                            <span className="font-semibold text-brand-warm"> · nueva cobertura</span>
                          )}
                        </b>
                        <span className="block text-[13.5px] leading-[1.55] text-brand-on-dark-soft mt-[3px]">{desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </FadeInOnScroll>

              <FadeInOnScroll delay={0.1}>
                <h3 className="font-serif font-medium text-[21px] leading-[1.12] tracking-[-0.01em] text-brand-on-dark mt-[34px] mb-[14px]">
                  Para todo tipo de espectáculo
                </h3>
                <div className="flex flex-wrap gap-[8px]">
                  {ESPECTACULOS.map((esp) => (
                    <span
                      key={esp}
                      className="text-[13.5px] font-medium text-brand-on-dark border border-brand-dark-line px-[13px] py-[6px] rounded-full"
                    >
                      {esp}
                    </span>
                  ))}
                </div>
              </FadeInOnScroll>
            </div>

            {/* Derecha: card de opciones */}
            <div className="bg-brand-dark-2 rounded-[24px] p-[clamp(28px,3.5vw,44px)] border border-brand-dark-line">
              <FadeInOnScroll delay={0}>
                <h3 className="font-serif font-medium text-[clamp(22px,2.2vw,27px)] leading-[1.12] tracking-[-0.01em] text-brand-on-dark mb-2">
                  Opciones de contratación
                </h3>
                <p className="text-[14px] leading-[1.6] text-brand-on-dark-soft mb-6">
                  Tarifa plana para compañías que facturan hasta 400.000&nbsp;€/año. Elige tu suma asegurada por siniestro.
                </p>
              </FadeInOnScroll>

              <div className="flex flex-col divide-y divide-brand-dark-line">
                {OPCIONES_RC.map(({ opcion, suma }, index) => (
                  <FadeInOnScroll
                    key={opcion}
                    delay={index * 0.1}
                    className="flex items-center justify-between py-[15px] first:pt-0 last:pb-0"
                  >
                    <div>
                      <span className="block text-[14.5px] font-semibold text-brand-on-dark leading-none">
                        Opción {opcion}
                      </span>
                      <span className="block text-[12px] text-brand-on-dark-soft mt-[4px]">
                        Suma asegurada por siniestro
                      </span>
                    </div>
                    <span className="font-newsreader text-[clamp(20px,2.1vw,26px)] font-semibold text-brand-warm tracking-[-0.02em] leading-none">
                      {suma}
                    </span>
                  </FadeInOnScroll>
                ))}
              </div>

              <FadeInOnScroll delay={0.15}>
                <p className="text-[13px] leading-[1.6] text-brand-on-dark-soft mt-6 mb-6">
                  También aseguramos accidentes de actores y actrices, RC de profesores de artes escénicas y RC de actores y artistas a título individual.
                </p>

                <div className="group">
                  <a
                    href="/presupuesto?ramo=artes"
                    className="flex items-center justify-center gap-2.5 py-[16px] px-[32px] rounded-full font-semibold text-[16px] leading-none text-white bg-brand-accent border border-transparent w-full shadow-[0_6px_18px_oklch(0.50_0.135_256/0.34)] transition-[transform,background-color,box-shadow] duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bg-brand-accent-deep group-hover:-translate-y-0.5 group-hover:shadow-[0_10px_26px_oklch(0.50_0.135_256/0.42)]"
                  >
                    Pide tu presupuesto sin compromiso
                    <ArrowRight className="w-[17px] h-[17px] shrink-0" strokeWidth={2.2} />
                  </a>
                </div>
              </FadeInOnScroll>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
