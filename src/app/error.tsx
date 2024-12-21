'use client'

import React, { useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Error occurred:', error)
  }, [error])

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4">
      <div className="text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tighter">
            Something went wrong!
          </h1>
          <p className="text-muted-foreground text-lg">
            {error.message || 'An unexpected error occurred'}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => reset()}
            variant="default"
            className="min-w-[150px]"
          >
            Try again
          </Button>
          <Button
            variant="outline"
            className="min-w-[150px]"
            asChild
          >
            <Link href="/">Go home</Link>
          </Button>
        </div>

        {process.env.NODE_ENV === 'development' && error.digest && (
          <div className="mt-4 text-sm text-muted-foreground">
            <p>Error digest: {error.digest}</p>
          </div>
        )}
      </div>
    </div>
  )
}
