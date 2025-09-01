"use client";

import React from "react";
import { AnimatedNavButton } from "@/components";
import { useTranslation } from "@/lib/i18n";

export const TimelineSection = (): React.JSX.Element => {
  const { translations } = useTranslation();
  const [currentIndex, setCurrentIndex] = React.useState(0);
  
  const timelineData = translations.aboutPage?.timeline?.timelineData || [
    {
      year: "2018",
      description: "Założenie firmy specjalistów\nelektrotechniki morskiej z pierwszym\nprojektem w Rostock, Niemcy.",
      progress: 25
    },
    {
      year: "2020", 
      description: "Ekspansja globalna z projektami\ndla Costa, Carnival oraz legendarnego\nIcon of the Seas w stoczni Turku.",
      progress: 50
    },
    {
      year: "2022",
      description: "Kamień milowy:\n100+ zrealizowanych projektów\nz czołowymi klientami.",
      progress: 75
    },
    {
      year: "2025",
      description: "Szczyt wydajności:\n80+ specjalistów pracujących\njednocześnie na całym świecie.",
      progress: 95
    }
  ];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? timelineData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === timelineData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-[calc(100%-2.5rem)] bg-gray-dark py-20 mx-5 rounded-l">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-gray-dark rounded-l p-12">
          {/* Navigation Arrows */}
          <div className="flex justify-start mb-8">
            <div className="bg-dark rounded-m p-1 flex gap-1">
              <AnimatedNavButton
                direction="left"
                onClick={handlePrevious}
              />
              <AnimatedNavButton
                direction="right"
                onClick={handleNext}
              />
            </div>
          </div>

          {/* Timeline Content */}
          <div className="relative">
            {/* Large Year Background */}
            <div className="absolute top-[-100px] right-0 text-gray-light opacity-20 pointer-events-none">
              <span className="fonts-fig-xxl-bold" style={{ fontSize: '350px', letterSpacing: '-18px' }}>
                {timelineData[currentIndex]?.year || ''}
              </span>
            </div>

            {/* Event Description */}
            <div className="relative z-10 max-w-5xl mt-32">
              <p className="fonts-fig-l text-light leading-tight mb-8 whitespace-pre-line">
                {timelineData[currentIndex]?.description || ''}
              </p>
            </div>

            {/* Timeline Axis */}
            <div className="relative z-10">
              <div className="w-full h-1 bg-gray-mid mb-4 relative">
                <div 
                  className="h-full bg-gradient-to-r from-accent to-gray-mid transition-all duration-500 ease-out"
                  style={{ width: `${timelineData[currentIndex]?.progress || 0}%` }}
                ></div>
              </div>
              <div className="flex justify-between">
                <span className="fonts-mono-xs text-light">2015</span>
                <span className="fonts-mono-xs text-light">2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
