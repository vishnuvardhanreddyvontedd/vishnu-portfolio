import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CodeIcon } from "./components/icons";
import { projects, skills } from "./data/portfolio";
import { Terminal } from "./components/terminal";

export default function Home() {
  return (
    <>
      <section className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow"><span className="pulse" /> Available for full-time opportunities</p>
          <h1>
            I build digital products that <em>work beautifully.</em>
          </h1>
          <p className="hero-intro">
            I&apos;m <strong>Vishnu Vardhan Reddy Vonteddu</strong>, a Full Stack Developer turning complex workflows
            into fast, reliable mobile and web experiences. Proficient across front-end and back-end ecosystems.
          </p>
          <div className="button-row">
            <Link className="button button-primary" href="/projects">
              Explore my work <ArrowUpRight />
            </Link>
            <a className="button button-quiet" href="/vishnu-vardhan-reddy-resume.pdf" target="_blank">
              View resume
            </a>
          </div>
          <dl className="hero-stats">
            <div className="stat-card"><dt>4</dt><dd>Production products</dd></div>
            <div className="stat-card"><dt>8+</dt><dd>Months of experience</dd></div>
            <div className="stat-card"><dt>2</dt><dd>Platforms: web & mobile</dd></div>
          </dl>
        </div>

        <div className="portrait-wrap">
          <div className="portrait-frame">
            <Image
              src="/vishnu-vardhan-reddy.jpg"
              alt="Vishnu Vardhan Reddy Vonteddu"
              fill
              priority
              sizes="(max-width: 800px) 88vw, 36vw"
              className="portrait"
            />
          </div>
          <div className="floating-note">
            <span className="note-icon"><CodeIcon /></span>
            <span><strong>Full Stack Developer</strong>Flutter · React · Next.js</span>
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading">
          <div>
            <p className="kicker">Interactive Console</p>
            <h2>Explore my sandbox environment.</h2>
          </div>
        </div>
        <p className="section-copy" style={{ marginTop: "-20px", marginBottom: "20px", maxWidth: "600px" }}>
          Type commands in the simulator below to query my credentials, list my project details, or reveal secret easter eggs.
        </p>
        <div style={{ maxWidth: "800px", marginInline: "auto" }}>
          <Terminal />
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading">
          <div>
            <p className="kicker">Selected work</p>
            <h2>Products built for the real world.</h2>
          </div>
          <Link className="text-link" href="/projects">View all projects <ArrowUpRight /></Link>
        </div>
        <div className="project-grid">
          {projects.slice(0, 2).map((project, index) => (
            <Link href="/projects" className={`project-card project-${index + 1} group`} key={project.title}>
              <div className="project-number">0{index + 1}</div>
              <div className="project-content">
                <p className="project-type">{project.type}</p>
                <h3 className="flex items-center gap-1">
                  {project.title}
                  <span className="inline-block transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                    <ArrowUpRight />
                  </span>
                </h3>
                <p>{project.shortDescription}</p>
                <div className="tag-list">
                  {project.tech.slice(0, 4).map((tech) => <span key={tech}>{tech}</span>)}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section shell skills-preview">
        <div>
          <p className="kicker">My toolkit</p>
          <h2>From interface to infrastructure.</h2>
          <p className="section-copy">
            I work across the stack, with a particular love for thoughtful
            interfaces, reliable data flows, and products that feel effortless.
          </p>
          <Link className="text-link" href="/about">More about me <ArrowUpRight /></Link>
        </div>
        <div className="skill-cloud">
          {skills.slice(0, 12).map((skill) => <span key={skill}>{skill}</span>)}
        </div>
      </section>
    </>
  );
}
