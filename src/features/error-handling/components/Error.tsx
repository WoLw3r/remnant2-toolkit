'use client'

import PageHeader from '@/components/PageHeader'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
    document.title = 'Oops! | Remnant 2 Toolkit'
  }, [error])

  return (
    <div className="flex max-w-lg flex-col">
      <PageHeader
        title="Something went wrong!"
        subtitle={
          'Sorry, there was an unknown error. This has been logged for the team to review.'
        }
      />
      <button
        onClick={() => reset()}
        className="rounded-md bg-gray-800 px-4 py-2 text-white"
      >
        Try again
      </button>
    </div>
  )
}
