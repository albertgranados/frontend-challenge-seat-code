export type ClassValue = string | null | undefined | false

export interface IClassNames {
  (...classes: ClassValue[]): string
}
