import type { InputProps } from './types'

export default function Input({ icon, label, ...rest }: InputProps) {
  const Icon = icon
  const hasIcon = Boolean(Icon)

  return (
    <div className="relative flex flex-1 flex-col gap-1">
      {label && (
        <label
          htmlFor={rest.id}
          className="text-sm font-medium text-gray-700 sm:text-sm/6 sm:leading-6"
        >
          {label}
        </label>
      )}
      <div className="grid grid-cols-1">
        <input
          className={`col-start-1 row-start-1 block rounded-md bg-white py-1.5 pr-3 ${
            hasIcon ? 'pl-10 sm:pl-9' : 'pl-3 sm:pl-3'
          } text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6`}
          {...rest}
        />
        {Icon && (
          <Icon
            aria-hidden="true"
            className="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400 sm:size-4"
          />
        )}
      </div>
    </div>
  )
}
