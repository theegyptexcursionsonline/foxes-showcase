"use client";
import Link from "next/link";
import Image from "next/image";

const productLinks = [
  { name: "AI Voice", href: "/voice-agent" },
  { name: "AI Search", href: "/search-agent" },
  { name: "AI Booking", href: "/booking-engine" },
  { name: "FoxesConnect", href: "/foxesconnect" },
];

export function Footer() {
  return (
    <footer className="bg-slate-950 py-16 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <Image
                src="/foxeslogo.png"
                alt="Foxes Technology"
                width={40}
                height={40}
                className="rounded-xl"
                style={{ width: 40, height: 40 }}
              />
              <span className="text-xl font-bold text-white">Foxes Technology</span>
            </div>
            <p className="text-sm text-white/40 max-w-sm leading-relaxed">
              AI Voice, AI Search, AI Booking and FoxesConnect for tour and travel businesses, each shown here working on one demo business.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-4">Products</h4>
            <ul className="space-y-2.5">
              {productLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/40 hover:text-white transition">{l.name}</Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-white/5 text-center text-xs text-white/30">
          &copy; {new Date().getFullYear()} Foxes Technology. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
