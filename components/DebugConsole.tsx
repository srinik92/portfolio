"use client";

import { useEffect, useState } from "react";

export default function DebugConsole() {
  const [lines, setLines] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setEnabled(new URLSearchParams(window.location.search).has("debug"));
    });
    const onScroll = () => {
      setLines((prev) => {
        const y = `scrollY=${Math.round(window.scrollY)}`;
        return prev[0] === y ? prev : [y, ...prev].slice(0, 30);
      });
    };
    const record = (type: string) => (e: Event) => {
      const t = e.target as HTMLElement;
      const desc =
        t.tagName +
        (t.getAttribute && t.getAttribute("href") ? `[${t.getAttribute("href")}]` : "") +
        (t.getAttribute && t.getAttribute("aria-label") ? `(${t.getAttribute("aria-label")})` : "");
      const text = t.textContent?.slice(0, 20) ?? "";
      const tap =
        e instanceof TouchEvent && e.changedTouches[0]
          ? ` @${Math.round(e.changedTouches[0].clientX)},${Math.round(e.changedTouches[0].clientY)}`
          : "";
      setLines((prev) =>
        [`✔${type} ${desc} "${text}" defPrev=${e.defaultPrevented} trusted=${e.isTrusted}${tap}`, ...prev].slice(0, 30)
      );
    };
    const onError = (msg: Event | string) => {
      const s = typeof msg === "string" ? msg : String((msg as ErrorEvent).message ?? msg);
      setLines((prev) => [`✖ERROR ${s.slice(0, 140)}`, ...prev].slice(0, 30));
    };
    const onUnhandled = (e: PromiseRejectionEvent) => {
      setLines((prev) => [`✖REJECT ${String(e.reason).slice(0, 140)}`, ...prev].slice(0, 30));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("touchstart", record("touch"), { capture: true, passive: true });
    window.addEventListener("touchend", record("touchend"), { capture: true, passive: true });
    window.addEventListener("click", record("click"), { capture: true });
    window.addEventListener("error", onError);
    window.addEventListener("unhandledrejection", onUnhandled);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("touchstart", record("touch"), { capture: true } as EventListenerOptions);
      window.removeEventListener("touchend", record("touchend"), { capture: true } as EventListenerOptions);
      window.removeEventListener("click", record("click"), { capture: true });
      window.removeEventListener("error", onError);
      window.removeEventListener("unhandledrejection", onUnhandled);
      cancelAnimationFrame(id);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div className="fixed bottom-2 left-2 z-[9999] font-mono" style={{WebkitTapHighlightColor: "transparent"}}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="bg-foreground text-background rounded-full px-3 py-2 text-xs font-bold shadow-lg"
      >
        {open ? "✕" : "DBG"}
      </button>
      {open && (
        <div className="absolute bottom-12 left-0 w-[92vw] max-w-sm max-h-[50vh] overflow-y-auto bg-black/90 border border-accent rounded p-2 text-[11px] leading-5 text-white">
          <button
            onClick={() => {
              void navigator.clipboard?.writeText(lines.join("\n")).then(
                () => setLines((prev) => ["copied ✔", ...prev].slice(0, 30)),
                () => setLines((prev) => ["copy failed — long-press text instead", ...prev].slice(0, 30))
              );
            }}
            className="mb-1 border border-white/40 rounded px-2 py-1 text-[10px] uppercase"
          >
            Copy log
          </button>
          {lines.length === 0 && <p>- no events logged -</p>}
          {lines.map((line, i) => (
            <div key={`${line}-${i}`} className="break-all border-b border-white/10 py-0.5">
              {line}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
