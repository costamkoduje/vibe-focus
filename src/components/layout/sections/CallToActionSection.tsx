"use client";

import React from "react";
import Link from "next/link";
import { Button, AnimatedArrowButton } from "@/components";
import { useTranslation } from "@/lib/i18n";

export const CallToActionSection = (): React.JSX.Element => {
  const { translations } = useTranslation();
  
  return (
    <section className="flex flex-col w-full items-center relative pb-40">
      <div className="w-full">
        {/* Grid container */}
        <div className="grid-system">
          {/* Empty space for centering - 2 columns */}
          <div className="grid-col-2"></div>
          {/* Main content - 8 columns */}
          <div className="grid-col-8">
            {/* Żółte tło ograniczone do 8 kolumn */}
            <div className="gradients-light rounded-l p-2">
              {/* Górny rząd z tekstami */}
              <div className="grid grid-cols-8 gap-8  mb-5 md:mb-12">
                {/* Lewy tekst - 5 kolumn na desktop, pełna szerokość na mobile */}
                <div className="col-span-8 md:col-span-5">
                  <h2 className="fonts-fig-l text-gray-dark mb-0 md:mb-20 mt-10 mx-5 leading-tight">
                    {translations.callToAction.title.split('<br/>').map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        {index < translations.callToAction.title.split('<br/>').length - 1 && <br/>}
                      </React.Fragment>
                    ))}
                  </h2>
                </div>
                
                {/* Prawy tekst - 3 kolumny na desktop, pełna szerokość na mobile */}
                <div className="col-span-8 md:col-span-3">
                  <p className="fonts-mono-m text-gray-dark text-left md:text-right uppercase mt-0 md:mt-10 mx-5">
                    {translations.callToAction.subtitle.split('<br/>').map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        {index < translations.callToAction.subtitle.split('<br/>').length - 1 && <br/>}
                      </React.Fragment>
                    ))}
                  </p>
                </div>
              </div>
              
              {/* Dolny rząd z przyciskami na pełną szerokość */}
              <div className="grid grid-cols-8 gap-1 group">
                {/* Przycisk "Napisz do nas!" - 6 kolumn na mobile, 7 kolumn na desktop */}
                <div className="col-span-6 md:col-span-7">
                  <Link href="/contact">
                    <Button 
                      variant="secondary" 
                      size="default"
                      className="w-full h-25 justify-start bg-gray-dark fonts-fig-l text-light rounded-l transition-colors border border-accent group-hover:bg-gray-mid hover:bg-gray-mid py-8"
                      style={{ textTransform: 'none' }}
                    >
                      {translations.callToAction.button}
                    </Button>
                  </Link>
                </div>
                
                {/* Przycisk ze strzałką - 2 kolumny na mobile, 1 kolumna na desktop */}
                <div className="col-span-2 md:col-span-1 h-25">
                  <AnimatedArrowButton />
                </div>
              </div>
            </div>
          </div>
          {/* Empty space for centering - 2 columns */}
          <div className="grid-col-2"></div>
        </div>
      </div>
    </section>
  );
};
