"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Send } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 sm:px-12">
      <div className="mx-auto max-w-3xl">
        <SectionHeading number="07" title="Get In Touch" />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-12"
        >
          <div className="space-y-5">
            <p className="leading-relaxed">
              I&apos;m always open to discussing new projects, creative ideas, or
              opportunities. Whether you want to talk network automation, observability,
              or open source — my inbox is always open.
            </p>

            <div className="border-t border-border">
              <a
                href="mailto:itsrinivasbsc@gmail.com"
                className="flex items-center gap-4 py-4 border-b border-border"
              >
                <Mail className="w-4 h-4 text-accent" />
                <div>
                  <p className="font-mono text-xs text-muted">Email</p>
                  <p className="text-sm text-foreground">itsrinivasbsc@gmail.com</p>
                </div>
              </a>
              <div className="flex items-center gap-4 py-4 border-b border-border">
                <MapPin className="w-4 h-4 text-accent" />
                <div>
                  <p className="font-mono text-xs text-muted">Location</p>
                  <p className="text-sm text-foreground">Bengaluru, India</p>
                </div>
              </div>
            </div>

            <a
              href="https://linkedin.com/in/srinivas-k-77815496"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-accent underline underline-offset-4 decoration-accent/40 hover:decoration-accent transition-all"
            >
              Connect with me on LinkedIn
            </a>
          </div>

          <form
            className="space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.target as HTMLFormElement;
              const name = (form.elements.namedItem("name") as HTMLInputElement).value;
              const email = (form.elements.namedItem("email") as HTMLInputElement).value;
              const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
              const body = `Name: ${name}\r\nEmail: ${email}\r\nMessage: ${message}`;
              window.location.href = `mailto:itsrinivasbsc@gmail.com?subject=${encodeURIComponent(
                "Portfolio Contact"
              )}&body=${encodeURIComponent(body)}`;
            }}
          >
            <div>
              <label htmlFor="contact-name" className="block font-mono text-xs text-muted mb-2">
                Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 bg-input-bg border border-input-border rounded text-sm text-foreground placeholder:text-muted/60 focus:outline-none focus:border-accent transition-colors"
                required
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="block font-mono text-xs text-muted mb-2">
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-3 bg-input-bg border border-input-border rounded text-sm text-foreground placeholder:text-muted/60 focus:outline-none focus:border-accent transition-colors"
                required
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="block font-mono text-xs text-muted mb-2">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                placeholder="Your message..."
                className="w-full px-4 py-3 bg-input-bg border border-input-border rounded text-sm text-foreground placeholder:text-muted/60 focus:outline-none focus:border-accent transition-colors resize-none"
                required
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-accent text-accent rounded font-medium transition-colors hover:bg-accent-dim"
            >
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
