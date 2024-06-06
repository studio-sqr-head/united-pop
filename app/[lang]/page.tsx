import { ISbStoryData } from "@storyblok/react/rsc"
import clsx from "clsx"

import { Container, HeroSection } from "@/app/components/structure"
import { HomePageHeroCta } from "@/app/[lang]/components/home-page-hero-cta"
import { CourseSection } from "@/app/[lang]/components/course-list"
import { CourseStoryblok } from "@/types"
import { getAllCourses } from "@/api/course"
import { getHome } from "@/api/page"

export default async function Home({
  params: { lang },
}: {
  params: { lang: "en" | "nl" }
}) {
  const { stories } = await getAllCourses({ lang })
  const { story } = await getHome({ lang })
  const allCourses = stories as ISbStoryData<CourseStoryblok>[]
  const home = story.content

  return (
    <div className="flex flex-col md:gap-8 gap-4">
      <HeroSection
        src={home?.heroImage?.filename}
        alt="Hero Image"
        height={"hero"}
        imageClassName="filter brightness-50 md:no-filter"
      >
        <Container
          className={clsx(
            "flex flex-col justify-end items-start h-full w-full",
            "absolute top-0 left-0 right-0 bottom-0"
          )}
        >
          <HomePageHeroCta
            heroHeaderText={home.heroHeaderText}
            heroSubtitleText={home.heroSubtitleText}
            heroPrimaryCtaButtonText={home.heroPrimaryCtaButtonText}
            heroSecondaryCtaButtonText={home.heroSecondaryCtaButtonText}
          />
        </Container>
      </HeroSection>

      {allCourses != null && <CourseSection courses={allCourses} />}
    </div>
  )
}
