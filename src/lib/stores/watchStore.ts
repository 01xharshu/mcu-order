import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface WatchState {
  schemaVersion: number;
  activeWatchPath: string;
  watchedFilmIds: string[];
  favorites: string[];
  lastCompletedId: string | null;

  setActiveWatchPath: (path: string) => void;
  markWatched: (filmId: string) => void;
  unmarkWatched: (filmId: string) => void;
  toggleFavorite: (filmId: string) => void;
  clearProgress: () => void;
}

export const useWatchStore = create<WatchState>()(
  persist(
    (set) => ({
      schemaVersion: 1,
      activeWatchPath: "first-journey",
      watchedFilmIds: [],
      favorites: [],
      lastCompletedId: null,

      setActiveWatchPath: (path) => set({ activeWatchPath: path }),
      markWatched: (filmId) => set((state) => ({
        watchedFilmIds: Array.from(new Set([...state.watchedFilmIds, filmId])),
        lastCompletedId: filmId
      })),
      unmarkWatched: (filmId) => set((state) => ({
        watchedFilmIds: state.watchedFilmIds.filter(id => id !== filmId)
      })),
      toggleFavorite: (filmId) => set((state) => ({
        favorites: state.favorites.includes(filmId) 
          ? state.favorites.filter(id => id !== filmId)
          : [...state.favorites, filmId]
      })),
      clearProgress: () => set({ watchedFilmIds: [], lastCompletedId: null })
    }),
    {
      name: 'mcu-watch-progress',
    }
  )
);
