"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function NotFound() {
  const router = useRouter()

  useEffect(() => {
    if (Math.random() > 0.5) {
      router.push("https://google.com/")
    }
  }, [])

  return (
    <div>
      my custom not-found page...
    </div>
  )
}
