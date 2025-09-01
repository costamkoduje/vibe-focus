'use client';

import React from "react";
import {
  AboutSection,
  HeroSection,
  ImageSection,
  ProjectsMapsSection,
  ProjectsSection,
  StatsSection,
  ProcessSection,
  AllFooterSection,
} from "@/components";
import { GridDebugger, Navigation } from "@/components";

export default function Home() {
  return (
    <div className="flex flex-col w-full relative">
      <Navigation />
      <main className="flex flex-col w-full items-center">
        <HeroSection />
        <AboutSection />
        <ProcessSection />
        <ImageSection />
        <ProjectsMapsSection />
        <ProjectsSection />
        <StatsSection />
        <AllFooterSection />
      </main>
      <GridDebugger />
    </div>
  );
}
