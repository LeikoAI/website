import type { CollectionConfig } from 'payload'

const revalidatePage = async ({ doc }: { doc: Record<string, unknown> }) => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL
  const secret = process.env.PAYLOAD_DRAFT_SECRET
  if (!baseUrl || !secret || !doc.slug) return
  try {
    await fetch(`${baseUrl}/api/revalidate?secret=${secret}&slug=${doc.slug as string}`)
  } catch (err) {
    console.error('[Payload] Page revalidation failed:', err)
  }
}

export const Pages: CollectionConfig = {
  slug: 'pages',
  labels: { singular: 'Page', plural: 'Pages' },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'status', 'updatedAt'],
  },
  hooks: {
    afterChange: [revalidatePage],
  },
  versions: {
    drafts: {
      autosave: { interval: 2000 },
    },
  },
  access: {
    read: ({ req }) => {
      if (req.user) return true
      return { _status: { equals: 'published' } }
    },
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
      localized: true,
    },
    {
      name: 'slug',
      type: 'text',
      label: 'URL slug (e.g. "about" → /about)',
      required: true,
      unique: true,
      admin: {
        description: 'Used in the URL. Use lowercase letters and hyphens only.',
      },
    },
    {
      name: 'content',
      type: 'richText',
      label: 'Content',
      localized: true,
    },
    {
      name: 'seo',
      type: 'group',
      label: 'SEO',
      fields: [
        { name: 'title', type: 'text', label: 'SEO title', localized: true },
        { name: 'description', type: 'textarea', label: 'SEO description', localized: true },
      ],
    },
  ],
}
