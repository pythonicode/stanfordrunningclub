import { getPayload } from 'payload'
import React from 'react'
import config from '@/payload.config'
import type { Contact as ContactType, Home } from '@/payload-types'
import ContactCard from '@/components/custom/ContactCard'
import GroupMeButton from '@/components/custom/GroupMeButton'
import { obfuscateUrl } from '@/lib/encodeUrl'

export const metadata = {
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
    <div className="bg-background">
      <section className="max-w-5xl mx-auto px-4 py-16">
        {/* Header - Swiss Design: Bold, Centered Typography */}
        <h1 className="text-5xl lg:text-7xl font-black text-foreground text-center mb-12">
          GET IN TOUCH
        </h1>

        {/* CTA Button - Swiss Design */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-12">
          <GroupMeButton
            encodedUrl={encodedGroupMeUrl}
            className="px-8 py-4 bg-primary text-primary-foreground text-xl font-semibold rounded-sm hover:opacity-90 transition-opacity border-b-4 border-destructive"
          >
            Join our GroupMe
          </GroupMeButton>
        </div>

        {/* Divider with Text - Swiss Design: Clean Separation */}
        <div className="flex items-center justify-center gap-8 text-muted-foreground my-12">
          <hr className="flex-1 border-border" />
          <span className="text-sm">or reach out directly</span>
          <hr className="flex-1 border-border" />
        </div>

        {/* Contacts Grid */}
        {contactsResult.docs.length === 0 ? (
          <div className="text-center text-muted-foreground py-8">
            <p className="m-0">No contacts available yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {contactsResult.docs.map((contact) => (
              <ContactCard key={contact.id} contact={contact} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
