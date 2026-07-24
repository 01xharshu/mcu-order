import { create } from 'zustand';

interface ContinuityState {
  // Toggle for the Causal Layer (Spacebar / Button press)
  isCausalLayerActive: boolean;
  setCausalLayerActive: (active: boolean) => void;
  toggleCausalLayer: () => void;
  
  // Current active scene index (low frequency, updates only when crossing thresholds)
  activeSceneIndex: number;
  setActiveSceneIndex: (index: number) => void;
}

export const useContinuityEngine = create<ContinuityState>((set) => ({
  isCausalLayerActive: false,
  setCausalLayerActive: (active) => set({ isCausalLayerActive: active }),
  toggleCausalLayer: () => set((state) => ({ isCausalLayerActive: !state.isCausalLayerActive })),
  
  activeSceneIndex: 0,
  setActiveSceneIndex: (index) => set({ activeSceneIndex: index }),
}));
