/**
 * Quality Governor — THE MCU CONTINUUM
 * Master Prompt §58, lines 5151–5214
 *
 * Smooths frame time and gracefully degrades visual quality
 * to maintain strict performance budgets.
 */

import { useProductStore } from "@/stores/productStore";

export type QualityTier = "static" | "low" | "medium" | "high" | "ultra";

export interface QualitySettings {
  dpr: number;
  sceneMode: "plate" | "layered" | "realtime";
  strataTargetScale: 0.5 | 0.75 | 1;
  particles: 0; // Explicitly 0 per spec
  shadowSize: 0 | 1024 | 2048;
  temporalLayers: 1 | 2 | 3 | 4;
  topologyLod: 0 | 1 | 2;
  topologyMotion: "state-cut" | "reduced" | "full";
  narrativeLights: "baked" | "hybrid";
  bloom: boolean;
  gltfLod: 0 | 1 | 2;
}

const QUALITY_PRESETS: Record<QualityTier, QualitySettings> = {
  static: {
    dpr: 1,
    sceneMode: "plate",
    strataTargetScale: 0.5,
    particles: 0,
    shadowSize: 0,
    temporalLayers: 1,
    topologyLod: 0,
    topologyMotion: "state-cut",
    narrativeLights: "baked",
    bloom: false,
    gltfLod: 0,
  },
  low: {
    dpr: 1,
    sceneMode: "layered",
    strataTargetScale: 0.5,
    particles: 0,
    shadowSize: 0,
    temporalLayers: 2,
    topologyLod: 0,
    topologyMotion: "state-cut",
    narrativeLights: "baked",
    bloom: true, // masks only
    gltfLod: 0,
  },
  medium: {
    dpr: 1.25,
    sceneMode: "realtime", // or layered hybrid
    strataTargetScale: 0.5,
    particles: 0,
    shadowSize: 1024,
    temporalLayers: 3,
    topologyLod: 1,
    topologyMotion: "reduced",
    narrativeLights: "hybrid",
    bloom: true,
    gltfLod: 1,
  },
  high: {
    dpr: 1.5,
    sceneMode: "realtime",
    strataTargetScale: 0.75,
    particles: 0,
    shadowSize: 2048,
    temporalLayers: 4,
    topologyLod: 2,
    topologyMotion: "full",
    narrativeLights: "hybrid",
    bloom: true,
    gltfLod: 2,
  },
  ultra: {
    dpr: 2, // bounded by actual DPR at runtime
    sceneMode: "realtime",
    strataTargetScale: 1,
    particles: 0,
    shadowSize: 2048,
    temporalLayers: 4,
    topologyLod: 2,
    topologyMotion: "full",
    narrativeLights: "hybrid",
    bloom: true,
    gltfLod: 2,
  },
};

const TIER_ORDER: QualityTier[] = ["static", "low", "medium", "high", "ultra"];

export class QualityGovernor {
  private frameTimes: number[] = [];
  private currentTierIndex: number = 3; // Start at high
  private lastChangeTime: number = 0;
  
  // Smoothing window
  private readonly WINDOW_SIZE = 120;
  private readonly COOLDOWN_MS = 8000;
  private readonly IDLE_UPGRADE_MS = 12000;

  private idleStartTime: number = 0;
  private isIdle: boolean = false;

  constructor() {
    // Initial hardware assessment could happen here
  }

  getTier(): QualityTier {
    const override = useProductStore.getState().qualityOverride;
    if (override !== "auto") return override;
    
    // Reduced visuals forces static/low
    if (useProductStore.getState().reducedVisuals) {
      return "static";
    }

    return TIER_ORDER[this.currentTierIndex];
  }

  getSettings(): QualitySettings {
    const tier = this.getTier();
    const settings = { ...QUALITY_PRESETS[tier] };
    
    // Clamp Ultra DPR
    if (tier === "ultra" && typeof window !== "undefined") {
      settings.dpr = Math.min(2, window.devicePixelRatio || 1);
    }
    
    return settings;
  }

  /** Called by R3F useFrame with delta in seconds */
  recordFrame(deltaSec: number, timeMs: number) {
    const deltaMs = deltaSec * 1000;
    
    this.frameTimes.push(deltaMs);
    if (this.frameTimes.length > this.WINDOW_SIZE) {
      this.frameTimes.shift();
    }

    // Cooldown check
    if (timeMs - this.lastChangeTime < this.COOLDOWN_MS) return;

    // Check performance
    const smoothFrameTime = this.frameTimes.reduce((a, b) => a + b, 0) / this.frameTimes.length;

    // If smoothed frame time exceeds 24 ms for ~2.5 s (our window size of 120 at 60fps is 2s, close enough), degrade
    if (this.frameTimes.length === this.WINDOW_SIZE && smoothFrameTime > 24) {
      this.degradeQuality(timeMs);
    } else if (this.isIdle && timeMs - this.idleStartTime > this.IDLE_UPGRADE_MS) {
      this.upgradeQuality(timeMs);
      this.idleStartTime = timeMs; // reset
    }
  }

  setIdle(idle: boolean, timeMs: number) {
    if (idle !== this.isIdle) {
      this.isIdle = idle;
      if (idle) {
        this.idleStartTime = timeMs;
      }
    }
  }

  private degradeQuality(timeMs: number) {
    if (this.currentTierIndex > 0) {
      this.currentTierIndex--;
      this.lastChangeTime = timeMs;
      this.frameTimes = []; // Reset window
    }
  }

  private upgradeQuality(timeMs: number) {
    if (this.currentTierIndex < TIER_ORDER.length - 1) {
      this.currentTierIndex++;
      this.lastChangeTime = timeMs;
      this.frameTimes = []; // Reset window
    }
  }
}

export const governor = new QualityGovernor();
