"use client";

import { useEffect, useRef, useState } from "react";
import {
  FaTooth,
  FaSmile,
  FaTeeth,
  FaSeedling,
  FaUserFriends,
  FaCapsules,
  FaArrowRight,
} from "react-icons/fa";

const services = [
  {
    icon: FaTooth,
    title: "Odontología General",
    description:
      "Cuidado dental integral para mantener tu sonrisa saludable. Prevención, diagnóstico y tratamiento de problemas dentales comunes.",
    features: [
      "Revisión dental completa",
      "Limpieza profunda",
      "Selladores de fosas",
      "Tratamiento de caries",
    ],
    color: "from-primary-500 to-primary-600",
    bgColor: "bg-primary-50",
    iconColor: "text-primary-600",
  },
  {
    icon: FaSmile,
    title: "Estética Dental",
    description:
      "Transforma tu sonrisa con nuestros tratamientos estéticos avanzados. Resultados naturales y duraderos que aumentarán tu confianza.",
    features: [
      "Blanqueamiento dental",
      "Carillas de porcelana",
      "Diseño de sonrisa",
      "Reconstrucción estética",
    ],
    color: "from-secondary-500 to-secondary-600",
    bgColor: "bg-secondary-50",
    iconColor: "text-secondary-600",
  },
  {
    icon: FaTeeth,
    title: "Ortodoncia",
    description:
      "Alineación dental perfecta con brackets tradicionales o invisibles. Sonrisas rectas y funcionales para todas las edades.",
    features: [
      "Brackets metálicos",
      "Brackets estéticos",
      "Invisalign",
      "Ortodoncia infantil",
    ],
    color: "from-accent-500 to-accent-600",
    bgColor: "bg-accent-50",
    iconColor: "text-accent-600",
  },
  {
    icon: FaSeedling,
    title: "Implantes Dentales",
    description:
      "Reemplazo permanente de dientes perdidos con implantes de titanio de última generación. Aspecto y función natural.",
    features: [
      "Implantes unitarios",
      "Implantes múltiples",
      "Prótesis sobre implantes",
      "Cirugía guiada",
    ],
    color: "from-primary-400 to-secondary-500",
    bgColor: "bg-gradient-to-br from-primary-50 to-secondary-50",
    iconColor: "text-primary-500",
  },
  {
    icon: FaUserFriends,
    title: "Odontopediatría",
    description:
      "Cuidado dental especializado para niños en un ambiente amigable. Prevenimos problemas futuros desde la infancia.",
    features: [
      "Revisiones preventivas",
      "Aplicación de flúor",
      "Tratamiento de caries",
      "Educación dental",
    ],
    color: "from-secondary-400 to-primary-500",
    bgColor: "bg-gradient-to-br from-secondary-50 to-primary-50",
    iconColor: "text-secondary-500",
  },
  {
    icon: FaCapsules,
    title: "Endodoncia",
    description:
      "Salvamos dientes con infecciones o daños severos mediante tratamientos de conducto avanzados. Sin dolor, con tecnología moderna.",
    features: [
      "Tratamiento de conducto",
      "Retratamiento",
      "Microscopio dental",
      "Sedación disponible",
    ],
    color: "from-cyan-500 to-blue-600",
    bgColor: "bg-gradient-to-br from-cyan-50 to-blue-50",
    iconColor: "text-cyan-600",
  },
];

const Services = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <section
      id="servicios"
      className="py-20 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden"
      ref={ref}
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div
            className={`mb-4 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
              Nuestros Servicios
            </span>
          </div>
          <h2
            className={`text-4xl md:text-5xl font-bold text-slate-800 mb-6 transition-all duration-700 delay-100 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Servicios Dentales
            <span className="gradient-text block mt-2">
              Integrales y Especializados
            </span>
          </h2>
          <p
            className={`text-lg text-slate-600 transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Tecnología de vanguardia y experiencia profesional para cuidar tu
            sonrisa en cada etapa de tu vida.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${300 + index * 100}ms`,
              }}
            >
              <div
                className={`relative h-full p-8 rounded-2xl ${service.bgColor} shadow-lg hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-white`}
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <service.icon className="text-white text-2xl" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-slate-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-sm text-slate-600"
                    >
                      <div
                        className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`}
                      ></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contacto"
                  className={`inline-flex items-center gap-2 ${service.iconColor} font-semibold text-sm group-hover:gap-3 transition-all`}
                >
                  Más información
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div
          className={`mt-16 text-center transition-all duration-700 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-lg text-slate-600 mb-6">
            ¿No encuentras lo que buscas?
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white rounded-full font-semibold hover:bg-primary-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Contáctanos para más servicios
            <FaArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
