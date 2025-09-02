"use client";

import React from "react";
import Image from "next/image";
import { useTranslation } from "@/lib/i18n";

export const ProfessionalismSection = (): React.JSX.Element => {
  const { translations } = useTranslation();
  
  return (
    <section className="w-[calc(100%-2.5rem)] bg-gray-dark pt-20 mt-5 mx-5 rounded-t-3xl pb-30 md:pb-80 mb-[-80px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start mb-10 md:mb-20">
          <div className="lg:col-span-4 lg:col-start-3 px-10 md:px-0">
            <p className="fonts-mono-xs text-gray-mid uppercase mb-4">
              {translations.aboutPage.professionalism.title}
            </p>
            <h2 className="fonts-fig-l text-light mb-8">
              {translations.aboutPage?.professionalism?.mainTitle || "Profesjonalizm, który przekłada się na rezultaty"}
            </h2>
            <p className="fonts-mono-m text-gray-light uppercase leading-relaxed">
              {translations.aboutPage.professionalism.description}
            </p>
          </div>
          <div className="lg:col-span-4 lg:col-start-7 relative">
            <Image 
              src="/images/about/a3.jpg" 
              alt="Focus Electro - profesjonalne instalacje morskie" 
              className="w-full h-full object-cover rounded-3xl"
              width={400}
              height={300}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>
     
    </section>
  );
};
