import { getPayload } from 'payload'
import config from '../payload.config'
import { Contact } from '@/payload-types'

/**
 * Seed script for Contacts
 * 
 * This script populates the Contacts collection.
 * 
 * Usage:
 * 1. First, upload the images to the Media collection via the admin panel:
 *    - /src/images/contact/david.png
 *    - /src/images/contact/julieth.jpg
 *    - /src/images/contact/anthony.jpg
 * 
 * 2. Update the image IDs in this script (see IMAGE_IDS below)
 * 
 * 3. Run: npx tsx src/seed/contacts.ts
 */

// STEP 1: Upload images to Media collection and replace these IDs
const IMAGE_IDS = {
  david: 28,
  juliet: 29,
  anthony: 27,
}

async function seedContacts() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  console.log('🌱 Starting Contacts seed...')

  try {
    const contacts = [
      {
        name: 'David Walton',
        email: 'dawalton@stanford.edu',
        image: IMAGE_IDS.david,
        role: 'co-president',
        order: 0,
      },
      {
        name: 'Juliet Horenziak',
        email: 'jhorenzi@stanford.edu',
        image: IMAGE_IDS.juliet,
        role: 'co-president',
        order: 1,
      },
      {
        name: 'Anthony Riley',
        email: 'anthonyjriley@gmail.com',
        image: IMAGE_IDS.anthony,
        role: 'webmaster',
        order: 2,
      },
    ]

    for (const contact of contacts) {
      const created = await payload.create({
        collection: 'contacts',
          data: contact as Contact,
      })
      console.log(`✅ Created contact: ${created.name}`)
    }

    console.log('🎉 Contacts seed completed successfully!')
  } catch (error) {
    console.error('❌ Error seeding contacts:', error)
    throw error
  }

  process.exit(0)
}

// Run the seed function
seedContacts()
