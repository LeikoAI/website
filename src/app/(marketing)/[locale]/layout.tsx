import type { Metadata } from 'next'
import { Hanken_Grotesk } from 'next/font/google'
import { notFound } from 'next/navigation'
import '../../globals.css'

const LOCALES = ['fi', 'en']

const hankenGrotesk = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-hanken',
  display: 'swap',
})

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }))
}

export const metadata: Metadata = {
  title: 'Leiko — Clarity for the independent business',
  description: 'Leiko is the AI layer that turns entrepreneurial chaos into calm, focused action.',
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!LOCALES.includes(locale)) {
    notFound()
  }

  return (
    <html lang={locale} className={hankenGrotesk.variable}>
      <body className={hankenGrotesk.className}>{children}</body>
    </html>
  )
}
