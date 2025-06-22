import { useEffect, useMemo, useState } from 'react'

import { type Superhero } from '@/types/superhero.types'
import shuffleArray from '@/utils/shuffle-array'
import SideDrawer from '@/components/side-drawer'
import { SortBy, SortOrder } from '@/stores/use-sorting-store/types'
import { useSortingStore } from '@/stores/use-sorting-store'
import FiltersBar from '@/components/filters-bar'
import SuperheroesTable from '@/components/superheroes-table'
import { useFilterStore } from './stores/use-filter-store'
import { useFormStore } from './stores/use-form-store'

export default function App() {
  const [superheroes, setSuperheroes] = useState<Superhero[]>([])
  const { sorting, sortingOrder } = useSortingStore()
  const { filter } = useFilterStore()
  const { createSuperhero, editSuperhero } = useFormStore()

  useEffect(() => {
    fetch('https://akabab.github.io/superhero-api/api/all.json')
      .then((res) => res.json())
      .then((json: Superhero[]) => {
        setSuperheroes(shuffleArray(json).slice(0, 100))
      })
  }, [])

  const filteredSuperheroes = useMemo(() => {
    console.log('calculate filteredUsers')
    return filter != null && filter.length > 0
      ? superheroes.filter((superhero) => {
          return (
            superhero.name.toLowerCase().includes(filter.toLowerCase()) ||
            superhero.biography.fullName
              .toLowerCase()
              .includes(filter.toLowerCase())
          )
        })
      : superheroes
  }, [superheroes, filter])

  const sortedSuperheroes = useMemo(() => {
    if (!filteredSuperheroes || filteredSuperheroes.length === 0) return []
    if (sorting === SortBy.NONE) return filteredSuperheroes

    const sortExtractor = (
      sortBy: SortBy
    ): ((superhero: Superhero) => string) => {
      switch (sortBy) {
        case SortBy.NAME:
          return (s) => s.name
        case SortBy.PUBLISHER:
          return (s) => s.biography.publisher || '-'
        case SortBy.GENDER:
          return (s) => s.appearance.gender
        case SortBy.ALIGNMENT:
          return (s) => s.biography.alignment
        default:
          return (s) => s.name
      }
    }

    const extractor = sortExtractor(sorting)

    const sorted = [...filteredSuperheroes].sort((a, b) => {
      const result = extractor(a).localeCompare(extractor(b))
      return sortingOrder === SortOrder.ASCENDING ? result : -result
    })

    return sorted
  }, [filteredSuperheroes, sorting, sortingOrder])

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

  return (
    <div className="flex flex-col items-center min-h-screen max-w-screen w-full">
      <h1 className="text-2xl font-bold pb-4 pt-8">The Superhero List</h1>
      <FiltersBar />
      <SuperheroesTable
        superheroes={sortedSuperheroes}
        onDelete={(id) => deleteSuperhero(id)}
      />
      <SideDrawer
        deleteSuperhero={deleteSuperhero}
        handleCreateSuperhero={handleCreateSuperhero}
        handleEditSuperhero={handleEditSuperhero}
      />
    </div>
  )
}
