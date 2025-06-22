import { cva } from 'class-variance-authority'

export const style = cva(
  'inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset',
  {
    variants: {
      variant: {
        neutral: 'bg-yellow-50 text-yellow-700 ring-yellow-600/20',
        positive: 'bg-green-50 text-green-700 ring-green-600/20',
        negative: 'bg-red-50 text-red-700 ring-red-600/20',
        inactive: 'bg-gray-50 text-gray-700 ring-gray-600/20'
      }
    },
    defaultVariants: {
      variant: 'inactive'
    }
  }
)
