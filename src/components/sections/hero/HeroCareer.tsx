import React from "react";
import Image from "next/image";

export const HeroCareerSection = (): React.JSX.Element => {
  return (
    <section className="relative w-full flex flex-col px-5">
      {/* Text Section - 70vh */}
      <div className="relative w-full h-[88vh] flex items-center justify-center bg-gray-dark rounded-t-[20px] mt-4">
        <div className="text-center max-w-6xl">
          <p className="fonts-mono-xs text-gray-light uppercase mb-6">
            [DOŁĄCZ DO NASZEGO ZESPOŁU]
          </p>
          <h1 className="fonts-fig-xxl text-gray-light mb-8 max-w-4xl mx-auto">
          Stabilność i pewność zleceń <br/>w branży elektrotechniki morskiej
          </h1>
          <p className="fonts-mono-m text-gray-light uppercase leading-relaxed max-w-4xl mx-auto">
            SZUKAMY TALENTOWANYCH PROFESJONALISTÓW, KTÓRZY CHCĄ ROZWIJAĆ SIĘ W BRANŻY MORSKIEJ I AUTOMATYKI. OFERUJEMY STABILNE ZATRUDNIENIE, MOŻLIWOŚCI ROZWOJU ORAZ PRACĘ Z NAJNOWSZYMI TECHNOLOGIAMI. DOŁĄCZ DO ZESPOŁU, KTÓRY TWORZY PRZYSZŁOŚĆ PRZEMYSŁU MORSKIEGO.
          </p>
        </div>
      </div>
      {/* Image Section - 90vh */}
      <div className="relative w-full h-[90vh] rounded-b-[20px] overflow-hidden mb-5">
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
