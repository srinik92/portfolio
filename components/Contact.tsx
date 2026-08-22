"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, MapPin, Send } from "lucide-react";

const allowedDomains = [
  "gmail.com", "googlemail.com",
  "outlook.com", "hotmail.com", "live.com", "msn.com",
  "yahoo.com", "yahoo.co.in", "yahoo.co.uk",
  "icloud.com", "me.com", "mac.com",
  "protonmail.com", "proton.me",
  "zoho.com", "zohomail.com",
  "aol.com",
  "rediffmail.com",
  "fastmail.com",
  "hey.com",
  "tutanota.com", "tutamail.com",
  "mail.com", "email.com",
  "gmx.com", "gmx.de",
  "yandex.com", "yandex.ru",
  "mail.ru",
  "windowslive.com",
  "live.co.uk", "live.in",
  "outlook.in", "hotmail.co.uk",
];

function isAllowedEmail(email: string): boolean {
  const domain = email.split("@")[1]?.toLowerCase();
  return allowedDomains.includes(domain);
}

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [emailError, setEmailError] = useState("");

  return (
    <section id="contact" className="py-24 px-6 relative" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,#22c55e08_0%,transparent_50%)]" />
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-12">
            <span className="font-[family-name:var(--font-geist-mono)] text-[#22c55e] text-sm">
              06.
            </span>
            <h2 className="text-3xl font-bold text-[#ededed]">Get In Touch</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-[#22c55e]/30 to-transparent" />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-[#6b7280] leading-relaxed">
              I&apos;m always open to discussing new projects, creative ideas, or
              opportunities to be part of something amazing. Let&apos;s connect!
            </p>

            <div className="space-y-4">
              <a
                href="https://linkedin.com/in/srinivas-k-77815496"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#6b7280] hover:text-[#00d4ff] transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#111827] border border-[#1f2937] flex items-center justify-center group-hover:border-[#00d4ff]/30 transition-all">
                  <ExternalLink className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-[#6b7280] font-[family-name:var(--font-geist-mono)]">
                    LinkedIn
                  </p>
                  <p className="text-sm text-[#ededed]">Srinivas K</p>
                </div>
              </a>

              <div className="flex items-center gap-3 text-[#6b7280]">
                <div className="w-10 h-10 rounded-lg bg-[#111827] border border-[#1f2937] flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-[#6b7280] font-[family-name:var(--font-geist-mono)]">
                    Location
                  </p>
                  <p className="text-sm text-[#ededed]">Bengaluru, India</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <div className="font-[family-name:var(--font-geist-mono)] text-sm text-[#6b7280] bg-[#111827] p-4 rounded-lg border border-[#1f2937]">
                <p>
                  <span className="text-[#22c55e]">status</span>:{" "}
                  <span className="text-[#22c55e]">&quot;open_to_work&quot;</span>,
                </p>
                <p>
                  <span className="text-[#22c55e]">interests</span>: [
                  <span className="text-[#00d4ff]">&quot;networking&quot;</span>,{" "}
                  <span className="text-[#00d4ff]">&quot;automation&quot;</span>,{" "}
                  <span className="text-[#00d4ff]">&quot;AI&quot;</span>],
                </p>
                <p>
                  <span className="text-[#22c55e]">response_time</span>:{" "}
                  <span className="text-[#22c55e]">&quot;usually within 24h&quot;</span>
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const name = (form.elements.namedItem("name") as HTMLInputElement).value;
                const email = (form.elements.namedItem("email") as HTMLInputElement).value;
                const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

                if (!isAllowedEmail(email)) {
                  setEmailError("Please use a valid email (Gmail, Outlook, Yahoo, Apple, etc.)");
                  return;
                }
                setEmailError("");

                const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;
                window.location.href = `mailto:itsrinivasbsc@gmail.com?subject=Portfolio Contact&body=${body}`;
              }}
            >
              <div>
                <label className="block text-xs text-[#6b7280] font-[family-name:var(--font-geist-mono)] mb-2">
                  name
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-[#111827] border border-[#1f2937] rounded-lg text-[#ededed] text-sm placeholder:text-[#6b7280]/50 focus:outline-none focus:border-[#00d4ff]/50 transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-xs text-[#6b7280] font-[family-name:var(--font-geist-mono)] mb-2">
                  email
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-[#111827] border border-[#1f2937] rounded-lg text-[#ededed] text-sm placeholder:text-[#6b7280]/50 focus:outline-none focus:border-[#00d4ff]/50 transition-colors"
                  required
                />
                {emailError && (
                  <p className="mt-1 text-xs text-[#ef4444]">{emailError}</p>
                )}
              </div>
              <div>
                <label className="block text-xs text-[#6b7280] font-[family-name:var(--font-geist-mono)] mb-2">
                  message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Your message..."
                  className="w-full px-4 py-3 bg-[#111827] border border-[#1f2937] rounded-lg text-[#ededed] text-sm placeholder:text-[#6b7280]/50 focus:outline-none focus:border-[#00d4ff]/50 transition-colors resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-[#00d4ff] text-[#0a0a0a] rounded-lg font-semibold text-sm hover:bg-[#00d4ff]/90 transition-all hover:shadow-[0_0_20px_#00d4ff33] flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
