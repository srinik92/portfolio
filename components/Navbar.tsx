"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
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
  const railRef = useRef<HTMLElement>(null);
  const mobileRef = useRef<HTMLElement>(null);

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

  // Manual scrolling: some mobile browsers (e.g. Opera Android) fire the hash
  // navigation but never perform the scroll, so don't depend on anchor
  // defaults at all. replaceState keeps the URL shareable without triggering
  // Next's router scroll management.
  //
  // The listener is attached natively in the capture phase instead of React's
  // delegated onClick: on some Android browsers, clicks on the menu anchors
  // never reach React's root-level listeners (verified via an on-page event
  // log), so React onClick handlers were silently skipped. Capture-phase
  // events do reach root-attached listeners on those devices.
  useEffect(() => {
    const scrollToHref = (href: string) => {
      setIsOpen(false);
      if (href === "#") {
        history.replaceState(null, "", window.location.pathname);
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      const el = document.querySelector(href);
      if (!el) {
        history.replaceState(null, "", href);
        return;
      }
      const y = el.getBoundingClientRect().top + window.scrollY - 64;
      window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
      history.replaceState(null, "", href);
    };
    const onClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement)?.closest?.("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || !href.startsWith("#")) return;
      e.preventDefault();
      scrollToHref(href);
    };
    const els = [railRef.current, mobileRef.current].filter(Boolean) as HTMLElement[];
    els.forEach((el) => el.addEventListener("click", onClick, { capture: true }));
    return () => els.forEach((el) => el.removeEventListener("click", onClick, { capture: true }));
  }, []);

  const rail = (
    <nav
      ref={railRef}
      className="hidden lg:flex fixed inset-y-0 left-0 w-[240px] flex-col py-8 px-10 z-40"
      aria-label="Primary"
    >
      <a
        href="#"
        className="font-mono text-2xl text-accent font-medium w-fit mb-14"
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
    </nav>
  );

  return (
    <>
      <button
        onClick={toggle}
        className="hidden lg:flex fixed top-7 right-8 z-40 w-9 h-9 border border-border rounded bg-surface/60 items-center justify-center text-muted hover:text-accent hover:border-accent/40 transition-all"
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      >
        {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
      </button>

      <nav
        ref={mobileRef}
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
