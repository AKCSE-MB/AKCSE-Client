import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface SidebarState {
  isSideBarOpen: boolean;
  toggleSideBar: () => void;
  closeSideBar: () => void;
}

export const useSideBarStore = create<SidebarState>()(
  devtools((set) => ({
    isSideBarOpen: false,
    toggleSideBar: () =>
      set((state) => ({ isSideBarOpen: !state.isSideBarOpen })),
    closeSideBar: () => set({ isSideBarOpen: false }),
  })),
);
