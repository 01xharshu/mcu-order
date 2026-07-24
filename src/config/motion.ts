/**
 * Motion Tokens — THE MCU CONTINUUM
 * Master Prompt §16, lines 1942–1965
 */

export const DURATIONS = {
  /** Checkbox, seam acknowledgment */
  acknowledge: 60,
  /** Quick visual state toggle */
  micro: 160,
  /** Fast positional update */
  quick: 240,
  /** Standard UI transition */
  standard: 420,
  /** Modal/panel presentation */
  panel: 560,
  /** Page transition */
  route: 720,
  /** Deep WebGL topological change */
  cinematic: 1280,
} as const;

export const EASING = {
  /** Snappy entry (deceleration) */
  enter: [0.16, 1, 0.3, 1] as [number, number, number, number],
  /** Quick exit (acceleration) */
  exit: [0.7, 0, 0.84, 0] as [number, number, number, number],
  /** Smooth continuous movement */
  move: [0.65, 0, 0.35, 1] as [number, number, number, number],
  /** Gentle arrival */
  soft: [0.22, 1, 0.36, 1] as [number, number, number, number],
} as const;
