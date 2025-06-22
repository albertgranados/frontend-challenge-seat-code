import type { PropsWithChildren } from 'react'

export interface BadgeProps extends PropsWithChildren {
  variant?: 'neutral' | 'positive' | 'negative' | 'inactive'
  className?: string
}
