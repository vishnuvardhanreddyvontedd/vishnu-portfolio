export const skills = [
  "Next.js", "React", "TypeScript", "Flutter", "Dart", "JavaScript",
  "Tailwind CSS", "Firebase", "Supabase", "Prisma ORM", "PostgreSQL",
  "MySQL", "REST APIs", "Git", "Responsive Design",
];

export const skillGroups = [
  { title: "Mobile & frontend", items: ["Flutter", "Dart", "React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"] },
  { title: "Backend & data", items: ["Firebase Auth", "Firestore", "Firebase Storage", "Supabase", "Prisma ORM", "REST APIs", "PostgreSQL", "MySQL"] },
  { title: "Architecture & practice", items: ["Role-Based Access Control", "Session Auth", "Real-time Sync", "Responsive Design", "Git & GitHub", "Testing & QA"] },
];

export const projects = [
  {
    title: "Campout",
    type: "Outdoor booking platform",
    shortDescription: "A complete mobile booking journey from campsite discovery to verified QR check-in.",
    description: "A cross-platform outdoor booking experience designed to make discovering and reserving campsites effortless.",
    tech: ["Flutter", "Firebase", "Supabase", "Maps API"],
    features: ["End-to-end auth, onboarding, search, booking, and QR ticket flows", "Conflict-safe slot locking with Firestore transactions", "Location-aware discovery and navigation through Maps API"],
    color: "blue",
  },
  {
    title: "GateFlow",
    type: "Multi-tenant visitor platform",
    shortDescription: "Role-aware visitor management and smart gate passes for complex organizations.",
    description: "A flexible visitor and gate-pass system for colleges, hospitals, offices, and hotels.",
    tech: ["Next.js", "Prisma", "Supabase", "PostgreSQL"],
    features: ["Dynamic role-based interfaces for Admin, Staff, Student, and Security", "SHA-256 session tokens and organization-scoped signup", "Real-time staff approvals, smart passes, and complete pass history"],
    color: "red",
  },
  {
    title: "TechTrack",
    type: "Gamified learning platform",
    shortDescription: "A learning experience that turns progress into an engaging roadmap of levels and rewards.",
    description: "A mobile-first learning platform designed around momentum, visibility, and rewarding progress.",
    tech: ["Flutter", "Dart", "Firebase", "Firestore"],
    features: ["Roadmap-driven learning paths with level unlocking", "XP and badge reward systems", "Real-time progress synchronization with Firestore"],
    color: "gold",
  },
  {
    title: "College Management",
    type: "Data & analytics system",
    shortDescription: "A full-stack college operations system backed by normalized data and clear analytics.",
    description: "An academic management application connecting everyday CRUD workflows with decision-ready reporting.",
    tech: ["HTML", "CSS", "JavaScript", "MySQL", "Python", "Power BI"],
    features: ["Normalized relational MySQL schema", "CRUD operations through SQL and Python", "Power BI dashboards for institutional analytics"],
    color: "green",
  },
];
