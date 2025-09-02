"use client";

import React from "react";
import { AnimatedButton } from "@/components";
import { useTranslation } from "@/lib/i18n";

export const HeroSection = (): React.JSX.Element => {
  const { translations } = useTranslation();
  
  return (
    <div className="flex flex-col w-full sm:w-[calc(100%-2rem)] lg:w-[calc(100%-2.5rem)] mx-auto relative">
      {/* Hero Content */}
      <section 
        className="flex flex-col w-full items-start justify-center gap-6 lg:gap-10 px-4 sm:px-8 lg:px-5 py-12 sm:py-20 lg:py-40 relative rounded-l overflow-hidden"
        style={{
          height: 'calc(100vh - 80px)', // Responsywna wysokość - mniejsza na mobile
          minHeight: '500px', // Minimalna wysokość na mobile
          backgroundImage: 'url(/images/hero/backbroundhero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay dla lepszej czytelności tekstu */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-dark/80 via-gray-dark/60 to-gray-dark/40 rounded-l"></div>
        
        {/* Content Container z Grid */}
        <div className="relative z-10 w-full">
          {/* Grid Container */}
          <div className="grid grid-cols-12 gap-5 w-full">
            
            {/* Sekcja z instalacjami elektrycznymi i przyciskami - kolumny 1-6 */}
            <div className="col-span-12 lg:col-start-3 lg:col-span-4 flex flex-col gap-5">
              <div className="relative self-stretch w-full">
                <h1 className="fonts-fig-l lg:fonts-fig-xl text-light text-center lg:text-left">
                  {translations.hero.subtitle.split('<br/>').map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      {index < translations.hero.subtitle.split('<br/>').length - 1 && <br/>}
                    </React.Fragment>
                  ))}
                </h1>
              </div>

              {/* Opis - widoczny na telefonie, ukryty na desktopie */}
              <div className="lg:hidden">
                <p className="relative w-full max-w-full sm:max-w-[500px] fonts-mono-m text-gray-light text-center">
                  {translations.hero.description.split('<br/>').map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      {index < translations.hero.description.split('<br/>').length - 1 && <br/>}
                    </React.Fragment>
                  ))}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-5 items-center justify-center lg:justify-start relative w-auto">
                {/* Pierwszy przycisk - żółty z ciemną strzałką */}
                <AnimatedButton
                  text={translations.hero.ctaWork}
                  href="/career"
                  variant="primary"
                />

                {/* Drugi przycisk - szary z żółtą strzałką */}
                <AnimatedButton
                  text={translations.hero.ctaCooperation}
                  href="/cooperation"
                  variant="secondary"
                />
              </div>
            </div>

            {/* Główny tekst - kolumny 8-12 - widoczny tylko na desktopie */}
            <div className="hidden lg:flex col-span-12 lg:col-start-7 lg:col-span-4 flex-col items-center lg:items-end gap-5 self-start lg:mt-[-80px]">
              <p className="relative w-full max-w-full sm:max-w-[500px] lg:max-w-[614px] fonts-mono-m text-gray-light text-center lg:text-right">
                {translations.hero.description.split('<br/>').map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    {index < translations.hero.description.split('<br/>').length - 1 && <br/>}
                  </React.Fragment>
                ))}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

