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
  const { homePageContent } = await getHome({ lang })
  const {
    heroImage,
    heroPrimaryCta,
    courseSectionTitle,
    courseSectionSubtitle,
    heroSecondaryCta,
    heroSubtitle,
    heroTitle,
  } = homePageContent?.content
  const allCourses = stories as ISbStoryData<CourseStoryblok>[]

  return (
    <div className="flex flex-col md:gap-8 gap-4">
      <HeroSection
        src={heroImage?.filename}
        alt={heroImage?.alt ?? "Hero Image"}
        height={"hero"}
        imageClassName="filter brightness-50 md:brightness-100"
      >
        <Container
          className={clsx(
            "flex flex-col md:justify-end md:items-start h-full w-full justify-center items-center",
            "absolute top-0 left-0 right-0 bottom-0"
          )}
        >
          <HomePageHeroCta
            heroTitle={heroTitle}
            heroSubtitle={heroSubtitle}
            heroPrimaryCta={heroPrimaryCta}
            heroSecondaryCta={heroSecondaryCta}
          />
        </Container>
      </HeroSection>

      {allCourses != null && (
        <CourseSection
          courses={allCourses}
          courseSectionTitle={courseSectionTitle}
          courseSectionSubtitle={courseSectionSubtitle}
        />
      )}
    </div>
  )
}
