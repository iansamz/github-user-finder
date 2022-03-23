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
  return (
    <div>GithubUsers</div>
  )
}
