"use client";

import React from "react";

export const TimelineSection = (): React.JSX.Element => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  
  const timelineData = [
    {
      year: "2018",
      description: "Założenie firmy specjalistów\nelektrotechniki morskiej z pierwszym projektem w Rostock, Niemcy.",
      progress: 25
    },
    {
      year: "2020", 
      description: "Ekspansja globalna z projektami\n dla Costa, Carnival oraz legendarnego\n Icon of the Seas w stoczni Meyer Turku.",
      progress: 50
    },
    {
      year: "2022",
      description: "Kamień milowy:\n 100+ zrealizowanych projektów\n z czołowymi klientami.",
      progress: 75
    },
    {
      year: "2025",
      description: "Szczyt wydajności:\n 80+ specjalistów pracujących \njednocześnie na całym świecie.",
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
    <section className="w-[calc(100%-2.5rem)] bg-gray-dark py-20 mx-5 rounded-[20px]">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-gray-dark rounded-[20px] p-12">
          {/* Navigation Arrows */}
          <div className="flex justify-start mb-8">
            <div className="bg-gray-mid rounded-[16px] p-1 flex gap-1">
              <button 
                onClick={handlePrevious}
                className="w-16 h-16 bg-gray-dark hover:bg-gray-dark/80 rounded-[16px] flex items-center justify-center transition-colors duration-200"
              >
                <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 1L1 8.5L13 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button 
                onClick={handleNext}
                className="w-16 h-16 bg-gray-dark hover:bg-gray-dark/80 rounded-[16px] flex items-center justify-center transition-colors duration-200"
              >
                <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L13 8.5L1 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
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
            <div className="relative z-10 max-w-4xl mt-32">
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
