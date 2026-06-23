import Image from "next/image"

export default function Logo({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <Image
      src="/naumLogoNav.png"
      alt="Estudio Jurídico Naum"
      width={100}
      height={100}
      className={`${className} rounded-lg object-contain`}
    />
  )
}
