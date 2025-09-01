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
    const { gsap } = await import('gsap');
    
    // GSAP animation
    if (containerRef.current && cardsRef.current.length > 0) {
      const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
      
      cards.forEach((card, i) => {
        const targetFlex = index === 0 ? (i === 0 ? 1 : 0.2) : 
                          index === 1 ? (i === 1 ? 1 : 0.2) : 
                          (i === 2 ? 1 : 0.2);
        
        gsap.to(card, {
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
          gsap.to(descriptionContent, {
            opacity: i === index ? 1 : 0,
            duration: 0.3,
            delay: i === index ? 0.1 : 0
          });
        }
        
        if (imageSection) {
          gsap.to(imageSection, {
            opacity: i === index ? 1 : 0,
            duration: 0.3,
            delay: i === index ? 0.1 : 0
          });
        }
        
        if (collapsedIcon) {
          gsap.to(collapsedIcon, {
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
      const { gsap } = await import('gsap');
      
      // Initialize GSAP animation
      if (containerRef.current && cardsRef.current.length > 0) {
        const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
        
        cards.forEach((card, i) => {
          gsap.set(card, {
            flex: i === 0 ? 1 : 0.2
          });
        });
        
        // Set initial content opacity and collapsed icons
        cards.forEach((card, i) => {
          const descriptionContent = card.querySelector('.description-content') as HTMLElement;
          const imageSection = card.querySelector('.image-section') as HTMLElement;
          const collapsedIcon = card.querySelector('.collapsed-icon') as HTMLElement;
          
          if (descriptionContent) {
            gsap.set(descriptionContent, {
              opacity: i === 0 ? 1 : 0
            });
          }
          
          if (imageSection) {
            gsap.set(imageSection, {
              opacity: i === 0 ? 1 : 0
            });
          }
          
          if (collapsedIcon) {
            gsap.set(collapsedIcon, {
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
      <div className="relative w-[calc(100%-2.5rem)] mx-auto bg-gray-mid rounded-l pt-20 pb-20">
        <div className="grid grid-cols-12 gap-5 lg:gap-5 ">
          {/* Header Section */}
          <div className="col-span-12 lg:col-start-3 lg:col-span-8 text-center">
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
        <div className="mt-20 px-5">
          <div className="col-span-12 lg:col-start-3 lg:col-span-8 ">
                          <div 
                ref={containerRef}
                className="options-container flex flex-row items-stretch overflow-hidden min-w-full sm:min-w-[500px] lg:min-w-[600px] max-w-full lg:max-w-[940px] w-[calc(100%-2rem)] sm:w-[calc(100%-50px)] lg:w-[calc(100%-100px)] h-[300px] sm:h-[380px] lg:h-[460px] mx-auto rounded-xl bg-gray-light p-1 gap-1"
              >
              {filary.map((filar, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    cardsRef.current[index] = el;
                  }}
                  className="option relative overflow-hidden cursor-pointer bg-gray-mid  rounded-xl"
                  onClick={() => handleOptionClick(index)}
                >

                  {/* Card Content - Individual Card Layout */}
                  <div className="card-content absolute inset-0 flex flex-col justify-between p-6">
                    {/* Title and Description */}
                    <div className={activeIndex === index ? 'text-left' : 'text-center'}>
                      <h3 className="fonts-mono-m text-gray-dark font-bold mb-4 tracking-wide uppercase">
                        {filar.title}
                      </h3>
                      <div className="description-content">
                        <p className="fonts-mono-m text-gray-dark leading-relaxed tracking-wide uppercase whitespace-pre-line">
                          {filar.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Image/Visual Section */}
                    <div className="image-section relative w-full h-80 rounded-lg overflow-hidden">
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
                  <div className="collapsed-icon absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-12 flex items-center justify-center">
                    <svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.1919 27.2813V0.257812M0.15332 13.7692H26.2273" stroke="#FDE10D" strokeWidth="2.71048"/>
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
