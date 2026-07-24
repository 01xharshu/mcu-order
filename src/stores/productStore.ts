/**
 * Product Store — THE MCU CONTINUUM
 * Master Prompt §41, lines 4161–4186
 *
 * Zustand stores only product state.
 * Persist only watched IDs, sound preference,
 * quality override, and saved watch path.
 * Do not update Zustand every frame.
 */

import { create } from "zustand";
import { persist } from "zustand/middleware";

type QualityOverride = "auto" | "static" | "low" | "medium" | "high";

interface ProductStore {
  /* ── Watch State ── */
  watchedIds: string[];
  markWatched: (id: string) => void;
  unmarkWatched: (id: string) => void;
  isWatched: (id: string) => boolean;

  /* ── Sound ── */
  soundEnabled: boolean;
  toggleSound: () => void;

  /* ── Visual Preferences ── */
  reducedVisuals: boolean;
  setReducedVisuals: (reduced: boolean) => void;

  /* ── Quality ── */
  qualityOverride: QualityOverride;
  setQualityOverride: (quality: QualityOverride) => void;

  /* ── Active Focus (not persisted) ── */
  activeCharacterId?: string;
  setActiveCharacterId: (id?: string) => void;

  activeFilmId?: string;
  setActiveFilmId: (id?: string) => void;

  /* ── Watch Path ── */
  watchPath?: string[];
  setWatchPath: (path?: string[]) => void;

  /* ── Clear Data (§41: "Provide a visible clear-data action") ── */
  clearAllData: () => void;
}

const INITIAL_STATE = {
  watchedIds: [] as string[],
  soundEnabled: false,
  reducedVisuals: false,
  qualityOverride: "auto" as QualityOverride,
  activeCharacterId: undefined,
  activeFilmId: undefined,
  watchPath: undefined,
};

export const useProductStore = create<ProductStore>()(
  persist(
    (set, get) => ({
      ...INITIAL_STATE,

      markWatched: (id) =>
        set((state) => ({
          watchedIds: state.watchedIds.includes(id)
            ? state.watchedIds
            : [...state.watchedIds, id],
        })),
      unmarkWatched: (id) =>
        set((state) => ({
          watchedIds: state.watchedIds.filter((wid) => wid !== id),
        })),
      isWatched: (id) => get().watchedIds.includes(id),

      toggleSound: () => set((state) => ({ soundEnabled: !state.soundEnabled })),

      setReducedVisuals: (reduced) => set({ reducedVisuals: reduced }),

      setQualityOverride: (quality) => set({ qualityOverride: quality }),

      setActiveCharacterId: (id) => set({ activeCharacterId: id }),
      setActiveFilmId: (id) => set({ activeFilmId: id }),

      setWatchPath: (path) => set({ watchPath: path }),

      clearAllData: () => set(INITIAL_STATE),
    }),
    {
      name: "mcu-continuum-product",
      /* Only persist product state, not ephemeral UI state */
      partialize: (state) => ({
        watchedIds: state.watchedIds,
        soundEnabled: state.soundEnabled,
        qualityOverride: state.qualityOverride,
        watchPath: state.watchPath,
      }),
    }
  )
);
