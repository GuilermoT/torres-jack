import { ArrowRight, Check, Clock, GraduationCap, Mail, Phone, Shield, ShieldCheck } from 'lucide-react'

const ASEGURADORAS = ["Lloyd's", 'Mapfre', 'Allianz', 'AXA', 'Generali', 'Zurich']

const COBERTURAS_RC = [
  { label: 'Responsabilidad civil de la actividad', desc: 'De la compañía, persona física o jurídica, en todo el territorio nacional.', nueva: false },
  { label: 'RC patronal',                            desc: 'Accidentes laborales de las personas empleadas de la compañía.',              nueva: false },
  { label: 'Daños a teatros y espacios',             desc: 'Incluidos los daños en operaciones de carga y descarga de material.',         nueva: false },
  { label: 'Daños a espectadores y terceros',        desc: 'Cobertura por incendio y explosión en locales de ensayo, almacenes y oficinas.', nueva: false },
  { label: 'Defensa jurídica y fianzas',             desc: 'Gastos de defensa y fianzas judiciales incluidos. Franquicia de 300 €.',  nueva: false },
  { label: 'Actividad formativa',                    desc: 'Clases, cursos o talleres organizados por la compañía. Contratación optativa.', nueva: true },
]

const ESPECTACULOS = [
  'Teatro', 'Danza', 'Circo', 'Títeres', 'Clown', 'Cabaret',
  'Variedades', 'Teatro musical', 'Teatro físico', 'Compañías aficionadas', 'Asociaciones culturales',
]

const OPCIONES_RC = [
  { opcion: 'A', suma: '300.000 €' },
  { opcion: 'B', suma: '600.000 €' },
  { opcion: 'D', suma: '1.200.000 €' },
  { opcion: 'E', suma: '1.600.000 €' },
]

const CONTACT_METHODS = [
  { Icon: Mail,  label: 'Email',      value: 'info@torresjack.com',           href: 'mailto:info@torresjack.com' },
  { Icon: Phone, label: 'Teléfono',   value: '981 12 14 08',                  href: 'tel:+34981121408' },
  { Icon: Clock, label: 'Asistencia', value: 'Teléfonos 24 h para siniestros', href: undefined },
]

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
    a: 'Sí. Es una tarifa plana para compañías que facturan hasta 400.000 €/año. Si facturas más, también puedes contratarla: al final del año declaras tu facturación y la aseguradora ajusta el recibo de forma proporcional. Pueden contratarla sociedades limitadas, anónimas, profesionales, grupos aficionados, asociaciones culturales y cooperativas.',
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
    phLabel: 'FOTO · FUNCIÓN DE TEATRO EN DIRECTO',
    hue: 256,
    big: false,
  },
  {
    title: 'Flotas',
    desc: 'Vehículos de empresa: furgonetas, camiones, turismos y maquinaria industrial.',
    phLabel: 'FOTO · FLOTA DE VEHÍCULOS',
    hue: 215,
    big: false,
  },
  {
    title: 'Comunidades',
    desc: 'Zonas comunes, responsabilidad civil del edificio y gestión de siniestros sin complicaciones.',
    phLabel: 'FOTO · EDIFICIO RESIDENCIAL A CORUÑA',
    hue: 155,
    big: false,
  },
  {
    title: 'Particulares',
    desc: 'Hogar, vida, salud y auto. Todo lo que necesitas para proteger tu día a día y el de tu familia.',
    phLabel: 'FOTO · FAMILIA EN SU HOGAR',
    hue: 42,
    big: true,
  },
  {
    title: 'Empresas',
    desc: 'Coberturas a medida para pymes y autónomos: RC, D&O, ciberriesgos y más.',
    phLabel: 'FOTO · OFICINA MODERNA A CORUÑA',
    hue: 200,
    big: true,
  },
]

