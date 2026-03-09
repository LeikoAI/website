'use client'

import { useEffect } from 'react'

export function RevealScript() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('vis')
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -20px 0px' },
    )

    document.querySelectorAll('.rv').forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return null
}
