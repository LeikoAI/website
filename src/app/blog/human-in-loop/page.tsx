import type { Metadata } from 'next'
import Link from 'next/link'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { RevealScript } from '@/components/RevealScript'

export const metadata: Metadata = {
  title: 'Human-in-the-loop: why AI agents need a leash — Leiko Blog',
}

export default function HumanInLoopPage() {
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
            <div className="tag tag-eng">Engineering</div>
            <h1>Human-in-the-loop: why AI agents need a leash</h1>
            <p className="ameta">February 26, 2026 · 6 min read</p>
          </div>
          <div className="article-body">
            <p>We built Leiko to be capable. 64 tools that touch every part of your business data. Then we built a system to constrain it.</p>

            <h2>The trust gradient</h2>
            <p>Read operations: no confirmation. Write operations: confirmation required. Destructive operations: double confirmation. We&apos;re not asking for blanket permission — we&apos;re asking for permission for each action that changes your data.</p>

            <h2>How confirmation works</h2>
            <p>Every tool call is intercepted before execution. A human-readable summary is shown: &ldquo;Create invoice for Design Studio, €2,400, 20 hours at €120/hr. Send?&rdquo; You approve or reject. Text-based confirmation works too — &ldquo;joo&rdquo; (Finnish for yeah) counts as yes.</p>
            <blockquote>Create invoice for Design Studio, €2,400, 20 hours at €120/hr. Send?</blockquote>

            <h2>The hard cases</h2>
            <p>Multi-step workflows. Example: &ldquo;Invoice Design Studio for February&rdquo; needs five steps — fetch unbilled hours, create draft, apply tax, generate PDF, send. Each step can be blocked for confirmation. We don&apos;t batch them; we surface each one so you can stop the chain at any point.</p>

            <h2>What we don&apos;t do</h2>
            <p>No auto-execution with undo. No blanket permissions. No silent data modification. If the AI is going to change something, you see it first.</p>

            <h2>The result</h2>
            <p>Slightly slower, but trustworthy. The AI drafts; you verify. That&apos;s the trade we made.</p>

            <p style={{ marginTop: 40, paddingTop: 24, borderTop: '1px solid var(--border-l)', fontSize: 14, color: 'var(--text3)' }}>Want to try it? <Link href="/" style={{ color: 'var(--acc)', fontWeight: 600 }}>Join the beta →</Link></p>
          </div>
        </div>
      </main>
      <Footer />
      <RevealScript />
    </>
  )
}
