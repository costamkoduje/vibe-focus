"use client";

import React, { useEffect, useRef } from "react";
import { useTranslation } from "@/lib/i18n";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Rejestruj ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const ValueSection = (): React.JSX.Element => {
  const { translations } = useTranslation();
  const valuesRef = useRef<HTMLDivElement>(null);
  
  const values = translations.careerPage?.values?.items || [
    {
      title: "Jakość",
      description: "Dążymy do perfekcji w każdym projekcie, zapewniając najwyższe standardy usług i niezawodność realizacji."
    },
    {
      title: "Terminowość",
      description: "Pracujemy sprawnie i efektywnie, aby spełniać zobowiązania wobec klientów i zespołu na czas."
    },
    {
      title: "Profesjonalizm",
      description: "Nasz zespół składa się z ekspertów, którzy stale podnoszą swoje kwalifikacje w elektrotechnice morskiej."
    },
    {
      title: "Pasja do morza",
      description: "Miłość do morza i prądu napędza nas do odkrywania nowych rozwiązań technologicznych."
    },
    {
      title: "Partnerstwo",
      description: "Budujemy długotrwałe relacje oparte na zaufaniu, współpracy i wzajemnym szacunku."
    }
  ];

  useEffect(() => {
    if (!valuesRef.current) return;

    const valueElements = valuesRef.current.querySelectorAll('.value-card');
    const totalValueElements = valueElements.length;

    valueElements.forEach((el, position) => {
      const isLast = position === totalValueElements - 1;
      
      gsap.to(el, {
        ease: 'none',

        yPercent: isLast ? 0 : 0,
        scrollTrigger: {
          trigger: el,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
          invalidateOnRefresh: true,
          markers: false
        }
      });
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);


  return (
    <section className="relative w-full flex flex-col mb-5">
      <div className="relative w-[calc(100%-2.5rem)] mx-auto bg-gray-dark rounded-l pt-20 pb-20 sticky-section">
        <div className="grid grid-cols-12 gap-5 lg:gap-5">
          {/* Left Column - Text - 4 columns */}
          <div className="col-span-12 lg:col-start-3 lg:col-span-4">
            <p className="fonts-mono-xs text-gray-mid uppercase mb-4 tracking-[0.4px]">
              {translations.careerPage.values.title}
            </p>
            <h2 className="fonts-fig-l text-light mb-6 leading-tight">
              {translations.careerPage?.values?.mainTitle || "Nasze wartości to kamienie węgielne naszego sukcesu"}
            </h2>
            <p className="fonts-mono-m text-gray-light uppercase leading-relaxed tracking-wide">
              {translations.careerPage?.values?.mainDescription || "Poznaj wartości, które definiują kulturę pracy w Focus Electro i sprawiają, że jesteśmy wyjątkowym miejscem rozwoju zawodowego."}
            </p>
          </div>

          {/* Right Column - Value Cards - 4 columns */}
          <div className="col-span-12 lg:col-start-7 lg:col-span-4 w-full bg-gray-mid rounded-l p-1" ref={valuesRef}>
            <div className="flex flex-col h-full">
              {values.map((value, index) => (
                <div key={index} className="value-card bg-dark rounded-l p-6 flex flex-col justify-between pb-10">
                  <div>
                      {/* Icon container - top left */}
                      <div className="w-12 h-12 bg-gray-mid rounded-lg flex items-center justify-center mb-6">
                        <svg className="w-6 h-6 text-gray-dark" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                        </svg>
                      </div>
                    <h3 className="fonts-mono-m text-light mb-8 mt-10 font-semibold">
                      {value.title}
                    </h3>
                    <p className="fonts-mono-xs text-gray-light leading-relaxed mb-6">
                      {value.description}
                    </p>
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
