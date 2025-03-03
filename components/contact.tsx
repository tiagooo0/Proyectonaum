"use client"

import { MessageCircle, Instagram, Facebook, Mail, Phone, Linkedin, MapPin, Clock } from "lucide-react"
import { motion } from "framer-motion"
import { FadeIn } from "@/components/ui/fade-in"
import { AnimatedText } from "@/components/ui/animated-text"

const socialLinks = [
  {
    name: "WhatsApp",
    description: "Respuesta inmediata",
    icon: MessageCircle,
    href: "https://wa.me/5491123456789",
    color: "bg-[#25D366]",
    hoverColor: "hover:bg-[#20BA5A]",
  },
  {
    name: "Instagram",
    description: "@guillermonautm",
    icon: Instagram,
    href: "https://instagram.com/guillermonautm",
    color: "bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500",
    hoverColor: "hover:from-purple-600 hover:via-pink-600 hover:to-orange-600",
  },
  {
    name: "Facebook",
    description: "/guillermonautm",
    icon: Facebook,
    href: "https://facebook.com/guillermonautm",
    color: "bg-[#1877F2]",
    hoverColor: "hover:bg-[#0C63D4]",
  },
  {
    name: "Email",
    description: "info@guillermonautm.com",
    icon: Mail,
    href: "mailto:info@guillermonautm.com",
    color: "bg-primary",
    hoverColor: "hover:bg-primary/90",
  },
  {
    name: "Teléfono",
    description: "(11) 2345-6789",
    icon: Phone,
    href: "tel:+5491123456789",
    color: "bg-gray-900",
    hoverColor: "hover:bg-gray-800",
  },
  {
    name: "LinkedIn",
    description: "/in/guillermonautm",
    icon: Linkedin,
    href: "https://linkedin.com/in/guillermonautm",
    color: "bg-[#0A66C2]",
    hoverColor: "hover:bg-[#004182]",
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
                    Av. Corrientes 1234, Piso 5, Oficina B<br />
                    Ciudad Autónoma de Buenos Aires, C1043AAZ
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
                  <p className="mt-1 text-gray-600">(11) 2345-6789</p>
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
                  <p className="mt-1 text-gray-600">info@guillermonautm.com</p>
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
                    Lunes a Viernes: 9:00 a 18:00
                    <br />
                    Sábados: 10:00 a 13:00
                    <br />
                    Domingos: Cerrado
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

