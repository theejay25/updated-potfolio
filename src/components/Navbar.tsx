"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { navLinks, site } from "@/data/site";

export default function Navbar() {
  const pathname = usePathname();
  const onHome = pathname === "/";
  const [active, setActive] = useState("home");

  // Highlight the link of whichever section is crossing the middle of the screen.
  useEffect(() => {
    if (!onHome) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [onHome]);

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-3">
      <nav
        aria-label="Main"
        className="liquid-glass flex w-full max-w-xl items-center gap-1 rounded-2xl p-4 sm:gap-2"
      >
        {/* <Link
          href="/#home"
          className="hidden shrink-0 rounded-full px-3 font-display text-lg font-bold tracking-tight sm:block"
        >
          {site.name}
        </Link> */}

        <ul className="relative z-10 flex flex-1 items-center justify-between sm:justify-center">
          {navLinks.map(({ id, label }) => {
            const isActive = onHome && active === id;
            return (
              <li key={id}>
                <Link
                  href={`/#${id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`block rounded-full px-3 py-1.5 text-sm font-medium transition-all sm:px-4 ${
                    isActive
                      ? "bg-white/70 text-ink shadow-[0_2px_8px_rgba(40,28,120,0.18),inset_0_1px_0_rgba(255,255,255,0.9)] dark:bg-white/15 dark:shadow-[0_2px_8px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.2)]"
                      : "text-muted hover:text-ink"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="relative z-10 pr-1">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
