import { ISbStoryData } from "@storyblok/react"

import { FaqStoryblok } from "@/types"
import { env } from "@/env"
import { STORYBLOK_BASE_URL } from "@/constants"

export const getAllFaqs = async ({
  lang,
}: {
  lang: "en" | "nl"
}): Promise<{ allFaqs: ISbStoryData<FaqStoryblok>[] }> => {
  const version = "published"
  const token = env.NEXT_PUBLIC_STORYBLOK_PREVIEW_TOKEN
  const url = `${STORYBLOK_BASE_URL}?${lang}&version=${version}&token=${token}&starts_with=faqs/`
  try {
    const response = await fetch(url, { next: { revalidate: 10 } })

    if (!response.ok) {
      throw new Error("Failed to fetch faqs")
    }

    const { stories } = await response.json()
    return { allFaqs: stories }
  } catch (error) {
    throw new Error("Failed to fetch faqs")
  }
}
