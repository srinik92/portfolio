"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { ExternalLink, ArrowDown } from "lucide-react";

const titles = [
  "Network Automation",
  "Observability Engineering",
  "DevOps & CI/CD",
  "AI in Networking",
  "Python & APIs",
  "Kubernetes & ArgoCD",
];

export default function Hero() {
  const [displayState, setDisplayState] = useState({
    text: "",
    titleIndex: 0,
    isDeleting: false,
  });
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const currentTitle = titles[displayState.titleIndex];

    if (!displayState.isDeleting && displayState.text === currentTitle) {
      timeoutRef.current = setTimeout(() => {
        setDisplayState((s) => ({ ...s, isDeleting: true }));
      }, 2000);
    } else if (displayState.isDeleting && displayState.text === "") {
      timeoutRef.current = setTimeout(() => {
        setDisplayState((s) => ({
          text: "",
          titleIndex: (s.titleIndex + 1) % titles.length,
          isDeleting: false,
        }));
      }, 0);
    } else {
      timeoutRef.current = setTimeout(
        () => {
          setDisplayState((s) => ({
            ...s,
            text: s.isDeleting
              ? currentTitle.substring(0, s.text.length - 1)
              : currentTitle.substring(0, s.text.length + 1),
          }));
        },
        displayState.isDeleting ? 30 : 70
      );
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [displayState]);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6">
      {/* Dot grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.12]"
        style={{
          backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
          backgroundSize: `24px 24px`,
        }}
      />

      {/* Corner cross-tick marks */}
      <div className="absolute top-8 left-8 w-6 h-6 border-l-2 border-t-2 border-muted/30 hidden md:block" />
      <div className="absolute top-8 right-8 w-6 h-6 border-r-2 border-t-2 border-muted/30 hidden md:block" />
      <div className="absolute bottom-8 left-8 w-6 h-6 border-l-2 border-b-2 border-muted/30 hidden md:block" />
      <div className="absolute bottom-8 right-8 w-6 h-6 border-r-2 border-b-2 border-muted/30 hidden md:block" />

      {/* Large watermark initials */}
      <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 text-[20vw] font-black text-foreground/[0.03] pointer-events-none select-none hidden lg:block">
        SK
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center relative z-10 max-w-3xl"
      >
        {/* Eyebrow label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="eyebrow mb-6"
        >
          $ whoami
        </motion.div>

        <h1 className="text-5xl sm:text-6xl md:text-8xl font-black mb-6 tracking-tight leading-[0.9]">
          <span className="text-foreground">Srinivas K</span>
        </h1>

        <div className="text-lg sm:text-xl md:text-2xl text-muted mb-4 font-[family-name:var(--font-geist-mono)]">
          <span className="text-green">&gt;</span>{" "}
          Senior Network Automation & Observability Engineer
        </div>

        <div className="text-base sm:text-lg md:text-xl text-accent h-8 font-[family-name:var(--font-geist-mono)]">
          {displayState.text}
          <span className="animate-pulse text-accent">|</span>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8 max-w-xl mx-auto text-muted leading-relaxed text-sm sm:text-base"
        >
          Building scalable network automation and observability solutions.
          11+ years of engineering enterprise monitoring and automation platforms.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="btn-fill px-8 py-3 bg-accent text-background rounded-none font-semibold text-sm hover:text-background transition-all min-h-[44px] flex items-center"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="btn-fill px-8 py-3 border border-muted/30 text-muted rounded-none font-semibold text-sm hover:text-background transition-all min-h-[44px] flex items-center"
          >
            Get In Touch
          </a>
          <a
            href="https://linkedin.com/in/srinivas-k-77815496"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-muted/30 text-muted rounded-none hover:text-accent hover:border-accent/30 transition-all min-h-[44px] min-w-[44px] flex items-center justify-center"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 text-muted hover:text-accent transition-colors"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-[family-name:var(--font-geist-mono)] uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </div>
      </motion.a>
    </section>
  );
}
