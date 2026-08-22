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
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 relative" ref={ref}>
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-10 sm:mb-12">
            <span className="font-[family-name:var(--font-geist-mono)] text-green text-sm">
              06.
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Get In Touch</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-green/30 to-transparent" />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
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

            <div className="space-y-3 sm:space-y-4">
              <a
                href="https://linkedin.com/in/srinivas-k-77815496"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted hover:text-accent transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-surface border border-card-border flex items-center justify-center group-hover:border-accent/30 transition-all">
                  <ExternalLink className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-muted font-[family-name:var(--font-geist-mono)]">
                    LinkedIn
                  </p>
                  <p className="text-sm text-foreground">Srinivas K</p>
                </div>
              </a>

              <div className="flex items-center gap-3 text-muted">
                <div className="w-10 h-10 rounded-lg bg-surface border border-card-border flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-muted font-[family-name:var(--font-geist-mono)]">
                    Location
                  </p>
                  <p className="text-sm text-foreground">Bengaluru, India</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <div className="font-[family-name:var(--font-geist-mono)] text-sm text-muted bg-surface p-4 rounded-lg border border-card-border">
                <p>
                  <span className="text-green">status</span>:{" "}
                  <span className="text-green">&quot;open_to_work&quot;</span>,
                </p>
                <p>
                  <span className="text-green">interests</span>: [
                  <span className="text-accent">&quot;networking&quot;</span>,{" "}
                  <span className="text-accent">&quot;automation&quot;</span>,{" "}
                  <span className="text-accent">&quot;AI&quot;</span>],
                </p>
                <p>
                  <span className="text-green">response_time</span>:{" "}
                  <span className="text-green">&quot;usually within 24h&quot;</span>
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
                <label className="block text-xs text-muted font-[family-name:var(--font-geist-mono)] mb-2">
                  name
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-input-bg border border-input-border rounded-lg text-foreground text-sm placeholder:text-muted/50 focus:outline-none focus:border-accent/50 transition-colors min-h-[44px]"
                  required
                />
              </div>
              <div>
                <label className="block text-xs text-muted font-[family-name:var(--font-geist-mono)] mb-2">
                  email
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-input-bg border border-input-border rounded-lg text-foreground text-sm placeholder:text-muted/50 focus:outline-none focus:border-accent/50 transition-colors min-h-[44px]"
                  required
                />
                {emailError && (
                  <p className="mt-1 text-xs text-red-500">{emailError}</p>
                )}
              </div>
              <div>
                <label className="block text-xs text-muted font-[family-name:var(--font-geist-mono)] mb-2">
                  message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Your message..."
                  className="w-full px-4 py-3 bg-input-bg border border-input-border rounded-lg text-foreground text-sm placeholder:text-muted/50 focus:outline-none focus:border-accent/50 transition-colors resize-none min-h-[44px]"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-accent text-background rounded-lg font-semibold text-sm hover:opacity-90 transition-all hover:shadow-[0_0_20px_#00d4ff33] flex items-center justify-center gap-2 min-h-[44px]"
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
