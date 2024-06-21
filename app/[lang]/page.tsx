import { ISbStoryData } from "@storyblok/react/rsc"
import clsx from "clsx"

import { Container, HeroSection } from "@/app/components/structure"
import { HomePageHeroCta } from "@/app/[lang]/components/home-page-hero-cta"
import { CourseSection } from "@/app/[lang]/components/course-list"
import { CourseStoryblok } from "@/types"
import { getAllCourses } from "@/api/course"
import { getHome } from "@/api/page"
import { BottomNavigation } from "@/app/components/bottom-navigation"
import { MobileOpenDayButton } from "./components/open-day-button"
import { MobileEnrollButton } from "./components/enroll-button"

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
    heroTertiaryCta,
    heroTertiaryCtaDate,
  } = homePageContent?.content
  const allCourses = stories as ISbStoryData<CourseStoryblok>[]

  return (
    <div className="flex flex-col md:gap-8 gap-4">
      {/* desktop */}
      <HeroSection
        src={heroImage?.filename}
        alt={heroImage?.alt ?? "Hero Image"}
        height={"hero"}
        imageClassName="brightness-50 md:brightness-100 object-cover object-center"
        sectionClassName="hidden md:block"
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
            heroTertiaryCta={heroTertiaryCta}
            heroTertiaryCtaDate={heroTertiaryCtaDate}
          />
        </Container>
      </HeroSection>

      {/* mobile */}
      <div className="md:hidden">
        {/* gradient upper part of image into background */}
        <HeroSection
          src={heroImage?.filename}
          alt={heroImage?.alt ?? "Hero Image"}
          height={"banner"}
          imageClassName="object-contain object-center relative"
        >
          <div className="absolute top-0 left-0 right-0 h-[7rem] bg-gradient-to-b from-black to-transparent" />
        </HeroSection>
        <Container className="h-[calc(100vh)] flex flex-col gap-4">
          <HomePageHeroCta
            heroTitle={heroTitle}
            heroSubtitle={heroSubtitle}
            heroPrimaryCta={heroPrimaryCta}
            heroSecondaryCta={heroSecondaryCta}
            heroTertiaryCta={heroTertiaryCta}
            heroTertiaryCtaDate={heroTertiaryCtaDate}
          />
        </Container>{" "}
      </div>

      {allCourses != null && (
        <CourseSection
          courses={allCourses}
          courseSectionTitle={courseSectionTitle}
          courseSectionSubtitle={courseSectionSubtitle}
        />
      )}

      <BottomNavigation>
        <MobileOpenDayButton
          heroTertiaryCta={heroTertiaryCta}
          heroTertiaryCtaDate={heroTertiaryCtaDate}
        />
        <MobileEnrollButton text={heroPrimaryCta} params={{ lang }} />
      </BottomNavigation>
    </div>
  )
}
