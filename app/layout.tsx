import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Srinivas K | Senior Software Engineer",
  description:
    "Portfolio of Srinivas K — Senior Network Automation & Observability Engineer specializing in Python, Grafana, Prometheus, VictoriaMetrics, Telegraf, Kubernetes, APIs, AIOps, AI Agents, and MCP. Creator of Argus open-source network monitoring solution.",
  keywords: [
    "Srinivas K",
    "Network Automation",
    "Observability",
    "Python",
    "Grafana",
    "Prometheus",
    "VictoriaMetrics",
    "Telegraf",
    "Kubernetes",
    "AIOps",
    "AI Agents",
    "MCP",
    "Argus",
    "Cisco",
    "Aruba",
    "LogicMonitor",
  ],
};

export const viewport: Viewport = {
  themeColor: "#0a192f",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
