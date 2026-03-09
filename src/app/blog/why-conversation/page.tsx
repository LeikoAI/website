import type { Metadata } from 'next'
import Link from 'next/link'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { RevealScript } from '@/components/RevealScript'

export const metadata: Metadata = {
  title: 'Why we replaced forms with conversation — Leiko Blog',
}

export default function WhyConversationPage() {
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
            <div className="tag tag-product">Product</div>
            <h1>Why we replaced forms with conversation</h1>
            <p className="ameta">March 5, 2026 · 8 min read</p>
          </div>
          <div className="article-body">
            <p>Every business tool starts with a form. Name, email, amount, date, category, submit. We threw all of that away.</p>

            <h2>The form tax</h2>
            <p>The old invoice workflow: open your invoicing app, pick a client, select a project, choose hours or line items, set amounts, add tax, preview, send. Four to seven minutes if everything goes right. With Leiko, you type: &ldquo;Invoice Design Studio for February consulting, 20 hours at 120 per hour&rdquo; — and in about 15 seconds you have a draft ready to review.</p>
            <blockquote>Invoice Design Studio for February consulting, 20 hours at 120 per hour</blockquote>

            <h2>Why this works</h2>
            <p>Natural language carries context that forms can&apos;t capture. You don&apos;t have to remember which project code to select or which rate card applies. You say what you mean; the system figures out the rest.</p>

            <h2>The hard part: when conversation isn&apos;t enough</h2>
            <p>Ambiguity, complex edits, multi-item inputs — these still need structure. We&apos;re not replacing forms everywhere. We&apos;re replacing them where the cognitive overhead of filling out fields is higher than the cost of just saying what you want.</p>

            <h2>The architecture behind it</h2>
            <p>Intent extraction, context enrichment, tool selection, human confirmation. The flow: parse your message → enrich with unbilled hours, client info, tax rules → call <code>prepare_invoice_draft</code>, <code>check_unbilled_hours</code>, <code>create_invoice</code> — and surface a draft for you to approve before anything hits your books.</p>

            <h2>What we&apos;ve learned</h2>
            <ul>
              <li>Conversation works best when the user already knows what they want</li>
              <li>Fallback to structured forms is essential for edge cases</li>
              <li>Confirmation is non-negotiable — never auto-commit without human review</li>
              <li>Speed matters: sub-20-second feedback is the threshold where it feels magical</li>
            </ul>

            <p style={{ marginTop: 40, paddingTop: 24, borderTop: '1px solid var(--border-l)', fontSize: 14, color: 'var(--text3)' }}>Want to try it? <Link href="/" style={{ color: 'var(--acc)', fontWeight: 600 }}>Join the beta →</Link></p>
          </div>
        </div>
      </main>
      <Footer />
      <RevealScript />
    </>
  )
}
