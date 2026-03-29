"use client";

import { useEffect } from "react";

const SEARCH_API_URL = "https://ai-search-agent.netlify.app";

export function SearchWidgetEmbed() {
  useEffect(() => {
    const scriptId = "foxes-search-widget-script";
    if (document.getElementById(scriptId)) return;

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = `${SEARCH_API_URL}/widget/foxes-widget.js`;
    script.async = true;
    script.setAttribute("data-widget-id", "wgt_r6owSnimKzgeOZ8n6wk18w");
    script.setAttribute("data-position", "bottom-right");
    script.setAttribute("data-accent", "#10b981");
    script.setAttribute("data-agent-name", "Foxes Search AI");
    script.setAttribute("data-greeting", "Hi! Search for tours, destinations, or ask me anything about travel.");
    script.setAttribute("data-placeholder", "Try: Best pyramids tour, snorkeling in Red Sea...");
    script.setAttribute("data-track-events", "true");
    script.setAttribute("data-theme", "forest");
    document.body.appendChild(script);

    return () => {
      try {
        document.body.removeChild(script);
        const root = document.getElementById("foxes-widget-root");
        if (root) root.remove();
      } catch {}
    };
  }, []);

  return null;
}
