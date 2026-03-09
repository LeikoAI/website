'use client'

import { useState } from 'react'

type WaitlistFormProps = {
  source: 'hero' | 'footer' | 'manifesto'
  placeholder?: string
  className?: string
  buttonText?: string
  inputClassName?: string
}

export function WaitlistForm({
  source,
  placeholder = 'Your email',
  className = '',
  buttonText = 'Join the waitlist',
  inputClassName = 'hero-email',
}: WaitlistFormProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return

    setStatus('loading')
    setMessage('')

    try {
      const baseUrl = typeof window !== 'undefined' ? '' : process.env.NEXT_PUBLIC_SITE_URL || ''
      const res = await fetch(`${baseUrl}/api/waitlist`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), source }),
      })

      const data = await res.json().catch(() => ({}))

      if (!res.ok) {
        setStatus('error')
        setMessage(data.errors?.[0]?.message || data.message || 'Something went wrong')
        return
      }

      setStatus('success')
      setEmail('')
      setMessage('Thanks! You\'re on the list.')
    } catch {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className={className}>
        <p style={{ color: 'var(--accent)', fontWeight: 600 }}>{message}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={className} style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={placeholder}
        className={inputClassName}
        disabled={status === 'loading'}
        required
      />
      <button type="submit" className="btn-main" disabled={status === 'loading'}>
        {status === 'loading' ? 'Joining...' : buttonText}
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </button>
      {message && status === 'error' && (
        <p style={{ width: '100%', color: 'var(--text-muted)', fontSize: 13 }}>{message}</p>
      )}
    </form>
  )
}
