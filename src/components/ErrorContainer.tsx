import React from 'react'

export default function ErrorContainer({ errorMessage }: any) {
  return (
    <div className="w-full bg-gray-300 dark:bg-gray-700 py-8 px-8 rounded-lg text-center max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-red-500">
            Error: {errorMessage}
        </h1>
    </div>
  )
}
