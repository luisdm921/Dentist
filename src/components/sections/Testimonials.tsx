"use client";

import { useEffect, useRef, useState } from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Laura Martínez",
    role: "Paciente - Blanqueamiento Dental",
    image: "L",
    rating: 5,
    text: "El tratamiento de blanqueamiento superó mis expectativas. Mi sonrisa es ahora mucho más brillante y el proceso fue completamente indoloro. ¡Altamente recomendado!",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    name: "Roberto Sánchez",
    role: "Paciente - Implantes Dentales",
    image: "R",
    rating: 5,
    text: "Después de perder un diente, pensé que nunca volvería a sonreír con confianza. Gracias a los implantes dentales, mi sonrisa se ve completamente natural. Excelente trabajo del Dr. Méndez.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "María González",
    role: "Paciente - Ortodoncia Invisalign",
    image: "M",
    rating: 5,
    text: "Invisalign cambió mi vida. Pude alinear mis dientes sin usar brackets metálicos y nadie notaba que llevaba tratamiento. El resultado final es perfecto.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    name: "Carlos Ramírez",
    role: "Paciente - Carillas de Porcelana",
    image: "C",
    rating: 5,
    text: "Las carillas de porcelana transformaron completamente mi sonrisa. Se ven tan naturales que muchos piensan que son mis dientes originales. Valió cada peso.",
    gradient: "from-purple-500 to-violet-500",
  },
  {
    name: "Ana López",
    role: "Madre - Odontopediatría",
    image: "A",
    rating: 5,
    text: "Mi hijo siempre tenía miedo al dentista, pero aquí el trato es tan amable y paciente que ahora disfruta sus visitas. Gran equipo profesional especializado en niños.",
    gradient: "from-orange-500 to-amber-500",
  },
  {
    name: "Jorge Fernández",
    role: "Paciente - Diseño de Sonrisa",
    image: "J",
    rating: 5,
    text: "El diseño de sonrisa digital me permitió ver cómo se vería mi nueva sonrisa antes del tratamiento. El resultado final fue exactamente como lo imaginé. Increíble tecnología.",
    gradient: "from-indigo-500 to-blue-500",
  },
];

const Testimonials = () => {
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
      id="testimonios"
      className="py-20 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden"
      ref={ref}
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-500 rounded-full blur-3xl"></div>
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
              Testimonios
            </span>
          </div>
          <h2
            className={`text-4xl md:text-5xl font-bold text-slate-800 mb-6 transition-all duration-700 delay-100 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Lo Que Dicen Nuestros
            <span className="gradient-text block mt-2">Pacientes</span>
          </h2>
          <p
            className={`text-lg text-slate-600 transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Historias reales de personas que han transformado sus sonrisas con
            nosotros.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${300 + index * 100}ms`,
              }}
            >
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10">
                  <FaQuoteLeft className="text-6xl text-slate-400" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-lg" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-slate-600 leading-relaxed mb-6 flex-grow relative z-10">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}
                  >
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
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
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-primary-600 to-secondary-600 rounded-3xl p-12 shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ¿Listo para tu Nueva Sonrisa?
            </h3>
            <p className="text-white/90 text-lg mb-8">
              Únete a miles de pacientes satisfechos que han transformado sus
              vidas con una sonrisa radiante.
            </p>
            <a
              href="#contacto"
              className="inline-block px-8 py-4 bg-white text-primary-600 rounded-full font-bold text-lg transition-all transform hover:scale-105 hover:shadow-xl"
            >
              Agenda Tu Consulta Gratis
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
