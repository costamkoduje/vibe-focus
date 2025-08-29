import React from "react";
import Image from "next/image";

export const FooterSection = (): React.JSX.Element => {
  return (
    <section className="flex flex-col w-[calc(100%-2.5rem)] items-center relative bg-gray-dark mx-5 rounded-t-[28px]">
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
              <div className="mb-5 mt-60">
                <h3 className="fonts-fig-l text-light">
                  Z nami płyniesz < br />zawsze z prądem
                </h3>
              </div>
            </div>
            {/* Empty space for centering - 2 columns */}
            <div className="grid-col-2"></div>
          </div>
          
          {/* Linia oddzielająca - pełna szerokość */}
          <div className="w-full h-[2px] bg-gray-light mb-5"></div>
          
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
                    FOCUS< br/> ELECTRO
                  </span>
                </div>
                
                {/* Tekst po prawej */}
                <div className="text-right">
                  <span className="fonts-mono-xs text-gray-light">
                    DESIGN & DEV BY VIBECODING
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
