import type { Superhero } from '@/types/superhero.types'

export type FormState = {
  name: string
  setName: (name: string) => void
  resetForm: () => void
  createSuperhero: (addSuperhero: (s: Superhero) => void) => void
  editSuperhero: (
    superhero: Superhero,
    updateSuperhero: (s: Superhero) => void
  ) => void
}
