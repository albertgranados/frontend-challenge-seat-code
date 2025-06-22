import { create } from 'zustand'
import type { DrawerState } from './types'

export const useDrawerStore = create<DrawerState>((set) => ({
  isDrawerOpen: false,
  selectedSuperhero: null,
  drawerType: 'form',
  openDrawer: (type, superhero = null) =>
    set({
      isDrawerOpen: true,
      selectedSuperhero: superhero,
      drawerType: type
    }),
  closeDrawer: () => set({ isDrawerOpen: false })
}))
