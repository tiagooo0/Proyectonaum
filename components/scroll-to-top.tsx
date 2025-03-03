"use client"

import { useEffect } from "react"

export function ScrollToTop() {
  // const pathname = usePathname() //Removed unnecessary dependency

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    })
  }, []) //Empty dependency array

  return null
}

