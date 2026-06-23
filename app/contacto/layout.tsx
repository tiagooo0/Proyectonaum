import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contacte al Estudio Jurídico Naum en Jesús María, Córdoba. WhatsApp, teléfono, email y ubicación en Calle Tucumán 747. Consulta gratis.",
  openGraph: {
    title: "Contacto | Estudio Jurídico Naum",
    description: "Contacte al Dr. Guillermo Naum, abogado en Jesús María. Consulta gratis.",
  },
}

export default function ContactoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
