"use client"

import { clsx } from "clsx"
import { Navigation } from "@/app/components/navigation"

export const Header = ({ lang }: { lang: "en" | "nl" }) => {
  const headerClasses = clsx(
    "z-30 text-white w-full top-0 left-0 right-0 fixed flex items-center justify-between bg-black"
  )

  return (
    <header className={headerClasses}>
      <Navigation />
    </header>
  )
}
