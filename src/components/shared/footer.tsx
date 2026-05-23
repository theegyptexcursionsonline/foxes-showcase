"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const productLinks = [
  { name: "Voice Agent", href: "/voice-agent" },
  { name: "Search Agent", href: "/search-agent" },
  { name: "Hotel Booking", href: "/hotel-booking" },
  { name: "Booking Engine", href: "/booking-engine" },
];

const companyLinks = [
  { name: "About", href: "#" },
  { name: "Careers", href: "#" },
  { name: "Contact", href: "#" },
  { name: "Privacy", href: "#" },
];

export function Footer() {
  const pathname = usePathname();
  // Brand demo pages are standalone landing pages — no showcase chrome.
  if (pathname?.startsWith("/voice-demos")) return null;
  return (
    <footer className="bg-slate-950 py-16 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid gap-12 md:grid-cols-4">
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
              AI-powered solutions for hospitality, travel, and service businesses. Voice agents, semantic search, and booking management — all in one platform.
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

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2.5">
              {companyLinks.map((l) => (
                <li key={l.name}>
                  <a href={l.href} className="text-sm text-white/40 hover:text-white transition">{l.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 text-center text-xs text-white/30">
          &copy; {new Date().getFullYear()} Foxes Technology LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
