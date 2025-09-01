import React from "react";
import { Metadata } from "next";
import { 
  AllFooterSection,
  HeroCoWorkSection,
  CoWorkOptionsSection,
  ImageSection2,
  ProjectsMapsSection2
} from "@/components";

export const metadata: Metadata = {
  title: "Współpraca - Focus Electro | Partnerzy biznesowi",
  description: "Zapraszamy do współpracy! Focus Electro - profesjonalne instalacje elektryczne i automatyka dla przemysłu morskiego. Sprawdź nasze możliwości partnerstwa.",
  keywords: ["współpraca", "partnerzy", "biznes", "elektryka morska", "stocznie", "automatyka"],
};

export default function CoWorkPage() {
  return (
    <>
      <HeroCoWorkSection />
      <CoWorkOptionsSection />
      <ImageSection2 />
      <ProjectsMapsSection2 />
      <AllFooterSection />
    </>
  );
}