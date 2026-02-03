'use client'

import React from 'react'

export default function GlobalError({
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
    <html lang="en">
      <body className="bg-background text-foreground">
        <div className="min-h-screen flex items-center justify-center px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            {/* Swiss Design: Bold, Clear Typography */}
            <h1 className="text-7xl md:text-8xl font-black text-foreground mb-4">
              Oops!
            </h1>
            
            {/* Cardinal Red Accent */}
            <div className="w-32 h-1 bg-primary mx-auto mb-8" style={{ backgroundColor: '#8C1515' }} />
            
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Something went wrong
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-prose mx-auto">
              We encountered an unexpected error. Please try refreshing the page.
            </p>

            {/* Action Button */}
            <button
              onClick={reset}
              className="px-8 py-4 font-semibold rounded-sm hover:opacity-90 transition-opacity"
              style={{
                backgroundColor: '#8C1515',
                color: '#FFFFFF',
                borderBottom: '4px solid #820000',
              }}
            >
              Try Again
            </button>

            {/* Error Details (Development Only) */}
            {process.env.NODE_ENV === 'development' && (
              <details className="mt-12 text-left">
                <summary className="cursor-pointer text-sm font-semibold mb-4" style={{ color: '#767674' }}>
                  Error Details (Development Only)
                </summary>
                <div className="p-4 rounded-sm overflow-auto" style={{ backgroundColor: '#EAEAEA' }}>
                  <pre className="text-xs whitespace-pre-wrap break-words" style={{ color: '#2E2D29' }}>
                    {error.message}
                    {error.digest && `\n\nDigest: ${error.digest}`}
                  </pre>
                </div>
              </details>
            )}
          </div>
        </div>
      </body>
    </html>
  )
}
