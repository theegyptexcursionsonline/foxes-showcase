import { ConnectWidgetEmbed } from "@/components/connect-widget-embed";
import { CONNECT_DEMO } from "@/lib/showcase-config";

const steps = [
  { title: "The visitor asks", desc: "From the chat button on your website, at any hour." },
  { title: "Answered from your help articles", desc: "Once switched on, replies come from your own articles and show which one they used." },
  { title: "Handed to your team", desc: "Anything it cannot answer goes to your shared inbox, with the whole conversation." },
];

export default function FoxesConnectPage() {
  return (
    <main>
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-4 py-1.5 mb-8">
            <span className="h-2 w-2 rounded-full bg-blue-400" />
            <span className="text-sm text-white/70 font-medium">FoxesConnect, live on a demo business</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-white leading-[1.1] tracking-tight">
            Every customer question,
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">one inbox.</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            A website chat for Foxes Demo Tours, the demo business every page here uses. Open the chat button in the corner and ask about a tour.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#how" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-4 text-base font-semibold text-white shadow-xl">How it works</a>
            <a href={CONNECT_DEMO.helpUrl} className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-base font-medium text-white/80 hover:bg-white/5 transition">Read the help articles</a>
          </div>
        </div>
      </section>

      <section id="how" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-slate-900 text-center">How a conversation goes</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <div key={s.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
                <p className="text-sm font-bold text-blue-600">0{i + 1}</p>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div role="note" className="mt-10 rounded-2xl border border-amber-200 bg-amber-50 p-6 text-amber-900">
            <p className="font-semibold">In this demo, the team answers.</p>
            <p className="mt-1 text-sm leading-relaxed">A business switches on automatic replies after it has checked its first 20 drafted replies. Foxes Demo Tours has not done that yet, so the chat hands your question to the team and keeps it safely in the queue. It is a demo business: no email or message is sent.</p>
          </div>
        </div>
      </section>

      <ConnectWidgetEmbed />
    </main>
  );
}
