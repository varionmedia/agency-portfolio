"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { FadeUp } from "@/components/ui/Reveal";
import Spotlight from "@/components/ui/Spotlight";

const QUALITIES: { label: string; value: string }[] = [
  { label: "Auto", value: "default" },
  { label: "1080p", value: "hd1080" },
  { label: "720p", value: "hd720" },
  { label: "480p", value: "large" },
  { label: "360p", value: "medium" },
];

export default function VideoTestimonial() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [muted, setMuted] = useState(true);
  const [showSettings, setShowSettings] = useState(false);
  const [quality, setQuality] = useState<string>("default");

  function sendCommand(func: string, args: unknown[] = []) {
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: "command", func, args }),
      "*"
    );
  }

  function toggleMute() {
    if (muted) {
      sendCommand("unMute");
    } else {
      sendCommand("mute");
    }
    setMuted((m) => !m);
  }

  function pickQuality(value: string) {
    sendCommand("setPlaybackQuality", [value]);
    setQuality(value);
    setShowSettings(false);
  }

  return (
    <section id="testimonial" className="relative bg-navy-warm grain">
      <Spotlight />
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32 relative z-[2]">
        <FadeUp>
          <div className="flex items-center gap-3 font-display uppercase tracking-[0.25em] text-xs text-cyan mb-6">
            <span className="h-px w-10 bg-cyan/60" />
            What Our Clients Say
          </div>
        </FadeUp>
        <div className="grid lg:grid-cols-[300px_1fr] gap-10 lg:gap-12 items-start">
          <FadeUp delay={0.1}>
            <div className="relative mx-auto w-full max-w-[300px] aspect-[9/16] rounded-2xl overflow-hidden bg-black border border-white/10 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.85)]">
              <div
                aria-hidden
                className="absolute -inset-6 rounded-[2rem] bg-cyan/10 blur-3xl -z-10 pointer-events-none"
              />
              <iframe
                ref={iframeRef}
                src="https://www.youtube.com/embed/CfQTm3DGIPU?autoplay=1&mute=1&playsinline=1&controls=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&fs=0&loop=1&playlist=CfQTm3DGIPU&vq=hd720&enablejsapi=1"
                title="Dr. Harel Papikian on working with Varion Media"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                className="absolute inset-0 w-full h-full pointer-events-none"
              />
              {/* Custom controls overlay — pinned to bottom */}
              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/70 to-transparent pointer-events-none"
              />
              <div className="absolute inset-x-0 bottom-0 px-3 pb-3 flex items-center justify-between z-10">
                <button
                  type="button"
                  onClick={toggleMute}
                  aria-label={muted ? "Unmute" : "Mute"}
                  className="w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white flex items-center justify-center transition-colors"
                >
                  {muted ? (
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M11 5 6 9H2v6h4l5 4z" />
                      <line x1="22" y1="9" x2="16" y2="15" />
                      <line x1="16" y1="9" x2="22" y2="15" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M11 5 6 9H2v6h4l5 4z" />
                      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                    </svg>
                  )}
                </button>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setShowSettings((s) => !s)}
                    aria-label="Settings"
                    aria-expanded={showSettings}
                    className="w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white flex items-center justify-center transition-colors"
                  >
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                    </svg>
                  </button>
                  {showSettings && (
                    <div
                      role="menu"
                      className="absolute bottom-full right-0 mb-2 min-w-[110px] rounded-lg bg-black/85 backdrop-blur-sm border border-white/10 shadow-lg overflow-hidden"
                    >
                      <div className="px-3 py-2 text-[10px] uppercase tracking-[0.15em] text-white/45 font-display">
                        Quality
                      </div>
                      {QUALITIES.map((q) => (
                        <button
                          key={q.value}
                          type="button"
                          onClick={() => pickQuality(q.value)}
                          className={`block w-full text-left px-3 py-1.5 text-xs transition-colors ${
                            quality === q.value
                              ? "text-cyan bg-white/5"
                              : "text-white/80 hover:bg-white/5"
                          }`}
                        >
                          {q.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </FadeUp>
          <div className="space-y-6">
            {/* Quote 1 */}
            <FadeUp>
              <div className="relative rounded-2xl bg-white/[0.03] border border-white/10 px-6 py-5 md:px-7 md:py-6">
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="currentColor"
                  className="text-cyan/70 mb-2"
                  aria-hidden
                >
                  <path d="M9 7H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v2a4 4 0 0 1-4 4v2a6 6 0 0 0 6-6V7zm12 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v2a4 4 0 0 1-4 4v2a6 6 0 0 0 6-6V7z" />
                </svg>
                <p className="text-white/75 text-base md:text-lg leading-relaxed">
                  My Instagram had only 2,000 followers and we got 700,000
                  views on a single video — I was mind blown.
                </p>
              </div>
            </FadeUp>

            {/* Quote 2 */}
            <FadeUp delay={0.15}>
              <div className="relative rounded-2xl bg-white/[0.03] border border-white/10 px-6 py-5 md:px-7 md:py-6">
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="currentColor"
                  className="text-cyan/70 mb-2"
                  aria-hidden
                >
                  <path d="M9 7H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v2a4 4 0 0 1-4 4v2a6 6 0 0 0 6-6V7zm12 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v2a4 4 0 0 1-4 4v2a6 6 0 0 0 6-6V7z" />
                </svg>
                <p className="text-white/75 text-base md:text-lg leading-relaxed">
                  The pattern I noticed with other agencies was overpromising
                  and underdelivering. With Umang, I was always impressed by
                  how professional and dedicated he was.
                </p>
              </div>
            </FadeUp>

            {/* Recommendation — light card */}
            <FadeUp delay={0.2}>
              <div className="relative rounded-2xl bg-white border border-white/20 px-6 py-5 md:px-7 md:py-6 shadow-[0_18px_50px_-20px_rgba(0,0,0,0.6)]">
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="currentColor"
                  className="text-blue/80 mb-2"
                  aria-hidden
                >
                  <path d="M9 7H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v2a4 4 0 0 1-4 4v2a6 6 0 0 0 6-6V7zm12 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v2a4 4 0 0 1-4 4v2a6 6 0 0 0 6-6V7z" />
                </svg>
                <p className="text-ink text-base md:text-lg leading-relaxed">
                  Dr. Harel{" "}
                  <span className="text-blue font-semibold">
                    highly recommends Varion Media
                  </span>{" "}
                  to any business looking to build a strong social media
                  presence and attract active, engaged potential clients.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.25}>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-cyan/40 ring-2 ring-cyan/15 flex-shrink-0">
                  <Image
                    src="/images/testimonial/harel-avatar.jpg"
                    alt="Dr. Harel Papikian"
                    fill
                    sizes="48px"
                    className="object-cover object-center"
                  />
                </div>
                <div className="text-sm">
                  <div className="font-display font-semibold text-white">
                    Dr. Harel Papikian
                  </div>
                  <div className="text-white/50">
                    Licensed Clinical Psychologist &amp; Couples Therapist, Los
                    Angeles
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
