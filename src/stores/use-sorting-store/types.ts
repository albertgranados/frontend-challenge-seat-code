export enum SortBy {
  NONE = 'none',
  NAME = 'name',
  PUBLISHER = 'publisher',
  GENDER = 'gender',
  ALIGNMENT = 'alignment'
}

export enum SortOrder {
  ASCENDING = 'asc',
  DESCENDING = 'desc'
}

export type SortingState = {
  sorting: SortBy
  toggleSorting: (sorting: SortBy) => void
  sortingOrder: SortOrder
}
