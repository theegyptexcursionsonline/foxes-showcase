"use client";
import { useEffect } from "react";
const API = "https://foxesapp.netlify.app";
const OID = "69b700e25e8af4de376859b9";
const PID = "69b700e25e8af4de376859c0";

export default function CalendarDemo() {
  useEffect(() => {
    const id = "foxes-calendar-widget";
    if (document.getElementById(id)) return;
    const s = document.createElement("script");
    s.id = id; s.src = `${API}/widget/foxes-calendar-embed.js`;
    s.onload = () => {
      // Calendar widget uses JS init, not data attributes
      if ((window as any).FoxesCalendarEmbed) {
        (window as any).FoxesCalendarEmbed.init({
          containerId: "foxes-calendar-embed",
          orgId: OID,
          productId: PID,
          apiUrl: API,
          primaryColor: "#0891b2",
        });
      }
    };
    document.body.appendChild(s);
    return () => { try { document.body.removeChild(s); } catch {} };
  }, []);

  return (
    <main>
      <section className="relative min-h-[50vh] flex items-center justify-center pt-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-950" />
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 rounded-full bg-cyan-600/10 blur-3xl animate-pulse" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <span className="inline-block text-xs font-semibold text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 rounded-full px-3 py-1 mb-6">Calendar Embed</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">Calendar Embed Widget</h1>
          <p className="mt-4 text-lg text-white/60 max-w-xl mx-auto">Interactive availability calendar with date selection, capacity display, and booking flow built in.</p>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Live calendar</h2>
          <div id="foxes-calendar-embed" className="rounded-2xl border border-slate-200 bg-slate-50 min-h-[500px] overflow-hidden" />
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">How to embed</h2>
            <div className="rounded-xl bg-slate-900 p-6 overflow-x-auto">
              <pre className="text-sm text-emerald-400 font-mono whitespace-pre">{`<div id="foxes-calendar-embed"></div>
<script src="${API}/widget/foxes-calendar-embed.js"></script>
<script>
  FoxesCalendarEmbed.init({
    containerId: "foxes-calendar-embed",
    orgId: "${OID}",
    productId: "${PID}",
    apiUrl: "${API}"
  });
</script>`}</pre>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
