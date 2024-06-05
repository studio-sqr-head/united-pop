import { ISbStoryData } from "@storyblok/react/rsc"

import { HeroSection } from "@/app/components/structure"
import { HomePageHeroCta } from "@/app/[lang]/components/home-page-hero-cta"
import { CourseSection } from "@/app/[lang]/components/course-list"
import { CourseStoryblok } from "@/types"
import { getAllCourses } from "@/api/course"

export default async function Home({
  params: { lang },
}: {
  params: { lang: "en" | "nl" }
}) {
  const { stories } = await getAllCourses({ lang })
  const allCourses = stories as ISbStoryData<CourseStoryblok>[]

  return (
    <>
      <HeroSection
        src="/hero-image.jpeg"
        alt="Hero Image"
        height={"full"}
        imageClassName="filter brightness-50"
      >
        <HomePageHeroCta />
      </HeroSection>
      {allCourses != null && <CourseSection courses={allCourses} />}
    </>
  )
}
