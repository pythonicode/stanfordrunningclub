# Payload CMS Seed Scripts

These scripts help you migrate data from the old config-based approach to Payload CMS.

## Prerequisites

1. **Start the development server**: `pnpm run dev`
2. **Access the admin panel**: http://localhost:3000/admin
3. **Create an admin user** if you haven't already

## Seeding Process

### Step 1: Upload Images

Before running any seed scripts, upload all images to the Media collection via the admin panel:

#### Home Page Images
- `/src/images/hero.webp`
- `/src/images/joinus.webp`
- `/src/images/schedule/claw.webp`
- `/src/images/schedule/track.webp`
- `/src/images/schedule/fun.webp`
- `/src/images/schedule/long.webp`

#### About Page Images
- `/src/images/about/1.webp` through `/src/images/about/12.webp`
- `/src/images/about/dishrun.webp`
- `/src/images/about/laglap.webp`
- `/src/images/about/s2s.webp`

#### Team Page Images
- `/src/images/team/hero.webp`
- `/src/images/team/coach.webp`
- `/src/images/team/coach-headshot.webp`

#### Contact Page Images
- `/src/images/contact/david.png`
- `/src/images/contact/julieth.jpg`
- `/src/images/contact/anthony.jpg`

### Step 2: Update Image IDs

After uploading images, note their IDs from the admin panel and update the `IMAGE_IDS` object in each seed script:

- `src/seed/home.ts`
- `src/seed/about.ts`
- `src/seed/team.ts`
- `src/seed/contacts.ts`

### Step 3: Run Seed Scripts

Run the scripts in any order (they're independent):

```bash
# Seed home page (requires image IDs)
npx tsx src/seed/home.ts

# Seed about page (requires image IDs)
npx tsx src/seed/about.ts

# Seed team page (requires image IDs)
npx tsx src/seed/team.ts

# Seed contacts (requires image IDs)
npx tsx src/seed/contacts.ts

# Seed routes (no images needed)
npx tsx src/seed/routes.ts

# Seed records (no images needed)
npx tsx src/seed/records.ts
```

Or run all at once (after updating image IDs):

```bash
npx tsx src/seed/all.ts
```

## Data Overview

### Home Page (`home.ts`)
- **Global**: Home (banner, hero image, hero text, join us image, URLs)
- **Collection**: Schedule (4 items: Claw Run, Track Workout, Fun Run, Long Run)

### About Page (`about.ts`)
- **Global**: About (header, description, 11 gallery images)
- **Collection**: Traditions (3 items: Dish Run, Liquidy Lag Lap, Stanford to Sea)

### Team Page (`team.ts`)
- **Global**: Team (header, description, hero image, coach info with images)

### Contacts (`contacts.ts`)
- **Collection**: Contacts (3 people: David, Juliet, Anthony)

### Routes (`routes.ts`)
- **Collection**: Routes
  - 18 campus routes
  - 6 off-campus routes
  - Includes Strava IDs and one rickroll easter egg 🎵

### Records (`records.ts`)
- **Collection**: Records (43 total records)
  - Track: 24 records
  - Cross Country: 2 records
  - Road: 4 records
  - Field: 2 records
  - Miscellaneous: 11 records

## Troubleshooting

### Error: "Cannot find module 'tsx'"

Install tsx globally:
```bash
npm install -g tsx
```

Or use via npx (no installation needed):
```bash
npx tsx src/seed/home.ts
```

### Error: "Image ID not found"

Make sure you've:
1. Uploaded the images to the Media collection
2. Updated the `IMAGE_IDS` object in the seed script with the correct IDs
3. The IDs are numbers, not strings

### Error: "Duplicate key error"

The script tried to create a record that already exists. You can either:
1. Delete the existing records from the admin panel
2. Modify the seed script to update instead of create

## Notes

- All seed scripts use `process.exit(0)` to terminate after completion
- Scripts are idempotent for routes and records (you can run them multiple times)
- For globals (Home, About, Team), the scripts use `updateGlobal` which will overwrite existing data
- Image IDs must be obtained from the Media collection after uploading

## Next Steps

After seeding:
1. Visit the admin panel to verify all data
2. Check the frontend pages to see your data in action
3. Adjust any content as needed through the CMS
