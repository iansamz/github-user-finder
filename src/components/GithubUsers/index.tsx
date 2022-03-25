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
