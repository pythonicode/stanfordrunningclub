import { getPayload } from 'payload'
import config from '../payload.config'
import { Record } from '@/payload-types'

/**
 * Seed script for Records
 * 
 * This script populates the Records collection with all track, XC, road, field, and misc records.
 * 
 * Usage: npx tsx src/seed/records.ts
 */

async function seedRecords() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  console.log('🌱 Starting Records seed...')

  try {
    const allRecords = [
      // TRACK RECORDS
      { category: 'track', distance: '60M', name: 'James Dang', time: '7.13', date: 'Winter 2018', location: 'Cal All-Comers', order: 0 },
      { category: 'track', distance: '100M', name: 'James Dang', time: '11.16', date: 'Winter 2018', location: 'Aggie Open', order: 0 },
      { category: 'track', distance: '100M', name: 'Irene Alisjahbana', time: '12.83', date: 'Spring 2018', location: 'NIRCA T&F Nationals', order: 1 },
      { category: 'track', distance: '110M Hurdles', name: 'Robert Wood', time: '15.84', date: 'Winter 2024', location: 'Bulldog Invitational', order: 0 },
      { category: 'track', distance: '200M', name: 'James Dang', time: '22.45', date: 'Winter 2018', location: 'Cal All-Comers', order: 0 },
      { category: 'track', distance: '200M', name: 'Irene Alisjahbana', time: '26.06', date: 'Spring 2018', location: 'NIRCA T&F Nationals', order: 1 },
      { category: 'track', distance: '400M', name: 'Matt Millett', time: '50.12', date: 'Winter 2016', location: 'Berkeley Invite', order: 0 },
      { category: 'track', distance: '400M', name: 'Laura Vanderweyen', time: '1:02.92', date: 'Winter 2023', location: 'SJTC Winter All-Comer', order: 1 },
      { category: 'track', distance: '400M Hurdles', name: 'Anthony Sausedo', time: '55.03', date: 'Winter 2023', location: 'Kim Duyst Invitational', order: 0 },
      { category: 'track', distance: '400M Hurdles', name: 'Juliet Horenziak', time: '1:09.89', date: 'Winter 2024', location: 'Bulldog Invitational', order: 1 },
      { category: 'track', distance: '800M', name: 'Mike Becich', time: '1:54', date: 'Spring 2016', location: 'NIRCA T&F Nationals', order: 0 },
      { category: 'track', distance: '800M', name: 'Laura Vanderweyen', time: '2:16.95', date: 'Spring 2023', location: 'NIRCA T&F Nationals', order: 1 },
      { category: 'track', distance: '1500M', name: 'Benedikt Bünz', time: '3:51.78', date: 'Unknown', location: 'Unknown', order: 0 },
      { category: 'track', distance: '1500M', name: 'Laura Vanderweyen', time: '4:43.90', date: 'Spring 2023', location: 'NIRCA T&F Nationals', order: 1 },
      { category: 'track', distance: '1600M / MILE', name: 'Mike Becich', time: '4:25.6', date: 'Unknown', location: 'Unknown', order: 0 },
      { category: 'track', distance: '1600M / MILE', name: 'Molly Dicke', time: '5:11', date: 'Unknown', location: 'Unknown', order: 1 },
      { category: 'track', distance: '3000M', name: 'Frank DeGuire', time: '8:57.22', date: 'Winter 2024', location: 'Cal All-Comers', order: 0 },
      { category: 'track', distance: '3000M', name: 'Caroline Cahilly', time: '11:42', date: 'Winter 2025', location: 'Cal All-Comers', order: 1 },
      { category: 'track', distance: '3000M Steeplechase', name: 'Spencer Seay', time: '10:27.35', date: 'Winter 2025', location: 'West Coast Invite', order: 0 },
      { category: 'track', distance: '3000M Steeplechase', name: 'Juliet Horenziak', time: '12:00.72', date: 'Winter 2025', location: 'West Coast Invite', order: 1 },
      { category: 'track', distance: '3200M / 2 MILE', name: 'Benedikt Bünz', time: '9:28', date: 'Unknown', location: 'Unknown', order: 0 },
      { category: 'track', distance: '5000M', name: 'Amaury Gouverneur', time: '15:00.4', date: 'Winter 2024', location: 'Kim Duyst Invitational', order: 0 },
      { category: 'track', distance: '5000M', name: 'Molly Dicke', time: '18:03.14', date: 'Winter 2015', location: 'CSU Stanislaus Kim Duyst Invitational', order: 1 },
      { category: 'track', distance: '3000M Race Walk', name: 'Frank DeGuire', time: '24:45.91', date: 'Winter 2025', location: 'Cal Opener', order: 0 },

      // CROSS COUNTRY RECORDS
      { category: 'xc', distance: '6000M', name: 'Sydney Topping', time: '21:31.83', date: 'Fall 2025', location: 'NIRCA Pacific Regionals', order: 0 },
      { category: 'xc', distance: '8000M', name: 'Michael Thorburn', time: '25:33.50', date: 'Fall 2024', location: 'Santa Clara Bronco Invitational', order: 0 },

      // ROAD RECORDS
      { category: 'road', distance: 'Half Marathon', name: 'David Walton', time: '1:14:00', date: 'Winter 2025', location: 'Napa Valley Half Marathon', order: 0 },
      { category: 'road', distance: 'Half Marathon', name: 'Carolyn Smith', time: '1:24:42', date: 'Winter 2025', location: 'San Fransisco Half Marathon', order: 1 },
      { category: 'road', distance: 'Marathon', name: 'David Walton', time: '2:37:01', date: 'Spring 2025', location: 'OC Marathon', order: 0 },
      { category: 'road', distance: 'Marathon', name: 'Eva Shen', time: '3:01:40', date: 'Fall 2024', location: 'California International Marathon', order: 1 },

      // FIELD RECORDS
      { category: 'field', distance: 'Javelin', name: 'Frank DeGuire', time: '10.71m', date: 'Winter 2024', location: 'Cal All-Comers', order: 0 },
      { category: 'field', distance: 'Shot Put', name: 'Frank DeGuire', time: '17\'8"', date: 'Winter 2024', location: 'NIRCA T&F Nationals', order: 0 },

      // MISCELLANEOUS RECORDS
      { category: 'misc', distance: 'Liquidy Lag Lap', name: 'Frank DeGuire', time: '5:36.46', date: 'Fall 2023', location: '21+ Division', order: 0 },
      { category: 'misc', distance: 'Liquidy Lag Lap', name: 'Mary Fetter', time: '7:05', date: 'Fall 2022', location: '21+ Division', order: 1 },
      { category: 'misc', distance: 'Liquidy Lag Lap', name: 'Charlie Lamb', time: '5:36.46', date: 'Fall 2022', location: 'Choco Milk Division', order: 2 },
      { category: 'misc', distance: 'Liquidy Lag Lap', name: 'Anna Tavakolian', time: '6:54', date: 'Fall 2022', location: 'Choco Milk Division', order: 3 },
      { category: 'misc', distance: 'Liquidy Lag Lap', name: 'Rafael Basto', time: '5:27', date: 'Spring 2022', location: 'Vegan Division', order: 4 },
      { category: 'misc', distance: 'Liquidy Lag Lap', name: 'Calvin Laughlin', time: '3', date: 'Fall 2022', location: '# of vomits', order: 5 },
      { category: 'misc', distance: 'Lake Lag Ultra (6 Hours)', name: 'David Walton & Michael Ruf (Tie)', time: '42 Laps, 36.62 Miles', date: 'Spring 2025', location: 'Lake Lagunita', order: 0 },
      { category: 'misc', distance: 'Backwards 100M', name: 'Max Manson', time: '16.4s', date: 'Spring 2025', location: 'Cobb Track', order: 0 },
    ]

    console.log(`📝 Creating ${allRecords.length} records...`)
    
    for (const record of allRecords) {
      const created = await payload.create({
        collection: 'records',
        data: record as Record,
      })
      console.log(`✅ Created record: ${created.category} - ${created.distance} - ${created.name}`)
    }

    console.log('🎉 Records seed completed successfully!')
  } catch (error) {
    console.error('❌ Error seeding records:', error)
    throw error
  }

  process.exit(0)
}

// Run the seed function
seedRecords()
