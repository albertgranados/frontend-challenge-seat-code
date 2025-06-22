import { ChevronDownIcon, ChevronsUpDown, TrashIcon } from 'lucide-react'
import classNames from '@/utils/class-names'
import { Alignment } from '@/types/superhero.types'
import { useDrawerStore } from '@/stores/use-drawer-store'
import type { SuperheroesTableProps } from './types'
import Badge from '@/components/ui/badge'
import { useSortingStore } from '@/stores/use-sorting-store'
import { SortBy, SortOrder } from '@/stores/use-sorting-store/types'

export default function SuperheroesTable({
  superheroes,
  onDelete
}: SuperheroesTableProps) {
  const { openDrawer } = useDrawerStore()
  const { sorting, toggleSorting, sortingOrder } = useSortingStore()

  return (
    <div className="sm:p-4 min-w-full inline-block">
      <div className="ring-1 ring-gray-300 sm:mx-0 sm:rounded-lg overflow-hidden min-w-full overflow-y-auto max-h-[600px]">
        <table className="table-fixed w-full border-separate border-spacing-0 divide-y divide-gray-300">
          <thead>
            <tr>
              <th
                scope="col"
                className="sticky top-0 z-10 border-b border-gray-300 py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-700 sm:pl-6 bg-white/90 backdrop-blur-sm backdrop-filter"
              >
                <a
                  className="group inline-flex cursor-pointer"
                  onClick={() => toggleSorting(SortBy.NAME)}
                >
                  Name
                  <span className="ml-2 flex-none rounded-sm bg-gray-100 text-gray-900 group-hover:bg-gray-200">
                    {sorting === SortBy.NAME ? (
                      <ChevronDownIcon
                        aria-hidden="true"
                        className={classNames(
                          'size-5 transition-transform duration-200',
                          sortingOrder === SortOrder.DESCENDING && 'rotate-180'
                        )}
                      />
                    ) : (
                      <ChevronsUpDown
                        aria-hidden="true"
                        className={classNames(
                          'w-5 h-5 transition-transform duration-200 p-0.5'
                        )}
                      />
                    )}
                  </span>
                </a>
              </th>
              <th
                scope="col"
                className="sticky top-0 z-10 border-b border-gray-300 w-26 sm:w-44 lg:w-52 px-3 py-3.5 text-left text-sm font-semibold text-gray-700 bg-white/90 backdrop-blur-sm backdrop-filter"
              >
                <a
                  className="group inline-flex cursor-pointer"
                  onClick={() => toggleSorting(SortBy.PUBLISHER)}
                >
                  Publisher
                  <span className="ml-2 flex-none rounded-sm bg-gray-100 text-gray-900 group-hover:bg-gray-200">
                    {sorting === SortBy.PUBLISHER ? (
                      <ChevronDownIcon
                        aria-hidden="true"
                        className={classNames(
                          'size-5 transition-transform duration-200',
                          sortingOrder === SortOrder.DESCENDING && 'rotate-180'
                        )}
                      />
                    ) : (
                      <ChevronsUpDown
                        aria-hidden="true"
                        className={classNames(
                          'w-5 h-5 transition-transform duration-200 p-0.5'
                        )}
                      />
                    )}
                  </span>
                </a>
              </th>
              <th
                scope="col"
                className="sticky top-0 z-10 border-b border-gray-300 hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-700 lg:table-cell bg-white/90 backdrop-blur-sm backdrop-filter"
              >
                First Appearance
              </th>
              <th
                scope="col"
                className="sticky top-0 z-10 border-b border-gray-300 w-32 hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-700 md:table-cell bg-white/90 backdrop-blur-sm backdrop-filter"
              >
                <a
                  className="group inline-flex cursor-pointer"
                  onClick={() => toggleSorting(SortBy.GENDER)}
                >
                  Gender
                  <span className="ml-2 flex-none rounded-sm bg-gray-100 text-gray-900 group-hover:bg-gray-200">
                    {sorting === SortBy.GENDER ? (
                      <ChevronDownIcon
                        aria-hidden="true"
                        className={classNames(
                          'size-5 transition-transform duration-200',
                          sortingOrder === SortOrder.DESCENDING && 'rotate-180'
                        )}
                      />
                    ) : (
                      <ChevronsUpDown
                        aria-hidden="true"
                        className={classNames(
                          'w-5 h-5 transition-transform duration-200 p-0.5'
                        )}
                      />
                    )}
                  </span>
                </a>
              </th>
              <th
                scope="col"
                className="sticky top-0 z-10 border-b border-gray-300 w-32 hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-700 sm:table-cell bg-white/90 backdrop-blur-sm backdrop-filter"
              >
                <a
                  className="group inline-flex cursor-pointer"
                  onClick={() => toggleSorting(SortBy.ALIGNMENT)}
                >
                  Alignment
                  <span className="ml-2 flex-none rounded-sm bg-gray-100 text-gray-900 group-hover:bg-gray-200">
                    {sorting === SortBy.ALIGNMENT ? (
                      <ChevronDownIcon
                        aria-hidden="true"
                        className={classNames(
                          'size-5 transition-transform duration-200',
                          sortingOrder === SortOrder.DESCENDING && 'rotate-180'
                        )}
                      />
                    ) : (
                      <ChevronsUpDown
                        aria-hidden="true"
                        className={classNames(
                          'w-5 h-5 transition-transform duration-200 p-0.5'
                        )}
                      />
                    )}
                  </span>
                </a>
              </th>
              <th
                scope="col"
                className="sticky top-0 z-10 border-b border-gray-300 w-16 sm:w-28 py-3.5 pr-4 pl-3 sm:pr-6 background-red-500 bg-white/90 backdrop-blur-sm backdrop-filter"
              >
                <span className="sr-only">Action</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {superheroes.map((superhero, index) => (
              <tr
                key={superhero.id}
                className="group even:bg-gray-50"
                onClick={() => openDrawer('details', superhero)}
              >
                <td
                  className={classNames(
                    index === 0 ? '' : 'border-t border-gray-200',
                    'relative py-4 pr-3 pl-4 text-sm sm:pl-6 group-hover:bg-gray-200 cursor-pointer'
                  )}
                >
                  <div className="flex items-center gap-4">
                    <div className="size-11 shrink-0">
                      <img
                        alt=""
                        src={superhero.images.sm}
                        className="size-11 rounded-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-medium text-gray-700">
                        {superhero.name}
                      </span>
                      {superhero.biography.aliases && (
                        <span className="text-gray-500">
                          {superhero.biography.fullName}
                        </span>
                      )}
                    </div>
                  </div>
                </td>
                <td
                  className={classNames(
                    index === 0
                      ? ''
                      : 'border-t border-gray-200 group-hover:bg-gray-200 cursor-pointer',
                    'px-3 py-3.5 text-sm text-gray-500 group-hover:bg-gray-200 cursor-pointer'
                  )}
                >
                  {superhero.biography.publisher || '-'}
                </td>
                <td
                  className={classNames(
                    index === 0 ? '' : 'border-t border-gray-200',
                    'hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell group-hover:bg-gray-200 cursor-pointer'
                  )}
                >
                  {superhero.biography.firstAppearance || '-'}
                </td>
                <td
                  className={classNames(
                    index === 0 ? '' : 'border-t border-gray-200',
                    'hidden px-3 py-3.5 text-sm text-gray-500 md:table-cell group-hover:bg-gray-200 cursor-pointer'
                  )}
                >
                  <Badge variant="inactive">
                    {superhero.appearance.gender}
                  </Badge>
                </td>
                <td
                  className={classNames(
                    index === 0 ? '' : 'border-t border-gray-200',
                    'hidden px-3 py-3.5 text-sm text-gray-500 sm:table-cell group-hover:bg-gray-200 cursor-pointer'
                  )}
                >
                  {superhero.biography.alignment === Alignment.Good && (
                    <Badge variant="positive">Good</Badge>
                  )}
                  {superhero.biography.alignment === Alignment.Bad && (
                    <Badge variant="negative">Bad</Badge>
                  )}
                  {superhero.biography.alignment === Alignment.Neutral && (
                    <Badge variant="neutral">Neutral</Badge>
                  )}
                  {superhero.biography.alignment === Alignment.Empty && (
                    <span>-</span>
                  )}
                </td>
                <td
                  className={classNames(
                    index === 0 ? '' : 'border-t border-gray-200',
                    'relative py-3.5 pr-4 pl-3 text-right text-sm font-medium sm:pr-6 group-hover:bg-gray-200 cursor-pointer'
                  )}
                >
                  <button
                    type="button"
                    className="inline-flex gap-1 items-center rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-700 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation()
                      onDelete(superhero.id)
                    }}
                  >
                    <TrashIcon className="size-4" />
                    <span className="hidden sm:block">Delete</span>
                    <span className="sr-only">, {superhero.name}</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
