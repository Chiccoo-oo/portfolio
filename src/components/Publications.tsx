"use client";

import React, { useState } from "react";
import { BookOpen, ExternalLink, ChevronDown, ChevronUp, Calendar, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { publicationsData } from "../data/portfolioData";

export default function Publications() {
  const [expandedIndices, setExpandedIndices] = useState<Record<number, boolean>>({});

  const toggleAbstract = (idx: number) => {
    setExpandedIndices((prev) => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  return (
    <section id="publications" className="py-20 border-t border-border-color/30 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-xs font-mono text-neon-green uppercase tracking-widest mb-2 flex items-center gap-1.5 font-bold">
            <Sparkles size={12} className="animate-pulse" />
            07 // RESEARCH_PAPERS
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Publications & <span className="text-gradient">Research</span>
          </h2>
          <div className="h-[2px] w-12 bg-gradient-to-r from-neon-green to-neon-blue mt-4 rounded" />
        </div>

        {/* Papers List */}
        <div className="space-y-6">
          {publicationsData.map((paper, idx) => {
            const isExpanded = !!expandedIndices[idx];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glow-card glass-panel p-6 rounded-xl flex flex-col justify-between"
              >
                <div>
                  {/* Title & Metadata */}
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded bg-bg-navy/80 border border-white/5 shadow-inner mt-1 shrink-0">
                      <BookOpen className="text-neon-blue" size={20} />
                    </div>
                    <div className="space-y-1.5">
                      <h3 className="text-sm sm:text-base font-mono font-bold leading-snug text-foreground">
                        {paper.title}
                      </h3>
                      
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] font-mono text-foreground-muted">
                        <span className="text-neon-purple font-semibold">{paper.journal}</span>
                        <span className="flex items-center gap-1">
                          <Calendar size={10} className="text-neon-green" />
                          {paper.date}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Collapsible Abstract Drawer */}
                  <div className="mt-4 pl-0 sm:pl-14">
                    <button
                      onClick={() => toggleAbstract(idx)}
                      className="flex items-center gap-1 text-[11px] font-mono text-neon-blue hover:text-neon-purple transition-colors"
                    >
                      <span>{isExpanded ? "Hide Abstract" : "View Abstract"}</span>
                      {isExpanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                    </button>

                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden mt-3"
                        >
                          <p className="text-foreground-muted text-[11px] sm:text-xs leading-relaxed font-sans bg-bg-navy/55 border border-white/5 p-4 rounded-lg">
                            {paper.abstract}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* PDF Link Button */}
                <div className="mt-6 pt-4 border-t border-border-color/30 flex items-center justify-end pl-0 sm:pl-14">
                  <a
                    href={paper.pdfLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-bg-navy border border-border-color hover:border-neon-blue/40 text-xs font-mono text-foreground-muted hover:text-foreground transition-all duration-200"
                  >
                    <span>Read Paper (PDF)</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
