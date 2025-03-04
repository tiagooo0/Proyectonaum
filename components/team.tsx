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
            <Card className="overflow-hidden border shadow-lg">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-2/5 h-[300px] md:h-auto">
                  <div className="h-full w-full">
                    <motion.img
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.4 }}
                      className="h-full w-full object-cover"
                      src={lawyer.image}
                      alt={lawyer.name}
                    />
                  </div>
                </div>
                <div className="w-full md:w-3/5">
                  <CardHeader className="pt-6 md:pt-8">
                    <CardTitle className="text-2xl md:text-3xl font-serif">{lawyer.name}</CardTitle>
                    <CardDescription className="text-lg font-medium text-primary">{lawyer.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-base leading-7 text-gray-600">{lawyer.bio}</p>

                    <div className="mt-6">
                      <h4 className="text-sm font-semibold text-gray-900">Formación Académica</h4>
                      <p className="mt-2 text-sm text-gray-600">{lawyer.education}</p>
                    </div>

                    <div className="mt-6">
                      <h4 className="text-sm font-semibold text-gray-900">Especialidades</h4>
                      <ul className="mt-2 space-y-2">
                        {lawyer.specialties.map((specialty) => (
                          <li key={specialty.name} className="flex items-center text-sm text-gray-600">
                            <specialty.icon className="h-4 w-4 mr-2 text-primary" />
                            {specialty.name}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8 flex items-center space-x-6">
                      <motion.a
                        href={lawyer.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-[#E1306C]"
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
                        className="text-gray-400 hover:text-[#1877F2]"
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
                        className="text-gray-400 hover:text-[#25D366]"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        title="WhatsApp"
                      >
                        <span className="sr-only">WhatsApp</span>
                        <MessageCircle className="h-5 w-5" />
                      </motion.a>
                      <motion.a
                        href={`mailto:${lawyer.social.email}`}
                        className="text-gray-400 hover:text-primary"
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
          </FadeIn>

        
        </div>
      </div>
    </section>
  )
}

