import React from "react";
import Image from "next/image";

export const DarkImageSection = (): React.JSX.Element => {
  return (
    <section className="relative w-full h-screen">
      {/* Zdjęcie tła */}
      <Image 
        src="/images/career/cbg2.jpg" 
        alt="Focus Electro - międzynarodowe projekty stoczniowe"
        className="absolute inset-0 w-full h-full object-cover"
        fill
        sizes="100vw"
        priority
      />
      
      {/* Kontener z systemem kolumn */}
      <div className="relative z-10 h-full grid-system items-center">
        {/* Pusta przestrzeń - 2 kolumny */}
        <div className="grid-col-2"></div>
        
        {/* Karta z samym obrysem - 8 kolumn (od 3 do 10) */}
        <div className="grid-col-8">
          <div className="border-[3px] border-gray-dark rounded-[20px] h-fit flex items-start justify-start">
            {/* Karta tekstowa - 4 kolumny wyśrodkowana */}
            <div className="w-1/2">
              <div className="bg-gray-dark rounded-2xl p-10 h-fit">
                <div className="text-start mb-6">
                  <p className="text-gray-light fonts-mono-xs tracking-wide mb-4">
                    [DOŁĄCZ DO SPECJALISTÓW ELEKTROTECHNIKI MORSKIEJ]
                  </p>
                </div>
                
                <h2 className="fonts-fig-l text-gray-light text-start mb-8 leading-tight">
                  Pracuj ramię w ramię z najlepszymi specjalistami z całego świata
                </h2>
                
                <p className="text-gray-light fonts-mono-l leading-relaxed text-left">
                  NASZE ZESPOŁY DZIAŁAJĄ JEDNOCZEŚNIE W STOCZNIACH OD EUROPY, AZJĘ I AMERYKĘ. ROZWIJAJ SIĘ W MIĘDZYNARODOWYM ŚRODOWISKU, GDZIE KAŻDY PROJEKT TO NOWA PRZYGODA I MOŻLIWOŚĆ POSZERZENIA HORYZONTÓW ZAWODOWYCH.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Pusta przestrzeń - 2 kolumny */}
        <div className="grid-col-2"></div>
      </div>
    </section>
  );
};
