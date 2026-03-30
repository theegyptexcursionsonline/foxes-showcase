import Link from "next/link";

const products = [
  {
    name: "AI Voice Agent",
    tagline: "Your AI concierge, 24/7",
    desc: "Intelligent voice agents that handle calls, answer questions in 29+ languages, create bookings, and upsell — powered by GPT with real-time knowledge base retrieval.",
    href: "/voice-agent",
    gradient: "from-indigo-500 via-pink-500 to-orange-500",
    shadow: "shadow-indigo-500/20",
    icon: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z",
    stats: [
      { value: "29+", label: "Languages" },
      { value: "<2s", label: "Latency" },
      { value: "24/7", label: "Uptime" },
    ],
    features: ["Deepgram STT + TTS", "GPT with tool calling", "Knowledge base RAG", "Multi-channel deploy"],
  },
  {
    name: "AI Search Agent",
    tagline: "Semantic search, zero guesswork",
    desc: "AI-powered semantic search that understands intent, not just keywords. Crawl websites, upload documents, and let your users find answers instantly.",
    href: "/search-agent",
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    shadow: "shadow-emerald-500/20",
    icon: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z",
    stats: [
      { value: "3", label: "AI Models" },
      { value: "99.2%", label: "Accuracy" },
      { value: "<500ms", label: "Search" },
    ],
    features: ["Claude, GPT & Gemini", "Pinecone vectors", "Web scraping", "Multi-tenant"],
  },
  {
    name: "AI Hotel Booking",
    tagline: "Smart property management",
    desc: "Full-stack property management with AI-powered booking, embeddable widgets, guest management, revenue dashboards, and Stripe payments.",
    href: "/hotel-booking",
    gradient: "from-orange-500 via-rose-500 to-pink-500",
    shadow: "shadow-orange-500/20",
    icon: "M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0h.008v.008h-.008V7.5z",
    stats: [
      { value: "4", label: "Widget Modes" },
      { value: "50+", label: "API Endpoints" },
      { value: "Stripe", label: "Payments" },
    ],
    features: ["Embeddable widgets", "Room management", "Guest CRM", "Revenue analytics"],
  },
  {
    name: "AI Booking Engine",
    tagline: "Multi-channel booking at scale",
    desc: "Complete SaaS booking platform with 8 embeddable widget types, Stripe Connect payments, multi-channel distribution, and a React Native operator app.",
    href: "/booking-engine",
    gradient: "from-blue-500 via-violet-500 to-purple-500",
    shadow: "shadow-blue-500/20",
    icon: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5",
    stats: [
      { value: "8", label: "Widget Types" },
      { value: "33+", label: "API Modules" },
      { value: "3", label: "Platforms" },
    ],
    features: ["Stripe Connect", "Multi-channel", "Operator mobile app", "AI voice agent"],
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/30 via-transparent to-transparent" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`, backgroundSize: "64px 64px" }} />

        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-indigo-600/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-pink-600/10 blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/3 right-1/3 w-64 h-64 rounded-full bg-emerald-600/10 blur-3xl animate-pulse" style={{ animationDelay: "4s" }} />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-4 py-1.5 mb-8 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-sm text-white/70 font-medium">Built for Hospitality & Travel</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
            AI that powers
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              your business.
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            Voice agents, semantic search, and smart booking — three AI products built for hotels, resorts, and travel companies.
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
            <div className="w-1 h-2 rounded-full bg-white/40 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">Our Products</p>
            <h2 className="mt-3 text-4xl font-bold text-slate-900">Three products, one platform</h2>
            <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
              Each product works standalone or together — built on the same modern stack, designed for hospitality.
            </p>
          </div>

          <div className="space-y-8">
            {products.map((p, i) => (
              <Link
                key={p.href}
                href={p.href}
                className={`group block rounded-3xl border border-slate-200 bg-white p-8 lg:p-10 shadow-sm hover:shadow-2xl hover:${p.shadow} hover:-translate-y-1 transition-all duration-300`}
              >
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                  {/* Icon + info */}
                  <div className="flex-1">
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${p.gradient} text-white shadow-lg mb-6`}>
                      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={p.icon} />
                      </svg>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900">{p.name}</h3>
                    <p className={`text-lg font-semibold bg-gradient-to-r ${p.gradient} bg-clip-text text-transparent mt-1`}>{p.tagline}</p>
                    <p className="mt-3 text-slate-500 leading-relaxed max-w-xl">{p.desc}</p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {p.features.map((f) => (
                        <span key={f} className="text-xs font-medium text-slate-500 bg-slate-100 rounded-full px-3 py-1.5">{f}</span>
                      ))}
                    </div>
                  </div>

                  {/* Stats + CTA */}
                  <div className="lg:text-right shrink-0">
                    <div className="flex gap-6 lg:gap-8 mb-8">
                      {p.stats.map((s) => (
                        <div key={s.label} className="text-center lg:text-right">
                          <p className="text-2xl font-bold text-slate-900">{s.value}</p>
                          <p className="text-xs text-slate-400 mt-0.5">{s.label}</p>
                        </div>
                      ))}
                    </div>
                    <span className={`inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${p.gradient} bg-clip-text text-transparent group-hover:gap-3 transition-all`}>
                      View showcase
                      <svg className="w-4 h-4 text-slate-400 group-hover:text-slate-600 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-xs uppercase tracking-wider text-slate-400 mb-8">Powered by</p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-slate-400">
            {["OpenAI GPT-5.3", "Deepgram Nova-2", "Anthropic Claude", "Google Gemini", "Pinecone", "MongoDB Atlas", "Stripe", "Twilio", "Next.js", "Node.js"].map((tech) => (
              <span key={tech} className="rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">{tech}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white">Explore our products</h2>
          <p className="mt-4 text-lg text-white/50">Each product works standalone or together — built on the same modern stack.</p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#products" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 via-pink-500 to-orange-500 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-indigo-500/25 hover:shadow-2xl transition-all hover:-translate-y-0.5">
              View Products
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
