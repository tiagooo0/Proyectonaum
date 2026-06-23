import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Aviso Legal",
  robots: { index: false, follow: true },
}

export default function AvisoLegalLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
