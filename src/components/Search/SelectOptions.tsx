import { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'


export default function SelectOptions({ options, selected, setSelected }: any) {


  return (
    <div className="w-full md:w-56">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-gray-200 dark:bg-gray-600 rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-gray-300 focus-visible:ring-offset-2 focus-visible:border-gray-500 sm:text-sm">
            <span className="block truncate font-mono dark:text-gray-300 text-xs">{selected.name}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <SelectorIcon
                className="w-5 h-5 text-gray-400 dark:text-gray-200"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-gray-200 dark:bg-gray-600 rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {options.map((sortOption: any, sortOptionIdx: number) => (
                <Listbox.Option
                  key={sortOptionIdx}
                  className={({ active }) =>
                    `cursor-default select-none relative py-2 pl-10 pr-4 font-mono ${
                      active ? 'text-gray-600 bg-gray-300 dark:text-gray-600 dark:bg-gray-100' : 'text-gray-900 bg-gray-100 dark:text-gray-200 dark:bg-gray-600'
                    }`
                  }
                  value={sortOption}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate text-xs`}
                      >
                        {sortOption.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600 dark:text-gray-900">
                          <CheckIcon className="w-5 h-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}
