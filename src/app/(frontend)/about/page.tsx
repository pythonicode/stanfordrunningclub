import { getPayload } from 'payload'
import React from 'react'
import Image from 'next/image'
import config from '@/payload.config'
import type { About, Tradition, Media } from '@/payload-types'
import ImageCarousel from '@/components/custom/ImageCarousel'

export const metadata = {
  title: 'Stanford Running Club | About',
  description: 'Learn more about Stanford Running Club',
}

export default async function AboutPage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const aboutData = await payload.findGlobal({
    slug: 'about',
    depth: 2,
  })

  const traditionsResult = await payload.find({
    collection: 'traditions',
    depth: 2,
    limit: 100,
  })

  return (
    <div className="bg-background">
      {/* Header Section - Swiss Design: Bold Typography, Generous White Space */}
      <section className="max-w-screen-xl mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-foreground leading-none uppercase tracking-tight">
            {aboutData.header}
          </h1>
          <div className="w-24 h-1 bg-primary mb-8" />
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            {aboutData.description}
          </p>
        </div>

        {/* Image Carousel */}
        <ImageCarousel images={aboutData.images} />
      </section>

      {/* Traditions Section - Grid-Based Layout */}
      <section className="bg-muted/30">
        <div className="max-w-screen-xl mx-auto px-4 py-16 md:py-24">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground uppercase tracking-tight mb-3">
              TRADITIONS
            </h2>
            <div className="w-24 h-1 bg-primary" />
          </div>
          
          {traditionsResult.docs.length === 0 ? (
            <div className="text-center text-muted-foreground py-12">
              <p className="text-sm uppercase tracking-wide font-semibold">NO TRADITIONS AVAILABLE YET</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {traditionsResult.docs.map((tradition) => {
                const imageData = typeof tradition.image === 'object' ? tradition.image : null
                
                return (
                  <article key={tradition.id} className="flex flex-col bg-card border-2 border-border overflow-hidden h-full">
                    {imageData && imageData.url ? (
                      <div className="w-full aspect-video relative overflow-hidden">
                        <Image
                          src={imageData.url}
                          alt={imageData.alt || tradition.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                    ) : (
                      <div className="w-full aspect-video bg-muted flex items-center justify-center">
                        <span className="text-muted-foreground text-xs uppercase tracking-wide font-semibold">NO IMAGE</span>
                      </div>
                    )}
                    <div className="flex flex-col gap-3 p-6 grow">
                      <h3 className="text-xl font-black text-foreground uppercase tracking-tight m-0">
                        {tradition.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed m-0">
                        {tradition.description}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 px-6 pb-6 border-t-2 border-border pt-4">
                      {tradition.when.map((season) => (
                        <span
                          key={season}
                          className="bg-muted text-foreground px-3 py-1 text-xs font-bold uppercase tracking-wide"
                        >
                          {season}
                        </span>
                      ))}
                    </div>
                  </article>
                )
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
