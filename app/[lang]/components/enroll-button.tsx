"use client"

import { MobileNavButton } from "@/app/components/bottom-navigation"

import { Button } from "@/app/components/button"
import { CheckIcon } from "@heroicons/react/20/solid"

export const EnrollButton = ({
  params,
  text = "Enroll",
  className = "",
}: {
  params: {
    lang: "en" | "nl"
  }
  text?: string
  className?: string
}) => {
  return (
    <Button
      variant="primary"
      size="medium"
      fullWidth={false}
      className={className}
      scroll={false}
      as="a"
      href={{
        pathname: "/contact",
        query: { lang: params.lang },
      }}
    >
      {text}
    </Button>
  )
}

export const MobileEnrollButton = ({
  params,
  text = "Enroll",
}: {
  params: {
    lang: "en" | "nl"
  }
  text?: string
}) => {
  return (
    <MobileNavButton
      as="a"
      href={{ pathname: "/contact", query: { lang: params.lang } }}
    >
      <CheckIcon className="h-6 w-6 stroke-current stroke-1 text-secondary" />
      <span>{text}</span>
    </MobileNavButton>
  )
}
