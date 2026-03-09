const entries = [
  {
    date: 'Feb 23, 2026',
    title: 'Intelligent Today',
    body: 'Rebuilt the Today dashboard to surface what matters most — your key business metrics, upcoming tasks, and proactive AI insights, all in one glance.',
    tags: [{ label: 'Feature', cls: 'feat' }],
  },
  {
    date: 'Feb 18, 2026',
    title: 'Gmail integration \u2014 AI summaries',
    body: 'Connect Gmail via OAuth and get AI-powered summaries of your inbox. Focus on what matters: deadlines, action items, or meeting requests.',
    tags: [
      { label: 'Feature', cls: 'feat' },
      { label: 'Integration', cls: 'imp' },
    ],
  },
  {
    date: 'Feb 12, 2026',
    title: 'Time tracking and unbilled hours',
    body: 'Log hours to projects via chat. Track billable vs non-billable time. Generate invoices directly from accumulated time entries.',
    tags: [{ label: 'Feature', cls: 'feat' }],
  },
  {
    date: 'Feb 6, 2026',
    title: 'AI memory system',
    body: 'Leiko now remembers facts, preferences, and important dates across conversations. Knows your clients, your rates, your routines.',
    tags: [{ label: 'Feature', cls: 'feat' }],
  },
  {
    date: 'Jan 28, 2026',
    title: 'Bug fixes and performance',
    body: 'Fixed invoice calculation rounding issues. Improved OCR accuracy for Finnish receipts. Reduced chat response latency by 40%.',
    tags: [
      { label: 'Fix', cls: 'fix' },
      { label: 'Improvement', cls: 'imp' },
    ],
  },
]

export function Changelog() {
  return (
    <section className="changelog" id="changelog">
      <div className="ctn">
        <div className="cl-header rv">
          <div className="lbl">Changelog</div>
          <h2>What we&apos;ve shipped recently</h2>
          <p>We ship weekly. Here&apos;s what&apos;s new.</p>
        </div>
        <div className="timeline">
          {entries.map((entry, i) => (
            <div className={`tl-item rv${i > 0 ? ` d${i}` : ''}`} key={entry.date}>
              <div className="tl-date">{entry.date}</div>
              <div className="tl-title">{entry.title}</div>
              <div className="tl-body">{entry.body}</div>
              <div className="tl-tags">
                {entry.tags.map((tag) => (
                  <span className={`tl-tag ${tag.cls}`} key={tag.label}>
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
