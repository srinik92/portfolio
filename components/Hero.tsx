"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const terminalLines = [
  { prompt: true, segments: [{ text: "whoami", color: "text-foreground" }] },
  {
    prompt: false,
    segments: [{ text: "srinivas.k — network automation & observability", color: "text-muted" }],
  },
  { prompt: true, segments: [{ text: "career --years", color: "text-foreground" }] },
  { prompt: false, segments: [{ text: "Oct 2013 — present · 13+ years in network ops", color: "text-muted" }] },
  { prompt: true, segments: [{ text: "uptime --role", color: "text-foreground" }] },
  {
    prompt: false,
    segments: [
      { text: "Senior Software Engineer @ Lowe's India", color: "text-muted" },
    ],
  },
  { prompt: true, segments: [{ text: "focus", color: "text-foreground" }] },
  {
    prompt: false,
    segments: [
      { text: "python", color: "text-accent" },
      { text: " · ", color: "text-muted" },
      { text: "observability", color: "text-accent" },
      { text: " · ", color: "text-muted" },
      { text: "kubernetes", color: "text-accent" },
      { text: " · ", color: "text-muted" },
      { text: "AI agents", color: "text-accent" },
    ],
  },
];

export default function Hero() {
  return (
    <section className="min-h-[100svh] flex items-center px-6 sm:px-12">
      <div className="w-full grid xl:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-accent font-mono text-sm mb-4">Hi, my name is</p>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-foreground tracking-tight mb-3">
            Srinivas K.
          </h1>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-8 text-muted">
            I make networks observable.
          </h2>

          <p className="max-w-xl leading-relaxed mb-4">
            I&apos;m a senior software engineer specializing in network automation and
            observability — building enterprise monitoring platforms, telemetry pipelines,
            and automation tooling with Python and open source.
          </p>

          <p className="max-w-xl leading-relaxed mb-10">
            Currently a Senior Software Engineer at{" "}
            <span className="text-foreground font-medium">Lowe&apos;s India</span> in{" "}
            <span className="inline-flex items-center gap-1 align-baseline">
              <MapPin className="w-3.5 h-3.5 text-accent" /> Bengaluru, India
            </span>
            , where I lead the development of monitoring and automation systems at
            enterprise scale.
          </p>

          <a
            href="#projects"
            className="w-fit px-7 py-4 border border-accent text-accent rounded font-medium transition-colors hover:bg-accent-dim"
          >
            Check out my work
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="hidden xl:block"
        >
          <div className="bg-surface border border-border rounded shadow-lg">
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
              <span className="ml-3 font-mono text-xs text-muted">srinivas — bash</span>
            </div>
            <div className="px-5 py-4 font-mono text-sm leading-7">
              {terminalLines.map((line, i) => (
                <p key={i} className="whitespace-nowrap">
                  {line.prompt && <span className="text-accent mr-2">$</span>}
                  {line.segments.map((seg, j) => (
                    <span key={j} className={seg.color}>
                      {seg.text}
                    </span>
                  ))}
                </p>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
