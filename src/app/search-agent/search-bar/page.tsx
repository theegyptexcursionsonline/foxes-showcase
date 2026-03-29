"use client";
import { useEffect } from "react";

const API = "https://ai-search-agent.netlify.app";
const WID = "wgt_r6owSnimKzgeOZ8n6wk18w";

export default function SearchBarDemo() {
  useEffect(() => {
    const id = "foxes-searchbar-script";
    if (document.getElementById(id)) return;
    const s = document.createElement("script");
    s.id = id; s.async = true;
    s.src = `${API}/widget/foxes-search-widget.js`;
    s.setAttribute("data-widget-id", WID);
    s.setAttribute("data-accent", "#0891b2");
    s.setAttribute("data-agent-name", "Search Concierge");
    s.setAttribute("data-greeting", "Search for tours, destinations, or ask me anything.");
    s.setAttribute("data-placeholder", "Search tours, ask about Egypt...");
    s.setAttribute("data-track-events", "true");
    document.body.appendChild(s);
    return () => { try { document.body.removeChild(s); document.getElementById("foxes-search-widget-root")?.remove(); } catch {} };
  }, []);

  return (
    <main>
      <section className="relative min-h-[50vh] flex items-center justify-center pt-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-950" />
        <div className="absolute top-1/3 right-1/3 w-80 h-80 rounded-full bg-cyan-600/10 blur-3xl animate-pulse" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <span className="inline-block text-xs font-semibold text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 rounded-full px-3 py-1 mb-6">Search Bar Widget</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">Search Bar</h1>
          <p className="mt-4 text-lg text-white/60 max-w-xl mx-auto">A full-width search bar fixed at the bottom of the page. Results appear as a dropdown with tour cards, destinations, and categories.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">How to embed</h2>
          <div className="rounded-xl bg-slate-900 p-6 overflow-x-auto">
            <pre className="text-sm text-emerald-400 font-mono whitespace-pre">{`<script
  src="${API}/widget/foxes-search-widget.js"
  data-widget-id="${WID}"
  data-accent="#0891b2"
  data-agent-name="Search Concierge"
  data-placeholder="Search tours, ask about Egypt..."
  async
></script>`}</pre>
          </div>
          <div className="mt-8 rounded-xl bg-cyan-50 border border-cyan-200 p-6">
            <h3 className="text-lg font-semibold text-cyan-900 mb-2">Try it now</h3>
            <p className="text-sm text-cyan-700">Look at the <strong>bottom of the page</strong> for the search bar. Type a query like &ldquo;pyramids tour&rdquo; to see instant results.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
