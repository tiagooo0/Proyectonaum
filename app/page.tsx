"use client"

import { useEffect } from "react"
import Hero from "@/components/hero"
import Services from "@/components/services"
import About from "@/components/about"
import Testimonials from "@/components/testimonials"
import Team from "@/components/team"
import Contact from "@/components/contact"
import FAQ from "@/components/faq"
import CTA from "@/components/cta"
import OfficeShowcase from "@/components/office-showcase"
import { scrollToSection } from "@/lib/scroll-to-section"

export default function Home() {
  useEffect(() => {
    // Scroll to section if hash is present in URL
    scrollToSection()
  }, [])

  return (
    <main className="min-h-screen overflow-fix">
      <Hero />
      <Services />
      <OfficeShowcase />
      <About />
      <Testimonials />
      <Team />
      <Contact />
      <FAQ />
      <CTA />
    </main>
  )
}

