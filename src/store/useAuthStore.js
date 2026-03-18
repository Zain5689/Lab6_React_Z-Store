import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set) => ({
      token: null,
      login: (newToken) => set({ token: newToken }),
      logout: () => set({ token: null }),
    }),
    {
      name: "auth-storage",
    },
  ),
);

export default useAuthStore;
