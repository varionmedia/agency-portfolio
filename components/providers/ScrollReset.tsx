"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";

/**
 * On desktop, Lenis drives a virtual scroll position that it keeps across
 * client-side navigations — so following a link (e.g. "See the work") would
 * land the new route at the previous scroll offset instead of the top. Reset
 * to the top on every path change. Skipped when the URL carries a hash so
 * anchor deep-links still work.
 */
export default function ScrollReset() {
  const lenis = useLenis();
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) return;
    if (lenis) lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }, [pathname, lenis]);

  return null;
}
