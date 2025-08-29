import React from "react";
import { Metadata } from "next";
import { 
  AllFooterSection,
  HeroAboutSection,
  TimelineSection,
  CareerSection,
  TeamSection,
  ProfessionalismSection
} from "@/components/sections";

export const metadata: Metadata = {
  title: "O nas - Focus Electro | Historia i doświadczenie w branży morskiej",
  description: "Poznaj historię Focus Electro - specjalisty od instalacji elektrycznych i automatyki dla przemysłu morskiego. Doświadczenie, profesjonalizm i innowacje.",
  keywords: ["historia Focus Electro", "doświadczenie", "zespół", "przemysł morski", "automatyka"],
};

export default function AboutPage() {
  return (
    <>
      <HeroAboutSection />
      <TimelineSection />
      <CareerSection />
      <TeamSection />
      <ProfessionalismSection />
      <AllFooterSection />
    </>
  );
}