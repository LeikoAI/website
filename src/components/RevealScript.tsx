'use client'

import { useEffect } from 'react'

export function RevealScript() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    )
    reveals.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]')
    const handler = (e: Event) => {
      e.preventDefault()
      const target = document.querySelector((e.currentTarget as HTMLAnchorElement).getAttribute('href') || '')
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
    links.forEach((link) => link.addEventListener('click', handler))
    return () => links.forEach((link) => link.removeEventListener('click', handler))
  }, [])

  return null
}
