import { SortBy, SortOrder } from '@/stores/use-sorting-store/types'
import type { Superhero } from '@/types/superhero.types'

export function sortSuperheroesTable(
  superheroes: Superhero[],
  sorting: SortBy,
  sortingOrder: SortOrder
): Superhero[] {
  if (!superheroes || superheroes.length === 0) return []
  if (sorting === SortBy.NONE) return superheroes

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

  const sorted = [...superheroes].sort((a, b) => {
    const result = extractor(a).localeCompare(extractor(b))
    return sortingOrder === SortOrder.ASCENDING ? result : -result
  })

  return sorted
}
