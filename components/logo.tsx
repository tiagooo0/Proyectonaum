import Image from "next/image"

export default function Logo({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <Image
      src="/naumLogoNav.png"  // Ruta de la imagen
      alt="Logo"               // Texto alternativo para la imagen
      width={100}              // Ancho de la imagen
      height={100}             // Alto de la imagen
      className={`${className} rounded-lg`}  // Redondear bordes con Tailwind
    />
  )
}
