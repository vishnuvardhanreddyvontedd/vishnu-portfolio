import type { Metadata } from "next";
import { skillGroups } from "../data/portfolio";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Vishnu Vardhan Reddy Vonteddu's engineering approach, technical strengths, and educational background.",
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero shell">
        <p className="kicker">About me</p>
        <div className="page-hero-grid">
          <h1 className="page-title">Curious by nature.<br />Practical by design.</h1>
          <p className="page-lead">I care about the small details that make software feel obvious, and the architectural decisions that keep it dependable.</p>
        </div>
      </section>

      <section className="section shell content-grid">
        <div className="aside-label">The short version</div>
        <div>
          <div className="prose-large">
            <p>I&apos;m a Full Stack Developer from Gurazala, Andhra Pradesh, India, building production mobile and web applications at <strong>Siris Apps</strong>.</p>
            <p>My work sits where product thinking meets robust engineering: translating complex design specifications into responsive interfaces, shaping secure data flows, and making multi-tenant workflows feel simple and secure.</p>
          </div>
          <div className="details-grid">
            <article className="detail-card">
              <h3>How I work</h3>
              <p>Clear communication, fast iteration cycles, and careful testing from first flow to final deployment edge cases.</p>
            </article>
            <article className="detail-card">
              <h3>What I value</h3>
              <p>Useful software, clean responsive interfaces, maintainable system architecture, and measurable product outcomes.</p>
            </article>
            <article className="detail-card">
              <h3>Education</h3>
              <p>B.Tech in Computer Science & Engineering, Bheema Institute of Technology & Science, 2022–2026. CGPA: 7.5</p>
            </article>
            <article className="detail-card">
              <h3>Current focus</h3>
              <p>Completing my degree while seeking full-time engineering opportunities where I can own and ship meaningful product features.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section shell content-grid">
        <div className="aside-label">Technical toolkit</div>
        <div className="skills-groups">
          {skillGroups.map((group) => (
            <article className="skill-group" key={group.title}>
              <h3>{group.title}</h3>
              <div className="tag-list">
                {group.items.map((item) => <span key={item}>{item}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
