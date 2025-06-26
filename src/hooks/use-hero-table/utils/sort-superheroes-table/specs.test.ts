import { Alignment, Gender, type Superhero } from '@/types/superhero.types'
import { sortSuperheroesTable } from './index'
import { SortBy, SortOrder } from '@/stores/use-sorting-store/types'

const superheroes = [
  {
    id: 1,
    name: 'Batman',
    biography: {
      fullName: 'Bruce Wayne',
      publisher: 'DC',
      alignment: Alignment.Good
    },
    appearance: {
      gender: Gender.Male
    }
  },
  {
    id: 2,
    name: 'Iron Man',
    biography: {
      fullName: 'Tony Stark',
      publisher: 'Marvel',
      alignment: Alignment.Good
    },
    appearance: {
      gender: Gender.Male
    }
  },
  {
    id: 3,
    name: 'Black Panther',
    biography: {
      fullName: "T'Challa",
      publisher: 'Marvel',
      alignment: Alignment.Good
    },
    appearance: {
      gender: Gender.Male
    }
  },
  {
    id: 4,
    name: 'Wonder Woman',
    biography: {
      fullName: 'Diana Prince',
      publisher: 'DC',
      alignment: Alignment.Good
    },
    appearance: {
      gender: Gender.Female
    }
  },
  {
    id: 5,
    name: 'Spider Man',
    biography: {
      fullName: 'Peter Parker',
      publisher: 'Marvel',
      alignment: Alignment.Good
    },
    appearance: {
      gender: Gender.Male
    }
  },
  {
    id: 6,
    name: 'Captain America',
    biography: {
      fullName: 'Steve Rogers',
      publisher: 'Marvel',
      alignment: Alignment.Good
    },
    appearance: {
      gender: Gender.Male
    }
  },
  {
    id: 7,
    name: 'Hulk',
    biography: {
      fullName: 'Bruce Banner',
      publisher: 'Marvel',
      alignment: Alignment.Neutral
    },
    appearance: {
      gender: Gender.Male
    }
  },
  {
    id: 8,
    name: 'SuperTest',
    biography: {
      fullName: 'Super Test',
      publisher: 'Z',
      alignment: Alignment.Bad
    },
    appearance: {
      gender: Gender.Male
    }
  },
  {
    id: 9,
    name: 'A',
    biography: {
      fullName: 'A',
      publisher: 'A',
      alignment: Alignment.Empty
    },
    appearance: {
      gender: Gender.Empty
    }
  }
] as Superhero[]

it('sorts by name ASC', () => {
  const result = sortSuperheroesTable(
    superheroes,
    SortBy.NAME,
    SortOrder.ASCENDING
  )
  expect(result[0].name).toBe('A')
})

it('sorts by publisher DESC', () => {
  const result = sortSuperheroesTable(
    superheroes,
    SortBy.PUBLISHER,
    SortOrder.DESCENDING
  )
  expect(result[0].biography.fullName).toBe('Super Test')
  expect(result[result.length - 1].name).toBe('A')
})

it('sorts by alignment ASC', () => {
  const result = sortSuperheroesTable(
    superheroes,
    SortBy.ALIGNMENT,
    SortOrder.ASCENDING
  )
  expect(result[0].biography.fullName).toBe('A')
  expect(result[1].biography.fullName).toBe('Super Test')
  expect(result[result.length - 1].name).toBe('Hulk')
})

it('sorts by gender DESC', () => {
  const result = sortSuperheroesTable(
    superheroes,
    SortBy.GENDER,
    SortOrder.DESCENDING
  )
  expect(result[0].appearance.gender).toBe(Gender.Male)
  expect(result[result.length - 2].name).toBe('Wonder Woman')
  expect(result[result.length - 1].appearance.gender).toBe(Gender.Empty)
})
