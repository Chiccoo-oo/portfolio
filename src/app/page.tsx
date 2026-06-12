"use client";

import React, { useState } from "react";
import NeuralBackground from "../components/NeuralBackground";
import CustomCursor from "../components/CustomCursor";
import Navbar from "../components/Navbar";
import CommandPalette from "../components/CommandPalette";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import CodingProfiles from "../components/CodingProfiles";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Achievements from "../components/Achievements";
import Publications from "../components/Publications";
import Leadership from "../components/Leadership";
import Resume from "../components/Resume";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);

  return (
    <>
      {/* Background Interactive Nodes Canvas */}
      <NeuralBackground />

      {/* Futuristic Trailing Custom Cursor */}
      <CustomCursor />

      {/* Glassmorphic Navigation */}
      <Navbar onOpenPalette={() => setIsPaletteOpen(true)} />

      {/* Ctrl + K Command Controller Modal */}
      <CommandPalette isOpen={isPaletteOpen} onClose={() => setIsPaletteOpen(false)} />

      {/* Main Sections Grid */}
      <main className="flex-1 w-full relative">
        <div className="cyber-grid absolute inset-0 -z-20 pointer-events-none opacity-[0.35] transition-opacity duration-300" />
        
        {/* Intro */}
        <Hero />

        {/* Sections layout with scroll references */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <About />
          <Skills />
          <CodingProfiles />
          <Projects />
          <Experience />
          <Achievements />
          <Publications />
          <Leadership />
          <Resume />
          <Contact />
        </div>
      </main>

      {/* Footer Branding & Quote */}
      <Footer />
    </>
  );
}
