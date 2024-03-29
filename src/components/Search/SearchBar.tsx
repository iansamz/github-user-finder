import { SearchIcon } from '@heroicons/react/outline'

export default function SearchBar({ userRef, onSearch, onEnter }: any) {
  return (

    <div 
      className="align-items mx-auto mt-5 my-2 flex max-w-sm rounded-lg bg-gray-200 dark:bg-gray-600 p-2 pb-2 md:max-w-4xl px-2 transition  duration-300 ease-in">
      
      <SearchIcon  
        className="mt-3 ml-2 h-6 w-6 dark:text-gray-200" />
      
      <input
        name="search"
        ref={userRef}
        placeholder="Enter Github Name....."
        className=" w-full text-md mt-1 ml-2 rounded-md bg-gray-200 dark:bg-gray-600 px-2 py-2 font-mono leading-6 text-gray-700 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-200 transition  duration-300 ease-in focus:outline-none"
        onKeyPress={onEnter}
      />

      <button
        onClick={onSearch}
        className=" text-md mx-auto h-10 rounded-md bg-gray-50 px-4 font-mono font-medium text-gray-700 shadow-xl transition duration-300 ease-in hover:bg-gray-700 hover:text-blue-100 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-700 "
      >
        Search
      </button>

    </div>
  )
}