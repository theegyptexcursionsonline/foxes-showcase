"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  LayoutPanelLeft,
  MessageCircle,
  MessagesSquare,
  PanelTop,
  Search,
  Sparkles,
} from "lucide-react";
import type { ComponentType } from "react";

type Demo = {
  href: string;
  title: string;
  surface: string;
  mode: string;
  note: string;
  Icon: ComponentType<{ size?: number; strokeWidth?: number }>;
};

const DEMOS: Demo[] = [
  {
    href: "/search-agent/showcase/concierge-workspace",
    title: "Concierge Workspace",
    surface: "New split workspace",
    mode: "Slide-in full-height",
    note: "Chat, results, compare, map, and itinerary views in one workspace.",
    Icon: LayoutPanelLeft,
  },
  {
    href: "/search-agent/showcase/sahara-trails",
    title: "Floating Concierge",
    surface: "Tour operator page",
    mode: "Floating chat",
    note: "Opens from a launcher and answers from the shared tours catalog.",
    Icon: MessageCircle,
  },
  {
    href: "/search-agent/showcase/wanderhub",
    title: "Search Bar",
    surface: "Marketplace homepage",
    mode: "AI search bar",
    note: "Turns a search query into grounded results and tour cards.",
    Icon: Search,
  },
  {
    href: "/search-agent/showcase/lotus-cruise",
    title: "Inline Assistant",
    surface: "Product detail page",
    mode: "Inline chat",
    note: "Sits inside the page next to offer details and booking context.",
    Icon: PanelTop,
  },
  {
    href: "/search-agent/showcase/mirage-resort",
    title: "Full Page Chat",
    surface: "Hotel concierge page",
    mode: "Full-page widget",
    note: "Dedicated page experience for deeper planning conversations.",
    Icon: MessagesSquare,
  },
  {
    href: "/search-agent/showcase/bookings-help",
    title: "Modal Helpdesk",
    surface: "Support center",
    mode: "Modal chat",
    note: "Focused support flow for booking, policy, and refund questions.",
    Icon: Sparkles,
  },
];

const CHECKS = [
  "All demos stay on the Foxes showcase domain.",
  "Widget modes use the same tenant knowledge base for tour results.",
  "Cards can show images, pricing, duration, rating, and booking links when catalog data includes them.",
  "Branding, copy, theme, starter prompts, and allowed domains remain dashboard-controlled.",
];

