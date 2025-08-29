import React from "react";
import { Card, CardContent } from "@/components/ui";

export const ProcessSection = (): React.JSX.Element => {
  const processSteps = [
    {
      title: "ANALIZA PROJEKTU",
      description:
        "Dogłębnie analizujemy zlecenie, identyfikujemy kluczowe wymagania oraz potencjalne wyzwania, aby przygotować optymalne rozwiązania dla każdego klienta.",
      titleColor: "text-gray-dark",
      descriptionColor: "text-gray-dark",
      background: "bg-accent",
      backgroundImage: "/images/process/proces1.jpg",
    },
    {
      title: "REALIZACJA PROJEKTU",
      description:
        "Prowadzimy kompleksowe działania od wdrożenia po zakończenie projektu, zachowując najwyższą jakość oraz terminowość na każdym etapie współpracy.",
      titleColor: "text-light",
      descriptionColor: "text-gray-light",
      background: "bg-gray-dark",
      backgroundImage: "/images/process/proces2.jpg",
    },
    {
      title: "DOBÓR KADRY",
      description:
        "Kompletujemy zespół wykwalifikowanych specjalistów, których kompetencje odpowiadają specyfice projektu i gwarantują jego bezproblemową realizację.",
      titleColor: "text-light",
      descriptionColor: "text-gray-light",
      background: "bg-gray-dark",
      backgroundImage: "/images/process/proces3.jpg",
    },
  ];

  return (
    <section className="flex flex-col w-[calc(100%-2.5rem)] mx-auto items-center gap-16 pb-20 relative bg-gray-mid rounded-[24px] mt-5 mb-5">
      <div className="flex flex-col items-center gap-16 w-full py-20">
        <div className="flex flex-col items-center gap-16 w-full">
          {/* Header */}
          <header className="text-center">
            <p className="fonts-mono-xs text-gray-dark mb-4 max-w-col-l mx-auto">
              (NASZA FILOZOFIA PRACY)
            </p>
            <h2 className="fonts-fig-l text-gray-dark mb-8 max-w-col-2xl mx-auto">
              Elastyczni w działaniu, <br />
              konsekwentni w jakości
            </h2>
            <p className="fonts-mono-m text-gray-dark uppercase leading-relaxed max-w-col-3xl mx-auto">
              Każdy projekt traktujemy indywidualnie, dopasowując działania do realnych potrzeb i warunków. Dzięki zgranemu zespołowi ekspertów oraz sprawdzonym procedurom potrafimy szybko reagować na zmiany i wyzwania, jednocześnie gwarantując jakość, terminowość oraz bezpieczeństwo, które są doceniane przez naszych klientów.
            </p>
          </header>

          {/* Bento Grid - 8 columns width */}
          <div className="w-full">
            <div className="grid grid-cols-12 gap-5 mx-0">
              {/* Empty space for centering - 2 columns */}
              <div className="col-span-2"></div>
              {/* Main content - 8 columns */}
              <div className="col-span-8">
                <div className="w-full bg-colors-light p-[3px] rounded-[32px]">
                  <div className="flex flex-col lg:flex-row items-center gap-[3px] w-full">
                    {/* Left Column - Two small cards */}
                    <div className="flex flex-col gap-[3px] w-full lg:w-1/2">
                      <Card className="w-full h-[300px] bg-accent rounded-[32px] overflow-hidden border-0 shadow-lg relative">
                        <div 
                          className="absolute inset-0 bg-cover bg-center opacity-10"
                          style={{ backgroundImage: `url(${processSteps[0]?.backgroundImage || ''})` }}
                        />
                        <CardContent className="w-3/4 h-full p-8 relative z-10">
                          <div className="flex flex-col justify-start">
                            <div className="space-y-4">
                             
                              <h3 className="fonts-mono-xs text-gray-dark leading-tight uppercase tracking-wide">
                                {processSteps[0]?.title || ''}
                              </h3>
                              <p className="fonts-mono-xs text-gray-dark uppercase leading-relaxed">
                                {processSteps[0]?.description || ''}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="w-full h-[300px] bg-gray-dark rounded-[32px] overflow-hidden border-0 shadow-lg relative">
                        <div 
                          className="absolute inset-0 bg-cover bg-center opacity-10"
                          style={{ backgroundImage: `url(${processSteps[1]?.backgroundImage || ''})` }}
                        />
                        <CardContent className="w-3/4  h-full p-8 relative z-10">
                          <div className="flex flex-col justify-start">
                            <div className="space-y-4">
                          
                              <h3 className="fonts-mono-xs text-light leading-tight uppercase tracking-wide">
                                {processSteps[1]?.title || ''}
                              </h3>
                              <p className="fonts-mono-xs text-gray-light uppercase leading-relaxed">
                                {processSteps[1]?.description || ''}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Right Column - One large card */}
                    <Card className="w-full lg:w-1/2 h-[603px] bg-gray-dark rounded-[32px] overflow-hidden border-0 shadow-lg relative">
                      <div 
                        className="absolute inset-0 bg-cover bg-center opacity-10"
                        style={{ backgroundImage: `url(${processSteps[2]?.backgroundImage || ''})` }}
                      />
                      <CardContent className="w-3/4  h-full p-8 relative z-10">
                        <div className="flex flex-col justify-start">
                          <div className="space-y-4">
                           
                            <h3 className="fonts-mono-xs text-light leading-tight uppercase tracking-wide">
                              {processSteps[2]?.title || ''}
                            </h3>
                            <p className="fonts-mono-xs text-gray-light uppercase leading-relaxed">
                              {processSteps[2]?.description || ''}
                            </p>
                          </div>
                          
                        </div>
                      </CardContent>
                    </Card>
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
