import { useDrawerStore } from '@/stores/use-drawer-store'
import Button from '@/components/ui/button'
import Input from '@/components/ui/input'
import { SearchIcon } from 'lucide-react'
import type { FiltersBarProps } from './types'

export default function FiltersBar({ handleSetFilter }: FiltersBarProps) {
  const { openDrawer } = useDrawerStore()

  return (
    <div className="flex w-full justify-between gap-4 px-4 pt-6 ">
      <Input
        onChange={(e) => handleSetFilter(e.target.value)}
        type="text"
        name="search"
        id="search"
        autoComplete="off"
        data-testid="search-input"
        placeholder="Search by name or alias..."
        icon={SearchIcon}
      />
      <Button onClick={() => openDrawer('form')}>New superhero</Button>
    </div>
  )
}
