"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function Cursor() {
  const [active, setActive] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.6 });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target as HTMLElement | null;
      setActive(
        !!target?.closest("a, button, input, textarea, select, [data-cursor]")
      );
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      className="fixed left-0 top-0 z-[100] pointer-events-none rounded-full bg-cyan mix-blend-difference hidden [@media(pointer:fine)]:block"
      style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
      animate={{
        width: active ? 44 : 10,
        height: active ? 44 : 10,
        opacity: active ? 0.9 : 1,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
    />
  );
}
