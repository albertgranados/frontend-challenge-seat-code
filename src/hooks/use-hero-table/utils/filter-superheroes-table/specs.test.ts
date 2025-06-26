import type { Superhero } from '@/types/superhero.types'
import { filterSuperheroesTable } from './index'

const superheroes = [
  { id: 1, name: 'Batman', biography: { fullName: 'Bruce Wayne' } },
  { id: 2, name: 'Iron Man', biography: { fullName: 'Tony Stark' } },
  { id: 3, name: 'Black Panther', biography: { fullName: "T'Challa" } },
  { id: 4, name: 'Wonder Woman', biography: { fullName: 'Diana Prince' } },
  { id: 5, name: 'Spider Man', biography: { fullName: 'Peter Parker' } },
  { id: 6, name: 'Captain America', biography: { fullName: 'Steve Rogers' } },
  { id: 7, name: 'Hulk', biography: { fullName: 'Bruce Banner' } }
] as Superhero[]

it('returns all heroes when query is empty', () => {
  expect(filterSuperheroesTable(superheroes, '')).toEqual(superheroes)
})

it('matches by name (case-insensitive)', () => {
  expect(filterSuperheroesTable(superheroes, 'bat')).toHaveLength(1)
})

it('matches by full name (case-insensitive)', () => {
  expect(filterSuperheroesTable(superheroes, 'PETER')).toHaveLength(1)
})

it('matches by full name and name (case-insensitive)', () => {
  expect(filterSuperheroesTable(superheroes, 'bruce')).toHaveLength(2)
})

it('matches by full name', () => {
  expect(filterSuperheroesTable(superheroes, 'tony')[0].name).toBe('Iron Man')
})
