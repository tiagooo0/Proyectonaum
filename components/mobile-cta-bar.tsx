"use client"

import { MessageCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function MobileCTABar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.6)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 z-40 lg:hidden shadow-lg">
      <div className="flex gap-2">
        <Button asChild className="flex-1" size="default">
          <a
            href="https://shorturl.at/tTnAZ"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
        </Button>
        <Button asChild variant="outline" className="flex-1" size="default">
          <a href="tel:+5493525537118" className="flex items-center justify-center gap-2">
            <Phone className="h-4 w-4" />
            Llamar
          </a>
        </Button>
      </div>
    </div>
  )
}
