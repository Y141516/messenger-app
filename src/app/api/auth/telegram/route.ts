import { NextRequest, NextResponse } from 'next/server'
import { verifyTelegramWebAppData } from '@/lib/telegram'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { initData } = body

  const isValid = verifyTelegramWebAppData(
    initData,
    process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN!
  )

  if (!isValid) {
    return NextResponse.json({ error: 'Invalid auth' }, { status: 401 })
  }

  const params = new URLSearchParams(initData)
  const user = JSON.parse(params.get('user') || '{}')

  return NextResponse.json({
    telegram_id: user.id,
    name: user.first_name,
    username: user.username
  })
}