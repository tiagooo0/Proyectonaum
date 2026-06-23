"use client"

import { motion } from "framer-motion"
import { FadeIn } from "@/components/ui/fade-in"
import { AnimatedText } from "@/components/ui/animated-text"
import { ParallaxScroll } from "@/components/ui/parallax-scroll"
import { Building2, Users } from "lucide-react"

export default function OfficeShowcase() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <AnimatedText
            text="Nuestra Oficina"
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl justify-center"
          />
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Un espacio diseñado para brindarle la mejor atención en un ambiente profesional y acogedor.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
          <ParallaxScroll>
            <FadeIn>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-gray-100 flex items-center justify-center">
                  <div className="text-center">
                    <Building2 className="h-20 w-20 text-primary/40 mx-auto mb-4" />
                    <p className="text-lg font-medium text-gray-400">Recepción</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent transition-opacity duration-300 group-hover:opacity-80" />
                <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300 group-hover:translate-y-0 translate-y-4 opacity-0 group-hover:opacity-100">
                  <h3 className="text-xl font-semibold text-white">Recepción</h3>
                  <p className="mt-2 text-sm text-gray-100">
                    Área de recepción donde nuestro equipo le dará la bienvenida
                  </p>
                </div>
              </motion.div>
            </FadeIn>
          </ParallaxScroll>
          <ParallaxScroll>
            <FadeIn delay={0.2}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl group"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-primary/5 to-gray-100 flex items-center justify-center">
                  <div className="text-center">
                    <Users className="h-20 w-20 text-primary/40 mx-auto mb-4" />
                    <p className="text-lg font-medium text-gray-400">Sala de Reuniones</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent transition-opacity duration-300 group-hover:opacity-80" />
                <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300 group-hover:translate-y-0 translate-y-4 opacity-0 group-hover:opacity-100">
                  <h3 className="text-xl font-semibold text-white">Sala de Reuniones</h3>
                  <p className="mt-2 text-sm text-gray-100">Espacio confortable para reuniones y consultas privadas</p>
                </div>
              </motion.div>
            </FadeIn>
          </ParallaxScroll>
        </div>
      </div>
    </section>
  )
}

