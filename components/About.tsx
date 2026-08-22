"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Network,
  Eye,
  Cloud,
  Brain,
} from "lucide-react";

const highlights = [
  {
    icon: Network,
    title: "Network Automation",
    desc: "Automating network operations to reduce manual overhead and improve reliability",
  },
  {
    icon: Eye,
    title: "Observability",
    desc: "Designing monitoring systems that provide deep insights into network health",
  },
  {
    icon: Cloud,
    title: "DevOps",
    desc: "Containerized deployments, CI/CD pipelines, and infrastructure as code",
  },
  {
    icon: Brain,
    title: "AI in Networking",
    desc: "Implementing Generative AI and AIOps for intelligent network operations",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-12">
            <span className="font-[family-name:var(--font-geist-mono)] text-[#22c55e] text-sm">
              01.
            </span>
            <h2 className="text-3xl font-bold text-[#ededed]">About Me</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-[#22c55e]/30 to-transparent" />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="font-[family-name:var(--font-geist-mono)] text-sm text-[#6b7280] space-y-2 bg-[#111827] p-6 rounded-lg border border-[#1f2937]">
              <p>
                <span className="text-[#22c55e]">const</span>{" "}
                <span className="text-[#00d4ff]">engineer</span> = {"{"}
              </p>
              <p className="pl-4">
                <span className="text-[#a855f7]">role</span>:{" "}
                <span className="text-[#22c55e]">&quot;Sr. Software Engineer&quot;</span>,
              </p>
              <p className="pl-4">
                <span className="text-[#a855f7]">location</span>:{" "}
                <span className="text-[#22c55e]">&quot;Bengaluru, India&quot;</span>,
              </p>
              <p className="pl-4">
                <span className="text-[#a855f7]">experience</span>:{" "}
                <span className="text-[#00d4ff]">12</span>,
              </p>
              <p className="pl-4">
                <span className="text-[#a855f7]">currentCompany</span>:{" "}
                <span className="text-[#22c55e]">&quot;Lowe&apos;s India&quot;</span>,
              </p>
              <p className="pl-4">
                <span className="text-[#a855f7]">focus</span>: [
                <span className="text-[#22c55e]">&quot;automation&quot;</span>,{" "}
                <span className="text-[#22c55e]">&quot;observability&quot;</span>,{" "}
                <span className="text-[#22c55e]">&quot;devops&quot;</span>],
              </p>
              <p>{"};"}</p>
            </div>

            <p className="text-[#6b7280] leading-relaxed">
              I&apos;m an IT Infrastructure and Observability Engineer with over{" "}
              <span className="text-[#00d4ff]">12 years</span> of hands-on experience in
              designing and delivering robust monitoring solutions across network, server, and
              application environments.
            </p>
            <p className="text-[#6b7280] leading-relaxed">
              At <span className="text-[#ededed] font-medium">Lowe&apos;s India</span>, I
              successfully led the end-to-end implementation and migration to{" "}
              <span className="text-[#22c55e]">LogicMonitor</span>, built an open-source
              telemetry stack, and created the{" "}
              <span className="text-[#22c55e]">Argus</span> network monitoring framework. I
              am now pushing the boundaries by implementing{" "}
              <span className="text-[#a855f7]">AI in network operations</span>.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                className="bg-[#111827] p-5 rounded-lg border border-[#1f2937] hover:border-[#00d4ff]/30 transition-all group cursor-default"
              >
                <item.icon className="w-8 h-8 text-[#00d4ff] mb-3 group-hover:text-[#22c55e] transition-colors" />
                <h3 className="text-sm font-bold text-[#ededed] mb-1">{item.title}</h3>
                <p className="text-xs text-[#6b7280] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
