import { ReactNode } from "react"
import { Metadata } from "next"

import { getAbout } from "@/api/page"

export async function generateMetadata({
  params,
}: {
  params: { lang: "en" | "nl"; slug: string }
}): Promise<Metadata> {
  const { lang } = params
  const { aboutPageContent } = await getAbout({ lang })
  const { title, heroImage, description } = aboutPageContent.content
  return {
    title: `${title} | United Pop`,
    description,
    twitter: {
      images: [
        {
          url: heroImage?.filename ?? "/favicon.ico",
          width: 800,
          height: 600,
          alt: heroImage?.alt ?? title ?? "About Image",
        },
      ],
      title,
    },
    openGraph: {
      type: "website",
      locale: lang,
      url: heroImage?.filename,
      title: title,
      description,
      images: [
        {
          url: heroImage?.filename ?? "/favicon.ico",
          width: 800,
          height: 600,
          alt: heroImage?.alt ?? title ?? "About Image",
        },
      ],
    },
  }
}

export const AboutLayout = ({ children }: { children: ReactNode }) => children
