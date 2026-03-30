"use client";
import { useEffect } from "react";
const API = "https://foxesapp.netlify.app";
const OID = "69b700e25e8af4de376859b9";
const PRODUCT_ID = "69b700e25e8af4de376859c3";

export default function ProductPageDemo() {
  useEffect(() => {
    const id = "foxes-product-widget";
    if (document.getElementById(id)) return;
    // Product page widget reads from the container div, not the script tag
    const container = document.getElementById("foxes-product-page");
    if (container) {
      container.setAttribute("data-org-id", OID);
      container.setAttribute("data-product-id", PRODUCT_ID);
      container.setAttribute("data-api-url", API);
      container.setAttribute("data-primary-color", "#f59e0b");
    }
    const s = document.createElement("script");
    s.id = id; s.src = `${API}/widget/foxes-product-page.js`;
    document.body.appendChild(s);
    return () => { try { document.body.removeChild(s); } catch {} };
  }, []);

  return (
    <main>
      <section className="relative min-h-[50vh] flex items-center justify-center pt-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-amber-950 to-slate-950" />
        <div className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-amber-600/10 blur-3xl animate-pulse" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <span className="inline-block text-xs font-semibold text-amber-400 bg-amber-400/10 border border-amber-400/20 rounded-full px-3 py-1 mb-6">Product Page</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">Product Page Widget</h1>
          <p className="mt-4 text-lg text-white/60 max-w-xl mx-auto">Full product listing with images, descriptions, pricing, and a book button. Embed an entire product catalog on any site.</p>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Live product page</h2>
          <div id="foxes-product-page" className="rounded-2xl border border-slate-200 bg-slate-50 min-h-[500px] overflow-hidden" />
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">How to embed</h2>
            <div className="rounded-xl bg-slate-900 p-6 overflow-x-auto">
              <pre className="text-sm text-emerald-400 font-mono whitespace-pre">{`<div id="foxes-product-page"
  data-org-id="${OID}"
  data-product-id="${PRODUCT_ID}"
  data-api-url="${API}"
  data-primary-color="#f59e0b"
></div>
<script src="${API}/widget/foxes-product-page.js"></script>`}</pre>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
