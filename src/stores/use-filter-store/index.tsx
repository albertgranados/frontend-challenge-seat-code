import { create } from 'zustand'
import type { FilterState } from './types'

export const useFilterStore = create<FilterState>((set) => ({
  filter: null,
  setFilter: (filter: string | null) => set(() => ({ filter }))
}))
