import { create } from "zustand";

const useThemeStore = create((set) => ({
  isDarkMode: localStorage.getItem("theme") === "dark",
  toggleTheme: () =>
    set((state) => {
      const newMode = !state.isDarkMode;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return { isDarkMode: newMode };
    }),
}));

export default useThemeStore;
