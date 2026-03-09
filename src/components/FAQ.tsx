'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'What is Leiko and who is it for?',
    a: 'Leiko is an AI-powered business assistant for solo entrepreneurs, freelancers, and small service businesses. It combines invoicing, receipt management, tasks, calendar, email, time tracking, and CRM into one conversation-based mobile app. If you run a business largely by yourself and feel scattered across too many tools, Leiko is for you.',
  },
  {
    q: 'How much does it cost?',
    a: "Leiko is free during the private beta period. No credit card required. We'll announce pricing before the beta ends, and beta users will get preferential terms.",
  },
  {
    q: 'Is my data secure?',
    a: 'Yes. All data is stored in the EU (Supabase, EU region), encrypted at rest and in transit, and never shared with third parties. Leiko uses a human-in-the-loop system — every action requires your explicit confirmation before execution.',
  },
  {
    q: 'Which platforms are supported?',
    a: 'Leiko is a mobile-first app built with React Native (Expo). Currently available on iOS via TestFlight during the beta. Android and web versions are on the roadmap.',
  },
  {
    q: 'Can I use it in Finnish?',
    a: "Absolutely. Leiko's AI understands and responds in Finnish, English, and Swedish. You can mix languages freely — it adapts to you.",
  },
  {
    q: 'What integrations are available?',
    a: 'Currently live: Google Calendar (two-way sync), Gmail (read, search, AI summaries), and Camera OCR for receipts. On the roadmap: bank feed connections, accounting software export, and Slack integration.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  function toggle(i: number) {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section className="faq" id="faq">
      <div className="ctn">
        <div className="faq-header rv">
          <div className="lbl">FAQ</div>
          <h2>Common questions</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div className={`faq-item rv${i > 0 ? ` d${Math.min(i, 4)}` : ''}`} key={i}>
              <button
                className={`faq-q${openIndex === i ? ' open' : ''}`}
                onClick={() => toggle(i)}
              >
                {faq.q}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </button>
              <div className={`faq-a${openIndex === i ? ' open' : ''}`}>
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
