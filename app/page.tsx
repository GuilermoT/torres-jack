import type { Metadata } from 'next'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import HeroSection from '@/components/ui/HeroSection'
import FadeInOnScroll from '@/components/ui/FadeInOnScroll'

export const metadata: Metadata = {
  title: 'Torres Jack | Correduría de Seguros en A Coruña',
  description: 'Correduría de seguros independiente en A Coruña. Artes escénicas, flotas, comunidades, particulares y empresas.',
}



const FAQ_ITEMS = [
  {
    q: '¿Tengo que renovar mi póliza cada año?',
    a: 'No es necesario. La mayor parte de las pólizas se renuevan automáticamente. Si quieres anularla, basta con que nos lo comuniques con un mes de antelación al vencimiento.',
  },
  {
    q: '¿Cobráis gastos de gestión?',
    a: 'No. El importe total que pagas es exactamente el que consta en nuestra oferta. El recibo lo cobra directamente la aseguradora en la cuenta bancaria que nos indiques; nosotros no añadimos ningún gasto adicional.',
  },
  {
    q: '¿Cuándo recibiré mi póliza?',
    a: 'Recibirás tu póliza en formato PDF por mail en pocas horas. Ese documento, junto con el recibo bancario, acredita que estás asegurado.',
  },
  {
    q: '¿La póliza de artes escénicas sirve para cualquier compañía?',
    a: 'Sí. Pueden contratarla sociedades limitadas, anónimas, personas físicas, grupos aficionados, asociaciones culturales y cooperativas.',
  },
  {
    q: '¿Por qué contratar con una correduría y no directamente?',
    a: 'Porque trabajamos para ti. Comparamos entre varias aseguradoras para buscar la mejor relación cobertura-precio, te explicamos las condiciones sin tecnicismos y te acompañamos en la gestión de siniestros. Y todo, sin que te cueste más que ir por tu cuenta.',
  },
]

const RAMOS = [
  {
    title: 'Artes escénicas',
    desc: 'Responsabilidad civil para compañías de teatro, danza y orquestas. Accidentes de artistas y técnicos.',
    img: 'https://images.unsplash.com/photo-1503095396549-807759245b35?w=800&q=80',
    imgAlt: 'Compañía de teatro en escena',
    big: false,
  },
  {
    title: 'Flotas',
    desc: 'Gestión de seguros de flotas de cualquier dimensión. Seguros de mercancías y responsabilidad civil.',
    img: 'https://images.unsplash.com/photo-1726776230760-ae81dc9d4e55?w=800&q=80',
    imgAlt: 'Vista aérea de camiones de flota en muelles de carga',
    big: false,
  },
  {
    title: 'Comunidades',
    desc: 'Seguros integrales para comunidades. Facilitamos el trabajo de administraciones de fincas.',
    img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
    imgAlt: 'Edificio residencial en A Coruña',
    big: false,
  },
  {
    title: 'Particulares',
    desc: 'Hogar, vida, salud y auto. Todo lo que necesitas para proteger tu día a día y el de tu familia.',
    img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
    imgAlt: 'Hogar familiar bien asegurado',
    big: true,
  },
  {
    title: 'Empresas',
    desc: 'Coberturas a medida para pymes y autónomos: multiriesgos, RC, D&O, ciberriesgos y más.',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    imgAlt: 'Oficina moderna de empresa en A Coruña',
    big: true,
  },
]

