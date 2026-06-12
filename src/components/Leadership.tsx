"use client";

import React from "react";
import { Users, Award, Star, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { leadershipData } from "../data/portfolioData";

export default function Leadership() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section id="leadership" className="py-20 border-t border-border-color/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-xs font-mono text-neon-blue uppercase tracking-widest mb-2 flex items-center gap-1.5 font-bold">
            <Sparkles size={12} className="animate-pulse" />
            09 // LEADERSHIP_ORCHESTRATIONS
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Leadership & <span className="text-gradient">Co-curriculars</span>
          </h2>
          <div className="h-[2px] w-12 bg-gradient-to-r from-neon-blue to-neon-purple mt-4 rounded" />
        </div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {leadershipData.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="glow-card glass-panel p-6 rounded-xl flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center space-x-3 mb-4 pb-3 border-b border-border-color/30">
                  <div className="p-2 rounded bg-bg-navy/80 border border-white/5">
                    {idx === 0 ? <Users size={18} className="text-neon-blue" /> : <Award size={18} className="text-neon-purple" />}
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-mono font-bold tracking-tight text-foreground">
                      {item.title}
                    </h3>
                    <span className="text-[10px] font-mono text-neon-green font-semibold">
                      {item.organization}
                    </span>
                  </div>
                </div>

                {/* Subtitle Role */}
                <div className="inline-flex items-center gap-1 text-[10px] font-mono text-foreground-muted bg-bg-navy border border-border-color px-2 py-0.5 rounded-full mb-4">
                  <Star size={8} className="text-yellow-400" />
                  {item.role}
                </div>

                {/* Description */}
                <p className="text-foreground-muted text-xs sm:text-sm leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>

              {/* Card Terminal Status Footer */}
              <div className="mt-6 pt-3 border-t border-border-color/30 flex items-center justify-between text-[8px] font-mono text-foreground-muted select-none">
                <span>ROLE_ID: EX_0{idx + 1}</span>
                <span>STATUS: VERIFIED</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
