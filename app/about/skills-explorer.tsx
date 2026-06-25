"use client";

import { useState } from "react";
import { skillGroups } from "../data/portfolio";

export function SkillsExplorer() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Toolkit" },
    { id: "Mobile & frontend", label: "Frontend & Mobile" },
    { id: "Backend & data", label: "Backend & Database" },
    { id: "Architecture & practice", label: "Architecture & Practice" },
  ];

  return (
    <div>
      <div className="filter-chips">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`filter-chip ${activeCategory === cat.id ? "active" : ""}`}
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="skills-groups">
        {skillGroups.map((group) => {
          const isFaded = activeCategory !== "all" && activeCategory !== group.title;
          return (
            <article 
              className={`skill-group ${isFaded ? "faded" : ""}`} 
              key={group.title}
            >
              <h3>{group.title}</h3>
              <div className="tag-list">
                {group.items.map((item) => (
                  <span 
                    key={item}
                    style={
                      activeCategory === group.title 
                        ? { borderColor: "var(--accent)", color: "var(--accent)" } 
                        : {}
                    }
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
