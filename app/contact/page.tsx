import type { Metadata } from "next";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Vishnu Vardhan Reddy Vonteddu for full stack development opportunities.",
};

export default function ContactPage() {
  return (
    <section className="contact-wrap shell">
      <div>
        <p className="kicker">Get in touch</p>
        <h1>Let&apos;s make something <em>useful.</em></h1>
        <p className="contact-copy">I&apos;m currently open to full-time roles and thoughtful collaborations. If you&apos;re building something ambitious, I&apos;d love to hear about it.</p>
        <ContactForm />
      </div>
      <aside className="contact-card">
        <p>The fastest way to reach me is by email. I usually reply within a day.</p>
        <a className="contact-link" href="mailto:vishnuvonteddu@gmail.com"><span>Email</span><strong>vishnuvonteddu@gmail.com</strong></a>
        <a className="contact-link" href="tel:+919182467899"><span>Phone</span><strong>+91 91824 67899</strong></a>
        <a className="contact-link" href="https://linkedin.com/in/v-vishnu-vardhan-reddy" target="_blank" rel="noreferrer"><span>LinkedIn</span><strong>Connect with me ↗</strong></a>
        <a className="contact-link" href="https://github.com/vishnuvardhanreddyvontedd" target="_blank" rel="noreferrer"><span>GitHub</span><strong>See my code ↗</strong></a>
        <div className="contact-link"><span>Based in</span><strong>Gurazala, Andhra Pradesh</strong></div>
      </aside>
    </section>
  );
}
