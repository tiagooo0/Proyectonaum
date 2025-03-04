"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, FileQuestion } from "lucide-react"
import Logo from "@/components/logo"
import { motion } from "framer-motion"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 py-12 overflow-hidden">
      <div className="max-w-md w-full text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mx-auto"
        >
          <Link href="/" className="inline-block">
            <Logo className="h-16 w-16 mx-auto mb-4" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="flex justify-center mb-6">
            <div className="bg-gray-100 rounded-full p-4">
              <FileQuestion className="h-12 w-12 text-primary" />
            </div>
          </div>

          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">Página no encontrada</h1>

          <p className="text-lg text-gray-600 mb-8">
            Lo sentimos, la página que está buscando no existe o ha sido movida.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="gap-2">
              <Link href="/">
                <ArrowLeft className="h-4 w-4" />
                Volver al inicio
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contacto">Contactar</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

