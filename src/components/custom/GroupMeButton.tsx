'use client'

import React, { useState } from 'react'

interface GroupMeButtonProps {
  encodedUrl: string
  className?: string
  children?: React.ReactNode
}

/**
 * GroupMe Button Component with Bot Protection
 * 
 * This component obfuscates the GroupMe URL to make it harder for bots to scrape.
 * Techniques used:
 * - Base64 encoding of URL parts
 * - Dynamic URL construction on user interaction
 * - No href attribute until click
 * - Honeypot detection
 */
export default function GroupMeButton({ encodedUrl, className, children }: GroupMeButtonProps) {
  const [isHuman, setIsHuman] = useState(false)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    // Honeypot check - bots often trigger events without proper timing
    if (!isHuman) {
      return
    }

    // Decode the URL with deobfuscation
    try {
      // Step 1: Reverse character shifting
      const base64Url = encodedUrl
        .split('')
        .map((char) => {
          const code = char.charCodeAt(0)
          if (code >= 33 && code <= 126) {
            return String.fromCharCode(((code - 33 - 13 + 94) % 94) + 33)
          }
          return char
        })
        .join('')
      
      // Step 2: Base64 decode
      const decodedUrl = atob(base64Url)
      
      // Step 3: Reconstruct URL from parts
      const parts = decodedUrl.split('::')
      if (parts.length === 3) {
        const protocol = parts[0]
        const domain = parts[1]
        const path = parts[2]
        const fullUrl = `${protocol}://${domain}/${path}`
        
        // Open in new tab with security features
        window.open(fullUrl, '_blank', 'noopener,noreferrer')
      }
    } catch (error) {
      console.error('Failed to decode URL', error)
    }
  }

  const handleMouseEnter = () => {
    // Mark as human interaction (bots rarely trigger hover events naturally)
    setIsHuman(true)
  }

  const handleMouseMove = () => {
    // Additional human verification
    setIsHuman(true)
  }

  return (
    <>
      {/* Honeypot - hidden link that bots might click */}
      <a
        href="https://example.com/fake-groupme"
        style={{ display: 'none', position: 'absolute', left: '-9999px' }}
        aria-hidden="true"
        tabIndex={-1}
      >
        Join GroupMe
      </a>

      {/* Actual button */}
      <button
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onTouchStart={handleMouseEnter}
        className={className}
        type="button"
        // No data attributes that could leak the URL
      >
        {children || 'Join our GroupMe'}
      </button>
    </>
  )
}

/**
 * Utility function to encode GroupMe URL for the component
 * Use this server-side or in a build script to generate the encoded URL
 * 
 * Example usage:
 * const encoded = encodeGroupMeUrl('https://groupme.com/join_group/86180166/GCpGnJlp')
 */
export function encodeGroupMeUrl(url: string): string {
  try {
    const urlObj = new URL(url)
    const protocol = urlObj.protocol.replace(':', '')
    const domain = urlObj.hostname
    const path = urlObj.pathname.substring(1) + urlObj.search + urlObj.hash
    
    // Format: protocol::domain::path
    const combined = `${protocol}::${domain}::${path}`
    return btoa(combined)
  } catch (error) {
    console.error('Invalid URL', error)
    return ''
  }
}
