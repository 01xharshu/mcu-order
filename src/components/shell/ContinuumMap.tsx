/**
 * Continuum Map — THE MCU CONTINUUM
 * Master Prompt §10, lines 1189–1203
 *
 * Full-screen navigation map.
 * Opens by compressing the world into a thin ribbon.
 */

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./ContinuumMap.module.css";
import { SpoilerControl } from "./SpoilerControl";
import { SoundControl } from "./SoundControl";
import { engine } from "@/engine/ExperienceEngine";

const ROUTES = [
  { href: "/characters", label: "CHARACTERS", description: "Lives and decisions across the timeline" },
  { href: "/films", label: "FILMS", description: "The release catalog and consequence essays" },
  { href: "/timeline", label: "TIMELINE", description: "The chronological sequence of events" },
  { href: "/watch", label: "WATCH", description: "Compose your intent-driven watch list" },
  { href: "/search", label: "SEARCH", description: "Universal lookup" },
  { href: "/sources", label: "SOURCES", description: "Canon verification and evidence" },
];

export function ContinuumMap({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // Focus trap and esc listener
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Close map on route change
  useEffect(() => {
    if (isOpen) {
      onClose();
    }
  }, [pathname]);

  if (!mounted) return null;

  return (
    <div
      className={`${styles.container} ${isOpen ? styles.open : ""}`}
      aria-hidden={!isOpen}
      role="dialog"
      aria-label="Continuum Map Navigation"
      aria-modal="true"
    >
      <div className={styles.backdrop} onClick={onClose} />
      
      <div className={styles.content}>
        <div className={styles.routeList}>
          <h2 className="meta text-graphite-500" style={{ marginBottom: "var(--space-8)" }}>INDEX</h2>
          <nav aria-label="Continuum Map Routes">
            <ul className={styles.routeGroup}>
              {ROUTES.map((route) => (
                <li key={route.href}>
                  <Link 
                    href={route.href} 
                    className={`${styles.routeLink} ${pathname === route.href ? styles.active : ""}`}
                  >
                    <span className={styles.routeTitle}>{route.label}</span>
                    <span className={styles.routeDescription}>{route.description}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          <div style={{ marginTop: "var(--space-10)" }}>
            <div style={{ display: "flex", gap: "var(--space-6)", marginBottom: "var(--space-6)" }}>
              <SpoilerControl />
              <SoundControl />
            </div>
            <p className="meta text-graphite-500" style={{ maxWidth: "400px" }}>
              This site is not affiliated with Marvel Studios. 
              Data is for educational and chronological analysis.
            </p>
          </div>
        </div>

        <div className={styles.previewField}>
          {/* Future: Dynamic preview of selected route */}
        </div>
      </div>
      
      <button 
        className={styles.closeButton} 
        onClick={onClose}
        aria-label="Close Continuum Map"
      >
        CLOSE
      </button>
    </div>
  );
}
