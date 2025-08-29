"use client";

import React, { useEffect, useRef } from "react";

export const HeroCoWorkSection = (): React.JSX.Element => {
  const horizontalRef = useRef<HTMLDivElement>(null);
  const cards = [
    {
      title: "GLOBALNA OBECNOŚĆ",
      description: "REALIZACJA PROJEKTÓW JEDNOCZEŚNIE W STOCZNIACH NA CAŁYM ŚWIECIE."
    },
    {
      title: "ZESPOŁY SPECJALISTÓW",
      description: "DOŚWIADCZENI ELEKTROMONTERZY GOTOWI DO PRACY W TRYBIE 24/7."
    },
    {
      title: "ZARZĄDZANIE PROJEKTAMI",
      description: "PEŁNA KOORDYNACJA REALIZACJI OD PLANOWANIA PO ODBIÓR KOŃCOWY."
    },
    {
      title: "WSPARCIE TECHNICZNE",
      description: "SERWIS I KONSERWACJA SYSTEMÓW ELEKTRYCZNYCH NA KAŻDYM ETAPIE."
    },
    {
      title: "TERMINOWOŚĆ REALIZACJI",
      description: "GWARANTUJEMY DOTRZYMANIE HARMONOGRAMÓW NAJBARDZIEJ WYMAGAJĄCYCH PROJEKTÓW."
    },
    {
      title: "ELASTYCZNOŚĆ ZESPOŁÓW",
      description: "DOSTOSOWUJEMY WIELKOŚĆ I SKŁAD ZESPOŁÓW DO POTRZEB KAŻDEGO PROJEKTU."
    },
    {
      title: "BEZPIECZEŃSTWO PRACY",
      description: "NAJWYŻSZE STANDARDY BEZPIECZEŃSTWA NA KAŻDYM ETAPIE REALIZACJI PROJEKTU."
    }
  ];

  useEffect(() => {
    // Sprawdź czy jesteśmy w przeglądarce
    if (typeof window === 'undefined') return;

    // Dynamic import GSAP
    const initGSAP = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      
      gsap.registerPlugin(ScrollTrigger);
      
      if (horizontalRef.current) {
        // Pinning nawigacji - przypina nawigację do góry strony od razu
        if (typeof document !== 'undefined' && document.getElementById('navigation')) {
          ScrollTrigger.create({
            trigger: 'body',
            start: 'top top',
            end: 'end',
            pin: '#navigation',
            pinSpacing: true,
            markers: false
          });
        }

        // Pinning sekcji
        if (typeof document !== 'undefined' && document.body) {
          ScrollTrigger.create({
            trigger: 'body',
            start: 'top top',
            end: '+=240%',
            pin: true,
            pinSpacing: true,
            markers: false
          });
        }

        // Horizontal scroll dla kart
        if (horizontalRef.current) {
          gsap.to('.horizontal-scroll', {
            x: () => horizontalRef.current!.scrollWidth * -1,
            xPercent: 100,
            scrollTrigger: {
              trigger: '.horizontal-scroll',
              start: 'center center',
              end: '+=2000px',
              scrub: true,
              invalidateOnRefresh: true
            }
          });
        }

        // Animacja bottom navigation indicator
        gsap.fromTo('.bottom-nav-indicator', 
          {
            opacity: 0,
            y: 30
          },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: '.horizontal-scroll',
              start: '+=690px center',
              end: '+=2000px',
              scrub: false,
              toggleActions: "play none none reverse",
              markers: false
            }
          }
        );

        // Progress bar animation dla linii
        gsap.fromTo('.progress-line', 
          {
            scaleX: 0,
            transformOrigin: "left"
          },
          {
            scaleX: 1,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: '.horizontal-scroll',
              start: '+=690px center',
              end: '+=2000px',
              scrub: true,
              invalidateOnRefresh: true
            }
          }
        );
      }
    };

    initGSAP();
  }, []);

  return (
    <section id="horizontal-scroll-section" className="flex flex-col w-[calc(100%-2.5rem)] py-16 relative overflow-hidden bg-gray-dark rounded-[24px] mt-5 mx-5 h-[85vh]">
      
      <div className="horizontal-scroll-wrapper overflow-hidden h-full">
        <div ref={horizontalRef} className="horizontal-scroll flex h-full">
          <div className="flex flex-shrink-0 w-full">
            <div className="grid grid-cols-12 gap-6 w-full items-center">
              {/* Left section - Text content (columns 3-7) */}
              <div className="col-start-3 col-span-5 rounded-[24px] flex items-center">
                <div className="space-y-6">
                  <div className="fonts-mono-xs text-gray-light tracking-wide">
                    [WSPÓŁPRACA Z FOCUS ELECTRO]
                  </div>
                  
                  <h1 className="fonts-fig-xxl text-light leading-tight">
                    Profesjonalna pomoc elektrotechniczna dla Twojego projektu
                  </h1>
                  
                  <p className="fonts-mono-l text-gray-light leading-relaxed">
                    ODKRYJ PEŁNE SPEKTRUM MOŻLIWOŚCI WSPÓŁPRACY Z LIDEREM ELEKTROTECHNIKI MORSKIEJ. FOCUS ELECTRO OFERUJE KOMPLEKSOWE WSPARCIE NA KAŻDYM ETAPIE REALIZACJI PROJEKTÓW STOCZNIOWYCH - OD PLANOWANIA PO DŁUGOTERMINOWĄ OBSŁUGĘ SERWISOWĄ.
                  </p>
                </div>
              </div>

              {/* Right section - Cards (columns 8-10) */}
              <div className="col-start-8 col-span-5 bg-gray-mid p-1 rounded-[24px] min-w-[2133px] h-[408px] mr-10 flex items-center">
                <div className="flex gap-1">
                  {cards.map((card, index) => (
                    <div 
                      key={index}
                      className="bg-dark rounded-[20px] p-6 w-[300px] h-[400px] flex-shrink-0 flex flex-col"
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
