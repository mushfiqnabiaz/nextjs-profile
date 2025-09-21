import Link from 'next/link'
import { ArrowLeft, Home, Search } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary-600 mb-4">404</h1>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved, deleted, or you entered the wrong URL.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center w-full px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200"
          >
            <Home className="w-5 h-5 mr-2" />
            Go Home
          </Link>
          
          <Link
            href="/#about"
            className="inline-flex items-center justify-center w-full px-6 py-3 border border-primary-600 text-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-colors duration-200"
          >
            <Search className="w-5 h-5 mr-2" />
            About Me
          </Link>
        </div>
        
        <div className="mt-8 text-sm text-gray-500">
          <p>Looking for something specific?</p>
          <div className="mt-2 space-x-4">
            <Link href="/#experience" className="text-primary-600 hover:text-primary-700">
              Experience
            </Link>
            <Link href="/#projects" className="text-primary-600 hover:text-primary-700">
              Projects
            </Link>
            <Link href="/#contact" className="text-primary-600 hover:text-primary-700">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
