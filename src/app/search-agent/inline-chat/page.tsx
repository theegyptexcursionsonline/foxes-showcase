"use client";
import { useEffect } from "react";

const API = "https://ai-search-agent.netlify.app";
const WID = "wgt_r6owSnimKzgeOZ8n6wk18w";

export default function InlineChatDemo() {
  useEffect(() => {
    const id = "foxes-inline-script";
    if (document.getElementById(id)) return;
    const s = document.createElement("script");
    s.id = id; s.async = true;
    s.src = `${API}/widget/foxes-inline-chat.js`;
    s.setAttribute("data-widget-id", WID);
    s.setAttribute("data-accent", "#10b981");
    s.setAttribute("data-container", "foxes-inline-demo");
    s.setAttribute("data-agent-name", "Travel AI");
    s.setAttribute("data-greeting", "Ask me anything about Egypt tours and excursions!");
    s.setAttribute("data-track-events", "true");
    document.body.appendChild(s);
    return () => { try { document.body.removeChild(s); } catch {} };
  }, []);

  return (
    <main>
      <section className="relative min-h-[50vh] flex items-center justify-center pt-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-950" />
        <div className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-emerald-600/10 blur-3xl animate-pulse" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <span className="inline-block text-xs font-semibold text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded-full px-3 py-1 mb-6">Inline Chat Widget</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">Inline Chat</h1>
          <p className="mt-4 text-lg text-white/60 max-w-xl mx-auto">Embed a chat interface directly into your page content. No popups, no modals — the AI assistant lives right where you need it.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Live inline chat</h2>
          <div id="foxes-inline-demo" className="rounded-2xl border border-slate-200 bg-slate-50 min-h-[400px] overflow-hidden" />

          <div className="mt-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">How to embed</h2>
            <div className="rounded-xl bg-slate-900 p-6 overflow-x-auto">
              <pre className="text-sm text-emerald-400 font-mono whitespace-pre">{`<!-- Container where the chat renders -->
<div id="foxes-inline-demo"></div>

<script
  src="${API}/widget/foxes-inline-chat.js"
  data-widget-id="${WID}"
  data-accent="#10b981"
  data-container="foxes-inline-demo"
  data-agent-name="Travel AI"
  async
></script>`}</pre>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
