"use client";

import React from "react";
import Image from "next/image";
import { useTranslation } from "@/lib/i18n";

export const HeroCareerSection = (): React.JSX.Element => {
  const { translations } = useTranslation();
  
  return (
    <section className="relative w-full flex flex-col px-5">
      {/* Text Section - 70vh */}
      <div className="relative w-full h-[70vh] sm:h-[80vh] lg:h-[88vh] flex items-center justify-center bg-gray-dark rounded-t-[20px] mt-4">
        <div className="text-center max-w-6xl">
          <p className="fonts-mono-xs text-gray-light uppercase mb-6">
            {translations.careerPage.hero.subtitle}
          </p>
          <h1 className="fonts-fig-xxl text-gray-light mb-8 max-w-4xl mx-auto">
            {translations.careerPage.hero.title}
          </h1>
          <p className="fonts-mono-m text-gray-light uppercase leading-relaxed max-w-4xl mx-auto">
            {translations.careerPage?.hero?.description || "Dołącz do zespołu 80+ specjalistów realizujących szeroki zakres projektów stoczniowych na całym świecie. Zapewniamy ciągłość zleceń, stabilność zatrudnienia i uczciwe warunki współpracy"}
          </p>
        </div>
      </div>
      {/* Image Section - 90vh */}
      <div className="relative w-full h-[60vh] sm:h-[75vh] lg:h-[90vh] rounded-b-[20px] overflow-hidden mb-5">
        <Image 
          src="/images/career/cbg1.jpg" 
          alt="Kariera w Focus Electro - zespół pracujący nad instalacjami elektrycznymi" 
          className="w-full h-full object-cover"
          fill
          sizes="100vw"
        />
      </div>
    </section>
  );
};
