"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface GoTopButtonProps {
  className?: string;
  threshold?: number;
}

export const GoTopButton: React.FC<GoTopButtonProps> = ({ 
  className,
  threshold = 300 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      const currentScrollY = window.pageYOffset;
      const isScrollingUpNow = currentScrollY < lastScrollY;
      
      // Pokaż przycisk tylko jeśli:
      // 1. Użytkownik jest poniżej threshold (300px), I
      // 2. Scrolluje w górę
      const shouldShow = currentScrollY > threshold && isScrollingUpNow;
      
      setIsVisible(shouldShow);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [threshold, lastScrollY]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-5 right-5 z-50",
        "w-14 h-14 rounded-m",
        "bg-gray-mid border-4 border-gray-dark",
        "flex items-center justify-center",
        "transition-all duration-300 ease-in-out",
        "hover:bg-gray-light hover:border-gray-dark",

        "go-top-button",
        isVisible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-4 pointer-events-none",
        className
      )}
      aria-label="Przejdź na górę strony"
    >
      <Image
        src="/images/icons/arrow.svg"
        alt="Strzałka w górę"
        width={14}
        height={14}
        className="transition-colors duration-300 -rotate-90"
        style={{ filter: 'brightness(0) saturate(100%) invert(24%) sepia(8%) saturate(1038%) hue-rotate(202deg) brightness(94%) contrast(86%)' }}
      />
    </button>
  );
};
