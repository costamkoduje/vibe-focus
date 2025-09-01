'use client';

import React from "react";
import Image from "next/image";
import { useTranslation } from "@/lib/i18n";

export const DarkImageSection = (): React.JSX.Element => {
  const { translations } = useTranslation();
  
  // Sprawdź czy translations są dostępne
  if (!translations || !translations.darkImageSection) {
    return <div>Ładowanie...</div>;
  }
  
  return (
    <section className="relative w-full h-[70vh] sm:h-[80vh] lg:h-screen">
      {/* Zdjęcie tła */}
      <Image 
        src="/images/career/cbg2.jpg" 
        alt="Focus Electro - międzynarodowe projekty stoczniowe"
        className="absolute inset-0 w-full h-full object-cover"
        fill
        sizes="100vw"
        priority
      />
      
      {/* Kontener z systemem kolumn */}
      <div className="relative z-10 h-full grid-system items-center">
        {/* Pusta przestrzeń - 2 kolumny */}
        <div className="grid-col-2"></div>
        
        {/* Karta z samym obrysem - 8 kolumn (od 3 do 10) */}
        <div className="grid-col-8">
          <div className="border-4 border-gray-dark rounded-l h-fit sm:h-fit flex items-start justify-start">
            {/* Karta tekstowa - 4 kolumny wyśrodkowana */}
            <div className="w-full sm:w-1/2">
              <div className="bg-gray-dark rounded-2xl p-6 sm:p-10 h-fit">
                <div className="text-start mb-4 sm:mb-6">
                  <p className="text-gray-light fonts-mono-xs tracking-wide mb-2 sm:mb-4">
                  {translations.darkImageSection.subtitle}
                  </p>
                </div>
                
                <h2 className="fonts-fig-l text-gray-light text-start mb-4 sm:mb-8 leading-tight">
                {translations.darkImageSection.title}
                </h2>
                
                <p className="text-gray-light fonts-mono-l leading-relaxed text-left">
                {translations.darkImageSection.description}
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
