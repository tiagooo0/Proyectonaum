import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Divorcios Exprés",
  description: "Divorcio exprés en Jesús María y Córdoba. Proceso ágil de 2 a 3 meses con mutuo acuerdo. División de bienes, custodia y convenio regulador. Consulta gratis.",
  openGraph: {
    title: "Divorcios Exprés | Estudio Jurídico Naum",
    description: "Divorcio exprés en Jesús María y Córdoba. Proceso ágil de 2 a 3 meses.",
  },
}

export default function DivorciosExpressLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
