import React from "react";
import { ContactHeroSection, AllFooterSection } from "@/components";

export default function ContactPage(): React.JSX.Element {
  return (
    <main className="flex flex-col w-full">
      <ContactHeroSection />
      <AllFooterSection />  
    </main>
  );
}
