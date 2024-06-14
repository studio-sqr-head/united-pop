import NextLink, { LinkProps } from "next/link"
import { Button } from "@headlessui/react"
import clsx from "clsx"
import { UrlObject } from "url"

export const MobileNavButton = ({
  children,
  onClick,
  as,
  href,
}: {
  children?: React.ReactNode
  onClick?: () => void
  as?: "a" | "button"
  href?: LinkProps<UrlObject | string>["href"]
}) => {
  const baseClasses =
    "flex flex-col gap-1 items-center justify-center h-full w-full text-secondary font-bold text-sm p-2"
  const hoverClasses = "data-[hover]:bg-gray-800"
  const className = clsx(baseClasses, hoverClasses)

  if (as === "a" && href) {
    return (
      <NextLink href={href} legacyBehavior passHref>
        <Button className={className}>{children}</Button>
      </NextLink>
    )
  }
  return (
    <Button type="button" className={className} onClick={onClick}>
      {children}
    </Button>
  )
}

export const BottomNavigation = ({
  children,
}: {
  children?: React.ReactNode
}) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 z-45 w-full bg-black border-t border-slate border-opacity-50 p-2">
      <div className="grid h-full grid-cols-2 w-full mx-auto">{children}</div>
    </div>
  )
}
