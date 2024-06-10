import { ISbStoryData } from "@storyblok/react"

import { GeneralStoryblok } from "@/types"
import { STORYBLOK_BASE_URL } from "@/constants"

import { env } from "@/env"

export const getGeneralContent = async (): Promise<{
  generalContent: ISbStoryData<GeneralStoryblok>
}> => {
  const version = "published"
  const token = env.NEXT_PUBLIC_STORYBLOK_PREVIEW_TOKEN
  const url = `${STORYBLOK_BASE_URL}/general?version=${version}&token=${token}`
  try {
    const response = await fetch(url, { next: { revalidate: 10 } })

    if (!response.ok) {
      throw new Error("Failed to get general content")
    }

    const { story } = await response.json()
    return {
      generalContent: story,
    }
  } catch (error) {
    throw new Error("Failed to fetch general content")
  }
}
