import React from "react";
import Image from "next/image";

export const ProfessionalismSection = (): React.JSX.Element => {
  return (
    <section className="w-[calc(100%-2.5rem)] bg-gray-dark pt-20 mt-5 mx-5 rounded-t-3xl pb-60 mb-[-40px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          <div className="lg:col-span-4 lg:col-start-3">
            <p className="fonts-mono-xs text-gray-mid uppercase mb-4">
              Nasza Filozofia
            </p>
            <h2 className="fonts-fig-l text-light mb-8">
              Profesjonalizm, który przekłada się na rezultaty
            </h2>
            <p className="fonts-mono-m text-gray-light uppercase leading-relaxed">
              Nasze doświadczenie w branży morskiej pozwala nam dostarczać rozwiązania, które są nie tylko innowacyjne, ale także niezawodne i efektywne. Stawiamy na jakość, precyzję i terminowość, co przekłada się na zadowolenie naszych klientów i długotrwałe relacje biznesowe.
            </p>
          </div>
          <div className="lg:col-span-4 lg:col-start-7 relative">
            <Image 
              src="/images/about/a3.jpg" 
              alt="Focus Electro - profesjonalne instalacje morskie" 
              className="w-full h-full object-cover rounded-3xl"
              width={400}
              height={300}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>
     
    </section>
  );
};