export default function HomePage() {
  return (
    <>
    <section className="relative pt-[clamp(40px,6vw,76px)] pb-[clamp(48px,6vw,80px)]">
      <div className="w-full max-w-[1200px] mx-auto px-7">
        <div className="grid grid-cols-1 items-center gap-[clamp(28px,4vw,60px)] min-[1080px]:grid-cols-[1.04fr_0.96fr]">

          {/* ── Text column ──────────────────────────────────── */}
          <div>

            {/* Eyebrow */}
            <span className="inline-flex items-center gap-[10px] font-sans text-[13px] font-semibold tracking-[0.16em] uppercase text-brand-accent mb-6">
              <span className="inline-block w-[26px] h-[1.5px] bg-brand-accent shrink-0" aria-hidden />
              Correduría independiente · A Coruña
            </span>

            {/* Headline */}
            <h1 className="font-serif font-medium text-[clamp(42px,6.2vw,84px)] leading-[1.04] tracking-[-0.028em] text-brand-ink">
              El seguro, explicado por{' '}
              <em className="not-italic italic text-brand-accent">personas</em>{' '}
              que entienden tu mundo.
            </h1>

            {/* Lead */}
            <p className="text-[clamp(18px,1.55vw,21px)] leading-[1.6] text-brand-ink-soft mt-[26px] max-w-[50ch]">
              Somos una correduría con más de 40 años de experiencia, con profesionales con la máxima preparación y tecnología 
              que nunca te dejarán solo ante un problema en tu vida privada o en tu empresa.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-[14px] mt-[36px]">
              <a
                href="#presupuesto"
                className="inline-flex items-center gap-2.5 py-[16px] px-[32px] rounded-full font-semibold text-[17px] leading-none text-white bg-brand-accent border border-transparent whitespace-nowrap shadow-[0_6px_18px_oklch(0.50_0.135_256/0.34)] transition-[transform,background-color,box-shadow] duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-brand-accent-deep hover:-translate-y-0.5 hover:shadow-[0_10px_26px_oklch(0.50_0.135_256/0.42)]"
              >
                Calcula tu presupuesto
                <ArrowRight className="w-[18px] h-[18px] shrink-0" strokeWidth={2.2} />
              </a>
              <a
                href="#ramos"
                className="inline-flex items-center gap-2.5 py-[16px] px-[32px] rounded-full font-semibold text-[17px] leading-none text-brand-ink bg-transparent border border-brand-line-strong whitespace-nowrap transition-[transform,color,border-color,background-color] duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-brand-cream hover:border-brand-line hover:-translate-y-0.5"
              >
                Ver todos los seguros
              </a>
            </div>

            {/* Trust stats */}
            <div className="flex flex-wrap gap-x-[30px] gap-y-[22px] mt-[40px]">
              {([
                { value: '+40',       label: 'años asegurando'    },
                { value: 'Titulados', label: 'y colegiados'       },
              ] as const).map(({ value, label }) => (
                <div key={label} className="flex flex-col gap-[2px]">
                  <b className="font-serif text-[30px] font-semibold tracking-[-0.02em] text-brand-ink">
                    {value}
                  </b>
                  <span className="text-[13.5px] font-medium text-brand-muted">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Media column ─────────────────────────────────── */}
          <div className="relative min-[1080px]:max-w-none max-w-[460px] mt-2 min-[1080px]:mt-0">

            {/* Photo placeholder — replace with <Image> when photo is available */}
            <div
              className="aspect-[4/5] rounded-[30px] overflow-hidden shadow-[0_12px_30px_oklch(0.3_0.02_60/0.13),0_40px_80px_oklch(0.3_0.02_60/0.12)]"
              style={{
                background: [
                  'repeating-linear-gradient(135deg, oklch(0.90 0.022 40) 0 2px, transparent 2px 13px)',
                  'linear-gradient(150deg, oklch(0.93 0.030 40), oklch(0.86 0.040 54))',
                ].join(', '),
              }}
              role="img"
              aria-label="Foto del equipo · Torres Jack"
            />

            {/* Floating trust badge */}
            <div className="absolute bottom-[40px] -left-[26px] max-[520px]:left-[14px] max-[520px]:right-0 bg-brand-surface border border-brand-line rounded-[22px] p-[18px_22px] shadow-[0_4px_14px_oklch(0.3_0.02_60/0.08),0_18px_40px_oklch(0.3_0.02_60/0.07)] flex items-center gap-[14px] max-w-[290px]">
              <span className="w-[46px] h-[46px] rounded-full bg-brand-accent-tint text-brand-accent-deep grid place-items-center shrink-0">
                <ShieldCheck className="w-[24px] h-[24px]" strokeWidth={2} />
              </span>
              <p className="text-[14.5px] leading-[1.35] text-brand-ink">
                <b className="font-semibold">Mediadores titulados y colegiados.</b>{' '}
                Trabajamos para ti, no para la aseguradora.
              </p>
            </div>

          </div>
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
          {RAMOS.map(({ title, desc, phLabel, hue, big }) => (
            <a
              key={title}
              href="#presupuesto"
              className={[
                'group relative overflow-hidden rounded-[20px] flex flex-col justify-end',
                big
                  ? 'min-[768px]:col-span-3 min-h-[300px] min-[768px]:min-h-[400px]'
                  : 'min-[768px]:col-span-2 min-h-[270px]',
                'shadow-[0_1px_2px_oklch(0.3_0.02_60/0.06),0_2px_8px_oklch(0.3_0.02_60/0.05)]',
                'transition-[transform,box-shadow] duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)]',
                'hover:-translate-y-1 hover:shadow-[0_4px_14px_oklch(0.3_0.02_60/0.08),0_18px_40px_oklch(0.3_0.02_60/0.07)]',
              ].join(' ')}
            >
              {/* Placeholder background */}
              <div
                className="absolute inset-0 transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                style={{
                  background: [
                    `repeating-linear-gradient(135deg, oklch(0.90 0.022 ${hue}) 0 2px, transparent 2px 13px)`,
                    `linear-gradient(150deg, oklch(0.93 0.030 ${hue}), oklch(0.86 0.040 ${hue + 14}))`,
                  ].join(', '),
                }}
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

              {/* Photo caption label */}
              <span className="absolute bottom-[12px] left-[14px] font-sans text-[11px] font-semibold tracking-[0.08em] uppercase leading-none text-[oklch(0.40_0.04_55)] bg-white/60 backdrop-blur-sm px-[9px] py-[4px] rounded-[6px] pointer-events-none">
                {phLabel}
              </span>
            </a>
          ))}
        </div>

      </div>
    </section>

    {/* ── Artes Escénicas ──────────────────────────────────── */}
    <section id="escena" className="bg-brand-dark py-[clamp(72px,9vw,132px)]">
      <div className="w-full max-w-[1200px] mx-auto px-7">

        {/* Bloque superior: eyebrow + título | párrafo */}
        <div className="grid grid-cols-1 min-[900px]:grid-cols-2 gap-[clamp(24px,4vw,60px)] items-end mb-[clamp(48px,6vw,80px)]">
          <div>
            <span className="inline-flex items-center gap-[10px] font-sans text-[12px] font-semibold tracking-[0.16em] uppercase text-brand-accent mb-5">
              <span className="inline-block w-[26px] h-[1.5px] bg-brand-accent shrink-0" aria-hidden />
              Seguros de artes escénicas
            </span>
            <h2 className="font-serif font-medium text-[clamp(32px,4.4vw,54px)] leading-[1.08] tracking-[-0.015em] text-brand-on-dark">
              Seguros de artes escénicas, de quien conoce el oficio.
            </h2>
          </div>
          <p className="text-[clamp(17px,1.4vw,19px)] leading-[1.65] text-brand-on-dark-soft min-[900px]:pb-[4px]">
            Llevamos años asegurando a quienes hacen que la función no pare. Una póliza pensada para la realidad de las compañías: giras, montajes, ensayos, espacios prestados y público en la sala.
          </p>
        </div>

        {/* Dos columnas */}
        <div className="grid grid-cols-1 min-[960px]:grid-cols-2 gap-[clamp(40px,5vw,72px)] items-start">

          {/* Izquierda: lista de coberturas + chips */}
          <div>
            <h3 className="font-serif font-medium text-[23px] leading-[1.12] tracking-[-0.01em] text-brand-on-dark mb-5">
              Qué cubre tu RC de artes escénicas
            </h3>
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
          </div>

          {/* Derecha: card de opciones */}
          <div className="bg-brand-dark-2 rounded-[24px] p-[clamp(28px,3.5vw,44px)] border border-brand-dark-line">
            <h3 className="font-serif font-medium text-[clamp(22px,2.2vw,27px)] leading-[1.12] tracking-[-0.01em] text-brand-on-dark mb-2">
              Opciones de contratación
            </h3>
            <p className="text-[14px] leading-[1.6] text-brand-on-dark-soft mb-6">
              Tarifa plana para compañías que facturan hasta 400.000&nbsp;€/año. Elige tu suma asegurada por siniestro.
            </p>

            <div className="flex flex-col divide-y divide-brand-dark-line">
              {OPCIONES_RC.map(({ opcion, suma }) => (
                <div key={opcion} className="flex items-center justify-between py-[15px] first:pt-0 last:pb-0">
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
                </div>
              ))}
            </div>

            <p className="text-[13px] leading-[1.6] text-brand-on-dark-soft mt-6 mb-6">
              También aseguramos accidentes de actores y actrices, RC de profesores de artes escénicas y RC de actores y artistas a título individual.
            </p>

            <a
              href="#presupuesto"
              className="flex items-center justify-center gap-2.5 py-[16px] px-[32px] rounded-full font-semibold text-[16px] leading-none text-white bg-brand-accent border border-transparent w-full shadow-[0_6px_18px_oklch(0.50_0.135_256/0.34)] transition-[transform,background-color,box-shadow] duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-brand-accent-deep hover:-translate-y-0.5 hover:shadow-[0_10px_26px_oklch(0.50_0.135_256/0.42)]"
            >
              Pide tu presupuesto sin compromiso
              <ArrowRight className="w-[17px] h-[17px] shrink-0" strokeWidth={2.2} />
            </a>
          </div>

        </div>
      </div>
    </section>

    {/* ── Quiénes somos ──────────────────────────────────── */}
    <section id="nosotros" className="py-[clamp(72px,9vw,132px)]">
      <div className="w-full max-w-[1200px] mx-auto px-7">
        <div className="grid grid-cols-1 min-[860px]:grid-cols-[0.92fr_1.08fr] gap-[clamp(36px,5vw,72px)] items-center">

          {/* Foto placeholder */}
          <div
            className="aspect-[5/6] rounded-[30px] shadow-[0_4px_14px_oklch(0.3_0.02_60/0.08),0_18px_40px_oklch(0.3_0.02_60/0.07)] max-[860px]:max-w-[420px]"
            style={{
              background: [
                'repeating-linear-gradient(135deg, oklch(0.90 0.022 60) 0 2px, transparent 2px 13px)',
                'linear-gradient(150deg, oklch(0.93 0.030 60), oklch(0.86 0.040 74))',
              ].join(', '),
            }}
            role="img"
            aria-label="Foto · el equipo de Torres Jack"
          />

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

            <a
              href="#contacto"
              className="inline-flex items-center gap-2.5 py-[14px] px-[26px] rounded-full font-semibold text-[16px] leading-none bg-brand-ink text-brand-paper border border-transparent mt-[30px] transition-[transform,background-color] duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-black hover:-translate-y-0.5"
            >
              Hablar con un mediador
            </a>
          </div>

        </div>
      </div>
    </section>

    {/* ── FAQ ──────────────────────────────────── */}
    <section id="faq" className="pb-[clamp(72px,9vw,132px)]">
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
              <button
                type="submit"
                className="flex items-center justify-center gap-2.5 w-full mt-5 py-[17px] px-[32px] rounded-full font-semibold text-[17px] leading-none text-white bg-brand-accent shadow-[0_6px_18px_oklch(0.50_0.135_256/0.34)] transition-[transform,background-color,box-shadow] duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-brand-accent-deep hover:-translate-y-0.5 hover:shadow-[0_10px_26px_oklch(0.50_0.135_256/0.42)]"
              >
                Enviar mensaje
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
    </>
  )
}
