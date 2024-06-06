"use client"

import { ArrowDownIcon } from "@heroicons/react/20/solid"

import { H1, Subheading } from "@/app/components/typography"
import { Button } from "@/app/components/button"

export const HomePageHeroCta = ({
  heroHeaderText = "Hero Header Text",
  heroSubtitleText = "Hero Subtitle Text",
  heroPrimaryCtaButtonText = "Enroll Now",
  heroSecondaryCtaButtonText = "Browse Courses",
}: {
  heroHeaderText: string
  heroSubtitleText: string
  heroPrimaryCtaButtonText: string
  heroSecondaryCtaButtonText: string
}) => {
  const scrollToCourses = () => {
    const element = document.getElementById("courses")
    element?.scrollIntoView({ behavior: "smooth", block: "nearest" })
  }

  return (
    <div className="flex flex-col gap-8 md:mb-16 max-w-3xl justify-center items-center">
      <div className="flex flex-col gap-2 text-center md:text-left">
        <H1>{heroHeaderText}</H1>
        <div className="hidden md:block">
          <Subheading variant="secondary" as="div">
            {heroSubtitleText}
          </Subheading>
        </div>
      </div>

      <div className="flex gap-4 md:flex-row flex-col w-full">
        <Button
          variant="primary"
          size={"large"}
          as="a"
          scroll={false}
          href={{ pathname: "/contact", query: { lang: "en" } }}
        >
          {heroPrimaryCtaButtonText}
        </Button>

        <Button
          variant="secondary"
          size={"large"}
          onClick={scrollToCourses}
          icon={<ArrowDownIcon className="h-6 w-6 stroke-current stroke-1" />}
          iconPosition="right"
        >
          {heroSecondaryCtaButtonText}
        </Button>
      </div>
    </div>
  )
}
