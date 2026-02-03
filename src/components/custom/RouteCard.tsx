'use client'

import React, { useEffect } from 'react'
import type { Route } from '@/payload-types'

interface RouteCardProps {
  route: Route
}

export default function RouteCard({ route }: RouteCardProps) {
  const { title, distance, climb, stravaId, isRickroll } = route

  const stravaUrl = stravaId
    ? `https://www.strava.com/routes/${stravaId}`
    : isRickroll
      ? 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      : '#'

  // Convert miles to km
  const distanceKm = distance ? (distance * 1.60934).toFixed(1) : null
  const climbMeters = climb ? Math.round(climb / 3.28084) : null

  useEffect(() => {
    // Skip if no stravaId
    if (!stravaId || isRickroll) return

    // Function to initialize Strava embeds
    const initStravaEmbed = () => {
      if (typeof window !== 'undefined' && (window as unknown as { __STRAVA_EMBED_BOOTSTRAP__: () => void }).__STRAVA_EMBED_BOOTSTRAP__) {
        try {
          // Call the bootstrap function to initialize all embeds on the page
          ;(window as unknown as { __STRAVA_EMBED_BOOTSTRAP__: () => void }).__STRAVA_EMBED_BOOTSTRAP__()
          return true
        } catch (error) {
          console.error('Error initializing Strava embed:', error)
          return false
        }
      }
      return false
    }

    // Wait a bit for the DOM to be ready, then try to initialize
    const initialTimeout = setTimeout(() => {
      if (!initStravaEmbed()) {
        // If not available, set up an interval to retry
        const maxAttempts = 30 // Try for ~3 seconds
        let attempts = 0
        
        const interval = setInterval(() => {
          attempts++
          if (initStravaEmbed() || attempts >= maxAttempts) {
            clearInterval(interval)
          }
        }, 100)
      }
    }, 100)

    return () => clearTimeout(initialTimeout)
  }, [stravaId, isRickroll])

  return (
    <div className="flex flex-col border-2 border-border overflow-hidden bg-card h-full">
      {/* Strava Embed Section */}
      {stravaId && !isRickroll ? (
        <div className="w-full aspect-video overflow-hidden flex items-center justify-center relative bg-muted">
          {/* Skeleton Loading Background - Behind embed */}
          <div className="absolute inset-0 flex items-center justify-center z-0">
            {/* <div className="w-8 h-8 border-2 border-border border-t-primary animate-spin rounded-full" /> */}
          </div>
          
          {/* Strava Embed - with background to cover spinner */}
          <div
            className="strava-embed-placeholder relative z-10 bg-background w-full h-full"
            data-embed-type="route"
            data-embed-id={stravaId}
            data-style="standard"
            data-surface-type="true"
            data-map-hash="14.91/37.42245/-122.17594"
            data-from-embed="true"
          />
        </div>
      ) : (
        <div className="w-full aspect-video bg-muted flex items-center justify-center">
          <span className="text-muted-foreground text-xs uppercase tracking-wide font-semibold">NO MAP AVAILABLE</span>
        </div>
      )}

      {/* Content Section */}
      <div className="p-6 flex flex-col items-center justify-center flex-grow">
        <h3 className="text-xl font-black text-foreground text-center uppercase tracking-tight mb-4">
          {title}
        </h3>

        <div className="flex flex-col items-center justify-center gap-3 mb-6 w-full">
          {/* Distance */}
          {distance ? (
            <div className="font-bold text-lg text-foreground">
              {distance.toFixed(1)}MI / {distanceKm}KM
            </div>
          ) : (
            <div className="font-bold text-lg text-muted-foreground uppercase tracking-wide">UNKNOWN</div>
          )}

          {/* Elevation */}
          {climb ? (
            <div className="px-4 py-2 bg-muted text-xs border-t-2 border-b-2 border-border w-full text-center">
              <strong className="mr-2 text-foreground font-bold uppercase tracking-wide">ELEVATION</strong>
              <span className="text-muted-foreground font-semibold">
                {climb}FT / {climbMeters}M
              </span>
            </div>
          ) : (
            <div className="px-4 py-2 bg-muted text-xs text-muted-foreground border-t-2 border-b-2 border-border w-full text-center font-bold uppercase tracking-wide">
              UNKNOWN
            </div>
          )}
        </div>

        {/* CTA Button */}
        <a
          href={stravaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wide hover:opacity-90 transition-opacity no-underline w-full text-center border-b-2 border-destructive"
        >
          VIEW ON STRAVA
        </a>
      </div>
    </div>
  )
}
