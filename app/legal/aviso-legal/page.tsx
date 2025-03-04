import Header from "@/components/header"

export default function AvisoLegalPage() {
  return (
    <div className="bg-white">
      <Header />
      <main className="relative isolate min-h-screen">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-white" />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-3xl font-serif tracking-tight text-gray-900 sm:text-5xl">Aviso Legal</h1>
            <div className="mt-10 space-y-8 text-base leading-7 text-gray-600">
              <p>
                La información contenida en este sitio web es proporcionada únicamente con fines informativos generales.
              </p>

              <h2 className="text-2xl font-serif text-gray-900 mt-8 mb-4">Información General</h2>
              <p>
                Dr. Guillermo Naum
                <br />
                Tomo XX Folio XX C.P.A.C.F.
                <br />
                Matrícula Profesional: XXXXX
              </p>

              <h2 className="text-2xl font-serif text-gray-900 mt-8 mb-4">Advertencia Legal</h2>
              <p>
                Este sitio web no constituye un servicio de asesoramiento legal. La información proporcionada es de
                carácter general y no debe considerarse como asesoramiento legal específico para su caso particular.
              </p>

              <h2 className="text-2xl font-serif text-gray-900 mt-8 mb-4">Responsabilidad Profesional</h2>
              <p>
                La relación abogado-cliente solo se establece mediante un acuerdo formal por escrito. La simple visita a
                este sitio web no establece una relación profesional entre el visitante y el Dr. Guillermo Naum.
              </p>

              <h2 className="text-2xl font-serif text-gray-900 mt-8 mb-4">Confidencialidad</h2>
              <p>
                Si bien nos esforzamos por mantener la confidencialidad de todas las comunicaciones, no podemos
                garantizar la seguridad de la información enviada a través de este sitio web antes de establecer una
                relación formal abogado-cliente.
              </p>

              <h2 className="text-2xl font-serif text-gray-900 mt-8 mb-4">Jurisdicción</h2>
              <p>
                Este aviso legal se rige por las leyes de la República Argentina. Cualquier disputa relacionada con este
                sitio web estará sujeta a la jurisdicción exclusiva de los tribunales de la Ciudad de Cordoba.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

