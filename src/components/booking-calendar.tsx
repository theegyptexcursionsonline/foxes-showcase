"use client";

import { useEffect, useState } from "react";
import { BOOKING_DEMO } from "@/lib/showcase-config";

type CalendarApi = { init: (opts: Record<string, unknown>) => void };

/**
 * The production booking calendar, bound to the Foxes demo organisation.
 * If the script cannot load, the guest sees a plain notice instead of an
 * empty frame.
 */
export function BookingCalendar() {
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const id = "foxes-calendar-embed-script";
    if (document.getElementById(id)) return;
    const script = document.createElement("script");
    script.id = id;
    script.src = BOOKING_DEMO.scriptUrl;
    script.async = true;
    script.onload = () => {
      const api = (window as unknown as { FoxesCalendarEmbed?: CalendarApi }).FoxesCalendarEmbed;
      if (!api) { setFailed(true); return; }
      api.init({
        containerId: "foxes-calendar-embed",
        orgId: BOOKING_DEMO.orgId,
        apiUrl: BOOKING_DEMO.apiUrl,
        primaryColor: "#2563eb",
      });
    };
    script.onerror = () => setFailed(true);
    document.body.appendChild(script);
    return () => script.remove();
  }, []);

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-4 sm:p-6 shadow-sm">
      {failed ? (
        <p role="status" className="py-12 text-center text-slate-500">The booking calendar could not load right now. Please refresh the page.</p>
      ) : (
        <div id="foxes-calendar-embed" className="min-h-[520px]" />
      )}
    </div>
  );
}
