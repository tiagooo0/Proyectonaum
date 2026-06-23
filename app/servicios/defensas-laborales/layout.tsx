import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Defensas Laborales",
  description: "Abogado laboral en Jesús María y Colonia Caroya. Especialista en despidos injustificados, acoso laboral, reclamos salariales y accidentes de trabajo. Consulta gratis.",
  openGraph: {
    title: "Defensas Laborales | Estudio Jurídico Naum",
    description: "Abogado laboral en Jesús María. Protegemos sus derechos laborales con experiencia.",
  },
}

export default function DefensasLaboralesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
