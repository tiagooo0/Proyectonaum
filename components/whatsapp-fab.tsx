"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"

export default function WhatsAppFAB() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 1,
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <a href="https://shorturl.at/tTnAZ" target="_blank" rel="noopener noreferrer">
        <Button
          size="lg"
          className="h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] shadow-lg transition-shadow hover:shadow-xl p-0"
        >
          <Image src="/whatsapp.svg" alt="WhatsApp" width={28} height={28} />
          <span className="sr-only">Contactar por WhatsApp</span>
        </Button>
      </a>
    </motion.div>
  )
}
