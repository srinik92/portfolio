"use client";

import { motion } from "framer-motion";
import { Briefcase, ChevronRight } from "lucide-react";

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
    color: "#00d4ff",
    current: true,
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
    color: "#22c55e",
    current: false,
  },
  {
    period: "Oct 2017 — Dec 2019",
    company: "Cognizant",
    role: "Sr. Infra Developer",
    location: "Bengaluru, India",
    highlights: [
      "Tech lead in monitoring tools domain",
      "Expertise in CA Vendor Tools profilio",
      "Hands-on experience on CA Spectrum, eHealth, VNA, NFA and PM",
      "Managed monitoring infrastructure across enterprise environments",
    ],
    color: "#a855f7",
    current: false,
  },
  {
    period: "May 2015 — Oct 2017",
    company: "Cognizant",
    role: "Senior Systems Engineer",
    location: "Bengaluru, India",
    highlights: [
      "Expertise in CA monitoring tools — Spectrum, eHealth, BPPM(MOM)",
      "Custom business transaction monitoring and alerting",
      "Collaborated with cross-functional teams on incident management",
    ],
    color: "#f59e0b",
    current: false,
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
    color: "#ef4444",
    current: false,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-24 relative">
      {/* Section watermark */}
      <div className="section-watermark" aria-hidden="true">04</div>

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="mb-10 sm:mb-12">
            <span className="eyebrow block mb-2">04 — Experience</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground tracking-tight">
              Experience
            </h2>
          </div>
        </motion.div>

        <div className="border-t border-card-border">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.role}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: 0.05 + index * 0.08, ease: "easeOut" }}
              className="border-b border-card-border py-6 group"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="flex items-center gap-3 sm:w-48 flex-shrink-0">
                  <Briefcase
                    className="w-4 h-4"
                    style={{ color: exp.color }}
                  />
                  <span
                    className="text-xs font-[family-name:var(--font-geist-mono)]"
                    style={{ color: exp.color }}
                  >
                    {exp.period}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-foreground">
                        {exp.company}
                      </h3>
                      <p className="text-sm text-muted">{exp.role}</p>
                      <p className="text-xs text-muted font-[family-name:var(--font-geist-mono)] mt-1">
                        {exp.location}
                      </p>
                    </div>
                    {exp.current && (
                      <span className="px-2 py-0.5 rounded-none text-xs bg-green/10 text-green border border-green/20 flex-shrink-0">
                        Current
                      </span>
                    )}
                  </div>
                  <ul className="mt-3 space-y-1.5">
                    {exp.highlights.map((highlight, hi) => (
                      <li
                        key={hi}
                        className="flex items-start gap-2 text-xs sm:text-sm text-muted"
                      >
                        <ChevronRight
                          className="w-3.5 h-3.5 mt-0.5 flex-shrink-0"
                          style={{ color: exp.color }}
                        />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
