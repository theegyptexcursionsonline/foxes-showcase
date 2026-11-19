"use client";

import { useEffect } from "react";
import { VOICE_DEMO } from "@/lib/showcase-config";

/**
 * Loads the production AI Voice widget for the Voice demo workspace.
 * The workspace only answers on sites it has approved, so this works on the
 * published showcase host and is refused anywhere else.
 */
export function WidgetEmbed() {
  useEffect(() => {
    if (document.querySelector("script[data-foxes-voice-embed]")) return;
    const script = document.createElement("script");
    script.src = VOICE_DEMO.scriptUrl;
    script.async = true;
    script.setAttribute("data-foxes-voice-embed", "true");
    script.setAttribute("data-foxes-api-key", VOICE_DEMO.publicKey);
    script.setAttribute("data-foxes-agent-id", VOICE_DEMO.agentId);
    script.setAttribute("data-foxes-language", "en");
    document.body.appendChild(script);
    return () => {
      const w = window as unknown as { foxes?: (cmd: string, opts?: object) => void };
      w.foxes?.("destroy", {});
      script.remove();
    };
  }, []);

  return null;
}
