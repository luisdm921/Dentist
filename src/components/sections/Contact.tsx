"use client";

import { useState, useEffect, useRef } from "react";
import { InlineWidget } from "react-calendly";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaClock,
  FaCalendarAlt,
} from "react-icons/fa";

const Contact = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // URL de Calendly configurada
  const calendlyUrl = "https://calendly.com/fcodominguez530/consulta-inicial";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.01, rootMargin: "100px" },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const contactInfo = [
    {
      icon: FaPhone,
      title: "Teléfono",
      content: "+52 555 000 0200",
      link: "tel:+5255500200",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      content: "+52 555 000 0200",
      link: "https://wa.me/5255500200",
      gradient: "from-green-400 to-green-600",
    },
    {
      icon: FaEnvelope,
      title: "Email",
      content: "contacto@dental-excellence.com",
      link: "mailto:contacto@dental-excellence.com",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Ubicación",
      content: "Paseo de la Reforma 476, Cuauhtémoc",
      link: "https://maps.google.com/?q=Paseo+de+la+Reforma+476+Cuauhtémoc+CDMX",
      gradient: "from-red-500 to-pink-500",
    },
  ];

  const schedule = [
    { day: "Lunes - Viernes", hours: "9:00 AM - 7:00 PM" },
    { day: "Sábado", hours: "10:00 AM - 3:00 PM" },
    { day: "Domingo", hours: "Cerrado" },
  ];

  return (
    <section
      id="contacto"
      className="py-24 bg-gradient-to-br from-slate-50 via-white to-primary-50 relative overflow-hidden"
      ref={ref}
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div
            className={`mb-4 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
              Contacto
            </span>
          </div>
          <h2
            className={`text-4xl md:text-5xl font-bold text-slate-800 mb-6 transition-all duration-700 delay-100 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Comienza Tu Camino
            <span className="gradient-text block mt-2">
              Hacia la Sonrisa Perfecta
            </span>
          </h2>
          <p
            className={`text-lg text-slate-600 transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Agenda tu primera consulta o contáctanos para resolver cualquier
            duda. Estamos aquí para ti.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Quick Contact Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                target={info.link.startsWith("http") ? "_blank" : undefined}
                rel={
                  info.link.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className={`group bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${info.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform mb-4`}
                >
                  <info.icon className="text-2xl" />
                </div>
                <div className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">
                  {info.title}
                </div>
                <div className="font-bold text-slate-800 group-hover:text-primary-600 transition-colors text-lg">
                  {info.content}
                </div>
              </a>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Schedule Card - Aparece primero en mobile */}
            <div
              className={`order-1 lg:order-2 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
              style={{ transitionDelay: "800ms" }}
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center">
                    <FaClock className="text-primary-600 text-xl" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-800">Horarios</h4>
                </div>
                <div className="space-y-3">
                  {schedule.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-2 border-b border-slate-100 last:border-0"
                    >
                      <span className="text-slate-600 font-medium">
                        {item.day}
                      </span>
                      <span className="text-slate-800 font-semibold">
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Calendly Widget - Aparece segundo en mobile */}
            <div
              className={`lg:col-span-2 order-2 lg:order-1 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
              style={{ transitionDelay: "700ms" }}
            >
              <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 border border-slate-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                    <FaCalendarAlt className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800">
                      Agenda tu Cita
                    </h3>
                    <p className="text-slate-600 text-sm">
                      Selecciona el día y hora que mejor te convenga
                    </p>
                  </div>
                </div>

                {/* Calendly Inline Widget */}
                <div className="calendly-container rounded-2xl overflow-hidden border-2 border-slate-100">
                  <InlineWidget
                    url={calendlyUrl}
                    styles={{
                      height: "1000px",
                      width: "100%",
                      minHeight: "1000px",
                    }}
                    pageSettings={{
                      backgroundColor: "ffffff",
                      hideEventTypeDetails: false,
                      hideLandingPageDetails: false,
                      primaryColor: "0087ff",
                      textColor: "1e293b",
                    }}
                  />
                </div>

                {/* Info Note */}
                <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-100">
                  <p className="text-sm text-blue-800">
                    <strong>Nota:</strong> Recibirás una confirmación por correo
                    electrónico con todos los detalles de tu cita. Si tienes
                    alguna pregunta urgente, contáctanos directamente por
                    WhatsApp.
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA - Aparece tercero en mobile */}
            <div
              className={`order-3 lg:order-2 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
              style={{ transitionDelay: "900ms" }}
            >
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 shadow-lg text-white">
                <FaWhatsapp className="text-4xl mb-3" />
                <h4 className="text-lg font-bold mb-2">¿Prefieres WhatsApp?</h4>
                <p className="text-white/90 mb-4 text-sm">
                  Chatea con nosotros directamente y agenda tu cita de forma
                  rápida.
                </p>
                <a
                  href="https://wa.me/5255500200"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-6 py-3 bg-white text-green-600 rounded-full font-bold hover:bg-green-50 transition-all"
                >
                  Abrir WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
