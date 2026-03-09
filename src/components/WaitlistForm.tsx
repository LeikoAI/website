'use client'

import { useState, type FormEvent } from 'react'

export function WaitlistForm({
  inputClassName,
  variant = 'hero',
}: {
  inputClassName?: string
  variant?: 'hero' | 'footer'
}) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'exists' | 'error'>('idle')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!email || status === 'loading') return

    setStatus('loading')

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: variant }),
      })

      const data = await res.json()

      if (res.status === 201) {
        setStatus('success')
      } else if (res.status === 200 && data.message === 'Already on the list') {
        setStatus('exists')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <p style={{ color: 'var(--acc)', fontWeight: 600, fontSize: 15 }}>
        Thanks! We&apos;ll be in touch soon.
      </p>
    )
  }

  if (status === 'exists') {
    return (
      <p style={{ color: 'var(--acc)', fontWeight: 600, fontSize: 15 }}>
        You&apos;re already on the list! We&apos;ll be in touch.
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={variant === 'hero' ? 'hero-form' : 'cr'}>
      <input
        type="email"
        className={inputClassName ?? 'hero-input'}
        placeholder={variant === 'footer' ? 'you@company.fi' : 'Your email'}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        disabled={status === 'loading'}
      />
      <button type="submit" className="btn btn-p" disabled={status === 'loading'}>
        {status === 'loading' ? 'Joining...' : 'Join the waitlist'}
        {status !== 'loading' && (
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        )}
      </button>
      {status === 'error' && (
        <p style={{ color: 'var(--red)', fontSize: 13, width: '100%', textAlign: 'center' }}>
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  )
}
