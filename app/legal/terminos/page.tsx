import Header from "@/components/header"

export default function TerminosPage() {
  return (
    <div className="bg-white">
      <Header />
      <main className="relative isolate min-h-screen">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-white" />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-3xl font-serif tracking-tight text-gray-900 sm:text-5xl">Términos de Servicio</h1>
            <div className="mt-10 space-y-8 text-base leading-7 text-gray-600">
              <p>
                Al acceder a nuestro sitio web, usted acepta estar sujeto a estos términos de servicio, todas las leyes
                y regulaciones aplicables.
              </p>

              <h2 className="text-2xl font-serif text-gray-900 mt-8 mb-4">Uso de la Licencia</h2>
              <p>
                Se le concede permiso para acceder y utilizar temporalmente nuestro sitio web de manera personal y no
                comercial.
              </p>

              <h2 className="text-2xl font-serif text-gray-900 mt-8 mb-4">Exención de Responsabilidad</h2>
              <p>
                La información proporcionada en este sitio web es solo para fines informativos generales. No constituye
                asesoramiento legal y no debe considerarse como tal.
              </p>

              <h2 className="text-2xl font-serif text-gray-900 mt-8 mb-4">Limitaciones</h2>
              <p>
                En ningún caso el Dr. Guillermo Naum o sus proveedores serán responsables de cualquier daño que surja
                del uso o la incapacidad de usar los materiales en este sitio web.
              </p>

              <h2 className="text-2xl font-serif text-gray-900 mt-8 mb-4">Modificaciones</h2>
              <p>
                Nos reservamos el derecho de revisar estos términos de servicio en cualquier momento sin previo aviso.
              </p>

              <h2 className="text-2xl font-serif text-gray-900 mt-8 mb-4">Ley Aplicable</h2>
              <p>
                Estos términos y condiciones se rigen e interpretan de acuerdo con las leyes de la República Argentina.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

