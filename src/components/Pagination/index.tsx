import SelectOptions from './SelectOptions'
import classNames from 'classnames'
import PaginationButtons from './PaginationButtons'
import PaginationResults from './PaginationResults'

export default function Pagination({page, setPage, pages, perPage, setPerPage, perPageOptions, data, borderTop}: any) {
  return (
    <div className="max-w-4xl mx-auto px-2 py-4">
      <div 
      className={
        classNames(
          "flex justify-between items-center border-gray-100 py-3 md:justify-start md:space-x-10", 
          { 'border-t': borderTop },
          { 'border-b': !borderTop })
      }>

        <PaginationResults data={data} page={page} perPage={perPage} />

        <div className="flex justify-end flex-1 space-x-2">
          <SelectOptions options={perPageOptions} selected={perPage} setSelected={setPerPage} />
          {/* TODO: select page 
            <SelectOptions options={pages} selected={page} setSelected={setPage} /> 
          */}
          <PaginationButtons page={page} setPage={setPage} pages={pages} />
        </div>

      </div>
    </div>
  )
}
