import { notFound } from 'next/navigation'
import { draftMode } from 'next/headers'
import { getPayload } from '@/lib/payload'
import type { SiteSettingsData } from '@/types/cms'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { RichText } from '@/components/RichText'

type Locale = 'fi' | 'en'

export async function generateStaticParams() {
  try {
    const payload = await getPayload()
    const pages = await payload.find({
      collection: 'pages',
      draft: false,
      limit: 100,
      select: { slug: true },
    })
    const locales: Locale[] = ['fi', 'en']
    return pages.docs.flatMap((page) =>
      locales.map((locale) => ({ locale, slug: page.slug as string })),
    )
  } catch {
    return []
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  try {
    const payload = await getPayload()
    const result = await payload.find({
      collection: 'pages',
      where: { slug: { equals: slug } },
      locale: locale as Locale,
      limit: 1,
    })
    const page = result.docs[0]
    if (!page) return {}
    return {
      title: (page.seo as { title?: string } | undefined)?.title ?? (page.title as string),
      description: (page.seo as { description?: string } | undefined)?.description,
    }
  } catch {
    return {}
  }
}

export default async function SlugPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  const { isEnabled: isDraft } = await draftMode()

  let page = null
  let settings: SiteSettingsData | null = null

  try {
    const payload = await getPayload()
    const [result, settingsResult] = await Promise.all([
      payload.find({
        collection: 'pages',
        where: { slug: { equals: slug } },
        locale: locale as Locale,
        fallbackLocale: 'fi',
        draft: isDraft,
        limit: 1,
      }),
      payload.findGlobal({
        slug: 'site-settings',
        locale: locale as Locale,
        fallbackLocale: 'fi',
        draft: isDraft,
      }),
    ])
    page = result.docs[0] ?? null
    settings = settingsResult as SiteSettingsData
  } catch {
    notFound()
  }

  if (!page) notFound()

  return (
    <>
      <Nav settings={settings} locale={locale} />
      <main style={{ paddingTop: 100, minHeight: '70vh' }}>
        <div className="container" style={{ maxWidth: 760, paddingTop: 48, paddingBottom: 96 }}>
          <h1
            style={{
              fontSize: 'clamp(32px, 5vw, 52px)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              marginBottom: 40,
              color: 'var(--text)',
            }}
          >
            {page.title as string}
          </h1>
          {page.content && <RichText content={page.content} />}
        </div>
      </main>
      <Footer settings={settings} />
    </>
  )
}
