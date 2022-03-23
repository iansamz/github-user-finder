import React from 'react'
import Avatar from './Avatar'

export default function UserProfile({ avatarURL, username, name, created_at, html_url }: any) {

    const formatDate = (date: string) => {
        const d = new Date(date)
        return d.toDateString()
    }
    
    return (
        <div className="flex flex-col items-center md:items-start space-y-6 space-x-4  md:justify-evenly md:space-x-6 pb-2 md:border-r-2 md:col-span-1">
            <Avatar avatarURL={avatarURL} username={username} />
            <div className="flex flex-col items-center w-full justify-around px-2  md:flex-1 md:items-start md:justify-between">
                <h4 className="text-lg font-bold text-gray-800 dark:text-gray-50 md:text-2xl">
                    {name}
                </h4>
                <a href={html_url} className="inline-block font-mono text-sm text-blue-400 underline" target="_blank" rel="noreferrer">
                    {`@${username ? username :'Not Available'}`}
                </a>
                <p className="inline-block font-mono text-xs text-gray-800 dark:text-gray-50 pt-1">
                    Joined{' '} {created_at ? formatDate(created_at) : "Not Available"}
                </p>
            </div>
        </div>
    )
}
