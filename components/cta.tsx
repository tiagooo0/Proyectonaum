import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CTA() {
  return (
    <section className="py-24 bg-primary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">¿Listo para Discutir su Caso?</h2>
          <p className="mt-6 text-lg leading-8 text-primary-foreground/90">
            Agende una consulta con nuestro equipo legal para explorar cómo podemos ayudarle a resolver sus desafíos
            legales.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" variant="secondary" asChild>
              <Link href="#contact">Agendar una Consulta</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white/10"
              asChild
            >
              <Link href="tel:+5491123456789">Llamar: (11) 2345-6789</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

