import { getPayload } from 'payload'
import config from '../payload.config'
import { Schedule } from '@/payload-types'

/**
 * Seed script for Home page data
 * 
 * This script populates the Home global and Schedule collection with initial data.
 * 
 * Usage:
 * 1. First, upload the images to the Media collection via the admin panel:
 *    - /src/images/hero.webp
 *    - /src/images/joinus.webp
 *    - /src/images/schedule/claw.webp
 *    - /src/images/schedule/track.webp
 *    - /src/images/schedule/fun.webp
 *    - /src/images/schedule/long.webp
 * 
 * 2. Update the image IDs in this script (see IMAGE_IDS below)
 * 
 * 3. Run: npx tsx src/seed/home.ts
 */

// STEP 1: Upload images to Media collection and replace these IDs
const IMAGE_IDS = {
  hero: 2, // Replace with actual Media ID for hero.webp
  joinUs: 3, // Replace with actual Media ID for joinus.webp
  claw: 5, // Replace with actual Media ID for claw.webp
  track: 8, // Replace with actual Media ID for track.webp
  fun: 6, // Replace with actual Media ID for fun.webp
  long: 7, // Replace with actual Media ID for long.webp
}

async function seedHome() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  console.log('🌱 Starting Home page seed...')

  try {
    // 1. Update Home Global
    console.log('📝 Updating Home global...')
    await payload.updateGlobal({
      slug: 'home',
      data: {
        banner: '', // Optional: Uncomment to add banner
        // banner: "Hey you! We will have our regular schedule during NSO week, so please stop by!",
        heroImage: IMAGE_IDS.hero,
        heroText: 'Run with us.',
        joinUsImage: IMAGE_IDS.joinUs,
        groupMeUrl: 'https://groupme.com/join_group/86180166/GCpGnJlp',
        calendarUrl:
          'https://outlook.office365.com/owa/calendar/b6f73639d6304cdab5c7a39f7cf7092a@stanford.edu/e8a81f3347a346768bc04112919325d715752844312060503601/calendar.html',
      },
    })
    console.log('✅ Home global updated')

    // 2. Create Schedule Items
    console.log('📝 Creating schedule items...')

    const scheduleItems = [
      {
        title: 'Claw Run',
        description:
          'A casual group run with a variety of pace groups, distances and routes around campus',
        image: IMAGE_IDS.claw,
        days: ['Tuesday', 'Wednesday'],
        time: '4:00pm',
        locationName: 'The Claw',
        locationUrl: '',
        difficulty: 'easy',
        order: 0,
      },
      {
        title: 'Track Workout',
        description:
          'Open to all levels of runners with a variety of workouts to help you improve your speed',
        image: IMAGE_IDS.track,
        days: ['Monday', 'Thursday'],
        time: '6:00pm',
        locationName: 'Cobb Track',
        locationUrl: '',
        difficulty: 'hard',
        order: 1,
      },
      {
        title: 'Fun Run',
        description:
          'An exciting variety of adventures from fountain hopping to ice cream runs',
        image: IMAGE_IDS.fun,
        days: ['Friday'],
        time: '4:00pm',
        locationName: 'The Claw',
        locationUrl: '',
        difficulty: 'easy',
        order: 2,
      },
      {
        title: 'Long Run',
        description: 'Explore the beautiful trails of the Bay Area and test your endurance',
        image: IMAGE_IDS.long,
        days: ['Saturday'],
        time: '9:00am',
        locationName: 'Escondido Turnaround',
        locationUrl: '',
        difficulty: 'medium',
        order: 3,
      },
    ]

    for (const item of scheduleItems) {
      const created = await payload.create({
        collection: 'schedule',
          data: item as Schedule,
      })
      console.log(`✅ Created schedule item: ${created.title}`)
    }

    console.log('🎉 Home page seed completed successfully!')
  } catch (error) {
    console.error('❌ Error seeding home page:', error)
    throw error
  }

  process.exit(0)
}

// Run the seed function
seedHome()
