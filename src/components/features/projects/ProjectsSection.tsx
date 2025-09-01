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
      name: translations.projects.projects[0]?.name || "Kontenerowiec MSC",
      role: translations.projects.projects[0]?.role || "KOMPLEKSOWA INSTALACJA ELEKTRYCZNA",
      image: "/images/projects/p1.jpg"
    },
    {
      id: 2,
      name: translations.projects.projects[1]?.name || "Statek Wycieczkowy",
      role: translations.projects.projects[1]?.role || "SYSTEMY AUTOMATYZACJI POKŁADOWEJ",
      image: "/images/projects/p2.jpg"
    },
    {
      id: 3,
      name: translations.projects.projects[2]?.name || "Royal Caribbean",
      role: translations.projects.projects[2]?.role || "INSTALACJE ELEKTRYCZNE POKŁADU",
      image: "/images/projects/p3.jpg"
    },
    {
      id: 4,
      name: translations.projects.projects[3]?.name || "ORP Ślązak",
      role: translations.projects.projects[3]?.role || "SYSTEMY ELEKTRONICZNE MORSKIE",
      image: "/images/projects/p4.jpg"
    },
    {
      id: 5,
      name: translations.projects.projects[4]?.name || "Statek Badawczy",
      role: translations.projects.projects[4]?.role || "ELEKTRONIKA POKŁADOWA",
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
        <div className="w-full relative bg-dark overflow-hidden">
          <div 
            ref={scrollContainerRef}
            className="flex gap-1 py-1 overflow-x-auto scrollbar-hide pl-4"
          >
            {infiniteProjects.map((project, index) => (
              <div
                key={`${project.id}-${index}`}
                className="flex-shrink-0 w-[320px] h-[400px] bg-gray-mid rounded-xl p-5 flex flex-col justify-end relative overflow-hidden"
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
          <div className="">
            <div className="grid grid-cols-12 gap-5">
              <div className="col-span-2"></div>
              <div className="col-span-2">
                <div className="bg-dark  rounded-2xl p-1 flex gap-1 border border-dark w-fit">
                  <AnimatedNavButton
                    direction="left"
                    onClick={scrollLeft}
                  />
                  <AnimatedNavButton
                    direction="right"
                    onClick={scrollRight}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
