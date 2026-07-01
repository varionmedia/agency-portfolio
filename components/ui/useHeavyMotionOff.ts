"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

/**
 * True when heavy, continuous ambient animations should be turned OFF:
 * either the user prefers reduced motion, or they're on a touch device.
 *
 * Mobile uses native scrolling, and rAF-driven background animations (drifting
 * blur blobs, floating particles) repaint large areas every frame — even while
 * off-screen — which makes native scroll stutter and stall on weaker GPUs.
 * Components use this to render those decorations as a static frame on touch
 * while keeping them animated on desktop.
 */
export default function useHeavyMotionOff(): boolean {
  const prefersReduced = useReducedMotion();
  const [coarse, setCoarse] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: coarse)");
    const update = () => setCoarse(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return Boolean(prefersReduced) || coarse;
}
