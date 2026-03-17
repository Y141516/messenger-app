"use client"

import { useEffect, useState } from "react"

export default function Home() {
  const [status, setStatus] = useState("Loading...")

  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("WINDOW OK")

      const tg = (window as any).Telegram?.WebApp

      if (tg) {
        console.log("Telegram FOUND")

        tg.ready()
        tg.expand()

        setStatus("Telegram FOUND ✅")
        console.log("INIT DATA:", tg.initData)
      } else {
        console.log("Telegram NOT FOUND")
        setStatus("Telegram NOT FOUND ❌")
      }
    }
  }, [])

  return (
    <div style={{ padding: 20 }}>
      <h1>Messenger App 🚀</h1>
      <p>{status}</p>
    </div>
  )
}