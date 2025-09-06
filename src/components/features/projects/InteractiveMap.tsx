'use client';

import React, { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/cards";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "@/lib/i18n";

// Rejestrujemy plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Typy dla lokalizacji na mapie
interface MapLocation {
  id: string;
  x: number; // pozycja X w procentach
  y: number; // pozycja Y w procentach
  isActive?: boolean;
}

// Dane lokalizacji
const mapLocations: MapLocation[] = [
  {
    id: "arabia",
    x: 66,
    y: 42,
    isActive: true
  },
  {
    id: "singapore",
    x: 105,
    y: 35,
    isActive: true
  },
  {
    id: "australia",
    x: 110,
    y: 68,
    isActive: true
  },
  {
    id: "bahamas",
    x: 8,
    y: 46,
    isActive: true
  },
  {
    id: "barbados",
    x: 12,
    y: 48,
    isActive: true
  },
  {
    id: "china",
    x: 116,
    y: 26,
    isActive: true
  },
  {
    id: "croatia",
    x: 48,
    y: 32,
    isActive: true
  },
  {
    id: "finland",
    x: 51,
    y: 22,
    isActive: true
  },
  {
    id: "france",
    x: 43,
    y: 32,
    isActive: true
  },
  {
    id: "greece",
    x: 54,
    y: 34,
    isActive: true
  },
  {
    id: "niderlands",
    x: 47,
    y: 28,
    isActive: true
  },
  {
    id: "malta",
    x: 46,
    y: 36,
    isActive: true
  },
  {
    id: "maroco",
    x: 41,
    y: 36,
    isActive: true
  },
  {
    id: "germany",
    x: 51,
    y: 28,
    isActive: true
  },
  {
    id: "poland",
    x: 54,
    y: 25,
    isActive: true
  },
  {
    id: "UK",
    x: 42,
    y: 26,
    isActive: true
  },
  {
    id: "USA",
    x: 7,
    y: 30,
    isActive: true
  },
  {
    id: "italy",
    x: 50,
    y: 36,
    isActive: true
  },
];

// Komponent pinezki
const MapPin: React.FC<{
  location: MapLocation;
  isSelected: boolean;
  onClick: () => void;
  locationName: string;
}> = ({ location, isSelected, onClick, locationName }) => {
  return (
    <div
      className={`absolute cursor-pointer transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2 map-pin ${
        isSelected ? 'z-20' : 'z-10'
      }`}
      style={{
        left: `${location.x}%`,
        top: `${location.y}%`
      }}
      onClick={onClick}
    >
      {/* Pinezka */}
      <div className={`relative group ${isSelected ? 'scale-125' : 'hover:scale-110'}`}>
        {/* Kontener z pinezką i napisem obok */}
        <div className="flex items-center  bg-gray-light rounded-lg border border-gray-300 ">
          {/* Tło pinezki */}
          <div className="w-6 h-6 bg-gray-mid rounded-lg border border-gray-light border-2 flex items-center justify-center p-1">
            {/* SVG Pinezka */}
            <svg 
              width="8" 
              height="10" 
              viewBox="0 0 8 10" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <path 
                fillRule="evenodd" 
                clipRule="evenodd" 
                d="M4.00098 0C6.20989 0.000263864 8.00098 1.79102 8.00098 4C8.00098 6.20847 4.50265 9.63177 4.00098 9.5C3.50098 9.63397 0 6.20914 0 4C0 1.79086 1.79184 0 4.00098 0ZM4.00098 3C3.44869 3 3.00098 3.44772 3.00098 4C3.00098 4.55228 3.44869 5 4.00098 5C4.55304 4.99974 5.00098 4.55212 5.00098 4C5.00098 3.44788 4.55304 3.00026 4.00098 3Z" 
                fill="#FDE10D"
              />
            </svg>
          </div>
          
          {/* Napis obok pinezki - tylko po hover */}
          <span className="text-gray-dark text-xs font-medium uppercase whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 max-w-0 group-hover:max-w-xs overflow-hidden">
            {locationName}
          </span>
        </div>
      </div>
    </div>
  );
};

// Komponent karty informacyjnej
const LocationCard: React.FC<{
  location: MapLocation | null;
  onClose: () => void;
  locationName: string;
  shipyards: string[];
  locationLabel: string;
  shipyardsLabel: string;
}> = ({ location, onClose, locationName, shipyards, locationLabel, shipyardsLabel }) => {
  if (!location) return null;

    return (
    <>
      {/* Overlay do zamykania karty */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 z-20 cursor-pointer"
        onClick={onClose}
      />
      
      {/* Karta informacyjna - pozycjonowana po lewej stronie */}
      <div className="absolute left-0 top-0 w-[441px] h-full bg-gray-light rounded-xl z-30">
        {/* Kontener z kartami */}
        <div className="absolute inset-0 bg-gray-dark rounded-xl p-1">
          <div className="flex flex-col gap-1 w-full h-full">
            
            {/* Górna karta - Lokalizacja */}
            <Card className="w-full bg-gray-mid rounded-xl overflow-hidden relative h-2/3">
              <CardContent className="w-full h-full p-8 relative z-10 flex flex-col justify-between">
                {/* Przycisk zamknięcia */}
                <div className="relative w-[45px] h-[47px] flex items-start">
                  <div className="absolute left-0 w-[45px] h-[45px] bg-gray-light rounded-3xl flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors" onClick={onClose}>
                    <span className="text-gray-dark text-[36px] font-normal">×</span>
                  </div>
                </div>
                
                {/* Informacje o lokalizacji */}
                <div className="flex flex-col gap-2.5">
                  <div className="font-mono-xs text-gray-dark uppercase tracking-[0.32px]">
                    [{locationLabel}]
                  </div>
                  <div className="text-[65px] text-gray-dark font-normal tracking-[-2.627px] leading-[72px]">
                    {locationName}
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Dolna karta - Stocznie */}
            <Card className="w-full bg-gray-mid rounded-xl overflow-hidden relative h-1/3">
              <CardContent className="w-full h-full p-8 relative z-10 flex flex-col justify-center">
                <div className="flex flex-col gap-5">
                  <div className="font-mono-xs text-gray-dark uppercase">
                    [{shipyardsLabel}]
                  </div>
                  <div className="flex flex-col gap-5 font-mono-xs text-gray-dark uppercase">
                    {shipyards.map((shipyard, index) => (
                      <div key={index} className="leading-[26px]">
                        {shipyard}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
            
          </div>
        </div>
      </div>
    </>
  );
};

export const InteractiveMap: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<MapLocation | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);
  const { t, translations } = useTranslation();

  // Zapobiegaj błędom hydratacji
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    let tl: gsap.core.Timeline | null = null;
    
    // Opóźnienie, aby poczekać na zakończenie poprzednich animacji
    const timer = setTimeout(() => {
      if (mapRef.current) {
        // Ustawiamy początkowy stan animacji
        gsap.set(mapRef.current, {
          scale: 0.6,
          rotation: -5,
          transformOrigin: "center center"
        });

        // Tworzymy animację scroll trigger
        tl = gsap.timeline({
          scrollTrigger: {
            trigger: mapRef.current,
            start: "top 80%", // Start animacji gdy górna krawędź sekcji dotknie 80% wysokości viewport
            end: "top 30%",   // Koniec animacji gdy górna krawędź sekcji dotknie 30% wysokości viewport
            scrub: 1,
            toggleActions: "play none none reverse",
            markers: false
          }
        });

        tl.to(mapRef.current, {
          scale: 1,
          rotation: 0,
          duration: 1,
          ease: "power2.out"
        });
      }
    }, 1000); // 1 sekunda opóźnienia
    
    // Cleanup function
    return () => {
      clearTimeout(timer);
      if (tl && tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
    };
  }, []);

  const handlePinClick = (location: MapLocation) => {
    setSelectedLocation(location);
  };

  const handleCloseCard = () => {
    setSelectedLocation(null);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = -((e.clientX - rect.left) / rect.width - 0.5) * 550; // Odwrócony kierunek X
    const y = -((e.clientY - rect.top) / rect.height - 0.5) * 150; // Odwrócony kierunek Y
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <div 
      ref={mapRef}
      className="bg-gray-dark rounded-xl relative overflow-hidden h-[30vh] md:h-[60vh]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Sfera z gradientem i maską SVG */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Główna sfera z okrągłą maską */}
        <div className="relative w-[90vh] h-[90vh] sphere-mask top-[20vh]">
          {/* Maska SVG dla mapy świata */}
          <div 
            className="absolute inset-0 map-mask transition-transform duration-300 ease-out"
            style={{
              transform: `translate(${mousePosition.x}px, ${mousePosition.y - 50}px) scale(1.4)`
            }}
          >
            {/* Gradient dla lądów */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-400 via-gray-500 to-gray-600 opacity-75"></div>
          </div>
          
          {/* Efekt sfery z gradientem radialnym */}
          <div className="absolute inset-0 sphere-gradient"></div>
          
          {/* Interaktywne pinezki - teraz wewnątrz sfery */}
          <div 
            className="absolute inset-0 transition-transform duration-300 ease-out font-mono-xs"
            style={{
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
            }}
          >
            {mapLocations.map((location) => (
              <MapPin
                key={location.id}
                location={location}
                isSelected={selectedLocation?.id === location.id}
                onClick={() => handlePinClick(location)}
                locationName={isMounted ? t(`interactiveMap.locations.${location.id}.name`) : location.id}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Karta informacyjna */}
      <LocationCard
        location={selectedLocation}
        onClose={handleCloseCard}
        locationName={selectedLocation && isMounted ? t(`interactiveMap.locations.${selectedLocation.id}.name`) : selectedLocation?.id || ''}
        shipyards={selectedLocation && isMounted ? translations.interactiveMap?.locations?.[selectedLocation.id]?.shipyards || [] : []}
        locationLabel={isMounted ? t('interactiveMap.labels.location') : 'LOCATION'}
        shipyardsLabel={isMounted ? t('interactiveMap.labels.shipyards') : 'SHIPYARDS'}
      />
    </div>
  );
};