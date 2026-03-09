const cards = [
  {
    icon: '🇪🇺',
    title: 'EU data residency',
    body: 'All data stored within the European Union. Compliant with GDPR and European data protection regulations.',
  },
  {
    icon: '🔒',
    title: 'End-to-end encryption',
    body: 'Data encrypted at rest and in transit. Your financial data, receipts, and invoices are protected at every layer.',
  },
  {
    icon: '👤',
    title: 'Human-in-the-loop',
    body: 'Every action — sending an invoice, logging an expense, creating an event — requires your explicit confirmation.',
  },
  {
    icon: '🚫',
    title: 'No third-party data sharing',
    body: "Your data is never shared with advertisers or third parties. We don't sell data. We don't train on your data.",
  },
]

export function Security() {
  return (
    <section className="security" id="security">
      <div className="ctn">
        <div className="sec-split">
          <div className="sec-text rv">
            <div className="lbl">Security &amp; Privacy</div>
            <h2>Your data stays yours. Period.</h2>
            <p>
              We take security seriously. Leiko is built in Finland, hosted within the
              EU, and designed with privacy as a first principle — not an afterthought.
            </p>
            <p>
              Every action Leiko takes requires your confirmation. Nothing is sent, saved,
              or deleted without you saying yes. This is our human-in-the-loop guarantee.
            </p>
          </div>
          <div className="sec-cards rv d2">
            {cards.map((card) => (
              <div className="sec-card" key={card.title}>
                <div className="sc-icon">{card.icon}</div>
                <div>
                  <h4>{card.title}</h4>
                  <p>{card.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
