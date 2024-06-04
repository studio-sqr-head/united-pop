import { ISbStory, ISbStories } from "@storyblok/react";

import { env } from "@/env";
import { STORYBLOK_BASE_URL } from "@/constants";

export const getCourseBySlug = async ({
  slug,
  lang,
}: {
  slug: string;
  lang: "en" | "nl";
}): Promise<ISbStory["data"]> => {
  const version = "published";
  const token = env.NEXT_PUBLIC_STORYBLOK_PREVIEW_TOKEN;
  const url = `${STORYBLOK_BASE_URL}/courses/${slug}?&version=${version}&token=${token}`;

  try {
    const response = await fetch(url, { next: { revalidate: 10 } });

    if (!response.ok) {
      throw new Error("Failed to fetch course");
    }

    const data: ISbStory["data"] = await response.json();

    return data;
  } catch (error) {
    throw new Error("Failed to fetch course");
  }
};

export const getAllCourses = async ({
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
