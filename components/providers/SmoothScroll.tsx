"use client";

import { ReactLenis } from "lenis/react";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  // lerp-only (no fixed duration): the wheel tracks input directly and settles
  // quickly instead of coasting on a 1.2s timer — that timed coast is what felt
  // like the scroll "hanging" then stopping. Native scroll on touch devices.
  return (
    <ReactLenis root options={{ lerp: 0.1, smoothWheel: true, syncTouch: false }}>
      {children}
    </ReactLenis>
  );
}
