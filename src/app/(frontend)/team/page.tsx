import { getPayload } from 'payload'
import React from 'react'
import Image from 'next/image'
import config from '@/payload.config'
import type { Record as RecordType } from '@/payload-types'

export const revalidate = 60 // Revalidate page every 60 seconds (ISR)

export const metadata = {
  title: 'Stanford Running Club | The Team',
  description: 'Meet the Stanford Running Club team and view our records',
}

interface GroupedRecords {
  [category: string]: {
    [distance: string]: RecordType[]
  }
}

export default async function TeamPage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const teamData = await payload.findGlobal({
    slug: 'team',
    depth: 2,
  })

  const recordsResult = await payload.find({
    collection: 'records',
    depth: 1,
    limit: 1000,
    sort: 'order',
  })

  // Group records by category and distance
  const groupedRecords: GroupedRecords = {}
  recordsResult.docs.forEach((record) => {
    if (!groupedRecords[record.category]) {
      groupedRecords[record.category] = {}
    }
    if (!groupedRecords[record.category][record.distance]) {
      groupedRecords[record.category][record.distance] = []
    }
    groupedRecords[record.category][record.distance].push(record)
  })

  const heroImageData = typeof teamData.heroImage === 'object' ? teamData.heroImage : null
  const coachImageData = typeof teamData.coachImage === 'object' ? teamData.coachImage : null
  const coachHeadshotData =
    typeof teamData.coachHeadshot === 'object' ? teamData.coachHeadshot : null

  const categoryLabels: { [key: string]: string } = {
    track: 'TRACK',
    xc: 'CROSS COUNTRY',
    road: 'ROAD',
    field: 'FIELD',
    misc: 'MISCELLANEOUS',
  }

  const categoryOrder = ['track', 'xc', 'road', 'field', 'misc']

  return (
    <div className="bg-background">
      {/* Hero Section - Swiss Design: Bold Typography with Image */}
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto mb-12">
          {heroImageData && heroImageData.url ? (
            <div className="relative w-full aspect-video overflow-hidden border-2 border-border">
              <Image
                src={heroImageData.url}
                alt={heroImageData.alt || 'Stanford Running Club Team'}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>
          ) : (
            <div className="w-full aspect-video bg-muted border-2 border-border" />
          )}
        </div>

        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 uppercase tracking-tight">
            {teamData.header}
          </h1>
          <div className="w-24 h-1 bg-primary mb-8" />

          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
            {teamData.description}
          </p>

          {/* CTA Button */}
          <a
            href={teamData.joinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-primary text-primary-foreground text-sm font-bold uppercase tracking-wide hover:opacity-90 transition-opacity no-underline border-b-2 border-destructive"
          >
            JOIN THE TEAM
          </a>
        </div>
      </section>

      {/* Coach Section - Asymmetric Grid Layout */}
      <section className="bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Coach Image - Hidden on mobile */}
            {coachImageData && coachImageData.url && (
              <div className="hidden lg:block relative w-full h-full min-h-[500px] overflow-hidden">
                <Image
                  src={coachImageData.url}
                  alt={coachImageData.alt || teamData.coachName}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            )}

            {/* Coach Info */}
            <div className="flex flex-col items-start">
              {/* Coach Badge and Headshot */}
              <div className="flex items-center gap-3 mb-4">
                {/* Coach Headshot */}
                {coachHeadshotData && coachHeadshotData.url && (
                  <div className="relative w-8 h-8 overflow-hidden rounded-full border-2 border-border flex-shrink-0">
                    <Image
                      src={coachHeadshotData.url}
                      alt={coachHeadshotData.alt || teamData.coachName}
                      fill
                      className="object-cover"
                      sizes="32px"
                    />
                  </div>
                )}

                {/* Coach Badge */}
                <div className="px-4 py-2 bg-foreground text-background text-xs font-bold uppercase tracking-widest">
                  COACH
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-black text-foreground uppercase tracking-tight mb-4">
                {teamData.coachName}
              </h2>
              <div className="w-16 h-1 bg-primary mb-6" />

              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                {teamData.coachBio}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Records Section - Swiss Design: Structured Data Tables */}
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground uppercase tracking-tight mb-3">
            RECORDS
          </h2>
          <div className="w-24 h-1 bg-primary" />
        </div>

        <div className="flex flex-col gap-12">
          {categoryOrder.map((category) => {
            if (!groupedRecords[category]) return null

            return (
              <div key={category} className="flex flex-col gap-4">
                {/* Category Heading */}
                <div className="mb-4">
                  <h3 className="text-2xl md:text-3xl font-black text-foreground uppercase tracking-tight mb-2">
                    {categoryLabels[category]}
                  </h3>
                  <div className="w-16 h-1 bg-primary" />
                </div>

                {/* Distance Groups */}
                {Object.entries(groupedRecords[category]).map(([distance, records]) => (
                  <div
                    key={distance}
                    className="border-2 border-border p-6 bg-card flex flex-col gap-4"
                  >
                    {/* Distance Heading */}
                    <h4 className="text-lg font-black text-foreground uppercase tracking-tight">
                      {distance}
                    </h4>

                    {/* Records */}
                    {records.length === 0 ? (
                      <p className="text-muted-foreground text-xs uppercase tracking-wide font-semibold">
                        NO RECORDS YET
                      </p>
                    ) : (
                      <div className="flex flex-col gap-3">
                        {records.map((record) => (
                          <div
                            key={record.id}
                            className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-6 border-t border-border pt-3 first:border-t-0 first:pt-0"
                          >
                            <p className="font-bold text-foreground lg:w-48 flex-shrink-0 text-sm uppercase tracking-wide">
                              {record.name}
                            </p>
                            <p className="font-bold text-foreground lg:w-32 flex-shrink-0 text-sm">
                              {record.time}
                            </p>
                            <p className="text-muted-foreground text-xs lg:w-32 flex-shrink-0 uppercase tracking-wide font-semibold">
                              {record.date}
                            </p>
                            <p className="text-muted-foreground text-xs uppercase tracking-wide font-semibold">
                              {record.location}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
