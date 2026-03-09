import type { Metadata } from 'next'
import Link from 'next/link'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { RevealScript } from '@/components/RevealScript'

export const metadata: Metadata = {
  title: 'Multi-step tool calling — Leiko Blog',
}

export default function ToolCallingPage() {
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
            <h1>Multi-step tool calling: orchestrating AI agents that actually finish the job</h1>
            <p className="ameta">February 19, 2026 · 10 min read</p>
          </div>
          <div className="article-body">
            <p>Scenario: &ldquo;Create and send invoice to new client in Iceland for 1,000,000 ISK.&rdquo; That&apos;s seven steps: create customer, add bank details, create project, log hours, create invoice, convert currency, send. Step six is where things usually break.</p>

            <h2>Why stateless AI breaks on multi-step workflows</h2>
            <p>LLMs are stateless. Each call is independent. Context window limitations mean long chains get truncated. The model &ldquo;forgets&rdquo; the original goal and stops halfway — or worse, repeats steps it already completed.</p>

            <h2>Our approach: explicit goal state</h2>
            <p>A thread-level goal tracker. A state machine that records: goal, completed steps, pending retries, blocker resolution. The AI doesn&apos;t have to remember; the system does.</p>

            <h2>The confirmation complication</h2>
            <p>Human-in-the-loop pauses the flow. When a step needs approval, we can&apos;t just continue. We added an <code>afterSuccess</code> field on blocked operations: &ldquo;When <code>update_customer</code> succeeds → automatically retry <code>create_invoice</code> with original parameters.&rdquo;</p>
            <blockquote>When update_customer succeeds → automatically retry create_invoice with original parameters</blockquote>

            <h2>What we inject into the AI&apos;s context</h2>
            <p>Explicit instructions in the system prompt: &ldquo;Current goal: create and send invoice. Completed: create_customer, add_bank_details, create_project, log_hours. Pending: create_invoice (blocked — awaiting currency conversion). Do not repeat completed steps.&rdquo; Reduced &ldquo;lost goal&rdquo; failures from 40% to under 3%.</p>
            <blockquote>Current goal: create and send invoice. Completed: create_customer, add_bank_details, create_project, log_hours. Pending: create_invoice (blocked — awaiting currency conversion). Do not repeat completed steps.</blockquote>

            <h2>Lessons learned</h2>
            <ul>
              <li>Don&apos;t trust the AI to remember goals — persist them in your own state machine</li>
              <li>Use deterministic orchestration for multi-step flows; the AI handles the &ldquo;what,&rdquo; the system handles the &ldquo;when&rdquo;</li>
              <li>Separation of concerns: intent extraction, tool selection, and execution state are separate layers</li>
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
