import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de Privacidad",
  robots: { index: false, follow: true },
}

export default function PrivacidadLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
