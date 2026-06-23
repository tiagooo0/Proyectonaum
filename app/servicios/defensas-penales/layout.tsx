import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Defensas Penales",
  description: "Abogado penalista en Jesús María y Colonia Caroya. Defensa especializada en delitos contra la propiedad, económicos y lesiones. Más de 37 años de experiencia. Consulta gratis.",
  openGraph: {
    title: "Defensas Penales | Estudio Jurídico Naum",
    description: "Abogado penalista en Jesús María. Defensa especializada con más de 37 años de experiencia.",
  },
}

export default function DefensasPenalesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
