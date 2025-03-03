"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

export function FadeIn({
  children,
  className,
  delay = 0,
  once = true,
}: {
  children: ReactNode
  className?: string
  delay?: number
  once?: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      viewport={{ once }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

