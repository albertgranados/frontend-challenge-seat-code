import { create } from 'zustand'
import { SortBy, SortOrder } from './types'
import type { SortingState } from './types'

export const useSortingStore = create<SortingState>((set) => ({
  sorting: SortBy.NONE,
  sortingOrder: SortOrder.ASCENDING,
  toggleSorting: (newSorting) =>
    set((state) => {
      const isSameSorting = state.sorting === newSorting
      return {
        sorting: newSorting,
        sortingOrder: isSameSorting
          ? state.sortingOrder === SortOrder.ASCENDING
            ? SortOrder.DESCENDING
            : SortOrder.ASCENDING
          : SortOrder.ASCENDING
      }
    })
}))
