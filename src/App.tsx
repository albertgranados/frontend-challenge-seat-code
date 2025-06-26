import { useEffect, useState } from 'react'

import { type Superhero } from '@/types/superhero.types'
import shuffleArray from '@/utils/shuffle-array'
import SideDrawer from '@/components/side-drawer'
import FiltersBar from '@/components/filters-bar'
import SuperheroesTable from '@/components/superheroes-table'
import { useHeroesTable } from './hooks/use-hero-table'

export default function App() {
  const [superheroes, setSuperheroes] = useState<Superhero[]>([])

  const {
    processedList,
    deleteSuperhero,
    handleCreateSuperhero,
    handleEditSuperhero,
    handleSetFilter
  } = useHeroesTable(superheroes, setSuperheroes)

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setIsLoading(true)
    fetch('https://akabab.github.io/superhero-api/api/all.json')
      .then((res) => res.json())
      .then((json: Superhero[]) => {
        setSuperheroes(shuffleArray(json).slice(0, 100))
      })
      .catch(() => {
        setError('Failed to fetch superheroes. Try again later.')
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  return (
    <div className="flex flex-col items-center min-h-screen max-w-screen w-full">
      <h1 className="text-2xl font-bold pb-4 pt-8">The Superhero List</h1>
      <FiltersBar handleSetFilter={handleSetFilter} />
      <SuperheroesTable
        superheroes={processedList}
        isLoading={isLoading}
        error={error}
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
