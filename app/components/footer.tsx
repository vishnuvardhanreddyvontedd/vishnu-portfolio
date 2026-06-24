import Link from "next/link";
import { ArrowUpRight } from "./icons";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-main">
          <h2>Have a product in mind? <em>Let&apos;s build it.</em></h2>
          <Link className="button" style={{ background: "white", color: "#171714" }} href="/contact">
            Start a conversation <ArrowUpRight />
          </Link>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Vishnu Vardhan Reddy</span>
          <div className="footer-links">
            <a href="https://github.com/vishnuvardhanreddyvontedd" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/v-vishnu-vardhan-reddy" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="/vishnu-vardhan-reddy-resume.pdf" target="_blank">Resume</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
