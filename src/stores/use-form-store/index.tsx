import { create } from 'zustand'
import { Alignment, Gender, type Superhero } from '@/types/superhero.types'
import type { FormState } from './types'

export const useFormStore = create<FormState>((set, get) => ({
  name: '',
  setName: (name) => set({ name }),
  resetForm: () => set({ name: '' }),
  createSuperhero: (addSuperhero) => {
    const name = get().name.trim()
    if (!name) return

    const newSuperhero: Superhero = {
      id: Date.now(),
      name,
      appearance: {
        gender: Gender.Empty,
        race: '-',
        height: ['-', '-'],
        weight: ['-', '-'],
        eyeColor: '-',
        hairColor: '-'
      },
      biography: {
        fullName: '-',
        alterEgos: '-',
        aliases: [],
        placeOfBirth: '-',
        firstAppearance: '-',
        alignment: Alignment.Empty,
        publisher: '-'
      },
      powerstats: {
        intelligence: Math.floor(Math.random() * 101),
        strength: Math.floor(Math.random() * 101),
        speed: Math.floor(Math.random() * 101),
        durability: Math.floor(Math.random() * 101),
        power: Math.floor(Math.random() * 101),
        combat: Math.floor(Math.random() * 101)
      },
      slug: name.toLowerCase().replace(/\s+/g, '-'),
      work: {
        occupation: '-',
        base: '-'
      },
      connections: {
        groupAffiliation: '-',
        relatives: '-'
      },
      images: {
        xs: '',
        sm: '',
        md: '',
        lg: ''
      }
    }

    addSuperhero(newSuperhero)
    get().resetForm()
  },
  editSuperhero: (superhero, updateSuperhero) => {
    const name = get().name.trim()
    if (!name) return

    const updatedSuperhero: Superhero = {
      ...superhero,
      name,
      slug: name.toLowerCase().replace(/\s+/g, '-')
    }

    updateSuperhero(updatedSuperhero)
    get().resetForm()
  }
}))
