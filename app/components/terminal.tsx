"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

interface TerminalRow {
  prompt: string;
  command: string;
  type: "welcome" | "help" | "about" | "skills" | "projects" | "contact" | "error" | "secret" | "text";
  output?: string;
}

export function Terminal() {
  const [history, setHistory] = useState<TerminalRow[]>([
    {
      prompt: "",
      command: "",
      type: "welcome",
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
    let type: TerminalRow["type"] = "text";
    let output = "";

    switch (trimmed) {
      case "help":
        type = "help";
        break;
      case "about":
        type = "about";
        break;
      case "skills":
        type = "skills";
        break;
      case "projects":
        type = "projects";
        break;
      case "contact":
        type = "contact";
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      case "secret":
        type = "secret";
        break;
      case "":
        return;
      default:
        type = "error";
        output = `command not found: '${trimmed}'.`;
    }

    setHistory((prev) => [
      ...prev,
      {
        prompt: "guest@vishnu:~$",
        command: cmd,
        type,
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

  const renderRowOutput = (row: TerminalRow) => {
    switch (row.type) {
      case "welcome":
        return (
          <div style={{ color: "#a8ffb2", lineHeight: "1.6" }}>
            <div style={{ fontWeight: "bold", fontSize: "15px", marginBottom: "4px", color: "#4ade80" }}>
              Welcome to Vishnu&apos;s Portfolio CLI [Version 1.1.0]
            </div>
            <p style={{ color: "#e4e4e7", margin: "0 0 8px 0" }}>
              An interactive terminal interface to query credentials and projects.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", alignItems: "center" }}>
              <span style={{ color: "#72727a", fontSize: "12px" }}>Type a command or click a quick-nav link below to start.</span>
            </div>
          </div>
        );
      case "help":
        return (
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "12px", background: "#131317", borderRadius: "8px", border: "1px solid #232328" }}>
            <div style={{ color: "#4ade80", fontWeight: "bold", borderBottom: "1px solid #232328", paddingBottom: "6px" }}>
              NAVIGATION MENU & COMMANDS
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))", gap: "8px", marginTop: "4px" }}>
              {[
                { name: "about", desc: "Biography & bio" },
                { name: "skills", desc: "Technical skills" },
                { name: "projects", desc: "Selected works" },
                { name: "contact", desc: "Contact links" },
                { name: "clear", desc: "Clear screen" },
                { name: "secret", desc: "Easter egg" },
              ].map((cmd) => (
                <button
                  key={cmd.name}
                  onClick={() => handleCommand(cmd.name)}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    padding: "8px",
                    background: "#1c1c22",
                    border: "1px solid #2d2d34",
                    borderRadius: "6px",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                  className="terminal-nav-card"
                >
                  <span style={{ color: "#4ade80", fontWeight: "bold", fontSize: "13px", fontFamily: "var(--font-mono)" }}>
                    {cmd.name}
                  </span>
                  <span style={{ color: "#72727a", fontSize: "10px", marginTop: "2px" }}>
                    {cmd.desc}
                  </span>
                </button>
              ))}
            </div>
          </div>
        );
      case "about":
        return (
          <div style={{ padding: "12px", background: "#131317", borderRadius: "8px", border: "1px solid #232328" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", borderBottom: "1px solid #232328", paddingBottom: "8px", marginBottom: "8px" }}>
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 8px #4ade80" }} />
              <strong style={{ color: "#ffffff", fontSize: "14px" }}>Vishnu Vardhan Reddy Vonteddu</strong>
              <span style={{ fontSize: "11px", color: "#72727a", fontFamily: "var(--font-mono)" }}>Full Stack Developer</span>
            </div>
            <p style={{ color: "#e4e4e7", margin: "0 0 10px 0", fontSize: "13px" }}>
              Full Stack Developer | B.Tech CSE (2026, CGPA 7.5) with 8 months of production experience building web and mobile applications at Siris Apps.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", fontSize: "12px" }}>
              <div style={{ background: "#1c1c22", padding: "6px 10px", borderRadius: "4px" }}>
                <span style={{ color: "#4ade80" }}>🎓 Education:</span> B.Tech CSE (2026)
              </div>
              <div style={{ background: "#1c1c22", padding: "6px 10px", borderRadius: "4px" }}>
                <span style={{ color: "#4ade80" }}>💼 Experience:</span> 8 Mos @ Siris Apps
              </div>
            </div>
          </div>
        );
      case "skills":
        return (
          <div style={{ padding: "12px", background: "#131317", borderRadius: "8px", border: "1px solid #232328" }}>
            <div style={{ color: "#4ade80", fontWeight: "bold", borderBottom: "1px solid #232328", paddingBottom: "6px", marginBottom: "10px" }}>
              TECHNICAL TOOLKIT
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { title: "Frontend & Mobile", items: ["Flutter", "Dart", "React", "Next.js", "TypeScript", "Tailwind CSS"], color: "#38bdf8" },
                { title: "Backend & Services", items: ["Firebase Auth/DB/Storage", "Supabase", "Prisma ORM", "REST APIs"], color: "#a78bfa" },
                { title: "Databases & Security", items: ["PostgreSQL", "MySQL", "RBAC", "Session Tokens", "SHA-256"], color: "#34d399" },
              ].map((grp) => (
                <div key={grp.title}>
                  <div style={{ color: grp.color, fontSize: "11px", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "4px" }}>
                    {grp.title}
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {grp.items.map((item) => (
                      <span key={item} style={{ background: "#1c1c22", border: "1px solid #2d2d34", color: "#e4e4e7", fontSize: "11px", padding: "2px 6px", borderRadius: "4px" }}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case "projects":
        return (
          <div style={{ padding: "12px", background: "#131317", borderRadius: "8px", border: "1px solid #232328" }}>
            <div style={{ color: "#4ade80", fontWeight: "bold", borderBottom: "1px solid #232328", paddingBottom: "6px", marginBottom: "8px" }}>
              SELECTED PROJECTS
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                { id: "1", name: "Campout", desc: "Outdoor booking with conflict-safe lock & maps." },
                { id: "2", name: "GateFlow", desc: "Visitor pass with multi-tenant RBAC & policies." },
                { id: "3", name: "TechTrack", desc: "Gamified learning tracker with real-time sync." },
                { id: "4", name: "College Management", desc: "Database schema panel with Power BI analytics." },
              ].map((proj) => (
                <div key={proj.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "#1c1c22", padding: "8px", borderRadius: "6px", border: "1px solid #2d2d34" }}>
                  <div>
                    <span style={{ color: "#4ade80", fontWeight: "bold" }}>{proj.id}. {proj.name}</span>
                    <p style={{ color: "#72727a", fontSize: "11px", margin: "2px 0 0 0" }}>{proj.desc}</p>
                  </div>
                  <Link href="/projects" style={{ background: "#27c93f", color: "#000", fontSize: "10px", fontWeight: "bold", padding: "4px 8px", borderRadius: "4px", textDecoration: "none" }}>
                    Details
                  </Link>
                </div>
              ))}
            </div>
          </div>
        );
      case "contact":
        return (
          <div style={{ padding: "12px", background: "#131317", borderRadius: "8px", border: "1px solid #232328" }}>
            <div style={{ color: "#4ade80", fontWeight: "bold", borderBottom: "1px solid #232328", paddingBottom: "6px", marginBottom: "8px" }}>
              GET IN TOUCH
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
              {[
                { label: "📧 Email", val: "vishnuvonteddu@gmail.com", href: "mailto:vishnuvonteddu@gmail.com" },
                { label: "📞 Phone", val: "+91 91824 67899", href: "tel:+919182467899" },
                { label: "🐙 GitHub", val: "github.com", href: "https://github.com/vishnuvardhanreddyvontedd" },
                { label: "💼 LinkedIn", val: "linkedin.com", href: "https://linkedin.com/in/v-vishnu-vardhan-reddy" },
              ].map((item) => (
                <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" style={{ display: "block", background: "#1c1c22", padding: "8px", borderRadius: "4px", border: "1px solid #2d2d34", textDecoration: "none" }}>
                  <div style={{ fontSize: "10px", color: "#72727a" }}>{item.label}</div>
                  <div style={{ fontSize: "11px", color: "#ffffff", fontWeight: "bold", textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }}>
                    {item.val}
                  </div>
                </a>
              ))}
            </div>
          </div>
        );
      case "secret":
        return (
          <div style={{ padding: "12px", background: "rgba(39, 201, 63, 0.05)", borderRadius: "8px", border: "1px solid #27c93f", color: "#a8ffb2" }}>
            🎉 <strong>Secret Unlocked!</strong> Vishnu is actively seeking full-time opportunities starting July 2026. He is a fantastic team player, highly specialized, and is ready to make a huge impact. Hire him! 🚀
          </div>
        );
      case "error":
        return (
          <div style={{ color: "#ff5f56", fontSize: "13px" }}>
            {row.output || `command not found. Type 'help' to see all valid commands.`}
            <button
              onClick={() => handleCommand("help")}
              style={{
                marginLeft: "10px",
                background: "rgba(255, 95, 86, 0.1)",
                border: "1px solid #ff5f56",
                color: "#ff5f56",
                fontSize: "11px",
                padding: "2px 6px",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Open Help Menu
            </button>
          </div>
        );
      default:
        return <div className="terminal-output">{row.output}</div>;
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
            {renderRowOutput(row)}
          </div>
        ))}
      </div>

      <div 
        style={{ 
          padding: "12px", 
          borderTop: "1px solid #232328", 
          background: "#101014",
          display: "flex",
          flexDirection: "column",
          gap: "8px"
        }}
      >
        <div 
          className="terminal-input-row" 
          style={{ 
            display: "flex", 
            alignItems: "center", 
            gap: "8px", 
            padding: "8px 12px", 
            background: "#17171c", 
            borderRadius: "6px", 
            border: "1px solid #282830"
          }}
        >
          <span className="terminal-prompt" style={{ whiteSpace: "nowrap" }}>
            guest<span style={{ color: "#4ade80" }}>@vishnu:~$</span>
          </span>
          <input
            ref={inputRef}
            type="text"
            className="terminal-input"
            style={{ caretColor: "#4ade80" }}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type 'help' or select a query below..."
            autoFocus
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck={false}
          />
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", alignItems: "center", paddingLeft: "4px" }}>
          <span style={{ fontSize: "11px", color: "#72727a", fontFamily: "var(--font-mono)" }}>Quick Nav:</span>
          {["about", "skills", "projects", "contact", "clear"].map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="terminal-suggest-btn"
              style={{
                background: "#1c1c22",
                border: "1px solid #2d2d34",
                borderRadius: "4px",
                color: "#a8ffb2",
                fontSize: "11px",
                padding: "2px 8px",
                cursor: "pointer",
                fontFamily: "var(--font-mono), monospace",
              }}
            >
              {cmd}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

