'use client';

import React, { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/cards";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Rejestrujemy plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Typy dla lokalizacji na mapie
interface MapLocation {
  id: string;
  name: string;
  x: number; // pozycja X w procentach
  y: number; // pozycja Y w procentach
  shipyards: string[];
  isActive?: boolean;
}

// Dane lokalizacji
const mapLocations: MapLocation[] = [
  {
    id: "arabia",
    name: "Arabia",
    x: 66,
    y: 42,
    shipyards: ["Jeddah Saudi"],
    isActive: true
  },
  {
    id: "australia",
    name: "Australia",
    x: 110,
    y: 68,
    shipyards: ["Sydney"],
    isActive: true
  },
  {
    id: "bahamas",
    name: "Bahamas",
    x: 8,
    y: 46,
    shipyards: ["Freeport, Rock Sound"],
    isActive: true
  },
  {
    id: "barbados",
    name: "Barbados",
    x: 12,
    y: 48,
    shipyards: ["Barbados"],
    isActive: true
  },
  {
    id: "china",
    name: "China",
    x: 116,
    y: 26,
    shipyards: ["Shanghai"],
    isActive: true
  },
  {
    id: "croatia",
    name: "Croatia",
    x: 48,
    y: 32,
    shipyards: ["Dubrovnik"],
    isActive: true
  },
  {
    id: "finland",
    name: "Finland",
    x: 51,
    y: 22,
    shipyards: ["Rauma, Turku"],
    isActive: true
  },
  {
    id: "france",
    name: "France",
    x: 43,
    y: 32,
    shipyards: ["Brest, Marsylia, Saint-Nazaire"],
    isActive: true
  },
  {
    id: "greece",
    name: "Greece",
    x: 54,
    y: 35,
    shipyards: ["Ateny, Korfu"],
    isActive: true
  },
  {
    id: "niderlands",
    name: "Niderlands",
    x: 47,
    y: 28,
    shipyards: ["Amsterdam, Rotterdam, "],
    isActive: true
  },
  {
    id: "malta",
    name: "Malta",
    x: 46,
    y: 36,
    shipyards: ["Malta"],
    isActive: true
  },
  {
    id: "maroco",
    name: "Maroc",
    x: 46,
    y: 52,
    shipyards: ["Casablanca"],
    isActive: true
  },
  {
    id: "germany",
    name: "Germany",
    x: 51,
    y: 28,
    shipyards: ["Bremen, Bremenhaven, Wismar"],
    isActive: true
  },
  {
    id: "poland",
    name: "Poland",
    x: 54,
    y: 25,
    shipyards: ["Gdynia, Gdańsk Remontowa"],
    isActive: true
  },
  {
    id: "UK",
    name: "UK",
    x: 42,
    y: 26,
    shipyards: ["Belfast, Southampton, "],
    isActive: true
  },
  {
    id: "USA",
    name: "USA",
    x: 7,
    y: 30,
    shipyards: ["Boston, Bremerhaven, Los angeles, Miami, Orlando, Seattle "],
    isActive: true
  },
  {
    id: "italy",
    name: "Italy",
    x: 50,
    y: 35,
    shipyards: ["Civitavecchia, Genua, Palermo "],
    isActive: true
  },
];

// Komponent pinezki
const MapPin: React.FC<{
  location: MapLocation;
  isSelected: boolean;
  onClick: () => void;
}> = ({ location, isSelected, onClick }) => {
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
            {location.name}
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
}> = ({ location, onClose }) => {
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
                    [LOKALIZACJA]
                  </div>
                  <div className="text-[65px] text-gray-dark font-normal tracking-[-2.627px] leading-[72px]">
                    {location.name}
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Dolna karta - Stocznie */}
            <Card className="w-full bg-gray-mid rounded-xl overflow-hidden relative h-1/3">
              <CardContent className="w-full h-full p-8 relative z-10 flex flex-col justify-center">
                <div className="flex flex-col gap-5">
                  <div className="font-mono-xs text-gray-dark uppercase">
                    [STOCZNIE]
                  </div>
                  <div className="flex flex-col gap-5 font-mono-xs text-gray-dark uppercase">
                    {location.shipyards.map((shipyard, index) => (
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
  const mapRef = useRef<HTMLDivElement>(null);

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
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Karta informacyjna */}
      <LocationCard
        location={selectedLocation}
        onClose={handleCloseCard}
      />
    </div>
  );
};