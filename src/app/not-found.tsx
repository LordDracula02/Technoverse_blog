import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h2 className="text-4xl font-bold mb-4">404 - Page Not Found</h2>
      <p className="text-xl mb-8">Could not find the requested resource</p>
      <Link
        href="/"
        className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
      >
        Return Home
      </Link>
    </div>
  )
}
