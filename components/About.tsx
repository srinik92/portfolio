"use client";

import { motion } from "framer-motion";
import { Network, Eye, Cloud, Brain } from "lucide-react";

const highlights = [
  {
    icon: Network,
    title: "Network Automation",
    desc: "Python, REST APIs, SNMP, Netmiko, async/concurrent automation across Cisco, Aruba, F5, Infoblox, ISE, ACI",
  },
  {
    icon: Eye,
    title: "Observability",
    desc: "Grafana, Prometheus, VictoriaMetrics, Telegraf, LogicMonitor, Splunk — telemetry pipelines and dashboards",
  },
  {
    icon: Cloud,
    title: "Platform Engineering",
    desc: "Kubernetes, containers, ArgoCD, Git, CI/CD and infrastructure automation",
  },
  {
    icon: Brain,
    title: "AI-Assisted Engineering",
    desc: "AI agents, MCP, LLMs, and context-driven workflows for network automation and troubleshooting",
  },
];

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 px-6 relative">
      {/* Section watermark */}
      <div className="section-watermark" aria-hidden="true">01</div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="mb-10 sm:mb-12">
            <span className="eyebrow block mb-2">01 — About</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground tracking-tight">
              About Me
            </h2>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="font-[family-name:var(--font-geist-mono)] text-sm text-muted space-y-2 bg-surface p-6 border border-card-border">
              <p>
                <span className="text-green">const</span>{" "}
                <span className="text-accent">engineer</span> = {"{"}
              </p>
              <p className="pl-4">
                <span className="text-purple">role</span>:{" "}
                <span className="text-green">&quot;Senior Software Engineer&quot;</span>,
              </p>
              <p className="pl-4">
                <span className="text-purple">location</span>:{" "}
                <span className="text-green">&quot;Bengaluru, India&quot;</span>,
              </p>
              <p className="pl-4">
                <span className="text-purple">experience</span>:{" "}
                <span className="text-accent">11</span>,
              </p>
              <p className="pl-4">
                <span className="text-purple">currentCompany</span>:{" "}
                <span className="text-green">&quot;Lowe&apos;s India&quot;</span>,
              </p>
              <p className="pl-4">
                <span className="text-purple">focus</span>: [
                <span className="text-green">&quot;automation&quot;</span>,{" "}
                <span className="text-green">&quot;observability&quot;</span>,{" "}
                <span className="text-green">&quot;AI&quot;</span>],
              </p>
              <p>{"};"}</p>
            </div>

            <p className="text-muted leading-relaxed text-sm sm:text-base">
              I&apos;m a Network Automation & Observability Engineer with{" "}
              <span className="text-accent">11+ years</span> of experience building and
              modernizing enterprise monitoring, telemetry, and network automation solutions.
            </p>
            <p className="text-muted leading-relaxed text-sm sm:text-base">
              At <span className="text-foreground font-medium">Lowe&apos;s India</span>, I&apos;ve
              worked across large-scale network observability initiatives, including the
              end-to-end implementation and migration to{" "}
              <span className="text-green">LogicMonitor</span> and the development of
              open-source telemetry solutions using{" "}
              <span className="text-green">Telegraf, Prometheus, VictoriaMetrics, and Grafana</span>.
            </p>
            <p className="text-muted leading-relaxed text-sm sm:text-base">
              My current focus includes Python-based network automation and API integrations
              across <span className="text-accent">Cisco, Aruba, F5, Infoblox, Cisco ISE,
              ACI, SD-WAN/uCPE platforms, and Nautobot</span>. I build solutions for
              automated data collection, device discovery, configuration workflows,
              telemetry pipelines, and AI-assisted operations.
            </p>
          </motion.div>

          <div className="space-y-3">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.12, ease: "easeOut" }}
                className="accent-bar py-4 border-b border-card-border group cursor-default"
              >
                <div className="flex items-start gap-4">
                  <item.icon className="w-5 h-5 text-accent mt-0.5 group-hover:text-green transition-colors flex-shrink-0" />
                  <div>
                    <h3 className="text-sm font-bold text-foreground mb-1">{item.title}</h3>
                    <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
