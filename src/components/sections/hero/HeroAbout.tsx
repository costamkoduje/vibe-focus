import React from "react";
import Image from "next/image";

export const HeroAboutSection = (): React.JSX.Element => {
  return (
    <section className="relative w-full flex flex-col px-5">
      {/* Text Section - 70vh */}
      <div className="relative w-full h-[88vh] flex items-center justify-center bg-gray-dark rounded-t-[20px] mt-4">
        <div className="text-center max-w-6xl ">
          <p className="fonts-mono-xs text-gray-light uppercase mb-6">
            [TWÓJ ZAUFANY PARTNER W BRANŻY MORSKIEJ]
          </p>
          <h1 className="fonts-fig-xxl text-gray-light mb-8">
            Gdzie dobra robota spotyka się z oczekiwaniami klienta
          </h1>
          <p className="fonts-mono-m text-gray-light uppercase leading-relaxed max-w-4xl mx-auto">
            NAJWAŻNIEJSZE SĄ DLA NAS SOLIDNA PRACA I ZADOWOLENIE KLIENTÓW. REALIZUJEMY PROJEKTY W BRANŻY STOCZNIOWEJ Z PEŁNYM ZAANGAŻOWANIEM, WYKORZYSTUJĄC DOŚWIADCZENIE NASZYCH SPECJALISTÓW – OD AUTOMATYKI STATKOWEJ PO KOMPLEKSOWE INSTALACJE ELEKTRYCZNE. STAWIAMY NA UCZCIWOŚĆ, PRECYZJĘ I TERMINOWOŚĆ – TAK, BYŚ MÓGŁ NAM ZAUFAĆ PRZY KAŻDYM ZLECENIU.
          </p>
        </div>
      </div>
      {/* Image Section - 90vh */}
      <div className="relative w-full h-[90vh] rounded-b-[20px] overflow-hidden mb-5">
        <Image 
          src="/images/about/a1.jpg" 
          alt="Focus Electro team working on marine electrical installations" 
          className="w-full h-full object-cover"
          fill
          sizes="100vw"
        />
      </div>
    </section>
  );
};
