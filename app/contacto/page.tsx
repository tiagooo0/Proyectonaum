"use client"

import Header from "@/components/header"
import { Card, CardContent } from "@/components/ui/card"
import { Instagram, Facebook, Mail, Phone, MapPin, MessageCircle } from "lucide-react"
import Link from "next/link"
import { AnimatedText } from "@/components/ui/animated-text"
import { FadeIn } from "@/components/ui/fade-in"
import { motion } from "framer-motion"

const socialLinks = [
  {
    name: "WhatsApp",
    description: "Consultas rápidas y directas",
    icon: MessageCircle,
    href: "https://shorturl.at/tTnAZ",
    color: "bg-[#25D366]",
  },
  {
    name: "Instagram",
    description: "@estudiojuridiconaum",
    icon: Instagram,
    href: "https://www.instagram.com/estudiojuridiconaum/",
    color: "bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500",
  },
  {
    name: "Facebook",
    description: "Estudio Jurídico Naum",
    icon: Facebook,
    href: "https://www.facebook.com/profile.php?id=61573963161778",
    color: "bg-[#1877F2]",
  },
  {
    name: "Email",
    description: "gnaum@coop5.com.ar",
    icon: Mail,
    href: "mailto:gnaum@coop5.com.ar",
    color: "bg-gray-800",
  },
]

const contactInfo = [
  {
    name: "Teléfono",
    value: "+54 9 3525 53-7118",
    icon: Phone,
    href: "tel:+5493525537118",
  },
  {
    name: "Dirección",
    value: "Calle Tucumán 747, Jesús María",
    icon: MapPin,
    href: "https://maps.google.com/?q=Calle+Tucumán+747,+Jesús+María,+Córdoba,+Argentina",
  },
]

export default function ContactPage() {
  return (
    <div className="bg-white overflow-fix">
      <Header />
      <main className="relative isolate min-h-screen">
        {/* Background */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-white">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-white" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-32 sm:py-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <AnimatedText
              text="Contacto"
              className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl font-serif justify-start"
            />
            <FadeIn delay={0.2}>
              <p className="mt-6 text-xl leading-8 text-gray-600">
                Elija el medio de comunicación que prefiera para contactarnos. Estamos aquí para ayudarle.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.3}>
            <div className="mx-auto mt-16 grid max-w-2xl gap-8 lg:mx-0 lg:max-w-none">
              {/* Contact Information */}
              <div className="flex flex-wrap gap-4">
                {contactInfo.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="inline-flex items-center gap-x-2 rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
                  >
                    <item.icon className="h-5 w-5 text-gray-500" />
                    {item.value}
                  </Link>
                ))}
              </div>

              {/* Social Media Cards */}
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {socialLinks.map((item, index) => (
                  <FadeIn key={item.name} delay={0.1 * index}>
                    <motion.div whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                      <Link href={item.href} target="_blank" rel="noopener noreferrer">
                        <Card className="group overflow-hidden">
                          <CardContent className="p-6">
                            <div
                              className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg ${item.color} text-white shadow-lg transition-transform group-hover:scale-110`}
                            >
                              <item.icon className="h-6 w-6" />
                            </div>
                            <h3 className="font-serif text-xl text-gray-900">{item.name}</h3>
                            <p className="mt-2 text-sm text-gray-600">{item.description}</p>
                          </CardContent>
                        </Card>
                      </Link>
                    </motion.div>
                  </FadeIn>
                ))}
              </div>

              {/* Office Hours */}
              <div className="mt-8 rounded-2xl bg-gray-100 p-8">
                <h3 className="text-xl font-serif text-gray-900">Horario de Atención</h3>
                <dl className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <dt className="font-medium text-gray-900">Lunes a Viernes</dt>
                    <dd className="text-gray-600">9:00 a 12:00 y 17:00 a 20:00</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-gray-900">Sábados y Domingos</dt>
                    <dd className="text-gray-600">Cerrado</dd>
                  </div>
                </dl>
              </div>
            </div>
          </FadeIn>
        </div>
      </main>
    </div>
  )
}

