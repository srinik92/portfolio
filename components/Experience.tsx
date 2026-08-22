"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, ChevronRight } from "lucide-react";

const experiences = [
  {
    period: "2019 — Present",
    company: "Lowe's India",
    role: "Senior Infrastructure Engineer → Sr. Software Engineer",
    location: "Bengaluru, India",
    highlights: [
      "Led end-to-end LogicMonitor implementation & migration for enterprise monitoring",
      "Built open-source telemetry stack using Telegraf, VictoriaMetrics, and Grafana",
      "Created Argus — open-source network monitoring framework",
      "Designed and deployed CI/CD pipelines for monitoring infrastructure",
      "Implementing AI/Generative AI for network operations and products",
      "Managing version upgrades, agent deployments, and custom business transactions",
      "Collaborating with Command Centers, Application, and Infra teams on monitoring strategy",
    ],
    color: "#00d4ff",
    current: true,
  },
  {
    period: "2016 — 2019",
    company: "Cognizant",
    role: "Sr. Infra Developer / Senior Systems Engineer",
    location: "India",
    highlights: [
      "Expertise in CA monitoring tools — Spectrum, eHealth, PM, VNA",
      "Custom business transaction monitoring and alerting",
      "Managed monitoring infrastructure across enterprise environments",
      "Collaborated with cross-functional teams on incident management",
    ],
    color: "#22c55e",
    current: false,
  },
  {
    period: "2014 — 2016",
    company: "Oracle",
    role: "System Engineer",
    location: "India",
    highlights: [
      "Enterprise monitoring and infrastructure management",
      "Implemented monitoring solutions across server and network environments",
      "Contributed to monitoring strategy and tool administration",
    ],
    color: "#a855f7",
    current: false,
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-16 sm:py-24 px-4 sm:px-6 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-10 sm:mb-12">
            <span className="font-[family-name:var(--font-geist-mono)] text-green text-sm">
              04.
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Experience</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-green/30 to-transparent" />
          </div>
        </motion.div>

        <div className="relative">
          <div className="absolute left-5 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-green to-purple hidden md:block" />

          <div className="space-y-6 sm:space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
                className="relative md:pl-14 lg:pl-16"
              >
                <div
                  className="hidden md:flex absolute left-3 sm:left-4 top-5 sm:top-6 w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 items-center justify-center"
                  style={{
                    borderColor: exp.color,
                    backgroundColor: exp.current ? exp.color : "transparent",
                  }}
                >
                  {exp.current && (
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-background rounded-full" />
                  )}
                </div>

                <div
                  className="bg-surface rounded-lg border border-card-border p-5 sm:p-6 hover:border-opacity-50 transition-all"
                  style={{
                    borderColor: exp.current ? `${exp.color}30` : undefined,
                  }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 sm:mb-4 gap-2">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Briefcase
                          className="w-4 h-4"
                          style={{ color: exp.color }}
                        />
                        <span
                          className="text-xs sm:text-sm font-[family-name:var(--font-geist-mono)]"
                          style={{ color: exp.color }}
                        >
                          {exp.period}
                        </span>
                        {exp.current && (
                          <span className="px-2 py-0.5 rounded-full text-xs bg-green/10 text-green border border-green/20">
                            Current
                          </span>
                        )}
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-foreground">
                        {exp.company}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted">{exp.role}</p>
                    </div>
                    <span className="text-xs text-muted font-[family-name:var(--font-geist-mono)]">
                      {exp.location}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, hi) => (
                      <li
                        key={hi}
                        className="flex items-start gap-2 text-xs sm:text-sm text-muted"
                      >
                        <ChevronRight
                          className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 flex-shrink-0"
                          style={{ color: exp.color }}
                        />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
