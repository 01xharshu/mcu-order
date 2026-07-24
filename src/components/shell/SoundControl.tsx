/**
 * Sound Control — THE MCU CONTINUUM
 * Master Prompt §5F
 *
 * Default off. No copyrighted score.
 */

"use client";

import { useProductStore } from "@/stores/productStore";
import styles from "./Controls.module.css";

export function SoundControl() {
  const { soundEnabled, toggleSound } = useProductStore();

  return (
    <div className={styles.controlGroup}>
      <span className={styles.label}>SOUND</span>
      <button 
        className={`${styles.toggle} ${soundEnabled ? styles.on : styles.off}`}
        onClick={toggleSound}
        aria-live="polite"
      >
        {soundEnabled ? "ON" : "OFF"}
      </button>
    </div>
  );
}
