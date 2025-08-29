"use client";

import React, { useRef } from "react";
import Image from "next/image";

export const ProjectsSection = (): React.JSX.Element => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  const projects = [
    {
      id: 1,
      name: "Kontenerowiec MSC",
      role: "KOMPLEKSOWA INSTALACJA ELEKTRYCZNA",
      image: "/images/projects/p1.jpg"
    },
    {
      id: 2,
      name: "Statek Wycieczkowy",
      role: "SYSTEMY AUTOMATYZACJI POKŁADOWEJ",
      image: "/images/projects/p2.jpg"
    },
    {
      id: 3,
      name: "Royal Caribbean",
      role: "INSTALACJE ELEKTRYCZNE POKŁADU",
      image: "/images/projects/p3.jpg"
    },
    {
      id: 4,
      name: "ORP Ślązak",
      role: "SYSTEMY ELEKTRONICZNE MORSKIE",
      image: "/images/projects/p4.jpg"
    },
    {
      id: 5,
      name: "Statek Badawczy",
      role: "ELEKTRONIKA POKŁADOWA",
      image: "/images/projects/p5.jpg"
    }
  ];

  // Duplikuj projekty aby utworzyć nieskończoną pętlę
  const infiniteProjects = [...projects, ...projects, ...projects];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -323, // 320px szerokość + 3px gap
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 323, // 320px szerokość + 3px gap
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="flex flex-col w-[calc(100%-2.5rem)] mx-auto items-center gap-16 relative bg-gray-dark rounded-b-[24px] mb-5">
      <div className="flex flex-col items-center gap-16 w-full py-20">
        {/* Header */}
        <div className="flex flex-col items-center gap-8 pt-5 text-center max-w-4xl mx-auto">
          <p className="fonts-mono-xs text-gray-light uppercase tracking-wide">
            [MAXIMIZING GROWTH THROUGH SYNERGIES]
          </p>
          <h2 className="fonts-fig-l text-light leading-tight">
            Realizacje projektów
          </h2>
          <p className="fonts-mono-m text-gray-light leading-relaxed uppercase">
            POZNAJ PROJEKTY, KTÓRE DEFINIUJĄ NASZĄ POZYCJĘ W BRANŻY ELEKTROTECHNIKI MORSKIEJ. KAŻDA REALIZACJA TO DOWÓD NA WYSOKĄ JAKOŚĆ I TERMINOWOŚĆ NASZYCH USŁUG. PRZEDSTAWIAMY WYBRANE PROJEKTY, KTÓRE NAJLEPIEJ ODZWIERCIEDLAJĄ NASZE KOMPETENCJE W ZAKRESIE KOMPLEKSOWYCH INSTALACJI ELEKTRYCZNYCH.
          </p>
        </div>

        {/* Projects Carousel */}
        <div className="w-full relative bg-dark overflow-hidden">
          <div 
            ref={scrollContainerRef}
            className="flex gap-1 py-1 overflow-x-auto scrollbar-hide pl-[calc(16.666%+0.2rem)]"
          >
            {infiniteProjects.map((project, index) => (
              <div
                key={`${project.id}-${index}`}
                className="flex-shrink-0 w-[320px] h-[400px] bg-gray-mid rounded-[32.83px] p-5 flex flex-col justify-end relative overflow-hidden"
              >
                {/* Background Image */}
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover absolute inset-0 z-0"
                  sizes="320px"
                />
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0  z-10"></div>
                
                {/* Content */}
                <div className="space-y-2.5 relative z-20">
                  <h3 className="fonts-fig-m text-light font-normal tracking-[0.72px] leading-[42px]">
                    {project.name}
                  </h3>
                  <p className="fonts-mono-xs text-gray-light opacity-90 uppercase tracking-[0.32px] leading-[20px]">
                    {project.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="w-full mt-8">
          <div className="">
            <div className="grid grid-cols-12 gap-5">
              <div className="col-span-2"></div>
              <div className="col-span-2">
                <div className="bg-dark  rounded-2xl p-1 flex gap-1 border border-dark w-fit">
                  <button 
                    onClick={scrollLeft}
                    className="w-16 h-16 bg-gray-mid hover:bg-gray-mid/60 rounded-2xl flex items-center justify-center transition-colors duration-200"
                  >
                    <Image 
                      src="/images/icons/arrow.svg" 
                      alt="Previous" 
                      className="w-4 h-4 rotate-180"
                      width={16}
                      height={16}
                      style={{ filter: 'brightness(0) saturate(100%) invert(24%) sepia(8%) saturate(1038%) hue-rotate(202deg) brightness(94%) contrast(86%)' }}
                    />
                  </button>
                  <button 
                    onClick={scrollRight}
                    className="w-16 h-16 bg-gray-mid hover:bg-gray-mid/60 rounded-2xl flex items-center justify-center transition-colors duration-200"
                  >
                    <Image 
                      src="/images/icons/arrow.svg" 
                      alt="Next" 
                      className="w-4 h-4"
                      width={16}
                      height={16}
                      style={{ filter: 'brightness(0) saturate(100%) invert(24%) sepia(8%) saturate(1038%) hue-rotate(202deg) brightness(94%) contrast(86%)' }}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
