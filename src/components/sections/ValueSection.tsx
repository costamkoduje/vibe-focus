"use client";

import React from "react";
import Image from "next/image";

export const ValueSection = (): React.JSX.Element => {
  const values = [
    {
      title: "Jakość",
      description: "Dążymy do perfekcji w każdym projekcie, zapewniając najwyższe standardy usług i niezawodność realizacji."
    },
    {
      title: "Terminowość",
      description: "Pracujemy sprawnie i efektywnie, aby spełniać zobowiązania wobec klientów i zespołu na czas."
    },
    {
      title: "Profesjonalizm",
      description: "Nasz zespół składa się z ekspertów, którzy stale podnoszą swoje kwalifikacje w elektrotechnice morskiej."
    },
    {
      title: "Pasja do morza",
      description: "Miłość do morza i prądu napędza nas do odkrywania nowych rozwiązań technologicznych."
    },
    {
      title: "Partnerstwo",
      description: "Budujemy długotrwałe relacje oparte na zaufaniu, współpracy i wzajemnym szacunku."
    }
  ];

  const careerImages = [
    "/images/career/c1.jpg",
    "/images/career/c2.jpg",
    "/images/career/c3.jpg",
    "/images/career/c4.jpg",
    "/images/career/c5.jpg"
  ];

  return (
    <section className="relative w-full flex flex-col mb-5 ">
      <div className="relative w-[calc(100%-2.5rem)] mx-auto bg-gray-dark rounded-[22px] pt-20">
        <div className="grid grid-cols-12 gap-5 lg:gap-5">
          {/* Left Column - Text - 4 columns */}
          <div className="col-span-12 lg:col-start-3 lg:col-span-4">
            <p className="fonts-mono-xs text-gray-mid uppercase mb-4 tracking-[0.4px]">
              (WARTOŚCI FIRMY)
            </p>
            <h2 className="fonts-fig-l text-light mb-6 tracking-[-2.627px] leading-[72px]">
              Nasze wartości to kamienie węgielne naszego sukcesu
            </h2>
            <p className="fonts-mono-m text-gray-light uppercase leading-[30px] tracking-[0.4px]">
              POZNAJ WARTOŚCI, KTÓRE DEFINIUJĄ KULTURĘ PRACY W FOCUS ELECTRO I SPRAWIAJĄ, ŻE JESTEŚMY WYJĄTKOWYM MIEJSCEM ROZWOJU ZAWODOWEGO.
            </p>
          </div>

          {/* Right Column - Value Cards - 4 columns */}
          <div className="col-span-12 lg:col-start-7 lg:col-span-4 w-full bg-gray-light rounded-[30px] p-1">
            <div className="flex flex-col gap-[3px] w-full">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="bg-gray-dark rounded-[30px] p-5 w-full">
                  <div className="flex flex-col gap-10">
                    {/* Icon */}
                    <div className="w-[82.08px] h-[82.08px] bg-gray-mid rounded-[16.42px] flex items-center justify-center flex-shrink-0">
                      <div className="w-[38.33px] h-[38.33px] flex items-center justify-center">
                        <svg 
                          width="38" 
                          height="38" 
                          viewBox="0 0 35 30" 
                          fill="none" 
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-gray-dark"
                        >
                          <g id="Group">
                            <path id="Vector" d="M7.98906 15.1759H15.1759" stroke="currentColor" strokeWidth="2.39562" strokeLinecap="round" strokeLinejoin="round"/>
                            <path id="Vector_2" d="M7.98906 10.3847H15.1759" stroke="currentColor" strokeWidth="2.39562" strokeLinecap="round" strokeLinejoin="round"/>
                            <path id="Vector_3" d="M26.5552 19.9672C30.1936 19.9672 33.1431 17.0177 33.1431 13.3792C33.1431 9.74074 30.1936 6.79125 26.5552 6.79125C22.9167 6.79125 19.9672 9.74074 19.9672 13.3792C19.9672 17.0177 22.9167 19.9672 26.5552 19.9672Z" stroke="currentColor" strokeWidth="2.39562" strokeLinecap="round" strokeLinejoin="round"/>
                            <path id="Vector_4" d="M22.3628 23.5606H3.19781C2.88013 23.5606 2.57547 23.4344 2.35083 23.2098C2.1262 22.9852 2 22.6805 2 22.3628V3.19781C2 2.88013 2.1262 2.57547 2.35083 2.35083C2.57547 2.1262 2.88013 2 3.19781 2H29.5497C29.8673 2 30.1721 2.1262 30.3967 2.35083C30.6212 2.57547 30.7475 2.88013 30.7475 3.19781V8.2975" stroke="currentColor" strokeWidth="2.39562" strokeLinecap="round" strokeLinejoin="round"/>
                            <path id="Vector_5" d="M22.3628 18.4611V28.352L26.5552 25.9564L30.7475 28.352V18.4611" stroke="currentColor" strokeWidth="2.39562" strokeLinecap="round" strokeLinejoin="round"/>
                          </g>
                        </svg>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="fonts-fig-m text-light font-normal mb-2 tracking-[0.72px] leading-[42px]">
                        {value.title}
                      </h3>
                      <p className="fonts-mono-m text-gray-light leading-[30px] tracking-[0.4px] uppercase">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Career Images Carousel */}
        <div className="mt-20 pb-20 px-5">
          <div className="flex justify-center">
            <div className="flex gap-4 items-end max-full overflow-x-auto">
              {careerImages.map((image, index) => (
                <div 
                  key={index}
                  className="relative flex-shrink-0"
                  style={{
                    width: `${300 - index * 20}px`,
                    height: `200px`,
                    zIndex: careerImages.length - index
                  }}
                >
                    <Image
                      src={image}
                      alt={`Kariera w Focus Electro ${index + 1}`}
                      fill
                      className="object-cover rounded-2xl"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
