"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Browsers with scroll-driven animations (Chrome, Edge, Safari 26+) animate `.reveal` elements in pure CSS.
 * For the rest (e.g. Firefox) this adds a simple fade-in the first time each element scrolls into view.
 */
export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof CSS !== "undefined" && CSS.supports("animation-timeline: view()")) return;

    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.12 }
    );
    els.forEach((el) => {
      el.classList.add("reveal-ready");
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
