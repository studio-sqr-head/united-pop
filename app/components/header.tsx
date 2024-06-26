"use client"

import { useEffect, useLayoutEffect, useState } from "react"
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
    window.onscroll = () => {
      const currentScrollPos = window.scrollY
      setScroll(currentScrollPos > 80)
      prevScrollPos = currentScrollPos
    }
  }, [])

  useLayoutEffect(() => {
    if (typeof window === "undefined") return
    const currentScrollPos = window.scrollY

    if (currentScrollPos > 80) {
      setScroll(true)
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

    "md:bg-transparent",
    scroll && "bg-black md:backdrop-blur-3xl"
  )

  return (
    <header className={headerClasses}>
      <Navigation logo={logo} />
    </header>
  )
}
