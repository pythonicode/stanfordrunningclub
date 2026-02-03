import { getPayload } from 'payload'
import React from 'react'
import Image from 'next/image'
import config from '@/payload.config'
import GroupMeButton from '@/components/custom/GroupMeButton'
import ScheduleCard from '@/components/custom/ScheduleCard'
import ParallaxHero from '@/components/custom/ParallaxHero'
import { obfuscateUrl } from '@/lib/encodeUrl'

export const metadata = {
  title: 'Stanford Running Club | Home',
  description: 'Join Stanford Running Club for runs around campus!',
}

export default async function HomePage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const homeData = await payload.findGlobal({
    slug: 'home',
    depth: 2,
  })

  const scheduleResult = await payload.find({
    collection: 'schedule',
    depth: 2,
    limit: 100,
    sort: 'order',
  })

  const heroImageData = typeof homeData.heroImage === 'object' ? homeData.heroImage : null
  const joinUsImageData = typeof homeData.joinUsImage === 'object' ? homeData.joinUsImage : null
  
  // Obfuscate the GroupMe URL server-side
  const encodedGroupMeUrl = obfuscateUrl(homeData.groupMeUrl)

  return (
    <div className="bg-background">
      {/* Hero Section - Swiss Design: Bold Typography on Photography with Parallax */}
      {heroImageData && heroImageData.url ? (
        <ParallaxHero
          imageUrl={heroImageData.url}
          imageAlt={heroImageData.alt || 'Stanford Running Club'}
          heroText={homeData.heroText}
        />
      ) : (
        <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden bg-muted">
          <div className="relative z-20 text-center px-4">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-foreground leading-none uppercase tracking-tight">
              {homeData.heroText}
            </h1>
          </div>
        </section>
      )}

      {/* Schedule Section - Grid-Based Layout */}
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground uppercase tracking-tight mb-3">
            WEEKLY SCHEDULE
          </h2>
          <div className="w-24 h-1 bg-primary" />
        </div>
        
        {scheduleResult.docs.length === 0 ? (
          <div className="text-center text-muted-foreground py-12">
            <p className="text-sm uppercase tracking-wide font-semibold">NO SCHEDULE ITEMS AVAILABLE YET</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {scheduleResult.docs.map((item) => (
              <ScheduleCard key={item.id} schedule={item} />
            ))}
          </div>
        )}
      </section>

      {/* Join Us Section - Asymmetric Grid Layout */}
      <section className="bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content - Swiss Design: Bold Headlines */}
            <div className="flex flex-col items-start">
              <div className="mb-8">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
                  HOW TO JOIN?
                </p>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-foreground leading-none uppercase tracking-tight mb-6">
                  <span className="text-primary">EASY!</span>
                  <br />
                  JUST SHOW UP
                </h2>
                <div className="w-32 h-1 bg-primary mb-8" />
              </div>
              
              <GroupMeButton
                encodedUrl={encodedGroupMeUrl}
                className="px-8 py-4 bg-primary text-primary-foreground text-sm font-bold uppercase tracking-wide hover:opacity-90 transition-opacity border-b-2 border-destructive"
              >
                JOIN OUR GROUPME
              </GroupMeButton>
            </div>
            
            {/* Image */}
            <div className="w-full aspect-[4/3] relative overflow-hidden">
              {joinUsImageData && joinUsImageData.url ? (
                <Image
                  src={joinUsImageData.url}
                  alt={joinUsImageData.alt || 'Join Stanford Running Club'}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              ) : (
                <div className="w-full h-full bg-muted" />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground uppercase tracking-tight mb-3">
            CALENDAR
          </h2>
          <div className="w-24 h-1 bg-primary" />
        </div>
        
        <div className="w-full h-[600px] border-2 border-border overflow-hidden bg-card">
          <iframe
            title="Running Calendar"
            src={homeData.calendarUrl}
            width="100%"
            height="100%"
            className="border-0"
          />
        </div>
      </section>
    </div>
  )
}
