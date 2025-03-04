"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { Menu, X, Phone, ChevronDown, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Logo from "@/components/logo"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

const navigation = [
  { name: "Inicio", href: "/" },
  {
    name: "Áreas de Práctica",
    href: "/#services",
    dropdown: [
      {
        name: "Defensas Penales",
        href: "/servicios/defensas-penales",
        description: "Representación legal especializada en casos penales",
      },
      {
        name: "Defensas Laborales",
        href: "/servicios/defensas-laborales",
        description: "Protección de sus derechos laborales",
      },
      {
        name: "Sucesiones",
        href: "/servicios/sucesiones",
        description: "Gestión integral de procesos sucesorios",
      },
      {
        name: "Divorcios Exprés",
        href: "/servicios/divorcios-express",
        description: "Trámites de divorcio ágiles y eficientes",
      },
    ],
  },
  { name: "Sobre Mí", href: "/#about" },
  { name: "Testimonios", href: "/#testimonials" },
  { name: "Contacto", href: "/contacto" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Function to handle navigation to sections on the home page
  const handleSectionNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()

    // If we're already on the home page, just scroll to the section
    if (pathname === "/") {
      const sectionId = href.split("#")[1]
      if (sectionId) {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      } else {
        // If no section ID (just "/"), scroll to top
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
    } else {
      // If we're on another page, navigate to home page with the hash
      router.push(href)
    }

    // Close mobile menu if open
    if (mobileMenuOpen) {
      setMobileMenuOpen(false)
    }
  }

  // Function to handle home navigation (logo or "Inicio" click)
  const handleHomeNavigation = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    if (pathname === "/") {
      // If already on home page, just scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      // If on another page, navigate to home
      router.push("/")
    }

    // Close mobile menu if open
    if (mobileMenuOpen) {
      setMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" onClick={handleHomeNavigation} className="flex items-center gap-x-3">
            <Logo className="h-12 w-12" />
            <div className="hidden sm:flex flex-col">
              <div className="text-lg font-serif text-gray-900">Dr. Guillermo Naum</div>
              <div className="text-sm text-primary/90 font-medium tracking-wide">ABOGADO</div>
            </div>
          </a>
        </div>
        <div className="flex lg:hidden">
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(true)} className="text-gray-700">
            <span className="sr-only">Abrir menú</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </Button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) =>
            item.dropdown ? (
              <DropdownMenu key={item.name}>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center text-sm font-medium leading-6 text-gray-900 hover:text-primary transition-colors">
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[280px]">
                  {item.dropdown.map((dropdownItem) => (
                    <DropdownMenuItem key={dropdownItem.name} asChild>
                      <Link href={dropdownItem.href} className="flex flex-col py-2">
                        <span className="font-medium">{dropdownItem.name}</span>
                        <span className="text-xs text-muted-foreground mt-0.5">{dropdownItem.description}</span>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : item.name === "Inicio" ? (
              <a
                key={item.name}
                href="/"
                onClick={handleHomeNavigation}
                className="text-sm font-medium leading-6 text-gray-900 hover:text-primary transition-colors cursor-pointer"
              >
                {item.name}
              </a>
            ) : item.href.includes("#") ? (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleSectionNavigation(e, item.href)}
                className="text-sm font-medium leading-6 text-gray-900 hover:text-primary transition-colors cursor-pointer"
              >
                {item.name}
              </a>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium leading-6 text-gray-900 hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ),
          )}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-6">
          <a
            href="tel:+5493525537118"
            className="flex items-center text-sm font-medium text-gray-900 hover:text-primary transition-colors"
          >
            <Phone className="mr-2 h-4 w-4" />
            +54 9 3525 53-7118
          </a>
          <Button className="shadow-md hover:shadow-lg transition-shadow" asChild>
            <a
              href="https://shorturl.at/tTnAZ"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </Button>
        </div>
      </nav>
      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
            >
              <div className="flex items-center justify-between mb-6">
                <a
                  href="/"
                  onClick={(e) => {
                    handleHomeNavigation(e)
                    setMobileMenuOpen(false)
                  }}
                  className="flex items-center gap-x-3"
                >
                  <Logo className="h-10 w-10" />
                  <div className="flex flex-col">
                    <div className="text-base font-serif text-gray-900">Dr. Guillermo Naum</div>
                    <div className="text-xs text-primary/90 font-medium tracking-wide">ABOGADO</div>
                  </div>
                </a>
                <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)} className="text-gray-700">
                  <span className="sr-only">Cerrar menú</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </Button>
              </div>
              <div className="flow-root">
                <div className="divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <div key={item.name}>
                        {item.dropdown ? (
                          <>
                            <div className="font-medium text-gray-900 mb-2">{item.name}</div>
                            <div className="ml-4 space-y-2">
                              {item.dropdown.map((dropdownItem) => (
                                <motion.div key={dropdownItem.name} whileHover={{ x: 4 }} whileTap={{ scale: 0.98 }}>
                                  <Link
                                    href={dropdownItem.href}
                                    className="block rounded-lg py-2 pl-3 pr-3 text-sm text-gray-900 hover:bg-gray-50"
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    <div className="font-medium">{dropdownItem.name}</div>
                                    <div className="text-xs text-gray-500 mt-0.5">{dropdownItem.description}</div>
                                  </Link>
                                </motion.div>
                              ))}
                            </div>
                          </>
                        ) : item.name === "Inicio" ? (
                          <motion.div whileHover={{ x: 4 }} whileTap={{ scale: 0.98 }}>
                            <a
                              href="/"
                              onClick={(e) => {
                                handleHomeNavigation(e)
                                setMobileMenuOpen(false)
                              }}
                              className="block rounded-lg py-2 pl-3 pr-3 text-base font-medium text-gray-900 hover:bg-gray-50 cursor-pointer"
                            >
                              {item.name}
                            </a>
                          </motion.div>
                        ) : item.href.includes("#") ? (
                          <motion.div whileHover={{ x: 4 }} whileTap={{ scale: 0.98 }}>
                            <a
                              href={item.href}
                              onClick={(e) => {
                                handleSectionNavigation(e, item.href)
                                setMobileMenuOpen(false)
                              }}
                              className="block rounded-lg py-2 pl-3 pr-3 text-base font-medium text-gray-900 hover:bg-gray-50 cursor-pointer"
                            >
                              {item.name}
                            </a>
                          </motion.div>
                        ) : (
                          <motion.div whileHover={{ x: 4 }} whileTap={{ scale: 0.98 }}>
                            <Link
                              href={item.href}
                              className="block rounded-lg py-2 pl-3 pr-3 text-base font-medium text-gray-900 hover:bg-gray-50"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {item.name}
                            </Link>
                          </motion.div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="py-6">
                    <motion.div whileHover={{ x: 4 }} whileTap={{ scale: 0.98 }}>
                      <a
                        href="tel:+5493525537118"
                        className="flex items-center mb-4 -mx-3 rounded-lg px-3 py-2.5 text-base font-medium text-gray-900 hover:bg-gray-50"
                      >
                        <Phone className="mr-3 h-5 w-5 text-gray-400" />
                        +54 9 3525 53-7118
                      </a>
                    </motion.div>
                    <Button className="w-full shadow-md" asChild>
                      <a
                        href="https://shorturl.at/tTnAZ"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <MessageCircle className="h-5 w-5" />
                        WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}

