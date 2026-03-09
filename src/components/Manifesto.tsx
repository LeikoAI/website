import type { ManifestoData } from '@/types/cms'
import { WaitlistForm } from './WaitlistForm'

const DEFAULTS = {
  quote:
    'By integrating and automating your essential tools, we eliminate complexity and empower you to focus on what matters most — growing your\u00a0business.',
  quoteHighlight: 'growing your\u00a0business',
  body: "Leiko isn\u2019t about more features. It\u2019s about less noise. A single intelligent layer that sits on top of your tools, understands your business, and gives you back the headspace to do the work you actually love.",
}

function renderWithHighlight(text: string, highlight: string | null | undefined) {
  if (!highlight || !text.includes(highlight)) return <>{text}</>
  const idx = text.indexOf(highlight)
  return (
    <>
      {text.slice(0, idx)}
      <span>{highlight}</span>
      {text.slice(idx + highlight.length)}
    </>
  )
}

export function Manifesto({ data }: { data?: ManifestoData | null }) {
  const quote = data?.quote ?? DEFAULTS.quote
  const highlight = data?.quoteHighlight ?? DEFAULTS.quoteHighlight
  const body = data?.body ?? DEFAULTS.body

  return (
    <section className="manifesto" id="vision">
      <div className="container">
        <div className="manifesto-content">
          <blockquote className="reveal">
            {renderWithHighlight(quote, highlight)}
          </blockquote>
          <p className="m-body reveal reveal-d1">{body}</p>
          <div className="reveal reveal-d2">
            <WaitlistForm source="manifesto" />
          </div>
        </div>
      </div>
    </section>
  )
}
