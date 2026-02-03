import { getPayload } from 'payload'
import config from '../payload.config'

/**
 * Seed script for Team page data
 * 
 * This script populates the Team global.
 * 
 * Usage:
 * 1. First, upload the images to the Media collection via the admin panel:
 *    - /src/images/team/hero.webp
 *    - /src/images/team/coach.webp
 *    - /src/images/team/coach-headshot.webp
 * 
 * 2. Update the image IDs in this script (see IMAGE_IDS below)
 * 
 * 3. Run: npx tsx src/seed/team.ts
 */

// STEP 1: Upload images to Media collection and replace these IDs
const IMAGE_IDS = {
  hero: 26,
  coach: 25,
  coachHeadshot: 24,
}

async function seedTeam() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  console.log('🌱 Starting Team page seed...')

  try {
    await payload.updateGlobal({
      slug: 'team',
      data: {
        header: 'COMPETE WITH US!',
        description:
          'Ran in high school? We compete in cross country, track, and road races across the Bay Area and beyond. We have a great time and are always looking for new members.',
        heroImage: IMAGE_IDS.hero,
        joinUrl:
          'https://docs.google.com/forms/d/e/1FAIpQLSfqAx6QZlH1p14ZFe7uNFYTMaP15KNZ7BCYNd__-1Wid1flQQ/viewform?usp=sf_link',
        coachName: 'Ernest Lee',
        coachBio:
          'A Palo Alto native (born in Stanford Hospital), Ernie Lee ran competitively for Gunn High School and Princeton University. After graduating with a degree in physics, Ernie completed graduate studies at Stanford in the applied physics department. It was then that he began coaching at his former high school. He coached both cross country and track and field at Gunn High School for 18 years. Ernie currently works for a nanomaterials company and still races as a member of the HOKA Aggies Running Club.',
        coachImage: IMAGE_IDS.coach,
        coachHeadshot: IMAGE_IDS.coachHeadshot,
      },
    })

    console.log('✅ Team global updated')
    console.log('🎉 Team page seed completed successfully!')
  } catch (error) {
    console.error('❌ Error seeding team page:', error)
    throw error
  }

  process.exit(0)
}

// Run the seed function
seedTeam()
