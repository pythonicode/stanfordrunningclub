/**
 * Master seed script - runs all seed scripts in sequence
 * 
 * IMPORTANT: Before running this script:
 * 1. Upload all images to the Media collection
 * 2. Update IMAGE_IDS in each individual seed script
 * 3. Make sure the dev server is running
 * 
 * Usage: npx tsx src/seed/all.ts
 */

import { execSync } from 'child_process'

const seedScripts = [
  'src/seed/home.ts',
  'src/seed/about.ts',
  'src/seed/team.ts',
  'src/seed/contacts.ts',
  'src/seed/routes.ts',
  'src/seed/records.ts',
]

console.log('🌱 Starting complete database seed...\n')

for (const script of seedScripts) {
  console.log(`\n📦 Running ${script}...`)
  try {
    execSync(`npx tsx ${script}`, { stdio: 'inherit' })
  } catch (error) {
    console.error(`❌ Error running ${script}`)
    console.error(error)
    process.exit(1)
  }
}

console.log('\n🎉 All seed scripts completed successfully!')
console.log('\n✅ Your Payload CMS is now fully seeded with data!')
console.log('\n📝 Next steps:')
console.log('   1. Visit http://localhost:3000/admin to verify the data')
console.log('   2. Check the frontend pages to see your data in action')
console.log('   3. Adjust any content as needed through the CMS\n')
