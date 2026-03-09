import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret')

  if (!process.env.PAYLOAD_DRAFT_SECRET || secret !== process.env.PAYLOAD_DRAFT_SECRET) {
    return NextResponse.json({ error: 'Invalid secret' }, { status: 401 })
  }

  const slug = request.nextUrl.searchParams.get('slug')

  if (slug) {
    revalidatePath(`/fi/${slug}`, 'page')
    revalidatePath(`/en/${slug}`, 'page')
  } else {
    revalidatePath('/fi', 'page')
    revalidatePath('/en', 'page')
  }

  return NextResponse.json({ revalidated: true, slug: slug ?? 'all', at: new Date().toISOString() })
}
