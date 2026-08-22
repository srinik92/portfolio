"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const categories = [
  {
    title: "Network Monitoring & Observability",
    color: "#00d4ff",
    skills: [
      "Telegraf",
      "VictoriaMetrics",
      "Grafana",
      "Prometheus",
      "LogicMonitor",
      "CA Spectrum",
      "CA eHealth",
      "BMC TrueSight",
      "SCOM",
      "Splunk",
      "SNMP",
      "API Monitoring",
    ],
  },
  {
    title: "Automation & DevOps",
    color: "#22c55e",
    skills: [
      "Python",
      "Bash",
      "Kubernetes",
      "Docker",
      "Terraform",
      "Ansible",
      "CI/CD Pipelines",
      "Bitbucket",
      "Infrastructure as Code",
      "GitOps",
    ],
  },
  {
    title: "AI & Machine Learning",
    color: "#a855f7",
    skills: [
      "Generative AI",
      "AIOps",
      "AI-Driven Analytics",
      "Anomaly Detection",
      "Predictive Monitoring",
      "LLM Integration",
    ],
  },
  {
    title: "Platforms & Infrastructure",
    color: "#f59e0b",
    skills: [
      "Linux",
      "Windows Server",
      "AWS",
      "Networking",
      "TCP/IP",
      "DNS/DHCP",
      "VLANs/VPN",
      "Enterprise Monitoring",
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 px-6 relative" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#22c55e08_0%,transparent_50%)]" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-12">
            <span className="font-[family-name:var(--font-geist-mono)] text-[#22c55e] text-sm">
              02.
            </span>
            <h2 className="text-3xl font-bold text-[#ededed]">Skills</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-[#22c55e]/30 to-transparent" />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((cat, catIndex) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + catIndex * 0.1 }}
              className="bg-[#111827] rounded-lg border border-[#1f2937] p-6 hover:border-opacity-50 transition-all"
              style={{
                borderColor: `${cat.color}22`,
              }}
            >
              <h3
                className="text-sm font-bold font-[family-name:var(--font-geist-mono)] mb-4"
                style={{ color: cat.color }}
              >
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: 0.4 + catIndex * 0.1 + skillIndex * 0.03,
                    }}
                    className="px-3 py-1.5 rounded text-xs font-[family-name:var(--font-geist-mono)] transition-all cursor-default hover:scale-105"
                    style={{
                      backgroundColor: `${cat.color}10`,
                      color: cat.color,
                      border: `1px solid ${cat.color}20`,
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
