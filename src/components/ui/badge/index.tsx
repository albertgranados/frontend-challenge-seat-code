import { style } from './styles'
import type { BadgeProps } from './types'

export default function Badge({ children, variant, className }: BadgeProps) {
  return <span className={style({ variant, className })}>{children}</span>
}
