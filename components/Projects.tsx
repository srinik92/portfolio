"use client";

import { motion } from "framer-motion";
import { Folder, ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    title: "Argus",
    subtitle: "Open-Source Network Monitoring Solution",
    link: "",
    tech: ["Python", "REST APIs", "Docker", "Grafana", "Telegraf", "Bitbucket"],
    description:
      "Creator & active contributor. A comprehensive open-source network monitoring solution for alert aggregation and incident management, unifying alerts from multiple monitoring sources into a single NOC dashboard with custom notification profiles and automated escalation workflows.",
  },
  {
    title: "Observability Stack",
    subtitle: "Telegraf → VictoriaMetrics → Grafana",
    link: "",
    tech: ["Telegraf", "VictoriaMetrics", "Grafana", "SNMP", "Python"],
    description:
      "Architect & builder. End-to-end telemetry pipeline for network performance monitoring — custom collectors gathering metrics via SNMP and APIs, stored in a high-performance time-series database with real-time dashboard visualization.",
  },
  {
    title: "CI/CD Pipeline",
    subtitle: "Automated Monitoring Deployment",
    link: "",
    tech: ["Bitbucket", "Docker", "Grafana", "Remedy"],
    description:
      "Pipeline architect. Fully automated deployment pipeline for monitoring infrastructure — code-to-production flow with containerized deployments, automated Grafana dashboard provisioning, and alarm forwarding to Remedy ticketing.",
  },
  {
    title: "AI in Networking",
    subtitle: "Intelligent Network Operations",
    link: "",
    tech: ["Generative AI", "AIOps", "Python", "LLMs"],
    description:
      "AI implementation lead. Bringing Generative AI and AIOps to the network team — intelligent troubleshooting, anomaly detection, automated documentation generation, and predictive performance analytics.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 sm:px-12">
      <div className="mx-auto max-w-3xl">
        <SectionHeading number="03" title="What I've Built" />

        <div className="grid sm:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group flex flex-col rounded border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center justify-between mb-5">
                <Folder className="w-8 h-8 text-accent" />
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title} link`}
                    className="text-muted hover:text-accent transition-colors"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                ) : null}
              </div>

              <h3 className="text-lg font-medium text-foreground group-hover:text-accent transition-colors mb-1">
                {project.title}
              </h3>
              <p className="font-mono text-xs mb-4">{project.subtitle}</p>
              <p className="text-sm leading-relaxed mb-5 flex-1">{project.description}</p>
              <ul className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-xs text-muted">
                {project.tech.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
