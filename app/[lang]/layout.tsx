import type { ReactNode } from "react"
import type { Metadata } from "next"

import { env } from "@/env"
import { getHome } from "@/api/page"

export async function generateMetadata({
  params,
}: {
  params: { lang: "en" | "nl" }
}): Promise<Metadata> {
  const lang = params.lang
  const { homePageContent } = await getHome({ lang })
  const { metaDescription, metaTitle, metaImage } = homePageContent.content
  return {
    title: metaTitle,
    description: metaDescription,
    twitter: {
      images: [
        {
          url: metaImage?.filename ?? "/favicon.ico",
          width: 800,
          height: 600,
          alt: metaTitle,
        },
      ],
      title: metaTitle,
      description: metaDescription,
    },
    openGraph: {
      type: "website",
      locale: lang,
      url: `${env.NEXT_PUBLIC_BASE_URL}/${lang}`,
      title: metaTitle,
      description: metaDescription,
      images: [
        {
          url: metaImage?.filename ?? "/favicon.ico",
          width: 800,
          height: 600,
          alt: metaImage?.alt ?? metaDescription,
        },
      ],
    },
  }
}
export default function Layout(
  props: Readonly<{
    children: React.ReactNode
    params: { lang: "en" | "nl" }
    contact: ReactNode
  }>
) {
  const { children, contact } = props

  return (
    <>
      {children} {contact}
    </>
  )
}
