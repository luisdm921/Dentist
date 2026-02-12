"use client";

import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTooth,
  FaStar,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#nosotros", label: "Nosotros" },
    { href: "#servicios", label: "Servicios" },
    { href: "#tratamientos", label: "Tratamientos" },
  ];

  const services = [
    { label: "Limpieza Dental" },
    { label: "Blanqueamiento" },
    { label: "Ortodoncia" },
    { label: "Implantes" },
  ];

  const socialLinks = [
    { icon: FaFacebook, href: "https://facebook.com", label: "Facebook" },
    { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
    { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: FaWhatsapp, href: "https://wa.me/5255500200", label: "WhatsApp" },
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <FaTooth className="text-3xl text-primary-400 group-hover:scale-110 transition-transform" />
              <div className="flex flex-col">
                <span className="text-xl font-bold">Dental Excellence</span>
                <span className="text-xs text-primary-400">
                  Tu Sonrisa Perfecta
                </span>
              </div>
            </Link>
            <p className="text-gray-300 leading-relaxed">
              Expertos en salud dental con tecnología de vanguardia. Creamos
              sonrisas perfectas con atención personalizada y profesionalismo.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-600/20 flex items-center justify-center hover:bg-primary-600 transition-all hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="text-lg" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-primary-500"></span>
              Enlaces Rápidos
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500 group-hover:scale-150 transition-transform"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-primary-500"></span>
              Servicios
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <span className="text-gray-300 flex items-center gap-2">
                    <FaStar className="text-primary-500 text-sm" />
                    {service.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-primary-500"></span>
              Contacto
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+5255500200"
                  className="flex items-start gap-3 text-gray-300 hover:text-primary-400 transition-colors group"
                >
                  <FaPhone className="text-primary-500 mt-1 group-hover:scale-110 transition-transform" />
                  <span>
                    +52 555 000 0200
                    <span className="block text-xs text-gray-400">
                      Lun - Vie: 9:00 - 19:00
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contacto@dental-excellence.com"
                  className="flex items-start gap-3 text-gray-300 hover:text-primary-400 transition-colors group"
                >
                  <FaEnvelope className="text-primary-500 mt-1 group-hover:scale-110 transition-transform" />
                  <span className="break-all">
                    contacto@dental-excellence.com
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <FaMapMarkerAlt className="text-primary-500 mt-1 flex-shrink-0" />
                <span>
                  Av. Reforma 567, Torre B, Piso 3
                  <span className="block text-sm">CDMX, México 06600</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Clínica Dental Excellence. Todos los derechos
              reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                href="/privacidad"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                Política de Privacidad
              </Link>
              <Link
                href="/terminos"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                Términos y Condiciones
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
