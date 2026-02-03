import React from 'react'
import './styles.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getPayload } from 'payload'
import config from '@/payload.config'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Stanford Running Club',
  description: 'Stanford Running Club - Join us for runs around campus!',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  // Fetch banner from home global
  let banner: string | null = null
  try {
    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig })
    const homeData = await payload.findGlobal({
      slug: 'home',
      depth: 0, // Don't populate relationships, just get the banner text
    })
    banner = homeData.banner || null
  } catch (error) {
    // Silently fail - banner is optional
    console.error('Error fetching banner', error)
    banner = null
  }

  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-background text-foreground">
        {banner && (
          <div className="bg-primary text-primary-foreground p-4 text-center">
            <p className="text-sm m-0">{banner}</p>
          </div>
        )}
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
