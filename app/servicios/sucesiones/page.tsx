"use client"

import { FileText, ArrowRight, ScrollText, Users, Scale, Shield } from "lucide-react"
import { AnimatedText } from "@/components/ui/animated-text"
import { FadeIn } from "@/components/ui/fade-in"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const specificServices = [
  { title: "Sucesiones testamentarias", desc: "Gestión de herencias cuando existe testamento válido" },
  { title: "Sucesiones intestadas", desc: "Proceso sucesorio cuando no hay testamento del fallecido" },
  { title: "Partición de bienes", desc: "División y adjudicación de bienes entre los herederos" },
  { title: "Declaratoria de herederos", desc: "Trámite judicial para reconocer legalmente a los herederos" },
  { title: "Mediación en conflictos sucesorios", desc: "Resolución de disputas entre herederos de manera ágil" },
]

const whyUs = [
  { icon: ScrollText, text: "Experiencia en procesos sucesorios complejos" },
  { icon: Users, text: "Atención personalizada y comprensiva" },
  { icon: Scale, text: "Gestión eficiente de trámites judiciales" },
  { icon: Shield, text: "Resolución efectiva de conflictos familiares" },
]

export default function SucesionesPage() {
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
              <li className="text-gray-900 font-medium">Sucesiones</li>
            </ol>
          </nav>

          <div className="mx-auto max-w-2xl lg:mx-0">
            <div className="flex items-center gap-x-4">
              <FileText className="h-8 w-8 text-primary" />
              <h1>
                <AnimatedText
                  text="Sucesiones"
                  className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl font-serif justify-start"
                />
              </h1>
            </div>
            <FadeIn delay={0.2}>
              <p className="mt-6 text-xl leading-8 text-gray-600">
                Guiamos a nuestros clientes a través del proceso sucesorio con sensibilidad y profesionalismo,
                asegurando una gestión eficiente en Jesús María, Colonia Caroya y toda la provincia de Córdoba.
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
                      <FileText className="h-5 w-5 text-primary shrink-0 mt-0.5" />
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
                <h2 className="text-2xl font-serif text-gray-900">¿Necesita Gestión Sucesoria?</h2>
                <p className="mt-4 text-lg text-gray-600">
                  Lo acompañamos en cada paso del proceso sucesorio con profesionalismo y sensibilidad.
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
                <Link href="/servicios/defensas-penales" className="text-primary hover:underline">defensas penales</Link>
                ,{" "}
                <Link href="/servicios/defensas-laborales" className="text-primary hover:underline">defensas laborales</Link>{" "}
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
