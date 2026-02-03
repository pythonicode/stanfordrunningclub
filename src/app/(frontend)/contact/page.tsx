import { getPayload } from 'payload'
import React from 'react'
import config from '@/payload.config'
import ContactCard from '@/components/custom/ContactCard'
import GroupMeButton from '@/components/custom/GroupMeButton'
import { obfuscateUrl } from '@/lib/encodeUrl'
import { Metadata } from 'next'

export const revalidate = 60 // Revalidate page every 60 seconds (ISR)

export const metadata: Metadata = {
  title: 'Stanford Running Club | Contact',
  description: 'Get in touch with the Stanford Running Club team',
}
export default async function ContactPage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const contactsResult = await payload.find({
    collection: 'contacts',
    depth: 2,
    limit: 1000,
    sort: 'order',
  })

  const homeData = await payload.findGlobal({
    slug: 'home',
    depth: 1,
  })

  // Obfuscate the GroupMe URL server-side
  const encodedGroupMeUrl = obfuscateUrl(homeData.groupMeUrl)

  return (
    <div className="bg-background min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground uppercase tracking-tight mb-3">
            GET IN TOUCH
          </h1>
          <div className="w-24 h-1 bg-primary mb-8" />
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl">
            Have questions about joining the club? Want to learn more about our runs? Reach out to us on GroupMe or contact our leadership team directly.
          </p>
        </div>

        {/* CTA Section */}
        <div className="mb-20">
          <GroupMeButton
            encodedUrl={encodedGroupMeUrl}
            className="px-8 py-4 bg-primary text-primary-foreground text-sm font-bold uppercase tracking-wide hover:opacity-90 transition-opacity border-b-2 border-destructive"
          >
            JOIN OUR GROUPME
          </GroupMeButton>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-8 text-muted-foreground mb-16">
          <hr className="flex-1 border-border border-t-2" />
          <span className="text-xs uppercase tracking-wide font-bold">OR REACH OUT DIRECTLY</span>
          <hr className="flex-1 border-border border-t-2" />
        </div>

        {/* Leadership Section */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-black text-foreground uppercase tracking-tight mb-3">
            LEADERSHIP TEAM
          </h2>
          <div className="w-16 h-1 bg-primary mb-8" />
        </div>

        {/* Contacts Grid */}
        {contactsResult.docs.length === 0 ? (
          <div className="text-center text-muted-foreground py-12">
            <p className="text-sm uppercase tracking-wide font-semibold">NO CONTACTS AVAILABLE YET</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-16">
            {contactsResult.docs.map((contact) => (
              <ContactCard key={contact.id} contact={contact} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
