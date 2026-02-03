import type { GlobalConfig } from 'payload'

export const About: GlobalConfig = {
  slug: 'about',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'header',
      type: 'text',
      required: true,
      defaultValue: 'WE DO IT ALL',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      defaultValue:
        "Whether you're a total newbie or a seasoned marathoner, we're your running squad! 🏃‍♂️ Join undegrads, grad students, profs, and Stanford presidents for runs whenever you can make it. No pressure, just good vibes and great company. Trust us, there's always someone at your pace ready to hit the trails! Come run with us and see what the hype is all about. 🌲",
    },
    {
      name: 'images',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
}
