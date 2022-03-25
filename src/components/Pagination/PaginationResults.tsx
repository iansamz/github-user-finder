import React from 'react'

export default function PaginationResults({ data, page, perPage }: any) {

  const getResults = () => {
    const start = (page === 1) 
      ? 1 
      : (page - 1) * perPage.value + 1

    const end = ((page * perPage.value) > data.total_count)
      ? data.total_count
      : page * perPage.value

    return `Showing ${start} - ${end} of ${data.total_count} Total Results`
  }

  return (
    <div className="flex justify-start flex-1">
      <p className="cursor-pointer text-sm text-gray-900 dark:text-white">
        {getResults()}
      </p>
    </div>
  )
}
