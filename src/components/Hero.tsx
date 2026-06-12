"use client";

import React, { useState, useEffect } from "react";
import { Calendar, Download, Mail, Terminal as TermIcon } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { motion } from "framer-motion";
import { personalInfo, codingProfilesData } from "../data/portfolioData";

const roles = [
  "Data Science & AI Student",
  "Competitive Programmer",
  "Machine Learning Enthusiast",
  "Full Stack Developer",
  "AI Researcher",
  "Future Software Engineer"
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(100);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentFullText = roles[roleIdx];

    const tick = () => {
      if (!isDeleting) {
        setTypedText(currentFullText.substring(0, typedText.length + 1));
        if (typedText === currentFullText) {
          // Pause at the end of typing
          timer = setTimeout(() => {
            setIsDeleting(true);
            setSpeed(50); // Faster delete
          }, 2000);
          return;
        }
      } else {
        setTypedText(currentFullText.substring(0, typedText.length - 1));
        if (typedText === "") {
          setIsDeleting(false);
          setRoleIdx((prev) => (prev + 1) % roles.length);
          setSpeed(120); // Normal typing speed
          return;
        }
      }

      timer = setTimeout(tick, speed);
    };

    timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, roleIdx, speed]);

  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const targetRect = contactSection.getBoundingClientRect().top;
      const targetPosition = targetRect - bodyRect - offset;
      
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden"
    >
      {/* Decorative gradient overlay */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-neon-blue/10 blur-3xl pulse-glow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-80 h-80 rounded-full bg-neon-purple/10 blur-3xl pulse-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Intro Text Column */}
        <div className="lg:col-span-7 flex flex-col space-y-6 text-left order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-neon-blue/5 border border-neon-blue/20 text-xs font-mono text-neon-blue w-fit uppercase tracking-widest"
          >
            <TermIcon size={12} className="animate-spin-slow" />
            <span>AI Wizard Prototypes Loaded</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="space-y-2"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
              Hi, I&apos;m{" "}
              <span className="text-gradient drop-shadow-[0_0_20px_rgba(139,92,246,0.15)] block mt-1 sm:inline">
                {personalInfo.name}
              </span>
            </h1>

            <div className="h-8 flex items-center font-mono text-sm sm:text-lg md:text-xl font-semibold text-foreground-muted">
              <span>&gt; </span>
              <span className="text-foreground ml-2">{typedText}</span>
              <span className="terminal-cursor h-5 w-1 ml-0.5" />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-foreground-muted text-sm sm:text-base leading-relaxed max-w-xl font-sans"
          >
            Aspiring Software/ML Engineer. Leveraging advanced neural architectures and highly optimized C++ graph pipelines to turn computational complexity into production intelligence.
          </motion.p>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="flex items-center space-x-4"
          >
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-bg-navy/60 border border-border-color hover:border-neon-blue/50 text-foreground-muted hover:text-foreground hover:shadow-neon-blue transition-all duration-300"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-bg-navy/60 border border-border-color hover:border-neon-purple/50 text-foreground-muted hover:text-foreground hover:shadow-neon-purple transition-all duration-300"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href="https://codeforces.com/profile/Anushka_ekka"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-bg-navy/60 border border-border-color hover:border-neon-green/50 text-foreground-muted hover:text-foreground hover:shadow-neon-green transition-all duration-300 font-mono text-xs font-bold leading-none flex items-center justify-center h-[38px] w-[38px]"
              aria-label="Codeforces Profile"
            >
              CF
            </a>
            <a
              href={codingProfilesData.find((p) => p.platform === "LeetCode")?.url || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-bg-navy/60 border border-border-color hover:border-neon-blue/50 text-foreground-muted hover:text-foreground hover:shadow-neon-blue transition-all duration-300 font-mono text-xs font-bold leading-none flex items-center justify-center h-[38px] w-[38px]"
              aria-label="LeetCode Profile"
            >
              LC
            </a>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <a
              href="#contact"
              onClick={handleScrollToContact}
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-neon-blue text-bg-dark font-mono text-xs font-bold tracking-wider hover:bg-neon-blue/80 shadow-neon-blue transition-all duration-300 gap-2 uppercase"
            >
              <Mail size={14} />
              <span>Contact Me</span>
            </a>
            <a
              href="#resume"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-bg-navy/80 text-foreground font-mono text-xs font-bold tracking-wider border border-border-color hover:border-neon-purple/40 hover:shadow-neon-purple transition-all duration-300 gap-2 uppercase"
            >
              <Download size={14} className="text-neon-purple" />
              <span>Resume Download</span>
            </a>
          </motion.div>
        </div>

        {/* Right Avatar / Terminal Widget Column */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-64 h-64 sm:w-80 sm:h-80 select-none group shrink-0"
          >
            {/* Pulsing glow ring around avatar */}
            <div className="absolute inset-0 rounded-full border border-neon-blue/20 scale-105 animate-pulse-slow" />
            <div className="absolute inset-0 rounded-full border border-neon-purple/20 scale-110 pointer-events-none" />

            {/* Glowing cyber avatar frame */}
            <div className="absolute inset-2 rounded-full border border-border-color overflow-hidden bg-bg-navy/80 hover:border-neon-blue/40 transition-all duration-500 shadow-2xl flex items-center justify-center">
              {/* Sleek SVG Holographic Avatar */}
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full p-6 text-neon-blue fill-none stroke-[0.8]"
              >
                {/* Node connection lines inside circle */}
                <line x1="20" y1="50" x2="50" y2="20" stroke="var(--neon-blue)" strokeDasharray="2,2" opacity="0.3" />
                <line x1="50" y1="20" x2="80" y2="50" stroke="var(--neon-purple)" strokeDasharray="2,2" opacity="0.3" />
                <line x1="80" y1="50" x2="50" y2="80" stroke="var(--neon-green)" strokeDasharray="2,2" opacity="0.3" />
                <line x1="50" y1="80" x2="20" y2="50" stroke="var(--neon-blue)" strokeDasharray="2,2" opacity="0.3" />
                <line x1="50" y1="20" x2="50" y2="80" stroke="rgba(255,255,255,0.05)" />
                <line x1="20" y1="50" x2="80" y2="50" stroke="rgba(255,255,255,0.05)" />

                {/* Central head outline */}
                <circle cx="50" cy="38" r="14" stroke="var(--neon-purple)" strokeWidth="1.2" className="group-hover:stroke-neon-blue transition-colors duration-500" />
                {/* Body shoulders */}
                <path d="M26,76 C26,62 36,54 50,54 C64,54 74,62 74,76" stroke="var(--neon-blue)" strokeWidth="1.2" className="group-hover:stroke-neon-purple transition-colors duration-500" />
                
                {/* Code snippets/nodes */}
                <circle cx="20" cy="50" r="2.5" fill="var(--neon-blue)" className="animate-pulse" />
                <circle cx="80" cy="50" r="2.5" fill="var(--neon-green)" />
                <circle cx="50" cy="20" r="2.5" fill="var(--neon-purple)" className="animate-pulse" />
                <circle cx="50" cy="80" r="2.5" fill="var(--neon-blue)" />

                {/* Orbital Rings */}
                <path d="M12,50 A38,38 0 0 1 88,50" stroke="var(--neon-blue)" opacity="0.15" strokeDasharray="3,6" />
                <path d="M88,50 A38,38 0 0 1 12,50" stroke="var(--neon-purple)" opacity="0.15" strokeDasharray="3,6" />
              </svg>
            </div>
            
            {/* Tech tag floating labels */}
            <div className="absolute top-0 right-4 px-2 py-0.5 rounded bg-bg-navy border border-neon-blue/30 text-[9px] font-mono text-neon-blue select-none font-bold">
              AI/ML MODEL
            </div>
            <div className="absolute bottom-4 left-0 px-2 py-0.5 rounded bg-bg-navy border border-neon-purple/30 text-[9px] font-mono text-neon-purple select-none font-bold">
              SOLVER.cpp
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
