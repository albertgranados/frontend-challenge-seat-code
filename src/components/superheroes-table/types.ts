import type { Superhero } from '@/types/superhero.types'

export interface SuperheroesTableProps {
  superheroes: Superhero[]
  onDelete: (id: number) => void
}
