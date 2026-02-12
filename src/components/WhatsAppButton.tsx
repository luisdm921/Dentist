"use client";

import { useState } from "react";
import { FaWhatsapp, FaTimes } from "react-icons/fa";

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  const phoneNumber = "5255500200"; // Número de WhatsApp sin + ni espacios
  const message = encodeURIComponent(
    "Hola! Me gustaría agendar una consulta dental.",
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  const handleClick = () => {
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        {/* Tooltip */}
        {showTooltip && !isHovered && (
          <div className="hidden md:flex items-center gap-2 bg-white rounded-full shadow-2xl px-4 py-3 animate-slide-in">
            <span className="text-sm font-semibold text-slate-700">
              ¿Necesitas ayuda? Chatea con nosotros
            </span>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-slate-400 hover:text-slate-600 transition-colors"
              aria-label="Cerrar mensaje"
            >
              <FaTimes className="text-xs" />
            </button>
          </div>
        )}

        {/* WhatsApp Button */}
        <button
          onClick={handleClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="group relative w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-110 flex items-center justify-center animate-float"
          aria-label="Chatear por WhatsApp"
        >
          {/* Pulse animation */}
          <span className="absolute inset-0 rounded-full bg-green-500 opacity-75 animate-ping"></span>

          {/* Icon */}
          <FaWhatsapp className="relative text-white text-3xl group-hover:scale-110 transition-transform" />

          {/* Badge */}
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-bounce">
            1
          </span>
        </button>
      </div>

      {/* Custom animations in style tag */}
      <style jsx>{`
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slide-in {
          animation: slide-in 0.5s ease-out;
        }
      `}</style>
    </>
  );
};

export default WhatsAppButton;
