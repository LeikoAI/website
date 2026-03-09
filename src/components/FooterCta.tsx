import { WaitlistForm } from './WaitlistForm'

export function FooterCta() {
  return (
    <section className="fcta" id="start">
      <div className="fcta-bg" />
      <div className="ctn">
        <div className="fcta-in">
          <h2 className="rv">Ready for clarity?</h2>
          <p className="fs rv d1">
            Join the private beta. Free for early adopters.
          </p>
          <div className="rv d2">
            <WaitlistForm inputClassName="fc-in" variant="footer" />
          </div>
        </div>
      </div>
    </section>
  )
}
