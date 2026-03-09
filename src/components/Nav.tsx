'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export function Nav() {
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      navRef.current?.classList.toggle('scrolled', window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav ref={navRef}>
      <div className="nav-i">
        <Link href="/" className="nav-logo">
          <Image src="/logo-assets/logo_leiko.png" alt="Leiko" width={32} height={32} />
          Leiko
        </Link>
        <ul className="nav-l">
          <li><Link href="/#features">Features</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/#changelog">Changelog</Link></li>
          <li><Link href="/#start" className="n-cta">Join the waitlist</Link></li>
        </ul>
      </div>
    </nav>
  )
}
