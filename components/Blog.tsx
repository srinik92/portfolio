"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Calendar } from "lucide-react";

const posts = [
  {
    title: "Building Argus: An Open-Source Network Monitoring Framework",
    excerpt:
      "How I designed and built a unified alert aggregation platform for NOC teams, from concept to production deployment.",
    date: "Coming Soon",
    tags: ["Argus", "Open Source", "Network Monitoring"],
    color: "#00d4ff",
  },
  {
    title: "Telegraf → VictoriaMetrics → Grafana: Our Observability Stack",
    excerpt:
      "Deep dive into the architecture and implementation of our end-to-end telemetry pipeline for enterprise network monitoring.",
    date: "Coming Soon",
    tags: ["Telegraf", "VictoriaMetrics", "Grafana", "Observability"],
    color: "#22c55e",
  },
  {
    title: "Implementing AI in Network Operations",
    excerpt:
      "Exploring how Generative AI and AIOps are transforming network troubleshooting, documentation, and operational efficiency.",
    date: "Coming Soon",
    tags: ["AI", "AIOps", "Network Automation"],
    color: "#a855f7",
  },
  {
    title: "From Monitoring to Observability: A Network Engineer's Journey",
    excerpt:
      "Lessons learned from 12+ years of building monitoring solutions and the evolution from traditional monitoring to modern observability.",
    date: "Coming Soon",
    tags: ["Career", "Monitoring", "Observability"],
    color: "#f59e0b",
  },
];

export default function Blog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blog" className="py-24 px-6 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-12">
            <span className="font-[family-name:var(--font-geist-mono)] text-[#22c55e] text-sm">
              05.
            </span>
            <h2 className="text-3xl font-bold text-[#ededed]">Blog</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-[#22c55e]/30 to-transparent" />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-[#111827] rounded-lg border border-[#1f2937] p-6 hover:border-opacity-50 transition-all group cursor-pointer"
              style={{ borderColor: `${post.color}15` }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-4 h-4 text-[#6b7280]" />
                <span className="text-xs text-[#6b7280] font-[family-name:var(--font-geist-mono)]">
                  {post.date}
                </span>
              </div>

              <h3 className="text-lg font-bold text-[#ededed] mb-3 group-hover:text-[#00d4ff] transition-colors">
                {post.title}
              </h3>

              <p className="text-sm text-[#6b7280] leading-relaxed mb-4">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 rounded text-xs font-[family-name:var(--font-geist-mono)]"
                    style={{
                      backgroundColor: `${post.color}10`,
                      color: post.color,
                      border: `1px solid ${post.color}20`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div
                className="flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ color: post.color }}
              >
                Read More <ArrowRight className="w-4 h-4" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
