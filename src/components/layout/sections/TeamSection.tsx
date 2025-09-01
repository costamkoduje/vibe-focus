'use client';

import React from "react";
import { useTranslation } from "@/lib/i18n";

export const TeamSection = (): React.JSX.Element => {
  const { translations } = useTranslation();
  
  return (
    <section className="flex flex-col w-full min-h-[600px] sm:min-h-[700px] lg:min-h-[800px] items-center px-4 sm:px-8 lg:px-16 py-20 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/about/a2.jpg')`
        }}
      ></div>
      

      
      <div className="relative z-10 w-full">
        <div className="grid-system">
          {/* Empty space for centering - 2 columns */}
          <div className="grid-col-2"></div>
          {/* Main content - 8 columns */}
          <div className="grid-col-8">
            <div className="w-full rounded-xl overflow-hidden border-4 border-gray-light">
              <div className="grid grid-cols-12">
                {/* Left side - Text content with gray background (6 columns) */}
                <div className="col-span-12 lg:col-span-6 bg-gray-light p-8 lg:p-12">
                  <div className="space-y-6">
                    <div className="fonts-mono-xs text-gray-dark tracking-wide">
                    {translations.aboutPage?.team?.subtitle || "(Nasz zespół)"}
                    </div>
                    <h2 className="fonts-fig-l text-gray-dark leading-tight">
                    {translations.aboutPage?.team?.mainTitle || "Gdzie każdy elektromonter staje się częścią czegoś większego"}
                    </h2>
                  </div>
                  <div className="mt-8">
                  <p className="fonts-mono-m text-gray-dark uppercase leading-relaxed">
                  {translations.aboutPage?.team?.mainDescription || "W Focus Electro wierzymy, że nasi ludzie to nasz największy kapitał. Od 5-osobowej ekipy po dzisiejszy zespół 80 specjalistów - każda osoba ma znaczenie. Oferujemy transparentny proces rekrutacji, ścieżki rozwoju zawodowego i możliwość pracy przy najbardziej prestiżowych projektach świata. Nasze programy szkoleniowe i kultura otwartej komunikacji sprawiają, że Focus Electro to nie tylko miejsce pracy - to miejsce, gdzie rozwijasz swoją pasję do elektrotechniki morskiej."}
                 </p>
                 </div>
                </div>

                {/* Right side - Transparent area (6 columns) to show background image */}
                <div className="col-span-12 lg:col-span-6 bg-transparent">
                  {/* This area is transparent to show the background image */}
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
