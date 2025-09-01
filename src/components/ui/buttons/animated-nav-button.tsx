"use client";

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

interface AnimatedNavButtonProps {
  direction: 'left' | 'right';
  onClick: () => void;
  className?: string;
}

export const AnimatedNavButton: React.FC<AnimatedNavButtonProps> = ({
  direction,
  onClick,
  className = ''
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const arrowRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!buttonRef.current || !arrowRef.current) return;

    const button = buttonRef.current;
    const arrow = arrowRef.current;

    // Timeline dla animacji strzałki
    const arrowTL = gsap.timeline({ paused: true });
    arrowTL
      .fromTo(arrow, { x: 0, scale: 1 }, { x: direction === 'right' ? 20 : -20, scale: 1.1, duration: 0.35, ease: "power4.in" })
      .set(arrow, { x: direction === 'right' ? -12 : 12, scale: 0.9 })
      .to(arrow, { x: 0, scale: 1, duration: 0.7, ease: "power4.out" });

    // Funkcja dla hover
    const onMouseEnter = () => {
      arrowTL.restart();
    };

    // Dodanie event listenerów
    button.addEventListener('mouseenter', onMouseEnter);

    // Cleanup
    return () => {
      button.removeEventListener('mouseenter', onMouseEnter);
      arrowTL.kill();
    };
  }, [direction]);

  return (
    <button 
      ref={buttonRef}
      onClick={onClick}
      className={`w-16 h-16 bg-gray-mid hover:bg-gray-mid/60 rounded-2xl flex items-center justify-center transition-colors duration-200 ${className}`}
    >
      <Image 
        ref={arrowRef}
        src="/images/icons/arrow.svg" 
        alt={direction === 'left' ? 'Previous' : 'Next'} 
        className={`w-6 h-6 ${direction === 'left' ? 'rotate-180' : ''}`}
        width={16}
        height={16}
        style={{ filter: 'brightness(0) saturate(100%) invert(24%) sepia(8%) saturate(1038%) hue-rotate(202deg) brightness(94%) contrast(86%)' }}
      />
    </button>
  );
};
