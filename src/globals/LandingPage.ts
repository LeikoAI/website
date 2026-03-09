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

export const LandingPage: GlobalConfig = {
  slug: 'landing-page',
  label: 'Landing Page',
  versions: {
    drafts: {
      autosave: { interval: 2000 },
    },
  },
  hooks: {
    afterChange: [revalidateSite],
  },
  fields: [
    {
      name: 'hero',
      type: 'group',
      label: 'Hero',
      fields: [
        {
          name: 'pill',
          type: 'text',
          label: 'Pill badge text',
          localized: true,
          defaultValue: 'Now in private beta',
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Heading',
          localized: true,
          defaultValue: 'Your business, finally in focus',
        },
        {
          name: 'headingHighlight',
          type: 'text',
          label: 'Heading highlighted word (gradient)',
          localized: true,
          defaultValue: 'focus',
        },
        {
          name: 'subheading',
          type: 'textarea',
          label: 'Subheading',
          localized: true,
          defaultValue:
            "A 24/7 proactive assistant that doesn't just answer your questions but anticipates your needs — ensuring everything in your business is handled properly.",
        },
        {
          name: 'note',
          type: 'text',
          label: 'Note below CTA',
          localized: true,
          defaultValue: 'Free during beta · No credit card required',
        },
      ],
    },
    {
      name: 'problem',
      type: 'group',
      label: 'Problem section',
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Section label',
          localized: true,
          defaultValue: 'The reality',
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Heading',
          localized: true,
          defaultValue: "You didn't start a business to manage spreadsheets",
        },
        {
          name: 'body',
          type: 'textarea',
          label: 'Body text',
          localized: true,
          defaultValue:
            "You started it for the craft, the freedom, the clients. But somewhere along the way, the admin took over. The problem isn't missing tools — it's too many of them.",
        },
        {
          name: 'painPoints',
          type: 'array',
          label: 'Pain points',
          minRows: 1,
          maxRows: 8,
          fields: [
            { name: 'emoji', type: 'text', label: 'Emoji' },
            { name: 'text', type: 'text', label: 'Text', localized: true },
          ],
        },
      ],
    },
    {
      name: 'promise',
      type: 'group',
      label: 'Promise section ("What changes")',
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Section label',
          localized: true,
          defaultValue: 'What changes',
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Heading',
          localized: true,
          defaultValue: 'Not another tool. A layer of clarity.',
        },
        {
          name: 'headingHighlight',
          type: 'text',
          label: 'Heading highlighted word (gradient)',
          localized: true,
          defaultValue: 'clarity',
        },
        {
          name: 'cards',
          type: 'array',
          label: 'Cards',
          minRows: 1,
          maxRows: 4,
          fields: [
            { name: 'title', type: 'text', label: 'Title', localized: true },
            { name: 'text', type: 'textarea', label: 'Text', localized: true },
          ],
        },
      ],
    },
    {
      name: 'howItWorks',
      type: 'group',
      label: 'How it works section',
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Section label',
          localized: true,
          defaultValue: 'How it feels',
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Heading',
          localized: true,
          defaultValue: 'Just talk to it. Like a business partner.',
        },
      ],
    },
    {
      name: 'mission',
      type: 'group',
      label: 'Mission section',
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Section label',
          localized: true,
          defaultValue: 'Mission',
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Heading',
          localized: true,
          defaultValue: 'Built with a shared passion for empowering independents',
        },
        {
          name: 'cards',
          type: 'array',
          label: 'Mission cards',
          minRows: 1,
          maxRows: 2,
          fields: [
            { name: 'label', type: 'text', label: 'Card label', localized: true },
            { name: 'heading', type: 'text', label: 'Card heading', localized: true },
            { name: 'text', type: 'textarea', label: 'Card text', localized: true },
          ],
        },
      ],
    },
    {
      name: 'manifesto',
      type: 'group',
      label: 'Manifesto section',
      fields: [
        {
          name: 'quote',
          type: 'textarea',
          label: 'Quote',
          localized: true,
          defaultValue:
            'By integrating and automating your essential tools, we eliminate complexity and empower you to focus on what matters most — growing your business.',
        },
        {
          name: 'quoteHighlight',
          type: 'text',
          label: 'Highlighted phrase inside quote',
          localized: true,
          defaultValue: 'growing your business',
        },
        {
          name: 'body',
          type: 'textarea',
          label: 'Body text',
          localized: true,
          defaultValue:
            "Leiko isn't about more features. It's about less noise. A single intelligent layer that sits on top of your tools, understands your business, and gives you back the headspace to do the work you actually love.",
        },
      ],
    },
    {
      name: 'footerCta',
      type: 'group',
      label: 'Footer CTA section',
      fields: [
        {
          name: 'heading',
          type: 'text',
          label: 'Heading',
          localized: true,
          defaultValue: 'Ready for clarity?',
        },
        {
          name: 'body',
          type: 'textarea',
          label: 'Body text',
          localized: true,
          defaultValue:
            "Leiko is in private beta for independent professionals and small business owners. Join the waitlist — it's free.",
        },
      ],
    },
  ],
}