export default function ShowcasePage() {
  return (
    <main className="showcase-page">
      <section className="shell">
        <header className="topbar">
          <Link href="/" className="brand">
            <img src="/foxeslogo.png" alt="" />
            <span>Foxes Search Unit</span>
          </Link>
          <a
            className="admin-link"
            href="https://ai-search-agent.netlify.app/demo"
            target="_blank"
            rel="noreferrer"
          >
            Open live demo
            <ArrowUpRight size={15} strokeWidth={2.4} />
          </a>
        </header>

        <section className="intro">
          <div>
            <p className="eyebrow">Testing showcase</p>
            <h1>Search Unit widget demos</h1>
            <p className="summary">
              Use this page to review the six widget surfaces connected to the same tenant catalog.
              Each link opens a normal page context, then the widget can be tested from there.
            </p>
          </div>
          <div className="status-card">
            <span className="live-dot" />
            <div>
              <strong>Shared tenant knowledge base</strong>
              <p>Tour answers and cards resolve from the same active catalog across widget modes.</p>
            </div>
          </div>
        </section>

        <section className="demo-grid" aria-label="Widget demo links">
          {DEMOS.map((demo) => {
            const Icon = demo.Icon;
            return (
              <Link
                className={`demo-card ${demo.href.includes("concierge-workspace") ? "featured" : ""}`}
                href={demo.href}
                key={demo.href}
              >
                <div className="demo-icon">
                  <Icon size={18} strokeWidth={2.4} />
                </div>
                <div className="demo-copy">
                  <span>{demo.surface}</span>
                  <h2>{demo.title}</h2>
                  <p>{demo.note}</p>
                </div>
                <div className="demo-foot">
                  <strong>{demo.mode}</strong>
                  <ArrowUpRight size={16} strokeWidth={2.4} />
                </div>
              </Link>
            );
          })}
        </section>

        <section className="checks" aria-label="Review checklist">
          <h2>Review checklist</h2>
          <div>
            {CHECKS.map((item) => (
              <p key={item}>
                <CheckCircle2 size={17} strokeWidth={2.4} />
                <span>{item}</span>
              </p>
            ))}
          </div>
        </section>
      </section>

      <style jsx global>{`
        .showcase-page {
          min-height: 100vh;
          background:
            radial-gradient(circle at 18% -8%, rgba(139, 92, 246, 0.22), transparent 32%),
            radial-gradient(circle at 86% 0%, rgba(20, 184, 166, 0.14), transparent 34%),
            linear-gradient(180deg, #07080c 0%, #0b0d14 100%);
          color: #f8fafc;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, sans-serif;
          padding: 28px;
        }

        .shell {
          width: min(1120px, 100%);
          margin: 0 auto;
        }

        .topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding-bottom: 34px;
        }

        .brand,
        .admin-link {
          display: inline-flex;
          align-items: center;
          text-decoration: none;
        }

        .brand {
          gap: 10px;
          color: #fff;
          font-weight: 900;
          letter-spacing: -0.02em;
        }

        .brand img {
          width: 34px;
          height: 34px;
          object-fit: contain;
        }

        .admin-link {
          gap: 8px;
          min-height: 40px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #d8dee9;
          padding: 0 14px;
          font-size: 13px;
          font-weight: 800;
          background: rgba(255, 255, 255, 0.04);
        }

        .intro {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 360px;
          gap: 28px;
          align-items: end;
          padding: 20px 0 32px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .eyebrow {
          margin: 0 0 10px;
          color: #a78bfa;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        h1,
        h2,
        p {
          margin: 0;
        }

        .intro h1 {
          max-width: 760px;
          color: #fff;
          font-size: clamp(42px, 6vw, 72px);
          line-height: 0.95;
          font-weight: 950;
          letter-spacing: -0.055em;
        }

        .summary {
          margin-top: 18px;
          max-width: 720px;
          color: #aab4c4;
          font-size: 16px;
          line-height: 1.7;
        }

        .status-card {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          border-radius: 20px;
          border: 1px solid rgba(52, 211, 153, 0.2);
          background: rgba(16, 185, 129, 0.08);
          padding: 18px;
        }

        .live-dot {
          width: 10px;
          height: 10px;
          margin-top: 5px;
          border-radius: 999px;
          background: #22c55e;
          box-shadow: 0 0 0 6px rgba(34, 197, 94, 0.12);
          flex: 0 0 auto;
        }

        .status-card strong {
          display: block;
          color: #eafff7;
          font-size: 14px;
          font-weight: 900;
        }

        .status-card p {
          margin-top: 6px;
          color: #a4b8ad;
          font-size: 13px;
          line-height: 1.55;
        }

        .demo-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
          padding-top: 28px;
        }

        .demo-card {
          min-height: 174px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border-radius: 18px;
          border: 1px solid rgba(255, 255, 255, 0.09);
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.052), rgba(255, 255, 255, 0.022)),
            #0d111b;
          color: inherit;
          padding: 18px;
          text-decoration: none;
          transition:
            transform 0.2s ease,
            border-color 0.2s ease,
            background 0.2s ease;
        }

        .demo-card:hover {
          transform: translateY(-1px);
          border-color: rgba(167, 139, 250, 0.42);
          background:
            linear-gradient(180deg, rgba(124, 58, 237, 0.1), rgba(255, 255, 255, 0.025)),
            #0d111b;
        }

        .demo-card.featured {
          grid-column: 1 / -1;
          min-height: 138px;
          display: grid;
          grid-template-columns: 46px minmax(0, 1fr) auto;
          align-items: center;
          gap: 18px;
          background:
            linear-gradient(90deg, rgba(124, 58, 237, 0.16), rgba(20, 184, 166, 0.08)),
            #0d111b;
          border-color: rgba(167, 139, 250, 0.2);
        }

        .demo-icon {
          width: 38px;
          height: 38px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          color: #c4b5fd;
          background: rgba(167, 139, 250, 0.1);
          border: 1px solid rgba(167, 139, 250, 0.16);
        }

        .demo-card.featured .demo-icon {
          width: 46px;
          height: 46px;
          border-radius: 15px;
        }

        .demo-copy {
          margin-top: 18px;
        }

        .demo-card.featured .demo-copy {
          margin-top: 0;
        }

        .demo-copy span {
          color: #8f9aab;
          font-size: 11px;
          font-weight: 850;
          letter-spacing: 0.11em;
          text-transform: uppercase;
        }

        .demo-copy h2 {
          margin-top: 8px;
          color: #fff;
          font-size: 22px;
          line-height: 1.05;
          letter-spacing: -0.035em;
          font-weight: 920;
        }

        .demo-card.featured .demo-copy h2 {
          font-size: 26px;
        }

        .demo-copy p {
          margin-top: 10px;
          color: #aab4c4;
          font-size: 14px;
          line-height: 1.58;
        }

        .demo-foot {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-top: 20px;
          padding-top: 14px;
          border-top: 1px solid rgba(255, 255, 255, 0.07);
          color: #d5dbea;
        }

        .demo-card.featured .demo-foot {
          min-width: 192px;
          margin-top: 0;
          padding-top: 0;
          border-top: 0;
          border-left: 1px solid rgba(255, 255, 255, 0.08);
          padding-left: 18px;
        }

        .demo-foot strong {
          font-size: 13px;
          font-weight: 850;
        }

        .checks {
          margin-top: 22px;
          border-radius: 22px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.035);
          padding: 22px;
        }

        .checks h2 {
          color: #fff;
          font-size: 18px;
          letter-spacing: -0.02em;
          font-weight: 900;
        }

        .checks > div {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px 18px;
          margin-top: 16px;
        }

        .checks p {
          display: flex;
          gap: 10px;
          color: #b8c2d2;
          font-size: 13px;
          line-height: 1.55;
        }

        .checks svg {
          color: #34d399;
          flex: 0 0 auto;
          margin-top: 1px;
        }

        @media (max-width: 900px) {
          .intro,
          .demo-grid,
          .checks > div {
            grid-template-columns: 1fr;
          }

          .status-card {
            max-width: 520px;
          }

          .demo-card.featured {
            grid-template-columns: 1fr;
            align-items: stretch;
            gap: 0;
          }

          .demo-card.featured .demo-foot {
            min-width: 0;
            margin-top: 20px;
            padding-top: 14px;
            padding-left: 0;
            border-left: 0;
            border-top: 1px solid rgba(255, 255, 255, 0.07);
          }
        }

        @media (max-width: 560px) {
          .showcase-page {
            padding: 20px 14px 36px;
          }

          .topbar {
            align-items: flex-start;
            flex-direction: column;
            padding-bottom: 22px;
          }

          .admin-link {
            width: 100%;
            justify-content: center;
          }

          .intro {
            padding-top: 8px;
          }

          .intro h1 {
            font-size: 42px;
          }

          .demo-card {
            min-height: 168px;
            border-radius: 18px;
          }
        }
      `}</style>
    </main>
  );
}
