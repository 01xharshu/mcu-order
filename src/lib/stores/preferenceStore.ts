import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type SpoilerLevel = "safe" | "full";
type QualitySetting = "auto" | "low" | "medium" | "high" | "ultra";

interface PreferenceState {
  spoilerLevel: SpoilerLevel;
  soundEnabled: boolean;
  reducedVisualMode: boolean;
  userSelectedQuality: QualitySetting;
  openingCompleted: boolean;
  
  setSpoilerLevel: (level: SpoilerLevel) => void;
  setSoundEnabled: (enabled: boolean) => void;
  setReducedVisualMode: (reduced: boolean) => void;
  setUserSelectedQuality: (quality: QualitySetting) => void;
  setOpeningCompleted: (completed: boolean) => void;
}

export const usePreferenceStore = create<PreferenceState>()(
  persist(
    (set) => ({
      spoilerLevel: "safe",
      soundEnabled: false,
      reducedVisualMode: false,
      userSelectedQuality: "auto",
      openingCompleted: false,
      
      setSpoilerLevel: (level) => set({ spoilerLevel: level }),
      setSoundEnabled: (enabled) => set({ soundEnabled: enabled }),
      setReducedVisualMode: (reduced) => set({ reducedVisualMode: reduced }),
      setUserSelectedQuality: (quality) => set({ userSelectedQuality: quality }),
      setOpeningCompleted: (completed) => set({ openingCompleted: completed }),
    }),
    {
      name: 'mcu-preferences',
    }
  )
);
