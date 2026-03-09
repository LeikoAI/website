import { WaitlistForm } from './WaitlistForm'

export function Hero() {
  return (
    <section className="hero">
      <div className="ctn">
        <div className="pill rv">
          <span className="dot" />
          Private beta — now open
        </div>
        <h1 className="rv d1">
          Your business, finally in <span>focus</span>
        </h1>
        <p className="hero-sub rv d2">
          A 24/7 proactive AI assistant that doesn&apos;t just answer questions — it
          anticipates your needs and handles the work around the work.
        </p>
        <div className="rv d3">
          <WaitlistForm />
        </div>
        <p className="hero-note rv d4">
          Free during beta &middot; No credit card required
        </p>

        <div className="hero-vis rv d3">
          <div className="hero-vis-wrap">
            <div className="phones">
              {/* Left phone - Chat */}
              <div className="ph">
                <div className="ph-n" />
                <div className="ph-c">
                  <div className="sub">Chat</div>
                  <div
                    style={{
                      padding: '7px 9px',
                      background: 'linear-gradient(135deg,var(--acc),#9F8CFF)',
                      borderRadius: '10px 10px 3px 10px',
                      color: '#fff',
                      fontSize: '8px',
                      lineHeight: 1.4,
                      marginBottom: '5px',
                      fontWeight: 500,
                    }}
                  >
                    Invoice Design Studio for January
                  </div>
                  <div
                    style={{
                      padding: '7px 9px',
                      background: '#fff',
                      border: '1px solid #EDE8E3',
                      borderRadius: '10px 10px 10px 3px',
                      fontSize: '7px',
                      lineHeight: 1.4,
                      color: 'var(--text2)',
                      marginBottom: '5px',
                    }}
                  >
                    Drafted:{' '}
                    <b style={{ color: 'var(--text)' }}>
                      Design Studio Oy &middot; &euro;2,400
                    </b>
                    <br />
                    Due: March 9, 2026
                  </div>
                  <div style={{ display: 'flex', gap: '3px', flexWrap: 'wrap' }}>
                    <span
                      style={{
                        padding: '3px 7px',
                        background: 'var(--acc-s)',
                        borderRadius: '8px',
                        fontSize: '7px',
                        color: 'var(--acc)',
                        fontWeight: 500,
                      }}
                    >
                      Send now
                    </span>
                    <span
                      style={{
                        padding: '3px 7px',
                        background: 'var(--acc-s)',
                        borderRadius: '8px',
                        fontSize: '7px',
                        color: 'var(--acc)',
                        fontWeight: 500,
                      }}
                    >
                      Edit
                    </span>
                  </div>
                </div>
              </div>

              {/* Center phone - Today */}
              <div className="ph ctr">
                <div className="ph-n" />
                <div className="ph-c">
                  <div className="sub">Monday, Feb 23</div>
                  <div className="t">Good morning, Joonas</div>
                  <div className="ph-bar">
                    <div className="ph-bar-c">
                      <div className="l">Tasks</div>
                      <div className="v">4</div>
                    </div>
                    <div className="ph-bar-c">
                      <div className="l">Revenue</div>
                      <div className="v">&euro;4,232</div>
                    </div>
                    <div className="ph-bar-c">
                      <div className="l">Open</div>
                      <div className="v">2</div>
                    </div>
                  </div>
                  <div className="ph-ins">
                    ✨ Mika&apos;s quote request is waiting. The Design Studio invoice is
                    ready.
                  </div>
                  <div className="ph-task">
                    <div className="ph-chk dn" />
                    <span
                      style={{
                        textDecoration: 'line-through',
                        color: 'var(--text3)',
                      }}
                    >
                      Log receipt
                    </span>
                  </div>
                  <div className="ph-task">
                    <div className="ph-chk" />
                    <span>Reply to Mika</span>
                  </div>
                  <div className="ph-task">
                    <div className="ph-chk" />
                    <span>Send invoice</span>
                  </div>
                  <div className="ph-task">
                    <div className="ph-chk" />
                    <span>Finalize mockup</span>
                  </div>
                </div>
              </div>

              {/* Right phone - Finances */}
              <div className="ph">
                <div className="ph-n" />
                <div className="ph-c">
                  <div className="sub">Finances</div>
                  <div className="ph-bar">
                    <div className="ph-bar-c">
                      <div className="l">Revenue</div>
                      <div className="v">&euro;4,232</div>
                    </div>
                    <div className="ph-bar-c">
                      <div className="l">Expenses</div>
                      <div className="v">&euro;468</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '2px', marginBottom: '5px' }}>
                    <span
                      style={{
                        flex: 1,
                        textAlign: 'center',
                        padding: '4px 2px',
                        background: '#fff',
                        border: '1px solid #EDE8E3',
                        borderRadius: '4px',
                        fontSize: '6px',
                      }}
                    >
                      <div style={{ fontSize: '10px', fontWeight: 700 }}>1</div>
                      Paid
                    </span>
                    <span
                      style={{
                        flex: 1,
                        textAlign: 'center',
                        padding: '4px 2px',
                        background: '#fff',
                        border: '1px solid #EDE8E3',
                        borderRadius: '4px',
                        fontSize: '6px',
                      }}
                    >
                      <div
                        style={{ fontSize: '10px', fontWeight: 700, color: '#F59E0B' }}
                      >
                        0
                      </div>
                      Open
                    </span>
                  </div>
                  <div
                    style={{
                      fontSize: '7px',
                      fontWeight: 600,
                      color: 'var(--text3)',
                      textTransform: 'uppercase',
                      letterSpacing: '.04em',
                      marginBottom: '3px',
                    }}
                  >
                    Recent
                  </div>
                  <div
                    style={{
                      padding: '4px 0',
                      borderBottom: '1px solid #F0EDE8',
                      fontSize: '8px',
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}
                  >
                    <span>INV-2026-0001</span>
                    <span style={{ fontWeight: 600, color: 'var(--green)' }}>Paid</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
