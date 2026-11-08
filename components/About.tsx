"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const highlights = [
  {
    title: "Network Automation",
    desc: "Python, REST APIs, SNMP, Netmiko, and async/concurrent automation across Cisco, Aruba, F5, Infoblox, and ISE.",
  },
  {
    title: "Observability",
    desc: "Grafana, Prometheus, VictoriaMetrics, Telegraf, LogicMonitor, Splunk — telemetry pipelines and dashboards.",
  },
  {
    title: "Platform Engineering",
    desc: "Kubernetes, containers, ArgoCD, Git, CI/CD, and infrastructure automation.",
  },
  {
    title: "AI-Assisted Engineering",
    desc: "AI agents, MCP, and LLM-driven workflows for network operations and troubleshooting.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-6 sm:px-12 mx-auto max-w-3xl">
      <SectionHeading number="01" title="About Me" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="space-y-4 leading-relaxed">
          <p>
            I&apos;m a Network Automation &amp; Observability Engineer with{" "}
            <span className="text-accent">13+ years</span> of experience building and
            modernizing enterprise monitoring, telemetry, and network automation
            solutions.
          </p>
          <p>
            At <span className="text-foreground font-medium">Lowe&apos;s India</span>, I&apos;ve
            led large-scale network observability initiatives — including the end-to-end
            LogicMonitor implementation and migration, and open-source telemetry solutions
            using{" "}
            <span className="text-foreground font-medium">
              Telegraf, Prometheus, VictoriaMetrics, and Grafana
            </span>
            . I&apos;m also the creator of{" "}
            <span className="text-accent">Argus</span>, an open-source network monitoring
            and alert aggregation solution.
          </p>
          <p>
            My current focus is Python-based network automation and API integrations
            across Cisco, Aruba, F5, Infoblox, Cisco ISE, ACI, and SD-WAN/uCPE platforms —
            including a Nautobot network source of truth running automation jobs on
            Kubernetes — along with AI-assisted operations using agents, MCP, and LLMs.
          </p>
        </div>

        <ul className="mt-10 grid sm:grid-cols-2 gap-6">
          {highlights.map((item) => (
            <li key={item.title} className="flex gap-3">
              <span className="text-accent mt-1" aria-hidden="true">
                ▸
              </span>
              <div>
                <h3 className="text-foreground text-sm font-medium mb-1">{item.title}</h3>
                <p className="text-sm leading-relaxed">{item.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
