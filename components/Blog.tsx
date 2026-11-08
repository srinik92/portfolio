"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const posts = [
  {
    title: "Building Argus: An Open-Source Network Monitoring Framework",
    excerpt:
      "Argus is an alert aggregator for network management systems, designed for NOCs to aggregate incidents from multiple monitoring applications into a single unified dashboard.",
    date: "Coming Soon",
    tags: ["Argus", "Open Source", "NOC"],
  },
  {
    title: "Telegraf → VictoriaMetrics → Grafana: Our Observability Stack",
    excerpt:
      "A deep dive into building a production-grade telemetry pipeline using Telegraf for collection, VictoriaMetrics for time-series storage, and Grafana for visualization.",
    date: "Coming Soon",
    tags: ["Telegraf", "VictoriaMetrics", "Grafana"],
  },
  {
    title: "Implementing AI in Network Operations",
    excerpt:
      "The network industry is rapidly moving from reactive monitoring to proactive, AI-driven operations with agentic AI systems.",
    date: "Coming Soon",
    tags: ["AIOps", "AI Agents", "GenAI"],
  },
  {
    title: "From Monitoring to Observability: A Network Engineer's Journey",
    excerpt:
      "Traditional network monitoring tells you when something is down. Observability tells you why.",
    date: "Coming Soon",
    tags: ["Career", "Monitoring", "OpenTelemetry"],
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-20 px-6 sm:px-12 mx-auto max-w-3xl">
      <SectionHeading number="06" title="Writing" />

      <div className="border-t border-border">
        {posts.map((post, index) => (
          <motion.article
            key={post.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            className="py-6 border-b border-border"
          >
            <p className="font-mono text-xs mb-2">{post.date}</p>
            <h3 className="text-lg font-medium text-foreground mb-2">
              <span className="hover:text-accent transition-colors">{post.title}</span>
            </h3>
            <p className="text-sm leading-relaxed mb-3">{post.excerpt}</p>
            <ul className="flex flex-wrap gap-x-4 gap-y-1.5 font-mono text-xs text-muted">
              {post.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
