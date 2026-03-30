"use client";
import { useEffect } from "react";
const API = "https://foxes-hotel.netlify.app";
const PID = "69bba14234aa22d0127f7acb";

export default function ModalDemo() {
  useEffect(() => {
    const id = "foxes-modal-widget";
    if (document.getElementById(id)) return;
    const s = document.createElement("script");
    s.id = id; s.src = `${API}/widget/foxes-booking-modal.js`;
    s.setAttribute("data-property-id", PID);
    s.setAttribute("data-api-url", API);
    s.setAttribute("data-accent", "#6366f1");
    s.setAttribute("data-button-text", "Book Now");
    document.body.appendChild(s);
    return () => { try { document.body.removeChild(s); } catch {} };
  }, []);

  return (
    <main>
      <section className="relative min-h-[50vh] flex items-center justify-center pt-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950" />
        <div className="absolute top-1/3 left-1/3 w-80 h-80 rounded-full bg-indigo-600/10 blur-3xl animate-pulse" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <span className="inline-block text-xs font-semibold text-indigo-400 bg-indigo-400/10 border border-indigo-400/20 rounded-full px-3 py-1 mb-6">Booking Modal</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">Modal Booking Widget</h1>
          <p className="mt-4 text-lg text-white/60 max-w-xl mx-auto">Full booking flow in a popup dialog. User selects dates, guests, and completes checkout without leaving the page.</p>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">How to embed</h2>
          <div className="rounded-xl bg-slate-900 p-6 overflow-x-auto">
            <pre className="text-sm text-emerald-400 font-mono whitespace-pre">{`<script
  src="${API}/widget/foxes-booking-modal.js"
  data-property-id="${PID}"
  data-api-url="${API}"
  data-accent="#6366f1"
  data-button-text="Book Now"
></script>`}</pre>
          </div>
          <div className="mt-8 rounded-xl bg-indigo-50 border border-indigo-200 p-6">
            <h3 className="text-lg font-semibold text-indigo-900 mb-2">Try it now</h3>
            <p className="text-sm text-indigo-700">Click the <strong>&ldquo;Book Now&rdquo;</strong> button to open the booking modal.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
