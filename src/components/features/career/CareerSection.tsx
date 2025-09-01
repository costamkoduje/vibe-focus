'use client';

import React from "react";
import { Card, CardContent } from "@/components";
import { useTranslation } from "@/lib/i18n";
import Image from "next/image";

export const CareerSection = (): React.JSX.Element => {
  const { translations } = useTranslation();
  
  const careerData = [
    {
      title: translations.careerSection?.careerOptions?.[0]?.title || "Pracownik",
      description: translations.careerSection?.careerOptions?.[0]?.description || "Dołącz do zespołu specjalistów realizujących prestiżowe projekty jak Icon of the Seas. Rozwijaj swoją karierę w elektrotechnice morskiej z liderem branży.",
      svgIcon: "/images/svg/pracownik.png"
    },
    {
      title: translations.careerSection?.careerOptions?.[1]?.title || "Kontrahent",
      description: translations.careerSection?.careerOptions?.[1]?.description || "Powierz swoje projekty stoczniowe zespołowi z doświadczeniem w ponad 100 realizacjach. Gwarantujemy jakość, terminowość i kompleksową obsługę.",
      svgIcon: "/images/svg/kontrahent.png"
    }
  ];

  return (
    <section className="flex flex-col w-[calc(100%-2.5rem)] mx-auto items-center gap-16 relative bg-gray-mid rounded-l ">
      <div className="flex flex-col items-center gap-16 w-full py-20">
        <div className="flex flex-col items-center gap-16 w-full">
          {/* Header */}
          <header className="text-center">
            <p className="fonts-mono-xs text-gray-dark mb-4 max-w-col-l mx-auto uppercase tracking-wider">
            {translations.careerSection?.subtitle || "(Praca z nami)"}
            </p>
            <h2 className="fonts-fig-l text-gray-dark mb-8 max-w-col-2xl mx-auto">
            {translations.careerSection?.title || "Rozwiń swój potencjał"}
            </h2>
            <p className="fonts-mono-m text-gray-dark leading-relaxed uppercase max-w-col-3xl mx-auto">
            {translations.careerSection?.description || "Focus Electro to nie tylko firma; to partner w osiąganiu doskonałości. Nasze kompleksowe rozwiązania zostały zaprojektowane, aby wspierać rozwój w branży stoczniowej:"}
            </p>
          </header>

          {/* Career Cards Grid - 8 columns width */}
          <div className="w-full">
            <div className="grid grid-cols-12 gap-5 mx-0">
              {/* Empty space for centering - 2 columns */}
              <div className="col-span-2"></div>
              {/* Main content - 8 columns */}
              <div className="col-span-8">
                <div className="bg-gray-light rounded-l">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-1 p-1">
                    {careerData.map((career, index) => (
                      <Card
                        key={index}
                        className="bg-gray-mid border-none rounded-l overflow-hidden"
                      >
                        <CardContent className="p-8 flex flex-col items-start gap-8 text-left">
                          {/* Ikony PNG na górze - większe i szerokie */}
                          <div className="w-full">
                            <div className="relative w-full h-32 rounded-l flex items-center justify-center">
                              <Image 
                                src={career.svgIcon} 
                                alt={`${career.title} ikona`}
                                width={420}
                                height={420}
                                className="object-contain opacity-80"
                              />
                            </div>
                          </div>
                          
                          {/* Tytuł */}
                          <h3 className="fonts-fig-m text-gray-dark">
                            {career.title}
                          </h3>
                          
                          {/* Opis */}
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
