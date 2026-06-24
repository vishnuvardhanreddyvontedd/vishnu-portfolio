import type { Metadata } from "next";
import { projects } from "../data/portfolio";

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
      <section className="section shell projects-list">
        {projects.map((project, index) => (
          <article className="project-detail" key={project.title}>
            <div className={`project-visual ${project.color}`}>
              <span>PROJECT 0{index + 1} · {project.type}</span>
              <strong>{project.title}</strong>
            </div>
            <div className="project-detail-content">
              <div className="project-header-row">
                <h2>{project.description}</h2>
                <div className="project-status">
                  {(project.title === "Campout" || project.title === "GateFlow") ? (
                    <span className="badge badge-production">Siris Apps Production</span>
                  ) : project.title === "TechTrack" ? (
                    <span className="badge badge-academic">Key Project</span>
                  ) : (
                    <span className="badge badge-academic">Academic System</span>
                  )}
                </div>
              </div>
              <p>{project.shortDescription}</p>
              <ul className="feature-list">
                {project.features.map((feature) => <li key={feature}>{feature}</li>)}
              </ul>
              <div className="tag-list">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
