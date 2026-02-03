import type { CollectionConfig } from 'payload'

export const Routes: CollectionConfig = {
  slug: 'routes',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'type', 'distance', 'climb'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'type',
      type: 'select',
      required: true,
      options: [
        { label: 'From Campus', value: 'campus' },
        { label: 'Off Campus', value: 'offCampus' },
      ],
    },
    {
      name: 'distance',
      type: 'number',
      admin: {
        description: 'Distance in miles',
      },
    },
    {
      name: 'climb',
      type: 'number',
      admin: {
        description: 'Elevation gain in feet',
      },
    },
    {
      name: 'stravaId',
      type: 'text',
      admin: {
        description: 'Strava route ID (from the route URL)',
      },
    },
    {
      name: 'isRickroll',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Easter egg: Link to rickroll instead of Strava',
      },
    },
    {
      name: 'order',
      type: 'number',
      required: true,
      defaultValue: 0,
      admin: {
        description: 'Order in which this route appears (lower = first)',
      },
    },
  ],
}
