import type { Metadata } from "next";
import { projects } from "../data/portfolio";
import { ProjectConsoleCard } from "./project-console-card";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected production, enterprise, and academic projects by Vishnu Vardhan Reddy Vonteddu.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="page-hero shell">
        <p className="kicker">Selected projects</p>
        <div className="page-hero-grid">
          <h1 className="page-title">Work with a reason<br />to exist.</h1>
          <p className="page-lead">Products shaped around real users, real constraints, and the less glamorous edge cases that decide whether software truly works.</p>
        </div>
      </section>
      <section className="section shell projects-list" style={{ gap: "32px" }}>
        {projects.map((project, index) => (
          <ProjectConsoleCard key={project.title} project={project} index={index} />
        ))}
      </section>
    </>
  );
}
