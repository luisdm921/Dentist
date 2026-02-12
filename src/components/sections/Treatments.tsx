"use client";

import { useEffect, useRef, useState } from "react";
import { FaStar, FaCheckCircle } from "react-icons/fa";

const treatments = [
  {
    title: "Blanqueamiento Dental Profesional",
    description: "Aclara hasta 8 tonos en una sola sesión",
    duration: "60 minutos",
    results: "Resultados inmediatos",
    price: "Desde $2,500 MXN",
    features: [
      "Sin sensibilidad",
      "Resultados duraderos",
      "Fórmula segura",
      "Mantenimiento incluido",
    ],
    image: "/images/blanqueamiento.jpg",
    popular: true,
  },
  {
    title: "Carillas de Porcelana",
    description: "Sonrisa perfecta y natural",
    duration: "2-3 sesiones",
    results: "Duración 10-15 años",
    price: "Desde $6,000 MXN por pieza",
    features: [
      "Material de alta calidad",
      "Diseño personalizado",
      "Mínimamente invasivo",
      "Aspecto natural",
    ],
    image: "/images/carillas.jpg",
    popular: true,
  },
  {
    title: "Ortodoncia Invisible (Invisalign)",
    description: "Alineación sin brackets metálicos",
    duration: "12-18 meses promedio",
    results: "Sonrisa perfectamente alineada",
    price: "Desde $45,000 MXN",
    features: [
      "Removible",
      "Prácticamente invisible",
      "Sin restricciones alimenticias",
      "Resultados predecibles",
    ],
    image: "/images/invisalign.jpg",
    popular: true,
  },
  {
    title: "Implantes Dentales de Titanio",
    description: "Reemplazo permanente de dientes",
    duration: "3-6 meses",
    results: "Solución de por vida",
    price: "Desde $15,000 MXN",
    features: [
      "Titanio de grado médico",
      "Cirugía guiada por computadora",
      "Alta tasa de éxito",
      "Aspecto natural",
    ],
    image: "/images/implantes.jpg",
    popular: false,
  },
  {
    title: "Limpieza Dental Profunda",
    description: "Prevención y salud bucal óptima",
    duration: "45-60 minutos",
    results: "Dientes limpios y encías sanas",
    price: "Desde $800 MXN",
    features: [
      "Eliminación de sarro",
      "Pulido dental",
      "Aplicación de flúor",
      "Revisión completa",
    ],
    image: "/images/limpieza.jpg",
    popular: false,
  },
  {
    title: "Diseño de Sonrisa Digital",
    description: "Visualiza tu nueva sonrisa antes del tratamiento",
    duration: "1 sesión",
    results: "Plan personalizado",
    price: "Consulta incluída",
    features: [
      "Simulación 3D",
      "Análisis facial",
      "Plan de tratamiento",
      "Sin compromiso",
    ],
    image: "/images/diseno-sonrisa.jpg",
    popular: false,
  },
];

const Treatments = () => {
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
      id="tratamientos"
      className="py-20 bg-white relative overflow-hidden"
      ref={ref}
    >
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
              Tratamientos Destacados
            </span>
          </div>
          <h2
            className={`text-4xl md:text-5xl font-bold text-slate-800 mb-6 transition-all duration-700 delay-100 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Tratamientos Dentales
            <span className="gradient-text block mt-2">Más Populares</span>
          </h2>
          <p
            className={`text-lg text-slate-600 transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Transforma tu sonrisa con nuestros tratamientos más solicitados y
            efectivos.
          </p>
        </div>

        {/* Treatments Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {treatments.map((treatment, index) => (
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
              <div className="relative h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-100">
                {/* Popular Badge */}
                {treatment.popular && (
                  <div className="absolute top-4 right-4 z-10 bg-accent-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <FaStar /> Popular
                  </div>
                )}

                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={treatment.image}
                    alt={treatment.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">
                    {treatment.title}
                  </h3>
                  <p className="text-slate-600 mb-4">{treatment.description}</p>

                  {/* Info Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                    <div>
                      <span className="text-slate-500">Duración:</span>
                      <p className="font-semibold text-slate-700">
                        {treatment.duration}
                      </p>
                    </div>
                    <div>
                      <span className="text-slate-500">Resultados:</span>
                      <p className="font-semibold text-slate-700">
                        {treatment.results}
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2 mb-4">
                    {treatment.features.slice(0, 3).map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-sm text-slate-600"
                      >
                        <FaCheckCircle className="text-accent-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Price */}
                  <div className="mb-4 pt-4 border-t border-slate-100">
                    <span className="text-2xl font-bold text-primary-600">
                      {treatment.price}
                    </span>
                  </div>

                  {/* CTA */}
                  <a
                    href="#contacto"
                    className="block w-full text-center px-6 py-3 bg-primary-600 text-white rounded-full font-semibold hover:bg-primary-700 transition-all transform hover:scale-105"
                  >
                    Solicitar Información
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Treatments;
