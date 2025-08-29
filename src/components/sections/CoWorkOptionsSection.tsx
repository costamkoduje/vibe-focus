import React from "react";
import { Card, CardContent } from "@/components/ui";
import Image from "next/image";

export const CoWorkOptionsSection = (): React.JSX.Element => {
  const coWorkData = [
    {
      title: "Zlecenie projektu",
      description: "PRZYJMUJEMY PEŁNĄ ODPOWIEDZIALNOŚĆ ZA PROJEKT OD A DO Z. ZAJMUJEMY SIĘ KOMPLEKSOWĄ REALIZACJĄ, ZARZĄDZANIEM ZESPOŁEM I DOSTARCZENIEM GOTOWEGO ROZWIĄZANIA. IDEALNE DLA FIRM, KTÓRE CHCĄ SKUPIĆ SIĘ NA SWOJEJ GŁÓWNEJ DZIAŁALNOŚCI.",
      icon: (
        <svg className="w-8 h-8 text-dark" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
        </svg>
      ),
      bgColor: "bg-accent",
      image: "/images/cowork/cc1.png"
    },
    {
      title: "Wynajem specjalistów", 
      description: "DOSTARCZAMY DOŚWIADCZONYCH ELEKTRYKÓW I TECHNIKÓW DO TWOJEGO PROJEKTU. ZARZĄDZAMY ZESPOŁEM, DBAMY O BEZPIECZEŃSTWO I ZAPEWNIAMY JAKOŚĆ PRACY. IDEALNE DLA PROJEKTÓW WYMAGAJĄCYCH SPECJALISTYCZNEJ WIEDZY.",
      icon: (
        <svg className="w-8 h-8 text-light" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H17c-.8 0-1.54.37-2.01 1l-4.7 6.3c-.3.4-.49.87-.49 1.4V20c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2z"/>
        </svg>
      ),
      bgColor: "bg-gray-dark",
      image: "/images/cowork/cc2.png"
    }
  ];

  return (
    <section className="flex flex-col w-[calc(100%-2.5rem)] mx-auto items-center gap-16 pb-20 relative bg-gray-mid rounded-[24px] mt-5">
      <div className="flex flex-col items-center gap-16 w-full py-20">
        <div className="flex flex-col items-center gap-16 w-full">
          {/* Header */}
          <header className="text-center">
            <p className="fonts-mono-xs text-gray-dark mb-4 max-w-col-l mx-auto uppercase tracking-wider">
              Formy współpracy
            </p>
            <h2 className="fonts-fig-l text-gray-dark mb-8 max-w-col-2xl mx-auto">
              Wybierz najlepszą opcję
            </h2>
            <p className="fonts-mono-m text-gray-dark leading-relaxed uppercase max-w-col-3xl mx-auto">
              DOSTOSOWUJEMY SIĘ DO TWOICH POTRZEB I MOŻLIWOŚCI. OFERUJEMY DWA GŁÓWNE MODELE WSPÓŁPRACY, KTÓRE MOŻNA ŁĄCZYĆ I DOSTOSOWYWAĆ DO SPECYFIKI PROJEKTU:
            </p>
          </header>

          {/* CoWork Cards Grid - 8 columns width */}
          <div className="w-full">
            <div className="grid grid-cols-12 gap-5 mx-0">
              {/* Empty space for centering - 2 columns */}
              <div className="col-span-2"></div>
              {/* Main content - 8 columns */}
              <div className="col-span-8">
                <div className="bg-gray-light rounded-[25px] border-1 border-gray-mid p-[1px]">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-[3px] p-[3px]">
                    {coWorkData.map((option, index) => (
                      <Card
                        key={index}
                        className="bg-gray-mid border-none rounded-[24px] overflow-hidden"
                      >
                        <CardContent className="p-6 flex flex-col items-start gap-6 text-left">
                          {/* Tytuł z ikoną */}
                          <div className="flex items-center gap-4">
                            <div className={`w-16 h-16 ${option.bgColor} rounded-[12px] flex items-center justify-center`}>
                              {option.icon}
                            </div>
                            <h3 className="fonts-fig-m text-gray-dark">
                              {option.title}
                            </h3>
                          </div>
                          
                          {/* Zdjęcie */}
                          <div className="w-full h-80 overflow-hidden relative">
                            <Image 
                              src={option.image} 
                              alt={option.title}
                              fill
                              className="object-cover"
                              priority={false}
                              sizes="(max-width: 768px) 100vw, 50vw"
                            />
                          </div>
                          
                          {/* Podpis */}
                          <div className="space-y-4">
                            <p className="fonts-mono-m text-gray-dark text-left uppercase leading-relaxed">
                              {option.description}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
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
