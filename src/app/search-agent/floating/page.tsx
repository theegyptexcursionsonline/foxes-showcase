"use client";
import { useEffect } from "react";

const API = "https://ai-search-agent.netlify.app";
const WID = "wgt_r6owSnimKzgeOZ8n6wk18w";

export default function FloatingDemo() {
  useEffect(() => {
    const id = "foxes-floating-script";
    if (document.getElementById(id)) return;
    const s = document.createElement("script");
    s.id = id; s.async = true;
    s.src = `${API}/widget/foxes-widget.js`;
    s.setAttribute("data-widget-id", WID);
    s.setAttribute("data-position", "bottom-right");
    s.setAttribute("data-accent", "#8b5cf6");
    s.setAttribute("data-agent-name", "Travel Concierge");
    s.setAttribute("data-greeting", "Hi! Ask me about tours, destinations, pricing, or itinerary ideas.");
    s.setAttribute("data-track-events", "true");
    document.body.appendChild(s);
    return () => { try { document.body.removeChild(s); document.getElementById("foxes-widget-root")?.remove(); } catch {} };
  }, []);

  return (
    <main>
      <section className="relative min-h-[50vh] flex items-center justify-center pt-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-violet-950 to-slate-950" />
        <div className="absolute top-1/3 left-1/3 w-80 h-80 rounded-full bg-violet-600/10 blur-3xl animate-pulse" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <span className="inline-block text-xs font-semibold text-violet-400 bg-violet-400/10 border border-violet-400/20 rounded-full px-3 py-1 mb-6">Floating Chat Widget</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">Floating Chat Bubble</h1>
          <p className="mt-4 text-lg text-white/60 max-w-xl mx-auto">A persistent chat bubble in the corner of your page. Click to expand into a full conversation. Like Intercom, but AI-powered.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">How to embed</h2>
          <div className="rounded-xl bg-slate-900 p-6 overflow-x-auto">
            <pre className="text-sm text-emerald-400 font-mono whitespace-pre">{`<script
  src="${API}/widget/foxes-widget.js"
  data-widget-id="${WID}"
  data-position="bottom-right"
  data-accent="#8b5cf6"
  data-agent-name="Travel Concierge"
  async
></script>`}</pre>
          </div>
          <div className="mt-8 rounded-xl bg-violet-50 border border-violet-200 p-6">
            <h3 className="text-lg font-semibold text-violet-900 mb-2">Try it now</h3>
            <p className="text-sm text-violet-700">Click the purple chat bubble in the <strong>bottom-right corner</strong> to start a conversation with the AI travel concierge.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
