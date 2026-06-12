"use client";

import React, { useState } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle2, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "../data/portfolioData";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("loading");
    
    // Simulate submission delay
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Clear success message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    }, 1800);
  };

  return (
    <section id="contact" className="py-20 border-t border-border-color/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-xs font-mono text-neon-green uppercase tracking-widest mb-2 flex items-center gap-1.5 font-bold">
            <Sparkles size={12} className="animate-pulse" />
            11 // SOCKETS_COMMUNICATION
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="h-[2px] w-12 bg-gradient-to-r from-neon-green to-neon-blue mt-4 rounded" />
        </div>

        {/* Contact Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Direct Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex"
          >
            <div className="glow-card glass-panel p-6 sm:p-8 rounded-xl flex flex-col justify-between w-full relative overflow-hidden">
              <div className="space-y-6">
                <h3 className="text-sm font-mono font-bold text-foreground flex items-center gap-2">
                  <span className="text-neon-blue">&gt;</span> contact_vectors.yaml
                </h3>

                <p className="text-foreground-muted text-xs sm:text-sm leading-relaxed font-sans">
                  Whether you have an internship position, a research collaboration proposal, or simply want to chat about algorithms and reinforcement learning—feel free to drop a message!
                </p>

                {/* Info List */}
                <div className="space-y-4 font-mono text-xs sm:text-sm text-foreground-muted">
                  <div className="flex items-center gap-3 bg-bg-navy/55 border border-white/5 p-3 rounded-lg">
                    <Mail size={16} className="text-neon-blue shrink-0" />
                    <a href={`mailto:${personalInfo.email}`} className="hover:text-foreground hover:underline transition-colors truncate">
                      {personalInfo.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3 bg-bg-navy/55 border border-white/5 p-3 rounded-lg">
                    <Phone size={16} className="text-neon-green shrink-0" />
                    <a href={`tel:${personalInfo.phone}`} className="hover:text-foreground hover:underline transition-colors truncate">
                      {personalInfo.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3 bg-bg-navy/55 border border-white/5 p-3 rounded-lg">
                    <MapPin size={16} className="text-neon-purple shrink-0" />
                    <span>{personalInfo.location}</span>
                  </div>
                </div>
              </div>

              {/* Social Icon Grid */}
              <div className="mt-12 pt-6 border-t border-border-color/30 flex items-center space-x-4">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-bg-navy/70 border border-border-color hover:border-neon-blue/40 text-foreground-muted hover:text-foreground hover:shadow-neon-blue transition-all duration-300"
                  aria-label="GitHub"
                >
                  <GithubIcon size={20} />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-bg-navy/70 border border-border-color hover:border-neon-purple/40 text-foreground-muted hover:text-foreground hover:shadow-neon-purple transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex"
          >
            <div className="w-full glass-panel p-6 sm:p-8 rounded-xl flex flex-col justify-between">
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Name & Email Group */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="block text-[10px] font-mono uppercase text-foreground-muted tracking-wider">
                      Name *
                    </label>
                    <input
                      required
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={status === "loading"}
                      className="w-full bg-bg-navy/70 border border-border-color focus:border-neon-blue/50 focus:ring-0 rounded-lg px-4 py-2.5 font-mono text-xs text-foreground placeholder-white/20 transition-all duration-300"
                      placeholder="e.g. John Doe"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-[10px] font-mono uppercase text-foreground-muted tracking-wider">
                      Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={status === "loading"}
                      className="w-full bg-bg-navy/70 border border-border-color focus:border-neon-blue/50 focus:ring-0 rounded-lg px-4 py-2.5 font-mono text-xs text-foreground placeholder-white/20 transition-all duration-300"
                      placeholder="e.g. johndoe@gmail.com"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label htmlFor="subject" className="block text-[10px] font-mono uppercase text-foreground-muted tracking-wider">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    disabled={status === "loading"}
                    className="w-full bg-bg-navy/70 border border-border-color focus:border-neon-purple/50 focus:ring-0 rounded-lg px-4 py-2.5 font-mono text-xs text-foreground placeholder-white/20 transition-all duration-300"
                    placeholder="e.g. Research Collaboration Proposal"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="block text-[10px] font-mono uppercase text-foreground-muted tracking-wider">
                    Message Payload *
                  </label>
                  <textarea
                    required
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    disabled={status === "loading"}
                    className="w-full bg-bg-navy/70 border border-border-color focus:border-neon-purple/50 focus:ring-0 rounded-lg px-4 py-2.5 font-mono text-xs text-foreground placeholder-white/20 transition-all duration-300 resize-none"
                    placeholder="Write details of your message here..."
                  />
                </div>

                {/* Submitting Actions */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-neon-blue text-bg-dark font-mono text-xs font-bold tracking-wider hover:bg-neon-blue/80 shadow-neon-blue disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 uppercase"
                  >
                    {status === "loading" ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-bg-dark" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>Transmitting...</span>
                      </>
                    ) : (
                      <>
                        <Send size={14} />
                        <span>Transmit Message</span>
                      </>
                    )}
                  </button>
                </div>
              </form>

              {/* Status Alert Panels */}
              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="mt-4 p-3 rounded-lg bg-neon-green/10 border border-neon-green/20 flex items-center gap-3 text-neon-green text-xs font-mono"
                  >
                    <CheckCircle2 size={16} className="shrink-0" />
                    <span>Payload received successfully. Connection established.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
