"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const posts = [
  {
    number: "01",
    title: "Building Argus: An Open-Source Network Monitoring Framework",
    excerpt:
      "Argus is an alert aggregator for network management systems, designed for NOCs to aggregate incidents from multiple monitoring applications into a single unified dashboard.",
    fullText:
      "Argus is an alert aggregator for network management systems, designed for NOCs to aggregate incidents from multiple monitoring applications into a single unified dashboard. Originally developed by Sikt (Norway) in 2019, Argus follows a REST API-first architecture where source systems report incidents, and users create notification profiles to subscribe to specific alerts. With Argus 2.0 (released May 2025), the platform introduced a completely redesigned HTMx-backed PWA frontend, custom workflows, and dynamic dashboard columns — making it production-ready for NOCs at GÉANT, SUNET, and REANNZ. This post covers the architecture, API design, and lessons learned from deploying alert aggregation at enterprise scale.",
    date: "Coming Soon",
    tags: ["Argus", "Open Source", "NOC", "Alert Aggregation"],
    color: "#00d4ff",
  },
  {
    number: "02",
    title: "Telegraf → VictoriaMetrics → Grafana: Our Observability Stack",
    excerpt:
      "A deep dive into building a production-grade telemetry pipeline using Telegraf for collection, VictoriaMetrics for time-series storage, and Grafana for visualization.",
    fullText:
      "A deep dive into building a production-grade telemetry pipeline using Telegraf for collection, VictoriaMetrics for time-series storage, and Grafana for visualization. Telegraf's plugin architecture supports 300+ input plugins including SNMP, HTTP, and TCP, making it ideal for heterogeneous network environments. VictoriaMetrics offers up to 7x less disk usage and 5x less RAM compared to Prometheus, with native PromQL support and 1-year+ retention without performance degradation. Combined with OpenTelemetry Collector for metric enrichment and processing, this stack handles thousands of samples per second while keeping infrastructure costs minimal. This post walks through the architecture, deployment with Docker Compose, and dashboard provisioning strategies.",
    date: "Coming Soon",
    tags: ["Telegraf", "VictoriaMetrics", "Grafana", "Observability"],
    color: "#22c55e",
  },
  {
    number: "03",
    title: "Implementing AI in Network Operations",
    excerpt:
      "The network industry is rapidly moving from reactive monitoring to proactive, AI-driven operations with agentic AI systems.",
    fullText:
      "The network industry is rapidly moving from reactive monitoring to proactive, AI-driven operations. Companies like Deutsche Telekom (MINDR), HPE Juniper (Marvis), Nokia (Assurance Center), and Extreme Networks (Agent ONE) are deploying agentic AI systems that autonomously diagnose, triage, and remediate network issues. These systems use specialized AI agents — event triage agents, anomaly reasoners, KPI selectors, and action recommenders — that collaborate to reduce mean-time-to-resolution by 50-80%. Deutsche Telekom's RAN Guardian Agent autonomously triggered 100+ remediation actions in its first month, reducing major event management from hours to under a minute. This post explores the architecture patterns, real-world deployments, and practical steps for implementing AIOps in enterprise network teams.",
    date: "Coming Soon",
    tags: ["AIOps", "AI Agents", "Network Automation", "GenAI"],
    color: "#a855f7",
  },
  {
    number: "04",
    title: "From Monitoring to Observability: A Network Engineer's Journey",
    excerpt:
      "Traditional network monitoring tells you when something is down. Observability tells you why.",
    fullText:
      "Traditional network monitoring tells you when something is down. Observability tells you why. Over 11+ years in network operations, I've witnessed the evolution from CA Spectrum and eHealth dashboards to modern OpenTelemetry-based observability platforms. The shift isn't just technical — it's cultural. It means moving from alert-driven firefighting to telemetry-driven engineering, where SNMP polls, syslog streams, and API metrics are enriched with context from source-of-truth systems like Nautobot. This post reflects on that journey: from manual tool administration to building automated telemetry pipelines, from isolated monitoring silos to unified observability platforms, and from reactive operations to AI-assisted network engineering.",
    date: "Coming Soon",
    tags: ["Career", "Monitoring", "Observability", "OpenTelemetry"],
    color: "#f59e0b",
  },
];

export default function Blog() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="blog" className="py-16 sm:py-24 relative">
      {/* Section watermark */}
      <div className="section-watermark" aria-hidden="true">06</div>

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="mb-10 sm:mb-12">
            <span className="eyebrow block mb-2">06 — Blog</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground tracking-tight">
              Blog
            </h2>
          </div>
        </motion.div>

        <div className="border-t border-card-border">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: 0.05 + index * 0.08, ease: "easeOut" }}
              className="border-b border-card-border py-6"
            >
              <div className="flex items-start gap-4 sm:gap-6">
                <span
                  className="text-2xl sm:text-3xl font-black font-[family-name:var(--font-geist-mono)] w-12"
                  style={{ color: post.color }}
                >
                  {post.number}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs text-muted font-[family-name:var(--font-geist-mono)]">
                      {post.date}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-3">
                    {expandedIndex === index ? post.fullText : post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 rounded-none text-xs font-[family-name:var(--font-geist-mono)]"
                        style={{
                          backgroundColor: `${post.color}08`,
                          color: post.color,
                          border: `1px solid ${post.color}15`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                    className="flex items-center gap-2 text-sm font-medium transition-colors group"
                    style={{ color: post.color }}
                  >
                    {expandedIndex === index ? "Show Less" : "Read More"}
                    <motion.div
                      animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
