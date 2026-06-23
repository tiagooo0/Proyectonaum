"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { AnimatedText } from "@/components/ui/animated-text"
import { FadeIn } from "@/components/ui/fade-in"

const faqs = [
  {
    question: "¿Cómo puedo agendar una consulta inicial con un abogado en Jesús María?",
    answer:
      "Puede agendar una consulta inicial llamando al +54 9 3525 53-7118, enviando un correo a gnaum@coop5.com.ar o completando el formulario de contacto en nuestro sitio web. Las consultas iniciales tienen una duración aproximada de 30 minutos y son gratuitas para evaluar su caso. Atendemos en Calle Tucumán 747, Jesús María, Córdoba.",
  },
  {
    question: "¿Cuánto cobra un abogado penalista en Córdoba?",
    answer:
      "Nuestros honorarios varían según el tipo y la complejidad del caso. Ofrecemos tarifas por hora, honorarios fijos para servicios específicos como divorcios exprés o sucesiones, y en algunos casos acuerdos de honorarios contingentes. Durante la consulta inicial gratuita, discutiremos la estructura de honorarios más adecuada para su situación y le proporcionaremos un presupuesto claro y sin sorpresas.",
  },
  {
    question: "¿Cuánto tiempo tarda un divorcio exprés en Córdoba?",
    answer:
      "El divorcio exprés es un procedimiento simplificado que permite finalizar el matrimonio de manera rápida cuando existe mutuo acuerdo. En Córdoba, generalmente puede completarse en aproximadamente 2 a 3 meses, dependiendo de la carga de trabajo del juzgado. Este proceso requiere que ambos cónyuges estén de acuerdo en todos los términos, incluyendo la división de bienes y, si corresponde, la custodia de los hijos.",
  },
  {
    question: "¿Qué necesito para iniciar una sucesión en Argentina?",
    answer:
      "Para iniciar una sucesión en Argentina necesita el certificado de defunción del fallecido, el testamento (si existe), los documentos de los herederos (DNI, partidas de nacimiento o matrimonio), y la documentación de los bienes a heredar (escrituras, títulos de propiedad, cuentas bancarias). En el Estudio Jurídico Naum lo guiamos en todo el proceso sucesorio, tanto testamentario como intestado.",
  },
  {
    question: "¿Cómo denunciar acoso laboral en Argentina?",
    answer:
      "Para denunciar acoso laboral en Argentina, primero debe reunir pruebas como correos electrónicos, mensajes, testigos y registros médicos si sufrió daños a la salud. Luego puede presentar una denuncia ante el Ministerio de Trabajo de la Nación o iniciar una acción legal con un abogado laboral. En Jesús María y Colonia Caroya, nuestro estudio jurídico lo asesora y representa en todo el proceso.",
  },
  {
    question: "¿Qué documentos debo llevar a mi primera consulta con un abogado?",
    answer:
      "Para su primera consulta legal, es recomendable traer cualquier documento relevante relacionado con su caso, como contratos, correspondencia, documentos judiciales, denuncias policiales o cualquier otra evidencia. También es útil preparar una cronología de los eventos y una lista de preguntas. Esto nos ayudará a proporcionar una evaluación más precisa de su situación legal.",
  },
  {
    question: "¿Puedo comunicarme directamente con mi abogado cuando tenga preguntas?",
    answer:
      "Sí, la comunicación directa con su abogado es una prioridad en nuestro estudio jurídico. El Dr. Guillermo Naum estará disponible para discusiones sustantivas y para abordar sus inquietudes. Proporcionamos múltiples canales de comunicación (WhatsApp, teléfono, email) y nos esforzamos por responder a todas las consultas dentro de las 24 horas hábiles.",
  },
  {
    question: "¿Cuánto cuesta una sucesión en Córdoba Argentina?",
    answer:
      "El costo de una sucesión en Córdoba varía según la complejidad del patrimonio, si existe testamento y si hay conflictos entre los herederos. Incluye honorarios profesionales, tasas judiciales y gastos de inscripción. En el Estudio Jurídico Naum ofrecemos presupuestos claros y transparentes. Contáctenos para una evaluación gratuita de su caso de sucesión.",
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <AnimatedText
            text="Preguntas Frecuentes"
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl justify-center"
          />
          <FadeIn delay={0.2}>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Encuentre respuestas a preguntas comunes sobre nuestros servicios legales y procesos.
            </p>
          </FadeIn>
        </div>
        <FadeIn delay={0.3}>
          <div className="mx-auto mt-16 max-w-3xl">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border rounded-xl px-6 bg-white shadow-sm hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left text-base font-medium hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

