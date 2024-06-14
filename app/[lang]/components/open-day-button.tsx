import { CalendarIcon } from "@heroicons/react/20/solid"

import { Button } from "@/app/components/button"
import { formatDate } from "@/utils"
import { MobileNavButton } from "@/app/components/bottom-navigation"

export const OpenDayButton = ({
  heroTertiaryCta,
  heroTertiaryCtaDate,
}: {
  heroTertiaryCta?: string
  heroTertiaryCtaDate?: string
}) => {
  return (
    <Button
      variant="secondary"
      size={"large"}
      as="a"
      scroll={false}
      fullWidth={false}
      className="md:flex hidden"
      href={{ pathname: "/contact", query: { lang: "en" } }}
      icon={<CalendarIcon className="h-6 w-6 stroke-current stroke-1" />}
    >
      {heroTertiaryCta}
      <div className="text-sm text-orange font-bold ml-2">
        {formatDate({ date: heroTertiaryCtaDate, lang: "en" })}
      </div>
    </Button>
  )
}

export const MobileOpenDayButton = ({
  heroTertiaryCta,
  heroTertiaryCtaDate,
}: {
  heroTertiaryCta?: string
  heroTertiaryCtaDate?: string
}) => {
  return (
    <MobileNavButton
      as="a"
      href={{ pathname: "/contact", query: { lang: "en" } }}
    >
      <div className="relative flex items-center justify-center gap-1 flex-col">
        <CalendarIcon className="h-6 w-6 stroke-current stroke-1 text-secondary" />

        <div className="flex">{heroTertiaryCta}</div>
        <div className="absolute top-0 -right-5 bg-primary text-white rounded-full px-2 py-1 text-xs font-bold">
          {formatDate({
            date: heroTertiaryCtaDate,
            lang: "en",
            options: {
              month: "short",
              day: "numeric",
            },
          })}
        </div>
      </div>
    </MobileNavButton>
  )
}
