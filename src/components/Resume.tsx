"use client";

import React from "react";
import { Download, Eye, Sparkles, FileText } from "lucide-react";
import { motion } from "framer-motion";

export default function Resume() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Anushka_Ekka_Resume.pdf";
    link.download = "Anushka_Ekka_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-20 border-t border-border-color/30 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-xs font-mono text-neon-blue uppercase tracking-widest mb-2 flex items-center gap-1.5 font-bold">
            <Sparkles size={12} className="animate-pulse" />
            10 // DOCUMENTS_CHECKOUT
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Curriculum <span className="text-gradient">Vitae</span>
          </h2>
          <div className="h-[2px] w-12 bg-gradient-to-r from-neon-blue to-neon-purple mt-4 rounded" />
        </div>

        {/* Centered Premium Download Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full flex justify-center"
        >
          <div className="w-full max-w-xl glass-panel p-8 sm:p-10 rounded-xl relative overflow-hidden shadow-2xl border border-white/5 hover:border-neon-blue/30 transition-all duration-500">
            {/* Hologram overlay lines */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.015] to-transparent pointer-events-none" />

            <div className="flex flex-col items-center text-center space-y-6">
              {/* Animated Document Icon Container */}
              <div className="p-4 rounded-full bg-neon-blue/5 border border-neon-blue/20 shadow-neon-blue/10 animate-pulse-slow">
                <FileText size={40} className="text-neon-blue" />
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-mono font-bold text-foreground">
                  Anushka_Ekka_Resume.pdf
                </h3>
                <p className="text-foreground-muted text-xs sm:text-sm leading-relaxed max-w-md mx-auto font-sans">
                  My official curriculum vitae details my academic milestones at IIIT Naya Raipur, software engineering internships, research in machine learning, and competitive programming achievements.
                </p>
              </div>



              {/* Action Buttons */}
              <div className="pt-6 flex flex-col sm:flex-row gap-4 w-full max-w-md justify-center">
                <button
                  onClick={handleDownload}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-neon-blue text-bg-dark font-mono text-xs font-bold tracking-wider hover:bg-neon-blue/80 shadow-neon-blue transition-all duration-300 uppercase"
                >
                  <Download size={14} />
                  <span>Download PDF</span>
                </button>
                <a
                  href="/Anushka_Ekka_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-bg-navy/80 text-foreground font-mono text-xs font-bold tracking-wider border border-border-color hover:border-neon-purple/40 hover:shadow-neon-purple transition-all duration-300 uppercase"
                >
                  <Eye size={14} className="text-neon-purple" />
                  <span>View Full CV</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
