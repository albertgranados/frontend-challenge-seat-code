import type { VariantProps } from 'class-variance-authority'
import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import type { styles } from './styles'

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof styles>,
    PropsWithChildren {}
