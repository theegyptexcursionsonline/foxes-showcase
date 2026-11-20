/**
 * Every live embed on the showcase, in one place. Each one is bound to a
 * DEMO business in its product, never to a paying customer.
 *
 * All four units answer for the same demo business, Foxes Demo Tours, and the
 * same five tours and prices (the booking demo organisation's catalogue).
 * - Voice: the Voice demo workspace, concierge "Rami - Foxes Demo Tours".
 * - Search: the "Foxes Demo Tours (demo)" workspace.
 * - Booking: the booking demo organisation; card checkout and guest emails off.
 * - FoxesConnect: the "Foxes Demo Tours (demo)" business, marked as a test
 *   business so nothing can be sent from it.
 * Each one only answers on hosts its product has approved.
 */
export const VOICE_DEMO = {
  scriptUrl: "https://voice.foxestechnology.com/widget.js",
  publicKey: "fva_70KPISjjtUMtNdfcTlbLAIz5NABRjBcS",
  agentId: "6aff554ca16013cc71081318",
  business: "Foxes Demo Tours",
} as const;

export const SEARCH_DEMO = {
  scriptUrl: "https://search.foxestechnology.com/widget/foxes-launcher.js",
  widgetId: "wgt_xRnNJg5EKu4IuJM7yuVcGg",
} as const;

export const BOOKING_DEMO = {
  scriptUrl: "https://booking.foxestechnology.com/widget/foxes-calendar-embed.js",
  apiUrl: "https://foxes-api-production.up.railway.app/api/v1",
  orgId: "69b700e25e8af4de376859b9",
} as const;

export const CONNECT_DEMO = {
  scriptUrl: "https://connect.foxestechnology.com/embed.js",
  org: "foxes-demo-tours-b83dd7",
  helpUrl: "https://connect.foxestechnology.com/help?org=foxes-demo-tours-b83dd7",
} as const;

/** Every external address a showcase page may load or link to. */
export const LIVE_HOSTS = [
  "voice.foxestechnology.com",
  "search.foxestechnology.com",
  "booking.foxestechnology.com",
  "foxes-api-production.up.railway.app",
  "connect.foxestechnology.com",
] as const;
