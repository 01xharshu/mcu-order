import { create } from 'zustand';

export type ExperienceState = {
  target: number;
  current: number;
  velocity: number;
  pointer: { x: number; y: number };
  holdingTime: boolean;
  activeScene: string;
  quality: "low" | "medium" | "high";
  reducedMotion: boolean;

  setTarget: (val: number) => void;
  setCurrent: (val: number) => void;
  setVelocity: (val: number) => void;
  setPointer: (x: number, y: number) => void;
  setHoldingTime: (val: boolean) => void;
  setActiveScene: (val: string) => void;
};

export const useExperienceStore = create<ExperienceState>((set) => ({
  target: 0,
  current: 0,
  velocity: 0,
  pointer: { x: 0, y: 0 },
  holdingTime: false,
  activeScene: 'wake',
  quality: 'high',
  reducedMotion: false,

  setTarget: (val) => set({ target: Math.max(0, Math.min(1, val)) }),
  setCurrent: (val) => set({ current: val }),
  setVelocity: (val) => set({ velocity: val }),
  setPointer: (x, y) => set({ pointer: { x, y } }),
  setHoldingTime: (val) => set({ holdingTime: val }),
  setActiveScene: (val) => set({ activeScene: val }),
}));
