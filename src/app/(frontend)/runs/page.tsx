import { getPayload } from 'payload'
import React from 'react'
import config from '@/payload.config'
import RouteCard from '@/components/custom/RouteCard'
import Script from 'next/script'

export const metadata = {
  title: 'Stanford Running Club | Our Runs',
  description: 'Explore our running routes around Stanford campus and beyond',
}

export default async function RunsPage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const routesResult = await payload.find({
    collection: 'routes',
    depth: 1,
    limit: 1000,
    sort: 'order',
  })

  const campusRoutes = routesResult.docs.filter((route) => route.type === 'campus')
  const offCampusRoutes = routesResult.docs.filter((route) => route.type === 'offCampus')

  return (
    <>
      {/* Load Strava Embeds Script */}
      <Script src="https://strava-embeds.com/embed.js" strategy="lazyOnload" />

      <div className="bg-background">
        {/* Campus Routes Section */}
        <section className="max-w-screen-xl mx-auto px-4 py-16 md:py-24">
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground uppercase tracking-tight mb-3">
              FROM CAMPUS
            </h1>
            <div className="w-24 h-1 bg-primary" />
          </div>
          
          {campusRoutes.length === 0 ? (
            <div className="text-center text-muted-foreground py-12">
              <p className="text-sm uppercase tracking-wide font-semibold">NO CAMPUS ROUTES AVAILABLE YET</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {campusRoutes.map((route) => (
                <RouteCard key={route.id} route={route} />
              ))}
            </div>
          )}
        </section>

        {/* Off Campus Routes Section */}
        <section className="bg-muted/30">
          <div className="max-w-screen-xl mx-auto px-4 py-16 md:py-24">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground uppercase tracking-tight mb-3">
                OFF CAMPUS
              </h2>
              <div className="w-24 h-1 bg-primary" />
            </div>
            
            {offCampusRoutes.length === 0 ? (
              <div className="text-center text-muted-foreground py-12">
                <p className="text-sm uppercase tracking-wide font-semibold">NO OFF-CAMPUS ROUTES AVAILABLE YET</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {offCampusRoutes.map((route) => (
                  <RouteCard key={route.id} route={route} />
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  )
}
