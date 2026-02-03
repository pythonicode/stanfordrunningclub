# Stanford Running Club Website

A modern website for the Stanford Running Club built with Next.js, Payload CMS, and deployed on Vercel.

## For Non-Technical Maintainers (Content Editors)

### Accessing the Admin Panel

1. Go to `https://your-domain.com/admin`
2. Log in with your admin credentials
3. You can now edit all website content without touching code

### Managing Content

**Home Page**
- Navigate to **Globals → Home** to edit hero text, GroupMe link, and calendar URL

**About Page**
- Navigate to **Globals → About** to edit header, description, and photo gallery
- Add/remove traditions in **Collections → Traditions**

**Runs Page**
- Navigate to **Collections → Routes** to add/edit running routes
- Add Strava route IDs to embed interactive maps

**Team Page**
- Navigate to **Globals → Team** to edit header, join URL, and coach info
- Add/edit records in **Collections → Records**

**Contact Page**
- Navigate to **Collections → Contacts** to add/edit team member contact cards

**Weekly Schedule**
- Navigate to **Collections → Schedule** to edit weekly run times and locations

### Creating New Admin Users

1. Go to **Collections → Users** in the admin panel
2. Click **Create New**
3. Enter email and password
4. Save

---

## For Technical Maintainers (Developers)

### Tech Stack

- **Framework:** Next.js 15 (App Router)
- **CMS:** Payload CMS 3.0
- **Database:** MongoDB
- **Styling:** Tailwind CSS (Swiss Design System)
- **Hosting:** Vercel
- **Package Manager:** pnpm

### Local Development Setup

```bash
# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env

# Add your MongoDB connection string to .env
MONGODB_URI=your_mongodb_connection_string
PAYLOAD_SECRET=your_random_secret_key

# Run development server
pnpm dev

# Access the site at http://localhost:3000
# Access admin panel at http://localhost:3000/admin
```

### Project Structure

```
src/
├── app/(frontend)/        # Public-facing pages
│   ├── page.tsx          # Home page
│   ├── about/            # About page
│   ├── runs/             # Routes page
│   ├── team/             # Team & records page
│   └── contact/          # Contact page
├── collections/          # Payload collections (data models)
├── globals/              # Payload globals (singleton data)
├── components/           # React components
│   ├── Header.tsx        # Site header
│   └── custom/           # Page-specific components
├── seed/                 # Database seeding scripts
└── lib/                  # Utility functions
```

### Deployment on Vercel

1. **Connect Repository**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel auto-detects Next.js

2. **Environment Variables**
   - Add `MONGODB_URI` (your MongoDB connection string)
   - Add `PAYLOAD_SECRET` (generate with `openssl rand -base64 32`)
   - Add `NEXT_PUBLIC_SERVER_URL` (your Vercel domain)

3. **Deploy**
   - Vercel automatically deploys on every push to main
   - Access admin panel at `https://your-domain.com/admin`

### Creating the First Admin User

After first deployment, create an admin user via the Payload API:

```bash
# Option 1: Use the seed script (if available)
pnpm seed

# Option 2: Create manually via admin panel
# Visit https://your-domain.com/admin
# The first user registration will create an admin
```

### Design System

This site follows a **Swiss Design System** with:
- Uppercase typography with tight tracking
- Cardinal red (#8C1515) accent color
- Bold, geometric layouts
- 2px borders for emphasis
- See `DESIGN_SYSTEM.md` for full guidelines

### Key Commands

```bash
# Development
pnpm dev              # Start dev server
pnpm build            # Build for production
pnpm start            # Run production build locally

# Database seeding
pnpm seed             # Seed all data
npx tsx src/seed/home.ts      # Seed specific collection

# Code quality
pnpm lint             # Run ESLint
```

### Common Tasks

**Adding a new page:**
1. Create page in `src/app/(frontend)/your-page/page.tsx`
2. Add link to `src/components/Header.tsx`
3. Follow existing page patterns for consistency

**Adding a new collection:**
1. Create collection in `src/collections/YourCollection.ts`
2. Add to `payload.config.ts` collections array
3. Create seed script in `src/seed/yourCollection.ts`

**Updating styles:**
- Global styles: `src/app/(frontend)/styles.css`
- Component styles: Use Tailwind classes
- Follow `DESIGN_SYSTEM.md` guidelines

### Environment Variables

```env
# Required
MONGODB_URI=mongodb+srv://...
PAYLOAD_SECRET=your-secret-key
NEXT_PUBLIC_SERVER_URL=https://your-domain.com

# Optional
NODE_ENV=production
```

### Troubleshooting

**Strava embeds not loading:**
- Ensure the Strava script is loaded in `runs/page.tsx`
- Check that route has a valid `stravaId`

**Admin panel not accessible:**
- Verify `PAYLOAD_SECRET` is set
- Check MongoDB connection
- Ensure first user is created

**Build fails on Vercel:**
- Check environment variables are set
- Verify MongoDB connection string is correct
- Review build logs for specific errors

### Support

For questions or issues:
- Check existing code patterns in similar pages
- Review `DESIGN_SYSTEM.md` for styling guidelines
- Contact previous maintainers for handoff details
