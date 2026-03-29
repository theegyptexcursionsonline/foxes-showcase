import { SearchDemo } from "@/components/search-demo";
import { SearchWidgetEmbed } from "@/components/search-widget-embed";

const features = [
  { title: "Multi-Model AI", desc: "Switch between Claude, GPT, and Gemini — use the best model for each query type. No vendor lock-in.", gradient: "from-emerald-500 to-teal-500", icon: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" },
  { title: "Semantic Vector Search", desc: "Pinecone-powered similarity search that understands meaning, not just keywords. Find relevant results even with different phrasing.", gradient: "from-cyan-500 to-blue-500", icon: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" },
  { title: "Web Scraping & Ingestion", desc: "Crawl any website, upload PDFs, CSVs, or documents. Content is automatically chunked, embedded, and indexed.", gradient: "from-violet-500 to-purple-500", icon: "M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3" },
  { title: "Embeddable Widget", desc: "Drop a search widget into any website with one script tag. Customizable theme, position, and behavior.", gradient: "from-pink-500 to-rose-500", icon: "M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" },
  { title: "Analytics Dashboard", desc: "Track search queries, click-through rates, failed searches, and popular topics. Know what your users want.", gradient: "from-amber-500 to-orange-500", icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" },
  { title: "Multi-Tenant Architecture", desc: "Each customer gets isolated data, API keys, and search indexes. Perfect for SaaS and white-label deployments.", gradient: "from-teal-500 to-emerald-500", icon: "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" },
];

const useCases = [
  { title: "Hotel Knowledge Base", desc: "Guests search for amenities, policies, local attractions, and room details. Answers come from your actual content.", icon: "M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21" },
  { title: "Tour & Activity Search", desc: "Travelers find excursions by destination, interest, budget, or availability. AI understands 'family-friendly beach activities near me'.", icon: "M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" },
  { title: "Support Docs", desc: "Employees and customers search internal documentation. No more digging through PDFs — just ask in natural language.", icon: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" },
];

export default function SearchAgentPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/30 via-transparent to-transparent" />
        <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-emerald-600/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-cyan-600/10 blur-3xl animate-pulse" style={{ animationDelay: "3s" }} />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-4 py-1.5 mb-8 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-sm text-white/70 font-medium">AI-Powered Semantic Search</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
            Search that
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">understands you.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            Semantic search powered by Claude, GPT, and Gemini. Crawl websites, upload documents, and let your users find answers instantly with AI.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://foxes-ai-voice.netlify.app/register" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-emerald-500/25 hover:shadow-2xl transition-all hover:-translate-y-0.5">
              Start free trial
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
            </a>
            <a href="#features" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-base font-medium text-white/80 hover:bg-white/5 transition">See features</a>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
            {[{ value: "3", label: "AI Models" }, { value: "99.2%", label: "Accuracy" }, { value: "<500ms", label: "Search Time" }].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl font-bold text-white">{s.value}</p>
                <p className="mt-1 text-sm text-white/40">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live search demo */}
      <SearchDemo />

      {/* Widget Demos */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider">Widget Modes</p>
            <h2 className="mt-3 text-4xl font-bold text-slate-900">Four ways to embed AI search</h2>
            <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">One script tag, multiple integration modes. Each demo page shows a live widget you can interact with.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Floating Chat", href: "/search-agent/floating", color: "#8b5cf6", desc: "Chat bubble in the corner — click to expand", icon: "M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" },
              { name: "Search Bar", href: "/search-agent/search-bar", color: "#0891b2", desc: "Full-width search bar at page bottom", icon: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" },
              { name: "Chat Modal", href: "/search-agent/chat-modal", color: "#f59e0b", desc: "Centered overlay modal with full chat", icon: "M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" },
              { name: "Inline Chat", href: "/search-agent/inline-chat", color: "#10b981", desc: "Embedded directly in your page content", icon: "M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" },
            ].map((w) => (
              <a key={w.href} href={w.href} className="group block rounded-2xl border border-slate-200 bg-white p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl text-white shadow-lg mb-4" style={{ background: w.color }}>
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d={w.icon} /></svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{w.name}</h3>
                <p className="mt-1 text-sm text-slate-500">{w.desc}</p>
                <p className="mt-3 text-xs font-semibold flex items-center justify-center gap-1 group-hover:gap-2 transition-all" style={{ color: w.color }}>
                  View demo
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wider">Capabilities</p>
            <h2 className="mt-3 text-4xl font-bold text-slate-900">Search that thinks</h2>
            <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">Not just keyword matching — AI understands context, synonyms, and intent to surface the most relevant results.</p>
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

      {/* Use Cases */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider">Use Cases</p>
            <h2 className="mt-3 text-4xl font-bold text-slate-900">Built for hospitality</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {useCases.map((uc) => (
              <div key={uc.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 mb-5">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d={uc.icon} /></svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{uc.title}</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-xs uppercase tracking-wider text-slate-400 mb-8">Tech Stack</p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-slate-400">
            {["Anthropic Claude", "OpenAI GPT", "Google Gemini", "Pinecone Vectors", "LlamaIndex", "Cheerio", "MongoDB Atlas", "Next.js", "Stripe"].map((tech) => (
              <span key={tech} className="rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">{tech}</span>
            ))}
          </div>
        </div>
      </section>

      <SearchWidgetEmbed />
    </main>
  );
}
