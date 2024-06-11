import { Metadata } from "next"

import { getAbout } from "@/api/page"

export async function generateMetadata({
  params,
}: {
  params: { lang: "en" | "nl"; slug: string }
}): Promise<Metadata> {
  const { lang } = params
  const { aboutPageContent } = await getAbout({ lang })
  const { metaDescription, metaTitle, metaImage } = aboutPageContent.content
  return {
    title: metaTitle,
    description: metaDescription,
    twitter: {
      images: [
        {
          url: metaImage?.filename ?? "/favicon.ico",
          width: 800,
          height: 600,
          alt: metaImage?.alt ?? metaTitle ?? "About Image",
        },
      ],
      title: metaTitle,
    },
    openGraph: {
      type: "website",
      locale: lang,
      url: metaImage?.filename,
      title: metaTitle,
      description: metaDescription,
      images: [
        {
          url: metaImage?.filename ?? "/favicon.ico",
          width: 800,
          height: 600,
          alt: metaImage?.alt ?? metaTitle ?? "About Image",
        },
      ],
    },
  }
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>
}

export default Layout
