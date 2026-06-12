"use client";

import React, { useState, useEffect, useRef } from "react";
import { Search, Compass, ShieldAlert, Download, SunMoon, FileText, ArrowRight, CornerDownLeft } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandItem {
  id: string;
  name: string;
  category: "Navigation" | "Action";
  icon: React.ReactNode;
  action: () => void;
}

export default function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Focus input on mount/open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
        setSelectedIndex(0);
      }, 80);
    }
  }, [isOpen]);

  const handleNavigate = (hash: string) => {
    onClose();
    const target = document.querySelector(hash);
    if (target) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const targetRect = target.getBoundingClientRect().top;
      const targetPosition = targetRect - bodyRect - offset;
      
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleDownloadResume = () => {
    onClose();
    const link = document.createElement("a");
    link.href = "/Anushka_Ekka_Resume.pdf";
    link.download = "Anushka_Ekka_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleToggleTheme = () => {
    onClose();
    const themeBtn = document.querySelector('button[aria-label="Toggle Theme"]') as HTMLButtonElement;
    if (themeBtn) themeBtn.click();
  };

  const commands: CommandItem[] = [
    { id: "home", name: "Go to Home Section", category: "Navigation", icon: <Compass size={16} className="text-neon-blue" />, action: () => handleNavigate("#home") },
    { id: "about", name: "Go to About Me", category: "Navigation", icon: <Compass size={16} className="text-neon-blue" />, action: () => handleNavigate("#about") },
    { id: "skills", name: "Go to Skills & Technologies", category: "Navigation", icon: <Compass size={16} className="text-neon-blue" />, action: () => handleNavigate("#skills") },
    { id: "coding-profiles", name: "Go to Coding Profiles (LeetCode, Codeforces, ...)", category: "Navigation", icon: <Compass size={16} className="text-neon-blue" />, action: () => handleNavigate("#coding-profiles") },
    { id: "projects", name: "Go to Projects Portfolio", category: "Navigation", icon: <Compass size={16} className="text-neon-blue" />, action: () => handleNavigate("#projects") },
    { id: "experience", name: "Go to Work Experience", category: "Navigation", icon: <Compass size={16} className="text-neon-blue" />, action: () => handleNavigate("#experience") },
    { id: "achievements", name: "Go to Achievements & Coding Contests", category: "Navigation", icon: <Compass size={16} className="text-neon-blue" />, action: () => handleNavigate("#achievements") },
    { id: "leadership", name: "Go to Leadership & Extracurriculars", category: "Navigation", icon: <Compass size={16} className="text-neon-blue" />, action: () => handleNavigate("#leadership") },
    { id: "resume", name: "Go to Resume Section", category: "Navigation", icon: <FileText size={16} className="text-neon-purple" />, action: () => handleNavigate("#resume") },
    { id: "contact", name: "Go to Contact Details", category: "Navigation", icon: <Compass size={16} className="text-neon-blue" />, action: () => handleNavigate("#contact") },
    { id: "action-download", name: "Download Resume PDF", category: "Action", icon: <Download size={16} className="text-neon-green" />, action: handleDownloadResume },
    { id: "action-theme", name: "Toggle Theme (Dark / Light)", category: "Action", icon: <SunMoon size={16} className="text-amber-400" />, action: handleToggleTheme }
  ];

  const filteredCommands = commands.filter((cmd) =>
    cmd.name.toLowerCase().includes(query.toLowerCase())
  );

  // Key event listeners inside palette
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filteredCommands.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length);
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action();
        }
      } else if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, selectedIndex, filteredCommands, onClose]);

  // Global Ctrl + K listener
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open triggered
          const toggleBtn = document.querySelector('button[aria-label="Toggle Mobile Menu"]') as HTMLButtonElement;
          // Hide mobile menu first if open
          if (toggleBtn && window.innerWidth < 1024) {
            // Let's assume we can trigger close via navbar state implicitly
          }
          // Open palette
          const trigger = document.querySelector('button[title="Open Command Palette"]') as HTMLButtonElement;
          if (trigger) trigger.click();
        }
      }
    };

    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => window.removeEventListener("keydown", handleGlobalKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 sm:px-6">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative w-full max-w-lg glass-panel overflow-hidden rounded-xl border border-white/10 shadow-2xl bg-bg-navy/95"
          >
            {/* Search Input Box */}
            <div className="flex items-center px-4 py-3.5 border-b border-border-color">
              <Search size={18} className="text-neon-blue mr-3 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Search commands, sections, or files..."
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                className="w-full bg-transparent border-0 text-sm focus:outline-hidden focus:ring-0 text-foreground placeholder-foreground-muted"
              />
              <span className="text-[10px] font-mono bg-bg-dark border border-white/10 px-2 py-0.5 rounded text-foreground-muted shrink-0 shadow-sm">
                ESC to close
              </span>
            </div>

            {/* Commands List */}
            <div className="max-h-72 overflow-y-auto p-2">
              {filteredCommands.length > 0 ? (
                Object.entries(
                  filteredCommands.reduce((acc, cmd) => {
                    if (!acc[cmd.category]) acc[cmd.category] = [];
                    acc[cmd.category].push(cmd);
                    return acc;
                  }, {} as Record<string, CommandItem[]>)
                ).map(([category, items]) => (
                  <div key={category}>
                    {/* Category Label */}
                    <div className="px-3 py-1.5 text-[10px] font-mono font-semibold text-neon-blue/60 uppercase tracking-wider">
                      {category}
                    </div>

                    {/* Category Items */}
                    <div className="space-y-0.5">
                      {items.map((cmd) => {
                        // Resolve dynamic indices based on global filter positions
                        const globalIndex = filteredCommands.findIndex((c) => c.id === cmd.id);
                        const isSelected = globalIndex === selectedIndex;

                        return (
                          <button
                            key={cmd.id}
                            onClick={cmd.action}
                            onMouseEnter={() => setSelectedIndex(globalIndex)}
                            className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-mono text-left transition-all duration-150 ${
                              isSelected
                                ? "bg-neon-blue/10 border border-neon-blue/20 text-foreground shadow-inner shadow-neon-blue/5"
                                : "border border-transparent text-foreground-muted hover:text-foreground"
                            }`}
                          >
                            <div className="flex items-center space-x-3">
                              {cmd.icon}
                              <span>{cmd.name}</span>
                            </div>
                            {isSelected && (
                              <div className="flex items-center space-x-1 text-[10px] text-neon-blue/80">
                                <span>Go</span>
                                <CornerDownLeft size={10} className="stroke-[2.5]" />
                              </div>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <ShieldAlert size={24} className="text-neon-purple animate-bounce mb-2" />
                  <p className="text-xs text-foreground-muted font-mono">
                    No results found for &quot;<span className="text-neon-purple">{query}</span>&quot;
                  </p>
                </div>
              )}
            </div>

            {/* Command Palette Footer */}
            <div className="flex items-center justify-between px-4 py-2 border-t border-border-color bg-bg-dark/40 text-[10px] font-mono text-foreground-muted">
              <div className="flex items-center space-x-3">
                <span className="flex items-center gap-1">
                  <ArrowRight size={10} className="rotate-90" /> ↑↓ to select
                </span>
                <span className="flex items-center gap-1">
                  <CornerDownLeft size={10} /> Enter to execute
                </span>
              </div>
              <div>
                Press <kbd className="bg-bg-dark border border-white/10 px-1 py-0.5 rounded">Ctrl+K</kbd> to toggle anywhere
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
