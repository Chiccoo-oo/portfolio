"use client";

import React, { useState } from "react";
import { ExternalLink, Code2, Sparkles, AlertCircle, Recycle, Shield, Languages } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData, Project } from "../data/portfolioData";
import { GithubIcon } from "./BrandIcons";

const projectIconMap = {
  Recycle: <Recycle size={16} className="text-neon-green shrink-0" />,
  Shield: <Shield size={16} className="text-neon-blue shrink-0" />,
  Languages: <Languages size={16} className="text-neon-purple shrink-0" />,
  Code2: <Code2 size={16} className="text-neon-purple shrink-0" />
};

type CategoryFilter = "All" | "AI/ML" | "Web Development" | "Data Science" | "Research" | "Open Source";

const categories: CategoryFilter[] = ["All", "AI/ML", "Web Development", "Data Science", "Research", "Open Source"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("All");

  const filteredProjects = activeFilter === "All"
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  const statusBadgeStyles = (status: Project["status"]) => {
    switch (status) {
      case "Completed":
        return "bg-neon-green/10 text-neon-green border-neon-green/20";
      case "Active":
        return "bg-neon-blue/10 text-neon-blue border-neon-blue/20";
      case "In Progress":
        return "bg-neon-purple/10 text-neon-purple border-neon-purple/20";
      default:
        return "bg-white/10 text-foreground border-white/20";
    }
  };

  return (
    <section id="projects" className="py-20 border-t border-border-color/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="flex flex-col items-center mb-12 text-center">
          <span className="text-xs font-mono text-neon-blue uppercase tracking-widest mb-2 flex items-center gap-1.5 font-bold">
            <Sparkles size={12} className="animate-pulse" />
            04 // ENGINE_PORTFOLIO
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="h-[2px] w-12 bg-gradient-to-r from-neon-blue to-neon-purple mt-4 rounded" />
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 font-mono text-xs">
          {categories.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-lg transition-all duration-300 border ${
                activeFilter === filter
                  ? "bg-neon-blue text-bg-dark border-neon-blue font-bold shadow-neon-blue/20"
                  : "bg-bg-navy/40 border-border-color text-foreground-muted hover:text-foreground hover:border-neon-blue/30"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid with Entry Animations */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.name}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -6 }}
                className="glow-card glass-panel flex flex-col justify-between overflow-hidden"
              >
                {/* Visual Image / Top Banner */}
                <div>
                  <div className="relative h-44 sm:h-48 w-full overflow-hidden border-b border-border-color bg-bg-dark/80 group">
                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-transparent opacity-80 z-10" />
                    
                    {/* Dynamic Image */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Tech Category Float */}
                    <span className="absolute top-4 left-4 z-20 px-2 py-0.5 rounded bg-bg-dark/80 backdrop-blur-sm border border-white/10 text-[9px] font-mono font-bold text-neon-blue uppercase tracking-wider">
                      {project.category}
                    </span>

                    {/* Status Badge Float */}
                    <span className={`absolute top-4 right-4 z-20 px-2 py-0.5 rounded border text-[9px] font-mono font-bold uppercase tracking-wider ${statusBadgeStyles(project.status)}`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <h3 className="text-base sm:text-lg font-mono font-bold tracking-tight text-foreground flex items-center gap-2">
                      {projectIconMap[project.iconName] || <Code2 size={16} className="text-neon-purple shrink-0" />}
                      {project.name}
                    </h3>
                    
                    <p className="text-foreground-muted text-xs sm:text-sm mt-3 leading-relaxed font-sans">
                      {project.description}
                    </p>

                    {/* Bullet features list */}
                    <div className="mt-4 space-y-1.5 font-mono text-[10px] text-foreground-muted">
                      {project.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2">
                          <AlertCircle size={10} className="text-neon-blue mt-0.5 shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Tech stacks and footer links */}
                <div className="p-6 pt-0">
                  <div className="flex flex-wrap gap-1.5 mb-5 font-mono text-[9px]">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-bg-navy/70 border border-white/5 text-foreground-muted uppercase"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 border-t border-border-color/30 pt-4 font-mono text-[11px]">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded bg-bg-dark text-foreground hover:text-neon-blue border border-border-color hover:border-neon-blue/30 transition-all duration-200"
                    >
                      <GithubIcon size={12} />
                      <span>Code Repository</span>
                    </a>
                    {project.demoLink !== "#" && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded bg-neon-purple/10 text-neon-purple hover:text-foreground border border-neon-purple/20 hover:bg-neon-purple hover:border-neon-purple transition-all duration-200"
                      >
                        <ExternalLink size={12} />
                        <span>Live Preview</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
