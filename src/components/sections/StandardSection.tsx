import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui";

export const StandardSection = (): React.JSX.Element => {
  const standards = [
    {
      title: "PRZEJRZYSTA REKRUTACJA",
      description: "PROCES REKRUTACJI JEST PROSTY I SZYBKI. KANDYDACI MOGĄ LICZYĆ NA JASNĄ KOMUNIKACJĘ ORAZ WSPARCIE NA KAŻDYM ETAPIE APLIKOWANIA.",
      image: "/images/career/cb1.png",
      titleColor: "text-gray-dark",
      descriptionColor: "text-gray-dark",
      background: "bg-accent",
    },
    {
      title: "PRACA NA CAŁYM ŚWIECIE",
      description: "REALIZUJEMY PROJEKTY NA WIELU MIĘDZYNARODOWYCH STOCZNIACH – DZIĘKI TEMU MASZ OKAZJĘ ZDOBYWAĆ DOŚWIADCZENIE ZAWODOWE W RÓŻNYCH KRAJACH I KULTURACH.",
      image: "/images/career/cb2.png",
      titleColor: "text-gray-dark",
      descriptionColor: "text-gray-dark",
      background: "bg-accent",
    },
    {
      title: "CENTRUM SZKOLEŃ",
      description: "OFERUJEMY SZEROKI WYBÓR SZKOLEŃ BRANŻOWYCH ORAZ WARSZTATÓW TECHNICZNYCH. KAŻDY MOŻE ZDOBYWAĆ NOWE UMIEJĘTNOŚCI I ROZWIJAĆ SPECJALIZACJE W PRAKTYCE.",
      image: "/images/career/cb3.png",
      titleColor: "text-gray-dark",
      descriptionColor: "text-gray-dark",
      background: "bg-accent",
    },
    {
      title: "ZGRANY ZESPÓŁ",
      description: "TWORZYMY ŚRODOWISKO, W KTÓRYM LICZY SIĘ WSPARCIE, WZAJEMNY SZACUNEK I WYMIANA DOŚWIADCZEŃ, WZAJEMNA POMOC TO PODSTAWA NASZEJ PRACY, NIEZALEŻNIE OD STAŻU CZY STANOWISKA.",
      image: "/images/career/cb4.png",
      titleColor: "text-gray-dark",
      descriptionColor: "text-gray-dark",
      background: "bg-accent",
    },
    {
      title: "RÓŻNORODNE ZADANIA I PROJEKTY",
      description: "U NAS NIE MA RUTYNY! PRACOWNICY BIORĄ UDZIAŁ W REALIZACJI PROJEKTÓW NA RÓŻNYCH STOCZNIACH OD NOWYCH INSTALACJI. PRZEZ SERWIS, AŻ PO INNOWACYJNE WDROŻENIA",
      image: "/images/career/cb5.png",
      titleColor: "text-gray-dark",
      descriptionColor: "text-gray-dark",
      background: "bg-accent",
    },
  ];

  return (
    <section className="flex flex-col w-[calc(100%-2.5rem)] mx-auto items-center gap-16 pb-20 relative bg-gray-mid rounded-[24px] mt-5 mb-5">
      <div className="flex flex-col items-center gap-16 w-full py-20">
        <div className="flex flex-col items-center gap-16 w-full">
          {/* Header */}
          <header className="text-center">
            <p className="fonts-mono-xs text-gray-dark mb-4 max-w-col-l mx-auto">
              (SEKCJA STANDARDÓW WYSOKIEJ JAKOŚCI)
            </p>
            <h2 className="fonts-fig-l text-gray-dark mb-8 max-w-col-2xl mx-auto">
              Wysokie standardy i partnerskie podejście na każdym etapie współpracy
            </h2>
            <p className="fonts-mono-m text-gray-dark uppercase leading-relaxed max-w-col-3xl mx-auto">
              W FOCUS ELECTRO SZANUJEMY DOŚWIADCZENIE I ZAANGAŻOWANIE KAŻDEGO PRACOWNIKA. ZAPEWNIAMY BEZPIECZNE WARUNKI PRACY, JASNE ZASADY WSPÓŁPRACY ORAZ PARTNERSKĄ ATMOSFERĘ, DZIĘKI KTÓRYM MOŻESZ SKUPIĆ SIĘ NA REALIZACJI PROJEKTÓW W BRANŻY ELEKTROTECHNIKI MORSKIEJ
            </p>
          </header>

          {/* Bento Grid - 8 columns width */}
          <div className="w-full">
            <div className="grid grid-cols-12 gap-5 mx-0 mb-10">
              {/* Empty space for centering - 2 columns */}
              <div className="col-span-2"></div>
              {/* Main content - 8 columns */}
              <div className="col-span-8">
                <div className="w-full">
                  <div className="grid grid-cols-8 gap-1 w-full bg-gray-light rounded-[32px] p-1">
                    {/* Top Row - 2 cards */}
                    <Card className="col-span-5 h-[460px] bg-gray-mid rounded-[32px] overflow-hidden relative">
                      <div className="absolute inset-0 bg-cover bg-bottom">
                        <Image 
                          src={standards[0]?.image || ''} 
                          alt={standards[0]?.title || ''}
                          className="w-full h-full object-cover object-bottom"
                          fill
                          sizes="(max-width: 768px) 100vw, 60vw"
                        />
                      </div>
                      <CardContent className="w-full h-full p-6 relative z-10 flex flex-col justify-between">
                        <div className="space-y-3">
                          <h3 className={`fonts-mono-xs ${standards[0]?.titleColor || 'text-gray-dark'} leading-tight uppercase tracking-wide font-bold`}>
                            {standards[0]?.title || ''}
                          </h3>
                          <p className={`fonts-mono-xs ${standards[0]?.descriptionColor || 'text-gray-dark'} uppercase leading-relaxed`}>
                            {standards[0]?.description || ''}
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="col-span-3 h-[460px] bg-gray-mid rounded-[32px] overflow-hidden relative">
                      <div className="absolute inset-0 bg-cover bg-bottom">
                        <Image 
                          src={standards[1]?.image || ''} 
                          alt={standards[1]?.title || ''}
                          className="w-full h-full object-cover object-bottom"
                          fill
                          sizes="(max-width: 768px) 100vw, 40vw"
                        />
                      </div>
                      <CardContent className="w-full h-full p-6 relative z-10 flex flex-col justify-between">
                        <div className="space-y-3">
                          <h3 className={`fonts-mono-xs text-gray-dark leading-tight uppercase tracking-wide font-bold`}>
                            {standards[1]?.title || ''}
                          </h3>
                          <p className={`fonts-mono-xs ${standards[1]?.descriptionColor || 'text-gray-dark'} uppercase leading-relaxed`}>
                            {standards[1]?.description || ''}
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Bottom Row - 2 cards */}
                    <Card className="col-span-3 h-[460px] bg-gray-mid rounded-[32px] overflow-hidden relative">
                      <div className="absolute inset-0 bg-cover bg-bottom">
                        <Image 
                          src={standards[2]?.image || ''} 
                          alt={standards[2]?.title || ''}
                          className="w-full h-full object-cover object-bottom"
                          fill
                          sizes="(max-width: 768px) 100vw, 40vw"
                        />
                      </div>
                      <CardContent className="w-full h-full p-6 relative z-10 flex flex-col justify-between">
                        <div className="space-y-3">
                          <h3 className={`fonts-mono-xs text-gray-dark leading-tight uppercase tracking-wide font-bold`}>
                            {standards[2]?.title || ''}
                          </h3>
                          <p className={`fonts-mono-xs text-gray-dark uppercase leading-relaxed`}>
                            {standards[2]?.description || ''}
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="col-span-5 h-[460px] bg-gray-mid rounded-[32px] overflow-hidden relative">
                      <div className="absolute inset-0 bg-cover bg-bottom">
                        <Image 
                          src={standards[3]?.image || ''} 
                          alt={standards[3]?.title || ''}
                          className="w-full h-full object-cover object-bottom"
                          fill
                          sizes="(max-width: 768px) 100vw, 60vw"
                        />
                      </div>
                      <CardContent className="w-full h-full p-6 relative z-10 flex flex-col justify-between">
                        <div className="space-y-3">
                          <h3 className={`fonts-mono-xs text-gray-dark leading-tight uppercase tracking-wide font-bold`}>
                            {standards[3]?.title || ''}
                          </h3>
                          <p className={`fonts-mono-xs text-gray-dark uppercase leading-relaxed`}>
                            {standards[3]?.description || ''}
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Bottom Full Width Card */}
                    <Card className="col-span-8 h-[460px] bg-gray-mid rounded-[32px] overflow-hidden relative">
                      <div className="absolute inset-0 bg-cover bg-bottom">
                        <Image 
                          src={standards[4]?.image || ''} 
                          alt={standards[4]?.title || ''}
                          className="w-full h-full object-cover object-bottom"
                          fill
                          sizes="(max-width: 768px) 100vw, 100vw"
                        />
                      </div>
                      <CardContent className="w-full h-full p-6 relative z-10 flex flex-col justify-between">
                        <div className="space-y-3">
                          <h3 className={`fonts-mono-xs text-gray-dark leading-tight uppercase tracking-wide font-bold`}>
                            {standards[4]?.title || ''}
                          </h3>
                          <p className={`fonts-mono-xs text-gray-dark uppercase leading-relaxed`}>
                            {standards[4]?.description || ''}
                          </p>
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
