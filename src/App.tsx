import { useEffect, useMemo, useState } from 'react'

import { type Superhero } from '@/types/superhero.types'
import SuperheroesTable from '@/components/superheroes-table'
import shuffleArray from '@/utils/shuffle-array'
import SideDrawer from '@/components/side-drawer'
import { useDrawerStore } from '@/stores/use-drawer-store'
import Button from '@/components/ui/button'
import { SortBy, SortOrder } from '@/stores/use-sorting-store/types'
import { useSortingStore } from './stores/use-sorting-store'

export default function App() {
  const [superheroes, setSuperheroes] = useState<Superhero[]>([])
  const { openDrawer } = useDrawerStore()
  const { sorting, sortingOrder } = useSortingStore()

  useEffect(() => {
    fetch('https://akabab.github.io/superhero-api/api/all.json')
      .then((res) => res.json())
      .then((json: Superhero[]) => {
        setSuperheroes(shuffleArray(json).slice(0, 100))
      })
  }, [])

  const filteredSuperheroes = superheroes

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

  return (
    <div className="flex flex-col items-center min-h-screen max-w-screen w-full">
      <Button onClick={() => openDrawer('form')}>New superhero</Button>
      <SuperheroesTable
        superheroes={sortedSuperheroes}
        onDelete={(id) => deleteSuperhero(id)}
      />
      <SideDrawer deleteSuperhero={deleteSuperhero} />
    </div>
  )
}
