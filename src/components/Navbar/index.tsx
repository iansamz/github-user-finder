import Github from "./Github";
import ThemeSelector from "./ThemeSelector";

export default function Navbar() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
        <div className="flex justify-start lg:w-0 lg:flex-1">
            <p className="cursor-pointer font-bold text-gray-900 dark:text-white text-lg">
              Github User Finder
            </p>
        </div>
        <div className="flex items-center justify-end flex-1 lg:w-0">

          <ThemeSelector />
          <Github />
          
        </div>
      </div>
    </div>
  )
}
