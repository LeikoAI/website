'use client'

import { useEffect } from 'react'
import type { NavLink, SiteSettingsData } from '@/types/cms'

const DEFAULT_LINKS: NavLink[] = [
  { label: 'Features', href: '#features' },
  { label: 'Mission', href: '#mission' },
  { label: 'FAQ', href: '#faq' },
]

export function Nav({
  settings,
  locale,
}: {
  settings?: SiteSettingsData | null
  locale?: string
}) {
  useEffect(() => {
    const nav = document.getElementById('nav')
    const handler = () => {
      nav?.classList.toggle('scrolled', window.scrollY > 50)
    }
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const links =
    settings?.nav?.links && settings.nav.links.length > 0 ? settings.nav.links : DEFAULT_LINKS
  const ctaLabel = settings?.nav?.ctaLabel ?? 'Join the waitlist'
  const ctaHref = settings?.nav?.ctaHref ?? '#start'
  const otherLocale = locale === 'en' ? 'fi' : 'en'

  return (
    <nav id="nav">
      <div className="nav-inner">
        <a href="#" className="nav-logo">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2L14.4 8.8L21 11.2L14.4 13.6L12 20.4L9.6 13.6L3 11.2L9.6 8.8L12 2Z"
              fill="#6B5CE7"
              opacity="0.9"
            />
            <path
              d="M19 15L20 17.5L22.5 18.5L20 19.5L19 22L18 19.5L15.5 18.5L18 17.5L19 15Z"
              fill="#6B5CE7"
              opacity="0.45"
            />
          </svg>
          Leiko
        </a>
        <ul className="nav-links">
          {links.map((link, i) => (
            <li key={link.id ?? i}>
              <a href={link.href ?? '#'}>{link.label}</a>
            </li>
          ))}
          {locale && (
            <li>
              <a href={`/${otherLocale}`} style={{ opacity: 0.6, fontSize: 13 }}>
                {otherLocale.toUpperCase()}
              </a>
            </li>
          )}
          <li>
            <a href={ctaHref} className="nav-cta">
              {ctaLabel}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
