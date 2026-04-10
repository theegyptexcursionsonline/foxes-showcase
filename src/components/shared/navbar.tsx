"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const products = [
  { name: "Voice Agent", href: "/voice-agent", color: "from-indigo-500 to-pink-500", icon: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" },
  { name: "Search Agent", href: "/search-agent", color: "from-emerald-500 to-cyan-500", icon: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" },
  { name: "Hotel Booking", href: "/hotel-booking", color: "from-orange-500 to-rose-500", icon: "M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0h.008v.008h-.008V7.5z" },
  { name: "Booking Engine", href: "/booking-engine", color: "from-blue-500 to-violet-500", icon: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" },
  { name: "Schema Audit", href: "/schema-audit", color: "from-purple-500 to-pink-500", icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/foxeslogo.png" alt="Foxes Technology" width={36} height={36} className="rounded-lg" />
          <span className="text-lg font-bold text-white tracking-tight">Foxes</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {products.map((p) => (
            <Link key={p.href} href={p.href} className="px-4 py-2 text-sm text-white/60 hover:text-white font-medium transition rounded-lg hover:bg-white/5">
              {p.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="https://foxes-ai-voice.netlify.app/login" className="text-sm text-white/60 hover:text-white font-medium transition">Log in</a>
          <a href="https://foxes-ai-voice.netlify.app/register" className="text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 to-pink-500 px-5 py-2 rounded-full hover:opacity-90 transition">Get started</a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-white/60 hover:text-white">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {open ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-slate-950/95 border-t border-white/5 px-6 py-4 space-y-1">
          {products.map((p) => (
            <Link key={p.href} href={p.href} onClick={() => setOpen(false)} className="flex items-center gap-3 px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d={p.icon} /></svg>
              {p.name}
            </Link>
          ))}
          <div className="pt-3 border-t border-white/10 flex gap-3">
            <a href="https://foxes-ai-voice.netlify.app/login" className="flex-1 text-center text-sm text-white/60 border border-white/20 py-2.5 rounded-full hover:bg-white/5 transition">Log in</a>
            <a href="https://foxes-ai-voice.netlify.app/register" className="flex-1 text-center text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 to-pink-500 py-2.5 rounded-full">Get started</a>
          </div>
        </div>
      )}
    </nav>
  );
}
