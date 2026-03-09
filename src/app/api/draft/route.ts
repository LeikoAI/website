import { draftMode } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret')
  const locale = request.nextUrl.searchParams.get('locale') ?? 'fi'
  const slug = request.nextUrl.searchParams.get('slug') ?? ''

  if (!process.env.PAYLOAD_DRAFT_SECRET || secret !== process.env.PAYLOAD_DRAFT_SECRET) {
    return new NextResponse('Invalid token', { status: 401 })
  }

  ;(await draftMode()).enable()

  const redirectPath = slug ? `/${locale}/${slug}` : `/${locale}`
  return NextResponse.redirect(new URL(redirectPath, request.url))
}
