import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { themes, type Theme } from '../themes/theme';

interface ThemeState {
  isDarkMode: boolean;
  currentTheme: Theme;
  toggleDarkMode: () => void;
  setTheme: (themeId: string) => void;
}

// Check system preference for dark mode
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      isDarkMode: prefersDark,
      currentTheme: themes[0],
      toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
      setTheme: (themeId) => set({ currentTheme: themes.find((t) => t.id === themeId) || themes[0] }),
    }),
    {
      name: 'theme-storage',
    }
  )
);