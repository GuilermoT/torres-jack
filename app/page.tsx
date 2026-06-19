import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const ASEGURADORAS = ["Lloyd's", 'Mapfre', 'Allianz', 'AXA', 'Generali', 'Zurich']

const FAQ_ITEMS = [
  {
    q: '¿Tengo que renovar mi póliza cada año?',
    a: 'No es necesario. La póliza se renueva automáticamente en su fecha de vencimiento. Si quieres anularla, basta con que nos lo comuniques con un mes de antelación al vencimiento.',
  },
  {
    q: '¿Cobráis gastos de gestión?',
    a: 'No. El importe total que pagas es exactamente el que consta en nuestra oferta. El recibo lo cobra directamente la aseguradora en la cuenta bancaria que nos indiques; nosotros no añadimos ningún gasto adicional.',
  },
  {
    q: '¿Cuándo recibiré mi póliza?',
    a: 'Recibirás tu póliza en formato PDF por correo en aproximadamente 72 horas laborables. Ese documento, junto con el recibo bancario, acredita que estás asegurado y puedes presentarlo en cualquier institución o espacio que te lo solicite.',
  },
  {
    q: '¿La póliza de artes escénicas sirve para cualquier compañía?',
    a: 'Sí. Es una tarifa plana para compañías que facturan hasta 400.000 €/año. Si facturas más, también puedes contratarla: al final del año declaras tu facturación y la aseguradora ajusta el recibo de forma proporcional. Pueden contratarla sociedades limitadas, anónimas, profesionales, grupos aficionados, asociaciones culturales y cooperativas.',
  },
  {
    q: '¿Por qué contratar con una correduría y no directamente?',
    a: 'Porque trabajamos para ti. Comparamos entre varias aseguradoras para buscar la mejor relación cobertura-precio, te explicamos las condiciones sin tecnicismos y te acompañamos en la gestión de siniestros. Y todo, sin que te cueste más que ir por tu cuenta.',
  },
]

const RAMOS = [
  {
    title: 'Artes escénicas',
    desc: 'Teatro, danza, circo y música en vivo. Cobertura integral para compañías y producciones.',
    img: 'https://images.unsplash.com/photo-1503095396549-807759245b35?w=800&q=80',
    imgAlt: 'Compañía de teatro en escena',
    big: false,
  },
  {
    title: 'Flotas',
    desc: 'Vehículos de empresa: furgonetas, camiones, turismos y maquinaria industrial.',
    img: 'https://images.unsplash.com/photo-1726776230760-ae81dc9d4e55?w=800&q=80',
    imgAlt: 'Vista aérea de camiones de flota en muelles de carga',
    big: false,
  },
  {
    title: 'Comunidades',
    desc: 'Zonas comunes, responsabilidad civil del edificio y gestión de siniestros sin complicaciones.',
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
    desc: 'Coberturas a medida para pymes y autónomos: RC, D&O, ciberriesgos y más.',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    imgAlt: 'Oficina moderna de empresa en A Coruña',
    big: true,
  },
]

