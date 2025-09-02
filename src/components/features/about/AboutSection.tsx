"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components";
import { useTranslation } from "@/lib/i18n";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Rejestruj ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const AboutSection = (): React.JSX.Element => {
  const { translations } = useTranslation();
  const cardsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!cardsRef.current) return;

    const cardElements = cardsRef.current.querySelectorAll('.card-wrapper');
    const totalCardElements = cardElements.length;

    cardElements.forEach((el, position) => {
      const isLast = position === totalCardElements - 1;
      
      gsap.to(el, {
        ease: 'none',
        scale: 0.95,
        opacity: 1,
        yPercent: isLast ? 0 : 0,
        scrollTrigger: {
          trigger: el,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
          invalidateOnRefresh: true
        }
      });
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
  // Sprawdź czy translations są dostępne
  if (!translations || !translations.aboutSection || !translations.about?.services || translations.about.services.length < 6) {
    return <div>Ładowanie...</div>;
  }
  
  const services = [
    {
      id: "01",
      title: translations.about.services[0]!.title,
      description: translations.about.services[0]!.description,
      textPosition: "left",
      image: "/images/homepage/services/s1.jpg",
    },
    {
      id: "02",
      title: translations.about.services[1]!.title,
      description: translations.about.services[1]!.description,
      textPosition: "right",
      image: "/images/homepage/services/s2.jpg",
    },
    {
      id: "03",
      title: translations.about.services[2]!.title,
      description: translations.about.services[2]!.description,
      textPosition: "left",
      image: "/images/homepage/services/s3.jpg",
    },
    {
      id: "04",
      title: translations.about.services[3]!.title,
      description: translations.about.services[3]!.description,
      textPosition: "right",
      image: "/images/homepage/services/s4.jpg",
    },
    {
      id: "05",
      title: translations.about.services[4]!.title,
      description: translations.about.services[4]!.description,
      textPosition: "left",
      image: "/images/homepage/services/s5.jpg",
    },
    {
      id: "06",
      title: translations.about.services[5]!.title,
      description: translations.about.services[5]!.description,
      textPosition: "right",
      image: "/images/homepage/services/s6.jpg",
    },
  ];

  return (
    <section className="flex flex-col w-[calc(100%-2.5rem)] mx-auto items-center gap-16 pb-20 relative bg-gray-dark rounded-l mt-5">
      <div className="flex flex-col items-center gap-16 w-full py-20">
        <div className="flex flex-col items-center gap-16 w-full">
          {/* Header */}
          <header className="text-center">
            <p className="fonts-mono-xs text-gray-light mb-4 max-w-col-l mx-auto">
              {translations.aboutSection.subtitle}
            </p>
            <h2 className="fonts-fig-l text-light mb-8 max-w-col-2xl mx-auto">
              {translations.aboutSection.title.split('<br/>').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index < translations.aboutSection.title.split('<br/>').length - 1 && <br/>}
                </React.Fragment>
              ))}
            </h2>
            <p className="fonts-mono-m text-gray-light leading-relaxed uppercase max-w-col-3xl mx-auto">
              {translations.aboutSection.description.split('<br/>').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index < translations.aboutSection.description.split('<br/>').length - 1 && <br/>}
                </React.Fragment>
              ))}
            </p>
          </header>

          {/* Services Grid - responsive */}
          <div className="w-full services-container" ref={cardsRef}>
            <div className="w-full max-w-6xl mx-auto px-4 md:px-8">
              <div className="flex flex-col gap-12">
                {services.map((service) => (
                  <div key={service.id} className="card-wrapper">
                    <Card className="card flex w-full h-auto flex-col md:flex-row items-stretch gap-8 relative bg-gray-mid rounded-l overflow-hidden">
                    <CardContent className="grid grid-cols-1 md:grid-cols-5 w-full h-auto md:h-[60vh] gap-0 p-1">
                        {/* Numer - na górze na mobile */}
                        <div className="p-8 md:col-span-2 md:flex md:flex-col md:justify-between">
                          <div className="fonts-mono-l text-gray-dark font-bold">
                            {service.id}
                          </div>
                          <div className="space-y-6 mt-8 md:mt-0">
                            <h3 className="card-title fonts-mono-l text-gray-dark leading-tight whitespace-pre-line font-semibold">
                              {service.title}
                            </h3>
                            <p className="fonts-mono-xs text-gray-dark uppercase leading-relaxed">
                              {service.description}
                            </p>
                          </div>
                        </div>

                        {/* Image - między numerem a tytułem na mobile */}
                        <div className={`relative w-full h-[180px] md:h-full rounded-l overflow-hidden md:col-span-3 ${service.textPosition === "right" ? "md:order-first" : ""}`}>
                          <Image 
                            src={service.image} 
                            alt={service.title}
                            className="card-image w-full h-full object-cover rounded-b-l md:rounded-l"
                            fill
                            sizes="(max-width: 768px) 100vw, 60vw"
                          />
                        </div>
                      </CardContent>
                    </Card>
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
