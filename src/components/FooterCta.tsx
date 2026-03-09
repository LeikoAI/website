import type { FooterCtaData } from '@/types/cms'
import { WaitlistForm } from './WaitlistForm'

export function FooterCta({ data }: { data?: FooterCtaData | null }) {
  const heading = data?.heading ?? 'Ready for clarity?'
  const body =
    data?.body ??
    "Leiko is in private beta for independent professionals and small business owners. Join the waitlist \u2014 it\u2019s free."

  return (
    <section className="footer-cta" id="start">
      <div className="footer-cta-bg" />
      <div className="container">
        <div className="footer-cta-inner">
          <h2 className="reveal">{heading}</h2>
          <p className="reveal reveal-d1">{body}</p>
          <div className="cta-row reveal reveal-d2">
            <WaitlistForm source="footer" placeholder="you@company.fi" inputClassName="cta-input" />
          </div>
        </div>
      </div>
    </section>
  )
}
