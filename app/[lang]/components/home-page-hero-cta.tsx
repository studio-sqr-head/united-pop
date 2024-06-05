"use client"

import { ArrowDownIcon } from "@heroicons/react/20/solid"

import { H1, Subheading } from "@/app/components/typography"
import { Button } from "@/app/components/button"
import { Container } from "@/app/components/structure"

export const HomePageHeroCta = () => {
  const scrollToCourses = () => {
    const element = document.getElementById("courses")
    element?.scrollIntoView({ behavior: "smooth", block: "nearest" })
  }

  return (
    <Container className="flex flex-col justify-between items-start gap-8 max-w-5xl py-16 px-8">
      <div className="flex flex-col gap-2 text-center md:text-left">
        <H1>Create your future today</H1>
        <Subheading variant="primary" as="div">
          We are an academy of music, media, and arts that offers a wide range
          of courses to get you started on your creative journey.
        </Subheading>
      </div>

      <div className="flex gap-4 md:flex-row flex-col w-full md:w-auto">
        <Button
          variant="primary"
          size={"large"}
          as="a"
          href={{ pathname: "/contact", query: { lang: "en" } }}
        >
          Enroll Now
        </Button>

        <Button
          variant="secondary"
          size={"large"}
          onClick={scrollToCourses}
          icon={<ArrowDownIcon className="h-6 w-6 stroke-current stroke-1" />}
          iconPosition="right"
        >
          View Courses
        </Button>
      </div>
    </Container>
  )
}
