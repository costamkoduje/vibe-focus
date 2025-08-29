"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "./button";

export const Navigation = (): React.JSX.Element => {
  const pathname = usePathname();
  const isRealizacjePage = pathname === "/projects";
  const isAboutPage = pathname === "/about";
  const isCareerPage = pathname === "/career";
  const isCoWorkPage = pathname === "/cooperation";
  const isContactPage = pathname === "/contact";
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navigationItems = [
    { label: "HOME", active: !isRealizacjePage && !isAboutPage && !isCareerPage && !isCoWorkPage && !isContactPage },
    { label: "O NAS", active: isAboutPage },
    { label: "KARIERA", active: isCareerPage },
    { label: "WSPÓŁPRACA", active: isCoWorkPage },
    { label: "KONTAKT", active: isContactPage },
  ];

  return (
    <div id="navigation" className="flex flex-col w-full relative">
      {/* Mobile Navigation */}
      <div className="flex lg:hidden w-full items-center justify-between gap-2 p-3">
        <Link href="/" className="flex items-center gap-2 bg-gray-dark rounded-[15px] px-4 py-3 hover:bg-gray-dark/80 transition-colors">
          <Image className="w-6 h-8" alt="Logo FE" src="/images/icons/logoFE.svg" width={24} height={32} />
          <div className="fonts-mono-l text-gray-light leading-tight">
            FOCUS
            <br />
            ELECTRO
          </div>
        </Link>
        
        <Button 
          className="bg-accent hover:bg-accent/90 text-dark rounded-[15px] px-4 py-2 fonts-mono-xs"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? 'ZAMKNIJ' : 'MENU'}
        </Button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden w-full bg-gray-dark mx-3 rounded-[15px] mt-2 p-4 space-y-3">
          <Link 
            href="/" 
            className="block fonts-mono-m text-gray-light hover:text-accent transition-colors py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            HOME
          </Link>
          <Link 
            href="/about" 
            className="block fonts-mono-m text-gray-light hover:text-accent transition-colors py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            O NAS
          </Link>
          <Link 
            href="/projects" 
            className="block fonts-mono-m text-gray-light hover:text-accent transition-colors py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            REALIZACJE
          </Link>
          <Link 
            href="/career" 
            className="block fonts-mono-m text-gray-light hover:text-accent transition-colors py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            KARIERA
          </Link>
          <Link 
            href="/cooperation" 
            className="block fonts-mono-m text-gray-light hover:text-accent transition-colors py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            WSPÓŁPRACA
          </Link>
          <Link 
            href="/contact" 
            className="block fonts-mono-m text-accent bg-accent/10 hover:bg-accent/20 transition-colors py-3 px-4 rounded-[12px] mt-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            KONTAKT
          </Link>
        </div>
      )}

      {/* Desktop Navigation - Grid System 12 kolumn */}
      <div className="hidden lg:grid grid-cols-12 gap-[3px] w-full items-start p-1 relative px-5">
        {/* Logo - 2 kolumny (1-2) */}
        <Link href="/" className="col-span-2 h-20 flex items-center justify-center gap-2.5 relative bg-gray-dark rounded-[15px] hover:bg-gray-dark/80 transition-colors cursor-pointer group">
          <Image className="relative w-[35.48px] h-[52px]" alt="Logo FE" src="/images/icons/logoFE.svg" width={35} height={52} />

          <div className="relative w-fit fonts-mono-l text-gray-light group-hover:text-gray-light">
            FOCUS
            <br />
            ELECTRO
          </div>
        </Link>

        {/* Realizacje - 2 kolumny (3-4) */}
        <Link 
          href="/projects" 
          className={`col-span-2 h-20 flex justify-center gap-2.5 bg-gray-dark rounded-[15px] overflow-hidden items-center relative cursor-pointer group ${
            isRealizacjePage ? "bg-gray-dark/80" : "hover:bg-gray-dark/80"
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className={`w-fit fonts-mono-xs whitespace-nowrap relative ${
            isRealizacjePage ? "text-gray-light" : "text-gray-mid group-hover:text-gray-light"
          }`}>
            REALIZACJE
          </div>

          <Image 
            className="relative w-3.5 h-3.5 transition-all duration-300" 
            alt="Dot" 
            src={isRealizacjePage || isHovered ? "/images/icons/dot-light.svg" : "/images/icons/dot.svg"} 
            width={14} height={14}
          />
        </Link>

        {/* Środkowe menu - 5 kolumn (5-9) */}
        <div className="col-span-5 h-20 flex items-center justify-center gap-10 relative bg-gray-dark rounded-[15px]">
          <div className="flex gap-10">
            {navigationItems.map((item, index) => (
              <Link
                key={index}
                href={item.label === "HOME" ? "/" : item.label === "O NAS" ? "/about" : item.label === "KARIERA" ? "/career" : item.label === "WSPÓŁPRACA" ? "/cooperation" : item.label === "KONTAKT" ? "/contact" : "#"}
                className="inline-flex items-center justify-center px-0 py-4 relative flex-[0_0_auto] rounded-[13.79px] overflow-hidden hover:bg-gray-dark/20 transition-colors cursor-pointer"
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
          className={`col-span-1 h-20 flex justify-center gap-2.5 bg-gray-dark rounded-[15px] overflow-hidden items-center relative cursor-pointer group hover:bg-gray-dark/80 transition-colors`}
        >
          <div className="relative w-fit fonts-mono-xs text-gray-light group-hover:text-gray-light whitespace-nowrap">
            PL
          </div>

        </div>

        {/* Registration - 2 kolumny (11-12) */}
        <Button className="col-span-2 h-20 bg-accent hover:bg-accent/90 text-dark rounded-[15px] fonts-mono-xs border-none">
          REGISTRATION
        </Button>
      </div>
    </div>
  );
};
