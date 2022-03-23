import React from 'react'

export default function UserStats({ repos, followers, following }: any) {
  return (
    <div className=" grid grid-cols-3 gap-2 md:gap-6 md:divide-x md:divide-gray-700 rounded-xl bg-gray-50 py-4 md:dark:divide-gray-50 dark:bg-gray-900">
      <div className="align-items flex flex-col px-4 text-center">
        <h4 className="font-mono text-tiny font-semibold text-gray-700 dark:text-gray-400 ">
          Repos
        </h4>
        <p className="font-mono text-lg font-extrabold text-gray-700 dark:text-gray-50 ">
          {repos ? repos : 0}
        </p>
      </div>

      <div className="align-items flex flex-col text-center">
        <h4 className="font-mono text-tiny font-semibold text-gray-700 dark:text-gray-400 ">
          Followers
        </h4>
        <p className="font-mono text-lg font-extrabold text-gray-700 dark:text-gray-50 ">
          {followers ? followers : 0}
        </p>
      </div>

      <div className="align-items flex flex-col text-center">
        <h4 className="font-mono text-tiny font-semibold text-gray-700 dark:text-gray-400 ">
          Following
        </h4>
        <p className="font-mono text-lg font-extrabold text-gray-700 dark:text-gray-50 ">
          {following? following : 0}
        </p>
      </div>
    </div>
  )
}
