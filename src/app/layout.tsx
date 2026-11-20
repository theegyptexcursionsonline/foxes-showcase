import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";

export const metadata: Metadata = {
  title: "Foxes Technology | AI Voice, AI Search, AI Booking and FoxesConnect demo",
  description: "Try AI Voice, AI Search, AI Booking and FoxesConnect on one demo business, Foxes Demo Tours.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        {/* DNS prefetch for widget domains */}
        <link rel="preconnect" href="https://voice.foxestechnology.com" />
        <link rel="preconnect" href="https://search.foxestechnology.com" />
        <link rel="preconnect" href="https://booking.foxestechnology.com" />
      </head>
      <body className="bg-white text-slate-900 font-sans antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
