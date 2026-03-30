"use client";
import { useEffect } from "react";

const API_URL = "https://foxes-hotel.netlify.app";
const PROPERTY_ID = "69bba14234aa22d0127f7acb";

function useWidget(attrs: Record<string, string>) {
  useEffect(() => {
    const s = document.createElement("script");
    s.src = attrs.src;
    Object.entries(attrs).forEach(([k, v]) => { if (k !== "src") s.setAttribute(k, v); });
    document.body.appendChild(s);
    return () => { try { document.body.removeChild(s); } catch {} };
  }, []);
}

const features = [
  { title: "Multi-Channel Distribution", desc: "Sell through your website, partner sites, OTAs, and reseller networks. One inventory, every channel synced in real-time.", gradient: "from-blue-500 to-indigo-500", icon: "M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" },
  { title: "Embeddable Booking Widgets", desc: "8 widget types — modal, inline, calendar, product page, mobile drawer. Drop-in with one script tag, fully customizable.", gradient: "from-violet-500 to-purple-500", icon: "M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" },
  { title: "Stripe Payments & Billing", desc: "Secure checkout with Stripe Connect. Platform fees, partner payouts, subscriptions, gift cards, and coupon management.", gradient: "from-emerald-500 to-teal-500", icon: "M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" },
  { title: "AI Voice Agent", desc: "GPT-4 powered voice agent handles booking inquiries, checks availability, and creates reservations — fully integrated.", gradient: "from-pink-500 to-rose-500", icon: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" },
  { title: "Calendar & Availability", desc: "Real-time availability calendar with inventory management. Block dates, set capacity limits, seasonal pricing, and time slots.", gradient: "from-amber-500 to-orange-500", icon: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" },
  { title: "Operator Mobile App", desc: "React Native app for tour operators — manage bookings, scan QR codes, view reports, and handle customers on the go.", gradient: "from-cyan-500 to-blue-500", icon: "M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" },
  { title: "Product Catalog", desc: "Manage tours, activities, experiences with rich media, pricing tiers, inclusions, and multi-language descriptions.", gradient: "from-rose-500 to-pink-500", icon: "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" },
  { title: "CRM & Communications", desc: "Customer database, booking history, messaging, automated emails via Mailgun, and real-time Socket.io notifications.", gradient: "from-teal-500 to-emerald-500", icon: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" },
  { title: "Analytics & Reports", desc: "Revenue dashboards, booking trends, channel performance, settlement reports, and PDF invoice generation.", gradient: "from-indigo-500 to-violet-500", icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" },
];

const widgets = [
  { name: "Booking Modal", desc: "Full booking flow in a popup dialog" },
  { name: "Inline Widget", desc: "Embed directly in page content" },
  { name: "Calendar Embed", desc: "Interactive availability calendar" },
  { name: "Inline Calendar", desc: "Date picker with time slots" },
  { name: "Product Page", desc: "Full product listing with book button" },
  { name: "Mobile Drawer", desc: "Bottom sheet for mobile booking" },
  { name: "Booking V2", desc: "Next-gen booking widget" },
  { name: "Calendar Widget", desc: "Compact calendar date selector" },
];

const apiModules = [
  "Auth", "Bookings", "Products", "Availability", "Checkout", "Payments",
  "Customers", "Contacts", "Coupons", "Gift Cards", "Channels", "Invoices",
  "Dashboard", "Widgets", "Settlement", "Reviews", "Messages", "Teams",
];

export default function BookingEnginePage() {
  useWidget({
    src: `${API_URL}/widget/foxes-booking.js`,
    "data-property-id": PROPERTY_ID,
    "data-api-url": API_URL,
    "data-mode": "sidebar",
    "data-accent": "#6366f1",
    "data-button-text": "Book a Tour",
  });

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/30 via-transparent to-transparent" />
        <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-violet-600/10 blur-3xl animate-pulse" style={{ animationDelay: "3s" }} />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-4 py-1.5 mb-8 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400" />
            </span>
            <span className="text-sm text-white/70 font-medium">Complete SaaS Booking Platform</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
            Booking engine
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">built for scale.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            Multi-channel distribution, embeddable widgets, Stripe payments, AI voice agent, and an operator mobile app — everything you need to sell tours, experiences, and services online.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://foxes-ai-voice.netlify.app/register" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-purple-500 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-blue-500/25 hover:shadow-2xl transition-all hover:-translate-y-0.5">
              Start free trial
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
            </a>
            <a href="#features" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-base font-medium text-white/80 hover:bg-white/5 transition">See features</a>
          </div>

          <div className="mt-16 grid grid-cols-4 gap-6 max-w-xl mx-auto">
            {[{ value: "8", label: "Widget Types" }, { value: "33+", label: "API Modules" }, { value: "64+", label: "Dashboard Pages" }, { value: "3", label: "Platforms" }].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-white">{s.value}</p>
                <p className="mt-1 text-xs sm:text-sm text-white/40">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Architecture</p>
            <h2 className="mt-3 text-4xl font-bold text-slate-900">Three platforms, one system</h2>
            <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">Web dashboard, REST API, and mobile operator app — all connected to one database.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { name: "Web Platform", desc: "Next.js 16 dashboard with 64+ pages — products, bookings, customers, channels, analytics, and settings.", tech: "Next.js 16, React 19, Tailwind CSS 4", color: "from-blue-500 to-indigo-500", icon: "M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" },
              { name: "REST API", desc: "Express.js TypeScript backend with 33+ route modules — auth, bookings, products, payments, channels, settlements.", tech: "Express.js, TypeScript, MongoDB, Stripe", color: "from-emerald-500 to-teal-500", icon: "M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" },
              { name: "Operator App", desc: "React Native mobile app for staff — manage bookings, scan tickets, view reports, and handle customers on the go.", tech: "React Native, Zustand, React Query", color: "from-orange-500 to-rose-500", icon: "M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" },
            ].map((p) => (
              <div key={p.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${p.color} text-white shadow-lg mb-5`}>
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d={p.icon} /></svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900">{p.name}</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">{p.desc}</p>
                <p className="mt-4 text-xs text-slate-400 font-medium">{p.tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Widget showcase */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-violet-600 uppercase tracking-wider">Embeddable Widgets</p>
            <h2 className="mt-3 text-4xl font-bold text-slate-900">8 widget types, one script tag</h2>
            <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">Embed booking flows on any website. Each widget is fully configurable with data attributes — colors, text, behavior.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {widgets.map((w) => (
              <div key={w.name} className="rounded-2xl border border-slate-200 bg-white p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="h-24 rounded-xl bg-gradient-to-br from-blue-50 to-violet-50 flex items-center justify-center mb-4">
                  <div className="w-16 h-16 rounded-lg bg-white border border-slate-200 shadow-sm p-2">
                    <div className="w-full h-1.5 bg-blue-200 rounded-full mb-1.5" />
                    <div className="w-3/4 h-1.5 bg-slate-200 rounded-full mb-1.5" />
                    <div className="w-1/2 h-1.5 bg-slate-200 rounded-full mb-1.5" />
                    <div className="w-full h-3 bg-blue-400 rounded mt-2" />
                  </div>
                </div>
                <h3 className="text-sm font-bold text-slate-900">{w.name}</h3>
                <p className="mt-1 text-xs text-slate-500">{w.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <div className="inline-block rounded-xl bg-slate-900 text-left px-6 py-4 shadow-lg">
              <p className="text-xs text-slate-400 mb-1">Embed on any website:</p>
              <code className="text-sm text-emerald-400 font-mono">&lt;script src=&quot;your-domain.com/widget/foxes-booking-modal.js&quot; data-org-id=&quot;...&quot;&gt;&lt;/script&gt;</code>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">Features</p>
            <h2 className="mt-3 text-4xl font-bold text-slate-900">Everything to run a booking business</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${f.gradient} text-white shadow-lg`}>
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d={f.icon} /></svg>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">{f.title}</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard preview */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-purple-600 uppercase tracking-wider">Dashboard</p>
            <h2 className="mt-3 text-4xl font-bold text-slate-900">Complete operator dashboard</h2>
          </div>
          <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 sm:p-12 shadow-2xl">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
              {[
                { label: "Revenue", value: "$48,320", change: "+18%" },
                { label: "Bookings", value: "312", change: "+24%" },
                { label: "Conversion", value: "4.2%", change: "+0.8%" },
                { label: "Channels", value: "6", change: "+2" },
              ].map((m) => (
                <div key={m.label} className="rounded-xl bg-white/5 border border-white/10 p-4">
                  <p className="text-xs text-white/40">{m.label}</p>
                  <p className="text-xl font-bold text-white mt-1">{m.value}</p>
                  <p className="text-xs text-emerald-400 mt-0.5">{m.change} this month</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {apiModules.map((m) => (
                <span key={m} className="text-xs font-medium text-white/50 bg-white/5 border border-white/10 rounded-full px-3 py-1.5">{m}</span>
              ))}
            </div>
            <p className="text-xs text-white/20 text-center mt-6">33+ API modules powering the platform</p>
          </div>
        </div>
      </section>

      {/* Tech */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-xs uppercase tracking-wider text-slate-400 mb-8">Tech Stack</p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-slate-400">
            {["Next.js 16", "React 19", "Express.js", "TypeScript", "MongoDB", "Stripe Connect", "React Native", "Socket.io", "Mailgun", "Cloudinary", "OpenAI GPT-4", "Tailwind CSS"].map((tech) => (
              <span key={tech} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 shadow-sm">{tech}</span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
