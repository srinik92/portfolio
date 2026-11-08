"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import SectionHeading from "./SectionHeading";

const education = [
  {
    degree: "Bachelor of Science (BSc)",
    field: "Computer Science",
    school: "KLE's S Nijalingappa College, Bangalore",
    period: "2010 — 2013",
    grade: "Distinction",
  },
];

const certifications = [
  {
    name: "BMC TrueSight Operations Manager 10.x",
    issuer: "BMC Software",
    issued: "Dec 2017",
    credentialId: "46101",
  },
  {
    name: "Generative AI Mastermind Workshop",
    issuer: "Outskill",
    issued: "Jul 2026",
    credentialId: "",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 px-6 sm:px-12">
      <div className="mx-auto max-w-3xl">
        <SectionHeading number="05" title="Education & Certifications" />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-10"
        >
          <div>
            <div className="flex items-center gap-2 mb-5">
              <GraduationCap className="w-5 h-5 text-accent" />
              <h3 className="text-sm font-medium text-foreground">Education</h3>
            </div>
            <div className="border-t border-border">
              {education.map((edu) => (
                <div key={edu.degree} className="py-5 border-b border-border">
                  <p className="font-mono text-xs mb-2">{edu.period}</p>
                  <h4 className="text-foreground font-medium">{edu.degree}</h4>
                  <p className="text-sm mt-0.5">{edu.field}</p>
                  <p className="text-sm mt-1">{edu.school}</p>
                  <p className="text-accent text-xs mt-2 font-medium">{edu.grade}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-5">
              <Award className="w-5 h-5 text-accent" />
              <h3 className="text-sm font-medium text-foreground">Certifications</h3>
            </div>
            <div className="border-t border-border">
              {certifications.map((cert) => (
                <div key={cert.name} className="py-5 border-b border-border">
                  <p className="font-mono text-xs mb-2">{cert.issued}</p>
                  <h4 className="text-foreground font-medium">{cert.name}</h4>
                  <p className="text-sm mt-0.5">{cert.issuer}</p>
                  {cert.credentialId && (
                    <p className="font-mono text-xs mt-2 text-muted">
                      ID: {cert.credentialId}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
