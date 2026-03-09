const steps = [
  {
    num: '1',
    title: 'Talk naturally',
    body: "Type, speak, or snap a photo. Leiko identifies your intent — whether you're creating an invoice, logging a receipt, or scheduling a meeting — and picks the right action.",
  },
  {
    num: '2',
    title: 'Review and confirm',
    body: "Human-in-the-loop, always. Before anything is saved or sent, Leiko shows you exactly what it's about to do. You approve, edit, or reject. You're always in control.",
  },
  {
    num: '3',
    title: 'Move to what\u2019s next',
    body: 'After every action, smart suggestion chips offer the logical next step. Over time, Leiko learns your patterns and anticipates what you need before you ask.',
  },
]

export function HowItWorks() {
  return (
    <section className="how" id="how">
      <div className="ctn">
        <div className="how-header rv">
          <div className="lbl">How it works</div>
          <h2>Three steps. No learning curve.</h2>
        </div>
        <div className="steps">
          {steps.map((step, i) => (
            <div className={`step-card rv d${i + 1}`} key={step.num}>
              <div className="step-num">{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
