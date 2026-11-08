"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "About (replica)", href: "#target" },
  { label: "Target below", href: "#target2" },
];

export default function DebugPage() {
  const [log, setLog] = useState<string[]>([]);
  const [info, setInfo] = useState({ ua: "", reduce: false, innerH: 0 });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = Math.round(window.scrollY);
      setLog((prev) => (prev[0] === `scrollY=${y}` ? prev : [`scrollY=${y}`, ...prev].slice(0, 24)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    const id = requestAnimationFrame(() => {
      setInfo({
        ua: navigator.userAgent.slice(0, 80),
        reduce: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
        innerH: window.innerHeight,
      });
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(id);
    };
  }, []);

  const push = (msg: string) => setLog((prev) => [msg, ...prev].slice(0, 24));

  // Replica of the real Navbar scrollToSection handler, with step logging
  const scrollToSection = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    push(`handler fired for ${href}, default prevented`);
    setOpen(false);
    const el = document.querySelector(href);
    if (!el) {
      push("!! element not found");
      return;
    }
    const y = Math.max(0, el.getBoundingClientRect().top + window.scrollY - 64);
    push(`target found, scrollTo(top=${Math.round(y)}, smooth)`);
    window.scrollTo({ top: y, behavior: "smooth" });
    push("scrollTo called, waiting for scroll events...");
  };

  return (
    <main className="min-h-[300svh] p-6 font-mono text-sm">
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="overflow-hidden border border-accent bg-surface"
          style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50 }}
        >
          <ul className="p-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="block py-3 text-accent border-b border-border"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
      <button
        onClick={() => setOpen((o) => !o)}
        style={{ position: "fixed", top: 0, right: 0, zIndex: 60 }}
        className="border border-accent text-accent rounded px-4 py-3 bg-background"
      >
        {open ? "CLOSE" : "OPEN MENU (replica)"}
      </button>

      <h1 className="text-lg font-bold mb-4 mt-24">Menu Scroll Replication</h1>

      <p className="mb-2">viewport height: {info.innerH}px</p>
      <p className="mb-2">prefers-reduced-motion: {String(info.reduce)}</p>
      <p className="mb-2 break-all">UA: {info.ua || "-"}</p>

      <div className="mt-6">
        <h2 className="font-bold mb-2">Live log (newest first)</h2>
        <ul className="font-mono text-xs space-y-1">
          {log.length === 0 && <li>- tap OPEN MENU, then tap a replica link -</li>}
          {log.map((line, i) => (
            <li key={`${line}-${i}`}>{line}</li>
          ))}
        </ul>
      </div>

      <div id="target" className="mt-[120svh] border border-accent p-6">
        TARGET 1 — reached if scrolled here.
      </div>
      <div id="target2" className="mt-[120svh] border border-accent p-6 mb-[50svh]">
        TARGET 2 — reached if scrolled here.
      </div>
    </main>
  );
}
