'use client'

import React, { useState } from 'react'

interface DiscordButtonProps {
  encodedUrl: string
  className?: string
  children?: React.ReactNode
}

/**
 * Discord join button with bot protection.
 *
 * The invite URL is obfuscated server-side and only decoded on user interaction.
 */
export default function DiscordButton({ encodedUrl, className, children }: DiscordButtonProps) {
  const [isHuman, setIsHuman] = useState(false)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (!isHuman) {
      return
    }

    try {
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

      const decodedUrl = atob(base64Url)

      const parts = decodedUrl.split('::')
      if (parts.length === 3) {
        const protocol = parts[0]
        const domain = parts[1]
        const path = parts[2]
        const fullUrl = `${protocol}://${domain}/${path}`

        window.open(fullUrl, '_blank', 'noopener,noreferrer')
      }
    } catch (error) {
      console.error('Failed to decode URL', error)
    }
  }

  const handleMouseEnter = () => {
    setIsHuman(true)
  }

  const handleMouseMove = () => {
    setIsHuman(true)
  }

  return (
    <>
      <a
        href="https://example.com/fake-discord-invite"
        style={{ display: 'none', position: 'absolute', left: '-9999px' }}
        aria-hidden="true"
        tabIndex={-1}
      >
        Join Discord
      </a>

      <button
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onTouchStart={handleMouseEnter}
        className={className}
        type="button"
      >
        {children || 'Join us on Discord'}
      </button>
    </>
  )
}
