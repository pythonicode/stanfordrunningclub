'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import type { Media } from '@/payload-types'

interface ImageCarouselProps {
  images: Array<{
    image: string | number | Media
    id?: string | null
  }>
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400
      const newScrollLeft =
        scrollContainerRef.current.scrollLeft + (direction === 'right' ? scrollAmount : -scrollAmount)
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      })
    }
  }

  if (images.length === 0) {
    return (
      <div className="text-center text-muted-foreground py-12 border-2 border-border">
        <p className="text-sm uppercase tracking-wide font-semibold">NO GALLERY IMAGES AVAILABLE YET</p>
      </div>
    )
  }

  return (
    <div className="relative group">
      {/* Scroll Left Button */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-background/90 border-2 border-border p-2 hover:bg-muted transition-colors opacity-0 group-hover:opacity-100"
        aria-label="Scroll left"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="square" strokeLinejoin="miter" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Scroll Right Button */}
      <button
        onClick={() => scroll('right')}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-background/90 border-2 border-border p-2 hover:bg-muted transition-colors opacity-0 group-hover:opacity-100"
        aria-label="Scroll right"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="square" strokeLinejoin="miter" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Scrollable Container */}
      <div
        ref={scrollContainerRef}
        className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {images.map((item, index) => {
          const imageData = typeof item.image === 'object' ? item.image : null

          if (!imageData || !imageData.url) {
            return null
          }

          return (
            <div
              key={item.id || index}
              className="flex-shrink-0 w-[85vw] sm:w-[400px] snap-start"
            >
              <div className="relative w-full aspect-video overflow-hidden border-2 border-border">
                <Image
                  src={imageData.url}
                  alt={imageData.alt || 'Stanford Running Club'}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 85vw, 400px"
                />
              </div>
            </div>
          )
        })}
      </div>

      {/* Scroll Indicator */}
      <div className="mt-4 text-center">
        <p className="text-xs uppercase tracking-wide font-semibold text-muted-foreground">
          SCROLL TO VIEW MORE →
        </p>
      </div>
    </div>
  )
}
