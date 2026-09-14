"use client";

import { Terminal, ExternalLink, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <footer className="py-8 sm:py-12 px-6 border-t border-card-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-green" />
              <span className="font-[family-name:var(--font-geist-mono)] text-sm text-muted">
                ~/srinivas
              </span>
            </div>

            <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xs text-muted hover:text-accent transition-colors font-[family-name:var(--font-geist-mono)] min-h-[44px] flex items-center"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com/in/srinivas-k-77815496"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-card-border text-center">
            <p className="text-xs text-muted font-[family-name:var(--font-geist-mono)]">
              <span className="text-foreground">Srinivas K</span> — Senior Network Automation & Observability Engineer | © {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </footer>

      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 w-11 h-11 bg-surface border border-card-border shadow-lg flex items-center justify-center text-muted hover:text-accent hover:border-accent/30 transition-all"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
}
