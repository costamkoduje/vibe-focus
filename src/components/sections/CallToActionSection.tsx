import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

export const CallToActionSection = (): React.JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center relative pb-80">
      <div className="w-full">
        {/* Grid container */}
        <div className="grid-system">
          {/* Empty space for centering - 2 columns */}
          <div className="grid-col-2"></div>
          {/* Main content - 8 columns */}
          <div className="grid-col-8">
            {/* Żółte tło ograniczone do 8 kolumn */}
            <div className="gradients-light rounded-[24px] p-2">
              {/* Górny rząd z tekstami */}
              <div className="grid grid-cols-8 gap-8 mb-12">
                {/* Lewy tekst - 5 kolumn */}
                <div className="col-span-5 ">
                  <h2 className="fonts-fig-l text-gray-dark mb-20 mt-10 mx-5">
                    Gotowy na realizację projektu stoczniowego?
                  </h2>
                </div>
                
                {/* Prawy tekst - 3 kolumny */}
                <div className="col-span-3">
                  <p className="fonts-mono-m text-gray-dark text-right uppercase mt-10 mx-5">
                    Odkryj jak nasze doświadczenie może wspierać Twój sukces!
                  </p>
                </div>
              </div>
              
              {/* Dolny rząd z przyciskami na pełną szerokość */}
              <div className="grid grid-cols-8 gap-1 group">
                {/* Przycisk "Napisz do nas!" - 7 kolumn */}
                <div className="col-span-7">
                  <Button 
                    variant="secondary" 
                    size="default"
                    className="w-full h-20 justify-start bg-gray-dark fonts-fig-m text-light rounded-[20px] transition-colors border border-accent group-hover:bg-gray-mid hover:bg-gray-mid"
                  >
                    Napisz do nas!
                  </Button>
                </div>
                
                {/* Przycisk ze strzałką - 1 kolumna */}
                <div className="col-span-1">
                  <Button 
                    variant="secondary" 
                    size="icon"
                    className="w-full h-20 bg-gray-dark text-gray-light rounded-[20px] transition-colors border border-accent group-hover:bg-gray-mid hover:bg-gray-mid"
                  >
                    <Image
                      src="/images/icons/arrow.svg"
                      alt="Strzałka"
                      width={32}
                      height={32}
                      className="w-8 h-8"
                    />
                  </Button>
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
