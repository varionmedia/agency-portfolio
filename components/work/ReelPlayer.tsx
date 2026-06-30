"use client";

import { useRef, useState } from "react";

const ASPECT = { "9/16": "aspect-[9/16]", "16/9": "aspect-[16/9]" } as const;

const QUALITIES: { label: string; value: string }[] = [
  { label: "Auto", value: "default" },
  { label: "1080p", value: "hd1080" },
  { label: "720p", value: "hd720" },
  { label: "480p", value: "large" },
];

/**
 * A single reel tile. Clean YouTube embed (no branding / title / channel) with
 * custom Pause · Unmute · Settings controls — same treatment as the home
 * testimonial. Only the first reel autoplays; the rest lazy-load the iframe on
 * click (poster thumbnail until then) to keep the page light.
 */
export default function ReelPlayer({
  youtubeId,
  accentHex,
  autoplay = false,
  ratio = "9/16",
}: {
  youtubeId?: string;
  accentHex: string;
  autoplay?: boolean;
  ratio?: "9/16" | "16/9";
}) {
  const ref = useRef<HTMLIFrameElement>(null);
  const [active, setActive] = useState(autoplay);
  const [muted, setMuted] = useState(true);
  const [paused, setPaused] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [quality, setQuality] = useState("default");

  function cmd(func: string, args: unknown[] = []) {
    ref.current?.contentWindow?.postMessage(JSON.stringify({ event: "command", func, args }), "*");
  }
  function toggleMute() {
    if (muted) cmd("unMute");
    else cmd("mute");
    setMuted((m) => !m);
  }
  function togglePlay() {
    if (paused) cmd("playVideo");
    else cmd("pauseVideo");
    setPaused((p) => !p);
  }
  function pickQuality(v: string) {
    cmd("setPlaybackQuality", [v]);
    setQuality(v);
    setShowSettings(false);
  }

  const frame = `relative ${ASPECT[ratio]} rounded-2xl overflow-hidden bg-[#070920] border border-ink/10 shadow-[0_14px_34px_-18px_rgba(2,5,22,0.4)]`;

  if (!youtubeId) {
    return (
      <div className={frame}>
        <div aria-hidden className="absolute inset-0" style={{ background: `radial-gradient(circle at 50% 35%, ${accentHex}26 0%, transparent 60%)` }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="#0a0d1f"><path d="M8 5v14l11-7L8 5z" /></svg>
          </div>
        </div>
        <span className="absolute bottom-3 left-0 right-0 text-center font-display text-[0.55rem] uppercase tracking-[0.22em] text-white/45">
          {ratio === "9/16" ? "Reel" : "Video"} · Coming soon
        </span>
      </div>
    );
  }

  if (!active) {
    return (
      <button
        type="button"
        onClick={() => setActive(true)}
        aria-label="Play reel"
        className={`${frame} group block w-full`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`}
          alt=""
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <span aria-hidden className="absolute inset-0 bg-black/25 transition-colors group-hover:bg-black/10" />
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-[0_8px_24px_-6px_rgba(0,0,0,0.5)] transition-transform group-hover:scale-110">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="#0a0d1f"><path d="M8 5v14l11-7L8 5z" /></svg>
          </span>
        </span>
      </button>
    );
  }

  return (
    <div className={frame}>
      <iframe
        ref={ref}
        src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&mute=1&playsinline=1&controls=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&fs=0&loop=1&playlist=${youtubeId}&enablejsapi=1`}
        title="Reel"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        className="absolute inset-0 w-full h-full pointer-events-none scale-[1.02]"
      />
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/75 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 px-2.5 pb-2.5 flex items-center justify-between z-10">
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={togglePlay}
            aria-label={paused ? "Play" : "Pause"}
            className="w-8 h-8 rounded-full bg-black/55 hover:bg-black/75 backdrop-blur-sm text-white flex items-center justify-center transition-colors"
          >
            {paused ? (
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M8 5v14l11-7L8 5z" /></svg>
            ) : (
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M6 5h4v14H6zM14 5h4v14h-4z" /></svg>
            )}
          </button>
          <button
            type="button"
            onClick={toggleMute}
            aria-label={muted ? "Unmute" : "Mute"}
            className="w-8 h-8 rounded-full bg-black/55 hover:bg-black/75 backdrop-blur-sm text-white flex items-center justify-center transition-colors"
          >
            {muted ? (
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 5 6 9H2v6h4l5 4z" /><line x1="22" y1="9" x2="16" y2="15" /><line x1="16" y1="9" x2="22" y2="15" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 5 6 9H2v6h4l5 4z" /><path d="M15.54 8.46a5 5 0 0 1 0 7.07" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
              </svg>
            )}
          </button>
        </div>
        <div className="relative">
          <button
            type="button"
            onClick={() => setShowSettings((s) => !s)}
            aria-label="Settings"
            aria-expanded={showSettings}
            className="w-8 h-8 rounded-full bg-black/55 hover:bg-black/75 backdrop-blur-sm text-white flex items-center justify-center transition-colors"
          >
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
          </button>
          {showSettings && (
            <div role="menu" className="absolute bottom-full right-0 mb-2 min-w-[100px] rounded-lg bg-black/85 backdrop-blur-sm border border-white/10 shadow-lg overflow-hidden">
              <div className="px-3 py-1.5 text-[9px] uppercase tracking-[0.15em] text-white/60 font-display">Quality</div>
              {QUALITIES.map((q) => (
                <button
                  key={q.value}
                  type="button"
                  onClick={() => pickQuality(q.value)}
                  className={`block w-full text-left px-3 py-1.5 text-xs transition-colors ${quality === q.value ? "text-white bg-white/10" : "text-white/80 hover:bg-white/5"}`}
                  style={quality === q.value ? { color: accentHex } : undefined}
                >
                  {q.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
