'use client';

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useTranslation } from "@/lib/i18n";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Rejestrujemy ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const ImageSection = (): React.JSX.Element => {
  const { translations } = useTranslation();
  const imageRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    let scrollTrigger: gsap.plugins.ScrollTriggerInstance | null = null;
    
    if (imageRef.current) {
      // Animacja skalowania, obrotu i przezroczystości podczas scrollowania
      const tween = gsap.to(imageRef.current, {
        scale: 1.1,
        rotation: 0,
        opacity: 1,
        duration: 1,
        ease: "none",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%", // Start animacji gdy górna krawędź sekcji dotknie 80% wysokości viewport
          end: "top 20%",   // Koniec animacji gdy górna krawędź sekcji dotknie 20% wysokości viewport
          scrub: true, 
          markers: false, // Animacja jest powiązana z scrollowaniem
        }
      });
      
      scrollTrigger = tween.scrollTrigger || null;
    }
    
    // Cleanup tylko tego konkretnego ScrollTrigger
    return () => {
      if (scrollTrigger) {
        scrollTrigger.kill();
      }
    };
  }, []);
  
  return (
    <section className="relative w-full h-[70vh] sm:h-[80vh] lg:h-[85vh] overflow-hidden " >
      {/* Zdjęcie tła z animacją GSAP */}
      <div
        ref={imageRef}
        className="absolute inset-0 w-full h-full "
        style={{
          transform: "scale(0.5) rotate(-5deg)",
        }}
      >
        <Image 
          src="/images/cowork/cobg.jpg" 
          alt="Tło sekcji współpracy"
          fill
          className="w-full h-full object-cover rounded-3xl"
          priority={false}
        />
      </div>
      
      {/* Kontener z systemem kolumn */}
      <div className="relative z-10 h-full grid-system items-center">
        {/* Pusta przestrzeń - 2 kolumny */}
        <div className="grid-col-2"></div>
        
        {/* Karta z samym obrysem - 8 kolumn (od 3 do 10) */}
        <div className="grid-col-8">
          <div className="border-4 border-gray-light rounded-l h-[50vh] sm:h-[70vh] flex items-stretch justify-start">
            {/* Karta tekstowa - 4 kolumny wyśrodkowana */}
            <div className="w-full sm:w-1/2">
              <div className="bg-gray-light rounded-2xl p-6 sm:p-10 h-full flex flex-col justify-center">
                <div className="text-start mb-4 sm:mb-6">
                  <p className="text-gray-dark fonts-mono-xs tracking-wide mb-2 sm:mb-4">
                  {translations.imageSection.subtitle}
                  </p>
                </div>
                
                <h2 className="fonts-fig-l text-gray-dark text-start mb-4 sm:mb-8 leading-tight">
                {translations.imageSection.title}
                </h2>  
                <p className="text-gray-dark fonts-mono-l leading-relaxed text-left">
                {translations.imageSection.description}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Pusta przestrzeń - 2 kolumny */}
        <div className="grid-col-2"></div>
      </div>
    </section>
  );
};
