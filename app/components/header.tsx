"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MenuIcon } from "./icons";

const links = [
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
];

function ThemeIcon({ theme }: { theme: "light" | "dark" }) {
  return theme === "light" ? (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

export function Header() {
  const pathname = usePathname();
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    // Use timeout to prevent synchronous state setting in effect warnings
    const timer = setTimeout(() => {
      setTheme(isDark ? "dark" : "light");
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <header className="site-header">
      <nav className="nav shell" aria-label="Main navigation">
        <Link href="/" className="brand" aria-label="Vishnu Vardhan Reddy, home">
          <span className="brand-mark" style={{ position: "relative", overflow: "hidden" }}>
            <Image
              src="/vishnu-vardhan-reddy.jpg"
              alt="Vishnu Vardhan Reddy logo"
              fill
              sizes="34px"
              style={{ objectFit: "cover", objectPosition: "53% 20%" }}
            />
          </span>
          <span>Vishnuvardhan Reddy</span>
        </Link>
        
        <div className="nav-links">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                href={link.href} 
                key={link.href} 
                className={isActive ? "active" : ""}
              >
                {link.label}
              </Link>
            );
          })}
          
          <button 
            onClick={toggleTheme} 
            className="theme-toggle" 
            aria-label="Toggle visual theme"
          >
            <ThemeIcon theme={theme} />
          </button>
          
          <Link className={`nav-cta ${pathname === "/contact" ? "active" : ""}`} href="/contact">Let&apos;s talk</Link>
        </div>

        <div className="nav-actions-mobile">
          <button 
            onClick={toggleTheme} 
            className="theme-toggle" 
            aria-label="Toggle visual theme"
          >
            <ThemeIcon theme={theme} />
          </button>
          
          <details className="mobile-nav">
            <summary aria-label="Open navigation"><MenuIcon /></summary>
            <div className="mobile-panel">
              <Link href="/" className={pathname === "/" ? "active" : ""}>Home</Link>
              {links.map((link) => (
                <Link 
                  href={link.href} 
                  key={link.href}
                  className={pathname === link.href ? "active" : ""}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/contact" className={pathname === "/contact" ? "active" : ""}>Let&apos;s talk</Link>
            </div>
          </details>
        </div>
      </nav>
    </header>
  );
}
