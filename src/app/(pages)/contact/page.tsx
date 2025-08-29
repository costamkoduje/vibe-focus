import React from "react";
import { ContactHeroSection } from "@/components/sections/ContactHeroSection";
import { AllFooterSection } from "@/components/sections/common/AllFooterSection";

export default function ContactPage(): React.JSX.Element {
  return (
    <main className="flex flex-col w-full">
      <ContactHeroSection />
      <AllFooterSection />  
    </main>
  );
}
