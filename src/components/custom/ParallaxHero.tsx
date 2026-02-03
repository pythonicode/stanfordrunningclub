'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'

interface ParallaxHeroProps {
  imageUrl: string
  imageAlt: string
  heroText: string
}

export default function ParallaxHero({ imageUrl, imageAlt, heroText }: ParallaxHeroProps) {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Calculate parallax offset (slower movement than scroll)
  const parallaxOffset = scrollY * 0.5

  return (
    <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          transform: `translateY(${parallaxOffset}px)`,
          willChange: 'transform',
        }}
      >
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className="object-cover scale-110"
          priority
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-black/60 z-10" />

      <div className="relative z-20 text-center px-4">
        <h1
          className="text-6xl md:text-7xl lg:text-8xl font-black text-white leading-none uppercase tracking-tight"
          style={{
            textShadow: `
              0 4px 60px rgba(0, 0, 0, 0.8),
              0 8px 90px rgba(0, 0, 0, 0.6),
              0 12px 120px rgba(0, 0, 0, 0.4)
            `,
          }}
        >
          {heroText}
        </h1>
      </div>
    </section>
  )
}
