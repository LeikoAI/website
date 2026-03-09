import type { PainPoint, ProblemData } from '@/types/cms'

const DEFAULT_PAINS: PainPoint[] = [
  { emoji: '📧', text: 'A client email you forgot to answer three days ago' },
  { emoji: '🧾', text: 'A receipt crumpled in your jacket pocket' },
  { emoji: '📄', text: 'An invoice you keep meaning to send' },
  { emoji: '📅', text: "A meeting you'll remember five minutes late" },
  { emoji: '🧠', text: 'The constant feeling: what am I forgetting?' },
  { emoji: '⏰', text: 'Hours lost switching between six different apps' },
]

export function Problem({ data }: { data?: ProblemData | null }) {
  const label = data?.label ?? 'The reality'
  const heading = data?.heading ?? "You didn't start a business to manage\u00a0spreadsheets"
  const body =
    data?.body ??
    "You started it for the craft, the freedom, the clients. But somewhere along the way, the admin took over. The problem isn\u2019t missing tools \u2014 it\u2019s too many of them."
  const pains =
    data?.painPoints && data.painPoints.length > 0
      ? data.painPoints
      : DEFAULT_PAINS

  return (
    <section className="problem" id="problem">
      <div className="container">
        <div className="problem-inner">
          <div className="section-label reveal">{label}</div>
          <h2 className="reveal reveal-d1">{heading}</h2>
          <p
            className="reveal reveal-d2"
            style={{ fontSize: 17, color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: 48 }}
          >
            {body}
          </p>
        </div>
        <div className="pain-grid">
          {pains.map((p, i) => (
            <div key={p.id ?? i} className={`pain-card reveal reveal-d${(i % 3) + 1}`}>
              <div className="emoji">{p.emoji}</div>
              <div className="pain-text">{p.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
