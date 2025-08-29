"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui";

export const AboutSection = (): React.JSX.Element => {
  const services = [
    {
      id: "01",
      title: "INSTALACJA OKABLOWANIA\nNISKIEGO NAPIĘCIA",
      description:
        "Realizujemy profesjonalne rozprowadzenie, montaż oraz podłączenie niskonapięciowego okablowania na jednostkach morskich i przemysłowych. Wykonujemy precyzyjne pomiary, gwarantując bezpieczeństwo oraz niezawodność systemu.",
      textPosition: "left",
      image: "/images/homepage/services/s1.jpg",
    },
    {
      id: "02",
      title: "PRACE PRZYGOTOWAWCZE\n(METAWORK)",
      description:
        "Wykonujemy precyzyjne prace przygotowawcze, takie jak montaż tras kablowych, fundamentów, wsporników oraz przejść kablowych Roxtec, a także spawanie elementów stalowych pod instalacje elektryczne. Zapewniamy solidne i bezpieczne przygotowanie infrastruktury.",
      textPosition: "right",
      image: "/images/homepage/services/s2.jpg",
    },
    {
      id: "03",
      title: "AUTOMATYKA\nSTATKOWA",
      description:
        "Realizujemy montaż oraz wdrożenia systemów automatyki na statkach według dostarczonej dokumentacji. Dbamy o profesjonalny przebieg prac, zwiększając bezpieczeństwo i niezawodność jednostek w różnych warunkach.",
      textPosition: "left",
      image: "/images/homepage/services/s3.jpg",
    },
    {
      id: "04",
      title: "SERWIS",
      description:
        "Oferujemy elastyczny serwis w zakresie instalacji elektrycznych, automatyki oraz teletechniki, dopasowany do indywidualnych potrzeb klienta. Realizujemy prace naprawcze, konserwacyjne i modernizacje.",
      textPosition: "right",
      image: "/images/homepage/services/s4.jpg",
    },
    {
      id: "05",
      title: "MONTAŻ INSTALACJI SIECI LAN",
      description:
        "Projektujemy i wykonujemy okrętowe instalacje sieci LAN, zapewniając niezawodną komunikację i dostęp do nowoczesnej infrastruktury technologicznej na jednostkach pływających oraz w obiektach przemysłowych.",
      textPosition: "left",
      image: "/images/homepage/services/s5.jpg",
    },
    {
      id: "06",
      title: "INSTALACJE TELETECHNICZNE",
      description:
        "Zapewniamy profesjonalny montaż oraz kompleksowe wdrożenie systemów teletechnicznych w przemyśle okrętowym. Nasze rozwiązania podnoszą bezpieczeństwo i funkcjonalność nowoczesnych jednostek.",
      textPosition: "right",
      image: "/images/homepage/services/s6.jpg",
    },
  ];

  useEffect(() => {
    const initGSAP = async () => {
      if (typeof window !== 'undefined') {
        try {
          const { gsap } = await import('gsap');
          const { ScrollTrigger } = await import('gsap/ScrollTrigger');
          
          gsap.registerPlugin(ScrollTrigger);

          const cardsWrappers = gsap.utils.toArray(".card-wrapper") as HTMLElement[];
          const cards = gsap.utils.toArray(".card") as HTMLElement[];
          const cardImages = gsap.utils.toArray(".card-image") as HTMLElement[];
          const cardTitles = gsap.utils.toArray(".card-title") as HTMLElement[];

          cardsWrappers.forEach((wrapper: HTMLElement, i: number) => {
            const card = cards[i];
            const image = cardImages[i];
            const title = cardTitles[i];

            if (!card || !image || !title) return;

            const scale = 0.97;
            const rotation = -6;

            // Animacja wejścia
            gsap.from(card, {
              y: 30,
              opacity: 0,
              duration: 0.6,
              delay: i * 0.1,
              ease: "power2.out"
            });

            // Animacja scrollowania
            gsap.to(card, {
              scale: scale,
              rotationX: rotation,
              transformOrigin: "top center",
              ease: "none",
              scrollTrigger: {
                trigger: wrapper,
                start: "top " + (60 + 8 * i),
                end: "bottom 550",
                endTrigger: ".services-container",
                scrub: 0.5,
                pin: wrapper,
                pinSpacing: false,
                id: String(i + 1),
                onUpdate: (self: { isActive: boolean; progress: number }) => {
                  if (self.isActive) {
                    const zoomAmount = 1 + self.progress * 0.15;
                    gsap.set(image, {
                      scale: zoomAmount,
                      y: self.progress * -15
                    });

                    gsap.set(title, {
                      y: self.progress * -8
                    });
                  }
                }
              }
            });
          });
        } catch (error) {
          console.warn('GSAP not available:', error);
        }
      }
    };

    initGSAP();
  }, []);

  return (
    <section className="flex flex-col w-[calc(100%-2.5rem)] mx-auto items-center gap-16 pb-20 relative bg-gray-dark rounded-[24px] mt-5">
      <div className="flex flex-col items-center gap-16 w-full py-20">
        <div className="flex flex-col items-center gap-16 w-full">
          {/* Header */}
          <header className="text-center">
            <p className="fonts-mono-xs text-gray-light mb-4 max-w-col-l mx-auto">
              (O NAS)
            </p>
            <h2 className="fonts-fig-l text-light mb-8 max-w-col-2xl mx-auto ">
              Doświadczenie i kompetencje<br/>dla Twojego projektu
            </h2>
            <p className="fonts-mono-m text-gray-light leading-relaxed uppercase max-w-col-3xl mx-auto ">
            Od 2018 roku realizujemy kompleksowe instalacje elektryczne
            i  automatyczne dla stoczni w Polsce oraz < br/>za granicą.
            Nasze doświadczenie i wiedza praktyczna gwarantują skuteczne 
            wsparcie na każdym etapie  projektu – od nowych budów, przez 
            modernizacje, aż po serwis najbardziej wymagających jednostek.
            </p>
          </header>

          {/* Services Grid - 8 columns width */}
          <div className="w-full services-container">
            <div className="grid grid-cols-12 gap-5 mx-0">
              {/* Empty space for centering - 2 columns */}
              <div className="col-span-2"></div>
              {/* Main content - 8 columns */}
              <div className="col-span-8">
                <div className="flex flex-col gap-12">
                  {services.map((service) => (
                    <div key={service.id} className="card-wrapper">
                      <Card className="card flex w-full h-[500px] md:h-[500px] h-auto flex-col md:flex-row items-stretch gap-8 relative bg-gray-mid rounded-[24px] overflow-hidden">
                        <CardContent className="flex w-full h-full items-stretch gap-0 p-0 flex-col md:flex-row">
                          {service.textPosition === "left" ? (
                            <>
                              {/* Text Content - 4 kolumny */}
                              <div className="flex flex-col items-start justify-end gap-8 w-full md:w-2/5 min-w-0 p-8">
                                <div className="space-y-6">
                                  <h3 className="card-title fonts-mono-l text-gray-dark leading-tight whitespace-pre-line font-semibold">
                                    {service.title}
                                  </h3>
                                  <p className="fonts-mono-xs text-gray-dark uppercase leading-relaxed">
                                    {service.description}
                                  </p>
                                </div>
                                <div className="fonts-mono-l text-gray-dark font-bold">
                                  {service.id}
                                </div>
                              </div>

                              {/* Image - 6 kolumn */}
                              <div className="relative w-full md:w-3/5 h-[300px] md:h-full rounded-[24px] overflow-hidden flex-shrink-0 p-[3px]">
                                <Image 
                                  src={service.image} 
                                  alt={service.title}
                                  className="card-image w-full h-full object-cover rounded-[21px]"
                                  fill
                                  sizes="(max-width: 768px) 100vw, 60vw"
                                />
                              </div>
                            </>
                          ) : (
                            <>
                              {/* Image - 6 kolumn */}
                              <div className="relative w-full md:w-3/5 h-full rounded-[24px] overflow-hidden flex-shrink-0 p-[3px]">
                                <Image 
                                  src={service.image} 
                                  alt={service.title}
                                  className="card-image w-full h-full object-cover rounded-[21px]"
                                  fill
                                  sizes="(max-width: 768px) 100vw, 60vw"
                                />
                              </div>

                              {/* Text Content - 4 kolumny */}
                              <div className="flex flex-col items-start justify-end gap-8 w-full md:w-2/5 min-w-0 p-8">
                                <div className="space-y-6">
                                  <h3 className="card-title fonts-mono-l text-gray-dark leading-tight whitespace-pre-line font-semibold">
                                    {service.title}
                                  </h3>
                                  <p className="fonts-mono-xs text-gray-dark uppercase leading-relaxed">
                                    {service.description}
                                  </p>
                                </div>
                                <div className="fonts-mono-l text-gray-dark font-bold">
                                  {service.id}
                                </div>
                              </div>
                            </>
                          )}
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
              {/* Empty space for centering - 2 columns */}
              <div className="col-span-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
