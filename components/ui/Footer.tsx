import Image from 'next/image'
import { cn } from '@/lib/utils'

const SEGUROS = [
  { label: 'Artes escénicas',    href: '#escena'      },
  { label: 'Hogar y auto',       href: '#ramos'       },
  { label: 'Comunidades',        href: '#ramos'       },
  { label: 'Flotas y empresas',  href: '#ramos'       },
] as const

const CORREDURIA = [
  { label: 'Quiénes somos',          href: '#nosotros'    },
  { label: 'Pide presupuesto',        href: '#presupuesto' },
  { label: 'Preguntas frecuentes',    href: '#faq'         },
  { label: 'Asesoría jurídica',       href: '#contacto'    },
  { label: 'Acceso del equipo',       href: '/panel'       },
] as const

const CONTACTO = [
  { label: '981 12 14 08',          href: 'tel:+34981121408'          },
  { label: 'info@torresjack.com',   href: 'mailto:info@torresjack.com' },
  { label: 'Asistencia 24 h',       href: '#contacto'                 },
] as const

function FooterCol({
  heading,
  links,
}: {
  heading: string
  links: ReadonlyArray<{ label: string; href: string }>
}) {
  return (
    <div>
      <h5 className="text-[13px] font-bold font-sans tracking-[0.12em] uppercase text-brand-on-dark mb-4">
        {heading}
      </h5>
      <ul className="grid gap-[11px] list-none m-0 p-0">
        {links.map(({ label, href }) => (
          <li key={label}>
            <a
              href={href}
              className="text-[14.5px] text-brand-on-dark-soft hover:text-brand-on-dark transition-colors duration-200"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="bg-brand-dark-2 text-brand-on-dark-soft pt-16 pb-[30px]">
      <div className="w-full max-w-[1200px] mx-auto px-7">

        {/* ── Top grid ─────────────────────────────────────────── */}
        <div className={cn(
          'grid gap-8',
          'grid-cols-1',
          'min-[860px]:grid-cols-2',
          'min-[1080px]:grid-cols-[1.4fr_1fr_1fr_1fr] min-[1080px]:gap-9'
        )}>

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/logo-white.svg"
                alt=""
                width={42}
                height={42}
                className="h-[42px] w-auto shrink-0"
              />
              <span className="flex flex-col leading-[1.1]">
                <b className="font-serif font-semibold text-[19px] tracking-[-0.01em] text-brand-on-dark">
                  Torres Jack
                </b>
                <span className="text-[11px] tracking-[0.14em] uppercase text-brand-on-dark-soft font-semibold">
                  Correduría de seguros
                </span>
              </span>
            </div>
            <p className="mt-[18px] text-[14.5px] max-w-[30ch] leading-relaxed">
              Correduría de seguros S.L. independiente, con sede en A Coruña.
              Mediadores titulados y colegiados.
            </p>
          </div>

          <FooterCol heading="Seguros"     links={SEGUROS}    />
          <FooterCol heading="Correduría"  links={CORREDURIA} />
          <FooterCol heading="Contacto"    links={CONTACTO}   />
        </div>

        {/* ── Bottom bar ───────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-[50px] pt-[26px] border-t border-brand-dark-line text-[13px]">
          <span>
            © 2026 Torres Jack Correduría de Seguros S.L. · Todos los derechos reservados.
          </span>

          <div className="flex gap-[18px] items-center flex-wrap">
            <a
              href="#"
              className="hover:text-brand-on-dark transition-colors duration-200"
            >
              Aviso legal y política de privacidad
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/torresjackseguros"
              aria-label="Síguenos en Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[38px] h-[38px] rounded-[10px] border border-brand-dark-line grid place-items-center text-brand-on-dark-soft hover:bg-[oklch(1_0_0/0.06)] hover:text-brand-on-dark transition-[color,background-color] duration-[250ms]"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-[17px] h-[17px]"
                aria-hidden
              >
                <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}
