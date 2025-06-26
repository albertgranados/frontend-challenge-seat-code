import Input from '@/components/ui/input'
import { useDrawerStore } from '@/stores/use-drawer-store'
import { useFormStore } from '@/stores/use-form-store'
import { useEffect } from 'react'

export default function SuperheroForm() {
  const { selectedSuperhero } = useDrawerStore()
  const { name, setName } = useFormStore()

  useEffect(() => {
    setName(selectedSuperhero?.name ?? '')
  }, [selectedSuperhero, setName])

  return (
    <form className="flex flex-col gap-4 p-4">
      <Input
        id="name"
        name="name"
        type="text"
        autoComplete="off"
        placeholder="Iron Man"
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </form>
  )
}
