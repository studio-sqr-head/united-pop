import { ISbStory, ISbStoryData } from "@storyblok/react"

import {
  AboutPageStoryblok,
  DataProtectionGuidelinesStoryblok,
  HomePageStoryblok,
} from "@/types"
import { env } from "@/env"
import { STORYBLOK_BASE_URL } from "@/constants"

export const getHome = async ({
  lang,
}: {
  lang: "en" | "nl"
}): Promise<{ homePageContent: ISbStoryData<HomePageStoryblok> }> => {
  const version = "published"
  const token = env.NEXT_PUBLIC_STORYBLOK_PREVIEW_TOKEN
  const url = `${STORYBLOK_BASE_URL}/home?language=${lang}&version=${version}&token=${token}`
  try {
    const response = await fetch(url, { next: { revalidate: 10 } })

    if (!response.ok) {
      throw new Error("Failed to fetch home content")
    }

    const { story } = await response.json()
    return {
      homePageContent: story,
    }
  } catch (error) {
    throw new Error("Failed to home content")
  }
}
export const getAbout = async ({
  lang,
}: {
  lang: "en" | "nl"
}): Promise<{ aboutPageContent: ISbStoryData<AboutPageStoryblok> }> => {
  const version = "published"
  const token = env.NEXT_PUBLIC_STORYBLOK_PREVIEW_TOKEN
  const url = `${STORYBLOK_BASE_URL}/about?language=${lang}&version=${version}&token=${token}`
  try {
    const response = await fetch(url, { next: { revalidate: 10 } })

    if (!response.ok) {
      throw new Error("Failed to get about content")
    }

    const { story } = await response.json()
    return {
      aboutPageContent: story,
    }
  } catch (error) {
    throw new Error("Failed to fetch about")
  }
}

export const getDataProtectionGuidelines = async ({
  lang,
}: {
  lang: "en" | "nl"
}): Promise<{
  dataProtectionGuidelinesPageContent: ISbStoryData<DataProtectionGuidelinesStoryblok>
}> => {
  const version = "published"
  const token = env.NEXT_PUBLIC_STORYBLOK_PREVIEW_TOKEN
  const url = `${STORYBLOK_BASE_URL}/data-protection-guidelines-page?language=${lang}&version=${version}&token=${token}`
  try {
    const response = await fetch(url, { next: { revalidate: 10 } })

    if (!response.ok) {
      throw new Error("Failed to get about content")
    }

    const { story } = await response.json()
    return {
      dataProtectionGuidelinesPageContent: story,
    }
  } catch (error) {
    throw new Error("Failed to fetch about")
  }
}
