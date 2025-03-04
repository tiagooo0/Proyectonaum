export function scrollToSection() {
  // Check if there's a hash in the URL
  if (typeof window !== "undefined" && window.location.hash) {
    // Get the element with the ID from the hash
    const id = window.location.hash.substring(1)
    const element = document.getElementById(id)

    // If the element exists, scroll to it
    if (element) {
      // Use a small timeout to ensure the page has fully loaded
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth" })
      }, 100)
    }
  }
}

