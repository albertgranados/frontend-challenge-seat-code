import { useDrawerStore } from '@/stores/use-drawer-store'
import Button from '@/components/ui/button'
import Input from '@/components/ui/input'
import { SearchIcon } from 'lucide-react'
import { useFilterStore } from '@/stores/use-filter-store'

export default function FiltersBar() {
  const { openDrawer } = useDrawerStore()
  const { setFilter } = useFilterStore()

  return (
    <div className="flex w-full justify-between gap-4 px-4 pt-6 ">
      <Input
        onChange={(e) => setFilter(e.target.value)}
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
