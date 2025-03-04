import type React from "react"
import "@/app/globals.css"
import { Inter, Playfair_Display } from "next/font/google"
import Footer from "@/components/footer"
import WhatsAppFAB from "@/components/whatsapp-fab"
import { ScrollToTop } from "@/components/scroll-to-top"
import type { Metadata, Viewport } from "next"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Estudio Jurídico Naum",
  description:
    "Abogado especializado en defensas penales,abogado,abogado jesus maria,  jesus maria, colonia caroya, abogado colonia caroya defensas laborales, sucesiones y divorcios exprés. Asesoramiento legal personalizado y efectivo.",
    icons: "/naumLogo.png",

}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`scroll-smooth ${inter.variable} ${playfair.variable}`}>
      <body className={`${inter.className} overflow-x-hidden`}>
        <ScrollToTop />
        {children}
        <WhatsAppFAB />
        <Footer />
      </body>
    </html>
  )
}



import './globals.css'