import { useEffect, useState } from 'react'

import type { Superhero } from '@/types/superhero.types'
import SuperheroesTable from '@/components/superheroes-table'
import shuffleArray from '@/utils/shuffle-array'
import SideDrawer from '@/components/side-drawer'
import { useDrawerStore } from '@/stores/use-drawer-store'
import Button from '@/components/ui/button'

export default function App() {
  const [superheroes, setSuperheroes] = useState<Superhero[]>([])
  const { openDrawer } = useDrawerStore()

  useEffect(() => {
    fetch('https://akabab.github.io/superhero-api/api/all.json')
      .then((res) => res.json())
      .then((json: Superhero[]) => {
        setSuperheroes(shuffleArray(json).slice(0, 100))
      })
  }, [])

  const deleteSuperhero = (id: number) => {
    setSuperheroes((prev) => prev.filter((hero) => hero.id !== id))
  }

  return (
    <div className="flex flex-col items-center min-h-screen max-w-screen w-full">
      <Button onClick={() => openDrawer('form')}>New superhero</Button>
      <SuperheroesTable
        superheroes={superheroes}
        onDelete={(id) => deleteSuperhero(id)}
      />
      <SideDrawer deleteSuperhero={deleteSuperhero} />
    </div>
  )
}
