'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home() {
  const [logs, setLogs] = useState<string[]>([])
  const [user, setUser] = useState<any>(null)

  const addLog = (msg: string) => {
    setLogs((prev) => [...prev, msg])
  }

  useEffect(() => {
    const initTelegram = async () => {
      if (typeof window !== 'undefined') {
        addLog('WINDOW OK')

        if ((window as any).Telegram) {
          addLog('Telegram FOUND')

          const tg = (window as any).Telegram.WebApp
          tg.ready()

          const initData = tg.initData
          addLog('INIT DATA: ' + initData.slice(0, 50))

          try {
            const res = await axios.post('/api/auth/telegram', {
              initData
            })

            addLog('API SUCCESS')
            setUser(res.data)
          } catch (err: any) {
            addLog('API ERROR: ' + err.message)
          }
        } else {
          addLog('Telegram NOT FOUND')
        }
      }
    }

    initTelegram()
  }, [])

  return (
    <div className="min-h-screen bg-black text-white p-4">
      {user ? (
        <div>
          <h1 className="text-xl mb-2">Welcome 🚀</h1>
          <p>Name: {user.name}</p>
          <p>ID: {user.telegram_id}</p>
        </div>
      ) : (
        <div>
          <h1 className="text-xl mb-4">Loading...</h1>

          <div className="text-sm bg-gray-900 p-3 rounded">
            {logs.map((log, i) => (
              <p key={i}>{log}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}