import type React from "react"
import "@/app/globals.css"
import { Inter, Playfair_Display } from "next/font/google"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppFAB from "@/components/whatsapp-fab"
import { ScrollToTop } from "@/components/scroll-to-top"
import { MobileCTABar } from "@/components/mobile-cta-bar"
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
  metadataBase: new URL("https://estudiojuridiconaum.com"),
  title: {
    default: "Estudio Jurídico Naum | Dr. Guillermo Naum - Abogado en Jesús María",
    template: "%s | Estudio Jurídico Naum",
  },
  description:
    "Abogado especializado en defensas penales, laborales, sucesiones y divorcios exprés en Jesús María y Colonia Caroya. Asesoramiento legal personalizado con más de 37 años de experiencia.",
  keywords: ["abogado", "Jesús María", "defensas penales", "defensas laborales", "sucesiones", "divorcios", "Colonia Caroya", "estudio jurídico", "Guillermo Naum"],
  authors: [{ name: "Dr. Guillermo Naum" }],
  icons: "/naumLogo.png",
  openGraph: {
    title: "Estudio Jurídico Naum | Dr. Guillermo Naum",
    description: "Abogado especializado en defensas penales, laborales, sucesiones y divorcios exprés. Más de 37 años de experiencia.",
    url: "https://estudiojuridiconaum.com",
    siteName: "Estudio Jurídico Naum",
    locale: "es_AR",
    type: "website",
    images: [{ url: "/naumLogo.png", width: 512, height: 512 }],
  },
  twitter: {
    card: "summary",
    title: "Estudio Jurídico Naum",
    description: "Abogado especializado en defensas penales, laborales, sucesiones y divorcios exprés.",
    images: ["/naumLogo.png"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#8B1A1A",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LegalService", "LocalBusiness"],
    "@id": "https://estudiojuridiconaum.com",
    name: "Estudio Jurídico Naum - Dr. Guillermo Naum",
    description: "Abogado especializado en defensas penales, laborales, sucesiones y divorcios exprés en Jesús María y Colonia Caroya. Más de 37 años de experiencia.",
    url: "https://estudiojuridiconaum.com",
    telephone: "+5493525537118",
    email: "gnaum@coop5.com.ar",
    image: "https://estudiojuridiconaum.com/naumLogo.png",
    priceRange: "$$",
    foundingDate: "1987",
    numberOfEmployees: { "@type": "QuantitativeValue", minValue: 1, maxValue: 3 },
    founder: {
      "@type": "Person",
      name: "Guillermo Naum",
      honorificPrefix: "Dr.",
      jobTitle: "Abogado",
      knowsAbout: ["Derecho Penal", "Derecho Laboral", "Sucesiones", "Divorcios"],
      alumniOf: "Universidad Nacional de Córdoba",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Calle Tucumán 747",
      addressLocality: "Jesús María",
      addressRegion: "Córdoba",
      postalCode: "X5220",
      addressCountry: "AR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -30.980,
      longitude: -64.095,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "12:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "17:00",
        closes: "20:00",
      },
    ],
    sameAs: [
      "https://www.instagram.com/estudiojuridiconaum/",
      "https://www.facebook.com/profile.php?id=61573963161778",
    ],
    areaServed: [
      { "@type": "City", name: "Jesús María", sameAs: "https://en.wikipedia.org/wiki/Jesús_María,_Córdoba" },
      { "@type": "City", name: "Colonia Caroya", sameAs: "https://en.wikipedia.org/wiki/Colonia_Caroya" },
      { "@type": "AdministrativeArea", name: "Córdoba", sameAs: "https://en.wikipedia.org/wiki/Córdoba_Province" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios Legales",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Defensas Penales", description: "Representación legal especializada en casos penales" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Defensas Laborales", description: "Protección de sus derechos laborales" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sucesiones", description: "Gestión integral de procesos sucesorios" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Divorcios Exprés", description: "Trámites de divorcio ágiles y eficientes" } },
      ],
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Carlos Rodríguez" },
        reviewRating: { "@type": "Rating", ratingValue: "5" },
        reviewBody: "Su conocimiento y dedicación fueron fundamentales para lograr un acuerdo favorable.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Laura Martínez" },
        reviewRating: { "@type": "Rating", ratingValue: "5" },
        reviewBody: "Su enfoque profesional y empático hizo una gran diferencia en un momento difícil.",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "3",
    },
  }

  return (
    <html lang="es" className={`scroll-smooth ${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} overflow-x-hidden`}>
        <ScrollToTop />
        <Header />
        {children}
        <WhatsAppFAB />
        <Footer />
        <MobileCTABar />
      </body>
    </html>
  )
}