import type { Superhero } from '@/types/superhero.types'

export type SideDrawerType = 'form' | 'details'

export type DrawerState = {
  isDrawerOpen: boolean
  drawerType: SideDrawerType
  selectedSuperhero: Superhero | null
  openDrawer: (type: SideDrawerType, superhero?: Superhero | null) => void
  closeDrawer: () => void
}
