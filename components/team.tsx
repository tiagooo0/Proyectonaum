import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Linkedin, Twitter, Mail } from "lucide-react"

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
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Nuestro Equipo Legal</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Profesionales comprometidos con brindar el mejor asesoramiento legal y representación para nuestros
            clientes.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {team.map((person) => (
            <Card key={person.name} className="flex flex-col">
              <CardHeader className="pb-0">
                <div className="aspect-[4/5] overflow-hidden rounded-xl bg-gray-100">
                  <img
                    className="h-full w-full object-cover"
                    src={person.image || "/placeholder.svg"}
                    alt={person.name}
                  />
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <CardTitle>{person.name}</CardTitle>
                <CardDescription className="mt-1 font-medium text-primary">{person.role}</CardDescription>
                <p className="mt-4 text-sm leading-6 text-gray-600">{person.bio}</p>
                <p className="mt-4 text-sm italic text-gray-500">{person.education}</p>
              </CardContent>
              <CardFooter className="mt-auto pt-4">
                <div className="flex space-x-4">
                  <a href={person.social.linkedin} className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">LinkedIn</span>
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href={person.social.twitter} className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Twitter</span>
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href={`mailto:${person.social.email}`} className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Email</span>
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

