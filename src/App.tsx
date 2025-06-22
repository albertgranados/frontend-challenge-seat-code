import { useEffect, useState } from 'react'

import type { Superhero } from '@/types/superhero.types'
import SuperheroesTable from '@/components/superheroes-table'
import shuffleArray from '@/utils/shuffle-array'

export default function App() {
  const [superheroes, setSuperheroes] = useState<Superhero[]>([])

  useEffect(() => {
    fetch('https://akabab.github.io/superhero-api/api/all.json')
      .then((res) => res.json())
      .then((json: Superhero[]) => {
        setSuperheroes(shuffleArray(json).slice(0, 100))
      })
  }, [])

  return (
    <div className="flex flex-col items-center min-h-screen max-w-screen w-full">
      <SuperheroesTable superheroes={superheroes} />
    </div>
  )
}
