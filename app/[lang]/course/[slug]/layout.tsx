import type { ReactNode } from "react"
import type { Metadata } from "next"

import { env } from "@/env"
import { getCourseBySlug } from "@/api/course"

export async function generateMetadata({
  params,
}: {
  params: { lang: "en" | "nl"; slug: string }
}): Promise<Metadata> {
  const { lang, slug } = params
  const { story: course } = await getCourseBySlug({ lang, slug })
  const { content } = course
  const { title, description, image } = content

  return {
    title: `${title} | United Pop`,
    description,
    keywords: ["music", "media", "academy"],
    twitter: {
      images: [
        {
          url: image?.filename,
          width: 800,
          height: 600,
          alt: image?.alt ?? title ?? "Course Image",
        },
      ],
      title,
      description,
    },
    openGraph: {
      type: "website",
      locale: lang,
      url: `${env.NEXT_PUBLIC_BASE_URL}/${lang}/course/${slug}`,
      title: "United Pop",
      description: "United Pop is an academy for music and media.",
      images: [
        {
          url: image?.filename,
          width: 800,
          height: 600,
          alt: image?.alt ?? title ?? "Course Image",
        },
      ],
    },
  }
}

export default function Layout(
  props: Readonly<{
    children: ReactNode
  }>
) {
  const { children } = props

  return <>{children}</>
}
