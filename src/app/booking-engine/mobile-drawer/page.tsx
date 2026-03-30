"use client";
import { useEffect } from "react";
const API = "https://foxes-hotel.netlify.app";
const PID = "69bba14234aa22d0127f7acb";

export default function MobileDrawerDemo() {
  useEffect(() => {
    const id = "foxes-drawer-widget";
    if (document.getElementById(id)) return;
    const s = document.createElement("script");
    s.id = id; s.src = `${API}/widget/foxes-mobile-drawer.js`;
    s.setAttribute("data-property-id", PID);
    s.setAttribute("data-api-url", API);
    s.setAttribute("data-accent", "#10b981");
    s.setAttribute("data-button-text", "Check Availability");
    document.body.appendChild(s);
    return () => { try { document.body.removeChild(s); } catch {} };
  }, []);

  return (
    <main>
      <section className="relative min-h-[50vh] flex items-center justify-center pt-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-950" />
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-emerald-600/10 blur-3xl animate-pulse" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <span className="inline-block text-xs font-semibold text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded-full px-3 py-1 mb-6">Mobile Drawer</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">Mobile Drawer Widget</h1>
          <p className="mt-4 text-lg text-white/60 max-w-xl mx-auto">Bottom sheet booking interface optimized for mobile. Swipe up to expand, swipe down to dismiss. Touch-friendly on iOS and Android.</p>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">How to embed</h2>
          <div className="rounded-xl bg-slate-900 p-6 overflow-x-auto">
            <pre className="text-sm text-emerald-400 font-mono whitespace-pre">{`<script
  src="${API}/widget/foxes-mobile-drawer.js"
  data-property-id="${PID}"
  data-api-url="${API}"
  data-accent="#10b981"
  data-button-text="Check Availability"
></script>`}</pre>
          </div>
          <div className="mt-8 rounded-xl bg-emerald-50 border border-emerald-200 p-6">
            <h3 className="text-lg font-semibold text-emerald-900 mb-2">Try it now</h3>
            <p className="text-sm text-emerald-700">Click the <strong>&ldquo;Check Availability&rdquo;</strong> button at the bottom to open the mobile drawer. Best experienced on a phone or narrow viewport.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
