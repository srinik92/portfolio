import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Srinivas K | Sr. Software Engineer — Network Automation & Observability",
  description:
    "Portfolio of Srinivas K — Sr. Software Engineer specializing in network automation, observability, DevOps, and AI-driven network operations. Creator of Argus open-source network monitoring framework.",
  keywords: [
    "Srinivas K",
    "Network Automation",
    "Observability",
    "DevOps",
    "Argus",
    "Network Monitoring",
    "Telegraf",
    "Grafana",
    "VictoriaMetrics",
    "AI in Networking",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
