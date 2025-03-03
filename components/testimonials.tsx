import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

const testimonials = [
  {
    content:
      "Guillermo me representó en un caso laboral complejo. Su conocimiento y dedicación fueron fundamentales para lograr un acuerdo favorable. Siempre me mantuvo informado y me explicó cada paso del proceso.",
    author: {
      name: "Carlos Rodríguez",
      role: "Cliente, Caso Laboral",
      image: "/placeholder.svg?height=100&width=100",
    },
  },
  {
    content:
      "Durante mi proceso de divorcio, Guillermo hizo que todo fuera mucho más sencillo de lo que esperaba. Su enfoque profesional y empático hizo una gran diferencia en un momento difícil.",
    author: {
      name: "Laura Martínez",
      role: "Cliente, Divorcio Exprés",
      image: "/placeholder.svg?height=100&width=100",
    },
  },
  {
    content:
      "La gestión de la sucesión de mi padre fue impecable. Guillermo manejó todos los aspectos legales con profesionalismo y sensibilidad, facilitando un proceso que parecía abrumador.",
    author: {
      name: "Miguel Sánchez",
      role: "Cliente, Sucesión",
      image: "/placeholder.svg?height=100&width=100",
    },
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Lo Que Dicen Mis Clientes</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            La satisfacción de mis clientes es mi mayor prioridad y el mejor testimonio de mi trabajo.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.author.name} className="flex flex-col justify-between">
              <CardContent className="pt-6">
                <div className="relative">
                  <svg
                    className="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-gray-200"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="relative mt-4 text-lg leading-relaxed text-gray-600">{testimonial.content}</p>
                </div>
              </CardContent>
              <CardFooter className="pt-4 pb-6 border-t">
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 border">
                    <AvatarImage src={testimonial.author.image} alt={testimonial.author.name} />
                    <AvatarFallback>{testimonial.author.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">{testimonial.author.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.author.role}</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

