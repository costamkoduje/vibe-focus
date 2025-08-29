import React from "react";
import Image from "next/image";

export const ProjectsMapsSection = (): React.JSX.Element => {
  return (
    <section className="flex flex-col w-[calc(100%-2.5rem)] mx-auto items-center gap-16 pb-20 relative bg-gray-light rounded-t-[24px] mt-5">
      <div className="flex flex-col items-center gap-16 w-full py-20">
        <div className="flex flex-col items-center gap-16 w-full">
          {/* Header */}
          <header className="text-center">
            <p className="fonts-mono-xs text-gray-dark mb-4 max-w-col-l mx-auto">
              (GLOBALNA OBECNOŚĆ)
            </p>
            <h2 className="fonts-fig-l text-gray-dark mb-8 max-w-col-2xl mx-auto">
              Nasze ślady na mapie<br />
              światowych stoczni
            </h2>
            <p className="fonts-mono-m text-gray-dark uppercase leading-relaxed max-w-col-3xl mx-auto">
              NASZA PODRÓŻ ROZPOCZĘŁA SIĘ W 2018 ROKU W NIEMIECKIM ROSTOCK. DZIŚ NASZE ZESPOŁY PRACUJĄ JEDNOCZEŚNIE W STOCZNIACH NA CAŁYM ŚWIECIE - OD MEYER TURKU PO PROJEKTY W AZJI I AMERYCE. MAPA PONIŻEJ POKAZUJE LOKALIZACJE NASZYCH PROJEKTÓW, Z KTÓRYCH JESTEŚMY DUMNI.
            </p>
          </header>

          {/* Map Container - 8 columns width */}
          <div className="w-full">
            <div className="grid grid-cols-12 gap-5 mx-0">
              {/* Empty space for centering - 2 columns */}
              <div className="col-span-2"></div>
              {/* Main content - 8 columns */}
              <div className="col-span-8">
                <div className="bg-gray-dark rounded-3xl relative overflow-hidden">
                  {/* Map Image Placeholder */}
                  <div className="relative w-full h-96 lg:h-[500px]">
                    <Image
                      src="/Maps.jpg"
                      alt="Mapa światowych projektów FocusElectro"
                      fill
                      className="object-cover rounded-2xl"
                      priority={false}
                      sizes="(max-width: 768px) 100vw, 66vw"
                    />
                  </div>
                </div>
              </div>
              {/* Empty space for centering - 2 columns */}
              <div className="col-span-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
