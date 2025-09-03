"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/lib/i18n";

export const FooterSection = (): React.JSX.Element => {
  const { translations } = useTranslation();
  
  return (
    <section className="flex flex-col w-full md:w-[calc(100%-2.5rem)] items-center relative bg-gray-dark mx-0 md:mx-5 rounded-t-3xl">
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
                <div className="flex items-center gap-4" style={{ position: 'relative', zIndex: 50 }}>
                  <Link href="/" className="cursor-pointer">
                    <Image
                      src="/images/icons/logoFE.svg"
                      alt="Focus Electro Logo"
                      width={35.48}
                      height={52}
                      className="w-[35.48px] h-[52px] hover:opacity-80 transition-opacity"
                    />
                  </Link>
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
                <div className="text-right" style={{ position: 'relative', zIndex: 50 }}>
                  <a 
                    href="https://vibecoding.ovh" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="fonts-mono-xs text-gray-light hover:text-yellow transition-colors duration-200 cursor-pointer"
                  >
                    {translations.footer.credits}
                  </a>
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
