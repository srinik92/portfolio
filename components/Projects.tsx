"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GitBranch, Eye, Cpu, Brain, ArrowRight } from "lucide-react";

const projects = [
  {
    id: "argus",
    title: "Argus",
    subtitle: "Open-Source Network Monitoring Framework",
    icon: Eye,
    color: "#00d4ff",
    role: "Creator & Active Contributor",
    description:
      "A comprehensive alert aggregation and incident management platform for network operations. Argus unifies alerts from multiple monitoring sources into a single dashboard, enabling NOC teams to manage incidents efficiently.",
    features: [
      "Alert aggregation from multiple monitoring sources",
      "Unified dashboard with custom notification profiles",
      "REST API for seamless integration",
      "Automated escalation workflows",
      "Open source — hosted on Bitbucket",
    ],
    tech: ["Python", "REST APIs", "Docker", "Grafana", "Alarm Forwarding"],
    flow: [
      { label: "Monitoring Sources", color: "#6b7280" },
      { label: "Argus Aggregator", color: "#00d4ff" },
      { label: "NOC Dashboard", color: "#22c55e" },
      { label: "Alert Notifications", color: "#a855f7" },
    ],
  },
  {
    id: "observability",
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 px-6 relative" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,#00d4ff08_0%,transparent_50%)]" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-12">
            <span className="font-[family-name:var(--font-geist-mono)] text-[#22c55e] text-sm">
              03.
            </span>
            <h2 className="text-3xl font-bold text-[#ededed]">Projects</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-[#22c55e]/30 to-transparent" />
          </div>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
              className="bg-[#111827] rounded-xl border border-[#1f2937] overflow-hidden hover:border-opacity-50 transition-all group"
              style={{ borderColor: `${project.color}15` }}
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${project.color}15` }}
                    >
                      <project.icon
                        className="w-6 h-6"
                        style={{ color: project.color }}
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#ededed]">
                        {project.title}
                      </h3>
                      <p
                        className="text-sm font-[family-name:var(--font-geist-mono)]"
                        style={{ color: project.color }}
                      >
                        {project.subtitle}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs text-[#6b7280] font-[family-name:var(--font-geist-mono)] bg-[#1f2937] px-3 py-1 rounded-full hidden md:block">
                    {project.role}
                  </span>
                </div>

                <p className="text-[#6b7280] leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Flow Diagram */}
                <div className="mb-6 p-4 bg-[#0a0a0a] rounded-lg border border-[#1f2937]">
                  <div className="flex items-center justify-center gap-2 flex-wrap">
                    {project.flow.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-center gap-2">
                        <span
                          className="px-3 py-1.5 rounded text-xs font-[family-name:var(--font-geist-mono)] font-medium"
                          style={{
                            backgroundColor: `${step.color}15`,
                            color: step.color,
                            border: `1px solid ${step.color}30`,
                          }}
                        >
                          {step.label}
                        </span>
                        {stepIndex < project.flow.length - 1 && (
                          <ArrowRight className="w-4 h-4 text-[#6b7280] flex-shrink-0" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded text-xs font-[family-name:var(--font-geist-mono)] bg-[#1f2937] text-[#6b7280]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {project.features.map((feature, fi) => (
                    <li
                      key={fi}
                      className="flex items-start gap-2 text-sm text-[#6b7280]"
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
          ))}
        </div>
      </div>
    </section>
  );
}
