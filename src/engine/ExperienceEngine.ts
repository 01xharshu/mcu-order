/**
 * ExperienceEngine — THE MCU CONTINUUM
 * Master Prompt §40, lines 4050–4114
 *
 * One object that owns all rapid-frame animation state.
 * Lenis uses autoRaf: false.
 * R3F's active experience frame calls engine.tick.
 * GSAP timelines are paused and receive progress from the engine.
 * CSS sticky sections establish scroll ranges.
 * Scroll measurement updates target only.
 * Rapid frame values stay outside React render state.
 * React receives active scene changes only after the scene crosses a stable threshold.
 */


/**
 * Shared damping function that mirrors the spec's use of maath/easing damp.
 * λ = smoothing factor, higher = faster convergence
 */
function dampValue(
  current: number,
  target: number,
  lambda: number,
  dt: number
): number {
  // maath/easing damp signature: damp(current, target, lambda, dt)
  // We use a manual implementation to avoid importing maath at the engine level
  const t = 1 - Math.exp(-lambda * dt);
  return current + (target - current) * t;
}

export type ScrollDirection = -1 | 0 | 1;

export interface EngineState {
  /** Normalized scroll progress [0, 1] */
  target: number;
  current: number;
  previous: number;
  velocity: number;
  direction: ScrollDirection;

  /** Causal Shear progress [0, 1] */
  shearTarget: number;
  shearCurrent: number;

  /** Pointer position (normalized -1 to 1) */
  pointerTarget: { x: number; y: number };
  pointerCurrent: { x: number; y: number };
}

export class ExperienceEngine {
  /* ── Scroll state (§40, lines 4053–4058) ── */
  target = 0;
  current = 0;
  previous = 0;
  velocity = 0;
  direction: ScrollDirection = 0;

  /* ── Causal Shear (§40, lines 4059–4060) ── */
  shearTarget = 0;
  shearCurrent = 0;

  /* ── Pointer (§40, lines 4061–4062) ── */
  pointerTarget = { x: 0, y: 0 };
  pointerCurrent = { x: 0, y: 0 };

  /* ── Active scene (derived, low-frequency) ── */
  activeScene = 0;
  private sceneThresholds: number[] = [];
  private onSceneChange?: (scene: number) => void;

  /* ── Lenis reference (injected) ── */
  private lenis: { raf: (time: number) => void } | null = null;

  /* ── GSAP timeline reference ── */
  private timeline: { progress: (p: number) => void } | null = null;

  /* ── Reduced motion ── */
  reducedMotion = false;

  constructor() {
    if (typeof window !== "undefined") {
      this.reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
    }
  }

  /** Attach Lenis instance (autoRaf: false per §40, line 4106) */
  setLenis(lenis: { raf: (time: number) => void } | null) {
    this.lenis = lenis;
  }

  /** Attach GSAP paused timeline (§40, line 4108) */
  setTimeline(timeline: { progress: (p: number) => void } | null) {
    this.timeline = timeline;
  }

  /** Set scene thresholds for active scene detection */
  setSceneThresholds(
    thresholds: number[],
    onChange: (scene: number) => void
  ) {
    this.sceneThresholds = thresholds;
    this.onSceneChange = onChange;
  }

  /**
   * Core tick — called from R3F's useFrame (§40, line 4064–4100)
   *
   * Damping constants:
   * - Scroll: λ = 9.2
   * - Velocity: λ = 11
   * - Shear: λ = 11.5 (active) / 8 (releasing)
   * - Pointer: λ = 13
   */
  tick(timeMs: number, dt: number) {
    // Lenis raf (§40, line 4066)
    this.lenis?.raf(timeMs);

    // Scroll interpolation (§40, lines 4068–4069)
    this.current = dampValue(this.current, this.target, 9.2, dt);

    // Velocity (§40, lines 4069–4072)
    this.velocity = dampValue(
      this.velocity,
      (this.current - this.previous) / Math.max(dt, 1 / 120),
      11,
      dt
    );

    // Direction (§40, lines 4074–4076)
    this.direction =
      this.velocity > 0.0001 ? 1 : this.velocity < -0.0001 ? -1 : 0;

    // Causal Shear interpolation (§40, lines 4078–4083)
    this.shearCurrent = dampValue(
      this.shearCurrent,
      this.shearTarget,
      this.shearTarget ? 11.5 : 8,
      dt
    );

    // Pointer interpolation (§40, lines 4085–4096)
    this.pointerCurrent.x = dampValue(
      this.pointerCurrent.x,
      this.pointerTarget.x,
      13,
      dt
    );
    this.pointerCurrent.y = dampValue(
      this.pointerCurrent.y,
      this.pointerTarget.y,
      13,
      dt
    );

    // GSAP timeline progress (§40, line 4098)
    this.timeline?.progress(this.current);

    this.previous = this.current;

    // Scene detection (low-frequency, threshold-based per §40, line 4113)
    this.detectActiveScene();
  }

  /** Set scroll target from Lenis/scroll event (§40, line 4111) */
  setScrollTarget(progress: number) {
    this.target = Math.max(0, Math.min(1, progress));
  }

  /** Set pointer target from pointer event */
  setPointerTarget(x: number, y: number) {
    this.pointerTarget.x = x;
    this.pointerTarget.y = y;
  }

  /** Low-frequency scene change detection */
  private detectActiveScene() {
    if (this.sceneThresholds.length === 0) return;

    let newScene = 0;
    for (let i = this.sceneThresholds.length - 1; i >= 0; i--) {
      if (this.current >= this.sceneThresholds[i]) {
        newScene = i;
        break;
      }
    }

    if (newScene !== this.activeScene) {
      this.activeScene = newScene;
      this.onSceneChange?.(newScene);
    }
  }

  /** Get current engine snapshot (for reading in React sparingly) */
  getState(): EngineState {
    return {
      target: this.target,
      current: this.current,
      previous: this.previous,
      velocity: this.velocity,
      direction: this.direction,
      shearTarget: this.shearTarget,
      shearCurrent: this.shearCurrent,
      pointerTarget: { ...this.pointerTarget },
      pointerCurrent: { ...this.pointerCurrent },
    };
  }

  /** Cleanup (§40, line 4114) */
  dispose() {
    this.lenis = null;
    this.timeline = null;
    this.onSceneChange = undefined;
    this.sceneThresholds = [];
  }
}

/** Singleton engine instance */
export const engine = new ExperienceEngine();
