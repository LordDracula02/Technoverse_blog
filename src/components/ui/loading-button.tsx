'use client'

import React, { useState, useEffect } from 'react'
import { Button } from './button'
import { Loader2 } from 'lucide-react'
import { useRouter, usePathname } from 'next/navigation'

interface LoadingButtonProps {
  href: string
  children: React.ReactNode
  variant?: 'default' | 'ghost' | 'outline'
  className?: string
}

export function LoadingButton({
  href,
  children,
  variant = 'default',
  className,
}: LoadingButtonProps) {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  // Reset loading state when pathname changes
  useEffect(() => {
    setIsLoading(false)
  }, [pathname])

  const handleClick = () => {
    setIsLoading(true)
    router.push(href)
  }

  return (
    <Button
      variant={variant}
      onClick={handleClick}
      disabled={isLoading}
      className={className}
    >
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Loading...
        </>
      ) : (
        children
      )}
    </Button>
  )
}
