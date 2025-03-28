import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4">
      <div className="text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tighter">404 - Not Found</h1>
          <p className="text-muted-foreground text-lg">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="default"
            className="min-w-[150px]"
            asChild
          >
            <Link href="/">Go home</Link>
          </Button>
          <Button
            variant="outline"
            className="min-w-[150px]"
            asChild
          >
            <Link href="/blog">View blog</Link>
          </Button>
        </div>

        <p className="text-sm text-muted-foreground">
          Looking for something specific? Check out our{' '}
          <Link href="/categories" className="underline hover:text-primary">
            categories
          </Link>{' '}
          or{' '}
          <Link href="/blog" className="underline hover:text-primary">
            latest posts
          </Link>
          .
        </p>
      </div>
    </div>
  )
}
