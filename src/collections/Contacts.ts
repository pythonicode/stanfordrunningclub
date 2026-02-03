import type { CollectionConfig } from 'payload'

export const Contacts: CollectionConfig = {
  slug: 'contacts',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'role'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'role',
      type: 'select',
      required: true,
      options: [
        { label: 'Co-President', value: 'co-president' },
        { label: 'President', value: 'president' },
        { label: 'Vice President', value: 'vice-president' },
        { label: 'Treasurer', value: 'treasurer' },
        { label: 'Secretary', value: 'secretary' },
        { label: 'Webmaster', value: 'webmaster' },
        { label: 'Social Chair', value: 'social-chair' },
        { label: 'Other', value: 'other' },
      ],
    },
    {
      name: 'customRole',
      type: 'text',
      admin: {
        description: 'Custom role title (overrides the role dropdown if provided)',
      },
    },
    {
      name: 'order',
      type: 'number',
      required: true,
      defaultValue: 0,
      admin: {
        description: 'Order in which this contact appears (lower = first)',
      },
    },
  ],
}
