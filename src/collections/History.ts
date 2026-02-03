import type { CollectionConfig } from 'payload'

export const History: CollectionConfig = {
  slug: 'history',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'year', 'updatedAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'year',
      type: 'number',
      required: true,
      admin: {
        description: 'Year of the event (e.g., 2024)',
      },
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        description: 'Title of the historical event',
      },
    },
    {
      name: 'body',
      type: 'textarea',
      required: true,
      admin: {
        description: 'Description of the event',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Optional image for this event',
      },
    },
    {
      name: 'order',
      type: 'number',
      required: true,
      defaultValue: 0,
      admin: {
        description: 'Order in timeline (lower = earlier)',
      },
    },
  ],
}
