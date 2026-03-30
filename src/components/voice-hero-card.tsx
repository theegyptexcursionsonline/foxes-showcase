"use client";

import { useState, useEffect, useCallback } from "react";

interface VoiceHeroCardProps {
  agentName?: string;
  agentRole?: string;
  accent?: "indigo" | "orange";
  samplePrompts?: string[];
}

export function VoiceHeroCard({
  agentName = "Olivia",
  agentRole = "AI Voice Concierge",
  accent = "indigo",
  samplePrompts = [
    "Book a room for 2 on April 15th",
    "What's your cancellation policy?",
    "How much is the desert safari tour?",
  ],
}: VoiceHeroCardProps) {
  const [isActive, setIsActive] = useState(false);
  const [widgetReady, setWidgetReady] = useState(false);

  // Check if widget is loaded
  useEffect(() => {
    const check = setInterval(() => {
      if ((window as any).foxes) {
        setWidgetReady(true);
        clearInterval(check);
      }
    }, 500);
    return () => clearInterval(check);
  }, []);

  const handleMicClick = useCallback(() => {
    const foxes = (window as any).foxes;
    if (!foxes) return;

    if (!isActive) {
      foxes("open");
      // small delay then start the call
      setTimeout(() => foxes("start"), 400);
      setIsActive(true);
    } else {
      foxes("end");
      setIsActive(false);
    }
  }, [isActive]);

  const gradFrom = accent === "orange" ? "from-orange-500" : "from-indigo-500";
  const gradTo = accent === "orange" ? "to-rose-500" : "to-pink-500";
  const glowFrom = accent === "orange" ? "from-orange-500/20" : "from-indigo-500/20";
  const glowVia = accent === "orange" ? "via-rose-500/20" : "via-pink-500/20";
  const glowTo = accent === "orange" ? "to-pink-500/20" : "to-purple-500/20";
  const barFrom = accent === "orange" ? "from-orange-500" : "from-indigo-500";
  const barTo = accent === "orange" ? "to-rose-400" : "to-pink-400";
  const shadow = accent === "orange" ? "shadow-orange-500/30" : "shadow-indigo-500/30";
  const dotColor = accent === "orange" ? "text-orange-400" : "text-indigo-400";

  return (
    <div className="relative w-full max-w-md">
      {/* Glow */}
      <div className={`absolute -inset-4 rounded-[2rem] bg-gradient-to-br ${glowFrom} ${glowVia} ${glowTo} blur-2xl`} />

      <div className="relative rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.03] border border-white/10 backdrop-blur-xl p-8 shadow-2xl">
        {/* Agent header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="relative">
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradFrom} ${gradTo} flex items-center justify-center shadow-lg ${shadow}`}>
              <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 flex h-4 w-4">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${isActive ? "bg-red-400" : "bg-emerald-400"} opacity-75`} />
              <span className={`relative inline-flex rounded-full h-4 w-4 ${isActive ? "bg-red-400" : "bg-emerald-400"} border-2 border-slate-900`} />
            </span>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white">{agentName}</h3>
            <p className="text-sm text-white/50">{agentRole}</p>
          </div>
        </div>

        {/* Audio wave + mic button */}
        <div className="rounded-2xl bg-white/5 border border-white/5 p-5 mb-6">
          <div className="flex items-end justify-center gap-[3px] h-16">
            {Array.from({ length: 40 }, (_, i) => {
              const delay = `${(i * 0.08).toFixed(2)}s`;
              const heights = [30, 55, 40, 70, 50, 85, 45, 65, 35, 80, 55, 42, 75, 38, 60, 90, 48, 72, 33, 58, 82, 44, 68, 52, 78, 36, 62, 88, 46, 56, 74, 40, 66, 50, 84, 42, 70, 54, 76, 38];
              const h = heights[i % heights.length];
              return (
                <div
                  key={i}
                  className={`w-[3px] rounded-full bg-gradient-to-t ${barFrom} ${barTo}`}
                  style={{
                    height: `${h}%`,
                    animation: isActive
                      ? `wave 0.6s ease-in-out ${delay} infinite alternate`
                      : `wave 1.8s ease-in-out ${delay} infinite alternate`,
                    opacity: isActive ? 0.8 + (h / 400) : 0.4 + (h / 400),
                  }}
                />
              );
            })}
          </div>

          {/* Mic button */}
          <div className="flex justify-center mt-4">
            <button
              onClick={handleMicClick}
              className={`group relative flex items-center gap-2.5 rounded-full px-6 py-3 text-sm font-semibold text-white transition-all ${
                isActive
                  ? "bg-red-500 hover:bg-red-600 shadow-lg shadow-red-500/30"
                  : `bg-gradient-to-r ${gradFrom} ${gradTo} hover:shadow-xl ${shadow}`
              }`}
            >
              {isActive ? (
                <>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z" /></svg>
                  End conversation
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
                  {widgetReady ? "Talk to agent" : "Loading..."}
                </>
              )}
            </button>
          </div>

          <p className="text-center text-xs text-white/30 mt-2">
            {isActive ? "Speaking with agent..." : "Click to start a voice conversation"}
          </p>
        </div>

        {/* Sample prompts */}
        <div className="space-y-2">
          <p className="text-[10px] uppercase tracking-wider text-white/30 font-medium mb-2">Try saying</p>
          {samplePrompts.map((q) => (
            <div key={q} className="flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2 text-xs text-white/50 hover:bg-white/10 hover:text-white/70 transition cursor-default">
              <svg className={`w-3 h-3 shrink-0 ${dotColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" /></svg>
              &ldquo;{q}&rdquo;
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-6 grid grid-cols-3 gap-3">
          {[{ label: "Tools", value: "17" }, { label: "Engine", value: "GPT" }, { label: "Voice", value: "ElevenLabs" }].map((s) => (
            <div key={s.label} className="rounded-xl bg-white/5 border border-white/5 p-2.5 text-center">
              <p className="text-[10px] text-white/30">{s.label}</p>
              <p className="text-xs font-semibold text-white/80 mt-0.5">{s.value}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes wave {
          0% { transform: scaleY(0.3); }
          100% { transform: scaleY(1); }
        }
      `}</style>
    </div>
  );
}