export default function HomePage() {
  return (
    <>
    {/* ── Hero ─────────────────────────────────────────────── */}
    <section className="relative w-full min-h-[85vh] flex items-start overflow-hidden">

      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1620004071518-52531ff9162c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Equipo de Torres Jack, correduría de seguros en A Coruña"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Navy overlay */}
      <div className="absolute inset-0 bg-brand-dark-2/55" />

      {/* Left gradient for text legibility */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.7) 0%, transparent 70%)' }} />

      {/* Content */}
      <div className="relative w-full max-w-[860px] px-[clamp(28px,6vw,80px)] pt-[clamp(80px,12vw,152px)] pb-[clamp(64px,8vw,112px)]">

        {/* Eyebrow */}
        <span className="inline-flex items-center gap-[10px] font-sans text-[13px] font-semibold tracking-[0.16em] uppercase text-brand-accent mb-6">
          <span className="inline-block w-[26px] h-[1.5px] bg-brand-accent shrink-0" aria-hidden />
          Correduría independiente
        </span>

        {/* Headline */}
        <h1 className="font-serif font-medium text-[clamp(42px,6.2vw,84px)] leading-[1.04] tracking-[-0.028em] text-white">
          El seguro, explicado por{' '}
          <em className="not-italic italic text-brand-accent">personas</em>{' '}
          que entienden tu mundo.
        </h1>

        {/* Lead */}
        <p className="text-[clamp(18px,1.55vw,21px)] leading-[1.6] text-white/75 mt-[26px] max-w-[50ch]">
          Somos una correduría con más de 40 años de experiencia, con profesionales con la máxima preparación y tecnología
          que nunca te dejarán solo ante un problema en tu vida privada o en tu empresa.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-[14px] mt-[36px]">
          <div className="group">
            <a
              href="/presupuesto"
              className="inline-flex items-center gap-2.5 py-[16px] px-[32px] rounded-full font-semibold text-[17px] leading-none text-white bg-brand-accent border border-transparent whitespace-nowrap shadow-[0_6px_18px_oklch(0.50_0.135_256/0.34)] transition-[transform,background-color,box-shadow] duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bg-brand-accent-deep group-hover:-translate-y-0.5 group-hover:shadow-[0_10px_26px_oklch(0.50_0.135_256/0.42)]"
            >
              Calcula tu presupuesto
              <ArrowRight className="w-[18px] h-[18px] shrink-0" strokeWidth={2.2} />
            </a>
          </div>
          <div className="group">
            <a
              href="#ramos"
              className="inline-flex items-center gap-2.5 py-[16px] px-[32px] rounded-full font-semibold text-[17px] leading-none text-white bg-transparent border border-white/40 whitespace-nowrap transition-[transform,color,border-color,background-color] duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bg-white/10 group-hover:border-white/60 group-hover:-translate-y-0.5"
            >
              Ver todos los seguros
            </a>
          </div>
        </div>

        {/* Trust stats */}
        <div className="flex flex-wrap gap-x-[30px] gap-y-[22px] mt-[40px]">
          {([
            { value: '+40',       label: 'años asegurando' },
            { value: 'Titulados', label: 'y colegiados'    },
          ] as const).map(({ value, label }) => (
            <div key={label} className="flex flex-col gap-[2px]">
              <b className="font-serif text-[30px] font-semibold tracking-[-0.02em] text-white">
                {value}
              </b>
              <span className="text-[13.5px] font-medium text-white/60">
                {label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>

    {/* ── Aseguradoras ──────────────────────────────────── */}
    <div className="border-y border-brand-line bg-brand-paper-alt">
      <div className="w-full max-w-[1200px] mx-auto px-7 flex flex-wrap items-center justify-between gap-[30px] py-[22px]">
        <span className="text-[13px] font-semibold tracking-[0.1em] uppercase text-brand-muted whitespace-nowrap">
          Aseguradoras de máximo prestigio
        </span>
        <div className="flex flex-wrap items-center gap-[34px]">
          {ASEGURADORAS.map((name) => (
            <span
              key={name}
              className="font-serif text-[21px] font-semibold text-brand-ink-soft tracking-[-0.01em] opacity-[0.72]"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>

    {/* ── Ramos ──────────────────────────────────── */}
    <section id="ramos" className="py-[clamp(72px,9vw,132px)]">
      <div className="w-full max-w-[1200px] mx-auto px-7">

        <span className="inline-flex items-center gap-[10px] font-sans text-[13px] font-semibold tracking-[0.16em] uppercase text-brand-accent">
          <span className="inline-block w-[26px] h-[1.5px] bg-brand-accent shrink-0" aria-hidden />
          Lo que aseguramos
        </span>
        <h2 className="font-serif font-medium text-[clamp(32px,4.4vw,56px)] leading-[1.08] tracking-[-0.015em] text-brand-ink mt-[18px]">
          Cobertura para cada etapa de tu vida y tu empresa.
        </h2>

        <div className="grid grid-cols-1 min-[768px]:grid-cols-6 gap-5 mt-14">
          {RAMOS.map(({ title, desc, img, imgAlt, big }) => (
            <div
              key={title}
              className={[
                'group',
                big
                  ? 'min-[768px]:col-span-3'
                  : 'min-[768px]:col-span-2',
              ].join(' ')}
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
            </div>
          ))}
        </div>

      </div>
    </section>
    {/* ── FAQ ──────────────────────────────────── */}
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
    </>
  )
}
