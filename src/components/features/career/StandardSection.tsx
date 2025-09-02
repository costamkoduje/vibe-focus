"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components";
import { useTranslation } from "@/lib/i18n";

export const StandardSection = (): React.JSX.Element => {
  const { translations } = useTranslation();
  
  const standards = translations.careerPage?.standards?.items || [
    {
      title: "Przejrzysta rekrutacja",
      description: "Proces rekrutacji jest prosty i szybki. Kandydaci mogą liczyć na jasną komunikację oraz wsparcie na każdym etapie aplikowania."
    },
    {
      title: "Praca na calym świecie",
      description: "Realizujemy projekty na wielu międzynarodowych stoczniach – dzięki temu  masz okazję zdobywać doświadczenie zawodowe w różnych krajach i poznawać nowe technologie oraz kultury branżowe. Praca w Focus Electro to  możliwość rozwoju i wyzwań na globalną skalę."
    },
    {
      title: "Zgrany zespół ",
      description: "Tworzymy środowisko, w którym liczy się wsparcie, wzajemny szacunek i  wymiana doświadczeń. Wzajemna pomoc to podstawa naszej pracy,  niezależnie od stażu czy stanowiska."
    },
    {
      title: "Centrum szkoleń",
      description: "Oferujemy szeroki wybór szkoleń branżowych oraz warsztatów technicznych. Każdy może zdobywać nowe umiejętności i rozwijać specjalizacje w  praktyce."
    },

    {
      title: "Różnorodne zadania i projekty",
      description: "U nas nie ma rutyny! Pracownicy biorą udział w realizacji projektów na  różnych stoczniach – od nowych instalacji, przez serwis, aż po  innowacyjne wdrożenia"
    }
  ];

  const images = [
    "/images/career/cb1a.png",
    "/images/career/cb2a.png",
    "/images/career/cb3a.png",
    "/images/career/cb4a.png",
    "/images/career/cb5a.png"
  ];

  return (
    <section className="flex flex-col w-[calc(100%-2.5rem)] mx-auto items-center gap-16 relative bg-gray-mid rounded-l mt-5 md:pb-40 pb-0">
      <div className="flex flex-col items-center gap-16 w-full py-20 mb-0 md:mb-20">
        <div className="flex flex-col items-center gap-16 w-full">
          {/* Header */}
          <header className="text-center">
            <p className="fonts-mono-xs text-gray-dark mb-4 max-w-col-xl mx-auto">
            {translations.careerPage?.standards?.subtitle || "(Sekcja Standardów Wysokiej Jakości)"}
            </p>
            <h2 className="fonts-fig-l text-gray-dark mb-8 max-w-col-3xl mx-auto">
            {translations.careerPage?.standards?.mainTitle || "Wysokie standardy i partnerskie podejście na każdym etapie współpracy"}
            </h2>
            <p className="fonts-mono-m text-gray-dark uppercase leading-relaxed max-w-col-3xl mx-auto">
            {translations.careerPage?.standards?.mainDescription || "W Focus Electro szanujemy doświadczenie i zaangażowanie każdego pracownika. Zapewniamy bezpieczne warunki pracy, jasne zasady współpracy oraz partnerską atmosferę, dzięki którym możesz skupić się na realizacji projektów w branży elektrotechniki morskiej"}
            </p>
          </header>

          {/* Bento Grid - 8 columns width */}
          <div className="w-full">
            <div className="grid grid-cols-12 gap-1 md:gap-5 mx-0 mb-0 md:mb-10">
              {/* Empty space for centering - 2 columns */}
              <div className="hidden md:block col-span-2"></div>
              {/* Main content - 8 columns */}
              <div className="col-span-12 md:col-span-8 ">
                <div className="w-full">
                  <div className="grid grid-cols-1 md:grid-cols-8 gap-1 md:gap-1 w-full bg-gray-light md:rounded-xl rounded-m p-1">
                    {/* Top Row - 2 cards */}
                    <Card className="col-span-1 md:col-span-5 h-[300px] md:h-[460px] bg-gray-mid rounded-none md:rounded-xl overflow-hidden">
                      <CardContent className="w-full h-full flex flex-col justify-between p-0">
                        <div className="space-y-3 p-6">
                          <h3 className="fonts-mono-xs text-gray-dark leading-tight uppercase tracking-wide font-bold">
                            {standards[0]?.title || ''}
                          </h3>
                          <p className="fonts-mono-xs text-gray-dark uppercase leading-relaxed">
                            {standards[0]?.description || ''}
                          </p>
                        </div>
                        <div className="relative w-full h-full overflow-hidden">
                          <Image 
                            src={images[0] || ''} 
                            alt={standards[0]?.title || ''}
                          
                            fill
                            sizes="(max-width: 768px) 100vw, 60vw"
                          />
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="col-span-1 md:col-span-3 h-[300px] md:h-[460px] bg-gray-mid rounded-none md:rounded-xl overflow-hidden">
                      <CardContent className="w-full h-full flex flex-col justify-between p-0">
                        <div className="space-y-3 p-6">
                          <h3 className="fonts-mono-xs text-gray-dark leading-tight uppercase tracking-wide font-bold ">
                            {standards[1]?.title || ''}
                          </h3>
                          <p className="fonts-mono-xs text-gray-dark uppercase leading-relaxed ">
                            {standards[1]?.description || ''}
                          </p>
                        </div>
                        <div className="relative w-full h-full overflow-hidden -mb-0">
                          <Image 
                            src={images[1] || ''} 
                            alt={standards[1]?.title || ''}
                            className="w-[calc(100%+3rem)] h-full object-cover object-bottom"
                            fill
                            sizes="(max-width: 768px) 100vw, 40vw"
                          />
                        </div>
                      </CardContent>
                    </Card>

                    {/* Bottom Row - 2 cards */}
                    <Card className="col-span-1 md:col-span-3 h-[300px] md:h-[460px] bg-gray-mid rounded-none md:rounded-xl overflow-hidden">
                      <CardContent className="w-full h-full flex flex-col justify-between p-0">
                        <div className="space-y-3 p-6">
                          <h3 className={`fonts-mono-xs text-gray-dark leading-tight uppercase tracking-wide font-bold `}>
                            {standards[2]?.title || ''}
                          </h3>
                          <p className={`fonts-mono-xs text-gray-dark uppercase leading-relaxed `}>
                            {standards[2]?.description || ''}
                          </p>
                        </div>
                        <div className="relative w-full h-full overflow-hidden -mb-6">
                          <Image 
                            src={images[2] || ''} 
                            alt={standards[2]?.title || ''}
                            className="w-[calc(100%+3rem)] h-full object-cover object-bottom"
                            fill
                            sizes="(max-width: 768px) 100vw, 40vw"
                          />
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="col-span-1 md:col-span-5 h-[300px] md:h-[460px] bg-gray-mid rounded-none md:rounded-xl overflow-hidden">
                      <CardContent className="w-full h-full flex flex-col justify-between p-0">
                        <div className="space-y-3 p-6">
                          <h3 className={`fonts-mono-xs text-gray-dark leading-tight uppercase tracking-wide font-bold`}>
                            {standards[3]?.title || ''}
                          </h3>
                            <p className={`fonts-mono-xs text-gray-dark uppercase leading-relaxed `}>
                            {standards[3]?.description || ''}
                          </p>
                        </div>
                        <div className="relative w-full h-full overflow-hidden ">
                          <Image 
                            src={images[3] || ''} 
                            alt={standards[3]?.title || ''}
                            className="w-[calc(100%+3rem)] h-full object-cover object-bottom"
                            fill
                            sizes="(max-width: 768px) 100vw, 60vw"
                          />
                        </div>
                      </CardContent>
                    </Card>

                    {/* Bottom Full Width Card */}
                    <Card className="col-span-1 md:col-span-8 h-[300px] md:h-[460px] bg-gray-mid rounded-none md:rounded-xl overflow-hidden">
                      <CardContent className="w-full h-full flex flex-col justify-between p-0">
                        <div className="space-y-3 p-6">
                          <h3 className={`fonts-mono-xs text-gray-dark leading-tight uppercase tracking-wide font-bold`}>
                            {standards[4]?.title || ''}
                          </h3>
                            <p className={`fonts-mono-xs text-gray-dark uppercase leading-relaxed `}>
                            {standards[4]?.description || ''}
                          </p>
                        </div>
                        <div className="relative w-full h-full overflow-hidden">
                          <Image 
                            src={images[4] || ''} 
                            alt={standards[4]?.title || ''}
                            className="w-[calc(100%+3rem)] h-full object-cover object-bottom"
                            fill
                            sizes="(max-width: 768px) 100vw, 100vw"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
              {/* Empty space for centering - 2 columns */}
              <div className="hidden md:block col-span-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
