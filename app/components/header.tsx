"use client"

import { useEffect, useState } from "react"
import { clsx } from "clsx"
import { Navigation } from "@/app/components/navigation"

export const Header = ({ lang }: { lang: "en" | "nl" }) => {
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return
    let prevScrollPos = window.scrollY
    window.onscroll = () => {
      const currentScrollPos = window.scrollY
      setScroll(currentScrollPos > 80)
      prevScrollPos = currentScrollPos
    }
  }, [])

  const headerClasses = clsx(
    "fixed",
    "top-0",
    "left-0",
    "right-0",
    "z-50",
    "transition-all",
    "duration-300",
    "ease-in-out",
    "flex",
    "justify-between",
    "items-center",
    scroll &&
      "bg-black md:backdrop-filter md:backdrop-blur-lg md:bg-transparent"
  )

  return (
    <header className={headerClasses}>
      <Navigation />
    </header>
  )
}
