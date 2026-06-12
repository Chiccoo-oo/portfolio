"use client";

import React, { useState, useRef, useEffect } from "react";
import { Terminal as TermIcon, Play, RefreshCw } from "lucide-react";

interface TerminalLine {
  text: string;
  type: "input" | "output" | "error" | "welcome" | "success";
}

export default function Terminal() {
  const [history, setHistory] = useState<TerminalLine[]>([
    { text: "Welcome to Anushka's Developer Terminal [v1.0.0]", type: "welcome" },
    { text: "System status: OPERATIONAL. Neural link: ACTIVE.", type: "success" },
    { text: "Type 'help' to list available commands.", type: "welcome" },
  ]);
  const [inputValue, setInputValue] = useState("");
  const terminalEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Auto scroll to bottom
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const command = inputValue.trim();
    if (!command) return;

    const newHistory = [...history, { text: `guest@anushka-ekka:~$ ${command}`, type: "input" as const }];

    const lowerCmd = command.toLowerCase();
    let reply: string[] = [];
    let type: "output" | "error" | "success" = "output";

    switch (lowerCmd) {
      case "help":
        reply = [
          "Available Commands:",
          "  whoami       - Display personal identification payload",
          "  skills       - Print core programming & AI tech stack",
          "  current_goal - Output active lifecycle target objective",
          "  status       - Check runtime deployment status",
          "  projects     - Query key software systems built",
          "  clear        - Flush terminal log history buffer",
          "  theme        - Toggle styling colors (Dark / Light)"
        ];
        break;
      case "whoami":
        reply = [
          "Name: Anushka Ekka",
          "Degree: Bachelor of Technology (B.Tech)",
          "Branch: Data Science & Artificial Intelligence",
          "University: IIT Guwahati",
          "Aspiration: ML Engineer / AI Researcher / Systems Engineer"
        ];
        type = "success";
        break;
      case "skills":
        reply = [
          "Languages : Python | C++ | JavaScript | TypeScript | Java | SQL",
          "AI / ML   : Deep Learning | PyTorch | TensorFlow | Scikit-Learn | Pandas | GNNs",
          "Web Dev   : React | Next.js | Node.js | Express | Tailwind CSS",
          "DevOps    : Docker | Linux | Git | GitHub Actions | PostgreSQL"
        ];
        type = "success";
        break;
      case "current_goal":
        reply = [
          "Target Objective: Building scalable AI/ML systems and engineering low-latency software solutions.",
          "Status: Active study mode, solving algorithmic problems & building intelligent software systems."
        ];
        break;
      case "status":
        reply = [
          "Status: Building the future...",
          "System Load: Nominal",
          "Coffee level: 85%",
          "Brainwaves: 10Hz (Flow state)"
        ];
        break;
      case "projects":
        reply = [
          "Primary Projects Portfolio:",
          "  - AuraEngine: Collaborative browser IDE (Next.js, Node, WebSockets, Docker)",
          "  - NeuroSight: Spatial GNN Traffic Predictor (PyTorch Geometric, FastAPI)",
          "  - StockWave: Real-time NSE Stock Ensembling Pipeline (Scikit-Learn, Postgres)"
        ];
        break;
      case "clear":
        setHistory([]);
        setInputValue("");
        return;
      case "theme":
        const themeBtn = document.querySelector('button[aria-label="Toggle Theme"]') as HTMLButtonElement;
        if (themeBtn) {
          themeBtn.click();
          reply = ["Theme toggled successfully."];
        } else {
          reply = ["Error: Theme controller not accessible."];
          type = "error";
        }
        break;
      default:
        reply = [`Command not found: '${command}'. Type 'help' for list of instructions.`];
        type = "error";
    }

    setHistory([...newHistory, ...reply.map((line) => ({ text: line, type }))]);
    setInputValue("");
  };

  return (
    <div
      onClick={focusInput}
      className="w-full rounded-xl border border-white/10 shadow-2xl overflow-hidden glass-panel bg-bg-navy/80 hover:border-neon-blue/20 transition-all duration-300 font-mono text-xs cursor-text"
    >
      {/* Window Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-bg-dark/65 border-b border-border-color">
        {/* Buttons */}
        <div className="flex items-center space-x-2">
          <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block shadow-sm" />
          <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block shadow-sm" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block shadow-sm" />
        </div>
        {/* Title */}
        <span className="text-foreground-muted select-none text-[10px] uppercase tracking-widest flex items-center gap-1.5 font-bold">
          <TermIcon size={12} className="text-neon-blue" />
          anushka-ekka@compiler:~
        </span>
        {/* Actions */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setHistory([
              { text: "Welcome to Anushka's Developer Terminal [v1.0.0]", type: "welcome" },
              { text: "System status: OPERATIONAL. Neural link: ACTIVE.", type: "success" },
              { text: "Type 'help' to list available commands.", type: "welcome" },
            ]);
          }}
          className="text-foreground-muted hover:text-neon-blue p-0.5 rounded transition-colors"
          title="Reset Terminal"
        >
          <RefreshCw size={12} />
        </button>
      </div>

      {/* Code Shell Output Area */}
      <div className="h-64 overflow-y-auto p-4 flex flex-col space-y-1.5 bg-bg-dark/30 custom-scrollbar select-text">
        {history.map((line, idx) => {
          let textClass = "text-foreground-muted";
          if (line.type === "input") textClass = "text-neon-blue font-semibold";
          else if (line.type === "error") textClass = "text-rose-400 font-semibold";
          else if (line.type === "welcome") textClass = "text-neon-purple/90";
          else if (line.type === "success") textClass = "text-neon-green font-semibold";

          return (
            <div key={idx} className={`whitespace-pre-wrap leading-relaxed ${textClass}`}>
              {line.text}
            </div>
          );
        })}
        <div ref={terminalEndRef} />
      </div>

      {/* Prompt Form */}
      <form onSubmit={handleCommand} className="flex items-center px-4 py-2 border-t border-border-color bg-bg-dark/15">
        <span className="text-neon-green font-semibold shrink-0 select-none mr-2">
          guest@anushka-ekka:~$
        </span>
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="flex-1 bg-transparent border-0 focus:outline-hidden focus:ring-0 text-foreground font-mono font-medium p-0 leading-normal"
          placeholder="Enter command..."
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
        />
        <button
          type="submit"
          className="text-foreground-muted hover:text-neon-blue transition-colors shrink-0 p-1"
          aria-label="Run command"
        >
          <Play size={10} className="fill-current" />
        </button>
      </form>
    </div>
  );
}
