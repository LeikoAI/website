import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['email', 'role', 'updatedAt'],
  },
  auth: true,
  access: {
    read: ({ req }) => !!req.user,
    create: ({ req }) => req.user?.role === 'admin',
    update: ({ req }) => !!req.user,
    delete: ({ req }) => req.user?.role === 'admin',
  },
  fields: [
    {
      name: 'role',
      type: 'select',
      label: 'Role',
      required: true,
      defaultValue: 'editor',
      saveToJWT: true,
      options: [
        { label: 'Admin — full access', value: 'admin' },
        { label: 'Editor — edit content, cannot manage users', value: 'editor' },
        { label: 'Viewer — read-only access', value: 'viewer' },
      ],
      access: {
        update: ({ req }) => req.user?.role === 'admin',
      },
    },
    {
      name: 'name',
      type: 'text',
      label: 'Display name',
    },
  ],
}
