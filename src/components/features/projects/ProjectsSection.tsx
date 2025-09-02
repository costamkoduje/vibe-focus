"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { AnimatedNavButton } from "@/components";
import { useTranslation } from "@/lib/i18n";

export const ProjectsSection = (): React.JSX.Element => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { translations } = useTranslation();
  
  const projects = [
    {
      id: 1,
      name: translations.projects.projects[0]?.name || "Celebrity Apex",
      role: translations.projects.projects[0]?.role || "Wsparcie klienta w realizacji nowej instalacji elektrycznej w rejonie nadbudówki.",
      image: "/images/projects/p1.jpg"
    },
    {
      id: 2,
      name: translations.projects.projects[1]?.name || "NCL Epic",
      role: translations.projects.projects[1]?.role || "Wsparcie klienta w realizacji nowej instalacji elektrycznej w rejonie nadbudówki.",
      image: "/images/projects/p2.jpg"
    },
    {
      id: 3,
      name: translations.projects.projects[2]?.name || "Ropax",
      role: translations.projects.projects[2]?.role || "Nowa budowa jednostki. Wsparcie klienta w realizacji podłączeń elektrycznych w rejonie siłowni. Wymiana urządzeń gastronomicznych oraz modernizacja instalacji elektrycznej w strefie bufetu. ",
      image: "/images/projects/p3.jpg"
    },
    {
      id: 4,
      name: translations.projects.projects[3]?.name || "Adventure of the Seas",
      role: translations.projects.projects[3]?.role || "Wsparcie klienta w realizacji nowej instalacji elektrycznej w rejonie nadbudówki.",
      image: "/images/projects/p4.jpg"
    },
    {
      id: 5,
      name: translations.projects.projects[4]?.name || "Aida Diva E",
      role: translations.projects.projects[4]?.role || "Wsparcie klienta podczas szerokiego zakresu przebudowy. Praca w rejonie restaruacji oraz kabin.",
      image: "/images/projects/p5.jpg"
    }
  ];

  // Duplikuj projekty aby utworzyć nieskończoną pętlę
  const infiniteProjects = [...projects, ...projects, ...projects];

  // Responsywne scrollowanie
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = window.innerWidth <= 640 ? -303 : window.innerWidth <= 768 ? -353 : -423;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = window.innerWidth <= 640 ? 303 : window.innerWidth <= 768 ? 353 : 423;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="flex flex-col w-full sm:w-[calc(100%-2rem)] lg:w-[calc(100%-2.5rem)] mx-auto items-center gap-16 relative bg-gray-dark rounded-b-[24px] mb-5">
      <div className="flex flex-col items-center gap-16 w-full py-20">
        {/* Header */}
        <div className="flex flex-col items-center gap-8 pt-5 text-center max-w-4xl mx-auto">
          <p className="fonts-mono-xs text-gray-light uppercase tracking-wide">
          {translations.projects.subtitle}
          </p>
          <h2 className="fonts-fig-l text-light leading-tight">
          {translations.projects.title}
          </h2>
          <p className="fonts-mono-m text-gray-light leading-relaxed uppercase">
          {translations.projects.description}
          </p>
        </div>

        {/* Projects Carousel */}
        <div className="w-full relative bg-dark">
          <div 
            ref={scrollContainerRef}
            className="flex gap-1 py-1 overflow-x-auto scrollbar-hide pl-4 scroll-smooth touch-pan-x"
            style={{
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {infiniteProjects.map((project, index) => (
              <div
                key={`${project.id}-${index}`}
                className="flex-shrink-0 w-[300px] sm:w-[350px] md:w-[380px] h-[400px] sm:h-[450px] md:h-[480px] bg-gray-mid rounded-xl p-3 sm:p-4 md:p-5 flex flex-col justify-end relative overflow-hidden"
                style={{ scrollSnapAlign: 'start' }}
              >
                {/* Background Image */}
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover absolute inset-0 z-0"
                  sizes="400px"
                />
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0  z-10"></div>
                
                {/* Content */}
                <div className="space-y-2.5 relative z-20">
                  <h3 className="fonts-fig-m text-light leading-tight">
                    {project.name}
                  </h3>
                  <p className="fonts-mono-xs text-gray-light opacity-90 uppercase tracking-wide leading-relaxed">
                    {project.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="w-full mt-8">
          <div className="flex justify-center">
            <div className="bg-gray-mid rounded-2xl p-1 flex gap-1 w-fit">
              <AnimatedNavButton
                direction="left"
                onClick={scrollLeft}
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
              />
              <AnimatedNavButton
                direction="right"
                onClick={scrollRight}
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
