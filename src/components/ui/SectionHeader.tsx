"use client";

import { useState, useEffect, useRef } from "react";

interface SectionHeaderProps {
  badge?: string;
  title: string | React.ReactNode;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

const SectionHeader = ({
  badge,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeaderProps) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const alignmentClass = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  }[align];

  return (
    <div ref={ref} className={`flex flex-col ${alignmentClass} ${className}`}>
      {badge && (
        <div
          className={`mb-4 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
            {badge}
          </span>
        </div>
      )}

      <h2
        className={`text-4xl md:text-5xl font-bold text-slate-800 mb-6 transition-all duration-1000 ${
          badge ? "delay-100" : ""
        } ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`text-lg text-slate-600 max-w-3xl transition-all duration-1000 ${
            badge ? "delay-200" : "delay-100"
          } ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
