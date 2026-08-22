"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

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
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#00d4ff08_0%,transparent_70%)]" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#22c55e]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00d4ff]/5 rounded-full blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-block mb-6 px-4 py-2 rounded-full border border-[#22c55e]/30 bg-[#22c55e]/5"
        >
          <span className="text-[#22c55e] text-sm font-[family-name:var(--font-geist-mono)]">
            $ whoami
          </span>
        </motion.div>

        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
          <span className="text-[#ededed]">Srinivas </span>
          <span className="gradient-text">K</span>
        </h1>

        <div className="text-xl md:text-2xl text-[#6b7280] mb-3">
          <span className="font-[family-name:var(--font-geist-mono)] text-[#22c55e]">
            &gt;
          </span>{" "}
          Sr. Software Engineer
        </div>

        <div className="text-lg md:text-xl text-[#00d4ff] h-8 font-[family-name:var(--font-geist-mono)]">
          {displayState.text}
          <span className="animate-pulse text-[#00d4ff]">|</span>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8 max-w-xl mx-auto text-[#6b7280] leading-relaxed"
        >
          Building the future of network observability and automation.
          12+ years of crafting monitoring solutions that keep enterprises running.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-[#00d4ff] text-[#0a0a0a] rounded-lg font-semibold text-sm hover:bg-[#00d4ff]/90 transition-all hover:shadow-[0_0_20px_#00d4ff33]"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-[#22c55e]/30 text-[#22c55e] rounded-lg font-semibold text-sm hover:bg-[#22c55e]/10 transition-all"
          >
            Get In Touch
          </a>
          <a
            href="https://linkedin.com/in/srinivas-k-77815496"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-[#6b7280]/30 text-[#6b7280] rounded-lg hover:text-[#00d4ff] hover:border-[#00d4ff]/30 transition-all"
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
        className="absolute bottom-10 text-[#6b7280] hover:text-[#00d4ff] transition-colors"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-[family-name:var(--font-geist-mono)]">scroll down</span>
          <div className="w-5 h-8 border border-[#6b7280]/30 rounded-full flex justify-center pt-1.5">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-1 bg-[#00d4ff] rounded-full"
            />
          </div>
        </div>
      </motion.a>
    </section>
  );
}
