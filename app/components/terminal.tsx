"use client";

import { useEffect, useRef, useState } from "react";

interface TerminalRow {
  prompt: string;
  command: string;
  output: string;
}

export function Terminal() {
  const [history, setHistory] = useState<TerminalRow[]>([
    {
      prompt: "",
      command: "",
      output: "Welcome to Vishnu's Portfolio CLI [Version 1.0.0]\nType 'help' to list available commands.",
    },
  ]);
  const [input, setInput] = useState("");
  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [history]);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    let output = "";

    switch (trimmed) {
      case "help":
        output = `Available Commands:
  about    - Brief biography and summary of Vishnu
  skills   - List technical toolkit and key languages
  projects - Summary of production and key projects
  contact  - View contact details (email, phone, socials)
  clear    - Clear the terminal screen
  secret   - Try your luck with a secret code`;
        break;
      case "about":
        output = `Vishnu Vardhan Reddy Vonteddu
----------------------------
Full Stack Developer | B.Tech CSE (2026, CGPA 7.5)
8 Months of production experience building web and mobile applications at Siris Apps.
Specialist in turning complex workflows into fast, responsive, and secure user experiences.`;
        break;
      case "skills":
        output = `Technical Toolkit:
  Frontend/Mobile : Flutter, Dart, React, Next.js, TypeScript, Tailwind CSS
  Backend/Services: Firebase Auth/Firestore/Storage, Supabase, Prisma ORM, REST APIs
  Database        : PostgreSQL, MySQL, SQL Queries & Relational schemas
  Security/Auth   : Role-Based Access Control (RBAC), Session tokens, SHA-256 Hashing`;
        break;
      case "projects":
        output = `Selected Projects:
  1. Campout (Flutter, Firebase, Supabase)
     - Outdoor booking app with conflict-safe slot locking & Maps geolocation.
  2. GateFlow (Next.js, Supabase, Prisma)
     - Multi-tenant visitor pass management with role-based UI access.
  3. TechTrack (Flutter, Dart, Firebase)
     - Gamified learning path platform with XP levels & real-time sync.
  4. College Management (HTML, JS, MySQL, Python)
     - Normalized database schema CRUD panel with Power BI analytics.`;
        break;
      case "contact":
        output = `Get in Touch:
  Email   : vishnuvonteddu@gmail.com
  Phone   : +91 91824 67899
  GitHub  : github.com/vishnuvardhanreddyvontedd
  LinkedIn: linkedin.com/in/v-vishnu-vardhan-reddy
  Location: Gurazala, Andhra Pradesh, India`;
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      case "secret":
        output = "🎉 Congratulations! You discovered the secret egg. You are a true code inspector. Vishnu is looking for full-time opportunities starting July 2026. Hire him! 🚀";
        break;
      case "":
        output = "";
        break;
      default:
        output = `command not found: '${trimmed}'. Type 'help' to see all valid commands.`;
    }

    setHistory((prev) => [
      ...prev,
      {
        prompt: "guest@vishnu:~$",
        command: cmd,
        output,
      },
    ]);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(input);
    }
  };

  return (
    <div className="terminal-window" onClick={focusInput} aria-label="Terminal Console">
      <div className="terminal-header">
        <div className="terminal-dots">
          <span className="terminal-dot dot-red" />
          <span className="terminal-dot dot-yellow" />
          <span className="terminal-dot dot-green" />
        </div>
        <div className="terminal-title">guest@vishnu: ~</div>
        <div style={{ width: "42px" }} />
      </div>

      <div className="terminal-body" ref={bodyRef}>
        {history.map((row, idx) => (
          <div className="terminal-row" key={idx}>
            {row.prompt && (
              <div className="terminal-input-row">
                <span className="terminal-prompt">
                  guest<span>@vishnu:~$</span>
                </span>
                <span style={{ color: "#ffffff" }}>{row.command}</span>
              </div>
            )}
            <div className="terminal-output">{row.output}</div>
          </div>
        ))}

        <div className="terminal-input-row">
          <span className="terminal-prompt">
            guest<span>@vishnu:~$</span>
          </span>
          <input
            ref={inputRef}
            type="text"
            className="terminal-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck={false}
          />
          <div className="terminal-caret" />
        </div>
      </div>
    </div>
  );
}
