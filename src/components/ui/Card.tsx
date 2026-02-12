"use client";

import { useState, useEffect, useRef } from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
  delay?: number;
}

const Card = ({
  children,
  className = "",
  hover = true,
  gradient = false,
  delay = 0,
}: CardProps) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const baseStyles = "rounded-3xl shadow-xl p-8";
  const hoverStyles = hover
    ? "transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
    : "";
  const gradientStyles = gradient
    ? "bg-gradient-to-br from-white to-slate-50"
    : "bg-white";

  return (
    <div
      ref={ref}
      className={`${baseStyles} ${hoverStyles} ${gradientStyles} ${className} transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default Card;
