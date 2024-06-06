import { ISbStory } from "@storyblok/react"

import { env } from "@/env"
import { STORYBLOK_BASE_URL } from "@/constants"

export const getHome = async ({
  lang,
}: {
  lang: "en" | "nl"
}): Promise<ISbStory["data"]> => {
  const version = "published"
  const token = env.NEXT_PUBLIC_STORYBLOK_PREVIEW_TOKEN
  const url = `${STORYBLOK_BASE_URL}/home?language=${lang}&version=${version}&token=${token}`
  try {
    const response = await fetch(url, { next: { revalidate: 10 } })

    if (!response.ok) {
      throw new Error("Failed to home content")
    }

    const data = await response.json()
    return data
  } catch (error) {
    throw new Error("Failed to fetch home")
  }
}
