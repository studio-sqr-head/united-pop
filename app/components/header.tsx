"use client"

import { useEffect, useState } from "react"
import { clsx } from "clsx"

import { Navigation } from "@/app/components/navigation"
import { AssetStoryblok } from "@/types"

export const Header = ({
  lang,
  logo,
}: {
  lang: "en" | "nl"
  logo: AssetStoryblok
}) => {
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return
    let prevScrollPos = window.scrollY
    const currentScrollPos = window.scrollY

    if (currentScrollPos > 80) {
      setScroll(true)
    }
    window.onscroll = () => {
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
      <Navigation logo={logo} />
    </header>
  )
}
