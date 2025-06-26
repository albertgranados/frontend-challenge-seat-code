import { describe, it, expect, beforeEach } from 'vitest'
import { useSortingStore } from '@/stores/use-sorting-store'
import { SortBy, SortOrder } from '@/stores/use-sorting-store/types'

describe('useSortingStore', () => {
  beforeEach(() => {
    useSortingStore.setState({
      sorting: SortBy.NONE,
      sortingOrder: SortOrder.ASCENDING
    })
  })

  it('sets column and ASC order on first toggle', () => {
    useSortingStore.getState().toggleSorting(SortBy.NAME)
    const { sorting, sortingOrder } = useSortingStore.getState()
    expect(sorting).toBe(SortBy.NAME)
    expect(sortingOrder).toBe(SortOrder.ASCENDING)
  })

  it('toggles to DESC on second toggle on same column', () => {
    const { toggleSorting } = useSortingStore.getState()
    toggleSorting(SortBy.NAME)
    toggleSorting(SortBy.NAME)
    expect(useSortingStore.getState().sortingOrder).toBe(SortOrder.DESCENDING)
  })

  it('switching column resets to ASC', () => {
    const { toggleSorting } = useSortingStore.getState()
    toggleSorting(SortBy.NAME)
    toggleSorting(SortBy.NAME)
    toggleSorting(SortBy.PUBLISHER)
    const { sorting, sortingOrder } = useSortingStore.getState()
    expect(sorting).toBe(SortBy.PUBLISHER)
    expect(sortingOrder).toBe(SortOrder.ASCENDING)
  })
})
