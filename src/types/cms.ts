// CMS types matching the Payload global schemas.
// These mirror what `npm run generate:types` would produce for LandingPage and SiteSettings.

export type HeroData = {
  pill?: string | null
  heading?: string | null
  headingHighlight?: string | null
  subheading?: string | null
  note?: string | null
}

export type PainPoint = {
  id?: string | null
  emoji?: string | null
  text?: string | null
}

export type ProblemData = {
  label?: string | null
  heading?: string | null
  body?: string | null
  painPoints?: PainPoint[] | null
}

export type PromiseCard = {
  id?: string | null
  title?: string | null
  text?: string | null
}

export type PromiseData = {
  label?: string | null
  heading?: string | null
  headingHighlight?: string | null
  cards?: PromiseCard[] | null
}

export type HowItWorksData = {
  label?: string | null
  heading?: string | null
}

export type MissionCard = {
  id?: string | null
  label?: string | null
  heading?: string | null
  text?: string | null
}

export type MissionData = {
  label?: string | null
  heading?: string | null
  cards?: MissionCard[] | null
}

export type ManifestoData = {
  quote?: string | null
  quoteHighlight?: string | null
  body?: string | null
}

export type FooterCtaData = {
  heading?: string | null
  body?: string | null
}

export type LandingPageData = {
  hero?: HeroData | null
  problem?: ProblemData | null
  promise?: PromiseData | null
  howItWorks?: HowItWorksData | null
  mission?: MissionData | null
  manifesto?: ManifestoData | null
  footerCta?: FooterCtaData | null
}

export type NavLink = {
  id?: string | null
  label?: string | null
  href?: string | null
}

export type SiteSettingsData = {
  nav?: {
    links?: NavLink[] | null
    ctaLabel?: string | null
    ctaHref?: string | null
  } | null
  footer?: {
    links?: NavLink[] | null
    email?: string | null
    copyright?: string | null
  } | null
  seo?: {
    defaultTitle?: string | null
    defaultDescription?: string | null
  } | null
}
