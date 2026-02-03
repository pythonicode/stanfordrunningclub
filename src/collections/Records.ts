import type { CollectionConfig } from 'payload'

export const Records: CollectionConfig = {
  slug: 'records',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'category', 'distance', 'time'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        { label: 'Track', value: 'track' },
        { label: 'Cross Country', value: 'xc' },
        { label: 'Road', value: 'road' },
        { label: 'Field', value: 'field' },
        { label: 'Miscellaneous', value: 'misc' },
      ],
    },
    {
      name: 'distance',
      type: 'text',
      required: true,
      admin: {
        description: 'e.g., "100M", "5000M", "Half Marathon", "Javelin"',
      },
    },
    {
      name: 'name',
      type: 'text',
      required: true,
      admin: {
        description: 'Athlete name',
      },
    },
    {
      name: 'time',
      type: 'text',
      required: true,
      admin: {
        description: 'Time/distance/result',
      },
    },
    {
      name: 'date',
      type: 'text',
      required: true,
    },
    {
      name: 'location',
      type: 'text',
      required: true,
    },
    {
      name: 'order',
      type: 'number',
      required: true,
      defaultValue: 0,
      admin: {
        description: 'Order within the distance group (lower = first)',
      },
    },
  ],
}
