import Header from "@/components/header"

export default function PrivacidadPage() {
  return (
    <div className="bg-white">
      <Header />
      <main className="relative isolate min-h-screen">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-white" />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-3xl font-serif tracking-tight text-gray-900 sm:text-5xl">Política de Privacidad</h1>
            <div className="mt-10 space-y-8 text-base leading-7 text-gray-600">
              <p>
                Esta Política de Privacidad describe cómo se recopila, utiliza y comparte su información cuando visita
                nuestro sitio web.
              </p>

              <h2 className="text-2xl font-serif text-gray-900 mt-8 mb-4">Información que Recopilamos</h2>
              <p>
                Cuando visita nuestro sitio web, recopilamos automáticamente cierta información sobre su dispositivo,
                incluida información sobre su navegador web, dirección IP, zona horaria y algunas de las cookies que
                están instaladas en su dispositivo.
              </p>

              <h2 className="text-2xl font-serif text-gray-900 mt-8 mb-4">Cómo Utilizamos su Información</h2>
              <p>Utilizamos la información que recopilamos para:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Proporcionar, operar y mantener nuestro sitio web</li>
                <li>Mejorar, personalizar y expandir nuestro sitio web</li>
                <li>Comprender y analizar cómo utiliza nuestro sitio web</li>
                <li>Desarrollar nuevos productos, servicios, características y funcionalidades</li>
              </ul>

              <h2 className="text-2xl font-serif text-gray-900 mt-8 mb-4">Compartir su Información</h2>
              <p>No compartimos su información personal con terceros sin su consentimiento explícito.</p>

              <h2 className="text-2xl font-serif text-gray-900 mt-8 mb-4">Contacto</h2>
              <p>Si tiene alguna pregunta sobre nuestra Política de Privacidad, no dude en contactarnos.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

