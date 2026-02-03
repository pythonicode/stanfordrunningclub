import { getPayload } from 'payload'
import config from '../payload.config'
import { Route } from '@/payload-types'

/**
 * Seed script for Routes
 * 
 * This script populates the Routes collection with campus and off-campus routes.
 * 
 * Usage: npx tsx src/seed/routes.ts
 */

async function seedRoutes() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  console.log('🌱 Starting Routes seed...')

  try {
    // Campus Routes
    const campusRoutes = [
      {
        title: 'Lake Lagunita',
        type: 'campus',
        distance: 1.4,
        climb: 3,
        stravaId: '3108974817069445566',
        order: 0,
      },
      {
        title: 'Gelato Run',
        type: 'campus',
        distance: 5,
        climb: 14,
        stravaId: '3108975963726591474',
        order: 1,
      },
      {
        title: 'Stanford Dish',
        type: 'campus',
        distance: 5.5,
        climb: 146,
        stravaId: '3108976253463552008',
        order: 2,
      },
      {
        title: 'Campus Drive Loop',
        type: 'campus',
        distance: 6.3,
        climb: 30,
        stravaId: '3108978470380824050',
        order: 3,
      },
      {
        title: 'The CKC',
        type: 'campus',
        distance: 7,
        climb: 36,
        stravaId: '3108982927667866632',
        order: 4,
      },
      {
        title: 'Oak Creek Loop',
        type: 'campus',
        distance: 7,
        climb: 14,
        stravaId: '3108984987483120062',
        order: 5,
      },
      {
        title: 'Encyclopedia Cave',
        type: 'campus',
        distance: null,
        climb: null,
        stravaId: null,
        isRickroll: true,
        order: 6,
      },
      {
        title: 'Coyote Hill',
        type: 'campus',
        distance: 8.7,
        climb: 75,
        stravaId: '3108987525059018760',
        order: 7,
      },
      {
        title: 'Castle',
        type: 'campus',
        distance: 9,
        climb: 68,
        stravaId: '3108986611634307080',
        order: 8,
      },
      {
        title: 'Menlo Train Station',
        type: 'campus',
        distance: 9.7,
        climb: 14,
        stravaId: '3108989015295481330',
        order: 9,
      },
      {
        title: 'Duck Pond',
        type: 'campus',
        distance: 10,
        climb: 89,
        stravaId: '3108990460017721790',
        order: 10,
      },
      {
        title: 'Donkey Run',
        type: 'campus',
        distance: 10.1,
        climb: 39,
        stravaId: '3109573107679458750',
        order: 11,
      },
      {
        title: 'Menlo Park Loop',
        type: 'campus',
        distance: 11.3,
        climb: 18,
        stravaId: '3109575788534746558',
        order: 12,
      },
      {
        title: 'The Dish to Alpine',
        type: 'campus',
        distance: 11.4,
        climb: 174,
        stravaId: '3109574542858953368',
        order: 13,
      },
      {
        title: 'Ikea Run',
        type: 'campus',
        distance: 11.7,
        climb: 30,
        stravaId: '3109576337164720574',
        order: 14,
      },
      {
        title: 'SEX BEAST',
        type: 'campus',
        distance: 12.1,
        climb: 25,
        stravaId: '3286870377723112614',
        order: 15,
      },
      {
        title: 'Matadero Creek Trail',
        type: 'campus',
        distance: 12.9,
        climb: 177,
        stravaId: '3109577019576211606',
        order: 16,
      },
      {
        title: 'Polo Fields',
        type: 'campus',
        distance: 13.4,
        climb: 26,
        stravaId: '3109578256769536446',
        order: 17,
      },
    ]

    console.log('📝 Creating campus routes...')
    for (const route of campusRoutes) {
      const created = await payload.create({
        collection: 'routes',
        data: route as Route,
      })
      console.log(`✅ Created campus route: ${created.title}`)
    }

    // Off-Campus Routes
    const offCampusRoutes = [
      {
        title: 'Arasteradero West Loop',
        type: 'offCampus',
        distance: 17.1,
        climb: 153,
        stravaId: '3109579762431542422',
        order: 0,
      },
      {
        title: 'Woodside Road-Kings Mountain Road-Greer Road',
        type: 'offCampus',
        distance: 20.05,
        climb: 575,
        stravaId: '3287642501917833444',
        order: 1,
      },
      {
        title: 'Foothills 10 Miler',
        type: 'offCampus',
        distance: 16.4,
        climb: 541,
        stravaId: '3328221744167345968',
        order: 2,
      },
      {
        title: 'Foothills 12.5 Miler',
        type: 'offCampus',
        distance: 20.08,
        climb: 669.34,
        stravaId: '3328219475672624312',
        order: 3,
      },
      {
        title: 'Wunderlich Bear Gulch',
        type: 'offCampus',
        distance: 15.88,
        climb: 603.81,
        stravaId: '3338436106536510854',
        order: 4,
      },
      {
        title: 'Skyline Ridge Trail, Peters Creek and Canyon Trail',
        type: 'offCampus',
        distance: 22.92,
        climb: 770.53,
        stravaId: '3338439194181425438',
        order: 5,
      },
    ]

    console.log('📝 Creating off-campus routes...')
    for (const route of offCampusRoutes) {
      const created = await payload.create({
        collection: 'routes',
        data: route as Route,
      })
      console.log(`✅ Created off-campus route: ${created.title}`)
    }

    console.log('🎉 Routes seed completed successfully!')
  } catch (error) {
    console.error('❌ Error seeding routes:', error)
    throw error
  }

  process.exit(0)
}

// Run the seed function
seedRoutes()
