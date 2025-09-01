"use client";

import React from "react";
import { useTranslation } from "@/lib/i18n";

export const HeroCoWorkSection = (): React.JSX.Element => {
  const { translations } = useTranslation();
  
  const cards = translations.cooperationPage?.hero?.cards || [
    {
      title: "Globalna Obecnoś",
      description: "Realizacja projektów jednocześnie w stoczniach na całym świecie."
    },
    {
      title: "Zespoły Specjalistów",
      description: "Doświadczeni elektromonterzy gotowi do pracy w trybie 24/7."
    },
    {
      title: "Zarządzanie Projektami",
      description: "Pełna koordynacja realizacji od planowania po odbiór końcowy."
    },
    {
      title: "Wsparcie Techniczne",
      description: "Serwis i konserwacja systemów elektrycznych na każdym etapie."
    },
    {
      title: "Terminowość Realizacji",
      description: "Gwarantujemy dotrzymanie harmonogramów najbardziej wymagających projektów."
    },
    {
      title: "Elastyczność Zespołów",
      description: "Dostosowujemy wielkość i skład zespołów do potrzeb każdego projektu."
    },
    {
      title: "Bezpieczeństwo Pracy",
      description: "Najwyższe standardy bezpieczeństwa na każdym etapie realizacji projektu."
    }
  ];

  return (
    <section id="horizontal-scroll-section" className="flex flex-col w-[calc(100%-2.5rem)] py-8 sm:py-12 lg:py-16 relative overflow-hidden bg-gray-dark rounded-l mt-5 mx-5 h-[70vh] sm:h-[75vh] lg:h-[85vh]">
      
      <div className="horizontal-scroll-wrapper overflow-hidden h-full">
        <div className="horizontal-scroll flex h-full">
          {/* Pierwszy slide - tekst */}
          <div className="flex-shrink-0 w-screen h-full flex items-center px-6">
            <div className="grid grid-cols-12 gap-6 w-full items-center">
              {/* Left section - Text content (columns 3-7) */}
              <div className="col-start-3 col-span-5 rounded-l flex items-center">
                <div className="space-y-6">
                  <div className="fonts-mono-xs text-gray-light tracking-wide">
                    {translations.cooperationPage.hero.subtitle}
                  </div>
                  
                  <h1 className="fonts-fig-xxl text-light leading-tight">
                    {translations.cooperationPage.hero.title}
                  </h1>
                  
                  <p className="fonts-mono-l text-gray-light leading-relaxed">
                    {translations.cooperationPage?.hero?.description || "Odkryj pełne spektrum możliwości współpracy z liderem elektrotechniki morskiej. Focus Electro oferuje kompleksowe wsparcie na każdym etapie realizacji projektów stoczniowych - od planowania po długoterminową obsługę serwisową."}
                  </p>
                </div>
              </div>

              {/* Right section - Cards (columns 8-10) */}
              <div className="col-start-8 col-span-5 bg-gray-mid p-1 rounded-l min-w-full lg:min-w-[1200px] xl:min-w-[1600px] 2xl:min-w-[2133px] h-[300px] sm:h-[350px] lg:h-[408px] mr-2 sm:mr-5 lg:mr-10 flex items-center">
                <div className="flex gap-1">
                  {cards.map((card, index) => (
                    <div 
                      key={index}
                      className="bg-dark rounded-l p-4 sm:p-6 w-[250px] sm:w-[280px] lg:w-[300px] h-[280px] sm:h-[320px] lg:h-[400px] flex-shrink-0 flex flex-col"
                    >
                      {/* Icon container - top left */}
                      <div className="w-12 h-12 bg-gray-mid rounded-lg flex items-center justify-center mb-6">
                        <svg className="w-6 h-6 text-gray-dark" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                        </svg>
                      </div>
                      
                      {/* Content - bottom section */}
                      <div className="flex-1 flex flex-col justify-end space-y-4">
                        {/* Title */}
                        <h3 className="fonts-mono-m text-gray-light font-semibold tracking-wide text-left">
                          {card.title}
                        </h3>
                        
                        {/* Description */}
                        <p className="fonts-mono-xs text-gray-light leading-relaxed text-left">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  ))}
                  {/* Padding element */}
                  <div className="w-10 flex-shrink-0"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom navigation indicator - positioned at bottom of section */}
      <div className="absolute bottom-10 left-0 right-0 bottom-nav-indicator">
        <div className="grid grid-cols-12 gap-6 w-full px-6">
          <div className="col-start-3 col-span-8 relative">
            {/* Horizontal line with gradient - above text */}
            <div className="absolute -top-5 left-0 right-0 h-1 bg-gradient-to-r from-accent to-gray-mid progress-line"></div>
            <div className="flex items-center justify-between">
              <span className="fonts-mono-xs text-gray-light tracking-wide">FOCUS</span>
              <span className="fonts-mono-xs text-gray-light tracking-wide">ELECTRO</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
