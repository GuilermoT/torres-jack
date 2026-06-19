'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[85vh] flex items-start overflow-hidden">

      {/* Background image — no animation */}
      <Image
        src="https://images.unsplash.com/photo-1620004071518-52531ff9162c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Equipo de Torres Jack, correduría de seguros en A Coruña"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Navy overlay — no animation */}
      <div className="absolute inset-0 bg-brand-dark-2/55" />

      {/* Left gradient for text legibility — no animation */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.7) 0%, transparent 70%)' }} />

      {/* Content */}
      <div className="relative w-full max-w-[860px] px-[clamp(28px,6vw,80px)] pt-[clamp(80px,12vw,152px)] pb-[clamp(64px,8vw,112px)]">

        {/* Eyebrow — fade in, delay 0.1s */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
          className="inline-flex items-center gap-[10px] font-sans text-[13px] font-semibold tracking-[0.16em] uppercase text-brand-accent mb-6"
        >
          <span className="inline-block w-[26px] h-[1.5px] bg-brand-accent shrink-0" aria-hidden />
          Correduría independiente
        </motion.span>

        {/* Headline — fade in + slide up, delay 0.3s */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.3 }}
          className="font-serif font-medium text-[clamp(42px,6.2vw,84px)] leading-[1.04] tracking-[-0.028em] text-white"
        >
          El seguro, explicado por{' '}
          <em className="not-italic italic text-brand-accent">personas</em>{' '}
          que entienden tu mundo.
        </motion.h1>

        {/* Lead — fade in + slide up, delay 0.5s */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.5 }}
          className="text-[clamp(18px,1.55vw,21px)] leading-[1.6] text-white/75 mt-[26px] max-w-[50ch]"
        >
          Somos una correduría con más de 40 años de experiencia, con profesionales con la máxima preparación y tecnología
          que nunca te dejarán solo ante un problema en tu vida privada o en tu empresa.
        </motion.p>

        {/* CTAs — fade in, delay 0.7s */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.7 }}
          className="flex flex-wrap gap-[14px] mt-[36px]"
        >
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
        </motion.div>

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
  )
}
