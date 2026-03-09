import { WaitlistForm } from './WaitlistForm'
import type { HeroData } from '@/types/cms'

const DEFAULTS = {
  pill: 'Now in private beta',
  heading: 'Your business, finally in focus',
  headingHighlight: 'focus',
  subheading:
    "A 24/7 proactive assistant that doesn't just answer your questions but anticipates your needs — ensuring everything in your business is handled properly.",
  note: 'Free during beta · No credit card required',
} as const

function renderHeading(heading: string, highlight: string) {
  if (!highlight || !heading.includes(highlight)) {
    return <>{heading}</>
  }
  const idx = heading.lastIndexOf(highlight)
  const before = heading.slice(0, idx)
  const after = heading.slice(idx + highlight.length)
  return (
    <>
      {before}
      <span>{highlight}</span>
      {after}
    </>
  )
}

export function Hero({ data }: { data?: HeroData | null }) {
  const pill = data?.pill ?? DEFAULTS.pill
  const heading = data?.heading ?? DEFAULTS.heading
  const headingHighlight = data?.headingHighlight ?? DEFAULTS.headingHighlight
  const subheading = data?.subheading ?? DEFAULTS.subheading
  const note = data?.note ?? DEFAULTS.note

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-pill reveal">
          <span className="dot" />
          {pill}
        </div>
        <h1 className="reveal reveal-d1">
          {renderHeading(heading, headingHighlight)}
        </h1>
        <p className="hero-sub reveal reveal-d2">{subheading}</p>
        <div className="hero-cta-row reveal reveal-d3">
          <WaitlistForm source="hero" />
        </div>
        <p className="hero-note reveal reveal-d4">{note}</p>

        <div className="hero-visual reveal reveal-d3">
          <div className="hero-visual-inner">
            <div className="hero-phone-row">
              <div className="mini-phone">
                <div className="mp-notch" />
                <div className="mp-content">
                  <div className="mp-label">Chat</div>
                  <div
                    style={{
                      padding: '8px 10px',
                      background: 'linear-gradient(135deg, var(--accent), #9F8CFF)',
                      borderRadius: '12px 12px 3px 12px',
                      color: 'white',
                      fontSize: 10,
                      lineHeight: 1.4,
                      marginBottom: 6,
                      fontWeight: 500,
                    }}
                  >
                    Send an invoice to Design Studio for January
                  </div>
                  <div
                    style={{
                      padding: '8px 10px',
                      background: 'white',
                      border: '1px solid #EDE8E3',
                      borderRadius: '12px 12px 12px 3px',
                      fontSize: 9,
                      lineHeight: 1.4,
                      color: 'var(--text-secondary)',
                      marginBottom: 6,
                    }}
                  >
                    I&apos;ve prepared an invoice for{' '}
                    <strong style={{ color: 'var(--text)' }}>Design Studio</strong> — €2,400 for
                    January consulting. Want me to send it?
                  </div>
                  <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                    <span style={{ padding: '4px 8px', background: 'var(--accent-soft)', borderRadius: 10, fontSize: 8, color: 'var(--accent)', fontWeight: 500 }}>Send now</span>
                    <span style={{ padding: '4px 8px', background: 'var(--accent-soft)', borderRadius: 10, fontSize: 8, color: 'var(--accent)', fontWeight: 500 }}>Edit amount</span>
                    <span style={{ padding: '4px 8px', background: 'var(--accent-soft)', borderRadius: 10, fontSize: 8, color: 'var(--accent)', fontWeight: 500 }}>Add items</span>
                  </div>
                </div>
              </div>

              <div className="mini-phone center">
                <div className="mp-notch" />
                <div className="mp-content">
                  <div className="mp-label">Monday, Feb 23</div>
                  <div className="mp-title">Good morning, Joonas</div>
                  <div className="mp-pulse-bar">
                    <div className="mp-pulse-cell">
                      <div className="l">Tasks</div>
                      <div className="v">4</div>
                    </div>
                    <div className="mp-pulse-cell">
                      <div className="l">Revenue</div>
                      <div className="v">€4,232</div>
                    </div>
                    <div className="mp-pulse-cell">
                      <div className="l">Open</div>
                      <div className="v">2</div>
                    </div>
                  </div>
                  <div className="mp-insight">
                    ✨ Mika&apos;s quote request is waiting — he sent it Friday. The Design Studio invoice is
                    ready to send.
                  </div>
                  <div className="mp-task">
                    <div className="mp-check done" />
                    <span style={{ textDecoration: 'line-through', color: 'var(--text-muted)' }}>
                      Log yesterday&apos;s receipt
                    </span>
                  </div>
                  <div className="mp-task">
                    <div className="mp-check" />
                    <span>Reply to Mika&apos;s request</span>
                  </div>
                  <div className="mp-task">
                    <div className="mp-check" />
                    <span>Send invoice to Design Studio</span>
                  </div>
                  <div className="mp-task">
                    <div className="mp-check" />
                    <span>Finalize homepage mockup</span>
                  </div>
                </div>
              </div>

              <div className="mini-phone">
                <div className="mp-notch" />
                <div className="mp-content">
                  <div className="mp-label">Finances</div>
                  <div className="mp-title" style={{ fontSize: 12 }}>
                    This month
                  </div>
                  <div className="mp-pulse-bar">
                    <div className="mp-pulse-cell">
                      <div className="l">Revenue</div>
                      <div className="v">€4,232</div>
                    </div>
                    <div className="mp-pulse-cell">
                      <div className="l">Expenses</div>
                      <div className="v">€468</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 3, marginBottom: 8 }}>
                    <span style={{ flex: 1, textAlign: 'center', padding: '5px 2px', background: 'white', border: '1px solid #EDE8E3', borderRadius: 6, fontSize: 7 }}>
                      <div style={{ fontSize: 11, fontWeight: 600 }}>1</div>Total
                    </span>
                    <span style={{ flex: 1, textAlign: 'center', padding: '5px 2px', background: 'white', border: '1px solid #EDE8E3', borderRadius: 6, fontSize: 7 }}>
                      <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--green)' }}>1</div>Paid
                    </span>
                    <span style={{ flex: 1, textAlign: 'center', padding: '5px 2px', background: 'white', border: '1px solid #EDE8E3', borderRadius: 6, fontSize: 7 }}>
                      <div style={{ fontSize: 11, fontWeight: 600, color: '#E08A3C' }}>0</div>Open
                    </span>
                  </div>
                  <div style={{ fontSize: 8, fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>
                    Recent
                  </div>
                  <div style={{ padding: '6px 0', borderBottom: '1px solid #F0EDE8', fontSize: 9, display: 'flex', justifyContent: 'space-between' }}>
                    <span>INV-2026-0001</span>
                    <span style={{ fontWeight: 600, color: 'var(--green)' }}>Paid</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
