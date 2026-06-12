"use client";

import React from "react";
import { User, BookOpen, GraduationCap, MapPin, Target, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolioData";
import Terminal from "./Terminal";

export default function About() {
  const infoItems = [
    { label: "Name", value: personalInfo.name, icon: <User size={14} className="text-neon-blue" /> },
    { label: "Degree", value: personalInfo.degree, icon: <GraduationCap size={14} className="text-neon-purple" /> },
    { label: "Branch", value: personalInfo.branch, icon: <BookOpen size={14} className="text-neon-green" /> },
    { label: "University", value: personalInfo.university, icon: <GraduationCap size={14} className="text-neon-blue" /> },
    { label: "Location", value: personalInfo.location, icon: <MapPin size={14} className="text-neon-purple" /> },
    { label: "Career Goal", value: personalInfo.careerGoals, icon: <Target size={14} className="text-neon-green" /> }
  ];

  const statsItems = [
    { label: "Projects Completed", value: personalInfo.stats.projects, color: "text-neon-blue bg-neon-blue/5 border-neon-blue/10" },
    { label: "Problems Solved", value: personalInfo.stats.solvedProblems, color: "text-neon-purple bg-neon-purple/5 border-neon-purple/10" },
    { label: "Hackathons Tracked", value: personalInfo.stats.hackathons, color: "text-neon-green bg-neon-green/5 border-neon-green/10" },
    { label: "Certifications", value: personalInfo.stats.certifications, color: "text-neon-blue bg-neon-blue/5 border-neon-blue/10" },
    { label: "Research Papers", value: personalInfo.stats.papers, color: "text-neon-purple bg-neon-purple/5 border-neon-purple/10" }
  ];

  return (
    <section id="about" className="py-20 border-t border-border-color/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col items-center mb-12 text-center">
          <span className="text-xs font-mono text-neon-blue uppercase tracking-widest mb-2 flex items-center gap-1.5 font-bold">
            <Sparkles size={12} className="animate-pulse" />
            01 // BIOGRAPHICAL PAYLOAD
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="h-[2px] w-12 bg-gradient-to-r from-neon-blue to-neon-purple mt-4 rounded" />
        </div>

        {/* Content Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Info Grid & Paragraph */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="glass-panel p-6 sm:p-8 rounded-xl relative overflow-hidden">
              {/* Scanline simulation */}
              <div className="absolute inset-0 bg-linear-to-b from-white/[0.01] to-transparent pointer-events-none" />
              
              <h3 className="text-lg font-mono font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="text-neon-blue">&gt;</span> core_profile.json
              </h3>
              
              <p className="text-foreground-muted text-xs sm:text-sm leading-relaxed mb-6 font-sans">
                {personalInfo.bioParagraph}
              </p>

              {/* Bio details list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-border-color/60 pt-6 font-mono text-[11px]">
                {infoItems.map((item, idx) => (
                  <div key={idx} className="flex flex-col space-y-1 bg-bg-navy/40 p-2.5 rounded border border-white/5">
                    <span className="text-[10px] text-foreground-muted uppercase tracking-wider flex items-center gap-1.5 font-bold">
                      {item.icon}
                      {item.label}
                    </span>
                    <span className="text-foreground font-semibold leading-normal truncate" title={item.value}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-3 font-mono">
              {statsItems.map((stat, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col items-center justify-center p-3 rounded-lg border text-center transition-all duration-300 hover:scale-105 ${stat.color}`}
                >
                  <span className="text-xl sm:text-2xl font-black tracking-tight">{stat.value}</span>
                  <span className="text-[9px] text-foreground-muted uppercase font-bold tracking-wide mt-1.5 leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Terminal Shell */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 flex flex-col justify-center h-full"
          >
            <div className="w-full relative">
              {/* Decorative glows */}
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 blur-md opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              <Terminal />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
