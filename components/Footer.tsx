"use client";

import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <footer className="py-8 px-6 sm:px-12 border-t border-border">
        <div className="mx-auto max-w-3xl flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
          <p className="font-mono text-xs">
            Designed &amp; built by <span className="text-accent">Srinivas K</span>
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/in/srinivas-k-77815496"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-muted hover:text-accent transition-colors min-h-[44px] flex items-center"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>

      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-40 w-10 h-10 border border-border rounded bg-surface flex items-center justify-center text-muted hover:text-accent hover:border-accent/40 transition-all"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </>
  );
}
