"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useTranslation } from "@/lib/i18n";

export const FilarSection = (): React.JSX.Element => {
  const { translations } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const filary = translations.cooperationPage?.filary?.items || [
    {
      title: "SKALA",
      description: "80+ SPECJALISTÓW PRACUJĄCYCH JEDNOCZEŚNIE\n W STOCZNIACH NA CAŁYM ŚWIECIE"
    },
    {
      title: "JAKOŚĆ",
      description: "7 lat nieprzerwanych terminowości i najwyższej\n jakości realizacji projektów"
    },
    {
      title: "WIEDZA",
      description: "100+ projektów z największych stoczni świata,\n w tym prestiżowych kontraktów"
    }
  ];

  const images = [
    "/images/career/f1.png",
    "/images/career/f2.png",
    "/images/career/f3.png"
  ];

  const handleOptionClick = async (index: number) => {
    setActiveIndex(index);
    
    // Sprawdź czy jesteśmy w przeglądarce
    if (typeof window === 'undefined') return;
    
    // Dynamic import GSAP
    const gsap = await import('gsap');
    
    // GSAP animation
    if (containerRef.current && cardsRef.current.length > 0) {
      const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
      const isMobile = window.innerWidth < 640; // sm breakpoint
      
      cards.forEach((card, i) => {
        let targetFlex;
        if (isMobile) {
          // Na telefonie: aktywna 2/4, nieaktywne 1/4
          targetFlex = i === index ? 2 : 1;
        } else {
          // Na desktop: aktywna 1, nieaktywne 0.2
          targetFlex = i === index ? 1 : 0.2;
        }
        
        gsap.default.to(card, {
          flex: targetFlex,
          duration: 0.5,
          ease: "power2.out"
        });
      });
      
      // Animate description content and collapsed icons
      cards.forEach((card, i) => {
        const descriptionContent = card.querySelector('.description-content') as HTMLElement;
        const imageSection = card.querySelector('.image-section') as HTMLElement;
        const collapsedIcon = card.querySelector('.collapsed-icon') as HTMLElement;
        
        if (descriptionContent) {
          gsap.default.to(descriptionContent, {
            opacity: i === index ? 1 : 0,
            duration: 0.3,
            delay: i === index ? 0.1 : 0
          });
        }
        
        if (imageSection) {
          gsap.default.to(imageSection, {
            opacity: i === index ? 1 : 0,
            duration: 0.3,
            delay: i === index ? 0.1 : 0
          });
        }
        
        if (collapsedIcon) {
          gsap.default.to(collapsedIcon, {
            opacity: i === index ? 0 : 1,
            duration: 0.3,
            delay: i === index ? 0 : 0.1
          });
        }
      });
    }
  };

  useEffect(() => {
    // Sprawdź czy jesteśmy w przeglądarce
    if (typeof window === 'undefined') return;
    
    // Dynamic import GSAP
    const initGSAP = async () => {
      const gsap = await import('gsap');
      
      // Initialize GSAP animation
      if (containerRef.current && cardsRef.current.length > 0) {
        const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
        const isMobile = window.innerWidth < 640; // sm breakpoint
        
        cards.forEach((card, i) => {
          let initialFlex;
          if (isMobile) {
            // Na telefonie: pierwsza karta 2/4, pozostałe 1/4
            initialFlex = i === 0 ? 2 : 1;
          } else {
            // Na desktop: pierwsza karta 1, pozostałe 0.2
            initialFlex = i === 0 ? 1 : 0.2;
          }
          
          gsap.default.set(card, {
            flex: initialFlex
          });
        });
        
        // Set initial content opacity and collapsed icons
        cards.forEach((card, i) => {
          const descriptionContent = card.querySelector('.description-content') as HTMLElement;
          const imageSection = card.querySelector('.image-section') as HTMLElement;
          const collapsedIcon = card.querySelector('.collapsed-icon') as HTMLElement;
          
          if (descriptionContent) {
            gsap.default.set(descriptionContent, {
              opacity: i === 0 ? 1 : 0
            });
          }
          
          if (imageSection) {
            gsap.default.set(imageSection, {
              opacity: i === 0 ? 1 : 0
            });
          }
          
          if (collapsedIcon) {
            gsap.default.set(collapsedIcon, {
              opacity: i === 0 ? 0 : 1
            });
          }
        });
      }
    };

    initGSAP();
  }, []);

  return (
    <section className="relative w-full flex flex-col mb-5">
      <div className="relative w-full md:w-[calc(100%-2.5rem)] md:mx-auto bg-gray-mid rounded-l pt-20 pb-20">
        <div className="max-w-6xl mx-auto px-5 md:px-0">
        <div className="grid grid-cols-8 gap-5 lg:gap-5 px-5 md:px-0">
          {/* Header Section */}
          <div className="col-span-8 lg:col-start-2 lg:col-span-6 text-center">
            <p className="fonts-mono-xs text-gray-dark uppercase mb-4 tracking-wide">
            {translations.cooperationPage?.filary?.subtitle || "(Dlaczego Focus Electro?)"}
            </p>
            <h2 className="fonts-fig-l text-gray-dark mb-6 leading-tight">
            {translations.cooperationPage?.filary?.title || "Trzy filary naszego sukcesu w elektrotechnice morskiej"}
            </h2>
            <p className="fonts-mono-m text-gray-dark leading-relaxed tracking-wide">
            {translations.cooperationPage?.filary?.description || "Nasza skuteczność to wynik synergii skali działania, najwyższej jakości i bogatego doświadczenia. Właśnie te wartości sprawiają, że Focus Electro jest zaufanym partnerem największych projektów w branży elektrotechniki morskiej"}
            </p>
          </div>
        </div>

        {/* Three Pillars Section - Single Card with Three Sections */}
        <div className="mt-20 px-5 md:px-0">
          <div className="col-span-8 lg:col-start-2 lg:col-span-6">
            <div 
              ref={containerRef}
              className="options-container flex flex-col sm:flex-row items-stretch overflow-hidden w-full h-[600px] sm:h-[300px] md:h-[380px] lg:h-[460px] mx-auto rounded-xl bg-gray-light p-1 gap-1"
            >
              {filary.map((filar, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    cardsRef.current[index] = el;
                  }}
                  className="option relative overflow-hidden cursor-pointer bg-gray-mid rounded-xl flex-shrink-0"
                  onClick={() => handleOptionClick(index)}
                >

                  {/* Card Content - Individual Card Layout */}
                  <div className="card-content absolute inset-0 flex flex-col justify-between p-4 sm:p-6">
                    {/* Title and Description */}
                    <div className={activeIndex === index ? 'text-left' : 'text-center'}>
                      <h3 className="fonts-mono-m text-gray-dark font-bold mb-4 tracking-wide uppercase text-sm sm:text-base">
                        {filar.title}
                      </h3>
                      <div className="description-content">
                        <p className="fonts-mono-xs sm:fonts-mono-m text-gray-dark leading-relaxed tracking-wide uppercase whitespace-pre-line text-xs sm:text-sm">
                          {filar.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Image/Visual Section */}
                    <div className="image-section relative w-full h-32 sm:h-80 rounded-lg overflow-hidden">
                      <Image
                        src={images[index] || ""}
                        alt={`${filar.title} - Focus Electro`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  </div>
                  
                  {/* Collapsed State Icon */}
                  <div className="collapsed-icon absolute bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center">
                    <svg width="20" height="21" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-[27px] sm:h-[28px]">
                      <path d="M13.1919 27.2813V0.257812M0.15332 13.7692H26.2273" stroke="#FDE10D" strokeWidth="2.71048"/>
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};
