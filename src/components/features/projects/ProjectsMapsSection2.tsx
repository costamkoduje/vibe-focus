'use client';

import React from "react";
import { useTranslation } from "@/lib/i18n";
import { InteractiveMap } from "./InteractiveMap";

export const ProjectsMapsSection2 = (): React.JSX.Element => {
  const { translations } = useTranslation();
  
  // Sprawdź czy translations są dostępne
  if (!translations || !translations.projectsMapsSection) {
    return <div>Ładowanie...</div>;
  }

  return (
    <section 
      className="flex flex-col w-full md:w-[calc(100%-2.5rem)] mx-auto items-center gap-16 relative bg-gray-light rounded-[24px] mt-5 md:mb-40 mb-0"
    >
      <div className="flex flex-col items-center gap-16 w-full py-20 mb-0 md:mb-40">
        <div className="flex flex-col items-center gap-16 w-full">
          {/* Header */}
          <header className="text-center">
            <p className="fonts-mono-xs text-gray-dark mb-4 max-w-col-l mx-auto">
              {translations.projectsMapsSection.subtitle}
            </p>
            <h2 className="fonts-fig-l text-gray-dark mb-8 max-w-col-2xl mx-auto">
              {translations.projectsMapsSection.title.split('<br />').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index < translations.projectsMapsSection.title.split('<br />').length - 1 && <br />}
                </React.Fragment>
              ))}
            </h2>
            <p className="fonts-mono-m text-gray-dark uppercase leading-relaxed max-w-col-3xl mx-5 md:mx-auto">
              {translations.projectsMapsSection.description}
            </p>
          </header>

          {/* Map Container */}
          <div className="w-full">
            <div className="grid grid-cols-12 gap-5">
              {/* Empty space for centering - 2 columns */}
              <div className="col-span-2"></div>
              {/* Main content - 8 columns */}
              <div className="col-span-8">
                <InteractiveMap />
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
