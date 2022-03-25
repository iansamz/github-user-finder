/* This example requires Tailwind CSS v2.0+ */
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import SelectOptions from './SelectOptions'
import classNames from 'classnames'

export default function Pagination({page, setPage, perPage, setPerPage, perPageOptions, data, borderTop}: any) {
  return (
    <div className="max-w-4xl mx-auto px-2 my-4 hidden:sm">
      <div 
      className={
        classNames(
          "flex justify-between items-center border-gray-100 py-3 md:justify-start md:space-x-10", 
          { 'border-t': borderTop },
          { 'border-b': !borderTop })
      }>
        <div className="flex justify-start flex-1">
          <p className="cursor-pointer text-sm text-gray-900 dark:text-white">
            Showing { data.total_count < perPage.value ? data.total_count : perPage.value } of {data.total_count} Total Results
          </p>
        </div>
        <div className="flex justify-end flex-1">
          <SelectOptions options={perPageOptions} selected={perPage} setSelected={setPerPage} />
        </div>
      </div>
    </div>
  )
}
