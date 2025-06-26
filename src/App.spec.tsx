import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, beforeEach, vi, it, expect } from 'vitest'
import App from './App.tsx'
import type { Superhero } from './types/superhero.types.ts'

const superheroes = [
  { id: 1, name: 'Flash', appearance: {}, biography: {}, images: {} }
] as Superhero[]

function mockResponse(data: unknown, ok = true) {
  return Promise.resolve({
    ok,
    json: () => Promise.resolve(data)
  }) as unknown as Response
}

beforeEach(() => {
  global.fetch = vi.fn(() =>
    mockResponse(superheroes)
  ) as unknown as typeof fetch
})

afterEach(() => {
  vi.resetAllMocks()
})

it('shows an error message when fetch fails', async () => {
  global.fetch = vi.fn(() =>
    mockResponse(null, false)
  ) as unknown as typeof fetch

  render(<App />)

  await waitFor(() =>
    expect(
      screen.getByText('Failed to fetch superheroes. Try again later.')
    ).toBeInTheDocument()
  )
})

it('deletes a hero after user confirmation', async () => {
  render(<App />)

  await waitFor(() => expect(screen.getByText('Flash')).toBeInTheDocument())
  await userEvent.click(screen.getByRole('button', { name: /delete/i }))
  expect(screen.queryByText('Flash')).not.toBeInTheDocument()
})

it('edits a superhero and updates the list', async () => {
  render(<App />)

  await waitFor(() => expect(screen.getByText('Flash')).toBeInTheDocument())
  await userEvent.click(screen.getByRole('row', { name: /flash/i }))
  await waitFor(() =>
    expect(
      screen.getByRole('button', { name: /edit superhero/i })
    ).toBeInTheDocument()
  )

  await userEvent.click(screen.getByRole('button', { name: /edit/i }))

  const nameInput = screen.getByLabelText(/name/i)
  await userEvent.clear(nameInput)
  await userEvent.type(nameInput, 'Test superhero row')

  await userEvent.click(screen.getByRole('button', { name: /save/i }))

  expect(screen.getByText('Test superhero row')).toBeInTheDocument()
})

it('creates a new superhero and adds it to the list', async () => {
  render(<App />)

  await waitFor(() => expect(screen.getByText('Flash')).toBeInTheDocument())
  await userEvent.click(screen.getByRole('button', { name: /new superhero/i }))

  const nameInput = screen.getByLabelText(/name/i)
  await userEvent.type(nameInput, 'New Hero test row')

  await userEvent.click(screen.getByRole('button', { name: /create/i }))

  expect(screen.getByText('New Hero test row')).toBeInTheDocument()
})
