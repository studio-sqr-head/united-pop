"use client"

import clsx from "clsx"
import { Button } from "@headlessui/react"

export const MetaDataChip = ({
  variant = "default",
  size = "medium",
  children,
  active = false,
  onClick,
}: {
  variant?: "primary" | "secondary" | "default" | "info" | "warning"
  size?: "small" | "medium" | "large"
  children: React.ReactNode
  active?: boolean
  onClick?: () => void
}) => {
  const baseClasses =
    "text-white rounded-full font-semibold inline-flex items-center whitespace-nowrap"
  const variantClasses = {
    info: "bg-blue-500",
    warning: "bg-yellow-500",
    default: "bg-gray-800",
    primary: "bg-primary",
    secondary: "border border-gray-800",
  }
  const sizeClasses = {
    small: "text-xs py-1 px-2",
    medium: "text-sm py-2 px-3",
    large: "text-base py-2 px-4",
  }

  const classes = `${baseClasses} ${variantClasses[variant]} ${
    sizeClasses[size]
  } ${active ? "bg-primary" : ""}`

  const buttonClasses =
    "data-[hover]:opacity-80 transition-opacity ease-in-out duration-200"

  if (onClick == null) {
    return <span className={classes}>{children}</span>
  }

  return (
    <Button
      as="button"
      onClick={onClick}
      className={clsx(classes, buttonClasses)}
    >
      {children}
    </Button>
  )
}
