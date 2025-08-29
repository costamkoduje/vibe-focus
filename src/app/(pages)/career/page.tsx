import React from "react";
import { Metadata } from "next";
import { 
  HeroCareerSection,
  ValueSection,
  FilarSection,
  DarkImageSection,
  StandardSection,
  AllFooterSection
} from "@/components/sections";

export const metadata: Metadata = {
  title: "Kariera - Focus Electro | Dołącz do naszego zespołu",
  description: "Rozwijaj swoją karierę w Focus Electro. Oferujemy ciekawe wyzwania w branży instalacji elektrycznych i automatyki dla przemysłu morskiego.",
  keywords: ["kariera", "praca", "elektryka morska", "automatyka", "Focus Electro", "zespół"],
};

export default function CareerPage() {
  return (
    <>
      <HeroCareerSection />
      <ValueSection />
      <FilarSection />
      <DarkImageSection />
      <StandardSection />
      <AllFooterSection />
    </>
  );
}