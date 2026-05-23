"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  Code2,
  LayoutPanelLeft,
  MessageCircle,
  MessagesSquare,
  PanelLeftOpen,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import type { CSSProperties, ComponentType } from "react";

type Demo = {
  href: string;
  brand: string;
  tagline: string;
  surface: string;
  widget: string;
  prompt: string;
  answer: string;
  accent: string;
  glow: string;
  Icon: ComponentType<{ size?: number; strokeWidth?: number }>;
};

const DEMOS: Demo[] = [
  {
    href: "/search-agent/showcase/sahara-trails",
    brand: "Sahara Trails",
    tagline: "Hand-crafted journeys through Egypt's quiet corners.",
    surface: "Boutique tour operator",
    widget: "Floating chat bubble",
    prompt: "Can you build a quiet 8-day Egypt route?",
    answer: "Start Cairo, continue to Luxor, then slow down in Aswan with a private desert night.",
    accent: "#d97706",
    glow: "linear-gradient(135deg, #f59e0b, #92400e)",
    Icon: MessageCircle,
  },
  {
    href: "/search-agent/showcase/wanderhub",
    brand: "Wanderhub",
    tagline: "Search every operator. Pay one place. Skip the noise.",
    surface: "Travel marketplace",
    widget: "AI search bar",
    prompt: "Cairo for 5 days under $1,200",
    answer: "Best matches combine pyramids, a Nile dinner, and one slower day in Old Cairo.",
    accent: "#3b82f6",
    glow: "linear-gradient(135deg, #38bdf8, #1d4ed8)",
    Icon: Search,
  },
  {
    href: "/search-agent/showcase/lotus-cruise",
    brand: "Lotus Royale Cruises",
    tagline: "Five days on the Nile. Twenty staterooms. Gold-leaf finishings.",
    surface: "Single tour detail",
    widget: "Inline chat panel",
    prompt: "Is the five-day Nile sailing good for parents?",
    answer: "Yes. Choose the quieter upper-deck cabin and avoid the early Abu Simbel add-on.",
    accent: "#06b6d4",
    glow: "linear-gradient(135deg, #22d3ee, #0e7490)",
    Icon: PanelLeftOpen,
  },
  {
    href: "/search-agent/showcase/mirage-resort",
    brand: "Mirage Resort & Spa",
    tagline: "Reach our concierge before you've even checked in.",
    surface: "Five-star resort",
    widget: "Full-page chat",
    prompt: "Plan our arrival evening at the resort.",
    answer: "Book the sunset transfer, reserve the terrace table, then keep spa for the second day.",
    accent: "#b45309",
    glow: "linear-gradient(135deg, #fbbf24, #78350f)",
    Icon: MessagesSquare,
  },
  {
    href: "/search-agent/showcase/bookings-help",
    brand: "Bookings Helpdesk",
    tagline: "Self-serve answers for everything from refunds to rebookings.",
    surface: "Help center",
    widget: "Modal chat launcher",
    prompt: "Can I change tomorrow's pickup time?",
    answer: "Yes, if the operator confirms by 18:00. Share the booking reference to continue.",
    accent: "#22c55e",
    glow: "linear-gradient(135deg, #4ade80, #15803d)",
    Icon: Sparkles,
  },
  {
    href: "/search-agent/showcase/concierge-workspace",
    brand: "Foxes Concierge Workspace",
    tagline: "The newest split-screen assistant with chat, results, compare, map, and itinerary views.",
    surface: "Premium AI workspace",
    widget: "Slide-in full-height concierge",
    prompt: "Plan a best-value Egypt trip",
    answer: "Ask once, then review catalog matches, booking links, map context, and itinerary structure side by side.",
    accent: "#8b5cf6",
    glow: "linear-gradient(135deg, #8b5cf6, #14b8a6)",
    Icon: LayoutPanelLeft,
  },
];

const PROOF = [
  { icon: BookOpen, label: "Catalog-grounded answers" },
  { icon: Code2, label: "One script, multiple surfaces" },
  { icon: ShieldCheck, label: "Dashboard-controlled embeds" },
];

