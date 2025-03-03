import Header from "@/components/header"
import { FileText } from "lucide-react"

export default function SucesionesPage() {
  return (
    <div className="bg-white">
      <Header />
      <main className="relative isolate">
        {/* Background */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-white">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-white" />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <div className="flex items-center gap-x-4">
              <FileText className="h-8 w-8 text-primary" />
              <h1 className="text-3xl font-serif tracking-tight text-gray-900 sm:text-5xl">Sucesiones</h1>
            </div>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              Guiamos a nuestros clientes a través del proceso sucesorio con sensibilidad y profesionalismo, asegurando
              una gestión eficiente.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl font-serif text-gray-900">Servicios Específicos</h2>
              <ul className="space-y-4 text-lg text-gray-600">
                <li>• Sucesiones testamentarias</li>
                <li>• Sucesiones intestadas</li>
                <li>• Partición de bienes</li>
                <li>• Declaratoria de herederos</li>
                <li>• Mediación en conflictos sucesorios</li>
              </ul>
            </div>
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl font-serif text-gray-900">¿Por Qué Elegirnos?</h2>
              <ul className="space-y-4 text-lg text-gray-600">
                <li>• Experiencia en procesos sucesorios complejos</li>
                <li>• Atención personalizada y comprensiva</li>
                <li>• Gestión eficiente de trámites</li>
                <li>• Asesoramiento integral</li>
                <li>• Resolución efectiva de conflictos</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

