"use client";

import { Terminal, ExternalLink, Heart } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-[#1f2937]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-[#22c55e]" />
            <span className="font-[family-name:var(--font-geist-mono)] text-sm text-[#6b7280]">
              ~/srinivas
            </span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs text-[#6b7280] hover:text-[#00d4ff] transition-colors font-[family-name:var(--font-geist-mono)]"
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
              className="text-[#6b7280] hover:text-[#00d4ff] transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#1f2937] text-center">
          <p className="text-xs text-[#6b7280] font-[family-name:var(--font-geist-mono)]">
            <span className="text-[#22c55e]">Built</span> with{" "}
            <Heart className="w-3 h-3 inline text-[#ef4444]" /> by{" "}
            <span className="text-[#ededed]">Srinivas K</span> | © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
