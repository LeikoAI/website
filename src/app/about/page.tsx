import type { Metadata } from 'next'
import Link from 'next/link'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { RevealScript } from '@/components/RevealScript'

export const metadata: Metadata = {
  title: 'About — Leiko',
  description:
    'Built because we needed it ourselves. The story behind Leiko AI.',
}

export default function AboutPage() {
  return (
    <>
      <Nav />
      <section className="about-hero">
        <div className="ctn">
          <div className="lbl rv">About Leiko</div>
          <h1 className="rv d1">
            Built because we needed it <span>ourselves</span>
          </h1>
          <p className="about-sub rv d2">
            Leiko started from a simple frustration: running a one-person business
            shouldn&apos;t require ten different tools and half your day spent on
            admin. So we built the assistant we wished existed.
          </p>
        </div>
      </section>

      <section className="story">
        <div className="ctn">
          <div className="story-grid">
            <div className="story-text rv">
              <div className="lbl">Origin</div>
              <h2>The problem we kept hitting</h2>
              <p>
                As a freelancer and entrepreneur in Finland, the daily reality looks like this: invoicing in one app, tracking receipts in another, managing tasks in a third, checking calendar in a fourth, and manually copying data between all of them. Every month-end is a scramble of screenshots, spreadsheets, and &ldquo;where did I put that receipt?&rdquo;
              </p>
              <p>
                We tried everything. Accounting software that was built for accountants, not entrepreneurs. Project tools designed for teams of fifty. CRM systems that needed a CRM system to manage. None of them talked to each other, and none of them understood that a solo founder&apos;s workflow is fundamentally different from a corporate one.
              </p>
              <p>
                The breaking point came when we realized we were spending more time managing the tools than doing actual work. That&apos;s when the idea for Leiko crystallized: what if there was a single intelligent layer that sat on top of everything and just&hellip; handled it?
              </p>
            </div>
            <div className="story-visual rv d2">
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ background: 'rgba(255,255,255,.7)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,.5)', borderRadius: 14, padding: 18, marginBottom: 12 }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--acc)', marginBottom: 10 }}>Before Leiko</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 13, color: 'var(--text2)' }}>
                    {['Invoicing — Spreadsheet', 'Receipts — Shoe box + photos', 'Tasks — Notes app', 'Time tracking — Honor system', 'CRM — Memory'].map((item) => (
                      <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#EF4444', flexShrink: 0 }} />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ background: 'rgba(255,255,255,.7)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,.5)', borderRadius: 14, padding: 18 }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--acc)', marginBottom: 10 }}>With Leiko</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, color: 'var(--text)', fontWeight: 600 }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22C55E', flexShrink: 0 }} />
                    One conversation
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="values">
        <div className="ctn">
          <div className="values-header rv">
            <div className="lbl">What we believe</div>
            <h2>Principles that shape every decision</h2>
          </div>
          <div className="v-grid">
            <div className="v-card rv d1">
              <div className="v-num">01</div>
              <h3>Conversation over forms</h3>
              <p>Business tools are built around databases. Leiko is built around a conversation. Tell it what you need. It handles the structure, the fields, the storage. You handle the thinking.</p>
            </div>
            <div className="v-card rv d2">
              <div className="v-num">02</div>
              <h3>Confirm before acting</h3>
              <p>AI should draft, suggest, and prepare &mdash; but never send an invoice, book a meeting, or delete data without your explicit confirmation. You are always in the loop.</p>
            </div>
            <div className="v-card rv d3">
              <div className="v-num">03</div>
              <h3>Your data stays yours</h3>
              <p>EU data residency. No selling to advertisers. No training third-party models on your data. You can export or delete everything at any time. Privacy isn&apos;t a feature &mdash; it&apos;s a constraint we build around.</p>
            </div>
            <div className="v-card rv d1">
              <div className="v-num">04</div>
              <h3>Proactive, not reactive</h3>
              <p>A good assistant doesn&apos;t wait to be asked. Leiko surfaces what matters &mdash; unpaid invoices, upcoming deadlines, unbilled hours &mdash; before you have to think about it.</p>
            </div>
            <div className="v-card rv d2">
              <div className="v-num">05</div>
              <h3>Built for one, not many</h3>
              <p>Most business software assumes a team. Leiko assumes you&apos;re alone. No seats to manage, no permissions to configure, no admin panel to learn. Just you and your business.</p>
            </div>
            <div className="v-card rv d3">
              <div className="v-num">06</div>
              <h3>Ship weekly, learn daily</h3>
              <p>We&apos;re in beta and we ship every week. Every user conversation, every frustration, every &ldquo;why can&apos;t it just&hellip;&rdquo; becomes a line item in next week&apos;s sprint. Speed beats perfection.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="timeline-sec">
        <div className="ctn">
          <div className="tl-header rv">
            <div className="lbl">Timeline</div>
            <h2>How we got here</h2>
          </div>
          <div className="about-tl">
            <div className="tl-item rv">
              <div className="tl-date">November 2025</div>
              <div className="tl-title">The idea takes shape</div>
              <div className="tl-body">First prototype built over a weekend. A chat interface connected to a Supabase database with basic invoice creation. The &ldquo;aha&rdquo; moment: creating an invoice in 15 seconds by talking instead of 5 minutes filling forms.</div>
            </div>
            <div className="tl-item rv d1">
              <div className="tl-date">December 2025</div>
              <div className="tl-title">Core architecture</div>
              <div className="tl-body">Built the AI agent framework with tool calling, intent extraction, and human-in-the-loop confirmation. Chose Expo/React Native for mobile-first. Integrated Anthropic Claude as the primary AI engine.</div>
            </div>
            <div className="tl-item rv d2">
              <div className="tl-date">January 2026</div>
              <div className="tl-title">Invoicing, receipts, tasks</div>
              <div className="tl-body">Full invoicing pipeline: create, preview PDF, send via email. OCR receipt scanning with Google Cloud Vision. Task management with natural language deadlines and project hierarchy.</div>
            </div>
            <div className="tl-item rv d3">
              <div className="tl-date">February 2026</div>
              <div className="tl-title">Integrations and intelligence</div>
              <div className="tl-body">Google Calendar two-way sync. Gmail integration with AI summaries. Time tracking with billable hours. AI memory system that learns client details, rates, and routines. Today view with proactive insights.</div>
            </div>
            <div className="tl-item rv d4">
              <div className="tl-date">March 2026</div>
              <div className="tl-title">Private beta launch</div>
              <div className="tl-body">Opened private beta for early adopters. Iterating rapidly on feedback. Building multi-currency support, CRM features, and the web companion. This is where you come in.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="principles">
        <div className="ctn">
          <div className="values-header rv">
            <div className="lbl">Under the hood</div>
            <h2>How it&apos;s built</h2>
          </div>
          <div className="pr-grid">
            <div className="pr-card rv d1">
              <h4>Mobile-first (React Native / Expo)</h4>
              <p>Your business lives in your pocket. Leiko is built natively for mobile, not adapted from a web app. Fast, smooth, always accessible.</p>
            </div>
            <div className="pr-card rv d2">
              <h4>Anthropic Claude + Google Gemini</h4>
              <p>Best-in-class AI for understanding context, executing complex multi-step workflows, and maintaining coherent conversation across sessions.</p>
            </div>
            <div className="pr-card rv d3">
              <h4>Supabase (EU region)</h4>
              <p>PostgreSQL database with row-level security. Your data lives in the EU. Real-time sync. Robust authentication. Open-source infrastructure.</p>
            </div>
            <div className="pr-card rv d4">
              <h4>Human-in-the-loop architecture</h4>
              <p>Every destructive or significant action requires your confirmation. The AI proposes, you approve. Built at the system level, not bolted on.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="open-sec">
        <div className="ctn">
          <div className="oc">
            <div className="lbl rv">Join us</div>
            <blockquote className="rv d1">
              We&apos;re building the{' '}
              <span>back office that fits in your pocket</span>
            </blockquote>
            <p className="ob rv d2">
              Leiko is in private beta. If you&apos;re a freelancer, consultant,
              or solo founder who&apos;s tired of juggling tools, we&apos;d love
              to have you.
            </p>
            <div className="rv d3">
              <Link href="/" className="btn btn-p">
                Join the beta
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <p className="rv d4" style={{ fontSize: 13, color: 'var(--text3)', marginTop: 16 }}>
              Or reach out: hello@leiko.ai
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <RevealScript />
    </>
  )
}
