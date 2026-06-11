"use client";

import { useEffect, useRef } from "react";

/**
 * Cursor-tracked glow. Drop inside any section with `position: relative`;
 * it attaches to the parent element and follows the cursor across it.
 */
export default function Spotlight({
  size = 600,
  strength = 0.07,
}: {
  size?: number;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const parent = el?.parentElement;
    if (!el || !parent) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const move = (e: MouseEvent) => {
      const rect = parent.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      el.style.setProperty("--my", `${e.clientY - rect.top}px`);
      el.style.opacity = "1";
    };
    const leave = () => {
      el.style.opacity = "0";
    };

    parent.addEventListener("mousemove", move, { passive: true });
    parent.addEventListener("mouseleave", leave);
    return () => {
      parent.removeEventListener("mousemove", move);
      parent.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-500"
      style={{
        background: `radial-gradient(${size}px circle at var(--mx, 50%) var(--my, 50%), rgba(0, 200, 232, ${strength}), transparent 65%)`,
      }}
    />
  );
}
