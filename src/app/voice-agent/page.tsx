import { WidgetEmbed } from "@/components/widget-embed";
import { VoiceHeroCard } from "@/components/voice-hero-card";

const features = [
  { title: "Agentic AI with Tool Calling", desc: "GPT-powered with function calling — searches knowledge bases, creates bookings, files complaints, and recommends products in real-time.", gradient: "from-indigo-500 to-blue-500", icon: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" },
  { title: "Natural Voice Conversations", desc: "Deepgram STT + TTS for ultra-low latency. Sentence-level streaming — voices sound human, not robotic.", gradient: "from-pink-500 to-rose-500", icon: "M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" },
  { title: "Knowledge Base RAG", desc: "Pinecone vector search retrieves relevant documents in real-time. Your agent answers with facts, not hallucinations.", gradient: "from-orange-500 to-amber-500", icon: "M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" },
  { title: "29+ Languages", desc: "Speak to customers in their language. Arabic, English, French, Spanish, and 25 more — with automatic detection.", gradient: "from-emerald-500 to-teal-500", icon: "M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" },
  { title: "Multi-Channel Deploy", desc: "Deploy on phone (Twilio), web widget, WhatsApp, or IVR. One agent, every channel.", gradient: "from-violet-500 to-purple-500", icon: "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" },
  { title: "Enterprise Security", desc: "AES-256 encryption, JWT auth, rate limiting, and role-based access. Built for production.", gradient: "from-cyan-500 to-blue-500", icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" },
];

const sampleQuestions = [
  "What tours do you offer?",
  "How much is the Pyramids & Nile Cruise?",
  "What's your cancellation policy?",
  "I want to book a Red Sea trip for 2",
  "Do you have Arabic-speaking guides?",
];

const steps = [
  { num: "01", title: "User speaks or types", desc: "Voice is captured via the browser microphone and transcribed using Deepgram Nova-2 in real-time, or the user types a message directly.", color: "text-indigo-600", bg: "bg-indigo-50", border: "border-indigo-200" },
  { num: "02", title: "AI processes with tools", desc: "GPT analyzes the request, searches the knowledge base via Pinecone vector similarity, and calls tools like booking or complaint handlers.", color: "text-pink-600", bg: "bg-pink-50", border: "border-pink-200" },
  { num: "03", title: "Voice response streams back", desc: "The response is streamed sentence-by-sentence to Deepgram TTS, generating natural audio that plays as it arrives — under 2 seconds.", color: "text-orange-600", bg: "bg-orange-50", border: "border-orange-200" },
];

export default function VoiceAgentPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/30 via-transparent to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-indigo-600/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-pink-600/10 blur-3xl animate-pulse" style={{ animationDelay: "3s" }} />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            {/* Left: text */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-4 py-1.5 mb-8 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span className="text-sm text-white/70 font-medium">Live AI Voice Agent</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                Your AI concierge
                <br />
                <span className="bg-gradient-to-r from-indigo-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">never sleeps.</span>
              </h1>

              <p className="mt-6 text-lg sm:text-xl text-white/60 max-w-xl leading-relaxed">
                Intelligent voice agents that answer calls, book tours, handle complaints, and upsell — powered by GPT with real-time function calling.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-center lg:items-start gap-4">
                <a href="https://foxes-ai-voice.netlify.app/register" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 via-pink-500 to-orange-500 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-indigo-500/25 hover:shadow-2xl hover:shadow-indigo-500/30 transition-all hover:-translate-y-0.5">
                  Start free trial
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                </a>
                <a href="#features" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-base font-medium text-white/80 hover:bg-white/5 transition">
                  See features
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </a>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-6 max-w-sm mx-auto lg:mx-0">
                {[{ value: "29+", label: "Languages" }, { value: "<2s", label: "Response" }, { value: "24/7", label: "Always On" }].map((s) => (
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
                agentRole="AI Voice Concierge"
                accent="indigo"
                samplePrompts={[
                  "What tours do you offer?",
                  "Book a Red Sea trip for 2 people",
                  "I want to file a complaint",
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">Capabilities</p>
            <h2 className="mt-3 text-4xl font-bold text-slate-900">Everything your voice agent needs</h2>
            <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">Built for hospitality, travel, and service businesses that want AI-powered conversations without the complexity.</p>
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

      {/* Demo */}
      <section id="demo" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-pink-600 uppercase tracking-wider">Live Demo</p>
            <h2 className="mt-3 text-4xl font-bold text-slate-900">Talk to our AI agent now</h2>
            <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">Click the voice widget in the bottom-right corner to start a conversation. Ask anything about Egypt tours — the agent has a full knowledge base.</p>
          </div>
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Try asking</h3>
              <div className="space-y-3">
                {sampleQuestions.map((q) => (
                  <div key={q} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-5 py-3.5 hover:bg-indigo-50 hover:border-indigo-200 transition cursor-default">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-100">
                      <svg className="w-4 h-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" /></svg>
                    </div>
                    <p className="text-sm text-slate-700 font-medium">&ldquo;{q}&rdquo;</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-10 shadow-2xl text-center">
                <div className="inline-flex items-center gap-3 rounded-full bg-white/10 border border-white/10 px-6 py-3 backdrop-blur">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400" />
                  </span>
                  <span className="text-white font-medium">Emma is listening...</span>
                </div>
                <p className="mt-6 text-white/40 text-sm">Click the microphone button in the bottom-right corner</p>
                <div className="mt-8 grid grid-cols-3 gap-4">
                  {[{ label: "Agent", value: "Emma" }, { label: "Engine", value: "GPT + Deepgram" }, { label: "KB Docs", value: "14" }].map((item) => (
                    <div key={item.label} className="rounded-xl bg-white/5 border border-white/10 p-3">
                      <p className="text-xs text-white/40">{item.label}</p>
                      <p className="text-sm font-semibold text-white mt-0.5">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-4 right-8 flex items-center gap-2 text-sm text-slate-400">
                <span>Widget is here</span>
                <svg className="w-5 h-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 13l-5 5m0 0l-5-5m5 5V6" /></svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-orange-600 uppercase tracking-wider">How It Works</p>
            <h2 className="mt-3 text-4xl font-bold text-slate-900">Three steps to a conversation</h2>
          </div>
          <div className="space-y-6">
            {steps.map((step) => (
              <div key={step.num} className={`flex gap-6 rounded-2xl border ${step.border} ${step.bg} p-8 items-start`}>
                <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white ${step.color} text-2xl font-bold shadow-sm border ${step.border}`}>{step.num}</div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">{step.title}</h3>
                  <p className="mt-2 text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <p className="text-xs uppercase tracking-wider text-slate-400 mb-6">Powered by</p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-slate-400">
              {["OpenAI GPT", "Deepgram Nova-2", "Deepgram TTS", "ElevenLabs", "MongoDB Atlas", "Pinecone", "Node.js", "Next.js"].map((tech) => (
                <span key={tech} className="rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <WidgetEmbed />
    </main>
  );
}
