import type { CollectionConfig } from 'payload'

export const Traditions: CollectionConfig = {
  slug: 'traditions',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'when',
      type: 'select',
      hasMany: true,
      required: true,
      options: [
        {
          label: 'Fall',
          value: 'Fall',
        },
        {
          label: 'Winter',
          value: 'Winter',
        },
        {
          label: 'Spring',
          value: 'Spring',
        },
        {
          label: 'Summer',
          value: 'Summer',
        },
      ],
    },
  ],
}
