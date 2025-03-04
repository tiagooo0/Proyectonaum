"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Linkedin, Twitter, Mail } from "lucide-react"
import { motion } from "framer-motion"
import { FadeIn } from "@/components/ui/fade-in"
import { AnimatedText } from "@/components/ui/animated-text"

const team = [
  {
    name: "Guillermo Naum",
    role: "Abogado Principal",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Especialista en derecho penal, laboral, sucesiones y divorcios con más de 15 años de experiencia.",
    education: "Abogado, Universidad de Buenos Aires",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "guillermo@naum.com",
    },
  },
  {
    name: "Ana Gómez",
    role: "Asociada, Derecho Laboral",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Especializada en conflictos laborales y negociaciones colectivas con amplia experiencia en el sector.",
    education: "Abogada, Universidad Nacional de La Plata",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "ana@naum.com",
    },
  },
  {
    name: "Martín López",
    role: "Asociado, Derecho Penal",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Ex fiscal con amplia experiencia en litigios penales y estrategias de defensa efectivas.",
    education: "Abogado, Universidad de Buenos Aires",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "martin@naum.com",
    },
  },
  {
    name: "Lucía Fernández",
    role: "Asistente Legal",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Coordinadora de casos y primera línea de contacto con clientes, con excelentes habilidades organizativas.",
    education: "Paralegal, Instituto Superior de Derecho",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "lucia@naum.com",
    },
  },
]

export default function Team() {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <AnimatedText
            text="Nuestro Equipo Legal"
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl justify-center"
          />
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Profesionales comprometidos con brindar el mejor asesoramiento legal y representación para nuestros
            clientes.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {team.map((person, index) => (
            <FadeIn key={person.name} delay={0.1 * index}>
              <motion.div whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Card className="flex flex-col h-full transition-all duration-300 hover:shadow-lg">
                  <CardHeader className="pb-0">
                    <div className="aspect-[4/5] overflow-hidden rounded-xl bg-gray-100">
                      <motion.img
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                        className="h-full w-full object-cover"
                        src={person.image || "/placeholder.svg"}
                        alt={person.name}
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6 flex-grow">
                    <CardTitle>{person.name}</CardTitle>
                    <CardDescription className="mt-1 font-medium text-primary">{person.role}</CardDescription>
                    <p className="mt-4 text-sm leading-6 text-gray-600">{person.bio}</p>
                    <p className="mt-4 text-sm italic text-gray-500">{person.education}</p>
                  </CardContent>
                  <CardFooter className="mt-auto pt-4">
                    <div className="flex space-x-4">
                      <motion.a
                        href={person.social.linkedin}
                        className="text-gray-400 hover:text-gray-500"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <span className="sr-only">LinkedIn</span>
                        <Linkedin className="h-5 w-5" />
                      </motion.a>
                      <motion.a
                        href={person.social.twitter}
                        className="text-gray-400 hover:text-gray-500"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <span className="sr-only">Twitter</span>
                        <Twitter className="h-5 w-5" />
                      </motion.a>
                      <motion.a
                        href={`mailto:${person.social.email}`}
                        className="text-gray-400 hover:text-gray-500"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <span className="sr-only">Email</span>
                        <Mail className="h-5 w-5" />
                      </motion.a>
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

