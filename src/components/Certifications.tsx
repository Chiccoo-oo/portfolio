"use client";

import React from "react";
import { Award, Calendar, ExternalLink, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { certificationsData } from "../data/portfolioData";

export default function Certifications() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" as const }
    }
  };

  return (
    <section id="certifications" className="py-20 border-t border-border-color/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-xs font-mono text-neon-purple uppercase tracking-widest mb-2 flex items-center gap-1.5 font-bold">
            <Sparkles size={12} className="animate-pulse" />
            08 // VERIFIED_CREDENTIALS
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Academic <span className="text-gradient">Certifications</span>
          </h2>
          <div className="h-[2px] w-12 bg-gradient-to-r from-neon-purple to-neon-green mt-4 rounded" />
        </div>

        {/* Grid List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {certificationsData.map((cert, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="glow-card glass-panel p-5 rounded-xl flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded bg-bg-navy/80 border border-white/5">
                    <Award className="text-neon-purple" size={16} />
                  </div>
                  <span className="inline-flex items-center gap-1 text-[9px] font-mono text-foreground-muted bg-bg-navy border border-border-color px-2 py-0.5 rounded-full">
                    <Calendar size={8} className="text-neon-green" />
                    {cert.date}
                  </span>
                </div>

                {/* Info */}
                <h3 className="text-xs sm:text-sm font-mono font-bold leading-snug text-foreground">
                  {cert.name}
                </h3>
                
                <p className="text-[10px] text-foreground-muted uppercase tracking-wider font-mono mt-1">
                  {cert.organization}
                </p>
              </div>

              {/* View Link */}
              <div className="mt-6 pt-3 border-t border-border-color/30">
                <a
                  href={cert.credentialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded bg-bg-navy text-[10px] font-mono text-foreground-muted hover:text-foreground border border-border-color hover:border-neon-purple/40 hover:shadow-neon-purple transition-all duration-200"
                >
                  <span>View Certificate</span>
                  <ExternalLink size={10} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
