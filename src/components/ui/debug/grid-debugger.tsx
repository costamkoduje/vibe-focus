"use client";

import React, { useEffect, useState } from 'react';

export const GridDebugger: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Sprawdź czy naciśnięto Ctrl+Q
      if (event.ctrlKey && event.key === 'q') {
        event.preventDefault();
        setIsVisible(prev => !prev);
      }
    };

    // Dodaj event listener
    document.addEventListener('keydown', handleKeyDown);

    // Cleanup
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {/* Kontener z marginesami - odpowiada systemowi designu */}
      <div className="relative w-full h-full px-5 sm:px-5 lg:px-5">
        {/* Siatka 12-kolumnowa z gutter 20px */}
        <div className="grid grid-cols-12 gap-5 h-full">
          {Array.from({ length: 12 }, (_, index) => (
            <div 
              key={index}
              className="bg-accent/10 border border-accent/30 flex items-center justify-center relative"
            >
              <span className="fonts-mono-xs text-accent font-bold absolute top-1 left-1">
                {index + 1}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
