import { CheckIcon } from './CheckIcon'

interface FeatureItem {
  text: string
}

interface VisualCard {
  head: string
  rows: { key: string; value: string; color?: string }[]
}

interface FeatureSectionProps {
  label: string
  title: string
  description: string
  items: FeatureItem[]
  visual: React.ReactNode
  gradClass: string
  reversed?: boolean
}

export function FeatureSection({
  label,
  title,
  description,
  items,
  visual,
  gradClass,
  reversed,
}: FeatureSectionProps) {
  return (
    <section className="fd">
      <div className="ctn">
        <div className={`fd-split${reversed ? ' rev' : ''}`}>
          <div className="fd-text rv">
            <div className="lbl">{label}</div>
            <h2 dangerouslySetInnerHTML={{ __html: title }} />
            <p>{description}</p>
            <div className="fd-list">
              {items.map((item, i) => (
                <div className="fd-list-item" key={i}>
                  <CheckIcon />
                  {item.text}
                </div>
              ))}
            </div>
          </div>
          <div className={`fd-visual ${gradClass} rv d2`}>{visual}</div>
        </div>
      </div>
    </section>
  )
}

export function VisCard({
  head,
  rows,
}: {
  head: string
  rows: { key: string; value: string; color?: string }[]
}) {
  return (
    <div className="vis-card">
      <div className="vc-head">{head}</div>
      {rows.map((row, i) => (
        <div className="vc-row" key={i}>
          <span className="k">{row.key}</span>
          <span className="val" style={row.color ? { color: row.color } : undefined}>
            {row.value}
          </span>
        </div>
      ))}
    </div>
  )
}

export function VisBubble({
  variant,
  children,
  style,
}: {
  variant: 'user' | 'ai'
  children: React.ReactNode
  style?: React.CSSProperties
}) {
  return (
    <div className={`vis-bubble ${variant}`} style={style}>
      {children}
    </div>
  )
}

export function VisChips({ chips }: { chips: string[] }) {
  return (
    <div className="vis-chips">
      {chips.map((chip, i) => (
        <span className="vis-chip" key={i}>
          {chip}
        </span>
      ))}
    </div>
  )
}
