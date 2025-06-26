import shuffle from '@/utils/shuffle-array'

const sample = [1, 2, 3, 4, 5]

it('does not mutate the original array', () => {
  const copy = [...sample]
  shuffle(copy)
  expect(copy).toEqual(sample)
})

it('returns the same length and elements', () => {
  const result = shuffle(sample)
  expect(result).toHaveLength(sample.length)
  expect(result.sort()).toEqual([...sample].sort())
})

it('returns at least one different ordering most of the time', () => {
  const results = Array.from({ length: 10 }, () => shuffle(sample))
  const someDifferent = results.some((r) => r.join('') !== sample.join(''))
  expect(someDifferent).toBe(true)
})

it('returns the same array when length is 1', () => {
  const singleElement = [42]
  const result = shuffle(singleElement)
  expect(result).toEqual(singleElement)
})
