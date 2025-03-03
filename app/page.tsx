import Hero from "@/components/hero"
import Services from "@/components/services"
import About from "@/components/about"
import Testimonials from "@/components/testimonials"
import Team from "@/components/team"
import Contact from "@/components/contact"
import FAQ from "@/components/faq"
import CTA from "@/components/cta"
import OfficeShowcase from "@/components/office-showcase"

export default function Home() {
  return (
    <main className="min-h-screen">
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

