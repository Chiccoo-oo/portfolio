"use client";

import React, { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  
  useEffect(() => {
    // Disable custom cursor on mobile/touch screens
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isHovering = false;
    let isHidden = true;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      if (isHidden) {
        dot.style.opacity = "1";
        ring.style.opacity = "1";
        isHidden = false;
      }
    };

    const onMouseLeave = () => {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
      isHidden = true;
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const isInteractive = 
        target.tagName === "A" || 
        target.tagName === "BUTTON" || 
        target.tagName === "INPUT" || 
        target.tagName === "TEXTAREA" || 
        target.closest("a") || 
        target.closest("button") || 
        target.closest("[role='button']") ||
        target.classList.contains("clickable");

      if (isInteractive) {
        isHovering = true;
      } else {
        isHovering = false;
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("mouseover", onMouseOver);

    // Animate trailing ring
    let animationFrameId: number;
    const animate = () => {
      // Direct DOM style updates for performance (60fps without React re-render lag)
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;

      // Lerp (Linear Interpolation) for smooth trailing effect
      const ease = 0.15;
      ringX += (mouseX - ringX) * ease;
      ringY += (mouseY - ringY) * ease;
      ring.style.transform = `translate3d(${ringX - 18}px, ${ringY - 18}px, 0)`;

      if (isHovering) {
        ring.style.width = "36px";
        ring.style.height = "36px";
        ring.style.borderColor = "var(--neon-purple)";
        ring.style.backgroundColor = "rgba(139, 92, 246, 0.1)";
        dot.style.backgroundColor = "var(--neon-purple)";
      } else {
        ring.style.width = "28px";
        ring.style.height = "28px";
        ring.style.borderColor = "var(--neon-blue)";
        ring.style.backgroundColor = "transparent";
        dot.style.backgroundColor = "var(--neon-blue)";
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("mouseover", onMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Inner Dot */}
      <div
        ref={dotRef}
        className="custom-cursor fixed top-0 left-0 w-2 h-2 bg-neon-blue rounded-full pointer-events-none z-50 transition-opacity duration-300 ease-in-out -translate-x-1/2 -translate-y-1/2 opacity-0"
      />
      {/* Outer Ring */}
      <div
        ref={ringRef}
        className="custom-cursor fixed top-0 left-0 w-7 h-7 border-2 border-neon-blue rounded-full pointer-events-none z-50 transition-all duration-150 ease-out opacity-0"
      />
    </>
  );
}
