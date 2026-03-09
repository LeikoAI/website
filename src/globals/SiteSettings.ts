import type { GlobalConfig } from 'payload'

const revalidateSite = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL
  const secret = process.env.PAYLOAD_DRAFT_SECRET
  if (!baseUrl || !secret) return
  try {
    await fetch(`${baseUrl}/api/revalidate?secret=${secret}`)
  } catch (err) {
    console.error('[Payload] Revalidation failed:', err)
  }
}

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Site Settings',
  hooks: {
    afterChange: [revalidateSite],
  },
  fields: [
    {
      name: 'nav',
      type: 'group',
      label: 'Navigation',
      fields: [
        {
          name: 'links',
          type: 'array',
          label: 'Nav links',
          fields: [
            { name: 'label', type: 'text', label: 'Label', localized: true },
            { name: 'href', type: 'text', label: 'URL or anchor (e.g. #features)' },
          ],
        },
        {
          name: 'ctaLabel',
          type: 'text',
          label: 'CTA button label',
          localized: true,
          defaultValue: 'Join the waitlist',
        },
        {
          name: 'ctaHref',
          type: 'text',
          label: 'CTA href',
          defaultValue: '#start',
        },
      ],
    },
    {
      name: 'footer',
      type: 'group',
      label: 'Footer',
      fields: [
        {
          name: 'links',
          type: 'array',
          label: 'Footer links',
          fields: [
            { name: 'label', type: 'text', label: 'Label', localized: true },
            { name: 'href', type: 'text', label: 'URL' },
          ],
        },
        {
          name: 'email',
          type: 'email',
          label: 'Contact email',
          defaultValue: 'hello@leiko.ai',
        },
        {
          name: 'copyright',
          type: 'text',
          label: 'Copyright text',
          defaultValue: '© 2026 Leiko AI',
        },
      ],
    },
    {
      name: 'seo',
      type: 'group',
      label: 'SEO defaults',
      fields: [
        {
          name: 'defaultTitle',
          type: 'text',
          label: 'Default page title',
          localized: true,
          defaultValue: 'Leiko — Clarity for the independent business',
        },
        {
          name: 'defaultDescription',
          type: 'textarea',
          label: 'Default meta description',
          localized: true,
          defaultValue: 'Leiko is the AI layer that turns entrepreneurial chaos into calm, focused action.',
        },
      ],
    },
  ],
}
