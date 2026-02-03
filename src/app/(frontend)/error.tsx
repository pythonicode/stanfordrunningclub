'use client'

import React from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  React.useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">
        {/* Swiss Design: Bold, Clear Typography */}
        <h1 className="text-7xl md:text-8xl font-black text-foreground mb-4">
          Oops!
        </h1>
        
        {/* Cardinal Red Accent */}
        <div className="w-32 h-1 bg-primary mx-auto mb-8" />
        
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
          Something went wrong
        </h2>
        
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-prose mx-auto">
          We encountered an unexpected error. Don't worry, our team has been notified and we're working on it.
        </p>

        {/* Action Buttons - Swiss Design: Clear Hierarchy */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={reset}
            className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-sm hover:opacity-90 transition-opacity border-b-4 border-destructive"
          >
            Try Again
          </button>
          
          <Link
            href="/"
            className="px-8 py-4 bg-muted text-foreground font-semibold rounded-sm hover:bg-border transition-colors no-underline"
          >
            Go Home
          </Link>
        </div>

        {/* Error Details (Development Only) */}
        {process.env.NODE_ENV === 'development' && (
          <details className="mt-12 text-left">
            <summary className="cursor-pointer text-sm font-semibold text-muted-foreground hover:text-foreground mb-4">
              Error Details (Development Only)
            </summary>
            <div className="bg-muted p-4 rounded-sm overflow-auto">
              <pre className="text-xs text-foreground whitespace-pre-wrap break-words">
                {error.message}
                {error.digest && `\n\nDigest: ${error.digest}`}
              </pre>
            </div>
          </details>
        )}
      </div>
    </div>
  )
}
