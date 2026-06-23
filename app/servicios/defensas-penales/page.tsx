"use client"

import { Scale, ArrowRight, Shield, Gavel, BookOpen, Clock } from "lucide-react"
import { AnimatedText } from "@/components/ui/animated-text"
import { FadeIn } from "@/components/ui/fade-in"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

const specificServices = [
  { title: "Defensa en delitos contra la propiedad", desc: "Robo, hurto, estafa y otros delitos patrimoniales" },
  { title: "Representación en delitos económicos", desc: "Lavado de activos, fraudes bancarios y financieros" },
  { title: "Defensa en casos de lesiones", desc: "Lesiones leves, graves y gravísimas" },
  { title: "Asesoramiento en delitos de tránsito", desc: "Accidentes y siniestros viales con implicancias penales" },
  { title: "Recursos de apelación y casación", desc: "Impugnación de sentencias desfavorables ante tribunales superiores" },
]

const whyUs = [
  { icon: Shield, text: "Estrategias de defensa efectivas y probadas" },
  { icon: Gavel, text: "Amplio conocimiento del sistema judicial cordobés" },
  { icon: BookOpen, text: "Actualización permanente en jurisprudencia penal" },
  { icon: Clock, text: "Disponibilidad 24/7 para urgencias penales" },
]

export default function DefensasPenalesPage() {
  return (
    <div className="bg-white overflow-fix">
      <main className="relative isolate">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-white" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-32 sm:py-40 lg:px-8">
          <nav className="flex mb-8 text-sm text-gray-500" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2">
              <li><Link href="/" className="hover:text-primary transition-colors">Inicio</Link></li>
              <li>/</li>
              <li className="text-gray-900 font-medium">Defensas Penales</li>
            </ol>
          </nav>

          <div className="mx-auto max-w-2xl lg:mx-0">
            <div className="flex items-center gap-x-4">
              <Scale className="h-8 w-8 text-primary" />
              <h1>
                <AnimatedText
                  text="Defensas Penales"
                  className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl font-serif justify-start"
                />
              </h1>
            </div>
            <FadeIn delay={0.2}>
              <p className="mt-6 text-xl leading-8 text-gray-600">
                Especialistas en derecho penal, brindando una defensa sólida y estratégica para proteger sus derechos y
                libertad. Representación legal en Jesús María, Colonia Caroya y toda la provincia de Córdoba.
              </p>
            </FadeIn>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <FadeIn delay={0.3}>
              <div className="flex flex-col gap-6">
                <h2 className="text-2xl font-serif text-gray-900">Servicios Específicos</h2>
                <div className="space-y-4">
                  {specificServices.map((s, i) => (
                    <div key={i} className="flex gap-3 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                      <Scale className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">{s.title}</p>
                        <p className="text-sm text-gray-500">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="flex flex-col gap-6">
                <h2 className="text-2xl font-serif text-gray-900">¿Por Qué Elegirnos?</h2>
                <div className="grid gap-4">
                  {whyUs.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-r from-primary/5 to-transparent">
                      <item.icon className="h-5 w-5 text-primary shrink-0" />
                      <span className="text-gray-700">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.5}>
            <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20">
              <div className="text-center">
                <h2 className="text-2xl font-serif text-gray-900">¿Necesita Asesoría Penal?</h2>
                <p className="mt-4 text-lg text-gray-600">
                  No espere más. Contáctenos hoy para una consulta inicial sin cargo en Jesús María o Colonia Caroya.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button asChild>
                    <Link href="/#contact">
                      Solicitar Consulta Gratis
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/">Volver al Inicio</Link>
                  </Button>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.6}>
            <div className="mt-12 text-center">
              <p className="text-gray-500 text-sm">
                También ofrecemos{" "}
                <Link href="/servicios/defensas-laborales" className="text-primary hover:underline">defensas laborales</Link>
                ,{" "}
                <Link href="/servicios/sucesiones" className="text-primary hover:underline">sucesiones</Link>{" "}
                y{" "}
                <Link href="/servicios/divorcios-express" className="text-primary hover:underline">divorcios exprés</Link>.
              </p>
            </div>
          </FadeIn>
        </div>
      </main>
    </div>
  )
}
