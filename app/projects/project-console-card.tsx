"use client";

import { useState } from "react";

interface ProjectType {
  title: string;
  type: string;
  shortDescription: string;
  description: string;
  tech: string[];
  features: string[];
  color: string;
}

interface ProjectConsoleCardProps {
  project: ProjectType;
  index: number;
}

export function ProjectConsoleCard({ project, index }: ProjectConsoleCardProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "features" | "architecture">("overview");

  // Custom architecture structures for each project
  const renderArchitecture = () => {
    switch (project.title) {
      case "Campout":
        return (
          <div className="arch-flow-grid">
            <div className="arch-node">
              Flutter App
              <strong>Client Layer</strong>
            </div>
            <div className="arch-arrow">→</div>
            <div className="arch-node">
              Maps API
              <strong>Geolocation</strong>
            </div>
            <div className="arch-arrow">→</div>
            <div className="arch-node">
              Firestore Transactions
              <strong>Concurrency Lock</strong>
            </div>
          </div>
        );
      case "GateFlow":
        return (
          <div className="arch-flow-grid">
            <div className="arch-node">
              Next.js Web
              <strong>Client Interface</strong>
            </div>
            <div className="arch-arrow">→</div>
            <div className="arch-node">
              SHA-256 Auth & RLS
              <strong>Security Policy</strong>
            </div>
            <div className="arch-arrow">→</div>
            <div className="arch-node">
              Prisma & PostgreSQL
              <strong>Database Layer</strong>
            </div>
          </div>
        );
      case "TechTrack":
        return (
          <div className="arch-flow-grid">
            <div className="arch-node">
              Flutter Client
              <strong>Mobile View</strong>
            </div>
            <div className="arch-arrow">→</div>
            <div className="arch-node">
              XP & Badges logic
              <strong>Gamification Controller</strong>
            </div>
            <div className="arch-arrow">→</div>
            <div className="arch-node">
              Firestore onSnapshot()
              <strong>Real-time Sync</strong>
            </div>
          </div>
        );
      case "College Management":
        return (
          <div className="arch-flow-grid">
            <div className="arch-node">
              HTML / CSS / JS
              <strong>UI Dashboard</strong>
            </div>
            <div className="arch-arrow">→</div>
            <div className="arch-node">
              Python CRUD Controller
              <strong>Backend Link</strong>
            </div>
            <div className="arch-arrow">→</div>
            <div className="arch-node">
              MySQL & Power BI
              <strong>Database & Analytics</strong>
            </div>
          </div>
        );
      default:
        return <p>Architecture diagram currently unavailable for this project.</p>;
    }
  };

  return (
    <article className="project-console">
      <div className="console-navbar">
        <div className="console-title-info">
          <div className="terminal-dots" style={{ marginInlineEnd: "8px" }}>
            <span className="terminal-dot dot-red" />
            <span className="terminal-dot dot-yellow" />
            <span className="terminal-dot dot-green" />
          </div>
          <strong>{project.title}</strong>
          <span style={{ fontSize: "11px", color: "var(--muted)", fontWeight: 500, fontFamily: "var(--font-mono)" }}>
            PROJECT 0{index + 1}
          </span>
        </div>
        <div className="console-tabs">
          <button 
            className={`console-tab ${activeTab === "overview" ? "active" : ""}`}
            onClick={() => setActiveTab("overview")}
          >
            Overview
          </button>
          <button 
            className={`console-tab ${activeTab === "features" ? "active" : ""}`}
            onClick={() => setActiveTab("features")}
          >
            Deliverables
          </button>
          <button 
            className={`console-tab ${activeTab === "architecture" ? "active" : ""}`}
            onClick={() => setActiveTab("architecture")}
          >
            Architecture
          </button>
        </div>
      </div>

      <div className="console-body">
        {activeTab === "overview" && (
          <div>
            <h4>{project.description}</h4>
            <p style={{ color: "var(--muted)", fontSize: "14.5px", margin: "12px 0 24px" }}>
              {project.shortDescription}
            </p>
            <div className="tag-list">
              {project.tech.map((t) => (
                <span key={t} style={{ color: "var(--ink)", borderColor: "var(--line)", background: "var(--paper)" }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        )}

        {activeTab === "features" && (
          <div>
            <h4>Key Features & Actions</h4>
            <ul className="feature-list" style={{ marginTop: "12px" }}>
              {project.features.map((feat, fIdx) => (
                <li key={fIdx} style={{ color: "var(--muted)", marginBottom: "8px" }}>
                  {feat}
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === "architecture" && (
          <div>
            <h4>System Architecture Flow</h4>
            <p style={{ color: "var(--muted)", fontSize: "13px", marginBottom: "16px" }}>
              How the client, routing logic, and database schemas integrate to handle requests:
            </p>
            {renderArchitecture()}
          </div>
        )}
      </div>
    </article>
  );
}
