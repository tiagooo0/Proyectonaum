import Header from "@/components/header"

export default function BlogPage() {
  return (
    <div className="bg-white">
      <Header />
      <main className="relative isolate min-h-screen">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-white" />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-3xl font-serif tracking-tight text-gray-900 sm:text-5xl">Blog</h1>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              Próximamente encontrará aquí artículos y novedades sobre temas legales de interés.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

