"use client"

import { ArrowDownIcon } from "@heroicons/react/20/solid"

import { H1, Subheading } from "@/app/components/typography"
import { Button } from "@/app/components/button"
import { OpenDayButton } from "@/app/[lang]/components/open-day-button"
import { EnrollButton } from "@/app/[lang]/components/enroll-button"

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
    <div className="flex flex-col gap-8 md:mb-16 max-w-3xl px-4 md:px-0 mx-auto md:mx-0">
      <div className="flex flex-col gap-2">
        <H1>{heroTitle}</H1>

        <Subheading variant="primary" as="div">
          {heroSubtitle}
        </Subheading>
      </div>

      <div className="flex flex-col gap-4 md:gap-0 md:flex-row md:gap-4">
        <OpenDayButton
          heroTertiaryCta={heroTertiaryCta}
          heroTertiaryCtaDate={heroTertiaryCtaDate}
        />

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

        <EnrollButton
          text={heroPrimaryCta}
          params={{ lang: "en" }}
          className="hidden md:flex"
        />
      </div>
    </div>
  )
}
