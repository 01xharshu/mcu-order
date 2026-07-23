"use client";

import { create } from 'zustand';

export type QualityTier = 'high' | 'medium' | 'low';

interface GovernorState {
  tier: QualityTier;
  fps: number;
  setTier: (tier: QualityTier) => void;
  reportFrame: (deltaTimeMs: number) => void;
}

// Track a small rolling window of frametimes to determine if we should downgrade
const FRAME_SAMPLES = 60;
let frameTimes: number[] = [];
let sampleCount = 0;

export const useGovernor = create<GovernorState>((set, get) => ({
  tier: 'high',
  fps: 60,
  setTier: (tier) => set({ tier }),
  reportFrame: (deltaTimeMs) => {
    frameTimes[sampleCount % FRAME_SAMPLES] = deltaTimeMs;
    sampleCount++;

    if (sampleCount % FRAME_SAMPLES === 0) {
      // Calculate average FPS over the last window
      const avgDelta = frameTimes.reduce((a, b) => a + b, 0) / FRAME_SAMPLES;
      const currentFps = 1000 / avgDelta;
      
      set({ fps: currentFps });

      const currentTier = get().tier;

      // Auto-downgrade logic
      if (currentFps < 30 && currentTier !== 'low') {
        console.warn(`[Governor] FPS dropped to ${currentFps.toFixed(1)}, downgrading quality tier to LOW`);
        set({ tier: 'low' });
      } else if (currentFps < 45 && currentFps >= 30 && currentTier === 'high') {
        console.warn(`[Governor] FPS dropped to ${currentFps.toFixed(1)}, downgrading quality tier to MEDIUM`);
        set({ tier: 'medium' });
      }
    }
  }
}));
