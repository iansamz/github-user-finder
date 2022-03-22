import { SearchIcon } from '@heroicons/react/outline'

export default function SearchBar() {
  return (

    <div 
      className="align-items mx-auto mt-4 flex max-w-sm rounded-lg bg-gray-200 p-2 pb-2 md:max-w-2xl">
      
      <SearchIcon  
        className="mt-3 ml-2 h-6 w-6" />
      
      <input
        name="search"
        placeholder="Enter Github Name....."
        className=" w-full text-md mt-1 rounded-md bg-gray-200 px-2 py-2 font-mono leading-6 text-gray-700 placeholder-gray-400 transition  duration-300 ease-in focus:outline-none"
      />

    </div>
  )
}