import { cva } from 'class-variance-authority'

export const styles = cva(
  'inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-semibold shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 cursor-pointer',
  {
    variants: {
      variant: {
        primary:
          'bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-indigo-600',
        secondary:
          'bg-white text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50'
      },
      fullWidth: {
        true: 'w-full',
        false: ''
      },
      grow: {
        true: 'flex-1',
        false: ''
      }
    },
    defaultVariants: {
      variant: 'primary',
      fullWidth: true,
      grow: false
    }
  }
)
