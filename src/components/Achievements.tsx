"use client";

import React from "react";
import { Trophy, Code2, BookOpen, Award, Star, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { achievementsData } from "../data/portfolioData";

const iconMap = {
  Trophy: <Trophy className="text-amber-400" size={24} />,
  Code: <Code2 className="text-neon-blue" size={24} />,
  BookOpen: <BookOpen className="text-neon-purple" size={24} />,
  Award: <Award className="text-neon-green" size={24} />,
  Star: <Star className="text-yellow-400 animate-pulse" size={24} />
};

export default function Achievements() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <section id="achievements" className="py-20 border-t border-border-color/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-xs font-mono text-neon-blue uppercase tracking-widest mb-2 flex items-center gap-1.5 font-bold">
            <Sparkles size={12} className="animate-pulse" />
            06 // SYSTEM_TROPHIES
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Key <span className="text-gradient">Achievements</span>
          </h2>
          <div className="h-[2px] w-12 bg-gradient-to-r from-neon-blue to-neon-purple mt-4 rounded" />
        </div>

        {/* Grid List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {achievementsData.map((ach, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              className="glow-card glass-panel p-6 rounded-xl flex flex-col justify-between"
            >
              <div>
                {/* Icon & Metric */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded bg-bg-navy/80 border border-white/5 shadow-inner">
                    {iconMap[ach.iconName] || <Trophy className="text-neon-blue" size={24} />}
                  </div>
                  <span className="text-lg font-mono font-black text-neon-blue bg-neon-blue/5 border border-neon-blue/20 px-3 py-1 rounded-full">
                    {ach.metric}
                  </span>
                </div>

                {/* Info */}
                <h3 className="text-sm sm:text-base font-mono font-bold tracking-tight text-foreground mb-2">
                  {ach.title}
                </h3>
                
                <p className="text-[11px] sm:text-xs text-foreground-muted leading-relaxed font-sans">
                  {ach.details}
                </p>
              </div>

              {/* Card Terminal Status Footer */}
              <div className="mt-6 pt-3 border-t border-border-color/30 flex items-center justify-between text-[8px] font-mono text-foreground-muted select-none">
                <span>NODE_ID: {idx + 1}</span>
                <span>STATUS: VERIFIED</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
