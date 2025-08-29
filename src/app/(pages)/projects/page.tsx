import React from "react";
import { Metadata } from "next";
import {
  AllFooterSection,
  ProjectsMapsSection,
  ProjectsTableSection,
  ProjectsSection,
} from "@/components/sections";

export const metadata: Metadata = {
  title: "Projekty - Focus Electro | Realizowane inwestycje morskie",
  description: "Portfel projektów Focus Electro - instalacje elektryczne i automatyka w przemyśle morskim. Zobacz nasze realizacje dla wiodących stoczni.",
  keywords: ["projekty", "realizacje", "stocznie", "automatyka morska", "instalacje elektryczne", "inżynieria"],
};

export default function ProjectsPage() {
  return (
    <main className="flex flex-col w-full items-center gap-5 pt-0 pb-5 px-0 bg-[#879aa4]">
      <ProjectsMapsSection />
      <ProjectsSection />
      <ProjectsTableSection />
      <AllFooterSection />
    </main>
  );
}