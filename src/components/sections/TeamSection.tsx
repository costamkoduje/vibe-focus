import React from "react";

export const TeamSection = (): React.JSX.Element => {
  return (
    <section className="flex flex-col w-full min-h-[800px] items-center px-4 sm:px-8 lg:px-16 py-20 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/about/a2.jpg')`
        }}
      ></div>
      

      
      <div className="relative z-10 w-full max-w-6xl">
        <div className="grid grid-cols-12 gap-5">
          {/* Main card - 10 columns with light border */}
          <div className="col-start-2 col-span-10">
            <div className="w-full rounded-[32px] overflow-hidden border-[3px] border-gray-light shadow-2xl">
              <div className="grid grid-cols-12">
                {/* Left side - Text content with gray background (6 columns) */}
                <div className="col-span-12 lg:col-span-6 bg-gray-light/90 backdrop-blur-[15px] p-8 lg:p-12">
                  <div className="space-y-6">
                    <div className="fonts-mono-xs text-gray-dark tracking-wide">
                      [ZESPÓŁ FOCUS ELECTRO]
                    </div>
                    
                    <h2 className="fonts-fig-l text-gray-dark leading-tight">
                      Gdzie każdy elektromonter staje się częścią czegoś większego
                    </h2>
                  </div>

                  <div className="mt-8">
                    <p className="fonts-mono-m text-gray-dark uppercase leading-relaxed">
                      W FocusBolt wierzymy, że każdy członek zespołu jest kluczowy dla naszego sukcesu. Tworzymy środowisko, w którym pasja do elektrotechniki morskiej łączy się z innowacyjnością i dążeniem do doskonałości. Dołącz do nas i buduj przyszłość z nami.
                    </p>
                  </div>
                </div>

                {/* Right side - Transparent area (6 columns) to show background image */}
                <div className="col-span-12 lg:col-span-6 bg-transparent">
                  {/* This area is transparent to show the background image */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
