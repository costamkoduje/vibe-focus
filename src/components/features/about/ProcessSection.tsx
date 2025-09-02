"use client";

import React from "react";
import { Card, CardContent } from "@/components";
import { useTranslation } from "@/lib/i18n";

export const ProcessSection = (): React.JSX.Element => {
  const { translations } = useTranslation();
  
  const processSteps = [
    {
      title: translations.process.steps[0]?.title || "Analiza i planowanie",
      description: translations.process.steps[0]?.description || "Dokładna analiza wymagań i opracowanie szczegółowego planu realizacji",
      titleColor: "text-gray-dark",
      descriptionColor: "text-gray-dark",
      background: "bg-accent",
      backgroundImage: "/images/process/proces1.jpg",
    },
    {
      title: translations.process.steps[1]?.title || "Realizacja projektu",
      description: translations.process.steps[1]?.description || "Profesjonalna realizacja zgodnie z ustalonym harmonogramem",
      titleColor: "text-light",
      descriptionColor: "text-gray-light",
      background: "bg-gray-dark",
      backgroundImage: "/images/process/proces2.jpg",
    },
    {
      title: translations.process.steps[2]?.title || "Kontrola jakości",
      description: translations.process.steps[2]?.description || "Rygorystyczna kontrola jakości na każdym etapie realizacji",
      titleColor: "text-light",
      descriptionColor: "text-gray-light",
      background: "bg-gray-dark",
      backgroundImage: "/images/process/proces3.jpg",
    },
  ];

  return (
    <section className="flex flex-col w-[calc(100%-2.5rem)] mx-auto items-center gap-8 md:gap-16 pb-10 md:pb-20 relative bg-gray-mid rounded-l mt-5 mb-5">
      <div className="flex flex-col items-center gap-8 md:gap-16 w-full py-10 md:py-20">
        <div className="flex flex-col items-center gap-8 md:gap-16 w-full">
          {/* Header */}
          <header className="text-center px-4">
            <p className="fonts-mono-xs text-gray-dark mb-4 max-w-col-l mx-auto">
            {translations.process.philosophy.title}
            </p>
            <h2 className="fonts-fig-l text-gray-dark mb-8 max-w-col-2xl mx-auto">
            {translations.process.philosophy.subtitle.split(',').map((part, index) => (
              <React.Fragment key={index}>
                {part.trim()}
                {index < translations.process.philosophy.subtitle.split(',').length - 1 && <br />}
              </React.Fragment>
            ))}
            </h2>
            <p className="fonts-mono-m text-gray-dark uppercase leading-relaxed max-w-col-3xl mx-auto">
            {translations.process.philosophy.description}
            </p>
          </header>

          {/* Bento Grid - Responsive layout */}
          <div className="w-full px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 md:gap-5 mx-0">
              {/* Empty space for centering - 2 columns on desktop */}
              <div className="hidden lg:block lg:col-span-2"></div>
              {/* Main content - 8 columns on desktop, full width on mobile */}
              <div className="col-span-1 lg:col-span-8">
                <div className="w-full bg-light p-1 rounded-xl min-h-[60vh] lg:h-[60vh]">
                  <div className="flex flex-col lg:flex-row items-stretch gap-1 w-full h-full">
                    {/* Left Column - Two small cards */}
                    <div className="flex flex-col gap-1 w-full lg:w-1/2 h-full overflow-hidden">
                      <Card className="w-full flex-1 lg:h-1/2 bg-accent rounded-xl overflow-hidden relative  max-h-full">
                        <div 
                          className="absolute inset-0 bg-cover bg-center opacity-100"
                          style={{ backgroundImage: `url(${processSteps[0]?.backgroundImage || ''})` }}
                        />
                        <CardContent className="w-full h-full p-4 md:p-6 lg:p-8 relative z-10 flex flex-col justify-start">
                          <div className="space-y-2 md:space-y-4 flex-1">
                            <h3 className="fonts-mono-xs text-gray-dark leading-tight uppercase tracking-wide">
                              {processSteps[0]?.title || ''}
                            </h3>
                            <p className="fonts-mono-xs text-gray-dark uppercase leading-relaxed flex-1">
                              {processSteps[0]?.description || ''}
                            </p>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="w-full flex-1 lg:h-1/2 bg-gray-dark rounded-xl overflow-hidden relative max-h-full">
                        <div 
                          className="absolute inset-0 bg-cover bg-center opacity-100"
                          style={{ backgroundImage: `url(${processSteps[1]?.backgroundImage || ''})` }}
                        />
                        <CardContent className="w-full h-full p-4 md:p-6 lg:p-8 relative z-10 flex flex-col justify-start">
                          <div className="space-y-2 md:space-y-4 flex-1">
                            <h3 className="fonts-mono-xs text-light leading-tight uppercase tracking-wide">
                              {processSteps[1]?.title || ''}
                            </h3>
                            <p className="fonts-mono-xs text-gray-light uppercase leading-relaxed flex-1">
                              {processSteps[1]?.description || ''}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Right Column - One large card */}
                    <Card className="w-full lg:w-1/2 h-full bg-gray-dark rounded-xl overflow-hidden relative min-h-[300px] md:min-h-[400px] lg:min-h-0">
                      <div 
                        className="absolute inset-0 bg-cover bg-center opacity-50"
                        style={{ backgroundImage: `url(${processSteps[2]?.backgroundImage || ''})` }}
                      />
                      <CardContent className="w-full h-full p-4 md:p-6 lg:p-8 relative z-10 flex flex-col justify-start">
                        <div className="space-y-2 md:space-y-4 flex-1">
                          <h3 className="fonts-mono-xs text-light leading-tight uppercase tracking-wide">
                            {processSteps[2]?.title || ''}
                          </h3>
                          <p className="fonts-mono-xs text-gray-light uppercase leading-relaxed flex-1">
                            {processSteps[2]?.description || ''}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
              {/* Empty space for centering - 2 columns on desktop */}
              <div className="hidden lg:block lg:col-span-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
