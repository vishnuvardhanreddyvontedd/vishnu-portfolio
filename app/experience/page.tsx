import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description: "Professional experience and education of full stack developer Vishnu Vardhan Reddy Vonteddu.",
};

export default function ExperiencePage() {
  return (
    <>
      <section className="page-hero shell">
        <p className="kicker">Experience</p>
        <div className="page-hero-grid">
          <h1 className="page-title">Building, shipping,<br />and learning.</h1>
          <p className="page-lead">Production experience across mobile and web, with ownership from interface implementation through data and authentication.</p>
        </div>
      </section>
      <section className="section shell timeline">
        <article className="timeline-card">
          <div className="timeline-marker" />
          <div className="timeline-meta">
            <strong>Jan 2024 — Present</strong>
            <span>Hyderabad, India</span>
          </div>
          <div className="timeline-content">
            <h2>Full Stack Developer</h2>
            <h3>Siris Apps</h3>
            <ul>
              <li>Built robust authentication, onboarding, slot-locking booking workflows, and QR-based ticket generation across four production applications (Campout, GateFlow, Kidjar).</li>
              <li>Engineered multi-tenant access control for Admin, Staff, Student, and Security roles using SHA-256 session tokens and organization-scoped signup flow.</li>
              <li>Implemented transaction-safe concurrent slot-locking via Firestore transactions and real-time data synchronization using onSnapshot() and Supabase PostgreSQL with RLS policies.</li>
              <li>Integrated geolocation and Maps APIs to achieve location-aware campsite discovery and navigation features.</li>
              <li>Translated designs from Figma into pixel-perfect, highly responsive interfaces using Flutter widgets and React/Tailwind CSS components.</li>
              <li>Conducted systematic testing, QA, and bug triage; actively participated in sprint planning and product roadmap sessions.</li>
            </ul>
          </div>
        </article>
        <article className="timeline-card">
          <div className="timeline-marker" />
          <div className="timeline-meta">
            <strong>2022 — 2026</strong>
            <span>Andhra Pradesh, India</span>
          </div>
          <div className="timeline-content">
            <h2>B.Tech in Computer Science & Engineering</h2>
            <h3>Bheema Institute of Technology & Science · CGPA 7.5</h3>
            <p className="section-copy">
              Built a strong foundation in software engineering principles, relational databases, web development technologies, and analytics while applying those skills directly in real-world production environments.
            </p>
          </div>
        </article>
      </section>
    </>
  );
}
