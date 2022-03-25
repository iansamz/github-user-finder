import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'

export default function PaginationButtons({ page, pages, setPage, }: any) {

  return (
    <div className="justify-end mt-1">
      <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
        <button
          disabled={page.value === 1}
          onClick={() => setPage({name: '1', value: 1})}
          className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 dark:border-gray-400 bg-gray-200 dark:bg-gray-600 text-sm font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-50"
        >
          <span className="sr-only">First Page</span>
          <ChevronDoubleLeftIcon className="h-4 w-4" aria-hidden="true" />
        </button>
        <button
          disabled={page.value === 1}
          onClick={() => setPage({ name: `${page.value - 1}`, value: page.value - 1 })}
          className="bg-gray-200 dark:bg-gray-600 border-gray-300 dark:border-gray-400 text-gray-500 dark:text-gray-400 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
        >
          <span className="sr-only">Previous</span>
          <ChevronLeftIcon className="h-4 w-4" aria-hidden="true" />
        </button>
        <button
          disabled={page.value === pages.length}
          onClick={() => setPage({ name: `${page.value + 1}`, value: page.value + 1 })}
          className="bg-gray-200 dark:bg-gray-600 border-gray-300 dark:border-gray-400 text-gray-500 dark:text-gray-400 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
        >
          <span className="sr-only">Next</span>
          <ChevronRightIcon className="h-4 w-4" aria-hidden="true" />
        </button>
        <button
          disabled={page.value === pages.length}
          onClick={() => setPage({ name: `${pages.length}`, value: pages.length })}
          className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 dark:border-gray-400 bg-gray-200 dark:bg-gray-600 text-sm font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-50"
        >
          <span className="sr-only">Last Page</span>
          <ChevronDoubleRightIcon className="h-4 w-4" aria-hidden="true" />
        </button>
      </nav>
    </div>
  )
}
