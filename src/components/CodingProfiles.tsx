"use client";

import React from "react";
import { ExternalLink, Code, Star, Trophy, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { codingProfilesData } from "../data/portfolioData";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

const iconMap: Record<string, React.ReactNode> = {
  "GitHub": <GithubIcon className="text-neon-blue" size={20} />,
  "LinkedIn": <LinkedinIcon className="text-neon-purple" size={20} />,
  "LeetCode": <Code className="text-amber-500" size={20} />,
  "Codeforces": <Trophy className="text-rose-500" size={20} />,
  "CodeChef": <Star className="text-yellow-500" size={20} />,
  "HackerRank": <Star className="text-emerald-500" size={20} />,
  "GeeksforGeeks": <Code className="text-green-500" size={20} />,
  "Kaggle": <Trophy className="text-sky-500" size={20} />,
  "HackerEarth": <Code className="text-rose-600" size={20} />
};

export default function CodingProfiles() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" as const }
    }
  };

  return (
    <section id="coding-profiles" className="py-20 border-t border-border-color/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-xs font-mono text-neon-green uppercase tracking-widest mb-2 flex items-center gap-1.5 font-bold">
            <Sparkles size={12} className="animate-pulse" />
            03 // INDEXED CONTRIB_NODES
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Coding <span className="text-gradient">Profiles</span>
          </h2>
          <div className="h-[2px] w-12 bg-gradient-to-r from-neon-green to-neon-blue mt-4 rounded" />
        </div>

        {/* Grid List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {codingProfilesData.map((profile) => (
            <motion.div
              key={profile.platform}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="glow-card glass-panel p-6 rounded-xl flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded bg-bg-navy/70 border border-white/5">
                      {iconMap[profile.platform] || <Code size={20} />}
                    </div>
                    <span className="text-sm font-mono font-bold tracking-wide text-foreground">
                      {profile.platform}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono bg-neon-blue/10 text-neon-blue border border-neon-blue/20 px-2 py-0.5 rounded">
                    {profile.rank}
                  </span>
                </div>

                {/* Body */}
                <div className="space-y-2 mt-3 font-mono">
                  <div className="text-xs text-neon-purple font-semibold">
                    @{profile.username}
                  </div>
                  <p className="text-[11px] text-foreground-muted leading-relaxed font-sans mt-2">
                    {profile.description}
                  </p>
                </div>
              </div>

              {/* Action link */}
              <div className="mt-6 pt-4 border-t border-border-color/30">
                <a
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-bg-navy text-xs font-mono text-foreground-muted hover:text-foreground border border-border-color hover:border-neon-blue/40 hover:shadow-neon-blue transition-all duration-200"
                >
                  <span>Visit Profile</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
