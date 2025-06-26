import type { ClassValue } from './types'

export default function classNames(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(' ')
}
