"use client";

import { useEffect } from "react";
import { SEARCH_DEMO } from "@/lib/showcase-config";

/** Loads the production AI Search bar bound to the Search demo widget. */
export function SearchWidgetEmbed() {
  useEffect(() => {
    if (document.getElementById("foxes-launcher-host")) return;
    const script = document.createElement("script");
    script.id = "foxes-search-launcher-script";
    script.src = SEARCH_DEMO.scriptUrl;
    script.async = true;
    script.setAttribute("data-widget-id", SEARCH_DEMO.widgetId);
    script.setAttribute("data-style", "searchbar");
    script.setAttribute("data-label", "Search Egypt trips");
    script.setAttribute("data-kicker", "AI Search demo");
    script.setAttribute("data-placeholder", "Try: desert safari with dinner");
    script.setAttribute("data-color", "#059669");
    script.setAttribute("data-default-collapsed", "false");
    document.body.appendChild(script);
    return () => {
      window.dispatchEvent(new CustomEvent("foxes:search:destroy"));
      script.remove();
      document.getElementById("foxes-launcher-host")?.remove();
    };
  }, []);

  return null;
}

export const SEARCH_TRY_QUESTIONS = [
  "Desert safari with dinner",
  "Snorkeling trip for a family in Hurghada",
  "رحلة غطس في الغردقة",
  "How do I fix my car engine?",
] as const;

/** Each question opens the live search bar with that query. */
export function SearchTryQuestions() {
  return (
    <div className="mt-8 flex flex-wrap justify-center gap-3">
      {SEARCH_TRY_QUESTIONS.map((q) => (
        <button
          key={q}
          type="button"
          dir="auto"
          onClick={() => window.dispatchEvent(new CustomEvent("foxes:search:open", { detail: { query: q } }))}
          className="rounded-full border border-emerald-200 bg-emerald-50 px-5 py-2.5 text-sm font-medium text-emerald-800 hover:bg-emerald-100 transition"
        >
          {q}
        </button>
      ))}
    </div>
  );
}
