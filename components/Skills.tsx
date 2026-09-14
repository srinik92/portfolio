"use client";

import { motion } from "framer-motion";

const allSkills = [
  "Python", "REST APIs", "SNMP", "Netmiko", "Grafana", "Prometheus",
  "VictoriaMetrics", "Telegraf", "LogicMonitor", "Splunk", "Cisco",
  "Aruba", "ACI", "ISE", "F5", "Infoblox", "SD-WAN", "Nautobot",
  "Kubernetes", "Docker", "ArgoCD", "Git", "CI/CD", "AI Agents",
  "MCP", "LLMs", "AIOps", "Generative AI", "Prompt Engineering",
];

const categories = [
  {
    title: "Network Automation & APIs",
    color: "#00d4ff",
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
    color: "#22c55e",
    skills: [
      "Grafana",
      "Prometheus",
      "VictoriaMetrics",
      "Telegraf",
      "LogicMonitor",
      "Splunk",
      "SNMP",
      "API Monitoring",
    ],
  },
  {
    title: "Network Platforms",
    color: "#a855f7",
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
      "NetMRI",
    ],
  },
  {
    title: "Platform Engineering & DevOps",
    color: "#f59e0b",
    skills: [
      "Kubernetes",
      "Docker",
      "ArgoCD",
      "Git",
      "CI/CD",
      "Infrastructure Automation",
      "Containers",
    ],
  },
  {
    title: "AI-Assisted Engineering",
    color: "#3b82f6",
    skills: [
      "AI Agents",
      "MCP",
      "LLMs",
      "Context-Driven Workflows",
      "AIOps",
      "Generative AI",
      "Prompt Engineering",
      "Claude Code",
      "OpenCode",
    ],
  },
  {
    title: "Source of Truth & IT Ops",
    color: "#ef4444",
    skills: [
      "Nautobot",
      "NetMRI",
      "ITSM Integrations",
      "LogicMonitor",
      "Configuration Management",
      "Device Discovery",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Section watermark */}
      <div className="section-watermark" aria-hidden="true">02</div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="mb-10 sm:mb-12">
            <span className="eyebrow block mb-2">02 — Skills</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground tracking-tight">
              Skills
            </h2>
          </div>
        </motion.div>

        {/* Marquee ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-12 overflow-hidden border-y border-card-border py-4"
        >
          <div className="flex animate-marquee whitespace-nowrap">
            {[...allSkills, ...allSkills].map((skill, i) => (
              <span
                key={i}
                className="mx-4 text-sm font-[family-name:var(--font-geist-mono)] text-muted/60"
              >
                {skill}
                <span className="ml-4 text-accent/40">•</span>
              </span>
            ))}
          </div>
        </motion.div>

        {/* Category grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat, catIndex) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: 0.1 + catIndex * 0.1, ease: "easeOut" }}
              className="border border-card-border p-5 hover:border-accent/30 transition-all group"
            >
              <h3
                className="text-xs font-bold font-[family-name:var(--font-geist-mono)] uppercase tracking-wider mb-4"
                style={{ color: cat.color }}
              >
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 rounded-none text-xs font-[family-name:var(--font-geist-mono)] transition-all cursor-default hover:bg-accent/10"
                    style={{
                      backgroundColor: `${cat.color}08`,
                      color: cat.color,
                      border: `1px solid ${cat.color}15`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
