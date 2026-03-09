import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Waitlist } from './collections/Waitlist'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { LandingPage } from './globals/LandingPage'
import { SiteSettings } from './globals/SiteSettings'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    livePreview: {
      url: ({ data, collectionConfig, globalConfig, locale }) => {
        const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3002'
        const secret = process.env.PAYLOAD_DRAFT_SECRET ?? ''
        const loc = locale?.code ?? 'fi'
        if (globalConfig?.slug === 'landing-page') {
          return `${baseUrl}/api/draft?secret=${secret}&locale=${loc}`
        }
        if (collectionConfig?.slug === 'pages' && data?.slug) {
          return `${baseUrl}/api/draft?secret=${secret}&locale=${loc}&slug=${data.slug as string}`
        }
        return `${baseUrl}/api/draft?secret=${secret}&locale=${loc}`
      },
      collections: ['pages'],
      globals: ['landing-page'],
      breakpoints: [
        { label: 'Desktop', name: 'desktop', width: 1280, height: 900 },
        { label: 'Tablet', name: 'tablet', width: 768, height: 1024 },
        { label: 'Mobile', name: 'mobile', width: 390, height: 844 },
      ],
    },
  },

  collections: [Users, Waitlist, Media, Pages],
  globals: [LandingPage, SiteSettings],

  localization: {
    locales: [
      { label: 'Suomi', code: 'fi' },
      { label: 'English', code: 'en' },
    ],
    defaultLocale: 'fi',
    fallback: true,
  },

  editor: lexicalEditor(),

  secret: process.env.PAYLOAD_SECRET || '',

  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },

  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || process.env.DATABASE_URL || '',
    },
    schemaName: 'payload',
  }),

  sharp,
  plugins: [],
})
