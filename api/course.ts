import { ISbStory, ISbStories, ISbStoryData } from "@storyblok/react"

import { env } from "@/env"
import { STORYBLOK_BASE_URL } from "@/constants"
import { CoursePageStoryblok, CourseStoryblok } from "@/types"

export const getCourseFees = async ({
  lang,
}: {
  lang: "en" | "nl"
}): Promise<{
  courseFees: ISbStoryData<CoursePageStoryblok>
}> => {
  if (env.NEXT_PUBLIC_STORYBLOK_PREVIEW_TOKEN === undefined) {
    throw new Error("Storyblok preview token is not set")
  }
  const version = "published"
  const token = env.NEXT_PUBLIC_STORYBLOK_PREVIEW_TOKEN
  const url = `${STORYBLOK_BASE_URL}/course?language=${lang}&version=${version}&token=${token}`

  try {
    const response = await fetch(url, { next: { revalidate: 10 } })

    if (!response.ok) {
      throw new Error("Failed to fetch course fees")
    }

    const { story } = await response.json()

    return {
      courseFees: story,
    }
  } catch (error) {
    throw new Error("Failed to fetch course fees")
  }
}
export const getCourseBySlug = async ({
  slug,
  lang,
}: {
  slug: string
  lang: "en" | "nl"
}): Promise<{
  course: ISbStoryData<CourseStoryblok>
}> => {
  const version = "published"
  const token = env.NEXT_PUBLIC_STORYBLOK_PREVIEW_TOKEN
  const url = `${STORYBLOK_BASE_URL}/courses/${slug}?&version=${version}&token=${token}`

  try {
    const response = await fetch(url, { next: { revalidate: 10 } })

    if (!response.ok) {
      throw new Error("Failed to fetch course")
    }

    const { story } = await response.json()

    return {
      course: story,
    }
  } catch (error) {
    throw new Error("Failed to fetch course")
  }
}

export const getAllCourses = async ({
  lang,
}: {
  lang: "en" | "nl"
}): Promise<ISbStories["data"]> => {
  const version = "published"
  const token = env.NEXT_PUBLIC_STORYBLOK_PREVIEW_TOKEN
  const url = `${STORYBLOK_BASE_URL}?language=${lang}&version=${version}&token=${token}&starts_with=courses/`
  try {
    const response = await fetch(url, { next: { revalidate: 10 } })

    if (!response.ok) {
      throw new Error("Failed to fetch courses")
    }

    const data = await response.json()

    return data
  } catch (error) {
    throw new Error("Failed to fetch courses")
  }
}
