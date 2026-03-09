import type { NavLink, SiteSettingsData } from '@/types/cms'

const DEFAULT_LINKS: NavLink[] = [
  { label: 'Features', href: '#features' },
  { label: 'Team', href: '#mission' },
  { label: 'Blog', href: '#' },
  { label: 'FAQ', href: '#faq' },
]

export function Footer({ settings }: { settings?: SiteSettingsData | null }) {
  const links =
    settings?.footer?.links && settings.footer.links.length > 0
      ? settings.footer.links
      : DEFAULT_LINKS
  const email = settings?.footer?.email ?? 'hello@leiko.ai'
  const copyright = settings?.footer?.copyright ?? '© 2026 Leiko AI'

  return (
    <footer>
      <div className="container">
        <div className="footer-inner">
          <div className="footer-logo">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2L14.4 8.8L21 11.2L14.4 13.6L12 20.4L9.6 13.6L3 11.2L9.6 8.8L12 2Z"
                fill="#A09A94"
                opacity="0.7"
              />
            </svg>
            Leiko
          </div>
          <ul className="footer-nav">
            {links.map((link, i) => (
              <li key={link.id ?? i}>
                <a href={link.href ?? '#'}>{link.label}</a>
              </li>
            ))}
            <li>
              <a href={`mailto:${email}`}>{email}</a>
            </li>
          </ul>
          <div className="footer-copy">{copyright}</div>
        </div>
      </div>
    </footer>
  )
}
