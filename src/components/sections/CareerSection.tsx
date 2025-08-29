import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui";

export const CareerSection = (): React.JSX.Element => {
  const careerData = [
    {
      title: "Pracownik",
      description: "DOŁĄCZ DO ZESPOŁU SPECJALISTÓW REALIZUJĄCYCH PRESTIŻOWE PROJEKTY JAK ICON OF THE SEAS. ROZWIJAJ SWOJĄ KARIERĘ W ELEKTROTECHNICE MORSKIEJ Z LIDEREM BRANŻY.",
      icon: (
        <svg className="w-8 h-8 text-dark" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
      ),
      bgColor: "bg-accent",
      image: "/images/about/ac1.png"
    },
    {
      title: "Kontrahent", 
      description: "POWIERZ SWOJE PROJEKTY STOCZNIOWE ZESPOŁOWI Z DOŚWIADCZENIEM W PONAD 100 REALIZACJACH. GWARANTUJEMY JAKOŚĆ, TERMINOWOŚĆ I KOMPLEKSOWĄ OBSŁUGĘ.",
      icon: (
        <svg className="w-8 h-8 text-light" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
      ),
      bgColor: "bg-gray-dark",
      image: "/images/about/ac2.png"
    }
  ];

  return (
    <section className="flex flex-col w-[calc(100%-2.5rem)] mx-auto items-center gap-16 pb-20 relative bg-gray-mid rounded-[24px] mt-5">
      <div className="flex flex-col items-center gap-16 w-full py-20">
        <div className="flex flex-col items-center gap-16 w-full">
          {/* Header */}
          <header className="text-center">
            <p className="fonts-mono-xs text-gray-dark mb-4 max-w-col-l mx-auto uppercase tracking-wider">
              Praca z nami
            </p>
            <h2 className="fonts-fig-l text-gray-dark mb-8 max-w-col-2xl mx-auto">
              Rozwiń swój potencjał
            </h2>
            <p className="fonts-mono-m text-gray-dark leading-relaxed uppercase max-w-col-3xl mx-auto">
              FOCUS ELECTRO TO NIE TYLKO FIRMA; TO PARTNER W OSIĄGANIU DOSKONAŁOŚCI. NASZE KOMPLEKSOWE ROZWIĄZANIA ZOSTAŁY ZAPROJEKTOWANE, ABY WSPIERAĆ ROZWÓJ W BRANŻY STOCZNIOWEJ:
            </p>
          </header>

          {/* Career Cards Grid - 8 columns width */}
          <div className="w-full">
            <div className="grid grid-cols-12 gap-5 mx-0">
              {/* Empty space for centering - 2 columns */}
              <div className="col-span-2"></div>
              {/* Main content - 8 columns */}
              <div className="col-span-8">
                <div className="bg-gray-light rounded-[25px] border-1 border-gray-mid p-[1px]">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-[3px] p-[3px]">
                    {careerData.map((career, index) => (
                      <Card
                        key={index}
                        className="bg-gray-mid border-none rounded-[24px] overflow-hidden"
                      >
                        <CardContent className="p-6 flex flex-col items-start gap-6 text-left">
                          {/* Tytuł z ikoną */}
                          <div className="flex items-center gap-4">
                            <div className={`w-16 h-16 ${career.bgColor} rounded-[12px] flex items-center justify-center`}>
                              {career.icon}
                            </div>
                            <h3 className="fonts-fig-m text-gray-dark">
                              {career.title}
                            </h3>
                          </div>
                          
                          {/* Zdjęcie */}
                          <div className="w-full h-48 overflow-hidden rounded-[16px] relative">
                            <Image 
                              src={career.image} 
                              alt={`${career.title} - możliwości rozwoju w Focus Electro`}
                              className="object-cover"
                              fill
                              sizes="(max-width: 768px) 100vw, 50vw"
                            />
                          </div>
                          
                          {/* Podpis */}
                          <div className="space-y-4">
                            <p className="fonts-mono-m text-gray-dark text-left uppercase leading-relaxed">
                              {career.description}
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
