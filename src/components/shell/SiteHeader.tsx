"use client";

/**
 * SiteHeader — THE MCU CONTINUUM
 * Master Prompt §10, lines 1159–1203
 *
 * - Product name: x 48, y 30 — 13px, 560 weight
 * - Route nav: x 1000, y 30 — 12px, 500 weight
 * - INDEX at x 1330, y 30
 * - Height: 48px (safe zone: 80px)
 * - No background bar unless scrolled past the Aperture
 * - Active route: 24px registered seam beneath label
 * - No MagneticButton — acknowledgment within 50ms, no magnetic displacement
 */

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
import styles from "./SiteHeader.module.css";
import { ContinuumMap } from "./ContinuumMap";

const NAV_ROUTES = [
  { href: "/characters", label: "CHARACTERS" },
  { href: "/films", label: "FILMS" },
  { href: "/timeline", label: "TIMELINE" },
  { href: "/watch", label: "WATCH" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mapOpen, setMapOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 120);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (mapOpen) {
      document.body.classList.add("map-open");
    } else {
      document.body.classList.remove("map-open");
    }
    return () => document.body.classList.remove("map-open");
  }, [mapOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
      role="banner"
    >
      <div className={styles.headerInner}>
        {/* Brand — §10: x 48, y 30, 13px, 560 weight */}
        <Link href="/" className={styles.brand} aria-label="THE MCU CONTINUUM — Home">
          THE MCU CONTINUUM
        </Link>

        {/* Navigation — §10: x 1000, y 30, 12px, 500 weight */}
        <nav className={styles.nav} aria-label="Primary navigation">
          {NAV_ROUTES.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`${styles.navLink} ${isActive(href) ? styles.active : ""}`}
              aria-current={isActive(href) ? "page" : undefined}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* INDEX — §10: x 1330, y 30 — opens Continuum Map */}
        <button
          className={styles.indexButton}
          aria-label={mapOpen ? "Close site index" : "Open site index"}
          aria-expanded={mapOpen}
          type="button"
          onClick={() => setMapOpen(!mapOpen)}
        >
          {mapOpen ? "CLOSE" : "INDEX"}
        </button>
      </div>

      <ContinuumMap isOpen={mapOpen} onClose={() => setMapOpen(false)} />
    </header>
  );
}
