import React from "react";

export const HeroSection = (): React.JSX.Element => {
  return (
    <div className="flex flex-col w-full relative">
      {/* Hero Content */}
      <section 
        className="flex flex-col w-full items-start justify-center gap-6 lg:gap-10 px-4 sm:px-8 lg:px-5 py-12 sm:py-20 lg:py-[163px] relative rounded-[30px] overflow-hidden"
        style={{
          height: 'calc(100vh - 100px)', // 100vh minus wysokość nawigacji (około 120px)
          backgroundImage: 'url(/images/hero/backbroundhero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay dla lepszej czytelności tekstu */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-dark/80 via-gray-dark/60 to-gray-dark/40 rounded-[30px]"></div>
        
        {/* Content Container z Grid */}
        <div className="relative z-10 w-full">
          {/* Grid Container */}
          <div className="grid grid-cols-12 gap-5 w-full">
            
            {/* Sekcja z instalacjami elektrycznymi i przyciskami - kolumny 1-6 */}
            <div className="col-span-12 lg:col-start-2 lg:col-span-6 flex flex-col gap-5">
              <div className="relative self-stretch w-full">
                <h1 className="fonts-fig-xl text-light text-center lg:text-left">
                  Instalacje elektryczne<br/>i automatyka dla jednostek<br/>i obiektów morskich
                </h1>
              </div>

              <div className="flex flex-col sm:flex-row gap-5 items-center justify-center lg:justify-start relative w-full">
                {/* Pierwszy przycisk - żółty z ciemną strzałką */}
                <div className="bg-accent hover:bg-accent/90 rounded-[16.2px] pl-6 pr-[3px] py-[3px] w-full sm:w-auto flex items-center gap-2.5 cursor-pointer transition-colors">
                  <span className="fonts-mono-m text-gray-dark whitespace-nowrap tracking-[0.4px] uppercase">
                    PRACUJ Z NAMI
                  </span>
                  <div className="w-[48px] h-[48px] shrink-0 bg-gray-dark rounded-[12.26px] flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.8831 12.5488H4.1237V9.3942H12.8831L8.5601 5.0713L10.7908 2.8407L17.1372 9.187C18.1227 10.1726 18.1227 11.7705 17.1372 12.756L10.734 19.1593L8.5034 16.9287L12.8831 12.5488Z" fill="#FDE10D"/>
                    </svg>
                  </div>
                </div>

                {/* Drugi przycisk - szary z żółtą strzałką */}
                <div className="bg-gray-mid hover:bg-gray-mid/90 rounded-[16.2px] pl-5 pr-[3px] py-[3px] w-full sm:w-auto flex items-center gap-2.5 cursor-pointer transition-colors">
                  <span className="fonts-mono-m text-gray-dark whitespace-nowrap tracking-[0.4px] uppercase">
                    ROZPOCZNIJ WSPÓŁPRACĘ
                  </span>
                  <div className="w-[48px] h-[48px] shrink-0 bg-accent rounded-[12.26px] flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.8831 12.5488H4.1237V9.3942H12.8831L8.5601 5.0713L10.7908 2.8407L17.1372 9.187C18.1227 10.1726 18.1227 11.7705 17.1372 12.756L10.734 19.1593L8.5034 16.9287L12.8831 12.5488Z" fill="#3E485A"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Główny tekst - kolumny 8-12 */}
            <div className="col-span-12 lg:col-start-8 lg:col-span-4 flex flex-col items-center lg:items-end gap-5 self-start lg:mt-[-80px]">
              <p className="relative w-full max-w-[614px] fonts-mono-m text-gray-light text-center lg:text-right">
                ZAPEWNIAMY KOMPLEKSOWE INSTALACJE<br/>
                ELEKTRYCZNE I AUTOMATYKĘ DLA STOCZNI<br/>
                ORAZ PRZEMYSŁU MORSKIEGO.<br/>
                JAKOŚĆ,TERMINOWOŚĆ, INNOWACJE<br/>
                – TO NASZA CODZIENNOŚĆ.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

