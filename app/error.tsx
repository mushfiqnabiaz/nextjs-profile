'use client'

import { useEffect } from 'react'
import { AlertTriangle, RefreshCw, Home } from 'lucide-react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertTriangle className="w-8 h-8 text-red-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong!</h1>
          <p className="text-gray-600 mb-6">
            We encountered an unexpected error. This has been logged and we'll look into it.
          </p>
          {error.digest && (
            <p className="text-sm text-gray-500 mb-4">
              Error ID: {error.digest}
            </p>
          )}
        </div>
        
        <div className="space-y-4">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center w-full px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200"
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            Try Again
          </button>
          
          <Link
            href="/"
            className="inline-flex items-center justify-center w-full px-6 py-3 border border-primary-600 text-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-colors duration-200"
          >
            <Home className="w-5 h-5 mr-2" />
            Go Home
          </Link>
        </div>
        
        <div className="mt-8 text-sm text-gray-500">
          <p>If this problem persists, please contact me at:</p>
          <a 
            href="mailto:hello@meetmushfiq.com" 
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            hello@meetmushfiq.com
          </a>
        </div>
      </div>
    </div>
  )
}
