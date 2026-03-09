const integrations = [
  { icon: '📅', name: 'Google Calendar', status: 'Live', live: true },
  { icon: '📧', name: 'Gmail', status: 'Live', live: true },
  { icon: '📸', name: 'Camera OCR', status: 'Live', live: true },
  { icon: '🔍', name: 'Web search', status: 'Live', live: true },
  { icon: '🏦', name: 'Bank feeds', status: 'Roadmap', live: false },
  { icon: '📊', name: 'Accounting export', status: 'Roadmap', live: false },
]

export function Integrations() {
  return (
    <section className="integ">
      <div className="ctn">
        <div className="integ-header rv">
          <div className="lbl">Integrations</div>
          <h2>Connects to the tools you already&nbsp;use</h2>
        </div>
        <div className="int-grid">
          {integrations.map((item, i) => (
            <div className={`int-card rv d${(i % 3) + 1}`} key={item.name}>
              <div className="ic-icon">{item.icon}</div>
              <div>
                <div className="ic-name">{item.name}</div>
                <div className={`ic-st ${item.live ? 'ic-live' : 'ic-soon'}`}>
                  ● {item.status}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
