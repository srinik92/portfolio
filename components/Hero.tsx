"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-[100svh] flex flex-col justify-center px-6 sm:px-12">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl"
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
    </section>
  );
}
