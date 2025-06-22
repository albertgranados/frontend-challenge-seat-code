import { styles } from './styles'
import type { ButtonProps } from './types'

export default function Button({
  children,
  variant,
  fullWidth = false,
  grow = false,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={styles({ variant, fullWidth, grow, className })}
      {...props}
    >
      {children}
    </button>
  )
}
