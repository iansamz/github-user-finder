import React from 'react'

interface GithubUsersProps {
  data: any,
  // {
  //   totalCount: number,
  //   incompleteResults: boolean,
  //   items: [],
  // },
  // error: any
}

export default function GithubUsers({data}: GithubUsersProps) {
  console.log(data)
  return (
    <div className="max-w-4xl mx-auto px-2">
      <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
        <div className="flex justify-start lg:w-0 lg:flex-1">
            <p className="cursor-pointer font-bold text-gray-900 dark:text-white text-lg">
              {data.total_count} Github Users
            </p>
        </div>
        <div className="flex items-center justify-end flex-1 lg:w-0">
          
        </div>
      </div>
    </div>
  )
}
