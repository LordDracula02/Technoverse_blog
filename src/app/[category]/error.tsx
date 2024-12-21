'use client'

import React, { useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function CategoryError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Category error:', error)
  }, [error])

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4">
      <div className="text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tighter">
            Category Error
          </h1>
          <p className="text-muted-foreground text-lg">
            {error.message || 'There was a problem loading this category'}
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
            <Link href="/blog">View all posts</Link>
          </Button>
        </div>

        <p className="text-sm text-muted-foreground">
          You can also browse our{' '}
          <Link href="/" className="underline hover:text-primary">
            other categories
          </Link>
          .
        </p>
      </div>
    </div>
  )
}
