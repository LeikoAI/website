import type { Metadata } from 'next'
import Link from 'next/link'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { RevealScript } from '@/components/RevealScript'

export const metadata: Metadata = {
  title: 'What running a solo business in Finland actually looks like — Leiko Blog',
}

export default function SoloFounderPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: 'clamp(130px,18vw,170px)', paddingBottom: 'clamp(60px,8vw,100px)' }}>
        <div className="ctn">
          <Link href="/blog" className="back-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
            Back to blog
          </Link>
          <div className="article-header">
            <div className="tag tag-story">Story</div>
            <h1>What running a solo business in Finland actually looks like</h1>
            <p className="ameta">February 12, 2026 · 5 min read</p>
          </div>
          <div className="article-body">
            <p>Finland ranks among the best countries for business. But the reality of solo entrepreneurship here is admin-heavy — invoicing, VAT, receipts, time tracking — and the tools don&apos;t talk to each other.</p>

            <h2>The monthly loop</h2>
            <p><strong>Invoicing:</strong> EUR, SEK, ISK, GBP. Verkkolasku (electronic invoicing) for B2B. Different formats for different clients. <strong>Receipts and expenses:</strong> Six-year retention requirement (Kirjanpitolaki). Every receipt must be categorized and stored. <strong>VAT:</strong> Quarterly filing. OmaVero portal. 24%, 14%, 10% rates depending on what you sell. <strong>Time tracking:</strong> Tax authority can request documentation. If you bill by the hour, you need proof. <strong>The rest:</strong> Calendar, email follow-ups, client database — all manual.</p>

            <h2>The tool sprawl</h2>
            <p>Typical combo: spreadsheet for invoices, camera for receipts, notes app for expenses, Google Calendar for time, Gmail for correspondence, memory for CRM. Nothing talks to each other. You copy-paste, re-type, and hope you didn&apos;t miss anything.</p>

            <h2>What &ldquo;just works&rdquo; would look like</h2>
            <p>The ideal: log hours as you work, and at month-end the system checks if you&apos;re within budget, drafts the invoice, and asks for confirmation. Or: take a photo of a receipt at lunch, and it&apos;s auto-categorized, stored, and attached to the right project. Or: morning briefing — &ldquo;You have 3 overdue invoices, VAT filing due in 12 days, and 2 clients waiting for proposals.&rdquo;</p>

            <p>That&apos;s what we&apos;re building. Not another tool to add to the stack, but a layer that connects the pieces and lets you focus on the work that actually pays.</p>

            <p style={{ marginTop: 40, paddingTop: 24, borderTop: '1px solid var(--border-l)', fontSize: 14, color: 'var(--text3)' }}>Want to try it? <Link href="/" style={{ color: 'var(--acc)', fontWeight: 600 }}>Join the beta →</Link></p>
          </div>
        </div>
      </main>
      <Footer />
      <RevealScript />
    </>
  )
}
