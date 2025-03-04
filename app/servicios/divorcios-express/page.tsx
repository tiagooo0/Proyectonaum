"use client"

import Header from "@/components/header"
import { Heart } from "lucide-react"
import { AnimatedText } from "@/components/ui/animated-text"
import { FadeIn } from "@/components/ui/fade-in"

export default function DivorciosExpressPage() {
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
              <Heart className="h-8 w-8 text-primary" />
              <AnimatedText
                text="Divorcios Exprés"
                className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl font-serif justify-start"
              />
            </div>
            <FadeIn delay={0.2}>
              <p className="mt-6 text-xl leading-8 text-gray-600">
                Facilitamos procesos de divorcio ágiles y eficientes, minimizando el impacto emocional y económico para
                todas las partes.
              </p>
            </FadeIn>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <FadeIn delay={0.3}>
              <div className="flex flex-col gap-6">
                <h2 className="text-2xl font-serif text-gray-900">Servicios Específicos</h2>
                <ul className="space-y-4 text-lg text-gray-600">
                  <li>• Divorcio por mutuo acuerdo</li>
                  <li>• Convenio regulador</li>
                  <li>• División de bienes</li>
                  <li>• Acuerdos de custodia</li>
                  <li>• Mediación familiar</li>
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="flex flex-col gap-6">
                <h2 className="text-2xl font-serif text-gray-900">¿Por Qué Elegirnos?</h2>
                <ul className="space-y-4 text-lg text-gray-600">
                  <li>• Proceso rápido y eficiente</li>
                  <li>• Atención sensible y profesional</li>
                  <li>• Costos transparentes</li>
                  <li>• Amplia experiencia en divorcios</li>
                  <li>• Enfoque en soluciones amistosas</li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </main>
    </div>
  )
}

