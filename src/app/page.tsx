'use client'

import { useEffect } from 'react'
import axios from 'axios'

export default function Home() {
  useEffect(() => {
    const initTelegram = async () => {
      if (typeof window !== 'undefined' && (window as any).Telegram) {
        const tg = (window as any).Telegram.WebApp
        tg.ready()

        const initData = tg.initData

        const res = await axios.post('/api/auth/telegram', {
          initData
        })

        console.log('USER:', res.data)
      } else {
        console.log('Not inside Telegram')
      }
    }

    initTelegram()
  }, [])

  return (
    <div className="h-screen flex items-center justify-center bg-black text-white">
      <h1 className="text-2xl">Messenger App 🚀</h1>
    </div>
  )
}