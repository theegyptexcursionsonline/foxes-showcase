/**
 * Every live embed on the showcase, in one place. Each one is bound to a
 * DEMO business in its product, never to a paying customer.
 *
 * - Voice: the Voice demo workspace (public widget key), concierge "Rami"
 *   for Red Sea Trails, a fictional tour business. Answers only on hosts the
 *   workspace has approved.
 * - Search: the Search product's own demo widget.
 * - Booking: the Foxes Technology demo organisation on the booking API. Its
 *   allowed-site list names this showcase host. Card checkout is off there.
 */
export const VOICE_DEMO = {
  scriptUrl: "https://voice.foxestechnology.com/widget.js",
  publicKey: "fva_70KPISjjtUMtNdfcTlbLAIz5NABRjBcS",
  agentId: "6a0bf7ac10c3f10c1865ce49",
  business: "Red Sea Trails",
} as const;

export const SEARCH_DEMO = {
  scriptUrl: "https://search.foxestechnology.com/widget/foxes-launcher.js",
  widgetId: "wgt_CXtars0OalnORU0z2rgcvw",
} as const;

export const BOOKING_DEMO = {
  scriptUrl: "https://booking.foxestechnology.com/widget/foxes-calendar-embed.js",
  apiUrl: "https://foxes-api-production.up.railway.app/api/v1",
  orgId: "69b700e25e8af4de376859b9",
} as const;

/** Every external address a showcase page may load or link to. */
export const LIVE_HOSTS = [
  "voice.foxestechnology.com",
  "search.foxestechnology.com",
  "booking.foxestechnology.com",
  "foxes-api-production.up.railway.app",
] as const;
