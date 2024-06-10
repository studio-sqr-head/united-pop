"use client"

import { ArrowDownIcon } from "@heroicons/react/20/solid"

import { H1, Subheading } from "@/app/components/typography"
import { Button } from "@/app/components/button"

export const HomePageHeroCta = ({
  heroTitle = "Hero Header Text",
  heroSubtitle = "Hero Subtitle Text",
  heroPrimaryCta = "Enroll Now",
  heroSecondaryCta = "Browse Courses",
}: {
  heroTitle?: string
  heroSubtitle?: string
  heroPrimaryCta?: string
  heroSecondaryCta?: string
}) => {
  const scrollToCourses = () => {
    const element = document.getElementById("courses")
    element?.scrollIntoView({ behavior: "smooth", block: "nearest" })
  }

  return (
    <div className="flex flex-col gap-8 md:mb-16 max-w-3xl justify-center items-center">
      <div className="flex flex-col gap-2">
        <H1>{heroTitle}</H1>

        <Subheading variant="primary" as="div">
          {heroSubtitle}
        </Subheading>
      </div>

      <div className="flex gap-4 md:flex-row flex-col w-full">
        <Button
          variant="primary"
          size={"large"}
          as="a"
          scroll={false}
          href={{ pathname: "/contact", query: { lang: "en" } }}
        >
          {heroPrimaryCta}
        </Button>

        <Button
          variant="secondary"
          size={"large"}
          onClick={scrollToCourses}
          icon={<ArrowDownIcon className="h-6 w-6 stroke-current stroke-1" />}
          iconPosition="right"
        >
          {heroSecondaryCta}
        </Button>
      </div>
    </div>
  )
}
