import type { Superhero } from '@/types/superhero.types'

export interface SideDrawerProps {
  deleteSuperhero: (id: number) => void
  handleCreateSuperhero: () => void
  handleEditSuperhero: (superhero: Superhero) => void
}
