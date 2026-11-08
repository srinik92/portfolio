"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const categories = [
  {
    title: "Network Automation & APIs",
    skills: [
      "Python",
      "REST APIs",
      "SNMP",
      "Netmiko",
      "Async/Concurrent Automation",
      "Bash",
      "SQL",
    ],
  },
  {
    title: "Observability & Monitoring",
    skills: [
      "Grafana",
      "Prometheus",
      "VictoriaMetrics",
      "Telegraf",
      "LogicMonitor",
      "Splunk",
      "API Monitoring",
    ],
  },
  {
    title: "Network Platforms",
    skills: [
      "Cisco",
      "Aruba",
      "Cisco ACI",
      "Cisco ISE",
      "F5",
      "Infoblox",
      "SD-WAN",
      "uCPE",
      "Nautobot",
    ],
  },
  {
    title: "Platform Engineering & DevOps",
    skills: [
      "Kubernetes",
      "Docker",
      "ArgoCD",
      "Git",
      "CI/CD",
      "Infrastructure Automation",
    ],
  },
  {
    title: "AI-Assisted Engineering",
    skills: [
      "AI Agents",
      "MCP",
      "LLMs",
      "AIOps",
      "Generative AI",
      "Claude Code",
    ],
  },
  {
    title: "Source of Truth & IT Ops",
    skills: [
      "Nautobot",
      "ITSM Integrations",
      "Configuration Management",
      "Device Discovery",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 sm:px-12">
      <div className="mx-auto max-w-3xl">
        <SectionHeading number="04" title="Technologies I Work With" />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5 }}
          className="grid sm:grid-cols-2 gap-5"
        >
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="rounded border border-border bg-surface p-5 transition-colors hover:border-accent/40"
            >
              <h3 className="text-sm font-medium text-foreground mb-3">{cat.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <li
                    key={skill}
                    className="font-mono text-xs text-accent bg-accent-dim rounded px-2.5 py-1"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
