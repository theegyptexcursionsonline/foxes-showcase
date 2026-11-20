"use client";

import { useEffect } from "react";
import { CONNECT_DEMO } from "@/lib/showcase-config";

/** Loads the production FoxesConnect website chat for the demo business. */
export function ConnectWidgetEmbed() {
  useEffect(() => {
    if (document.getElementById("foxes-connect-embed-script")) return;
    const script = document.createElement("script");
    script.id = "foxes-connect-embed-script";
    script.src = CONNECT_DEMO.scriptUrl;
    script.async = true;
    script.setAttribute("data-org", CONNECT_DEMO.org);
    script.setAttribute("data-color", "#1d4ed8");
    document.body.appendChild(script);
    return () => script.remove();
  }, []);

  return null;
}
