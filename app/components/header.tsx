"use client"

import { useEffect, useState } from "react"
import { clsx } from "clsx"
import { Navigation } from "@/app/components/navigation"

export const Header = ({ lang }: { lang: "en" | "nl" }) => {
  const [showHeader, setShowHeader] = useState(true)
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    let prevScrollPos = window.pageYOffset
    window.onscroll = () => {
      const currentScrollPos = window.pageYOffset
      setShowHeader(prevScrollPos > currentScrollPos || currentScrollPos < 80)
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
    "py-4 md:py-6",
    "gradient",
    "bg-opacity-90",

    scroll ? "bg-black" : "md:bg-transparent bg-black"
  )

  return (
    <header className={headerClasses}>
      <Navigation />
    </header>
  )
}
