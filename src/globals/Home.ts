import type { GlobalConfig } from 'payload'

export const Home: GlobalConfig = {
  slug: 'home',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'banner',
      type: 'text',
      admin: {
        description: 'Optional banner text to display at the top of all pages',
      },
    },
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'heroText',
      type: 'text',
      required: true,
      defaultValue: 'Run with us.',
    },
    {
      name: 'joinUsImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'groupMeUrl',
      type: 'text',
      required: true,
      defaultValue: 'https://groupme.com/join_group/86180166/GCpGnJlp',
    },
    {
      name: 'calendarUrl',
      type: 'text',
      required: true,
      defaultValue: 'https://outlook.office365.com/owa/calendar/b6f73639d6304cdab5c7a39f7cf7092a@stanford.edu/e8a81f3347a346768bc04112919325d715752844312060503601/calendar.html',
    },
  ],
}
