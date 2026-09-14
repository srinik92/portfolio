"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { GitBranch, Eye, Cpu, Brain, ArrowRight } from "lucide-react";

const projects = [
  {
    id: "argus",
    number: "01",
    title: "Argus",
    subtitle: "Open-Source Network Monitoring Solution",
    icon: Eye,
    color: "#00d4ff",
    role: "Creator & Active Contributor",
    description:
      "A comprehensive open-source network monitoring solution for alert aggregation and incident management. Argus unifies alerts from multiple monitoring sources into a single dashboard, enabling NOC teams to manage incidents efficiently.",
    features: [
      "Alert aggregation from multiple monitoring sources",
      "Unified dashboard with custom notification profiles",
      "REST API for seamless integration",
      "Automated escalation workflows",
      "Open source — hosted on Bitbucket",
      "Active since January 2026",
    ],
    tech: ["Python", "REST APIs", "Docker", "Grafana", "Alarm Forwarding", "Telegraf"],
    flow: [
      { label: "Monitoring Sources", color: "#6b7280" },
      { label: "Argus Aggregator", color: "#00d4ff" },
      { label: "NOC Dashboard", color: "#22c55e" },
      { label: "Alert Notifications", color: "#a855f7" },
    ],
  },
  {
    id: "observability",
    number: "02",
    title: "Observability Stack",
    subtitle: "Telegraf > VictoriaMetrics > Grafana",
    icon: GitBranch,
    color: "#22c55e",
    role: "Architect & Builder",
    description:
      "End-to-end telemetry pipeline for network performance monitoring. Custom collectors gather metrics via SNMP and APIs, storing them in a high-performance time-series database for real-time visualization.",
    features: [
      "Telegraf collectors for SNMP and API-based metrics",
      "VictoriaMetrics for high-performance time-series storage",
      "Grafana dashboards with custom alerting",
      "Scalable architecture for enterprise environments",
    ],
    tech: ["Telegraf", "VictoriaMetrics", "Grafana", "SNMP", "Python"],
    flow: [
      { label: "Telegraf", color: "#22c55e" },
      { label: "VictoriaMetrics", color: "#00d4ff" },
      { label: "Grafana", color: "#a855f7" },
      { label: "Alerts & Dashboards", color: "#f59e0b" },
    ],
  },
  {
    id: "cicd",
    number: "03",
    title: "CI/CD Pipeline",
    subtitle: "Automated Monitoring Deployment",
    icon: Cpu,
    color: "#a855f7",
    role: "Pipeline Architect",
    description:
      "Fully automated deployment pipeline for monitoring infrastructure. From code commit to production, every change flows through a controlled pipeline with containerized deployments and automated alarm routing.",
    features: [
      "Bitbucket source control integration",
      "Docker containerized deployments",
      "Automated Grafana dashboard provisioning",
      "Vanguard alarm forwarding to Remedy ticketing",
    ],
    tech: ["Bitbucket", "Loci", "Docker", "Grafana", "Vanguard", "Remedy"],
    flow: [
      { label: "Bitbucket", color: "#6b7280" },
      { label: "Loci (CI)", color: "#00d4ff" },
      { label: "Docker", color: "#22c55e" },
      { label: "Grafana", color: "#a855f7" },
      { label: "Vanguard", color: "#f59e0b" },
      { label: "Remedy", color: "#ef4444" },
    ],
  },
  {
    id: "ai-networking",
    number: "04",
    title: "AI in Networking",
    subtitle: "Intelligent Network Operations",
    icon: Brain,
    color: "#f59e0b",
    role: "AI Implementation Lead",
    description:
      "Bringing Generative AI and AIOps to the network team. Leveraging AI for intelligent troubleshooting, anomaly detection, documentation, and overall engineering productivity enhancement.",
    features: [
      "AI-driven network anomaly detection",
      "Generative AI for troubleshooting assistance",
      "Automated documentation generation",
      "Predictive network performance analytics",
    ],
    tech: ["Generative AI", "AIOps", "Python", "LLMs", "Machine Learning"],
    flow: [
      { label: "Network Data", color: "#6b7280" },
      { label: "AI Engine", color: "#f59e0b" },
      { label: "Insights", color: "#00d4ff" },
      { label: "Automated Actions", color: "#22c55e" },
    ],
  },
];

export default function Projects() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="projects" className="py-16 sm:py-24 relative">
      {/* Section watermark */}
      <div className="section-watermark" aria-hidden="true">03</div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="mb-10 sm:mb-12">
            <span className="eyebrow block mb-2">03 — Projects</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground tracking-tight">
              Projects
            </h2>
          </div>
        </motion.div>

        {/* Editorial rows */}
        <div className="border-t border-card-border">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: 0.05 + index * 0.08, ease: "easeOut" }}
              className="border-b border-card-border"
            >
              <button
                onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
                className="w-full text-left py-6 flex items-center gap-4 sm:gap-6 group hover:bg-surface/50 transition-colors px-2 -mx-2"
              >
                <span
                  className="text-2xl sm:text-3xl font-black font-[family-name:var(--font-geist-mono)] w-12"
                  style={{ color: project.color }}
                >
                  {project.number}
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted font-[family-name:var(--font-geist-mono)]">
                    {project.subtitle}
                  </p>
                </div>
                <span className="text-xs text-muted font-[family-name:var(--font-geist-mono)] hidden sm:block">
                  {project.role}
                </span>
                <motion.div
                  animate={{ rotate: expandedId === project.id ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight className="w-4 h-4 text-muted" />
                </motion.div>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: expandedId === project.id ? "auto" : 0,
                  opacity: expandedId === project.id ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pb-6 px-2 -mx-2 pl-16 sm:pl-[4.5rem]">
                  <p className="text-muted leading-relaxed mb-4 text-sm sm:text-base">
                    {project.description}
                  </p>

                  {/* Flow Diagram */}
                  <div className="mb-4 p-3 bg-background border border-card-border">
                    <div className="flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap">
                      {project.flow.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex items-center gap-1.5 sm:gap-2">
                          <span
                            className="px-2 sm:px-3 py-1 sm:py-1.5 rounded-none text-[10px] sm:text-xs font-[family-name:var(--font-geist-mono)] font-medium"
                            style={{
                              backgroundColor: `${step.color}10`,
                              color: step.color,
                              border: `1px solid ${step.color}25`,
                            }}
                          >
                            {step.label}
                          </span>
                          {stepIndex < project.flow.length - 1 && (
                            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-muted flex-shrink-0" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 rounded-none text-xs font-[family-name:var(--font-geist-mono)] bg-surface-light/50 text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-1.5">
                    {project.features.map((feature, fi) => (
                      <li
                        key={fi}
                        className="flex items-start gap-2 text-xs sm:text-sm text-muted"
                      >
                        <span style={{ color: project.color }} className="mt-0.5">
                          ▸
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
