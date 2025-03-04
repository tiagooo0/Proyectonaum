"use client"

import { MessageCircle, Instagram, Facebook, Mail, Phone, MapPin, Clock } from "lucide-react"
import { motion } from "framer-motion"
import { FadeIn } from "@/components/ui/fade-in"
import { AnimatedText } from "@/components/ui/animated-text"

const socialLinks = [
  {
    name: "WhatsApp",
    description: "Respuesta inmediata",
    icon: MessageCircle,
    href: "https://shorturl.at/tTnAZ",
    color: "bg-[#25D366]",
    hoverColor: "hover:bg-[#20BA5A]",
  },
  {
    name: "Instagram",
    description: "@estudiojuridiconaum",
    icon: Instagram,
    href: "https://www.instagram.com/estudiojuridiconaum/",
    color: "bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500",
    hoverColor: "hover:from-purple-600 hover:via-pink-600 hover:to-orange-600",
  },
  {
    name: "Facebook",
    description: "Estudio Jurídico Naum",
    icon: Facebook,
    href: "https://www.facebook.com/profile.php?id=61573963161778",
    color: "bg-[#1877F2]",
    hoverColor: "hover:bg-[#0C63D4]",
  },
  {
    name: "Email",
    description: "gnaum@coop5.com.ar",
    icon: Mail,
    href: "mailto:gnaum@coop5.com.ar",
    color: "bg-primary",
    hoverColor: "hover:bg-primary/90",
  },
  {
    name: "Teléfono",
    description: "+54 9 3525 53-7118",
    icon: Phone,
    href: "tel:+5493525537118",
    color: "bg-gray-900",
    hoverColor: "hover:bg-gray-800",
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <AnimatedText
            text="Contáctenos"
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl justify-center"
          />
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Comuníquese con nosotros para discutir sus necesidades legales o agendar una consulta.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="rounded-2xl bg-gray-50 p-8">
            <h3 className="text-xl font-semibold text-gray-900">Conecte con Nosotros</h3>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {socialLinks.map((link, index) => (
                <FadeIn key={link.name} delay={0.1 * index}>
                  <motion.a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center gap-4 rounded-xl ${link.color} ${link.hoverColor} p-4 transition-all duration-300 hover:scale-105 hover:shadow-lg`}
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className="rounded-lg bg-white/10 p-3"
                      whileHover={{ rotate: 8 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <link.icon className="h-6 w-6 text-white" />
                    </motion.div>
                    <div>
                      <p className="font-medium text-white">{link.name}</p>
                      <p className="text-sm text-white/90">{link.description}</p>
                    </div>
                  </motion.a>
                </FadeIn>
              ))}
            </div>
          </div>
          <div className="rounded-2xl bg-gray-50 p-8">
            <h3 className="text-xl font-semibold text-gray-900">Nuestra Oficina</h3>
            <div className="mt-8 space-y-6">
              <motion.div
                className="flex gap-4"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <MapPin className="h-6 w-6 text-primary shrink-0" />
                <div>
                  <h4 className="text-base font-medium text-gray-900">Dirección</h4>
                  <p className="mt-1 text-gray-600">
                    Calle Tucumán 747
                    <br />
                    Jesús María, Córdoba
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="flex gap-4"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Phone className="h-6 w-6 text-primary shrink-0" />
                <div>
                  <h4 className="text-base font-medium text-gray-900">Teléfono</h4>
                  <p className="mt-1 text-gray-600">+54 9 3525 53-7118</p>
                </div>
              </motion.div>
              <motion.div
                className="flex gap-4"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Mail className="h-6 w-6 text-primary shrink-0" />
                <div>
                  <h4 className="text-base font-medium text-gray-900">Correo Electrónico</h4>
                  <p className="mt-1 text-gray-600">gnaum@coop5.com.ar</p>
                </div>
              </motion.div>
              <motion.div
                className="flex gap-4"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Clock className="h-6 w-6 text-primary shrink-0" />
                <div>
                  <h4 className="text-base font-medium text-gray-900">Horario de Atención</h4>
                  <p className="mt-1 text-gray-600">
                    Lunes a Viernes: 9:00 a 12:00 y 17:00 a 20:00
                    <br />
                    Sábados y Domingos: Cerrado
                  </p>
                </div>
              </motion.div>
            </div>
            <div className="mt-8 rounded-lg overflow-hidden h-64 bg-gray-200">
              {/* Replace with actual map component or iframe */}
              <div className="w-full h-full flex items-center justify-center bg-gray-300">
                <p className="text-gray-600">Mapa Interactivo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

