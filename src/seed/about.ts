import { getPayload } from 'payload'
import config from '../payload.config'

/**
 * Seed script for About page data
 * 
 * This script populates the About global and Traditions collection.
 * 
 * Usage:
 * 1. First, upload the images to the Media collection via the admin panel:
 *    - /src/images/about/1.webp through 12.webp (gallery images)
 *    - /src/images/about/dishrun.webp
 *    - /src/images/about/laglap.webp
 *    - /src/images/about/s2s.webp
 * 
 * 2. Update the image IDs in this script (see IMAGE_IDS below)
 * 
 * 3. Run: npx tsx src/seed/about.ts
 */

// STEP 1: Upload images to Media collection and replace these IDs
const IMAGE_IDS = {
  gallery: {
    img1: 9,
    img2: 10,
    img3: 11,
    img4: 12,
    img6: 14,
    img7: 15,
    img8: 16,  
    img9: 17,
    img10: 18,
    img11: 19,
    img12: 20,
  },
  traditions: {
    dishrun: 21,
    laglap: 22,
    s2s: 23,
  },
}

async function seedAbout() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  console.log('🌱 Starting About page seed...')

  try {
    // 1. Update About Global
    console.log('📝 Updating About global...')
    await payload.updateGlobal({
      slug: 'about',
      data: {
        header: 'WE DO IT ALL',
        description:
          "Whether you're new to running or an experienced marathoner, everyone is welcome to join our group. Our members include undergraduates, graduate students, faculty, and staff, running together whenever schedules allow. All paces are encouraged, and you'll always find someone to run with. Join us for a run and get to know the Stanford running community.",
        images: [
          { image: IMAGE_IDS.gallery.img1 },
          { image: IMAGE_IDS.gallery.img2 },
          { image: IMAGE_IDS.gallery.img3 },
          { image: IMAGE_IDS.gallery.img4 },
          { image: IMAGE_IDS.gallery.img6 },
          { image: IMAGE_IDS.gallery.img7 },
          { image: IMAGE_IDS.gallery.img8 },
          { image: IMAGE_IDS.gallery.img9 },
          { image: IMAGE_IDS.gallery.img10 },
          { image: IMAGE_IDS.gallery.img11 },
          { image: IMAGE_IDS.gallery.img12 },
        ],
      },
    })
    console.log('✅ About global updated')

    // 2. Create Traditions
    console.log('📝 Creating traditions...')

    const traditions = [
      {
        title: 'Dish Run',
        description:
          '3.25 mile run through the iconic Dish trail at Stanford, sponsored by the Stanford Rec and Wellness in partnership with Stanford Running Club.',
        image: IMAGE_IDS.traditions.dishrun,
        when: ['Winter'],
      },
      {
        title: 'Liquidy Lag Lap',
        description:
          'Our take on the classic beer mile, but with a twist. Run a lap around Lagunita Lake, drink a beverage each quarter way, and repeat.',
        image: IMAGE_IDS.traditions.laglap,
        when: ['Fall', 'Spring'],
      },
      {
        title: 'Stanford to Sea',
        description:
          '24 mile run from Stanford to the Pacific Ocean, with a stop at the beach and a ride back to campus.',
        image: IMAGE_IDS.traditions.s2s,
        when: ['Spring'],
      },
    ]

    for (const tradition of traditions) {
      const created = await payload.create({
        collection: 'traditions',
        data: tradition,
      })
      console.log(`✅ Created tradition: ${created.title}`)
    }

    console.log('🎉 About page seed completed successfully!')
  } catch (error) {
    console.error('❌ Error seeding about page:', error)
    throw error
  }

  process.exit(0)
}

// Run the seed function
seedAbout()
