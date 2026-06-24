import Link from "next/link";

export default function NotFound() {
  return (
    <section className="contact-wrap shell" style={{ minHeight: "70vh", gridTemplateColumns: "1fr" }}>
      <div>
        <p className="kicker">404 · Page not found</p>
        <h1>This route took a <em>detour.</em></h1>
        <p className="contact-copy">The page you&apos;re looking for doesn&apos;t exist or may have moved.</p>
        <Link className="button button-primary" href="/">Back to home</Link>
      </div>
    </section>
  );
}
