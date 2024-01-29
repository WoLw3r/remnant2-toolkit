import { cn } from '@/lib/classnames'
import ClearFiltersButton from './ClearFiltersButton'

interface Props<T> {
  areAnyFiltersActive: boolean
  children: React.ReactNode
  filters: T
  onApplyFilters: (filters: T) => void
  onClearFilters: () => void
}

export default function FiltersContainer<T>({
  areAnyFiltersActive,
  children,
  filters,
  onApplyFilters,
  onClearFilters,
}: Props<T>) {
  return (
    <div
      className={cn(
        'relative h-full max-h-fit w-full transform overflow-y-auto border-2 border-green-500 bg-black px-4 pb-4 pt-4 text-left shadow-lg shadow-green-500/50 sm:my-8 sm:p-6',
        areAnyFiltersActive &&
          'border-yellow-500 shadow-xl shadow-yellow-500/50',
      )}
    >
      <div className="grid-cols-full grid gap-x-8 gap-y-4 divide-y divide-green-800 bg-black sm:grid-cols-4">
        {areAnyFiltersActive && (
          <div className="col-span-full flex items-center justify-end">
            <ClearFiltersButton onClick={onClearFilters} />
          </div>
        )}

        {children}

        <div className="col-span-full flex items-center justify-end pt-2">
          <button
            className="rounded bg-green-500 p-2 text-sm font-bold hover:bg-green-700"
            onClick={() => onApplyFilters(filters)}
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  )
}