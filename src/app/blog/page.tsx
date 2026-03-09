import type { Metadata } from 'next'
import Link from 'next/link'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { RevealScript } from '@/components/RevealScript'

export const metadata: Metadata = {
  title: 'Blog — Leiko AI',
  description:
    'Product thinking, engineering decisions, and the messy reality of building an AI-first company from Helsinki.',
}

export default function BlogPage() {
  return (
    <>
      <Nav />
      <section className="blog-hero">
        <div className="ctn">
          <div className="lbl rv">Blog</div>
          <h1 className="rv d1">Building in the open</h1>
          <p className="blog-sub rv d2">
            Product thinking, engineering decisions, and the messy reality of
            building an AI-first company from Helsinki.
          </p>
        </div>
      </section>

      <section className="featured">
        <div className="ctn">
          <Link href="/blog/why-conversation" className="feat-card rv">
            <div className="feat-img gi-1">
              <div
                style={{
                  background: 'rgba(255,255,255,.85)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255,255,255,.6)',
                  borderRadius: 12,
                  padding: 16,
                  width: '100%',
                  maxWidth: 280,
                }}
              >
                <div
                  style={{
                    fontSize: 10,
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'var(--acc)',
                    marginBottom: 10,
                  }}
                >
                  Conversation
                </div>
                <div
                  style={{
                    background: 'linear-gradient(135deg,var(--acc),#9F8CFF)',
                    color: '#fff',
                    padding: '10px 12px',
                    borderRadius: 10,
                    fontSize: 12,
                    marginBottom: 8,
                  }}
                >
                  Invoice Design Studio for Feb
                </div>
                <div
                  style={{
                    background: 'rgba(0,0,0,.04)',
                    padding: '10px 12px',
                    borderRadius: 10,
                    fontSize: 12,
                    color: 'var(--text2)',
                  }}
                >
                  Drafted: €2,400 based on 20h tracked time. Send?
                </div>
              </div>
            </div>
            <div className="feat-text">
              <span className="tag tag-product">Product</span>
              <h2>Why we replaced forms with conversation</h2>
              <p>
                How we moved from traditional form-based invoice creation to a
                conversational interface that feels natural and reduces friction.
              </p>
              <div className="feat-meta">March 5, 2026 · 8 min read</div>
            </div>
          </Link>
        </div>
      </section>

      <section className="posts">
        <div className="ctn">
          <div className="post-grid">
            <Link href="/blog/human-in-loop" className="post-card rv d1">
              <div className="post-img gi-2">
                <div
                  style={{
                    background: 'var(--green-s)',
                    color: 'var(--green)',
                    padding: '8px 14px',
                    borderRadius: 8,
                    fontSize: 12,
                    fontWeight: 600,
                  }}
                >
                  Confirmed
                </div>
              </div>
              <div className="post-body">
                <span className="tag tag-eng">Engineering</span>
                <h3>Human-in-the-loop: why AI agents need a leash</h3>
                <p>
                  Why we always require human confirmation before AI actions
                  affect real data — and how we designed the flow.
                </p>
                <div className="meta">February 26, 2026 · 6 min read</div>
              </div>
            </Link>

            <Link href="/blog/tool-calling" className="post-card rv d2">
              <div className="post-img gi-4">
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    color: 'var(--text2)',
                    textAlign: 'left',
                    lineHeight: 1.8,
                  }}
                >
                  <div>prepare_draft → ✓</div>
                  <div>create_invoice → ⏳</div>
                  <div>send_email → queued</div>
                </div>
              </div>
              <div className="post-body">
                <span className="tag tag-eng">Engineering</span>
                <h3>
                  Multi-step tool calling: orchestrating AI agents that actually
                  finish the job
                </h3>
                <p>
                  How we chain tool calls so Leiko completes multi-step tasks
                  instead of stopping halfway.
                </p>
                <div className="meta">February 19, 2026 · 10 min read</div>
              </div>
            </Link>

            <Link href="/blog/solo-founder" className="post-card rv d1">
              <div className="post-img gi-5">
                <span style={{ fontSize: 48 }}>🇫🇮</span>
              </div>
              <div className="post-body">
                <span className="tag tag-story">Story</span>
                <h3>
                  What running a solo business in Finland actually looks like
                </h3>
                <p>
                  The reality of bootstrapping from Helsinki: Y-tunnus, VAT,
                  invoicing, and the quiet grind.
                </p>
                <div className="meta">February 12, 2026 · 5 min read</div>
              </div>
            </Link>

            <Link href="#" className="post-card rv d2">
              <div className="post-img gi-3">
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    color: 'var(--text2)',
                    textAlign: 'left',
                    lineHeight: 1.8,
                  }}
                >
                  <div>vendor: K-Market</div>
                  <div>amount: €23.40</div>
                  <div>confidence: 0.96</div>
                </div>
              </div>
              <div className="post-body">
                <span className="tag tag-eng">Engineering</span>
                <h3>
                  From crumpled paper to structured data: building receipt OCR
                  that works on Finnish receipts
                </h3>
                <p>
                  How we trained our OCR pipeline to handle Finnish receipts,
                  K-Market formats, and low-quality photos.
                </p>
                <div className="meta">February 5, 2026 · 7 min read</div>
              </div>
            </Link>

            <Link href="#" className="post-card rv d1">
              <div className="post-img gi-6">
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: 'var(--text)',
                  }}
                >
                  Today · 4 tasks · €4,232 revenue
                </div>
              </div>
              <div className="post-body">
                <span className="tag tag-design">Design</span>
                <h3>
                  Designing the Today view: a daily dashboard that
                  doesn&apos;t overwhelm
                </h3>
                <p>
                  How we balance information density with calm — showing what
                  matters without cognitive overload.
                </p>
                <div className="meta">January 29, 2026 · 6 min read</div>
              </div>
            </Link>

            <Link href="#" className="post-card rv d2">
              <div className="post-img gi-1">
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    color: 'var(--text2)',
                  }}
                >
                  claude-sonnet-4-5 → 17,854 tokens
                </div>
              </div>
              <div className="post-body">
                <span className="tag tag-eng">Engineering</span>
                <h3>
                  Cost of intelligence: managing AI API spend in a bootstrapped
                  product
                </h3>
                <p>
                  How we track, cap, and optimize token usage so AI features
                  stay sustainable at our scale.
                </p>
                <div className="meta">January 22, 2026 · 8 min read</div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <RevealScript />
    </>
  )
}
