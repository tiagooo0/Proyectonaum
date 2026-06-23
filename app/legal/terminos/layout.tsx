import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Términos de Servicio",
  robots: { index: false, follow: true },
}

export default function TerminosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
