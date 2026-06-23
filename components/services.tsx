"use client"

import { Scale, Briefcase, FileText, Heart } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { FadeIn } from "@/components/ui/fade-in"
import { AnimatedText } from "@/components/ui/animated-text"
import { ParallaxScroll } from "@/components/ui/parallax-scroll"

const services = [
  {
    name: "Defensas Penales",
    description:
      "Representación legal especializada para personas acusadas de delitos, protegiendo sus derechos y libertad con estrategias de defensa efectivas.",
    icon: Scale,
  },
  {
    name: "Defensas Laborales",
    description:
      "Asesoramiento y representación en conflictos laborales, despidos injustificados, acoso laboral y negociaciones con empleadores.",
    icon: Briefcase,
  },
  {
    name: "Sucesiones",
    description:
      "Gestión integral de procesos sucesorios, testamentos, partición de bienes y resolución de conflictos hereditarios.",
    icon: FileText,
  },
  {
    name: "Divorcios Exprés",
    description:
      "Trámites de divorcio rápidos y eficientes, minimizando el impacto emocional y económico para todas las partes involucradas.",
    icon: Heart,
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <AnimatedText
            text="Áreas de Práctica"
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl justify-center"
          />
          <FadeIn delay={0.2}>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Ofrezco servicios legales especializados para atender sus necesidades con profesionalismo y dedicación.
            </p>
          </FadeIn>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:max-w-none lg:grid-cols-2">
          {services.map((service, index) => (
            <ParallaxScroll key={service.name}>
              <FadeIn delay={0.1 * (index + 1)}>
                <motion.div
                  whileHover={{ scale: 1.03, y: -4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Card className="h-full transition-all duration-300 hover:shadow-2xl group border-2 hover:border-primary/20">
                    <CardHeader>
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 transition-all duration-300 group-hover:from-primary/20 group-hover:to-primary/10 group-hover:shadow-lg"
                      >
                        <service.icon className="h-7 w-7 text-primary transition-transform duration-300 group-hover:scale-110" />
                      </motion.div>
                      <CardTitle className="text-xl transition-colors duration-300 group-hover:text-primary">
                        {service.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              </FadeIn>
            </ParallaxScroll>
          ))}
        </div>
      </div>
    </section>
  )
}

