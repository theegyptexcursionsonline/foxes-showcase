import { describe, it, expect, afterEach } from "vitest";
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import path from "node:path";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { SearchTryQuestions, SearchWidgetEmbed, SEARCH_TRY_QUESTIONS } from "@/components/search-widget-embed";
import { WidgetEmbed } from "@/components/widget-embed";
import { BookingCalendar } from "@/components/booking-calendar";
import { VOICE_DEMO, SEARCH_DEMO, BOOKING_DEMO, LIVE_HOSTS } from "@/lib/showcase-config";

const SRC = path.resolve(__dirname, "../src");
const files = (dir: string): string[] =>
  readdirSync(dir).flatMap((f) => {
    const p = path.join(dir, f);
    return statSync(p).isDirectory() ? files(p) : /\.(tsx?|ts)$/.test(p) ? [p] : [];
  });
const sources = files(SRC).map((f) => ({ f, s: readFileSync(f, "utf8") }));

afterEach(() => {
  cleanup();
  document.body.innerHTML = "";
});

describe("links", () => {
  it("every internal link resolves to a page that exists", () => {
    const hrefs = new Set<string>();
    for (const { s } of sources) for (const m of s.matchAll(/href[=:]\s*\{?"(\/[^"#?]*)"/g)) hrefs.add(m[1]);
    expect(hrefs.size).toBeGreaterThan(0);
    for (const h of hrefs) {
      const page = path.join(SRC, "app", h === "/" ? "" : h, "page.tsx");
      expect(existsSync(page), `${h} has no page`).toBe(true);
    }
  });

  it("no placeholder links and no retired, preview or local addresses", () => {
    for (const { f, s } of sources) {
      expect(s, f).not.toMatch(/href="#"/);
      expect(s, f).not.toMatch(/localhost|foxesapp\.netlify\.app|ai-search-agent\.netlify\.app|foxes-ai-voice\.netlify\.app|foxes-hotel\.netlify\.app|foxes-booking-modal\.js/);
    }
  });

  it("every external address is one of the live product hosts", () => {
    for (const { f, s } of sources) {
      for (const m of s.matchAll(/https:\/\/([a-z0-9.-]+)/g)) {
        const host = m[1];
        if (host.endsWith("googleapis.com") || host.endsWith("gstatic.com") || host === "images.unsplash.com" || host === "res.cloudinary.com") continue;
        expect(LIVE_HOSTS as readonly string[], `${f}: ${host}`).toContain(host);
      }
    }
  });
});

describe("controls", () => {
  it("every button has a handler or submits a form", () => {
    for (const { f, s } of sources) {
      for (const m of s.matchAll(/<button\b[^>]*>/g)) {
        expect(/onClick=|type="submit"/.test(m[0]), `${f}: ${m[0].slice(0, 80)}`).toBe(true);
      }
    }
  });

  it("each sample question opens the live search bar with that question", () => {
    const seen: string[] = [];
    const on = (e: Event) => seen.push((e as CustomEvent).detail.query);
    window.addEventListener("foxes:search:open", on);
    const { getAllByRole } = render(<SearchTryQuestions />);
    getAllByRole("button").forEach((b) => fireEvent.click(b));
    window.removeEventListener("foxes:search:open", on);
    expect(seen).toEqual([...SEARCH_TRY_QUESTIONS]);
  });
});

describe("widgets mount on the demo businesses", () => {
  it("voice loads the production widget for the demo workspace", () => {
    render(<WidgetEmbed />);
    const s = document.querySelector<HTMLScriptElement>("script[data-foxes-voice-embed]");
    expect(s?.src).toBe(VOICE_DEMO.scriptUrl);
    expect(s?.getAttribute("data-foxes-api-key")).toBe(VOICE_DEMO.publicKey);
    expect(s?.getAttribute("data-foxes-agent-id")).toBe(VOICE_DEMO.agentId);
  });

  it("search loads the production search bar for the demo widget", () => {
    render(<SearchWidgetEmbed />);
    const s = document.getElementById("foxes-search-launcher-script") as HTMLScriptElement | null;
    expect(s?.src).toBe(SEARCH_DEMO.scriptUrl);
    expect(s?.getAttribute("data-widget-id")).toBe(SEARCH_DEMO.widgetId);
  });

  it("booking loads the production calendar and shows a notice if it fails", () => {
    const { container, findByRole } = render(<BookingCalendar />);
    expect(container.querySelector("#foxes-calendar-embed")).not.toBeNull();
    const s = document.getElementById("foxes-calendar-embed-script") as HTMLScriptElement;
    expect(s.src).toBe(BOOKING_DEMO.scriptUrl);
    s.dispatchEvent(new Event("error"));
    return findByRole("status").then((n) => expect(n.textContent).toMatch(/could not load/));
  });
});

describe("no invented figures", () => {
  it("pages carry no made-up statistics, fake dashboard numbers or vendor lists", () => {
    for (const { f, s } of sources) {
      expect(s, f).not.toMatch(/99\.2%|29\+|\$48,320|33\+ API|64\+|Pinecone|Deepgram|GPT|Gemini/);
    }
  });
});
