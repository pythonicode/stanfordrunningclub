'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import type { Contact } from '@/payload-types'

interface ContactCardProps {
  contact: Contact
}

export default function ContactCard({ contact }: ContactCardProps) {
  const { name, email, image, role, customRole } = contact
  const [decodedEmail, setDecodedEmail] = useState<string>('')

  const imageData = typeof image === 'object' ? image : null

  // Role label mapping
  const roleLabels: { [key: string]: string } = {
    'co-president': 'Co-President',
    president: 'President',
    'vice-president': 'Vice President',
    treasurer: 'Treasurer',
    secretary: 'Secretary',
    webmaster: 'Webmaster',
    'social-chair': 'Social Chair',
    other: 'Team Member',
  }

  const displayRole = customRole || roleLabels[role] || role

  // Encode email for obfuscation (reverse + base64)
  const encodeEmail = (email: string): string => {
    const reversed = email.split('').reverse().join('')
    return btoa(reversed)
  }

  // Decode email
  const decodeEmail = (encoded: string): string => {
    try {
      const decoded = atob(encoded)
      return decoded.split('').reverse().join('')
    } catch {
      return ''
    }
  }

  // Store encoded email
  const encodedEmail = encodeEmail(email)

  // Decode email on mount (client-side only)
  useEffect(() => {
    setDecodedEmail(decodeEmail(encodedEmail))
  }, [encodedEmail])

  // Handle email click - build mailto dynamically
  const handleEmailClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const actualEmail = decodeEmail(encodedEmail)
    if (actualEmail) {
      window.location.href = `mailto:${actualEmail}`
    }
  }

  return (
    <article className="flex flex-col items-center justify-center border border-border rounded-md p-6 bg-card">
      {/* Profile Image */}
      {imageData && imageData.url ? (
        <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
          <Image
            src={imageData.url}
            alt={imageData.alt || name}
            fill
            className="object-cover"
            sizes="96px"
          />
        </div>
      ) : (
        <div className="w-24 h-24 rounded-full bg-muted mb-4" />
      )}

      {/* Name - Swiss Design: Bold Typography */}
      <h3 className="text-xl font-bold text-foreground text-center mb-2">{name}</h3>

      {/* Email - Swiss Design: Functional Link (Obfuscated) */}
      <button
        onClick={handleEmailClick}
        className="text-muted-foreground hover:text-primary hover:underline underline-offset-2 text-sm mb-4 no-underline transition-colors cursor-pointer bg-transparent border-none p-0"
        aria-label={`Email ${name}`}
      >
        {decodedEmail || 'Loading...'}
      </button>

      {/* Role Badge - Swiss Design: Bold Label with Cardinal Red */}
      <div className="px-4 py-2 rounded-sm bg-primary/10 text-primary font-bold uppercase text-xs">
        {displayRole}
      </div>
    </article>
  )
}
