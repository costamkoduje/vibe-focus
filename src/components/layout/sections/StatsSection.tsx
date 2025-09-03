"use client";

import React from "react";
import { useTranslation } from "@/lib/i18n";

export const StatsSection = (): React.JSX.Element => {
  const { translations } = useTranslation();
  
  const stats = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M27.2262 16.4929C28.3862 16.9596 29.1062 18.3329 28.8395 19.5463L28.2928 22.0262C27.3462 26.2929 23.9995 29.3329 19.1728 29.3329H12.8262C7.99949 29.3329 4.65283 26.2929 3.70616 22.0262L3.15949 19.5463C2.89282 18.3329 3.61281 16.9596 4.77281 16.4929L6.66616 15.7329L14.0128 12.7863C15.2928 12.2796 16.7062 12.2796 17.9862 12.7863L25.3328 15.7329L27.2262 16.4929Z" stroke="#CAD3D7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 29.333V13.333" stroke="#CAD3D7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M25.3332 10.667V15.7336L17.9865 12.787C16.7065 12.2803 15.2932 12.2803 14.0132 12.787L6.6665 15.7336V10.667C6.6665 8.46699 8.4665 6.66699 10.6665 6.66699H21.3332C23.5332 6.66699 25.3332 8.46699 25.3332 10.667Z" stroke="#CAD3D7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M19.3332 6.66699H12.6665V4.00033C12.6665 3.26699 13.2665 2.66699 13.9998 2.66699H17.9998C18.7332 2.66699 19.3332 3.26699 19.3332 4.00033V6.66699Z" stroke="#CAD3D7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      value: "200+",
      description: translations.stats.descriptions[0]
    },
    {
      icon: (
        <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.3333 29.3337C23.6971 29.3337 29.6667 23.3641 29.6667 16.0003C29.6667 8.63653 23.6971 2.66699 16.3333 2.66699C8.96954 2.66699 3 8.63653 3 16.0003C3 23.3641 8.96954 29.3337 16.3333 29.3337Z" stroke="#CAD3D7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M11.0005 4H12.3338C9.73379 11.7867 9.73379 20.2133 12.3338 28H11.0005" stroke="#CAD3D7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20.3335 4C22.9335 11.7867 22.9335 20.2133 20.3335 28" stroke="#CAD3D7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4.3335 21.3333V20C12.1202 22.6 20.5468 22.6 28.3335 20V21.3333" stroke="#CAD3D7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4.3335 11.9998C12.1202 9.3998 20.5468 9.3998 28.3335 11.9998" stroke="#CAD3D7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      value: "18",
      description: translations.stats.descriptions[1]
    },
    {
      icon: (
        <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.8268 17.0409C16.7335 17.0276 16.6135 17.0276 16.5068 17.0409C14.1601 16.9609 12.2935 15.041 12.2935 12.681C12.2935 10.2676 14.2401 8.30762 16.6668 8.30762C19.0801 8.30762 21.0401 10.2676 21.0401 12.681C21.0268 15.041 19.1735 16.9609 16.8268 17.0409Z" stroke="#CAD3D7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M25.653 25.8391C23.2797 28.0124 20.133 29.3324 16.6664 29.3324C13.1997 29.3324 10.053 28.0124 7.67969 25.8391C7.81302 24.5858 8.61302 23.3591 10.0397 22.3991C13.693 19.9724 19.6664 19.9724 23.293 22.3991C24.7197 23.3591 25.5197 24.5858 25.653 25.8391Z" stroke="#CAD3D7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16.6663 29.3337C24.0301 29.3337 29.9997 23.3641 29.9997 16.0003C29.9997 8.63653 24.0301 2.66699 16.6663 2.66699C9.30254 2.66699 3.33301 8.63653 3.33301 16.0003C3.33301 23.3641 9.30254 29.3337 16.6663 29.3337Z" stroke="#CAD3D7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      value: "80+",
      description: translations.stats.descriptions[2]
    },
    {
      icon: (
        <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.6133 8.30664C25.2799 10.16 27.12 13.1066 27.4933 16.5066" stroke="#CAD3D7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4.65381 16.573C5.00048 13.1864 6.81381 10.2397 9.45381 8.37305" stroke="#CAD3D7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10.9199 28.001C12.4666 28.7876 14.2266 29.2276 16.0799 29.2276C17.8666 29.2276 19.5466 28.8276 21.0533 28.0943" stroke="#CAD3D7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16.0797 10.3459C18.1269 10.3459 19.7864 8.68642 19.7864 6.63928C19.7864 4.59215 18.1269 2.93262 16.0797 2.93262C14.0326 2.93262 12.373 4.59215 12.373 6.63928C12.373 8.68642 14.0326 10.3459 16.0797 10.3459Z" stroke="#CAD3D7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6.43958 26.6409C8.48671 26.6409 10.1462 24.9813 10.1462 22.9342C10.1462 20.8871 8.48671 19.2275 6.43958 19.2275C4.39244 19.2275 2.73291 20.8871 2.73291 22.9342C2.73291 24.9813 4.39244 26.6409 6.43958 26.6409Z" stroke="#CAD3D7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M25.5602 26.6409C27.6073 26.6409 29.2669 24.9813 29.2669 22.9342C29.2669 20.8871 27.6073 19.2275 25.5602 19.2275C23.513 19.2275 21.8535 19.2275 21.8535 22.9342C21.8535 24.9813 23.513 26.6409 25.5602 26.6409Z" stroke="#CAD3D7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      value: translations.stats.values?.experience || "8 lat",
      description: translations.stats.descriptions[3]
    },
    {
      icon: (
        <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.3204 3.05316L7.66704 5.55983C6.1337 6.13316 4.88037 7.9465 4.88037 9.57316V19.4798C4.88037 21.0532 5.92037 23.1198 7.18704 24.0665L12.9204 28.3465C14.8004 29.7598 17.8937 29.7598 19.7737 28.3465L25.507 24.0665C26.7737 23.1198 27.8137 21.0532 27.8137 19.4798V9.57316C27.8137 7.93316 26.5604 6.11983 25.027 5.5465L18.3737 3.05316C17.2404 2.63983 15.427 2.63983 14.3204 3.05316Z" stroke="#CAD3D7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12.3999 15.906L14.5466 18.0527L20.2799 12.3193" stroke="#CAD3D7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      value: "100%",
      description: translations.stats.descriptions[4]
    },
    {
      icon: (
        <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M29.9597 24.5204C29.9597 25.0004 29.853 25.4937 29.6263 25.9737C29.3997 26.4537 29.1063 26.9071 28.7197 27.3337C28.0663 28.0537 27.3463 28.5737 26.533 28.9071C25.733 29.2404 24.8663 29.4137 23.933 29.4137C22.573 29.4137 21.1197 29.0937 19.5863 28.4404C18.053 27.7871 16.5197 26.9071 14.9997 25.8004C13.4663 24.6804 12.013 23.4404 10.6263 22.0671C9.25301 20.6804 8.01301 19.2271 6.90634 17.7071C5.81301 16.1871 4.93301 14.6671 4.29301 13.1604C3.65301 11.6404 3.33301 10.1871 3.33301 8.8004C3.33301 7.89374 3.49301 7.02707 3.81301 6.22707C4.13301 5.41374 4.63967 4.66707 5.34634 4.0004C6.19967 3.1604 7.13301 2.74707 8.11967 2.74707C8.49301 2.74707 8.86634 2.82707 9.19967 2.98707C9.54634 3.14707 9.85301 3.38707 10.093 3.73374L13.1863 8.09374C13.4263 8.42707 13.5997 8.73374 13.7197 9.02707C13.8397 9.30707 13.9063 9.58707 13.9063 9.8404C13.9063 10.1604 13.813 10.4804 13.6263 10.7871C13.453 11.0937 13.1997 11.4137 12.8797 11.7337L11.8663 12.7871C11.7197 12.9337 11.653 13.1071 11.653 13.3204C11.653 13.4271 11.6663 13.5204 11.693 13.6271C11.733 13.7337 11.773 13.8137 11.7997 13.8937C12.0397 14.3337 12.453 14.9071 13.0397 15.6004C13.6397 16.2937 14.2797 17.0004 14.973 17.7071C15.693 18.4137 16.3863 19.0671 17.093 19.6671C17.7863 20.2537 18.3597 20.6537 18.813 20.8937C18.8797 20.9204 18.9597 20.9604 19.053 21.0004C19.1597 21.0404 19.2663 21.0537 19.3863 21.0537C19.613 21.0537 19.7863 20.9737 19.933 20.8271L20.9463 19.8271C21.2797 19.4937 21.5997 19.2404 21.9063 19.0804C22.213 18.8937 22.5197 18.8004 22.853 18.8004C23.1063 18.8004 23.373 18.8537 23.6663 18.9737C23.9597 19.0937 24.2663 19.2671 24.5997 19.4937L29.013 22.6271C29.3597 22.8671 29.5997 23.1471 29.7463 23.4804C29.8797 23.8137 29.9597 24.1471 29.9597 24.5204Z" stroke="#CAD3D7" strokeWidth="1.5" strokeMiterlimit="10"/>
        </svg>
      ),
      value: "24/7",
      description: translations.stats.descriptions[5]
    }
  ];

  return (
    <section className="flex flex-col w-full items-center py-10 relative bg-gray-mid pb-20">
      <div className="w-full pb-5 md:pb-40">
        {/* Grid container */}
        <div className="grid-system pb-5 md:pb-20">
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
