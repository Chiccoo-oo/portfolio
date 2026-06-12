"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp, Heart } from "lucide-react";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [visitorCount, setVisitorCount] = useState("0004812");

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    // Randomize visitor count slightly to simulate active count telemetry
    setTimeout(() => {
      const randomCount = Math.floor(4800 + Math.random() * 50).toString().padStart(7, "0");
      setVisitorCount(randomCount);
    }, 0);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Profiles", href: "#coding-profiles" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
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

  return (
    <footer className="bg-bg-dark border-t border-border-color/30 py-12 relative font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Branding & Quote */}
        <div className="flex flex-col items-center md:items-start space-y-2 text-center md:text-left">
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, "#home")}
            className="text-base font-bold tracking-wider text-gradient"
          >
            &lt;Anushka.Ekka/&gt;
          </a>
          <p className="text-[10px] text-foreground-muted italic font-sans max-w-xs">
            &quot;Turning ideas into intelligent systems.&quot;
          </p>
        </div>

        {/* Quick Links Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-[10px]">
          {quickLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-foreground-muted hover:text-neon-blue transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Telemetry Visitor Count & Copyright */}
        <div className="flex flex-col items-center md:items-end space-y-2 text-center md:text-right">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded bg-bg-navy/80 border border-white/5 text-[9px] text-foreground-muted select-none">
            <span className="h-1.5 w-1.5 rounded-full bg-neon-green animate-pulse" />
            <span>VISITORS_COUNT:</span>
            <span className="text-neon-blue font-bold tracking-widest">{visitorCount}</span>
          </div>
          
          <div className="text-[10px] text-foreground-muted flex items-center gap-1 font-sans">
            <span>© {new Date().getFullYear()} Anushka Ekka. Made with</span>
            <Heart size={10} className="text-rose-500 fill-current animate-pulse" />
            <span>in India.</span>
          </div>
        </div>

      </div>

      {/* Floating Back to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-2.5 rounded-lg bg-neon-blue text-bg-dark border border-neon-blue hover:bg-neon-blue/80 shadow-neon-blue transition-all duration-300"
          aria-label="Back to Top"
        >
          <ArrowUp size={16} className="stroke-[2.5]" />
        </button>
      )}
    </footer>
  );
}
