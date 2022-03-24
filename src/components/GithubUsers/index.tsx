import { Fragment } from 'react'
import GithubUser from '../GithubUser'

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
  return (
    <div className="max-w-4xl mx-auto px-2">
      <div className="flex justify-between items-center border-b-2 border-gray-100 py-3 md:justify-start md:space-x-10">
        <div className="flex justify-start flex-1">
            <p className="cursor-pointer font-bold text-gray-900 dark:text-white">
              Showing { data.total_count < 30 ? data.total_count : '30'} of {data.total_count} Total Results
            </p>
        </div>
      </div>
      <div className="flex flex-col grow gap-5 mt-5">
        {
           data.items.map((user: any, userIdx: number) => {
            return (
              <Fragment key={userIdx}>
                <GithubUser user={user} />
              </Fragment>
            )
          })
        }
      </div>
    </div>
  )
}
