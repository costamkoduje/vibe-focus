"use client";

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

interface AnimatedArrowButtonProps {
  onClick?: () => void;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const AnimatedArrowButton: React.FC<AnimatedArrowButtonProps> = ({
  onClick,
  className = '',
  size = 'lg'
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
      .fromTo(arrow, { x: 0, scale: 1 }, { x: 20, scale: 1.1, duration: 0.35, ease: "power4.in" })
      .set(arrow, { x: -20, scale: 0.9 })
      .to(arrow, { x: 0, scale: 1, duration: 0.7, ease: "power4.out" });

    // Funkcja dla hover
    const onMouseEnter = () => {
      arrowTL.restart();
    };

    // Funkcja dla group hover
    const onGroupHover = () => {
      arrowTL.restart();
    };

    // Dodanie event listenerów
    button.addEventListener('mouseenter', onMouseEnter);
    
    // Dodanie group hover listener
    const groupElement = button.closest('.group');
    if (groupElement) {
      groupElement.addEventListener('mouseenter', onGroupHover);
    }

    // Cleanup
    return () => {
      button.removeEventListener('mouseenter', onMouseEnter);
      if (groupElement) {
        groupElement.removeEventListener('mouseenter', onGroupHover);
      }
      arrowTL.kill();
    };
  }, []);

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  return (
    <button 
      ref={buttonRef}
      onClick={onClick}
      className={`w-full h-full bg-gray-dark text-gray-light rounded-l transition-colors border border-accent group-hover:bg-gray-mid hover:bg-gray-mid flex items-center justify-center ${className}`}
    >
      <Image 
        ref={arrowRef}
        src="/images/icons/arrow.svg" 
        alt="Strzałka" 
        className={iconSizes[size]}
        width={32}
        height={32}
      />
    </button>
  );
};
