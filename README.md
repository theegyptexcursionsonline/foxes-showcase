# Foxes Showcase

Next.js showcase app for Foxes Technology product demos and embeds. It hosts standalone demo pages for the booking-engine, hotel-booking, search-agent, and voice-agent experiences, including branded storefront showcases that embed the live AI widgets from their respective apps.

## Tech Stack

- **Framework:** Next.js 16 (App Router), React 19, TypeScript
- **Styling:** Tailwind CSS 4
- **Icons:** lucide-react

## Features

- Booking-engine demo variants: calendar, inline, modal, mobile drawer, sidebar, and product-page embeds
- Hotel-booking demo variants: city, heritage, luxury, and resort layouts
- Search-agent landing/demo routes plus five branded storefront showcases that exercise the floating, search-bar, modal, inline-chat, and chat-page widget embeds against one shared hosted widget ID
- Voice-agent landing/demo route plus standalone branded voice-demo landing pages that embed the live voice widget frame (without the shared showcase chrome) and resize with the widget's open/collapsed state
- Schema-audit tool with its own API route for structured-data / SEO validation

## Getting Started

### Prerequisites

- Node.js
- The companion search-agent and voice-agent apps if you want live widget embeds to resolve

### Install

```bash
npm install
```

### Environment

- `NEXT_PUBLIC_VOICE_APP_URL` — overrides the base URL used by the standalone voice demos when embedding the voice widget frame (deployed demos default to the hosted voice app; localhost is honored when set)

### Run

```bash
npm run dev     # dev server at http://localhost:3006
npm run build   # production build
npm run start   # serve production build at http://localhost:3005
```

## Project Structure

```
src/
├── app/
│   ├── booking-engine/   Calendar, inline, modal, mobile-drawer, product-page demos
│   ├── hotel-booking/    City, heritage, luxury, resort layouts
│   ├── search-agent/     Landing/demo routes + branded storefront showcases
│   │   └── showcase/      Five branded storefronts + _lib/useWidget.ts loader
│   ├── voice-agent/      Voice-agent landing/demo route
│   ├── voice-demos/      Standalone branded voice-demo pages + widget loader
│   ├── live-demo/        Live demo route
│   ├── schema-audit/     Schema audit page
│   └── api/schema-audit/ Schema-audit API handler
└── components/           Shared showcase UI
```

## Deployment

Deployed on Netlify (Next.js runtime).
