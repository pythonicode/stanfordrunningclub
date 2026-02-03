import React from 'react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">
        {/* Swiss Design: Bold, Clear Typography */}
        <h1 className="text-7xl md:text-8xl font-black text-foreground mb-4">
          404
        </h1>
        
        {/* Cardinal Red Accent */}
        <div className="w-32 h-1 bg-primary mx-auto mb-8" />
        
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
          Page Not Found
        </h2>
        
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-prose mx-auto">
          The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>

        {/* Action Buttons - Swiss Design: Clear Hierarchy */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-sm hover:opacity-90 transition-opacity no-underline border-b-4 border-destructive"
          >
            Go Home
          </Link>
          
          <Link
            href="/about"
            className="px-8 py-4 bg-muted text-foreground font-semibold rounded-sm hover:bg-border transition-colors no-underline"
          >
            Learn About Us
          </Link>
        </div>
      </div>
    </div>
  )
}
