"use client";

import { useEffect, useState } from "react";

export default function DebugConsole() {
  const [lines, setLines] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setEnabled(new URLSearchParams(window.location.search).has("debug"));
      setLines((prev) => ["ready: nav-fix-v6 @document", ...prev].slice(0, 30));
    });
    const onScroll = () => {
      setLines((prev) => {
        const y = `scrollY=${Math.round(window.scrollY)}`;
        return prev[0] === y ? prev : [y, ...prev].slice(0, 30);
      });
    };
    const push = (line: string) =>
      setLines((prev) => [line, ...prev].slice(0, 30));
    const navFix = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement)?.closest?.("a[href^='#']");
      if (!anchor) return;
      const href = anchor.getAttribute("href") ?? "";
      if (href === "#") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        push(`navFix(top) -> scrollTo (docST=${document.documentElement.scrollTop})`);
        return;
      }
      const el = document.querySelector(href);
      if (!el) return;
      e.preventDefault();
      window.scrollTo({ top: Math.max(0, el.getBoundingClientRect().top + window.scrollY - 64), behavior: "smooth" });
      push(`navFix(${href}) top=${Math.round(el.getBoundingClientRect().top + window.scrollY - 64)} (docST=${document.documentElement.scrollTop})`);
      (document.querySelector("button[aria-label='Toggle menu']") as HTMLButtonElement | null)?.click();
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
    const poll = () => {
      setLines((prev) => {
        const line = `[poll] winScrollY=${Math.round(window.scrollY)} docH=${document.documentElement.scrollHeight} ivh=${window.innerHeight} docST=${document.documentElement.scrollTop}`;
        return prev[0]?.startsWith("[poll]") ? [line, ...prev.slice(0, 29)] : [line, ...prev].slice(0, 30);
      });
    };
    const pollId = setInterval(poll, 700);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("touchstart", record("touch"), { capture: true, passive: true });
    window.addEventListener("touchend", record("touchend"), { capture: true, passive: true });
    window.addEventListener("click", record("click"), { capture: true });
    window.addEventListener("click", navFix, { capture: true });
    window.addEventListener("error", onError);
    window.addEventListener("unhandledrejection", onUnhandled);
    poll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("touchstart", record("touch"), { capture: true } as EventListenerOptions);
      window.removeEventListener("touchend", record("touchend"), { capture: true } as EventListenerOptions);
      window.removeEventListener("click", record("click"), { capture: true });
      window.removeEventListener("click", navFix, { capture: true });
      window.removeEventListener("error", onError);
      window.removeEventListener("unhandledrejection", onUnhandled);
      clearInterval(pollId);
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
        {open ? "✕" : "DBG·v6"}
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
