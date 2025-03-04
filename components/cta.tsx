import { Button } from "@/components/ui/button"
import { MessageCircle, Phone } from "lucide-react"

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
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6">
            <Button size="lg" variant="secondary" asChild>
              <a
                href="https://shorturl.at/tTnAZ"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                Contactar por WhatsApp
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white/10"
              asChild
            >
              <a href="tel:+5493525537118" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Llamar: +54 9 3525 53-7118
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

