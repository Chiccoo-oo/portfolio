"use client";

import React from "react";
import { Briefcase, Calendar, CheckSquare, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { experienceData } from "../data/portfolioData";

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" as const }
    }
  };

  return (
    <section id="experience" className="py-20 border-t border-border-color/30 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-xs font-mono text-neon-purple uppercase tracking-widest mb-2 flex items-center gap-1.5 font-bold">
            <Sparkles size={12} className="animate-pulse" />
            05 // TEMPORAL_LOG
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="h-[2px] w-12 bg-gradient-to-r from-neon-purple to-neon-green mt-4 rounded" />
        </div>

        {/* Timeline wrapper */}
        <div className="relative border-l border-border-color/80 ml-4 md:ml-6 space-y-12 py-4">
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12"
          >
            {experienceData.map((exp, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="relative pl-8 md:pl-10 group"
              >
                {/* Pulsing checkpoint node on timeline line */}
                <span className="absolute left-0 top-1.5 -translate-x-1/2 flex h-5 w-5 items-center justify-center rounded-full bg-bg-dark border-2 border-border-color group-hover:border-neon-blue transition-colors duration-300">
                  <span className="h-2 w-2 rounded-full bg-neon-blue animate-pulse group-hover:bg-neon-purple transition-colors duration-300" />
                </span>

                {/* Experience Detail Panel */}
                <div className="glow-card glass-panel p-6 rounded-xl relative">
                  {/* Top Line (Position + Duration) */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-border-color/30 pb-4 mb-4">
                    <div>
                      <h3 className="text-base sm:text-lg font-mono font-bold tracking-tight text-foreground group-hover:text-neon-blue transition-colors duration-300">
                        {exp.position}
                      </h3>
                      <span className="text-xs font-mono text-neon-purple font-semibold">
                        {exp.organization}
                      </span>
                    </div>
                    
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-foreground-muted bg-bg-navy/70 border border-white/5 px-2.5 py-1 rounded-full h-fit w-fit">
                      <Calendar size={10} className="text-neon-green" />
                      {exp.duration}
                    </span>
                  </div>

                  {/* Bullet Responsibilities */}
                  <ul className="space-y-2.5 font-sans text-xs sm:text-sm text-foreground-muted">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2.5 leading-relaxed">
                        <CheckSquare size={13} className="text-neon-blue mt-0.5 shrink-0 stroke-[2.5]" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 mt-6 pt-4 border-t border-border-color/30 font-mono text-[9px]">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-bg-navy border border-border-color/50 text-foreground-muted uppercase hover:text-foreground hover:border-neon-blue/30 transition-all duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
