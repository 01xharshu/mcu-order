"use client";

import { KeyboardEvent, PointerEvent, useEffect, useRef, useState, type CSSProperties } from "react";
import styles from "./CausalShear.module.css";

const MAX_DISTANCE = 240;
const RESISTANCE_START = 160;

function mapDistance(raw: number) {
  const clamped = Math.min(Math.max(raw, 0), MAX_DISTANCE);
  return clamped <= RESISTANCE_START
    ? clamped
    : RESISTANCE_START + (clamped - RESISTANCE_START) * 0.42;
}

export function CausalShear({
  before,
  choice,
  after,
}: {
  before: string;
  choice: string;
  after: string;
}) {
  const [distance, setDistance] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const startX = useRef<number | null>(null);
  const startY = useRef<number | null>(null);
  const pointerId = useRef<number | null>(null);
  const mapped = mapDistance(distance);
  const amount = expanded ? 1 : mapped / MAX_DISTANCE;

  const reweave = () => {
    startX.current = null;
    startY.current = null;
    pointerId.current = null;
    setDistance(0);
    setExpanded(false);
  };

  useEffect(() => {
    const onBlur = () => reweave();
    window.addEventListener("blur", onBlur);
    return () => window.removeEventListener("blur", onBlur);
  }, []);

  const handlePointerDown = (event: PointerEvent<HTMLButtonElement>) => {
    startX.current = event.clientX;
    startY.current = event.clientY;
    pointerId.current = event.pointerId;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: PointerEvent<HTMLButtonElement>) => {
    if (startX.current === null || pointerId.current !== event.pointerId) return;
    const raw = Math.abs(event.clientX - startX.current);
    const vertical = Math.abs(event.clientY - (startY.current ?? event.clientY));
    if (event.pointerType === "touch" && vertical > raw && vertical > 10) {
      event.currentTarget.releasePointerCapture(event.pointerId);
      reweave();
      return;
    }
    setDistance(Math.min(raw, MAX_DISTANCE));
    setExpanded(raw >= 64);
  };

  const handlePointerUp = () => {
    if (distance < 8) setExpanded((value) => !value);
    else setExpanded(distance >= 64);
    startX.current = null;
    startY.current = null;
    pointerId.current = null;
    setDistance(0);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Escape") {
      event.preventDefault();
      reweave();
      return;
    }
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      setExpanded(true);
      setDistance((value) => Math.min(MAX_DISTANCE, Math.max(0, value + (event.key === "ArrowRight" ? 19 : -19))));
    }
  };

  return (
    <section className={styles.shear} aria-label="Causal comparison">
      <div className={styles.stage} style={{ "--separation": amount } as CSSProperties}>
        <div className={`${styles.stratum} ${styles.before}`}>
          <span>BEFORE</span>
          <p>{before}</p>
        </div>
        <div className={`${styles.stratum} ${styles.choice}`}>
          <span>CHOICE</span>
          <p>{choice}</p>
        </div>
        <div className={`${styles.stratum} ${styles.after}`}>
          <span>AFTER</span>
          <p>{after}</p>
        </div>
        <button
          className={styles.seam}
          type="button"
          aria-expanded={expanded}
          aria-label="Compare before, choice, and after. Drag horizontally to separate cause and effect."
          onClick={() => setExpanded((value) => !value)}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={reweave}
          onKeyDown={handleKeyDown}
        >
          <span>DRAG TO SEPARATE CAUSE / EFFECT</span>
        </button>
      </div>
      <button type="button" className={styles.toggle} aria-expanded={expanded} onClick={() => setExpanded((value) => !value)}>
        {expanded ? "REWEAVE THE MOMENT" : "OPEN CAUSAL COMPARISON"}
      </button>
      <p className={styles.caption} aria-live="polite">
        {expanded ? "The gap holds the choice between a condition and its consequence." : "One moment can look complete until its cause and consequence are pulled apart."}
      </p>
    </section>
  );
}