function MiniPreview({ demo }: { demo: Demo }) {
  const Icon = demo.Icon;

  return (
    <div className="mini-preview">
      <div className="browser-bar">
        <span className="dot red" />
        <span className="dot yellow" />
        <span className="dot green" />
        <span className="url">{demo.brand.toLowerCase().replaceAll(" ", "-")}.com</span>
      </div>
      <div className="preview-hero" style={{ background: demo.glow } as CSSProperties}>
        <span>{demo.surface}</span>
        <strong>{demo.brand}</strong>
      </div>
      <div className="preview-chat">
        <div className="visitor">{demo.prompt}</div>
        <div className="assistant-row">
          <div className="assistant-icon" style={{ background: demo.accent }}>
            <Icon size={14} strokeWidth={2.4} />
          </div>
          <div className="assistant">{demo.answer}</div>
        </div>
        <div className="result-pill">
          <span style={{ background: demo.glow }} />
          <div>
            <strong>{demo.widget}</strong>
            <small>Live widget mode</small>
          </div>
          <ArrowUpRight size={14} strokeWidth={2.6} />
        </div>
      </div>
    </div>
  );
}

export default function ShowcasePage() {
  const featured = DEMOS[1];

  return (
    <main className="hub">
      <section className="hero">
        <div className="hero-copy">
          <span className="hero-kicker">
            <Sparkles size={15} strokeWidth={2.4} />
            Foxes AI Search showcase
          </span>
          <h1>
            One concierge engine.
            <span>Six storefronts.</span>
          </h1>
          <p>
            A dark, client-ready gallery for the Search Unit. Each route is a working storefront
            that embeds a different Foxes widget surface while keeping the same catalog-powered AI
            layer underneath.
          </p>
          <div className="hero-actions">
            <Link href={featured.href} className="primary-action">
              Open marketplace demo
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </Link>
            <a href="#storefronts" className="secondary-action">
              Browse all storefronts
            </a>
          </div>
        </div>

        <div className="hero-preview">
          <MiniPreview demo={featured} />
          <div className="floating-note note-a">
            <Search size={15} strokeWidth={2.5} />
            Searches catalog, prices, policies, and booking URLs.
          </div>
          <div className="floating-note note-b">
            <LayoutPanelLeft size={15} strokeWidth={2.5} />
            Same dashboard config updates every surface.
          </div>
        </div>
      </section>

      <section className="proof-strip">
        {PROOF.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.label}>
              <Icon size={18} strokeWidth={2.4} />
              {item.label}
            </div>
          );
        })}
      </section>

      <section id="storefronts" className="storefronts">
        <div className="section-head">
          <span>Widget modes in context</span>
          <h2>Pick the page that matches the client’s business model.</h2>
          <p>
            The layout stays dark and premium, but the demos now explain why each widget exists and
            what a client should test when they open the page.
          </p>
        </div>

        <div className="hub-grid">
          {DEMOS.map((demo, index) => {
            const Icon = demo.Icon;
            return (
              <Link
                key={demo.href}
                href={demo.href}
                className={`card ${index === 0 ? "wide" : ""}`}
                style={{ "--accent": demo.accent, "--glow": demo.glow } as CSSProperties}
              >
                <span className="card-glow" />
                <div className="card-copy">
                  <div className="card-head">
                    <div className="card-icon">
                      <Icon size={18} strokeWidth={2.2} />
                    </div>
                    <span className="card-tag">{demo.surface}</span>
                  </div>
                  <h3>{demo.brand}</h3>
                  <p>{demo.tagline}</p>
                  <div className="card-foot">
                    <span>{demo.widget}</span>
                    <ArrowUpRight size={16} strokeWidth={2.4} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <style jsx global>{`
        .hub {
          min-height: 100vh;
          background:
            radial-gradient(circle at 18% 8%, rgba(124, 58, 237, 0.24), transparent 30%),
            radial-gradient(circle at 82% 18%, rgba(59, 130, 246, 0.18), transparent 34%),
            linear-gradient(180deg, #07080c 0%, #0b0d15 48%, #07080c 100%);
          color: #e7eaf2;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, sans-serif;
          padding: 32px 28px 80px;
          isolation: isolate;
          position: relative;
          overflow: hidden;
        }

        .hub::before {
          content: "";
          position: absolute;
          inset: 0;
          opacity: 0.13;
          pointer-events: none;
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.06) 1px, transparent 1px);
          background-size: 48px 48px;
          mask-image: linear-gradient(to bottom, black, transparent 78%);
        }

        .hero,
        .proof-strip,
        .storefronts {
          width: min(1180px, calc(100vw - 40px));
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .primary-action,
        .secondary-action {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          text-decoration: none;
        }

        .hero {
          display: grid;
          grid-template-columns: minmax(0, 0.85fr) minmax(440px, 1.15fr);
          align-items: center;
          gap: 62px;
          padding-bottom: 58px;
        }

        .hero-kicker {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: 1px solid rgba(167, 139, 250, 0.24);
          background: rgba(124, 58, 237, 0.12);
          color: #c4b5fd;
          border-radius: 999px;
          padding: 9px 13px;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        h1,
        h2,
        h3,
        p {
          margin: 0;
        }

        .hero h1 {
          margin-top: 24px;
          font-size: clamp(48px, 6.5vw, 86px);
          line-height: 0.92;
          font-weight: 950;
          letter-spacing: -0.06em;
          color: #f8fafc;
        }

        .hero h1 span {
          display: block;
          background: linear-gradient(135deg, #c084fc, #f472b6, #fb923c);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero p {
          margin-top: 24px;
          color: #aeb7c8;
          font-size: 17px;
          line-height: 1.72;
          max-width: 610px;
        }

        .hero-actions {
          margin-top: 34px;
          display: flex;
          flex-wrap: wrap;
          gap: 13px;
        }

        .primary-action,
        .secondary-action {
          min-height: 50px;
          border-radius: 16px;
          padding: 0 18px;
          font-size: 14px;
          font-weight: 850;
        }

        .primary-action {
          color: #0b0d15;
          background: #fff;
          box-shadow: 0 22px 55px rgba(255, 255, 255, 0.12);
        }

        .secondary-action {
          color: #e7eaf2;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.045);
        }

        .hero-preview {
          position: relative;
        }

        .hero-preview .mini-preview {
          transform: rotate(1deg);
          box-shadow: 0 42px 120px rgba(0, 0, 0, 0.46);
        }

        .floating-note {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 9px;
          max-width: 230px;
          border-radius: 18px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(10, 13, 24, 0.86);
          backdrop-filter: blur(20px);
          box-shadow: 0 24px 70px rgba(0, 0, 0, 0.34);
          color: #d8deea;
          padding: 13px 14px;
          font-size: 12px;
          font-weight: 750;
          line-height: 1.35;
        }

        .note-a {
          top: 28px;
          right: -24px;
        }

        .note-b {
          left: -26px;
          bottom: 50px;
        }

        .mini-preview {
          overflow: hidden;
          border-radius: 28px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: #0d111c;
        }

        .browser-bar {
          height: 42px;
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 0 14px;
          background: #0b0d15;
        }

        .dot {
          width: 9px;
          height: 9px;
          border-radius: 999px;
        }

        .red {
          background: #fb7185;
        }

        .yellow {
          background: #fbbf24;
        }

        .green {
          background: #34d399;
        }

        .url {
          margin-left: 8px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.05);
          padding: 5px 12px;
          color: #98a0af;
          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 11px;
        }

        .preview-hero {
          height: 170px;
          position: relative;
          padding: 24px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          overflow: hidden;
        }

        .preview-hero::after {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, rgba(7, 8, 12, 0.82), rgba(7, 8, 12, 0.12)),
            linear-gradient(135deg, transparent 0 50%, rgba(255, 255, 255, 0.14) 50% 51%, transparent 51%);
        }

        .preview-hero span,
        .preview-hero strong {
          position: relative;
          z-index: 1;
        }

        .preview-hero span {
          color: rgba(255, 255, 255, 0.62);
          font-size: 10px;
          letter-spacing: 0.26em;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .preview-hero strong {
          color: #fff;
          font-size: 28px;
          letter-spacing: -0.04em;
        }

        .preview-chat {
          padding: 18px;
          background: #111827;
        }

        .visitor {
          margin-left: auto;
          max-width: 82%;
          border-radius: 18px 18px 5px 18px;
          background: linear-gradient(135deg, #7c3aed, #d946ef);
          color: #fff;
          padding: 12px 14px;
          font-size: 13px;
          line-height: 1.45;
        }

        .assistant-row {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-top: 13px;
        }

        .assistant-icon {
          width: 32px;
          height: 32px;
          border-radius: 12px;
          color: #fff;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .assistant {
          border: 1px solid rgba(255, 255, 255, 0.09);
          background: rgba(255, 255, 255, 0.06);
          color: #d8deea;
          border-radius: 18px 18px 18px 5px;
          padding: 12px 14px;
          font-size: 13px;
          line-height: 1.52;
        }

        .result-pill {
          display: grid;
          grid-template-columns: 52px 1fr auto;
          align-items: center;
          gap: 12px;
          margin-top: 14px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.055);
          padding: 10px;
          color: #f8fafc;
        }

        .result-pill > span {
          width: 52px;
          height: 44px;
          border-radius: 12px;
        }

        .result-pill strong,
        .result-pill small {
          display: block;
        }

        .result-pill strong {
          font-size: 13px;
          letter-spacing: -0.015em;
        }

        .result-pill small {
          margin-top: 3px;
          color: #98a0af;
          font-size: 11px;
          font-weight: 650;
        }

        .proof-strip {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
          margin-top: 26px;
        }

        .proof-strip div {
          display: flex;
          align-items: center;
          gap: 10px;
          min-height: 70px;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.04);
          color: #cbd5e1;
          padding: 0 18px;
          font-size: 13px;
          font-weight: 790;
        }

        .proof-strip svg {
          color: #c4b5fd;
        }

        .storefronts {
          padding-top: 76px;
        }

        .section-head {
          max-width: 760px;
          margin-bottom: 32px;
        }

        .section-head span {
          display: block;
          color: #c4b5fd;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .section-head h2 {
          color: #f8fafc;
          font-size: clamp(30px, 4vw, 52px);
          line-height: 1.02;
          letter-spacing: -0.045em;
          font-weight: 930;
        }

        .section-head p {
          margin-top: 16px;
          color: #aeb7c8;
          font-size: 16px;
          line-height: 1.7;
        }

        .hub-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
        }

        .card {
          position: relative;
          display: flex;
          min-height: 292px;
          padding: 28px;
          border-radius: 26px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.065), rgba(255, 255, 255, 0.025)),
            radial-gradient(circle at 100% 0%, color-mix(in srgb, var(--accent), transparent 82%), transparent 42%);
          color: inherit;
          text-decoration: none;
          overflow: hidden;
          isolation: isolate;
          transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), border-color 0.2s;
        }

        .card.wide {
          grid-column: span 2;
          min-height: 260px;
        }

        .card:hover {
          transform: translateY(-3px);
          border-color: color-mix(in srgb, var(--accent), transparent 55%);
        }

        .card-glow {
          position: absolute;
          inset: -60% -20% auto auto;
          width: 340px;
          height: 340px;
          border-radius: 50%;
          filter: blur(90px);
          opacity: 0.24;
          background: var(--glow);
          z-index: -1;
        }

        .card-copy {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-width: 0;
          width: 100%;
          padding: 0;
        }

        .card-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }

        .card-icon {
          width: 40px;
          height: 40px;
          border-radius: 13px;
          color: #fff;
          background: var(--glow);
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .card-tag {
          padding: 5px 10px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          font-size: 11px;
          font-weight: 850;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: #c4b5fd;
        }

        .card h3 {
          color: #f8fafc;
          font-size: 26px;
          line-height: 1;
          font-weight: 900;
          letter-spacing: -0.03em;
        }

        .card p {
          margin-top: 12px;
          color: #a7b0c0;
          font-size: 15px;
          line-height: 1.65;
        }

        .card-foot {
          margin-top: 34px;
          padding-top: 18px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 13px;
          color: #98a0af;
          font-weight: 720;
        }

        .card:hover .card-foot {
          color: #c4b5fd;
        }

        @media (max-width: 1060px) {
          .hero,
          .card,
          .card.wide {
            grid-template-columns: 1fr;
          }

          .hero-preview {
            max-width: 680px;
          }

          .hub-grid {
            grid-template-columns: 1fr;
          }

          .card.wide {
            grid-column: auto;
          }
        }

        @media (max-width: 720px) {
          .hub {
            padding: 24px 0 64px;
          }

          .hero,
          .proof-strip,
          .storefronts {
            width: min(100% - 28px, 1180px);
          }

          .hero {
            gap: 34px;
            padding-bottom: 40px;
          }

          .hero h1 {
            font-size: 46px;
          }

          .hero p {
            font-size: 15.5px;
          }

          .hero-actions,
          .primary-action,
          .secondary-action {
            width: 100%;
          }

          .hero-preview .mini-preview {
            transform: none;
          }

          .floating-note {
            position: static;
            max-width: none;
            margin-top: 12px;
          }

          .proof-strip {
            grid-template-columns: 1fr;
          }

          .storefronts {
            padding-top: 58px;
          }

          .card {
            padding: 20px;
            border-radius: 22px;
            min-height: 250px;
          }

          .card-copy {
            padding: 0;
          }

          .card-tag {
            font-size: 10px;
          }

        }
      `}</style>
    </main>
  );
}
