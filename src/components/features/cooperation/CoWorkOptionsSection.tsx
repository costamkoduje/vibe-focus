"use client";

import React from "react";
import { Card, CardContent } from "@/components";
import Image from "next/image";
import { useTranslation } from "@/lib/i18n";

export const CoWorkOptionsSection = (): React.JSX.Element => {
  const { translations } = useTranslation();
  
  const coWorkData = [
    {
      title: translations.cooperationPage?.coWorkOptions?.items?.[0]?.title || "Zlecenie projektu",
      description: translations.cooperationPage?.coWorkOptions?.items?.[0]?.description || "Przejmujemy pełną odpowiedzialność za projekt - od planowania po odbiór końcowy. Zarządzamy zespołem, harmonogramem i jakością wykonania",
      svgIcon: "/images/svg/zlecenie.png"
    },
    {
      title: translations.cooperationPage?.coWorkOptions?.items?.[1]?.title || "Wynajem specjalistów",
      description: translations.cooperationPage?.coWorkOptions?.items?.[1]?.description || "Dostarczamy doświadczonych elektromonterów do Twojego zespołu. Ty zarządzasz projektem, my zapewniamy wykwalifikowanych specjalistów",
      svgIcon: "/images/svg/wynajem.png"
    }
  ];

  return (
    <section className="flex flex-col w-[calc(100%-2.5rem)] mx-auto items-center gap-16 md:pb-20 pb-0 relative bg-gray-mid rounded-l mt-5">
      <div className="flex flex-col items-center gap-16 w-full md:py-20 py-0">
        <div className="flex flex-col items-center gap-16 w-full">
          {/* Header */}
          <header className="text-center">
            <p className="fonts-mono-xs text-gray-dark mb-4 max-w-col-l mx-auto uppercase tracking-wider">
            {translations.cooperationPage?.coWorkOptions?.subtitle || "(Modele współpracy)"}
            </p>
            <h2 className="fonts-fig-l text-gray-dark mb-8 max-w-col-2xl mx-auto">
            {translations.cooperationPage?.coWorkOptions?.mainTitle || "Współpraca dostosowana do Twoich potrzeb"}
            </h2>
            <p className="fonts-mono-m text-gray-dark leading-relaxed uppercase max-w-col-3xl mx-auto">
            {translations.cooperationPage?.coWorkOptions?.mainDescription || "Focus Electro oferuje elastyczne formy współpracy, aby idealnie dopasować się do specyfiki i wymagań Twojego projektu stoczniowego"}
            </p>
          </header>

          {/* CoWork Cards Grid - responsywny */}
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mx-0">
              {/* Na mobile: pełna szerokość, na desktop: centrowanie z pustymi przestrzeniami */}
              <div className="md:col-span-2"></div>
              <div className="md:col-span-8">
                <div className="bg-gray-light rounded-l">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-1 p-1">
                    {coWorkData.map((option, index) => (
                      <Card
                        key={index}
                        className="bg-gray-mid border-none rounded-l overflow-hidden"
                      >
                        <CardContent className="p-8 flex flex-col items-start gap-8 text-left h-full">
                          {/* Ikony PNG - pełna wysokość */}
                          <div className="w-full flex-1 flex items-center justify-center">
                            <div className="relative w-full h-full min-h-64 rounded-l flex items-center justify-center">
                              <Image 
                                src={option.svgIcon} 
                                alt={`${option.title} ikona`}
                                width={400}
                                height={400}
                                className="object-contain opacity-80"
                              />
                            </div>
                          </div>
                          
                          {/* Tytuł */}
                          <h3 className="fonts-fig-m text-gray-dark">
                            {option.title}
                          </h3>
                          
                          {/* Opis */}
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
              <div className="md:col-span-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
