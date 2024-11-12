import { create } from 'zustand';

const useSideStateStore = create((set) => ({
  isSidebarOpen: false,
  sidebarToggle: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen }))
}));

export default useSideStateStore;
