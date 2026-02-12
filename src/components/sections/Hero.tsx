"use client";

import { useState } from "react";
import { FaPlay, FaTimes, FaCheckCircle } from "react-icons/fa";

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);

  const benefits = [
    "Primera consulta con 25% descuento",
    "Tecnología de última generación",
    "Dentistas certificados",
  ];

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/dental-hero.jpg"
          alt="Clínica Dental Moderna"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/90 via-secondary-600/85 to-primary-700/90"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
          <div
            className="absolute top-0 -right-4 w-72 h-72 bg-secondary-500 rounded-full mix-blend-multiply filter blur-xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute -bottom-8 left-20 w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-xl animate-float"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>
      </div>

      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%">
          <pattern
            id="pattern"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="20" cy="20" r="1" fill="white" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#pattern)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 pb-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 animate-fade-in">
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-semibold">
              ✨ Tu sonrisa perfecta nos inspira
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-slide-up">
            Sonríe con Confianza
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-200">
              Salud Dental de Excelencia
            </span>
          </h1>

          <p
            className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            Tecnología de vanguardia y atención personalizada para brindarte la
            mejor experiencia dental. Tu sonrisa radiante comienza aquí.
          </p>

          {/* Benefits */}
          <div
            className="flex flex-wrap justify-center gap-4 mb-10 animate-slide-up"
            style={{ animationDelay: "0.3s" }}
          >
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full"
              >
                <FaCheckCircle className="text-cyan-200" />
                <span className="text-white font-medium text-sm">
                  {benefit}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in"
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href="#contacto"
              className="group relative px-8 py-4 bg-white text-primary-600 rounded-full font-bold text-lg transition-all transform hover:scale-105 hover:shadow-2xl overflow-hidden"
            >
              <span className="relative z-10 group-hover:opacity-0 transition-opacity">
                Reservar Consulta
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-secondary-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity z-20">
                ¡Agenda Ahora!
              </span>
            </a>
            <button
              onClick={() => setShowVideo(true)}
              className="flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full font-semibold text-lg transition-all transform hover:scale-105 border-2 border-white/30"
            >
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <FaPlay className="text-sm ml-0.5" />
              </div>
              Conoce Nuestra Clínica
            </button>
          </div>

          {/* Stats */}
          <div
            className="mt-16 grid grid-cols-3 gap-8 animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                15+
              </div>
              <div className="text-white/80 font-medium">
                Años de Experiencia
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                2000+
              </div>
              <div className="text-white/80 font-medium">
                Sonrisas Transformadas
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                99%
              </div>
              <div className="text-white/80 font-medium">Satisfacción</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50 animate-fade-in"
        style={{ animationDelay: "0.6s" }}
      >
        <div className="flex flex-col items-center gap-2 text-white/80">
          <span className="text-sm font-medium">Descubre más</span>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div
          className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in"
          onClick={() => setShowVideo(false)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-primary-400 transition-colors z-10 hover:scale-110 transform"
            onClick={() => setShowVideo(false)}
            aria-label="Cerrar video"
          >
            <FaTimes />
          </button>

          <div
            className="relative w-full max-w-5xl aspect-video animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              className="w-full h-full rounded-2xl shadow-2xl"
              controls
              autoPlay
              preload="metadata"
            >
              <source
                src="/videos/dental-hero-optimized.webm"
                type="video/webm"
              />
              <source
                src="/videos/dental-hero-optimized.mp4"
                type="video/mp4"
              />
              Tu navegador no soporta video HTML5.
            </video>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
