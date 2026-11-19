"use client";
import { BookingCalendar } from "@/components/booking-calendar";


const features = [
  { title: "One script on your site", desc: "Add the booking calendar to any page with one script tag. It only loads on the sites the business approves.", gradient: "from-violet-500 to-purple-500", icon: "M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" },
  { title: "Live availability", desc: "Guests see only the days and times that are open, with the price for each day.", gradient: "from-amber-500 to-orange-500", icon: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" },
  { title: "Your tours and prices", desc: "Each tour carries its own photos, duration, price and guest types, managed by the operator.", gradient: "from-rose-500 to-pink-500", icon: "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" },
];



export default function BookingEnginePage() {
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
            <span className="text-sm text-white/70 font-medium">AI Booking, live on a demo catalogue</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
            Book a tour
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">in a few taps.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            A booking calendar for your website: choose a tour, a date, a time and guests, with the price from live availability. Below it runs on the Foxes demo catalogue.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#try" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-purple-500 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-blue-500/25 hover:shadow-2xl transition-all hover:-translate-y-0.5">
              Try the calendar
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
            </a>
            <a href="#features" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-base font-medium text-white/80 hover:bg-white/5 transition">See features</a>
          </div>
        </div>
      </section>

      {/* Live calendar */}
      <section id="try" className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Live demo</p>
            <h2 className="mt-3 text-4xl font-bold text-slate-900">Try the booking calendar</h2>
            <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">Pick a date, a time and guests to see the price. This is the Foxes demo catalogue, not a real operator: card payment is switched off here, so please do not complete a booking.</p>
          </div>
          <BookingCalendar />
          <div className="mt-10 rounded-2xl bg-slate-900 p-6 text-left overflow-x-auto">
            <p className="text-xs text-slate-400 mb-2">Embed on your website:</p>
            <pre className="text-sm text-emerald-400 font-mono whitespace-pre">{`<div id="foxes-calendar-embed"></div>
<script src="https://booking.foxestechnology.com/widget/foxes-calendar-embed.js"></script>
<script>
  FoxesCalendarEmbed.init({
    containerId: "foxes-calendar-embed",
    orgId: "YOUR_ORGANISATION_ID",
    apiUrl: "https://foxes-api-production.up.railway.app/api/v1"
  });
</script>`}</pre>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">Features</p>
            <h2 className="mt-3 text-4xl font-bold text-slate-900">What the guest gets</h2>
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

    </main>
  );
}
