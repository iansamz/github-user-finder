import React from 'react'

export default function UserBio({ bio }: any) {
  return (
    <p className="text-sm font-medium text-gray-800 dark:text-gray-300 text-center md:text-left">
      {bio === null ? '' :bio}
    </p>
  )
}
