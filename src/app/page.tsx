"use client"
import { useEffect, useState } from "react"

export default function Home() {
  const [status, setStatus] = useState("Loading...")

  useEffect(() => {
    // Poll every 200ms until Telegram WebApp object exists
    const interval = setInterval(() => {
      const tg = (window as any)?.Telegram?.WebApp
      if (tg) {
        tg.ready()        // marks WebApp as ready
        tg.expand()       // expands the WebApp to full height
        setStatus("Telegram FOUND ✅")
        clearInterval(interval)
        console.log("Telegram initData:", tg.initData)
      }
    }, 200)

    return () => clearInterval(interval)
  }, [])

  return (
    <div style={{ padding: 20 }}>
      <h1>Messenger App 🚀</h1>
      <p>{status}</p>
      {status === "Loading..." && <p>Please open this inside the Telegram mobile app using the Open button.</p>}
    </div>
  )
}