"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components";
import { useTranslation, toggleLanguage, useI18n } from "@/lib/i18n";


export const Navigation = (): React.JSX.Element => {
  const pathname = usePathname();
  const { translations } = useTranslation();
  const [isHydrated, setIsHydrated] = useState(false);
  const navigationRef = useRef<HTMLDivElement>(null);
  
  // Sprawdzanie hydratacji Zustand
  useEffect(() => {
    const unsubscribe = useI18n.persist.onFinishHydration(() => {
      setIsHydrated(true);
    });
    
    // Jeśli już jest zhydratowany
    if (useI18n.getState().translations) {
      setIsHydrated(true);
    }
    
    return unsubscribe;
  }, []);


  const isRealizacjePage = pathname === "/projects";
  const isAboutPage = pathname === "/about";
  const isCareerPage = pathname === "/career";
  const isCoWorkPage = pathname === "/cooperation";
  const isContactPage = pathname === "/contact";
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navigationItems = [
    { label: translations.navigation.menu.home, active: !isRealizacjePage && !isAboutPage && !isCareerPage && !isCoWorkPage && !isContactPage, href: "/" },
    { label: translations.navigation.menu.about, active: isAboutPage, href: "/about" },
    { label: translations.navigation.menu.career, active: isCareerPage, href: "/career" },
    { label: translations.navigation.menu.cooperation, active: isCoWorkPage, href: "/cooperation" },
    { label: translations.navigation.menu.contact, active: isContactPage, href: "/contact" },
  ];

  return (
    <div ref={navigationRef} id="navigation" className="flex flex-col w-full relative">
      {/* Mobile Navigation */}
      <div className="flex md:hidden w-full items-center justify-between gap-2 ">
        <Link href="/" className="flex items-center gap-2 mx-5 py-3 hover:opacity-80 transition-opacity min-h-[44px]">
          <Image className="w-6 h-8" alt="Logo FE" src="/images/icons/logoFEdark.svg" width={24} height={32} />
          <div className="fonts-mono-l text-gray-dark leading-tight">
            {translations.navigation.companyName.split(' ').map((word, index, array) => (
              <React.Fragment key={index}>
                {word}
                {index < array.length - 1 && <br />}
              </React.Fragment>
            ))}
          </div>
        </Link>
        
        <Button 
          className="bg-gray-light hover:bg-gray-light/90 text-gray-dark rounded-m px-4 py-3 fonts-mono-xs min-h-[44px] min-w-[80px] mx-5"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? 'ZAMKNIJ' : 'MENU'}
        </Button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden w-full bg-gray-dark md:mx-3 mx-0 rounded-m m-5 p-4 space-y-3">
          <Link 
            href="/" 
            className="block fonts-mono-m text-gray-light hover:text-accent transition-colors py-3 px-3 rounded-m hover:bg-gray-mid/20 min-h-[44px] flex items-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            HOME
          </Link>
          <Link 
            href="/about" 
            className="block fonts-mono-m text-gray-light hover:text-accent transition-colors py-3 px-3 rounded-m hover:bg-gray-mid/20 min-h-[44px] flex items-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            O NAS
          </Link>

          <Link 
            href="/career" 
            className="block fonts-mono-m text-gray-light hover:text-accent transition-colors py-3 px-3 rounded-m hover:bg-gray-mid/20 min-h-[44px] flex items-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            KARIERA
          </Link>
          <Link 
            href="/cooperation" 
            className="block fonts-mono-m text-gray-light hover:text-accent transition-colors py-3 px-3 rounded-m hover:bg-gray-mid/20 min-h-[44px] flex items-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            WSPÓŁPRACA
          </Link>
          <Link 
            href="/projects" 
            className="block fonts-mono-m text-gray-light hover:text-accent transition-colors py-3 px-3 rounded-m hover:bg-gray-mid/20 min-h-[44px] flex items-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {translations.navigation.projects}
          </Link>
          <Link 
            href="/contact" 
            className="block fonts-mono-m text-gray-light hover:text-accent transition-colors py-3 px-3 rounded-m hover:bg-gray-mid/20 min-h-[44px] flex items-center"
           onClick={() => setIsMobileMenuOpen(false)}
          >
            {translations.navigation.menu.contact}
          </Link>

          
          {/* Language switcher */}
          <button 
            className="block fonts-mono-m text-gray-light hover:text-accent transition-colors py-3 px-3 rounded-m hover:bg-gray-mid/20 mt-5 min-h-[44px] w-full text-left"
            onClick={() => {
              if (isHydrated) {
                toggleLanguage();
              }
              setIsMobileMenuOpen(false);
            }}
            disabled={!isHydrated}
          >
            {translations.navigation.language}
          </button>
        </div>
      )}

      {/* Desktop Navigation - Grid System 12 kolumn */}
      <div className="hidden md:grid grid-cols-12 gap-1 w-full items-start p-1 relative px-5">
        {/* Logo - 2 kolumny (1-2) */}
        <Link href="/" className="col-span-2 h-16 lg:h-20 flex items-center justify-center gap-2 lg:gap-2.5 relative bg-gray-dark rounded-m hover:bg-gray-dark/80 transition-colors cursor-pointer group">
          <Image className="relative w-[28px] h-[40px] lg:w-[35.48px] lg:h-[52px]" alt="Logo FE" src="/images/icons/logoFE.svg" width={35} height={52} />

          <div className="relative w-fit fonts-mono-m lg:fonts-mono-l text-gray-light group-hover:text-gray-light">
            {translations.navigation.companyName.split(' ').map((word, index, array) => (
              <React.Fragment key={index}>
                {word}
                {index < array.length - 1 && <br />}
              </React.Fragment>
            ))}
          </div>
        </Link>

        {/* Realizacje - 2 kolumny (3-4) */}
        <Link 
          href="/projects" 
          className={`col-span-2 h-16 lg:h-20 flex justify-center gap-2 lg:gap-2.5 bg-gray-dark rounded-m overflow-hidden items-center relative cursor-pointer group ${
            isRealizacjePage ? "bg-gray-dark/80" : "hover:bg-gray-dark/80"
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className={`w-fit fonts-mono-xs whitespace-nowrap relative ${
            isRealizacjePage ? "text-gray-light" : "text-gray-mid group-hover:text-gray-light"
          }`}>
            {translations.navigation.projects}
          </div>

          <Image 
            className="relative w-3 h-3 lg:w-3.5 lg:h-3.5 transition-all duration-300" 
            alt="Dot" 
            src={isRealizacjePage || isHovered ? "/images/icons/dot-light.svg" : "/images/icons/dot.svg"} 
            width={14} height={14}
          />
        </Link>

        {/* Środkowe menu - 5 kolumn (5-9) */}
        <div className="col-span-5 h-16 lg:h-20 flex items-center justify-center gap-6 lg:gap-10 relative bg-gray-dark rounded-m">
          <div className="flex gap-6 lg:gap-10">
            {navigationItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="inline-flex items-center justify-center px-0 py-3 lg:py-4 relative flex-[0_0_auto] rounded-xs overflow-hidden hover:bg-gray-dark/20 transition-colors cursor-pointer"
              >
                <div
                  className={`relative w-fit mt-[-1.00px] fonts-mono-xs whitespace-nowrap transition-colors ${
                    item.active ? "text-gray-light" : "text-gray-mid hover:text-gray-light"
                  }`}
                >
                  {item.label}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Zmiana języka - 1 kolumna (10) */}
        <div 
          className={`col-span-1 h-16 lg:h-20 flex justify-center gap-2 lg:gap-2.5 bg-gray-dark rounded-m overflow-hidden items-center relative cursor-pointer group hover:bg-gray-dark/80 transition-colors ${!isHydrated ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={() => {
            if (isHydrated) {
              toggleLanguage();
            }
          }}
        >
          <div className="relative w-fit fonts-mono-xs text-gray-light group-hover:text-gray-light whitespace-nowrap">
            {translations.navigation.language}
          </div>

        </div>

        {/* Login - 2 kolumny (11-12) */}
        <Button className="col-span-2 h-16 lg:h-20 bg-accent hover:bg-accent/90 text-dark rounded-m fonts-mono-xs border-none">
          {translations.navigation.login}
        </Button>
      </div>
    </div>
  );
};
