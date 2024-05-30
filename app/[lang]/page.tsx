import { ISbStories, ISbStoryData } from "@storyblok/react/rsc";

import { env } from "@/env";
import { HeroSection } from "@/app/components/layout";
import { HomePageHeroCta } from "@/app/[lang]/components/home-page-hero-cta";
import { CourseSection } from "@/app/[lang]/components/course-list";
import { CourseStoryblok } from "@/types";
import { STORYBLOK_BASE_URL } from "@/constants";

const getAllCourses = async ({
  lang,
}: {
  lang: "en" | "nl";
}): Promise<ISbStories["data"]> => {
  const version = "published";
  const token = env.NEXT_PUBLIC_STORYBLOK_PREVIEW_TOKEN;
  const url = `${STORYBLOK_BASE_URL}?language=${lang}&version=${version}&token=${token}`;
  try {
    const response = await fetch(url, { next: { revalidate: 10 } });

    if (!response.ok) {
      throw new Error("Failed to fetch courses");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error("Failed to fetch courses");
  }
};

export default async function Home({
  params: { lang },
}: {
  params: { lang: "en" | "nl" };
}) {
  const { stories } = await getAllCourses({ lang });

  const courses = stories as ISbStoryData<CourseStoryblok>[];

  return (
    <>
      <HeroSection
        src="/hero-image.jpeg"
        alt="Hero Image"
        height={"full"}
        imageClassName="filter brightness-75"
      >
        <HomePageHeroCta />
      </HeroSection>
      {courses != null && <CourseSection courses={courses} />}
    </>
  );
}
