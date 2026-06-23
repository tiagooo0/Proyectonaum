"use client"

import { useState } from "react"
import { MessageCircle, Instagram, Facebook, Mail, Phone, MapPin, Clock, Send, Loader2, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import { FadeIn } from "@/components/ui/fade-in"
import { AnimatedText } from "@/components/ui/animated-text"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

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
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" })
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent">("idle")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus("sending")
    const mailtoLink = `mailto:gnaum@coop5.com.ar?subject=Consulta de ${encodeURIComponent(formData.name)}&body=Nombre: ${encodeURIComponent(formData.name)}%0AEmail: ${encodeURIComponent(formData.email)}%0ATeléfono: ${encodeURIComponent(formData.phone)}%0A%0AMensaje:%0A${encodeURIComponent(formData.message)}`
    window.location.href = mailtoLink
    setTimeout(() => setFormStatus("sent"), 500)
  }

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
          <div className="space-y-8">
            <div className="rounded-2xl bg-gray-50 p-8">
              <h3 className="text-xl font-semibold text-gray-900">Envíenos un Mensaje</h3>
              {formStatus === "sent" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-6 p-6 bg-green-50 rounded-xl text-center"
                >
                  <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-3" />
                  <p className="text-lg font-medium text-green-800">Mensaje enviado con éxito</p>
                  <p className="text-sm text-green-600 mt-1">Gracias por contactarnos. Le responderemos a la brevedad.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <Input
                      placeholder="Nombre completo"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      type="email"
                      placeholder="Correo electrónico"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                    <Input
                      type="tel"
                      placeholder="Teléfono"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <Textarea
                    placeholder="Cuéntenos sobre su caso o consulta..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="resize-none"
                  />
                  <Button type="submit" size="lg" className="w-full group" disabled={formStatus === "sending"}>
                    {formStatus === "sending" ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar Mensaje
                        <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
            <div className="rounded-2xl bg-gray-50 p-8">
              <h3 className="text-xl font-semibold text-gray-900">Conecte con Nosotros</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {socialLinks.map((link, index) => (
                  <FadeIn key={link.name} delay={0.05 * index}>
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
          </div>
          <div className="space-y-8">
            <div className="rounded-2xl bg-gray-50 p-8">
              <h3 className="text-xl font-semibold text-gray-900">Nuestra Oficina</h3>
              <div className="mt-6 space-y-6">
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
            </div>
            <div className="rounded-2xl overflow-hidden h-72 shadow-lg ring-1 ring-gray-400/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.234!2d-64.095!3d-30.980!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDU4JzQ4LjAiUyA2NMKwMDUnNDIuMCJX!5e0!3m2!1ses!2sar!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación del Estudio Jurídico Naum"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

