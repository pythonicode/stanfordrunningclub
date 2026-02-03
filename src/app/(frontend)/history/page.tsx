import { getPayload } from 'payload'
import React from 'react'
import Image from 'next/image'
import config from '@/payload.config'
import type { History as HistoryType } from '@/payload-types'

export const metadata = {
  title: 'Stanford Running Club | History',
  description: 'Explore the history of Stanford Running Club',
}

export default async function HistoryPage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const historyResult = await payload.find({
    collection: 'history',
    depth: 2,
    limit: 1000,
    sort: 'order',
  })

  return (
    <div className="bg-background min-h-[calc(100vh-4rem)]">
      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground uppercase tracking-tight mb-3">
            OUR HISTORY
          </h1>
          <div className="w-24 h-1 bg-primary mb-8" />
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl">
            From our founding to today, explore the milestones and moments that shaped Stanford Running Club.
          </p>
        </div>

        {/* Timeline */}
        {historyResult.docs.length === 0 ? (
          <div className="text-center text-muted-foreground py-12">
            <p className="text-sm uppercase tracking-wide font-semibold">NO HISTORY ENTRIES YET</p>
          </div>
        ) : (
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-ml-px" />

            {/* Timeline Items */}
            <div className="space-y-16">
              {historyResult.docs.map((item, index) => {
                const imageData = typeof item.image === 'object' ? item.image : null
                const isEven = index % 2 === 0

                return (
                  <div
                    key={item.id}
                    className={`relative flex flex-col md:flex-row gap-8 ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Year Badge */}
                    <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10">
                      <div className="w-10 h-10 bg-primary border-4 border-background flex items-center justify-center">
                        <span className="text-primary-foreground text-xs font-bold">
                          {String(item.year).slice(-2)}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`flex-1 ${isEven ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'} pl-16 md:pl-0`}>
                      <div className={`inline-block ${isEven ? 'md:float-right' : 'md:float-left'} max-w-2xl`}>
                        {/* Year Label */}
                        <div className="mb-3">
                          <span className="text-xs font-bold uppercase tracking-widest text-primary">
                            {item.year}
                          </span>
                        </div>

                        {/* Title */}
                        <h2 className="text-2xl md:text-3xl font-black text-foreground uppercase tracking-tight mb-4">
                          {item.title}
                        </h2>

                        {/* Image */}
                        {imageData && imageData.url && (
                          <div className="relative w-full aspect-video mb-4 overflow-hidden border-2 border-border">
                            <Image
                              src={imageData.url}
                              alt={imageData.alt || item.title}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, 50vw"
                            />
                          </div>
                        )}

                        {/* Body */}
                        <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                          {item.body}
                        </p>
                      </div>
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className="hidden md:block flex-1" />
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </section>
    </div>
  )
}
