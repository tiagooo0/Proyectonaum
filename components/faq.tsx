"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿Cómo puedo agendar una consulta inicial?",
    answer:
      "Puede agendar una consulta inicial llamando a nuestro teléfono, enviando un correo electrónico o completando el formulario de contacto en nuestro sitio web. Las consultas iniciales tienen una duración aproximada de 30 minutos y son gratuitas para evaluar su caso.",
  },
  {
    question: "¿Cuáles son sus honorarios?",
    answer:
      "Nuestros honorarios varían según el tipo de caso. Ofrecemos tarifas por hora, honorarios fijos para servicios específicos y, en algunos casos, acuerdos de honorarios contingentes. Durante la consulta inicial, discutiremos la estructura de honorarios más adecuada para su situación y le proporcionaremos un presupuesto claro.",
  },
  {
    question: "¿Cuánto tiempo tomará resolver mi caso?",
    answer:
      "El tiempo para resolver asuntos legales varía significativamente según la complejidad del caso, los calendarios judiciales y si se puede llegar a un acuerdo. Los asuntos simples pueden resolverse en semanas, mientras que los litigios complejos podrían llevar meses o años. Le proporcionaremos un cronograma realista basado en nuestra experiencia con casos similares.",
  },
  {
    question: "¿Qué es un divorcio exprés y cuánto tiempo toma?",
    answer:
      "El divorcio exprés es un procedimiento simplificado de divorcio que permite finalizar el matrimonio de manera más rápida cuando existe mutuo acuerdo entre las partes. En general, puede completarse en aproximadamente 2-3 meses, dependiendo de la carga de trabajo del juzgado. Este proceso requiere que ambos cónyuges estén de acuerdo en todos los términos, incluyendo la división de bienes y, si corresponde, la custodia de los hijos.",
  },
  {
    question: "¿Qué documentos debo llevar a mi primera consulta?",
    answer:
      "Para su primera consulta, es recomendable traer cualquier documento relevante relacionado con su caso, como contratos, correspondencia, documentos judiciales, denuncias policiales o cualquier otra evidencia. También es útil preparar una cronología de los eventos y una lista de preguntas que desee discutir. Esto nos ayudará a proporcionar una evaluación más precisa de su situación.",
  },
  {
    question: "¿Puedo comunicarme directamente con mi abogado cuando tenga preguntas?",
    answer:
      "Sí, la comunicación directa con su abogado es una prioridad en nuestro bufete. Aunque los asistentes legales pueden ayudar con ciertos aspectos de su caso, su abogado estará disponible para discusiones sustantivas y para abordar sus inquietudes. Proporcionamos múltiples canales de comunicación y nos esforzamos por responder a todas las consultas dentro de las 24 horas hábiles.",
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Preguntas Frecuentes</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Encuentre respuestas a preguntas comunes sobre nuestros servicios legales y procesos.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

