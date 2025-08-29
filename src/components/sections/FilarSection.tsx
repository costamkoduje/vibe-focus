"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

export const FilarSection = (): React.JSX.Element => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const filary = [
    {
      title: "SKALA",
      description: "80+ SPECJALISTÓW PRACUJĄCYCH JEDNOCZEŚNIE\n W STOCZNIACH NA CAŁYM ŚWIECIE",
      image: "/images/career/cf1.png"
    },
    {
      title: "JAKOŚĆ",
      description: "7 lat nieprzerwanych terminowości i najwyższej\n jakości realizacji projektów",
      image: "/images/career/cf2.png"
    },
    {
      title: "WIEDZA",
      description: "100+ projektów z największych stoczni świata,\n w tym prestiżowych kontraktów",
      image: "/images/career/cf3.png"
    }
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
      <div className="relative w-[calc(100%-2.5rem)] mx-auto bg-[#8C9BA3] rounded-[22px] pt-20 pb-20">
        <div className="grid grid-cols-12 gap-5 lg:gap-5 ">
          {/* Header Section */}
          <div className="col-span-12 lg:col-start-3 lg:col-span-8 text-center">
            <p className="fonts-mono-xs text-[rgb(68,76,80)] uppercase mb-4 tracking-[0.4px]">
              [DLACZEGO FOCUS ELECTRO?]
            </p>
            <h2 className="fonts-fig-l text-[rgb(68,76,80)] mb-6 tracking-[-2.627px] leading-[72px]">
              Trzy filary naszego sukcesu w elektrotechnice morskiej
            </h2>
            <p className="fonts-mono-m text-[rgb(68,76,80)] leading-[30px] tracking-[0.4px]">
              We support all types of communication service providers (CSPs), from full-fledged operations to branded resellers. Choose the deployment model that best suits your needs:
            </p>
          </div>
        </div>

        {/* Three Pillars Section - Single Card with Three Sections */}
        <div className="mt-20 px-5">
          <div className="col-span-12 lg:col-start-3 lg:col-span-8 ">
                          <div 
                ref={containerRef}
                className="options-container flex flex-row items-stretch overflow-hidden min-w-[600px] max-w-[940px] w-[calc(100%-100px)] h-[460px] mx-auto rounded-[40px] bg-gray-light p-1 gap-1"
              >
              {filary.map((filar, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    cardsRef.current[index] = el;
                  }}
                  className="option relative overflow-hidden cursor-pointer bg-gray-mid  rounded-[40px]"
                  onClick={() => handleOptionClick(index)}
                >

                  {/* Card Content - Individual Card Layout */}
                  <div className="card-content absolute inset-0 flex flex-col justify-between p-6">
                    {/* Title and Description */}
                    <div className={activeIndex === index ? 'text-left' : 'text-center'}>
                      <h3 className="fonts-mono-m text-[rgb(68,76,80)] font-bold mb-4 tracking-[0.4px] uppercase">
                        {filar.title}
                      </h3>
                      <div className="description-content">
                        <p className="fonts-mono-m text-[rgb(68,76,80)] leading-[24px] tracking-[0.4px] uppercase whitespace-pre-line">
                          {filar.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Image/Visual Section */}
                    <div className="image-section relative w-full h-80 rounded-lg overflow-hidden">
                      <Image
                        src={filar.image}
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
