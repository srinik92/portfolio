"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { number: "01", label: "About", href: "#about" },
  { number: "02", label: "Experience", href: "#experience" },
  { number: "03", label: "Projects", href: "#projects" },
  { number: "04", label: "Skills", href: "#skills" },
  { number: "05", label: "Education", href: "#education" },
  { number: "06", label: "Blog", href: "#blog" },
  { number: "07", label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("");
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const rail = (
    <nav
      className="hidden lg:flex fixed inset-y-0 left-0 w-[240px] flex-col justify-between py-8 px-10 z-40"
      aria-label="Primary"
    >
      <a
        href="#"
        className="font-mono text-2xl text-accent font-medium w-fit"
        aria-label="Srinivas K — home"
      >
        S<span className="text-foreground">.</span>
      </a>

      <ul className="flex flex-col gap-2">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className={`group font-mono text-xs flex items-baseline gap-2 py-1.5 transition-colors ${
                active === link.href ? "text-accent" : "text-muted hover:text-foreground"
              }`}
            >
              <span
                className={`w-4 inline-block ${
                  active === link.href ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}
                aria-hidden="true"
              >
                {"‣"}
              </span>
              <span>{link.number}</span>
              <span>{link.label}</span>
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4">
        <a
          href="https://linkedin.com/in/srinivas-k-77815496"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
          className="font-mono text-xs text-muted hover:text-accent transition-colors"
        >
          linkedin
        </a>
        <button
          onClick={toggle}
          className="font-mono text-xs text-muted hover:text-accent border border-border rounded px-3 py-1.5 transition-colors"
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
        >
          {theme === "dark" ? "light" : "dark"}
        </button>
      </div>
    </nav>
  );

  return (
    <>
      <nav
        className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-background/90 backdrop-blur border-b border-border"
        aria-label="Primary"
      >
        <div className="flex items-center justify-between px-6 py-3.5">
          <a href="#" className="font-mono text-xl text-accent font-medium">
            S<span className="text-foreground">.</span>
          </a>
          <div className="flex items-center gap-3">
            <button
              onClick={toggle}
              className="font-mono text-xs text-muted border border-border rounded px-3 py-1.5"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            >
              {theme === "dark" ? "light" : "dark"}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted hover:text-accent transition-colors p-1"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden border-t border-border"
            >
              <ul className="flex flex-col px-6 py-4">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 py-3 font-mono text-xs border-b border-border/50"
                    >
                      <span className="text-accent">{link.number}.</span>
                      <span className={active === link.href ? "text-accent" : "text-foreground"}>
                        {link.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {rail}
    </>
  );
}
