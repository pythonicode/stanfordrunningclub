import React from 'react'
import Image from 'next/image'
import type { Schedule, Media } from '@/payload-types'

interface ScheduleCardProps {
  schedule: Schedule
}

export default function ScheduleCard({ schedule }: ScheduleCardProps) {
  const { title, description, days, time, locationName, locationUrl, difficulty, image } = schedule

  const imageData = typeof image === 'object' ? image : null

  // Difficulty indicator colors - Swiss Design: Clear visual hierarchy
  const difficultyConfig = {
    easy: {
      dots: 1,
      color: 'bg-foreground',
      label: 'EASY',
      bgColor: 'bg-muted',
      textColor: 'text-foreground',
    },
    medium: {
      dots: 2,
      color: 'bg-foreground',
      label: 'MEDIUM',
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-800',
    },
    hard: {
      dots: 3,
      color: 'bg-primary',
      label: 'HARD',
      bgColor: 'bg-primary/10',
      textColor: 'text-primary',
    },
  }

  const config = difficultyConfig[difficulty as keyof typeof difficultyConfig]

  return (
    <article className="flex flex-col border-2 border-border overflow-hidden bg-card h-full">
      {/* Image */}
      {imageData && imageData.url ? (
        <div className="w-full aspect-video relative">
          <Image
            src={imageData.url}
            alt={imageData.alt || title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </div>
      ) : (
        <div className="w-full aspect-video bg-muted" />
      )}

      {/* Content */}
      <div className="flex flex-col p-6 grow">
        {/* Title */}
        <h3 className="text-xl font-black text-foreground text-center uppercase tracking-tight mb-3">
          {title}
        </h3>
        
        {/* Difficulty Badge */}
        <div className="flex justify-center mb-4">
          <div className={`flex items-center gap-2 px-3 py-1 ${config.bgColor}`}>
            <div className="flex gap-1">
              {Array.from({ length: config.dots }).map((_, i) => (
                <div key={i} className={`h-2 w-2 ${config.color}`} />
              ))}
            </div>
            <span className={`text-xs font-bold uppercase tracking-wide ${config.textColor}`}>
              {config.label}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-center text-sm text-muted-foreground leading-relaxed mb-6 grow">
          {description}
        </p>

        {/* Info Section */}
        <div className="space-y-3 border-t-2 border-border pt-4">
          {/* Days */}
          <div className="flex gap-3 justify-center">
            {days.map((day) => (
              <span key={day} className="text-xs font-bold uppercase tracking-wide text-foreground">
                {day}
              </span>
            ))}
          </div>

          {/* Time */}
          <div className="text-center text-sm font-bold uppercase tracking-wide text-foreground">
            {time}
          </div>

          {/* Location */}
          {locationUrl ? (
            <a
              href={locationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:opacity-80 transition-opacity flex gap-2 items-center justify-center no-underline text-xs font-semibold uppercase tracking-wide"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>{locationName}</span>
            </a>
          ) : (
            <div className="text-muted-foreground flex gap-2 items-center justify-center text-xs font-semibold uppercase tracking-wide">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>{locationName}</span>
            </div>
          )}
        </div>
      </div>
    </article>
  )
}
