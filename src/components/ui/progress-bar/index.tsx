import type { ProgressBarProps } from './types'

export default function ProgressBar({
  value,
  showValue = true
}: ProgressBarProps) {
  return (
    <div className="flex items-center w-full">
      <div aria-hidden="true" className="ml-1 flex flex-1 items-center">
        <div className="relative mr-3 flex-1">
          <div className="h-3 rounded-full border border-gray-200 bg-gray-100" />
          {value > 0 ? (
            <div
              style={{ width: `calc(${value} / 100 * 100%)` }}
              className="absolute inset-y-0 rounded-full border border-indigo-600 bg-indigo-600"
            />
          ) : null}
        </div>
      </div>
      {showValue && <p className="w-3 font-medium text-gray-900">{value}</p>}
    </div>
  )
}
