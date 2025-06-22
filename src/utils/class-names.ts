export type ClassValue = string | null | undefined | false

export interface IClassNames {
  (...classes: ClassValue[]): string
}

export default function classNames(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(' ')
}
