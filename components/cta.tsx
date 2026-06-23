import { Button } from "@/components/ui/button"
import { MessageCircle, Phone, ArrowRight } from "lucide-react"
import { FadeIn } from "@/components/ui/fade-in"

export default function CTA() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary to-primary/90" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="mx-auto max-w-2xl text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">¿Listo para Discutir su Caso?</h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-lg leading-8 text-primary-foreground/90">
              Agende una consulta con nuestro equipo legal para explorar cómo podemos ayudarle a resolver sus desafíos
              legales.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6">
              <Button size="lg" variant="secondary" className="group shadow-lg hover:shadow-xl" asChild>
                <a
                  href="https://shorturl.at/tTnAZ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  Contactar por WhatsApp
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white/10 shadow-lg"
                asChild
              >
                <a href="tel:+5493525537118" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Llamar: +54 9 3525 53-7118
                </a>
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

