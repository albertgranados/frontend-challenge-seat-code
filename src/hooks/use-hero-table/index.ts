import { useMemo, useState } from 'react'
import { filterSuperheroesTable } from './utils/filter-superheroes-table'
import { sortSuperheroesTable } from './utils/sort-superheroes-table'
import { useSortingStore } from '@/stores/use-sorting-store'
import type { Superhero } from '@/types/superhero.types'
import { useFormStore } from '@/stores/use-form-store'

export function useHeroesTable(
  superheroes: Superhero[],
  setSuperheroes: (updater: (prev: Superhero[]) => Superhero[]) => void
) {
  const [filter, setFilter] = useState<string | null>(null)
  const { sorting, sortingOrder } = useSortingStore()
  const { createSuperhero, editSuperhero } = useFormStore()

  const processedList = useMemo(() => {
    const filtered = filterSuperheroesTable(superheroes, filter)
    return sortSuperheroesTable(filtered, sorting, sortingOrder)
  }, [superheroes, filter, sorting, sortingOrder])

  const deleteSuperhero = (id: number) => {
    setSuperheroes((prev) => prev.filter((hero) => hero.id !== id))
  }

  const handleCreateSuperhero = () => {
    createSuperhero((newSuperhero: Superhero) =>
      setSuperheroes((prev) => [...prev, newSuperhero])
    )
  }

  const handleEditSuperhero = (selectedSuperhero: Superhero) => {
    editSuperhero(selectedSuperhero, (newSuperhero: Superhero) =>
      setSuperheroes((prev) =>
        prev.map((hero) => (hero.id === newSuperhero.id ? newSuperhero : hero))
      )
    )
  }

  const handleSetFilter = (newFilter: string | null) => {
    setFilter(newFilter)
  }

  return {
    processedList,
    deleteSuperhero,
    handleCreateSuperhero,
    handleEditSuperhero,
    handleSetFilter
  }
}
