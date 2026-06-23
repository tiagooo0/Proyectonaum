"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Facebook, Mail, Instagram, Award, BookOpen, Scale, MessageCircle } from "lucide-react" // Fixed import for MessageCircle
import { motion } from "framer-motion"
import { FadeIn } from "@/components/ui/fade-in"
import { AnimatedText } from "@/components/ui/animated-text"

const lawyer = {
  name: "Dr. Guillermo Naum",
  role: "Abogado",
  image: "/guillermoescritorio.jpeg",
  bio: "Especialista en derecho penal, laboral, sucesiones y divorcios con más de 37 años de experiencia. Mi compromiso es brindar un servicio legal de excelencia, con un enfoque personalizado y humano para cada cliente.",
  education: "Abogado, Universidad Nacional de Córdoba",
  specialties: [
    { name: "Derecho Penal", icon: Scale },
    { name: "Derecho Laboral", icon: BookOpen },
    { name: "Mediación y Resolución de Conflictos", icon: Award },
  ],
  social: {
    instagram: "https://www.instagram.com/estudiojuridiconaum/",
    facebook: "https://www.facebook.com/profile.php?id=61573963161778",
    email: "gnaum@coop5.com.ar",
    whatsapp: "https://shorturl.at/tTnAZ",
  },
}

export default function Team() {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <AnimatedText
            text="Sobre el Abogado"
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl justify-center"
          />
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Conozca al profesional que estará a cargo de su caso, brindando asesoramiento legal personalizado y
            efectivo.
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Card className="overflow-hidden border-2 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-2/5 min-h-[300px] md:min-h-full relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent z-10" />
                    <motion.img
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.6 }}
                      className="h-full w-full object-cover"
                      src={lawyer.image}
                      alt={lawyer.name}
                    />
                  </div>
                  <div className="w-full md:w-3/5">
                    <CardHeader className="pt-6 md:pt-8">
                      <CardTitle className="text-2xl md:text-3xl font-serif">{lawyer.name}</CardTitle>
                      <CardDescription className="text-lg font-medium text-primary">{lawyer.role}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-base leading-7 text-gray-600">{lawyer.bio}</p>

                      <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                        <h4 className="text-sm font-semibold text-gray-900 flex items-center gap-2">
                          <BookOpen className="h-4 w-4 text-primary" />
                          Formación y Credenciales
                        </h4>
                        <p className="mt-2 text-sm text-gray-600">{lawyer.education}</p>
                        <ul className="mt-2 space-y-1.5 text-sm text-gray-600">
                          <li className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                            Matrícula Profesional 
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                            Colegio de Abogados de Córdoba
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                            Especialización en Derecho Penal y Laboral
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                            Mediación y Resolución de Conflictos
                          </li>
                        </ul>
                      </div>

                      <div className="mt-4">
                        <h4 className="text-sm font-semibold text-gray-900">Especialidades</h4>
                        <div className="mt-2 grid grid-cols-1 gap-2">
                          {lawyer.specialties.map((specialty) => (
                            <motion.div
                              key={specialty.name}
                              className="flex items-center text-sm text-gray-600 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                              whileHover={{ x: 4 }}
                            >
                              <specialty.icon className="h-4 w-4 mr-2 text-primary shrink-0" />
                              {specialty.name}
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-8 flex items-center space-x-6 pt-4 border-t">
                        <motion.a
                          href={lawyer.social.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-[#E1306C] transition-colors"
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          title="Instagram"
                        >
                          <span className="sr-only">Instagram</span>
                          <Instagram className="h-5 w-5" />
                        </motion.a>
                        <motion.a
                          href={lawyer.social.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-[#1877F2] transition-colors"
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          title="Facebook"
                        >
                          <span className="sr-only">Facebook</span>
                          <Facebook className="h-5 w-5" />
                        </motion.a>
                        <motion.a
                          href={lawyer.social.whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-[#25D366] transition-colors"
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          title="WhatsApp"
                        >
                          <span className="sr-only">WhatsApp</span>
                          <MessageCircle className="h-5 w-5" />
                        </motion.a>
                        <motion.a
                          href={`mailto:${lawyer.social.email}`}
                          className="text-gray-400 hover:text-primary transition-colors"
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          title="Email"
                        >
                          <span className="sr-only">Email</span>
                          <Mail className="h-5 w-5" />
                        </motion.a>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

