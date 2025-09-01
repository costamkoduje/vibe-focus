"use client";

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

interface AnimatedButtonProps {
  text: string;
  href?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  text,
  href = '#',
  variant = 'primary',
  className = ''
}) => {
  const buttonRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);
  const arrowIconRef = useRef<HTMLImageElement>(null);
  const arrowBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!buttonRef.current || !arrowRef.current || !arrowIconRef.current || !arrowBoxRef.current) return;

    const button = buttonRef.current;
    const arrow = arrowIconRef.current;
    const arrowBox = arrowBoxRef.current;

    // Timeline dla animacji strzałki
    const arrowTL = gsap.timeline({ paused: true });
    arrowTL
      .fromTo(arrow, { x: 0 }, { x: 20, duration: 0.35, ease: "power4.in" })
      .set(arrow, { x: -20 })
      .to(arrow, { x: 0, duration: 0.7, ease: "power4.out" });

    // Timeline dla efektu kliknięcia
    const clickTL = gsap.timeline({ paused: true });
    clickTL.to(arrowBox, { 
      boxShadow: 'inset 48px 0 0 rgba(0,0,0,0.075)', 
      duration: 0.88, 
      ease: "power4.inOut",
      delay: 0.035 
    });

    // Funkcje dla hover
    const onMouseEnter = () => {
      arrowTL.restart(); // Restart zamiast play - odtwarza animację od początku
    };

    const onMouseLeave = () => {
      // Nie robimy nic przy mouse leave - animacja kończy się sama
    };

    // Funkcja dla kliknięcia
    const onClick = (e: Event) => {
      e.preventDefault();
      clickTL.restart(); // Restart zamiast play, aby resetować animację
      
      // Nawigacja po animacji
      setTimeout(() => {
        if (href && href !== '#') {
          window.location.href = href;
        }
      }, 1000);
    };

    // Dodanie event listenerów
    button.addEventListener('mouseenter', onMouseEnter);
    button.addEventListener('mouseleave', onMouseLeave);
    button.addEventListener('click', onClick);

    // Cleanup
    return () => {
      button.removeEventListener('mouseenter', onMouseEnter);
      button.removeEventListener('mouseleave', onMouseLeave);
      button.removeEventListener('click', onClick);
      arrowTL.kill();
      clickTL.kill();
    };
  }, [href]);

  const isPrimary = variant === 'primary';
  
  return (
    <div 
      ref={buttonRef}
      className={`
        ${isPrimary ? 'bg-accent hover:bg-accent/90' : 'bg-gray-mid hover:bg-gray-mid/90'} 
        rounded-m ${isPrimary ? 'pl-6' : 'pl-5'} pr-1 py-1 w-auto flex items-center gap-2.5 cursor-pointer transition-colors
        ${className}
      `}
    >
      <span className="fonts-mono-m text-gray-dark whitespace-nowrap tracking-wide uppercase">
        {text}
      </span>
      <div 
        ref={arrowBoxRef}
        className={`
          w-[48px] h-[48px] shrink-0 rounded-xs flex items-center justify-center
          ${isPrimary ? 'bg-gray-dark' : 'bg-accent'}
        `}
      >
        <div ref={arrowRef} className="flex items-center justify-center">
          <Image
            ref={arrowIconRef}
            src="/images/icons/arrow.svg"
            alt="Strzałka"
            width={20}
            height={20}
            className={`${isPrimary ? 'w-4 h-4' : 'w-5 h-5'}`}
            style={!isPrimary ? { 
              filter: 'brightness(0) saturate(100%) invert(24%) sepia(8%) saturate(1038%) hue-rotate(202deg) brightness(94%) contrast(86%)' 
            } : undefined}
          />
        </div>
      </div>
    </div>
  );
};
