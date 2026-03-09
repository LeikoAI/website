import type { HowItWorksData } from '@/types/cms'

export function HowItWorks({ data }: { data?: HowItWorksData | null }) {
  const label = data?.label ?? 'How it feels'
  const heading = data?.heading ?? 'Just talk to it. Like a business\u00a0partner.'

  return (
    <section className="how">
      <div className="container">
        <div className="how-header reveal">
          <div className="section-label">{label}</div>
          <h2>{heading}</h2>
        </div>
        <div className="conversation-examples">
          <div className="conv-item reveal">
            <div className="conv-bubble-user">
              Send an invoice to Design Studio for the January consulting work
            </div>
          </div>
          <div className="conv-item reveal reveal-d1">
            <div className="conv-bubble-ai">
              <div className="conv-avatar">✨</div>
              <div>
                <div className="conv-text">
                  I&apos;ve drafted an invoice for <strong>Design Studio</strong> based on your
                  January time entries. Here&apos;s a preview:
                  <div className="conv-entity-card">
                    <div className="entity-label">Invoice draft</div>
                    <div className="entity-row">
                      <span className="k">Client</span>
                      <span className="val">Design Studio Oy</span>
                    </div>
                    <div className="entity-row">
                      <span className="k">Amount</span>
                      <span className="val">€2,400.00</span>
                    </div>
                    <div className="entity-row">
                      <span className="k">Description</span>
                      <span className="val">Consulting — January 2026</span>
                    </div>
                    <div className="entity-row">
                      <span className="k">Due date</span>
                      <span className="val">March 9, 2026</span>
                    </div>
                  </div>
                </div>
                <div className="conv-chips">
                  <span className="conv-chip">Send now</span>
                  <span className="conv-chip">Edit amount</span>
                  <span className="conv-chip">Add line items</span>
                </div>
              </div>
            </div>
          </div>
          <div className="conv-item reveal reveal-d2">
            <div className="conv-bubble-user">
              Send it. And remind me to follow up in two weeks if it&apos;s not paid.
            </div>
          </div>
          <div className="conv-item reveal reveal-d3">
            <div className="conv-bubble-ai">
              <div className="conv-avatar">✨</div>
              <div>
                <div className="conv-text">
                  Done. Invoice <strong>INV-2026-0005</strong> sent to matti@designstudio.fi.
                  I&apos;ve set a reminder for March 9 to follow up if it&apos;s still unpaid.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
