"use client";

import { WidgetEmbed } from "@/components/widget-embed";
import { VoiceHeroCard } from "@/components/voice-hero-card";

const features = [
  { title: "Embeddable Booking Widget", desc: "Drop-in booking widget with 4 modes: inline, sidebar, floating button, and calendar view. Zero dependencies, works on any site.", gradient: "from-orange-500 to-rose-500", icon: "M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" },
  { title: "Room & Property Management", desc: "Manage rooms, rates, availability, and photos from one dashboard. Bulk operations, seasonal pricing, and occupancy tracking.", gradient: "from-pink-500 to-rose-500", icon: "M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0h.008v.008h-.008V7.5z" },
  { title: "Guest CRM", desc: "Track guest history, preferences, special requests, and communication. Build loyalty with personalized experiences.", gradient: "from-violet-500 to-purple-500", icon: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" },
  { title: "Revenue Dashboard", desc: "Real-time revenue, occupancy rates, ADR, RevPAR, and booking trends. Export reports and track performance over time.", gradient: "from-emerald-500 to-teal-500", icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" },
  { title: "Stripe Payments", desc: "Secure checkout with Stripe. Support for deposits, full payments, refunds, and coupon codes. PCI compliant out of the box.", gradient: "from-blue-500 to-indigo-500", icon: "M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" },
  { title: "Public API", desc: "50+ RESTful endpoints for availability, booking, payments, and guest management. CORS-enabled for any frontend integration.", gradient: "from-amber-500 to-orange-500", icon: "M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" },
];

const widgetModes = [
  { name: "Inline", desc: "Embed directly in your page content", preview: "rounded-xl bg-white border border-slate-200 p-4" },
  { name: "Sidebar", desc: "Slides in from the right edge", preview: "rounded-xl bg-white border border-slate-200 p-4" },
  { name: "Button", desc: "Floating button that opens a modal", preview: "rounded-xl bg-white border border-slate-200 p-4" },
  { name: "Calendar", desc: "Full calendar with availability view", preview: "rounded-xl bg-white border border-slate-200 p-4" },
];

export default function HotelBookingPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-orange-950/80 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-900/30 via-transparent to-transparent" />
        <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-orange-600/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-rose-600/10 blur-3xl animate-pulse" style={{ animationDelay: "3s" }} />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            {/* Left: text */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-4 py-1.5 mb-8 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-400" />
                </span>
                <span className="text-sm text-white/70 font-medium">AI Voice Agent + Smart Booking</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                Bookings on
                <br />
                <span className="bg-gradient-to-r from-orange-400 via-rose-400 to-pink-400 bg-clip-text text-transparent">autopilot.</span>
              </h1>

              <p className="mt-6 text-lg sm:text-xl text-white/60 max-w-xl leading-relaxed">
                AI voice agent that books rooms, answers questions, and handles guests 24/7. Try it live — click the mic.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-center lg:items-start gap-4">
                <a href="https://foxes-ai-voice.netlify.app/register" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 via-rose-500 to-pink-500 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-orange-500/25 hover:shadow-2xl transition-all hover:-translate-y-0.5">
                  Start free trial
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                </a>
                <a href="#features" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-base font-medium text-white/80 hover:bg-white/5 transition">See features</a>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-6 max-w-sm mx-auto lg:mx-0">
                {[{ value: "24/7", label: "Always On" }, { value: "29+", label: "Languages" }, { value: "<2s", label: "Response" }].map((s) => (
                  <div key={s.label} className="text-center lg:text-left">
                    <p className="text-2xl font-bold text-white">{s.value}</p>
                    <p className="mt-0.5 text-xs text-white/40">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: voice agent card with wave */}
            <div className="flex justify-center lg:justify-end">
              <VoiceHeroCard
                agentName="Olivia"
                agentRole="AI Hotel Concierge"
                accent="orange"
                samplePrompts={[
                  "Book a room for 2 on April 15th",
                  "What's your cancellation policy?",
                  "I want to cancel booking FX-7A4QYF",
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <WidgetEmbed />

      {/* Widget modes */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-orange-600 uppercase tracking-wider">Widget Modes</p>
            <h2 className="mt-3 text-4xl font-bold text-slate-900">One widget, four ways to embed</h2>
            <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">Drop a single script tag on any website and choose how the booking widget appears.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {widgetModes.map((m) => (
              <div key={m.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="h-32 rounded-xl bg-gradient-to-br from-orange-100 to-rose-100 flex items-center justify-center mb-4">
                  <div className={`w-20 h-20 ${m.preview} shadow-sm`}>
                    <div className="w-full h-2 bg-orange-200 rounded-full mb-2" />
                    <div className="w-3/4 h-2 bg-slate-200 rounded-full mb-2" />
                    <div className="w-1/2 h-2 bg-slate-200 rounded-full" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{m.name}</h3>
                <p className="mt-1 text-sm text-slate-500">{m.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <div className="inline-block rounded-xl bg-slate-900 text-left px-6 py-4 shadow-lg">
              <p className="text-xs text-slate-400 mb-1">Add to any website:</p>
              <code className="text-sm text-emerald-400 font-mono">&lt;script src=&quot;your-domain.com/widget/foxes-booking.js&quot;&gt;&lt;/script&gt;</code>
            </div>
          </div>
        </div>
      </section>

      {/* Live Hotel Demos */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-orange-600 uppercase tracking-wider">Live Demos</p>
            <h2 className="mt-3 text-4xl font-bold text-slate-900">See it in action</h2>
            <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">4 complete hotel websites, each showcasing a different widget integration mode. Click to explore.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { name: "The Grand Aurelia", type: "Luxury Boutique Hotel", href: "/hotel-booking/luxury", color: "#8B6914", mode: "Inline Widget", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80" },
              { name: "Azure Bay Resort", type: "Beachfront Resort & Spa", href: "/hotel-booking/resort", color: "#0E7490", mode: "Sidebar Widget", img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80" },
              { name: "Metro Luxe Hotel", type: "City Business Hotel", href: "/hotel-booking/city", color: "#4F46E5", mode: "Button Widget", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80" },
              { name: "The Riad Amber", type: "Heritage Boutique Riad", href: "/hotel-booking/heritage", color: "#7C3A21", mode: "Calendar Widget", img: "https://images.unsplash.com/photo-1539437829697-1b4ed5aebd19?w=800&q=80" },
            ].map((h) => (
              <a key={h.href} href={h.href} className="group block rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="h-48 overflow-hidden">
                  <img src={h.img} alt={h.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium uppercase tracking-wider" style={{ color: h.color }}>{h.type}</span>
                    <span className="text-xs font-medium text-white px-2.5 py-1 rounded-full" style={{ background: h.color }}>{h.mode}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors">{h.name}</h3>
                  <p className="mt-2 text-sm text-slate-400 flex items-center gap-1">
                    View demo
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-rose-600 uppercase tracking-wider">Features</p>
            <h2 className="mt-3 text-4xl font-bold text-slate-900">Everything you need to manage properties</h2>
            <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">From booking to checkout — a complete property management system built on modern tech.</p>
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
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-pink-600 uppercase tracking-wider">Dashboard</p>
            <h2 className="mt-3 text-4xl font-bold text-slate-900">Full visibility, zero guesswork</h2>
          </div>
          <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 sm:p-12 shadow-2xl">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
              {[
                { label: "Revenue", value: "$24,580", change: "+12%" },
                { label: "Bookings", value: "142", change: "+8%" },
                { label: "Occupancy", value: "87%", change: "+5%" },
                { label: "ADR", value: "$173", change: "+3%" },
              ].map((m) => (
                <div key={m.label} className="rounded-xl bg-white/5 border border-white/10 p-4">
                  <p className="text-xs text-white/40">{m.label}</p>
                  <p className="text-xl font-bold text-white mt-1">{m.value}</p>
                  <p className="text-xs text-emerald-400 mt-0.5">{m.change} this month</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-2">
              {Array.from({ length: 28 }, (_, i) => {
                const occ = [90, 85, 78, 92, 88, 65, 70, 95, 82, 75, 90, 88, 72, 60, 85, 92, 78, 95, 80, 70, 88, 92, 75, 85, 90, 82, 78, 65][i];
                const bg = occ > 85 ? "bg-emerald-500/60" : occ > 70 ? "bg-amber-500/40" : "bg-rose-500/30";
                return <div key={i} className={`h-8 rounded ${bg}`} title={`${occ}% occupied`} />;
              })}
            </div>
            <p className="text-xs text-white/30 text-center mt-4">28-day occupancy heatmap</p>
          </div>
        </div>
      </section>

      {/* Tech */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-xs uppercase tracking-wider text-slate-400 mb-8">Tech Stack</p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-slate-400">
            {["Next.js 16", "React 19", "MongoDB Atlas", "Stripe", "Radix UI", "Tailwind CSS", "Zustand", "React Query", "Zod", "Playwright"].map((tech) => (
              <span key={tech} className="rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">{tech}</span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
