"use client"

import { ArrowDownIcon, CalendarIcon } from "@heroicons/react/20/solid"

import { H1, Subheading } from "@/app/components/typography"
import { Button } from "@/app/components/button"
import { formatDate } from "@/utils"

export const HomePageHeroCta = ({
  heroTitle,
  heroSubtitle,
  heroPrimaryCta,
  heroSecondaryCta,
  heroTertiaryCta,
  heroTertiaryCtaDate,
}: {
  heroTitle?: string
  heroSubtitle?: string
  heroPrimaryCta?: string
  heroSecondaryCta?: string
  heroTertiaryCta?: string
  heroTertiaryCtaDate?: string
}) => {
  const scrollToCourses = () => {
    const element = document.getElementById("courses")
    element?.scrollIntoView({ behavior: "smooth", block: "nearest" })
  }

  return (
    <div className="flex flex-col gap-8 md:mb-16 max-w-3xl">
      <div className="flex flex-col gap-2">
        <H1>{heroTitle}</H1>

        <Subheading variant="primary" as="div">
          {heroSubtitle}
        </Subheading>
      </div>

      <div className="flex flex-col gap-4 md:gap-0 md:flex-row md:gap-4">
        <Button
          variant="secondary"
          size={"large"}
          as="a"
          scroll={false}
          fullWidth={false}
          href={{ pathname: "/contact", query: { lang: "en" } }}
          icon={<CalendarIcon className="h-6 w-6 stroke-current stroke-1" />}
        >
          {heroTertiaryCta}
          <div className="text-sm text-orange font-bold ml-2">
            {formatDate({ date: heroTertiaryCtaDate, lang: "en" })}
          </div>
        </Button>

        <Button
          variant="secondary"
          size={"large"}
          fullWidth={false}
          onClick={scrollToCourses}
          icon={<ArrowDownIcon className="h-6 w-6 stroke-current stroke-1" />}
          iconPosition="right"
        >
          {heroSecondaryCta}
        </Button>

        <Button
          variant="primary"
          size={"large"}
          as="a"
          scroll={false}
          href={{ pathname: "/contact", query: { lang: "en" } }}
          fullWidth={false}
        >
          {heroPrimaryCta}
        </Button>
      </div>
    </div>
  )
}
