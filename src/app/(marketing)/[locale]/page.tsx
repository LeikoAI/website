import { draftMode } from 'next/headers'
import { getPayload } from '@/lib/payload'
import { Nav } from '@/components/Nav'
import { Hero } from '@/components/Hero'
import { Problem } from '@/components/Problem'
import { Promise as PromiseSection } from '@/components/Promise'
import { HowItWorks } from '@/components/HowItWorks'
import { Mission } from '@/components/Mission'
import { Manifesto } from '@/components/Manifesto'
import { FooterCta } from '@/components/FooterCta'
import { Footer } from '@/components/Footer'
import { RevealScript } from '@/components/RevealScript'
import type { LandingPageData, SiteSettingsData } from '@/types/cms'

type Locale = 'fi' | 'en'

export async function generateStaticParams() {
  return [{ locale: 'fi' }, { locale: 'en' }]
}

async function getCmsData(locale: Locale, draft: boolean) {
  try {
    const payload = await getPayload()
    const [landing, settings] = await Promise.all([
      payload.findGlobal({
        slug: 'landing-page',
        locale,
        draft,
        fallbackLocale: 'fi',
      }),
      payload.findGlobal({
        slug: 'site-settings',
        locale,
        draft,
        fallbackLocale: 'fi',
      }),
    ])
    return { landing: landing as LandingPageData, settings: settings as SiteSettingsData }
  } catch {
    // Database not set up yet — fall back to hardcoded defaults in each component
    return { landing: null, settings: null }
  }
}

export default async function LocalePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const { isEnabled: isDraft } = await draftMode()
  const { landing, settings } = await getCmsData(locale as Locale, isDraft)

  return (
    <>
      <Nav settings={settings} locale={locale} />
      <main>
        <Hero data={landing?.hero} />
        <Problem data={landing?.problem} />
        <PromiseSection data={landing?.promise} />
        <HowItWorks data={landing?.howItWorks} />
        <Mission data={landing?.mission} />
        <Manifesto data={landing?.manifesto} />
        <FooterCta data={landing?.footerCta} />
        <Footer settings={settings} />
      </main>
      <RevealScript />
    </>
  )
}
