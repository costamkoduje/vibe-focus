import React from "react";
import { CallToActionSection } from "../CallToActionSection";
import { FooterSection } from "./FooterSection";

export const AllFooterSection = (): React.JSX.Element => {
  return (
    <div className="relative w-full mt-5">
      {/* FooterSection jako podłoże - z paddingiem na dole aby treść nie była zasłonięta */}
      <div className="relative z-10">
        <FooterSection />
      </div>
      
      {/* CallToActionSection nakładający się na FooterSection - pozycjonowany absolutnie na dole */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <CallToActionSection />
      </div>
    </div>
  );
};
