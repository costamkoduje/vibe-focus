"use client";

import React from "react";
import Image from "next/image";
import { useTranslation } from "@/lib/i18n";

export const FooterSection = (): React.JSX.Element => {
  const { translations } = useTranslation();
  
  return (
    <section className="flex flex-col w-full md:w-[calc(100%-2.5rem)] items-center relative bg-gray-dark mx-0 md:mx-5 rounded-t-[28px]">
      {/* Dolna sekcja */}
      <div className="w-full pt-10">
        <div className="w-full">
          {/* Grid container */}
          <div className="grid-system">
            {/* Empty space for centering - 2 columns */}
            <div className="grid-col-2"></div>
            {/* Main content - 8 columns */}
            <div className="grid-col-8">
              {/* Główny tekst */}
              <div className="mb-5 mt-40">

              </div>
            </div>
            {/* Empty space for centering - 2 columns */}
            <div className="grid-col-2"></div>
          </div>
          

          
          {/* Grid container dla dolnej części */}
          <div className="grid-system">
            {/* Empty space for centering - 2 columns */}
            <div className="grid-col-2"></div>
            {/* Main content - 8 columns */}
            <div className="grid-col-8">
              {/* Dolna część z logo i tekstem */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                {/* Logo i nazwa */}
                <div className="flex items-center gap-4">
                  <Image
                    src="/images/icons/logoFE.svg"
                    alt="Focus Electro Logo"
                    width={35.48}
                    height={52}
                    className="w-[35.48px] h-[52px]"
                  />
                  <span className="fonts-mono-l text-gray-light">
                    {translations.footer.companyName.split(' ').map((word, index, array) => (
                      <React.Fragment key={index}>
                        {word}
                        {index < array.length - 1 && <br/>}
                      </React.Fragment>
                    ))}
                  </span>
                </div>
                
                {/* Tekst po prawej */}
                <div className="text-right">
                  <span className="fonts-mono-xs text-gray-light">
                    {translations.footer.credits}
                  </span>
                </div>
              </div>
            </div>
            {/* Empty space for centering - 2 columns */}
            <div className="grid-col-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
