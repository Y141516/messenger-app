"use client"

import { useEffect, useState } from "react"

export default function Home() {
  const [status, setStatus] = useState("Loading...")

  useEffect(() => {
    const checkTelegram = () => {
      const tg = (window as any)?.Telegram?.WebApp

      if (tg && tg.initData) {
        tg.ready()
        tg.expand()
        setStatus("Telegram FOUND ✅")
        console.log("INIT DATA:", tg.initData)
      } else {
        setStatus("Waiting for Telegram...")
        setTimeout(checkTelegram, 500) // retry
      }
    }

    checkTelegram()
  }, [])

  return (
    <div style={{ padding: 20 }}>
      <h1>Messenger App 🚀</h1>
      <p>{status}</p>
    </div>
  )
}