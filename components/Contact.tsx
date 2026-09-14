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
    <section id="contact" className="py-16 sm:py-24 relative" ref={ref}>
      {/* Section watermark */}
      <div className="section-watermark" aria-hidden="true">07</div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-10 sm:mb-12">
            <span className="eyebrow block mb-2">07 — Contact</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground tracking-tight">
              Get In Touch
            </h2>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-muted leading-relaxed text-sm sm:text-base">
              I&apos;m always open to discussing new projects, creative ideas, or
              opportunities to be part of something amazing. Let&apos;s connect!
            </p>

            <div className="border-t border-card-border">
              <a
                href="https://linkedin.com/in/srinivas-k-77815496"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 py-4 border-b border-card-border text-muted hover:text-accent transition-colors group"
              >
                <ExternalLink className="w-4 h-4" />
                <div>
                  <p className="text-xs font-[family-name:var(--font-geist-mono)]">LinkedIn</p>
                  <p className="text-sm text-foreground">Srinivas K</p>
                </div>
              </a>
              <div className="flex items-center gap-4 py-4 border-b border-card-border text-muted">
                <MapPin className="w-4 h-4" />
                <div>
                  <p className="text-xs font-[family-name:var(--font-geist-mono)]">Location</p>
                  <p className="text-sm text-foreground">Bengaluru, India</p>
                </div>
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
                <label className="block text-xs text-muted font-[family-name:var(--font-geist-mono)] uppercase tracking-wider mb-2">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-input-bg border border-input-border text-foreground text-sm placeholder:text-muted/50 focus:outline-none focus:border-accent/50 transition-colors min-h-[44px]"
                  required
                />
              </div>
              <div>
                <label className="block text-xs text-muted font-[family-name:var(--font-geist-mono)] uppercase tracking-wider mb-2">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-input-bg border border-input-border text-foreground text-sm placeholder:text-muted/50 focus:outline-none focus:border-accent/50 transition-colors min-h-[44px]"
                  required
                />
                {emailError && (
                  <p className="mt-1 text-xs text-red-500">{emailError}</p>
                )}
              </div>
              <div>
                <label className="block text-xs text-muted font-[family-name:var(--font-geist-mono)] uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Your message..."
                  className="w-full px-4 py-3 bg-input-bg border border-input-border text-foreground text-sm placeholder:text-muted/50 focus:outline-none focus:border-accent/50 transition-colors resize-none min-h-[44px]"
                  required
                />
              </div>
              <button
                type="submit"
                className="btn-fill w-full px-6 py-3 bg-accent text-background font-semibold text-sm hover:text-background transition-all flex items-center justify-center gap-2 min-h-[44px]"
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
