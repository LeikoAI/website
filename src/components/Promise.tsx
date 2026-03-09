import type { PromiseCard, PromiseData } from '@/types/cms'

const DEFAULT_CARDS: PromiseCard[] = [
  {
    title: 'Everything in one morning briefing',
    text: 'Emails, tasks, calendar, invoices — pulled together into a calm daily view. No more switching between apps to figure out what matters today.',
  },
  {
    title: "Talk, don't tap",
    text: 'Snap a receipt and Leiko reads it. Say "invoice Mika for last month" and it\'s done. The busywork dissolves into natural conversation.',
  },
  {
    title: 'It moves before you have to think',
    text: 'Leiko notices the overdue invoice, the unanswered email, the meeting in 10 minutes. Proactive, not reactive.',
  },
]

function renderHeadingWithHighlight(heading: string, highlight: string | null | undefined) {
  if (!highlight || !heading.includes(highlight)) return <>{heading}</>
  const idx = heading.lastIndexOf(highlight)
  return (
    <>
      {heading.slice(0, idx)}
      <span>{highlight}</span>
      {heading.slice(idx + highlight.length)}
    </>
  )
}

export function Promise({ data }: { data?: PromiseData | null }) {
  const label = data?.label ?? 'What changes'
  const heading = data?.heading ?? 'Not another tool. A layer of clarity.'
  const highlight = data?.headingHighlight ?? 'clarity'
  const cards = data?.cards && data.cards.length > 0 ? data.cards : DEFAULT_CARDS

  return (
    <section className="promise" id="features">
      <div className="container">
        <div className="promise-header reveal">
          <div className="section-label">{label}</div>
          <h2>{renderHeadingWithHighlight(heading, highlight)}</h2>
        </div>
        <div className="promise-grid">
          {cards.map((p, i) => (
            <div key={p.id ?? i} className={`promise-card reveal reveal-d${i + 1}`}>
              <div className="promise-card-gradient">
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
