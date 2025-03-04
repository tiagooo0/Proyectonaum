"use client"

import Header from "@/components/header"
import { Scale } from "lucide-react"
import { AnimatedText } from "@/components/ui/animated-text"
import { FadeIn } from "@/components/ui/fade-in"

export default function DefensasPenalesPage() {
  return (
    <div className="bg-white overflow-fix">
      <Header />
      <main className="relative isolate">
        {/* Background */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-white">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-white" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-32 sm:py-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <div className="flex items-center gap-x-4">
              <Scale className="h-8 w-8 text-primary" />
              <AnimatedText
                text="Defensas Penales"
                className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl font-serif justify-start"
              />
            </div>
            <FadeIn delay={0.2}>
              <p className="mt-6 text-xl leading-8 text-gray-600">
                Especialistas en derecho penal, brindando una defensa sólida y estratégica para proteger sus derechos y
                libertad.
              </p>
            </FadeIn>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <FadeIn delay={0.3}>
              <div className="flex flex-col gap-6">
                <h2 className="text-2xl font-serif text-gray-900">Servicios Específicos</h2>
                <ul className="space-y-4 text-lg text-gray-600">
                  <li>• Defensa en casos de delitos contra la propiedad</li>
                  <li>• Representación en delitos económicos</li>
                  <li>• Defensa en casos de lesiones</li>
                  <li>• Asesoramiento en delitos de tránsito</li>
                  <li>• Recursos de apelación y casación</li>
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="flex flex-col gap-6">
                <h2 className="text-2xl font-serif text-gray-900">¿Por Qué Elegirnos?</h2>
                <ul className="space-y-4 text-lg text-gray-600">
                  <li>• Más de 15 años de experiencia en derecho penal</li>
                  <li>• Atención personalizada y disponibilidad 24/7</li>
                  <li>• Estrategias de defensa efectivas y probadas</li>
                  <li>• Amplio conocimiento del sistema judicial</li>
                  <li>• Compromiso con los intereses del cliente</li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </main>
    </div>
  )
}

