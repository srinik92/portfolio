"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";

const experiences = [
  {
    period: "Sep 2026 — Present",
    company: "Lowe's India",
    role: "Senior Software Engineer",
    location: "Bengaluru, India",
    highlights: [
      "Leading development teams and technology leadership",
      "Network automation and observability across enterprise systems",
      "Python automation, Kubernetes, DevOps, ArgoCD",
      "Telegraf, VictoriaMetrics, LogicMonitor stack",
      "Recipient of Individual Excellence Award at Lowe's for 2025",
    ],
  },
  {
    period: "Dec 2019 — Sep 2026",
    company: "Lowe's India",
    role: "Senior Infrastructure Engineer",
    location: "Bengaluru, India",
    highlights: [
      "Led end-to-end LogicMonitor implementation & migration for enterprise monitoring",
      "Built open-source telemetry stack using Telegraf, Prometheus, VictoriaMetrics, and Grafana",
      "Created Argus — open-source network monitoring framework",
      "Designed and deployed CI/CD pipelines for monitoring infrastructure",
      "Implementing AI/Generative AI for network operations and products",
      "Completed Generative AI Mastermind workshop from Outskill",
      "Collaborating with Command Centers, Application, and Infra teams on monitoring strategy",
    ],
  },
  {
    period: "Oct 2017 — Dec 2019",
    company: "Cognizant",
    role: "Sr. Infra Developer",
    location: "Bengaluru, India",
    highlights: [
      "Tech lead in monitoring tools domain",
      "Expertise in CA vendor tools profile",
      "Hands-on experience with CA Spectrum, eHealth, VNA, NFA and PM",
      "Managed monitoring infrastructure across enterprise environments",
    ],
  },
  {
    period: "May 2015 — Oct 2017",
    company: "Cognizant",
    role: "Senior Systems Engineer",
    location: "Bengaluru, India",
    highlights: [
      "Expertise in CA monitoring tools — Spectrum, eHealth, BPPM (MOM)",
      "Custom business transaction monitoring and alerting",
      "Collaborated with cross-functional teams on incident management",
    ],
  },
  {
    period: "Oct 2013 — Apr 2015",
    company: "Oracle",
    role: "System Engineer",
    location: "Bengaluru, India",
    highlights: [
      "Enterprise monitoring and infrastructure management",
      "Implemented monitoring solutions across server and network environments",
      "Contributed to monitoring strategy and tool administration",
    ],
  },
];

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const active = experiences[activeIndex];

  function onKeyDown(e: React.KeyboardEvent) {
    let next: number | null = null;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      next = (activeIndex + 1) % experiences.length;
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      next = (activeIndex - 1 + experiences.length) % experiences.length;
    }
    if (next !== null) {
      e.preventDefault();
      setActiveIndex(next);
      tabRefs.current[next]?.focus();
    }
  }

  return (
    <section id="experience" className="py-20 px-6 sm:px-12">
      <div className="mx-auto max-w-3xl">
        <SectionHeading number="02" title="Where I've Worked" />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row gap-8"
        >
          <div
            role="tablist"
            aria-label="Work history"
            onKeyDown={onKeyDown}
            className="flex md:flex-col overflow-x-auto md:overflow-visible gap-1 whitespace-nowrap border-b md:border-b-0 md:border-l border-border"
          >
            {experiences.map((exp, i) => (
              <button
                key={`${exp.company}-${exp.role}`}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                role="tab"
                id={`exp-tab-${i}`}
                aria-selected={activeIndex === i}
                aria-controls={`exp-panel-${i}`}
                tabIndex={activeIndex === i ? 0 : -1}
                onClick={() => setActiveIndex(i)}
                className={`font-mono text-xs px-4 py-3 text-left transition-colors md:border-l-2 ${
                  activeIndex === i
                    ? "text-accent md:border-accent md:bg-accent-dim"
                    : "text-muted hover:text-foreground md:border-border"
                }`}
              >
                {exp.company}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              role="tabpanel"
              id={`exp-panel-${activeIndex}`}
              aria-labelledby={`exp-tab-${activeIndex}`}
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              transition={{ duration: 0.25 }}
            >
              <h3 className="text-lg font-medium text-foreground">
                {active.role} <span className="text-accent">@ {active.company}</span>
              </h3>
              <p className="font-mono text-xs mt-1 mb-5">{active.period}</p>
              <ul className="space-y-2.5">
                {active.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 text-sm leading-relaxed">
                    <span className="text-accent mt-0.5" aria-hidden="true">
                      ▹
                    </span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
