import type { MissionCard, MissionData } from '@/types/cms'

const DEFAULT_CARDS: MissionCard[] = [
  {
    label: 'Vision',
    heading: 'Free businesses from tedious, repetitive work',
    text: 'Let them focus on strategy, craft, and the clients they care about. Every solo founder deserves the operational clarity of a full back office.',
  },
  {
    label: 'Security',
    heading: 'Built with cutting-edge security in Finland',
    text: 'Your data stays within the European Union and is never shared with third parties. We combine AI with human-centered design, ensuring every feature delivers real impact.',
  },
]

export function Mission({ data }: { data?: MissionData | null }) {
  const label = data?.label ?? 'Mission'
  const heading = data?.heading ?? 'Built with a shared passion for empowering independents'
  const cards = data?.cards && data.cards.length > 0 ? data.cards : DEFAULT_CARDS

  return (
    <section className="mission" id="mission">
      <div className="container">
        <div className="promise-header reveal">
          <div className="section-label">{label}</div>
          <h2>{heading}</h2>
        </div>
        <div className="mission-split">
          {cards.map((card, i) => (
            <div key={card.id ?? i} className={`mission-card reveal reveal-d${i + 1}`}>
              <div className="mc-label">{card.label}</div>
              <h3>{card.heading}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
