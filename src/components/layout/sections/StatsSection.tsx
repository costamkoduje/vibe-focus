"use client";

import React from "react";
import { useTranslation } from "@/lib/i18n";

export const StatsSection = (): React.JSX.Element => {
  const { translations } = useTranslation();
  
  const stats = [
    {
      icon: (
        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 30L16 22L24 26L30 20" stroke="#FDE10D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M30 20L30 16L26 16" stroke="#FDE10D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      value: "250+",
      description: translations.stats.descriptions[0]
    },
    {
      icon: (
        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 21V19C16 17.9391 16.4214 16.9217 17.1716 16.1716C17.9217 15.4214 18.9391 15 20 15H28C29.0609 15 30.0783 15.4214 30.8284 16.1716C31.5786 16.9217 32 17.9391 32 19V21" stroke="#FDE10D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M24 15V11C24 9.93913 23.5786 8.92172 22.8284 8.17157C22.0783 7.42143 21.0609 7 20 7H12C10.9391 7 9.92172 7.42143 9.17157 8.17157C8.42143 8.92172 8 9.93913 8 11V15" stroke="#FDE10D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="24" cy="24" r="3" stroke="#FDE10D" strokeWidth="2"/>
          <path d="M24 21V27" stroke="#FDE10D" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      value: "18",
      description: translations.stats.descriptions[1]
    },
    {
      icon: (
        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 21C22.7614 21 25 18.7614 25 16C25 13.2386 22.7614 11 20 11C17.2386 11 15 13.2386 15 16C15 18.7614 17.2386 21 20 21Z" stroke="#FDE10D" strokeWidth="2"/>
          <path d="M12 29C12 25.6863 15.5817 23 20 23C24.4183 23 28 25.6863 28 29" stroke="#FDE10D" strokeWidth="2" strokeLinecap="round"/>
          <path d="M8 16C8 13.2386 10.2386 11 13 11" stroke="#FDE10D" strokeWidth="2" strokeLinecap="round"/>
          <path d="M32 16C32 13.2386 29.7614 11 27 11" stroke="#FDE10D" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      value: "100+",
      description: translations.stats.descriptions[2]
    },
    {
      icon: (
        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 18C12 16.8954 12.8954 16 14 16H24C25.1046 16 26 16.8954 26 18V26C26 27.1046 25.1046 28 24 28H14C12.8954 28 12 27.1046 12 26V18Z" stroke="#FDE10D" strokeWidth="2"/>
          <path d="M16 20H22" stroke="#FDE10D" strokeWidth="2" strokeLinecap="round"/>
          <path d="M16 24H20" stroke="#FDE10D" strokeWidth="2" strokeLinecap="round"/>
          <path d="M19 12V16" stroke="#FDE10D" strokeWidth="2" strokeLinecap="round"/>
          <path d="M15 14L19 10L23 14" stroke="#FDE10D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      value: "10 lat",
      description: translations.stats.descriptions[3]
    },
    {
      icon: (
        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="#FDE10D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      value: "100%",
      description: translations.stats.descriptions[4]
    },
    {
      icon: (
        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C12 22 15 18 20 18C25 18 28 22 28 22" stroke="#FDE10D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20 18V14" stroke="#FDE10D" strokeWidth="2" strokeLinecap="round"/>
          <path d="M20 14L17 17" stroke="#FDE10D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20 14L23 17" stroke="#FDE10D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 12L20 3L31 12V20C31 28.4183 26.4183 33 20 33C13.5817 33 9 28.4183 9 20V12Z" stroke="#FDE10D" strokeWidth="2"/>
          <path d="M15 20L18 23L25 16" stroke="#FDE10D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      value: "24/7",
      description: translations.stats.descriptions[5]
    }
  ];

  return (
    <section className="flex flex-col w-full items-center py-20 relative bg-gray-mid pb-20">
      <div className="w-full pb-40">
        {/* Grid container */}
        <div className="grid-system pb-40">
          {/* Empty space for centering - 2 columns */}
          <div className="grid-col-2"></div>
          {/* Main stats panel - 8 columns */}
          <div className="grid-col-8">
            <div className="bg-gray-dark rounded-xl p-1">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
                {stats.map((stat, index) => (
                  <div 
                    key={index} 
                    className="bg-gray-mid flex flex-col gap-5 p-10 rounded-xl"
                  >
                    {/* Icon container */}
                    <div className="bg-gray-dark rounded-m w-[82px] h-[82px] flex items-center justify-center">
                      {stat.icon}
                    </div>
                    
                    {/* Text content */}
                    <div className="flex flex-col">
                      {/* Value */}
                      <div className="fonts-fig-xl text-gray-dark mb-2">
                        {stat.value}
                      </div>
                      
                      {/* Description */}
                      <div className="fonts-mono-m text-gray-dark uppercase tracking-[0.4px]">
                        {stat.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
