"use client";

import { useEffect, useRef, useState } from "react";
import { FaImage, FaTimes } from "react-icons/fa";

const galleryImages = [
  {
    src: "/images/gallery/clinica-1.jpg",
    alt: "Sala de espera moderna y confortable",
    category: "Instalaciones",
  },
  {
    src: "/images/gallery/clinica-2.jpg",
    alt: "Consultorio dental equipado con tecnología avanzada",
    category: "Instalaciones",
  },
  {
    src: "/images/gallery/tratamiento-1.jpg",
    alt: "Tratamiento de blanqueamiento dental",
    category: "Tratamientos",
  },
  {
    src: "/images/gallery/tratamiento-2.jpg",
    alt: "Aplicación de carillas dentales",
    category: "Tratamientos",
  },
  {
    src: "/images/gallery/equipo-1.jpg",
    alt: "Equipo de dentistas profesionales",
    category: "Equipo",
  },
  {
    src: "/images/gallery/resultados-1.jpg",
    alt: "Antes y después de ortodoncia",
    category: "Resultados",
  },
  {
    src: "/images/gallery/resultados-2.jpg",
    alt: "Transformación con diseño de sonrisa",
    category: "Resultados",
  },
  {
    src: "/images/gallery/tecnologia-1.jpg",
    alt: "Scanner intraoral 3D",
    category: "Tecnología",
  },
];

const categories = [
  "Todos",
  "Instalaciones",
  "Tratamientos",
  "Resultados",
  "Equipo",
  "Tecnología",
];

const Gallery = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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

  const filteredImages =
    selectedCategory === "Todos"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <section
      id="galeria"
      className="py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden"
      ref={ref}
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div
            className={`mb-4 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
              Galería
            </span>
          </div>
          <h2
            className={`text-4xl md:text-5xl font-bold text-slate-800 mb-6 transition-all duration-700 delay-100 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Nuestras
            <span className="gradient-text block mt-2">
              Instalaciones y Sonrisas
            </span>
          </h2>
          <p
            className={`text-lg text-slate-600 transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Conoce nuestro espacio moderno y los resultados que logramos para
            nuestros pacientes.
          </p>
        </div>

        {/* Category Filter */}
        <div
          className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? "bg-primary-600 text-white shadow-lg scale-105"
                  : "bg-white text-slate-600 hover:bg-primary-50 hover:text-primary-600 shadow"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className={`group relative aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{
                transitionDelay: `${400 + index * 50}ms`,
              }}
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="inline-block px-3 py-1 bg-primary-600 text-white rounded-full text-xs font-semibold mb-2">
                    {image.category}
                  </span>
                  <p className="text-white text-sm font-medium">{image.alt}</p>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <FaImage className="text-white text-xl" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-primary-400 transition-colors z-10 hover:scale-110 transform"
            onClick={() => setSelectedImage(null)}
            aria-label="Cerrar imagen"
          >
            <FaTimes />
          </button>

          <div
            className="relative max-w-5xl max-h-[90vh] animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Imagen ampliada"
              className="w-full h-full object-contain rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
