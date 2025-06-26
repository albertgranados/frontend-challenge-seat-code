import type { Superhero } from '@/types/superhero.types'

export function filterSuperheroesTable(
  superheroes: Superhero[],
  filter: string | null
): Superhero[] {
  if (filter != null && filter.length > 0) {
    const q = filter.toLowerCase().trim()
    return superheroes.filter(
      (superhero) =>
        superhero.name.toLowerCase().includes(q) ||
        superhero.biography.fullName.toLowerCase().includes(q)
    )
  }
  return superheroes
}
