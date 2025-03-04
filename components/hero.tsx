"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Header from "@/components/header"
import WhatsAppFAB from "@/components/whatsapp-fab"
import { ArrowRight, Scale, Briefcase, FileText, Heart } from "lucide-react"
import { motion } from "framer-motion"
import { AnimatedText } from "@/components/ui/animated-text"
import { FadeIn } from "@/components/ui/fade-in"

const features = [
  {
    name: "Defensas Penales",
    icon: Scale,
  },
  {
    name: "Defensas Laborales",
    icon: Briefcase,
  },
  {
    name: "Sucesiones",
    icon: FileText,
  },
  {
    name: "Divorcios Exprés",
    icon: Heart,
  },
]

export default function Hero() {
  return (
    <div className="relative bg-white overflow-hidden">
      <Header />
      <div className="relative isolate">
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-white" />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 1.5 }}
            className="absolute right-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl"
            aria-hidden="true"
          >
            <div
              className="relative aspect-[1155/678] w-[72.1875rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary/30 to-primary/80 opacity-30"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </motion.div>
        </div>

        {/* Content */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            <FadeIn>
              <div className="flex">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative flex items-center gap-x-4 rounded-full px-4 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                >
                  <span className="font-semibold text-primary">Consulta sin cargo</span>
                  <span className="h-4 w-px bg-gray-900/10" aria-hidden="true" />
                  <a href="#contact" className="flex items-center gap-x-1">
                    Contactar
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </motion.div>
              </div>
            </FadeIn>
            <div className="mt-10">
              <AnimatedText
                text="Experiencia y Excelencia en Derecho"
                className="max-w-lg text-3xl md:text-4xl font-serif tracking-tight text-gray-900 sm:text-6xl"
              />
              <FadeIn delay={0.5}>
                <p className="mt-6 text-base md:text-lg leading-8 text-gray-600">
                  Más de 15 años brindando asesoramiento legal especializado en defensas penales, laborales, sucesiones
                  y divorcios. Compromiso con resultados y atención personalizada.
                </p>
              </FadeIn>
              <FadeIn delay={0.7}>
                <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-x-6">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
                    asChild
                  >
                    <Link href="#contact">Solicitar Consulta</Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto transition-all duration-300 hover:scale-105"
                    asChild
                  >
                    <Link href="#services">Conocer Servicios</Link>
                  </Button>
                </div>
              </FadeIn>
              <FadeIn delay={0.9}>
                <div className="mt-10 border-t border-gray-900/10 pt-10">
                  <div className="grid grid-cols-2 gap-x-4 gap-y-6 text-sm sm:text-base font-semibold leading-7 text-gray-900 sm:grid-cols-4">
                    {features.map((feature) => (
                      <motion.div
                        key={feature.name}
                        className="flex items-center gap-x-3"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <feature.icon className="h-5 w-5 text-primary" />
                        {feature.name}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
            <FadeIn>
              <motion.div
                className="relative mx-auto w-full max-w-lg lg:max-w-md"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <img
                  className="relative mx-auto w-full max-w-lg rounded-2xl shadow-xl ring-1 ring-gray-400/10 lg:max-w-md"
                  src="/placeholder.svg?height=600&width=500"
                  alt="Dr. Guillermo Naum en su oficina"
                />
                {/* Decorative elements */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 0.7 }}
                  transition={{ duration: 1 }}
                  className="absolute -top-4 -right-4 w-72 h-72 bg-primary/5 rounded-full mix-blend-multiply filter blur-3xl"
                />
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 0.7 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="absolute -bottom-4 -left-4 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl"
                />
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </div>
      <WhatsAppFAB />
    </div>
  )
}