export default function HomePage() {
  return (
    <>
    {/* ── Hero ─────────────────────────────────────────────── */}
    <HeroSection />

    {/* ── Aseguradoras ──────────────────────────────────── */}
    <div className="border-y border-brand-line bg-brand-paper-alt">
      <div className="w-full max-w-[1200px] mx-auto px-7 flex flex-wrap items-center justify-center gap-[30px] py-[22px]">
        <span className="text-[13px] font-semibold tracking-[0.1em] uppercase text-brand-muted whitespace-nowrap text-center">
          Solo operamos con aseguradoras de máximo prestigio y solvencia
        </span>
        
      </div>
    </div>

    {/* ── Ramos ──────────────────────────────────── */}
    <section id="ramos" className="py-[clamp(72px,9vw,132px)]">
      <div className="w-full max-w-[1200px] mx-auto px-7">

        <FadeInOnScroll>
          <span className="inline-flex items-center gap-[10px] font-sans text-[13px] font-semibold tracking-[0.16em] uppercase text-brand-accent">
            <span className="inline-block w-[26px] h-[1.5px] bg-brand-accent shrink-0" aria-hidden />
            Lo que aseguramos
          </span>
          <h2 className="font-serif font-medium text-[clamp(32px,4.4vw,56px)] leading-[1.08] tracking-[-0.015em] text-brand-ink mt-[18px]">
            Cobertura para cada etapa de tu vida y tu empresa.
          </h2>
        </FadeInOnScroll>

        <div className="grid grid-cols-1 min-[768px]:grid-cols-6 gap-5 mt-14">
          {RAMOS.map(({ title, desc, img, imgAlt, big }, index) => (
            <FadeInOnScroll
              key={title}
              className={['group', big ? 'min-[768px]:col-span-3' : 'min-[768px]:col-span-2'].join(' ')}
              delay={index * 0.1}
            >
              <a
                href="/presupuesto"
                className={[
                  'relative overflow-hidden rounded-[20px] flex flex-col justify-end',
                  big
                    ? 'min-h-[300px] min-[768px]:min-h-[400px]'
                    : 'min-h-[270px]',
                  'shadow-[0_1px_2px_oklch(0.3_0.02_60/0.06),0_2px_8px_oklch(0.3_0.02_60/0.05)]',
                  'transition-[transform,box-shadow] duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)]',
                  'group-hover:-translate-y-1 group-hover:shadow-[0_4px_14px_oklch(0.3_0.02_60/0.08),0_18px_40px_oklch(0.3_0.02_60/0.07)]',
                ].join(' ')}
              >
              <Image
                src={img}
                alt={imgAlt}
                fill
                className="object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                sizes="(min-width: 768px) 50vw, 100vw"
              />

              {/* Dark gradient overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'linear-gradient(180deg, oklch(0.22 0.04 256 / 0) 28%, oklch(0.16 0.045 256 / 0.88) 100%)' }}
              />

              {/* Card content */}
              <div className="relative px-[24px] pt-[22px] pb-[48px]">
                <h3
                  className={[
                    'font-serif font-medium leading-[1.08] tracking-[-0.015em] text-white',
                    big ? 'text-[30px]' : 'text-[25px]',
                  ].join(' ')}
                >
                  {title}
                </h3>
                <p
                  className={[
                    'leading-[1.6] text-white/80 mt-[6px]',
                    big ? 'text-[15.5px] max-w-[34ch]' : 'text-[14.5px] max-w-[32ch]',
                  ].join(' ')}
                >
                  {desc}
                </p>
                <span className="mt-[14px] inline-flex items-center gap-[7px] text-[14px] font-semibold text-white opacity-0 translate-y-[6px] transition-[opacity,transform] duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100 group-hover:translate-y-0">
                  Pedir presupuesto
                  <ArrowRight className="w-[15px] h-[15px]" strokeWidth={2.2} />
                </span>
              </div>

            </a>
            </FadeInOnScroll>
          ))}
        </div>

      </div>
    </section>

    {/* ── FAQ ──────────────────────────────────── */}
    <FadeInOnScroll>
      <section id="faq" className="bg-brand-cream py-[clamp(72px,9vw,132px)]">
        <div className="w-full max-w-[1200px] mx-auto px-7">

          <div className="text-center">
            <span className="inline-flex justify-center items-center gap-[10px] font-sans text-[13px] font-semibold tracking-[0.16em] uppercase text-brand-accent">
              <span className="inline-block w-[26px] h-[1.5px] bg-brand-accent shrink-0" aria-hidden />
              Dudas frecuentes
            </span>
            <h2 className="font-serif font-medium text-[clamp(32px,4.4vw,56px)] leading-[1.08] tracking-[-0.015em] text-brand-ink mt-[18px]">
              Lo que más nos preguntan.
            </h2>
          </div>

          <div className="max-w-[820px] mx-auto mt-[50px] border-t border-brand-line">
            {FAQ_ITEMS.map(({ q, a }) => (
              <details key={q} className="group border-b border-brand-line">
                <summary className="flex justify-between items-center gap-5 py-6 px-1 cursor-pointer [&::-webkit-details-marker]:hidden font-serif text-[clamp(19px,2vw,23px)] font-medium leading-[1.08] tracking-[-0.01em] text-brand-ink">
                  {q}
                  <span className="relative shrink-0 w-[30px] h-[30px] rounded-full border-[1.5px] border-brand-line-strong grid place-items-center transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-open:bg-brand-accent group-open:border-brand-accent">
                    <span className="absolute w-[12px] h-[1.8px] rounded-sm bg-brand-ink transition-colors duration-300 group-open:bg-white" aria-hidden />
                    <span className="absolute w-[1.8px] h-[12px] rounded-sm bg-brand-ink transition-[transform,background-color] duration-300 origin-center group-open:scale-y-0 group-open:bg-white" aria-hidden />
                  </span>
                </summary>
                <div className="px-1 pb-[26px]">
                  <p className="text-[16.5px] leading-[1.6] text-brand-ink-soft max-w-[70ch]">{a}</p>
                </div>
              </details>
            ))}
          </div>

        </div>
      </section>
    </FadeInOnScroll>
    </>
  )
}
