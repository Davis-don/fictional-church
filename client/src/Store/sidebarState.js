import { create } from 'zustand';

const useSideStateStore = create((set) => ({
  isSidebarOpen: true,
  sidebarToggle: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen }))
}));

export default useSideStateStore;
