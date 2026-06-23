import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Star } from "lucide-react"
import { FadeIn } from "@/components/ui/fade-in"
import { motion } from "framer-motion"

const testimonials = [
  {
    content:
      "Guillermo me representó en un caso laboral complejo. Su conocimiento y dedicación fueron fundamentales para lograr un acuerdo favorable. Siempre me mantuvo informado y me explicó cada paso del proceso.",
    rating: 5,
    author: {
      name: "Carlos Rodríguez",
      role: "Cliente, Caso Laboral",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
  },
  {
    content:
      "Durante mi proceso de divorcio, Guillermo hizo que todo fuera mucho más sencillo de lo que esperaba.",
    rating: 5,
    author: {
      name: "Laura Martínez",
      role: "Cliente, Divorcio Exprés",
      image: "https://randomuser.me/api/portraits/women/67.jpg",
    },
  },
  {
    content:
      "La gestión de la sucesión de mi padre fue impecable. Guillermo manejó todos los aspectos legales con profesionalismo y sensibilidad, facilitando todo.",
    rating: 5,
    author: {
      name: "Miguel Sánchez",
      role: "Cliente, Sucesión",
      image: "https://randomuser.me/api/portraits/men/67.jpg",
    },
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gray-50 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Lo Que Dicen Mis Clientes</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            La satisfacción de mis clientes es mi mayor prioridad y el mejor testimonio de mi trabajo.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={testimonial.author.name} delay={0.1 * index}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <Card className="flex flex-col justify-between h-full border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-xl">
                  <CardContent className="pt-6">
                    <div className="relative">
                      <svg
                        className="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-primary/10"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                      >
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                      <p className="relative mt-4 text-lg leading-relaxed text-gray-600">{testimonial.content}</p>
                    </div>
                    <div className="mt-4 flex gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="pt-4 pb-6 border-t">
                    <div className="flex items-center">
                      <Avatar className="h-10 w-10 border-2 border-primary/10">
                        <AvatarImage src={testimonial.author.image} alt={testimonial.author.name} />
                        <AvatarFallback className="bg-primary/5 text-primary">
                          {testimonial.author.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">{testimonial.author.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.author.role}</p>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

