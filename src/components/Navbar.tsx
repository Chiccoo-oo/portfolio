"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Terminal as TerminalIcon } from "lucide-react";

interface NavbarProps {
  onOpenPalette: () => void;
}

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Profiles", href: "#coding-profiles" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Achievements", href: "#achievements" },
  { name: "Leadership", href: "#leadership" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" }
];

export default function Navbar({ onOpenPalette }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Read theme on mount
    setTimeout(() => {
      const savedTheme = localStorage.getItem("theme") as "dark" | "light";
      if (savedTheme) {
        setTheme(savedTheme);
        document.documentElement.setAttribute("data-theme", savedTheme);
      } else {
        setTheme("dark");
        document.documentElement.setAttribute("data-theme", "dark");
      }
    }, 0);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    // Setup IntersectionObserver for active section highlight
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px", // High-precision threshold near viewport center
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    navLinks.forEach((link) => {
      const el = document.querySelector(link.href);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offset = 80; // Offset navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const targetRect = target.getBoundingClientRect().top;
      const targetPosition = targetRect - bodyRect - offset;
      
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-bg-dark/85 backdrop-blur-md border-b border-border-color py-3 shadow-lg"
          : "bg-transparent py-5 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, "#home")}
          className="flex items-center space-x-2 text-xl font-bold tracking-wider text-gradient font-mono"
        >
          <span className="text-neon-blue font-bold">&lt;</span>
          <span>Anushka</span>
          <span className="text-neon-purple">.Ekka</span>
          <span className="text-neon-blue">/&gt;</span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`px-3 py-1.5 rounded-md text-xs font-mono font-medium tracking-wide transition-all duration-200 ${
                  isActive
                    ? "text-neon-blue bg-neon-blue/10 border border-neon-blue/20"
                    : "text-foreground-muted hover:text-foreground hover:bg-white/5 border border-transparent"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Controls (Theme, Palette, Hamburger) */}
        <div className="flex items-center space-x-3">
          {/* Palette Shortcut Button */}
          <button
            onClick={onOpenPalette}
            className="hidden sm:flex items-center space-x-2 px-2.5 py-1.5 rounded bg-bg-navy/70 border border-border-color hover:border-neon-blue/30 text-xs font-mono text-foreground-muted hover:text-foreground transition-all duration-200"
            title="Open Command Palette"
          >
            <TerminalIcon size={14} className="text-neon-blue animate-pulse" />
            <span>Cmd+K</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-bg-navy/50 border border-border-color hover:border-neon-purple/40 text-foreground-muted hover:text-foreground hover:shadow-neon-purple transition-all duration-200"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun size={16} className="text-amber-400" /> : <Moon size={16} className="text-neon-purple" />}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-lg bg-bg-navy/50 border border-border-color hover:border-neon-blue/40 text-foreground-muted hover:text-foreground transition-all duration-200"
            aria-label="Toggle Mobile Menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      {menuOpen && (
        <div className="lg:hidden animate-fade-in absolute top-full left-0 right-0 bg-bg-dark/95 border-b border-border-color backdrop-blur-xl shadow-2xl">
          <nav className="flex flex-col space-y-1 px-4 pt-3 pb-6 max-h-[80vh] overflow-y-auto">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-4 py-2.5 rounded-md text-sm font-mono transition-all duration-200 ${
                    isActive
                      ? "text-neon-blue bg-neon-blue/10 border border-neon-blue/20"
                      : "text-foreground-muted hover:text-foreground hover:bg-white/5 border border-transparent"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <button
              onClick={() => {
                setMenuOpen(false);
                onOpenPalette();
              }}
              className="mt-3 flex items-center justify-between px-4 py-3 rounded-md bg-bg-navy border border-border-color text-sm font-mono text-foreground-muted hover:text-foreground transition-all duration-200"
            >
              <span className="flex items-center gap-2">
                <TerminalIcon size={16} className="text-neon-blue" />
                Command Palette
              </span>
              <span className="text-xs bg-bg-dark px-1.5 py-0.5 rounded border border-white/5">Ctrl+K</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
