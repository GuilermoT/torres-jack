'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface FadeInOnScrollProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export default function FadeInOnScroll({ children, delay = 0, className }: FadeInOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { amount: 0.15, once: true })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.8, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}
