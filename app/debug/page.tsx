"use client";

import { useEffect, useState } from "react";

export default function DebugPage() {
  const [log, setLog] = useState<string[]>([]);
  const [info, setInfo] = useState({
    ua: "",
    reduce: false,
    innerH: 0,
  });

  useEffect(() => {
    const onScroll = () => {
      const y = Math.round(window.scrollY);
      setLog((prev) => (prev[0] === `scrollY=${y}` ? prev : [`scrollY=${y}`, ...prev].slice(0, 20)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    const id = requestAnimationFrame(() => {
      setInfo({
        ua: navigator.userAgent.slice(0, 80),
        reduce: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
        innerH: window.innerHeight,
      });
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(id);
    };
  }, []);

  const push = (msg: string) => setLog((prev) => [msg, ...prev].slice(0, 20));

  return (
    <main className="min-h-[300svh] p-6 font-mono text-sm">
      <h1 className="text-lg font-bold mb-4">Scroll Diagnostics</h1>

      <p className="mb-2">viewport height: {info.innerH}px</p>
      <p className="mb-2">prefers-reduced-motion: {String(info.reduce)}</p>
      <p className="mb-2 break-all">UA: {info.ua || "-"}</p>

      <div className="flex flex-col gap-3 mt-6 max-w-xs">
        <a
          href="#target"
          onClick={() => push("clicked: native anchor #target")}
          className="border border-accent text-accent rounded px-4 py-4 text-center"
        >
          1. Native anchor jump
        </a>
        <button
          onClick={() => {
            push("clicked: window.scrollTo(0,600)");
            window.scrollTo({ top: 600, behavior: "smooth" });
          }}
          className="border border-accent text-accent rounded px-4 py-4 text-center"
        >
          2. window.scrollTo(0,600)
        </button>
        <button
          onClick={() => {
            push("clicked: scrollIntoView(target)");
            document.getElementById("target")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="border border-accent text-accent rounded px-4 py-4 text-center"
        >
          3. scrollIntoView(target)
        </button>
      </div>

      <div id="target" className="mt-[180svh] border border-accent p-6">
        TARGET — if you can read this text immediately after tapping 1/2/3 above, that method scrolled.
      </div>

      <div className="mt-8">
        <h2 className="font-bold mb-2">Live log (newest first)</h2>
        <p style={{ marginTop: 0 }} className="font-mono text-xs">
          current scrollY={typeof window !== "undefined" ? Math.round(window.scrollY) : 0}
        </p>
        <ul className="font-mono text-xs space-y-1">
          {log.length === 0 && <li>- no events yet -</li>}
          {log.map((line, i) => (
            <li key={`${line}-${i}`}>{line}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}
