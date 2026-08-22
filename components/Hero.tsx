"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const titles = [
  "Network Automation",
  "Observability Engineering",
  "DevOps & CI/CD",
  "AI in Networking",
];

export default function Hero() {
  const [displayState, setDisplayState] = useState({
    text: "",
    titleIndex: 0,
    isDeleting: false,
  });
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { theme } = useTheme();

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

  const glowColor = theme === "dark" ? "#00d4ff08" : "#00d4ff12";
  const blobColor = theme === "dark" ? "#22c55e08" : "#22c55e10";
  const blobColor2 = theme === "dark" ? "#00d4ff08" : "#00d4ff10";

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4 sm:px-6">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw))] pointer-events-none" style={{ background: `radial-gradient(ellipse at center, ${glowColor} 0%, transparent 70%)` }} />
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl pointer-events-none" style={{ background: blobColor }} />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{ background: blobColor2 }} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center relative z-10 max-w-2xl"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-block mb-6 px-4 py-2 rounded-full border border-green/30 bg-green/5"
        >
          <span className="text-green text-sm font-[family-name:var(--font-geist-mono)]">
            $ whoami
          </span>
        </motion.div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 tracking-tight">
          <span className="text-foreground">Srinivas </span>
          <span className="gradient-text">K</span>
        </h1>

        <div className="text-lg sm:text-xl md:text-2xl text-muted mb-3">
          <span className="font-[family-name:var(--font-geist-mono)] text-green">
            &gt;
          </span>{" "}
          Sr. Software Engineer
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
          Building the future of network observability and automation.
          12+ years of crafting monitoring solutions that keep enterprises running.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          <a
            href="#projects"
            className="px-5 sm:px-6 py-2.5 sm:py-3 bg-accent text-background rounded-lg font-semibold text-sm hover:opacity-90 transition-all hover:shadow-[0_0_20px_#00d4ff33] min-h-[44px] flex items-center"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-5 sm:px-6 py-2.5 sm:py-3 border border-green/30 text-green rounded-lg font-semibold text-sm hover:bg-green/10 transition-all min-h-[44px] flex items-center"
          >
            Get In Touch
          </a>
          <a
            href="https://linkedin.com/in/srinivas-k-77815496"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 sm:p-3 border border-muted/30 text-muted rounded-lg hover:text-accent hover:border-accent/30 transition-all min-h-[44px] min-w-[44px] flex items-center justify-center"
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
        className="absolute bottom-8 sm:bottom-10 text-muted hover:text-accent transition-colors"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-[family-name:var(--font-geist-mono)]">scroll down</span>
          <div className="w-5 h-8 border border-muted/30 rounded-full flex justify-center pt-1.5">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-1 bg-accent rounded-full"
            />
          </div>
        </div>
      </motion.a>
    </section>
  );
}
