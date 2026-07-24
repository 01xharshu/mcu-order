/**
 * Continuum Map — THE MCU CONTINUUM
 * Master Prompt §10, lines 1189–1203
 *
 * Full-screen navigation map.
 * Opens by compressing the world into a thin ribbon.
 */

"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./ContinuumMap.module.css";
import { SoundControl } from "./SoundControl";

const ROUTES = [
  { href: "/characters", label: "CHARACTERS", description: "Lives and decisions across the timeline" },
  { href: "/films", label: "FILMS", description: "The release catalog and consequence essays" },
  { href: "/timeline", label: "TIMELINE", description: "The chronological sequence of events" },
  { href: "/watch", label: "WATCH", description: "Build a rewatch route through the saga" },
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
  const dialogRef = useRef<HTMLDivElement>(null);
  const previousPathname = useRef(pathname);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        onClose();
        return;
      }

      if (e.key === "Tab" && dialogRef.current) {
        const focusable = Array.from(
          dialogRef.current.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
          )
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (previousPathname.current !== pathname && isOpen) {
      onClose();
    }
    previousPathname.current = pathname;
  }, [pathname, isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) return;
    const firstControl = dialogRef.current?.querySelector<HTMLElement>("button, a[href]");
    firstControl?.focus();
  }, [isOpen]);

  return (
    <div
      className={`${styles.container} ${isOpen ? styles.open : ""}`}
      aria-hidden={!isOpen}
      role="dialog"
      aria-label="MCU Experience navigation"
      aria-modal="true"
    >
      <button className={styles.backdrop} onClick={onClose} type="button" aria-label="Close site index" />
      
      <div className={styles.content} ref={dialogRef} tabIndex={-1}>
        <div className={styles.routeList}>
          <p className={styles.eyebrow}>ONE UNIVERSE · MANY WAYS IN</p>
          <nav aria-label="MCU Experience routes">
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
          
          <div className={styles.controls}>
            <div className={styles.controlRow}>
              <SoundControl />
            </div>
            <p className={styles.disclaimer}>
              This site is not affiliated with Marvel Studios. 
              Full-story notes are editorial reading aids for released films.
            </p>
          </div>
        </div>

        <div className={styles.previewField}>
          <span className={styles.previewSeam} aria-hidden="true" />
          <p className={styles.previewKicker}>EVERY LIFE</p>
          <p className={styles.previewTitle}>LEAVES<br />A TRACE.</p>
          <p className={styles.previewCopy}>Choose a route; the same continuity takes a different form.</p>
        </div>
      </div>
    </div>
  );
}
