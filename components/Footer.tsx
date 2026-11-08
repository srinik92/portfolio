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
        <p className="mx-auto max-w-3xl font-mono text-xs text-center">
          Designed &amp; built by <span className="text-accent">Srinivas K</span>
        </p>
      </footer>

      {showScrollTop && (
        <button
          onClick={() => {
            (document.scrollingElement ?? document.documentElement).scrollTop = 0;
          }}
          className="fixed bottom-6 right-6 z-40 w-10 h-10 border border-border rounded bg-surface flex items-center justify-center text-muted hover:text-accent hover:border-accent/40 transition-all"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </>
  );
}
