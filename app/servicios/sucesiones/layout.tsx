import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sucesiones",
  description: "Abogado especialista en sucesiones en Jesús María y Córdoba. Gestión integral de herencias, testamentos, declaratoria de herederos y partición de bienes. Consulta gratis.",
  openGraph: {
    title: "Sucesiones | Estudio Jurídico Naum",
    description: "Abogado especialista en sucesiones en Jesús María y Córdoba. Gestión integral de herencias.",
  },
}

export default function SucesionesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
