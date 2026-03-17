'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home() {
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const initTelegram = async () => {
      if (typeof window !== 'undefined' && (window as any).Telegram) {
        const tg = (window as any).Telegram.WebApp
        tg.ready()

        const initData = tg.initData

        try {
          const res = await axios.post('/api/auth/telegram', {
            initData
          })

          setUser(res.data)
        } catch (err) {
          console.log('Auth Error', err)
        }
      }
    }

    initTelegram()
  }, [])

  return (
    <div className="h-screen flex items-center justify-center bg-black text-white">
      {user ? (
        <div className="text-center">
          <h1 className="text-2xl mb-2">Welcome 🚀</h1>
          <p>Name: {user.name}</p>
          <p>Telegram ID: {user.telegram_id}</p>
          <p>Username: {user.username}</p>
        </div>
      ) : (
        <h1 className="text-2xl">Loading...</h1>
      )}
    </div>
  )
}