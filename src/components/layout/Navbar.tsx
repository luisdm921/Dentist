"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaTooth } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#nosotros", label: "Nosotros" },
    { href: "#servicios", label: "Servicios" },
    { href: "#tratamientos", label: "Tratamientos" },
    { href: "#testimonios", label: "Testimonios" },
    { href: "#contacto", label: "Contacto" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed w-full transition-all duration-500 ${
          isOpen ? "z-[60]" : "z-50"
        } ${isScrolled ? "bg-white shadow-lg py-3" : "bg-transparent py-5"}`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div
                className={`transition-colors duration-300 ${
                  isScrolled ? "text-primary-600" : "text-white"
                }`}
              >
                <FaTooth className="text-3xl group-hover:scale-110 transition-transform" />
              </div>
              <div className="flex flex-col">
                <span
                  className={`text-xl font-bold transition-colors duration-300 ${
                    isScrolled ? "text-slate-800" : "text-white"
                  }`}
                >
                  Dental Excellence
                </span>
                <span
                  className={`text-xs transition-colors duration-300 ${
                    isScrolled ? "text-primary-600" : "text-white/90"
                  }`}
                >
                  Tu Sonrisa Perfecta
                </span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    isScrolled
                      ? "text-slate-700 hover:bg-primary-50 hover:text-primary-600"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contacto"
                className={`ml-4 px-6 py-2.5 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  isScrolled
                    ? "bg-primary-600 text-white hover:bg-primary-700 shadow-md"
                    : "bg-white text-primary-600 hover:bg-white/90"
                }`}
              >
                Reservar Cita
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-2xl relative z-[60] p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <FaTimes className="text-white" />
              ) : (
                <FaBars
                  className={`transition-colors ${
                    isScrolled ? "text-slate-700" : "text-white"
                  }`}
                />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-gradient-to-br from-primary-600 via-secondary-600 to-primary-700 z-[55] transition-all duration-500 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-6 px-4">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white text-2xl font-semibold transition-all hover:text-primary-200 hover:scale-110"
              onClick={handleLinkClick}
              style={{
                animation: isOpen
                  ? `fadeInUp 0.5s ease-out ${index * 0.1}s both`
                  : "none",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={handleLinkClick}
            className="mt-4 px-8 py-3 bg-white text-primary-600 rounded-full font-bold text-lg transition-all hover:bg-primary-100 hover:scale-110"
            style={{
              animation: isOpen
                ? `fadeInUp 0.5s ease-out ${navLinks.length * 0.1}s both`
                : "none",
            }}
          >
            Reservar Cita
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
