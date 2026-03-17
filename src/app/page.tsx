"use client"

import { useEffect, useState } from "react"
import { init, viewport } from "@telegram-apps/sdk"

export default function Home() {
  const [status, setStatus] = useState("Loading...")

  useEffect(() => {
    try {
      init()

      if (viewport.isExpanded()) {
        setStatus("Telegram FOUND ✅")
      } else {
        setStatus("Opened outside Telegram ❌")
      }
    } catch (e) {
      console.log(e)
      setStatus("Telegram NOT DETECTED ❌")
    }
  }, [])

  return (
    <div style={{ padding: 20 }}>
      <h1>Messenger App 🚀</h1>
      <p>{status}</p>
    </div>
  )
}