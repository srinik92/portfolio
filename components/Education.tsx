"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Science (BSc)",
    field: "Computer Science",
    school: "KLE's S Nijalingappa College, Bangalore",
    period: "2010 — 2013",
    grade: "Distinction",
    activities: "Science forums and department fest organization",
    color: "#00d4ff",
  },
];

const certifications = [
  {
    name: "BMC TrueSight Operations Manager 10.x",
    issuer: "BMC Software",
    issued: "Dec 2017",
    credentialId: "46101",
    color: "#22c55e",
  },
  {
    name: "Generative AI Mastermind Workshop",
    issuer: "Outskill",
    issued: "Jul 2026",
    credentialId: "",
    color: "#a855f7",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-16 sm:py-24 relative">
      {/* Section watermark */}
      <div className="section-watermark" aria-hidden="true">05</div>

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="mb-10 sm:mb-12">
            <span className="eyebrow block mb-2">05 — Education</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground tracking-tight">
              Education & Certifications
            </h2>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          >
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="w-5 h-5 text-accent" />
              <h3 className="text-lg font-bold text-foreground">Education</h3>
            </div>
            <div className="border-t border-card-border">
              {education.map((edu) => (
                <div
                  key={edu.degree}
                  className="py-5 border-b border-card-border group"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className="text-xs font-[family-name:var(--font-geist-mono)]"
                      style={{ color: edu.color }}
                    >
                      {edu.period}
                    </span>
                    <span className="px-2 py-0.5 rounded-none text-xs bg-green/10 text-green border border-green/20">
                      {edu.grade}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-foreground">{edu.degree}</h4>
                  <p className="text-sm text-muted">{edu.field}</p>
                  <p className="text-sm text-muted mt-1">{edu.school}</p>
                  <p className="text-xs text-muted mt-2">{edu.activities}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Award className="w-5 h-5 text-green" />
              <h3 className="text-lg font-bold text-foreground">Certifications</h3>
            </div>
            <div className="border-t border-card-border">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="py-5 border-b border-card-border group"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className="text-xs font-[family-name:var(--font-geist-mono)]"
                      style={{ color: cert.color }}
                    >
                      {cert.issued}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-foreground">{cert.name}</h4>
                  <p className="text-sm text-muted">{cert.issuer}</p>
                  {cert.credentialId && (
                    <p className="text-xs text-muted mt-2 font-[family-name:var(--font-geist-mono)]">
                      ID: {cert.credentialId}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
