import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

const footerNavigation = {
  servicios: [
    { name: "Defensas Penales", href: "/servicios/defensas-penales" },
    { name: "Defensas Laborales", href: "/servicios/defensas-laborales" },
    { name: "Sucesiones", href: "/servicios/sucesiones" },
    { name: "Divorcios Exprés", href: "/servicios/divorcios-express" },
  ],
  estudio: [
    { name: "Sobre Nosotros", href: "/#about" },
    { name: "Nuestro Equipo", href: "/#team" },
    { name: "Blog", href: "/blog" },
  ],
  recursos: [
    { name: "Preguntas Frecuentes", href: "/#faq" },
    { name: "Guías Legales", href: "/recursos/guias-legales" },
    { name: "Glosario Legal", href: "/recursos/glosario" },
  ],
  legal: [
    { name: "Política de Privacidad", href: "/legal/privacidad" },
    { name: "Términos de Servicio", href: "/legal/terminos" },
    { name: "Aviso Legal", href: "/legal/aviso-legal" },
  ],
  social: [
    {
      name: "Facebook",
      href: "https://facebook.com/guillermonautm",
      icon: Facebook,
    },
    {
      name: "Instagram",
      href: "https://instagram.com/guillermonautm",
      icon: Instagram,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/guillermonautm",
      icon: Twitter,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/guillermonautm",
      icon: Linkedin,
    },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href="/" className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">GN</span>
              </div>
              <span className="ml-3 text-xl font-bold text-white">Dr. Guillermo Naum</span>
            </Link>
            <p className="text-sm leading-6">Brindando servicios legales excepcionales con integridad y dedicación.</p>
            <div className="flex space-x-6">
              {footerNavigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Áreas de Práctica</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.servicios.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Estudio</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.estudio.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Recursos</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.recursos.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-700 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-400">
            &copy; {new Date().getFullYear()} Dr. Guillermo Naum. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

