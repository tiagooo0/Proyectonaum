import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    default: "Servicios Legales | Estudio Jurídico Naum",
    template: "%s | Estudio Jurídico Naum",
  },
}

export default function ServiciosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
