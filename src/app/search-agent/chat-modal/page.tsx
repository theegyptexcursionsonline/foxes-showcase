"use client";
import { useEffect } from "react";

const API = "https://ai-search-agent.netlify.app";
const WID = "wgt_r6owSnimKzgeOZ8n6wk18w";

export default function ChatModalDemo() {
  useEffect(() => {
    const id = "foxes-modal-script";
    if (document.getElementById(id)) return;
    const s = document.createElement("script");
    s.id = id; s.async = true;
    s.src = `${API}/widget/foxes-chat-modal.js`;
    s.setAttribute("data-widget-id", WID);
    s.setAttribute("data-accent", "#f59e0b");
    s.setAttribute("data-agent-name", "AI Assistant");
    s.setAttribute("data-greeting", "Welcome! Ask me about tours, pricing, or travel tips.");
    s.setAttribute("data-track-events", "true");
    document.body.appendChild(s);
    return () => { try { document.body.removeChild(s); document.getElementById("foxes-chat-modal-root")?.remove(); } catch {} };
  }, []);

  return (
    <main>
      <section className="relative min-h-[50vh] flex items-center justify-center pt-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-amber-950 to-slate-950" />
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 rounded-full bg-amber-600/10 blur-3xl animate-pulse" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <span className="inline-block text-xs font-semibold text-amber-400 bg-amber-400/10 border border-amber-400/20 rounded-full px-3 py-1 mb-6">Chat Modal Widget</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">Chat Modal</h1>
          <p className="mt-4 text-lg text-white/60 max-w-xl mx-auto">A centered modal overlay that opens on trigger. Full chat interface with message history, typing indicators, and AI responses.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">How to embed</h2>
          <div className="rounded-xl bg-slate-900 p-6 overflow-x-auto">
            <pre className="text-sm text-emerald-400 font-mono whitespace-pre">{`<script
  src="${API}/widget/foxes-chat-modal.js"
  data-widget-id="${WID}"
  data-accent="#f59e0b"
  data-agent-name="AI Assistant"
  async
></script>`}</pre>
          </div>
          <div className="mt-8 rounded-xl bg-amber-50 border border-amber-200 p-6">
            <h3 className="text-lg font-semibold text-amber-900 mb-2">Try it now</h3>
            <p className="text-sm text-amber-700">Click the <strong>chat button</strong> to open the modal conversation window.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
