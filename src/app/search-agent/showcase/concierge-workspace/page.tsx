"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Map,
  PanelLeftOpen,
  Route,
  Search,
  Sparkles,
  X,
} from "lucide-react";

const LIVE_AGENT_URL = "https://ai-search-agent.netlify.app";

function useAgentUrl() {
  const [agentUrl, setAgentUrl] = useState(LIVE_AGENT_URL);

  useEffect(() => {
    if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
      setAgentUrl("http://localhost:3002");
    }
  }, []);

  return agentUrl;
}

export default function ConciergeWorkspaceShowcase() {
  const agentUrl = useAgentUrl();
  const [open, setOpen] = useState(true);
  const [runId, setRunId] = useState(1);

  const iframeSrc = useMemo(() => {
    const params = new URLSearchParams({
      embed: "1",
      prompt: "Find best-value Egypt tours with images, prices, duration, and booking links",
      run: String(runId),
    });
    return `${agentUrl}/demo/preview?${params.toString()}`;
  }, [agentUrl, runId]);

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (event.data?.type === "foxes:close-widget") setOpen(false);
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  const openWorkspace = () => {
    setOpen(true);
    setRunId((value) => value + 1);
  };

  return (
    <main className="workspace-page">
      <section className="site-shell" aria-hidden={open ? "true" : "false"}>
        <nav className="topbar">
          <Link href="/search-agent/showcase" className="back-link">
            <ArrowLeft size={16} strokeWidth={2.4} />
            Search showcase
          </Link>
          <div className="brand-mark">
            <img src="/foxeslogo.png" alt="" />
            <span>Foxes Experiences</span>
          </div>
          <button className="nav-cta" type="button" onClick={openWorkspace}>
            Open concierge
          </button>
        </nav>

        <section className="hero">
          <div className="hero-copy">
            <span className="kicker">
              <Sparkles size={15} strokeWidth={2.5} />
              New widget showcase
            </span>
            <h1>AI concierge that opens as a real workspace, not a tiny chat bubble.</h1>
            <p>
              This is the newer Foxes Search Unit surface: a left-side, full-height assistant
              that keeps conversation, live catalog cards, comparison, map, and itinerary planning
              in one polished workflow.
            </p>
            <div className="hero-actions">
              <button className="primary" type="button" onClick={openWorkspace}>
                Open the new widget
                <PanelLeftOpen size={17} strokeWidth={2.5} />
              </button>
              <a className="secondary" href={`${agentUrl}/demo/preview`} target="_blank" rel="noreferrer">
                Open standalone preview
                <ArrowUpRight size={16} strokeWidth={2.5} />
              </a>
            </div>
          </div>

          <div className="showcase-panel">
            <div className="panel-top">
              <span />
              <span />
              <span />
              <strong>foxes-search.ai/workspace</strong>
            </div>
            <div className="panel-body">
              <div className="search-card">
                <Search size={18} strokeWidth={2.5} />
                <span>Find best-value Egypt tours</span>
                <button type="button" onClick={openWorkspace}>Ask AI</button>
              </div>
              <div className="tour-row">
                <img src="/images/use-cases/tours.webp" alt="" />
                <div>
                  <strong>Giza, Luxor, Red Sea</strong>
                  <span>Cards, pricing, duration, and booking links appear after AI search.</span>
                </div>
              </div>
              <div className="feature-grid">
                {[
                  ["Chat", "Natural answers"],
                  ["Results", "Visual tour cards"],
                  ["Compare", "Side-by-side picks"],
                  ["Map", "Location context"],
                ].map(([title, text]) => (
                  <div key={title}>
                    <strong>{title}</strong>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="proof">
          {[
            { icon: CheckCircle2, title: "Catalog-grounded", text: "Uses uploaded/catalog data instead of generic chatbot copy." },
            { icon: Route, title: "Itinerary aware", text: "Turns tour matches into realistic day-by-day planning." },
            { icon: Map, title: "Workspace layout", text: "Results stay visible while the user keeps asking follow-ups." },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title}>
                <Icon size={20} strokeWidth={2.4} />
                <strong>{item.title}</strong>
                <span>{item.text}</span>
              </article>
            );
          })}
        </section>
      </section>

      {open && (
        <section className="workspace-overlay" aria-label="Foxes AI concierge workspace">
          <div className="workspace-scrim" onClick={() => setOpen(false)} />
          <aside className="workspace-drawer">
            <header className="drawer-bar">
              <div className="drawer-brand">
                <span className="drawer-logo">
                  <img src="/foxeslogo.png" alt="" />
                </span>
                <div>
                  <strong>Foxes AI Concierge</strong>
                  <span><i /> Online · live catalog search</span>
                </div>
              </div>
              <button type="button" onClick={() => setOpen(false)} aria-label="Close concierge">
                <X size={22} strokeWidth={2.6} />
              </button>
            </header>
            <iframe src={iframeSrc} title="Foxes AI concierge workspace" />
          </aside>
        </section>
      )}

      <style jsx>{`
        .workspace-page {
          min-height: 100vh;
          background:
            radial-gradient(circle at 16% 4%, rgba(139, 92, 246, 0.22), transparent 30%),
            radial-gradient(circle at 88% 16%, rgba(20, 184, 166, 0.14), transparent 28%),
            linear-gradient(180deg, #07080c 0%, #0b0d15 50%, #07080c 100%);
          color: #f8fafc;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, sans-serif;
          overflow-x: hidden;
        }

        .site-shell {
          min-height: 100vh;
          padding: 24px clamp(18px, 4vw, 48px) 72px;
          transition: filter 0.2s ease;
        }

        .site-shell[aria-hidden="true"] {
          filter: brightness(0.48);
        }

        .topbar {
          width: min(1180px, 100%);
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        .back-link,
        .nav-cta,
        .primary,
        .secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          text-decoration: none;
          font: inherit;
        }

        .back-link {
          color: #cbd5e1;
          font-size: 14px;
          font-weight: 800;
        }

        .brand-mark {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: #fff;
          font-weight: 900;
        }

        .brand-mark img {
          width: 34px;
          height: 34px;
          border-radius: 10px;
        }

        .nav-cta {
          border: 1px solid rgba(255, 255, 255, 0.14);
          background: rgba(255, 255, 255, 0.08);
          color: #fff;
          border-radius: 999px;
          padding: 10px 15px;
          font-weight: 850;
          cursor: pointer;
        }

        .hero {
          width: min(1180px, 100%);
          margin: 76px auto 0;
          display: grid;
          grid-template-columns: minmax(0, 1.02fr) minmax(360px, 0.88fr);
          gap: clamp(36px, 7vw, 88px);
          align-items: center;
        }

        .kicker {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #c4b5fd;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          font-size: 12px;
          font-weight: 900;
          margin-bottom: 18px;
        }

        h1 {
          margin: 0;
          max-width: 780px;
          color: #fff;
          font-size: clamp(48px, 7vw, 92px);
          line-height: 0.94;
          letter-spacing: -0.055em;
        }

        p {
          margin: 24px 0 0;
          max-width: 650px;
          color: #aeb8c8;
          font-size: clamp(17px, 2vw, 22px);
          line-height: 1.65;
          font-weight: 520;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 13px;
          margin-top: 34px;
        }

        .primary,
        .secondary {
          min-height: 50px;
          border-radius: 999px;
          padding: 0 20px;
          font-size: 14px;
          font-weight: 900;
          cursor: pointer;
        }

        .primary {
          border: 0;
          background: linear-gradient(135deg, #8b5cf6, #14b8a6);
          color: white;
          box-shadow: 0 28px 58px -34px rgba(139, 92, 246, 0.9);
        }

        .secondary {
          border: 1px solid rgba(255,255,255,0.14);
          background: rgba(255,255,255,0.06);
          color: #e2e8f0;
        }

        .showcase-panel {
          overflow: hidden;
          border-radius: 28px;
          border: 1px solid rgba(255, 255, 255, 0.13);
          background: rgba(255,255,255,0.08);
          box-shadow: 0 48px 100px -60px rgba(0,0,0,0.9);
          backdrop-filter: blur(22px);
        }

        .panel-top {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 14px 16px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.06);
        }

        .panel-top span {
          width: 10px;
          height: 10px;
          border-radius: 999px;
          background: rgba(255,255,255,0.24);
        }

        .panel-top strong {
          margin-left: auto;
          color: rgba(255,255,255,0.62);
          font-size: 12px;
        }

        .panel-body {
          padding: 22px;
        }

        .search-card {
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          gap: 13px;
          min-height: 64px;
          padding: 10px 10px 10px 18px;
          border-radius: 20px;
          background: #fff;
          color: #0f172a;
          box-shadow: 0 18px 44px -28px rgba(15,23,42,0.8);
        }

        .search-card span {
          min-width: 0;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-weight: 800;
        }

        .search-card button {
          border: 0;
          border-radius: 999px;
          background: #0f172a;
          color: #fff;
          padding: 11px 15px;
          font-weight: 900;
          cursor: pointer;
        }

        .tour-row {
          display: flex;
          gap: 15px;
          align-items: center;
          margin-top: 18px;
          padding: 14px;
          border-radius: 22px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.1);
        }

        .tour-row img {
          width: 112px;
          height: 84px;
          border-radius: 16px;
          object-fit: cover;
        }

        .tour-row strong,
        .tour-row span {
          display: block;
        }

        .tour-row strong {
          color: #fff;
          font-size: 17px;
          margin-bottom: 6px;
        }

        .tour-row span {
          color: #aeb8c8;
          line-height: 1.5;
          font-size: 14px;
        }

        .feature-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
          margin-top: 18px;
        }

        .feature-grid div,
        .proof article {
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.06);
          border-radius: 18px;
          padding: 15px;
        }

        .feature-grid strong,
        .feature-grid span,
        .proof strong,
        .proof span {
          display: block;
        }

        .feature-grid strong,
        .proof strong {
          color: #fff;
          font-size: 14px;
          margin-bottom: 5px;
        }

        .feature-grid span,
        .proof span {
          color: #aeb8c8;
          font-size: 13px;
          line-height: 1.5;
        }

        .proof {
          width: min(1180px, 100%);
          margin: 56px auto 0;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
        }

        .proof svg {
          color: #14b8a6;
          margin-bottom: 12px;
        }

        .workspace-overlay {
          position: fixed;
          inset: 0;
          z-index: 50;
          display: flex;
          align-items: stretch;
          justify-content: flex-start;
        }

        .workspace-scrim {
          position: absolute;
          inset: 0;
          background: rgba(3, 7, 18, 0.62);
          backdrop-filter: blur(8px);
        }

        .workspace-drawer {
          position: relative;
          z-index: 1;
          width: min(1040px, 100vw);
          height: 100vh;
          background: #f8fafc;
          color: #0f172a;
          border-right: 1px solid rgba(15,23,42,0.12);
          box-shadow: 40px 0 90px -55px rgba(0,0,0,0.9);
          display: flex;
          flex-direction: column;
          animation: slideIn 0.32s cubic-bezier(0.22, 1, 0.36, 1);
        }

        @keyframes slideIn {
          from { transform: translateX(-34px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        .drawer-bar {
          height: 74px;
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 12px 18px;
          border-bottom: 1px solid rgba(15,23,42,0.08);
          background: rgba(255,255,255,0.92);
        }

        .drawer-brand {
          min-width: 0;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .drawer-logo {
          width: 44px;
          height: 44px;
          overflow: hidden;
          border-radius: 14px;
          flex: 0 0 auto;
          box-shadow: 0 14px 30px -22px rgba(15,23,42,0.8);
        }

        .drawer-logo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .drawer-brand strong,
        .drawer-brand span {
          display: block;
        }

        .drawer-brand strong {
          color: #0f172a;
          font-size: 17px;
          font-weight: 950;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .drawer-brand span {
          color: #64748b;
          font-size: 13px;
          margin-top: 3px;
          font-weight: 750;
        }

        .drawer-brand i {
          display: inline-block;
          width: 8px;
          height: 8px;
          margin-right: 6px;
          border-radius: 999px;
          background: #22c55e;
          box-shadow: 0 0 0 5px rgba(34,197,94,0.12);
        }

        .drawer-bar button {
          width: 44px;
          height: 44px;
          border: 1px solid rgba(15,23,42,0.1);
          border-radius: 14px;
          background: #fff;
          color: #0f172a;
          cursor: pointer;
        }

        iframe {
          width: 100%;
          flex: 1;
          min-height: 0;
          border: 0;
          background: #fff;
        }

        @media (max-width: 900px) {
          .hero,
          .proof {
            grid-template-columns: 1fr;
          }

          .hero {
            margin-top: 48px;
          }

          .topbar {
            flex-wrap: wrap;
          }

          .brand-mark {
            order: -1;
            width: 100%;
          }

          .workspace-drawer {
            width: 100vw;
          }
        }

        @media (max-width: 560px) {
          .site-shell {
            padding: 18px 14px 56px;
          }

          h1 {
            font-size: 42px;
          }

          .search-card,
          .feature-grid {
            grid-template-columns: 1fr;
          }

          .tour-row {
            align-items: flex-start;
          }

          .tour-row img {
            width: 88px;
            height: 88px;
          }

          .drawer-bar {
            height: 68px;
            padding: 10px 12px;
          }

          .drawer-brand strong {
            font-size: 15px;
          }

          .drawer-brand span {
            font-size: 12px;
          }
        }
      `}</style>
    </main>
  );
}
