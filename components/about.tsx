import { CheckCircle, Award, Users, BookOpen, Scale } from "lucide-react"

const features = [
  {
    name: "Enfoque Personalizado",
    description:
      "Cada caso es único. Analizo detalladamente su situación para ofrecer soluciones legales adaptadas a sus necesidades específicas.",
  },
  {
    name: "Experiencia Comprobada",
    description:
      "Más de 37 años de trayectoria profesional en diversas áreas del derecho, con resultados favorables para mis clientes.",
  },
  {
    name: "Comunicación Clara",
    description:
      "Mantengo a mis clientes informados en cada etapa del proceso, explicando conceptos legales complejos de manera comprensible.",
  },
  {
    name: "Compromiso y Dedicación",
    description:
      "Me comprometo plenamente con cada caso, dedicando el tiempo y recursos necesarios para lograr los mejores resultados posibles.",
  },
]

const stats = [
  { name: "Años de Experiencia", value: "37+", icon: Award },
  { name: "Casos Exitosos", value: "500+", icon: Scale },
  { name: "Clientes Satisfechos", value: "400+", icon: Users },
  { name: "Áreas de Práctica", value: "4", icon: BookOpen },
]

export default function About() {
  return (
    <section id="about" className="py-24 overflow-hidden bg-white scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-primary">Sobre Mí</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Compromiso con la Excelencia Legal
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Soy Guillermo Naum, abogado especializado en defensas penales, laborales, sucesiones y divorcios exprés.
                Mi objetivo es brindar asesoramiento legal de calidad, con un enfoque humano y comprometido con los
                intereses de mis clientes.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <CheckCircle className="absolute left-1 top-1 h-5 w-5 text-primary" aria-hidden="true" />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-64 -right-64 opacity-50 blur-3xl" aria-hidden="true">
              <div
                className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-primary/20 to-primary/10"
                style={{
                  clipPath:
                    "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
                }}
              />
            </div>
            <div className="relative mx-auto w-full max-w-lg sm:w-[57rem] md:-ml-4 lg:ml-0">
              <div className="rounded-2xl shadow-xl ring-1 ring-gray-400/10 overflow-hidden bg-gradient-to-br from-primary/5 via-primary/10 to-gray-100 p-8">
                <div className="aspect-[4/3] rounded-xl bg-white/80 backdrop-blur-sm p-8 flex items-center justify-center">
                  <div className="text-center">
                    <Scale className="h-16 w-16 text-primary mx-auto mb-4" />
                    <p className="text-lg font-serif text-gray-700">Dr. Guillermo Naum</p>
                    <p className="text-sm text-gray-500">Abogado - Mat. Profesional</p>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  {stats.map((stat) => (
                    <div key={stat.name} className="text-center p-3 rounded-lg bg-white/60 backdrop-blur-sm">
                      <stat.icon className="h-5 w-5 text-primary mx-auto mb-1" />
                      <div className="text-xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-xs text-gray-500">{stat.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

