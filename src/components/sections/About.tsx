"use client";

import { useEffect, useRef, useState } from "react";
import { FaUserMd, FaAward, FaHeart, FaMicroscope } from "react-icons/fa";

const About = () => {
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

  const highlights = [
    {
      icon: FaUserMd,
      title: "Dentistas Certificados",
      description:
        "Especialistas con certificaciones nacionales e internacionales",
    },
    {
      icon: FaAward,
      title: "15+ Años de Experiencia",
      description: "Miles de tratamientos exitosos y sonrisas satisfechas",
    },
    {
      icon: FaMicroscope,
      title: "Tecnología Avanzada",
      description: "Equipamiento de última generación para mejores resultados",
    },
    {
      icon: FaHeart,
      title: "Atención Personalizada",
      description: "Cada paciente es único y merece un trato especial",
    },
  ];

  return (
    <section id="nosotros" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <div
              className={`relative transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 z-10"></div>
                <img
                  src="/images/dentist-team.jpg"
                  alt="Dr. Carlos Méndez - Odontólogo Certificado"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary-500 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-secondary-500 rounded-full opacity-20 blur-3xl"></div>
            </div>

            {/* Content Side */}
            <div
              className={`transition-all duration-700 delay-200 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <div className="mb-4">
                <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
                  Sobre Nosotros
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 leading-tight">
                Dr. Carlos Méndez
                <span className="block text-2xl text-primary-600 mt-2 font-medium">
                  Odontólogo Especialista Certificado
                </span>
              </h2>

              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Con más de 15 años de experiencia en odontología integral, nos
                especializamos en brindar atención dental de excelencia con la
                más alta tecnología.
              </p>

              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Nuestra misión es crear sonrisas saludables y hermosas,
                combinando técnicas modernas con un trato cálido y profesional.
                Cada sonrisa cuenta una historia, y estamos aquí para hacer que
                la tuya sea perfecta.
              </p>

              {/* Highlights Grid */}
              <div className="grid sm:grid-cols-2 gap-6">
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className={`flex gap-4 transition-all duration-500 ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-5"
                    }`}
                    style={{
                      transitionDelay: `${400 + index * 100}ms`,
                    }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center">
                        <item.icon className="text-primary-600 text-xl" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-full font-semibold hover:bg-primary-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Conoce Más Sobre Nosotros
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
