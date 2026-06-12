"use client";

import React from "react";
import { Cpu, Code2, Database, Globe, Wrench, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { skillsData } from "../data/portfolioData";

const iconMap: Record<string, React.ReactNode> = {
  "Programming Languages": <Code2 className="text-neon-blue" size={18} />,
  "AI & Data Science": <Cpu className="text-neon-purple" size={18} />,
  "Web Development": <Globe className="text-neon-green" size={18} />,
  "Databases": <Database className="text-neon-blue" size={18} />,
  "Tools": <Wrench className="text-neon-purple" size={18} />
};

export default function Skills() {
  // Group skills by category
  const categories = Array.from(new Set(skillsData.map((s) => s.category)));

  // Frame container animation options
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const }
    }
  };

  return (
    <section id="skills" className="py-20 border-t border-border-color/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-xs font-mono text-neon-purple uppercase tracking-widest mb-2 flex items-center gap-1.5 font-bold">
            <Sparkles size={12} className="animate-pulse" />
            02 // COGNITIVE CAPABILITIES
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <div className="h-[2px] w-12 bg-gradient-to-r from-neon-purple to-neon-green mt-4 rounded" />
        </div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {categories.map((category) => {
            const skillsInCat = skillsData.filter((s) => s.category === category);
            return (
              <motion.div
                key={category}
                variants={cardVariants}
                className="glow-card glass-panel p-6 rounded-xl flex flex-col justify-between"
              >
                {/* Card Title */}
                <div>
                  <div className="flex items-center space-x-3 mb-6 pb-3 border-b border-border-color/60">
                    <div className="p-2 rounded bg-bg-navy/70 border border-white/5">
                      {iconMap[category] || <Code2 size={18} />}
                    </div>
                    <h3 className="text-sm font-mono font-bold tracking-wide uppercase text-foreground">
                      {category}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {skillsInCat.map((skill) => (
                      <div key={skill.name} className="space-y-1.5">
                        <div className="flex justify-between items-center text-xs font-mono">
                          <span className="text-foreground-muted hover:text-foreground transition-colors font-medium">
                            {skill.name}
                          </span>
                          <span className="text-neon-blue font-bold">{skill.level}%</span>
                        </div>
                        {/* Progress Bar Container */}
                        <div className="h-1.5 w-full bg-bg-navy/80 rounded-full overflow-hidden border border-white/5">
                          {/* Animated inner gauge */}
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
                            className="h-full bg-gradient-to-r from-neon-blue via-neon-purple to-neon-green rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Cyber Card Footer */}
                <div className="mt-6 pt-3 border-t border-border-color/30 flex items-center justify-between text-[8px] font-mono text-foreground-muted select-none">
                  <span>CAPS_LEVEL: STABLE</span>
                  <span>NODE_COUNT: {skillsInCat.length}</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
